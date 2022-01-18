#!/usr/bin/env python3

import json
import sys

urls = []

with open(sys.argv[1], "r") as file:
    newline_break = ""
    for readline in file: 
        urls.append(readline.strip())

json_generated = '''{
  "data": ['''
id = int(sys.argv[3])
title = sys.argv[2]
count = 0

for url in urls:
    print(url)
    count+=1
    local = ''' { "id": ''' + str(id) + \
    ''', "title": "''' + title + '''",''' \
    '''"filter":"",''' + \
    '''"imageUrl":["''' + url + '''"],''' + \
    '''"price":"",''' + \
    '''"sales":"",''' + \
    '''"material":"",''' + \
    '''"location":"",''' + \
    '''"other":""''' + \
    '''}'''
    id+=1
    if count != len(urls):
        local += ',\n'
    json_generated += local
    
json_generated += (''' ]}''')

print(json_generated)
print("\nThe type of object is: ", type(json_generated))
stud_obj = json.loads(json_generated)
print(stud_obj)
print("The type of object is: ", type(stud_obj))
json_obj = json.dumps(stud_obj)
print(json_obj)
print("The type of object is: ", type(json_obj))

with open('out.json', 'w') as outfile:
    json.dump(stud_obj, outfile)