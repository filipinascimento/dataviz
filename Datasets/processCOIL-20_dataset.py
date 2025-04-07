# NOTE: the following will download and unzip the coil data from here
# http://www.cs.columbia.edu/CAVE/databases/SLAM_coil-20_coil-100/coil-20/coil-20-unproc.zip
# into the directory ./data/coil-20-unproc/
import urllib
import zipfile
import numpy as np
import re
import pandas as pd

processed = True
if processed:
    url = "http://www.cs.columbia.edu/CAVE/databases/SLAM_coil-20_coil-100/coil-20/coil-20-proc.zip"
else:
    url = "http://www.cs.columbia.edu/CAVE/databases/SLAM_coil-20_coil-100/coil-20/coil-20-unproc.zip"
extract_dir = "./data/"

zip_path, _ = urllib.request.urlretrieve(url)
with zipfile.ZipFile(zip_path, "r") as f:
    f.extractall(extract_dir)

# treat images as vectors
from PIL import Image
import os

if(processed):
    data_directory = "./data/coil-20-proc/"
else:
    data_directory = "./data/coil-20-unproc/"
file_names = [n for n in os.listdir(data_directory) if n[-3:] == "png"]
file_names.sort()

X = []
imgs = []
for file_name in file_names:
    image = Image.open(data_directory + file_name)
    l, h = image.size
    imgs.append(image)
    x = np.array(image)
    X.append(x.reshape(x.shape[0] * x.shape[1]))

X = np.array(X)
# create a dataframe

# name properties p1,p2
df = pd.DataFrame(X, columns=["p" + str(i) for i in range(X.shape[1])])
# filenames: 'obj1__0.png'
df["Filename"] = file_names
def get_object_image(filename):
    match = re.search(r'obj(\d+)__(\d+)\.png', filename)
    if match:
        obj_num = int(match.group(1))
        frame_num = int(match.group(2))
        return (obj_num, frame_num)
    return (float('inf'), float('inf'))  # fallback for malformed names

df["Object"], df["Image"] = zip(*df["Filename"].apply(get_object_image))

# sort by Object and Image to ensure the order is consistent
df.sort_values(by=["Object", "Image"], inplace=True)
# reset index after sorting
df.reset_index(drop=True, inplace=True)

if(processed):
    df.to_feather("coil-20-proc.feather")
else:
    df.to_feather("coil-20-unproc.feather")
df.head()
