# -*- coding: utf-8 -*-
# Filename: listFiles.py
import os
import json
import re
import pre_output as pre

tagdir = '\client'
homedir = os.path.dirname(os.path.abspath('listFles.py'))
contentDir = homedir + tagdir
contentDir = os.path.dirname(contentDir)
contentDir = 'client'
dirlenth = len(contentDir.split('\\'))


'''
i = 1
content = os.listdir(contentDir)
tree = os.walk(contentDir, topdown=False)
for root, dirs, files in tree:
    #print(i,":")
    i = i+1
    print ("root:",root)
    for name in files:
        pass
        print(os.path.join(root, name))
        print("file:",name)
    for name in dirs:
        pass
        print(os.path.join(root, name))
        print ("dir:",name)
    print ("****************************")
'''

fileTree = {}


def build_JSONnode(arr):
    nodeName = arr[0]
    nodeDir = arr[1]
    nodeFiles = arr[2]
    node = {"name": cut_name(nodeName), "dirs": nodeDir, "files": nodeFiles}
    return node


def build_JSONtree(node):
    global fileTree
    name = node["name"]
    nameStr = name.split('/')
    #print (len(nameStr))
    if (len(nameStr) == 1):
        fileTree = node
        fileTree["dirs"] = []
    elif (len(nameStr) == 3):
        fileTree["dirs"].append(node)
    else:
        return


pre.print_header()


def cut_name(name):
    name = re.sub(r'\\','/',name,0)
    #print ('name',name)
    name1 = re.sub(r'client/','/client/',name,1)
    #print ('name1',name1,'\n')
    return name1

tree = os.walk(contentDir, topdown=True)
return_header()
for i in tree:
    node = build_JSONnode(i)
    build_JSONtree(node)

print(json.dumps(fileTree))

