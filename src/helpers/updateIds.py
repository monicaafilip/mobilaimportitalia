#!/usr/bin/env python3

import json
import sys

id = int(sys.argv[2])
fin = open(sys.argv[1], 'r+') 
data = json.load(fin)
for val in data:
    val['id'] = id
    id = id + 1

fout = open('modified.json', "w")
json.dump(data, fout)