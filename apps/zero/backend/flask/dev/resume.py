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


  return {
    "data":{},
    "code": CONFIGS.endpointMsgCodes["success"]
  },200
