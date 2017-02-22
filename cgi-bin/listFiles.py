# -*- coding: utf-8 -*-
import os
import json
import re

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


def return_header():
    print('Accept: application/json, text/javascript, */*; q=0.01')
    print('Content-Type: application/json')
    print('Access-Control-Allow-Credentials: true')
    print('Access-Control-Allow-Headers: accessToken,Content-Type')
    print('Access-Control-Allow-Origin: *' + '\n')


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

