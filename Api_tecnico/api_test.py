from email.utils import parsedate
import re
import requests
from bs4 import BeautifulSoup

import json
""" 
response_API = requests.get('https://api.covid19india.org/state_district_wise.json')
print(response_API.status_code)
"""

def canteenApi():
    canteen = requests.get("https://fenix.tecnico.ulisboa.pt/api/fenix/v1/canteen")

    if canteen.status_code:
        print("CANTEEN API -> ERROR: FAILED REQUEST\n")
        return -1

    parsed = json.loads(canteen.text)
    
    for dic in parsed:
        for key in dic:
            if(dic[key] != ""):
                print(key, "->", dic[key])
        print("\n")

def contactsApi():
    contacts = requests.get("https://fenix.tecnico.ulisboa.pt/api/fenix/v1/contacts")

    if contacts.status_code:
        print("CONTACTS API -> ERROR: FAILED REQUEST\n")
        return -1

    parsed = json.loads(contacts.text)

    for dic in parsed:
        for key in dic:
            if(dic[key] != ""):
                print(key, "->", dic[key])
        print("\n")

def spacesApi():
    spaces = requests.get("https://fenix.tecnico.ulisboa.pt/api/fenix/v1/spaces/2448131365167")

    parsed = json.loads(spaces.text)
    
    for label in parsed:
        if(label == "events"):
            for dic in parsed[label]:
                for key in dic:
                    print(key, "->", dic[key])
        print("\n")
            

coursesApi()