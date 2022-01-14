from bs4 import BeautifulSoup
import requests
from flask import Flask

def TokyoRevengers():
    tokyo_revengers = requests.get("https://tokyorevengersmanga.com/")
    tr_soup = BeautifulSoup(tokyo_revengers.text, 'html.parser')
    chapter_list = str(tr_soup.find(class_= "su-posts su-posts-list-loop"))

    list = chapter_list.split("\n")

    f = open("lastchapter.txt", "r")

    if(f.read() != list[3]):
        print("New Tokyo Revengers chapter\n")
        f = open("lastchapter.txt", "w")
        f.write(list[3])
    else:
        print("No new Tokyo Revengers chapter :(")

    f.close()
TokyoRevengers()
