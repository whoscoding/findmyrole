import base64
import os
from pathlib import Path
from configs import CONFIGS
import requests;
import math
from flask import Blueprint,request
import json
from my_util import print_if_dev

myresume =Blueprint("resume", __name__, url_prefix="/resume")



@myresume.route('/analyze',methods=['POST'])
def analyze_resume():
  data = request.json['data']
  directory = os.getcwd() + "\\tmp"

  Path(directory).mkdir(parents=True, exist_ok=True)
  with open(directory+ "\\sample.pdf","wb") as f:
    file_data = data["resume"].encode()
    content = base64.b64decode(file_data)
    f.write(content)

  return {
    "data":{},
    "code": CONFIGS.endpointMsgCodes["success"]
  },200
