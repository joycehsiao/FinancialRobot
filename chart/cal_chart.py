#!/usr/bin/env python
# coding: utf-8
from chart.models import FiveIndexByMonth
import pandas as pd
import json
import datetime
def count_month(y,m):
    return ((y-2001)*12+m-1)

# 我們的建議
def draw_predict(num):
    data = pd.DataFrame(list(FiveIndexByMonth.objects.all().values()))
    total = 10
    monthly_Settlement = []
    for i in range(num,data.shape[0]-1):
        if data["cycle"][i+1] == 1:
            MXWD, MXEF, CSIYHYI, JPGCCOMP, SBWBL = 0.25,0.25,0.1,0.35,0.05
        if data["cycle"][i+1] == 2:
            MXWD, MXEF, CSIYHYI, JPGCCOMP, SBWBL = 0.3,0.5,0.1,0.1,0
        if data["cycle"][i+1] == 3:
            MXWD, MXEF, CSIYHYI, JPGCCOMP, SBWBL = 0.2,0.3,0.05,0.4,0.05
        if data["cycle"][i+1] == 4:
            MXWD, MXEF, CSIYHYI, JPGCCOMP, SBWBL = 0,0,0,0.2,0.8
        total = total * ( MXWD*(data["index_1"][i+1]/data["index_1"][i])+
                          MXEF*(data["index_2"][i+1]/data["index_2"][i])+
                          CSIYHYI*(data["index_3"][i+1]/data["index_3"][i])+
                          JPGCCOMP*(data["index_4"][i+1]/data["index_4"][i])+
                          SBWBL*(data["index_5"][i+1]/data["index_5"][i]))
        monthly_Settlement.append(total)
    return monthly_Settlement

# 保守型
def draw_conservative(num):
    data = pd.DataFrame(list(FiveIndexByMonth.objects.all().values()))
    total = 10
    monthly_Settlement = []
    MXWD, MXEF, CSIYHYI, JPGCCOMP, SBWBL = 0.05,0.05,0.05,0.2,0.65
    for i in range(num,data.shape[0]-1):
        total = total * ( MXWD*(data["index_1"][i+1]/data["index_1"][i])+
                          MXEF*(data["index_2"][i+1]/data["index_2"][i])+
                          CSIYHYI*(data["index_3"][i+1]/data["index_3"][i])+
                          JPGCCOMP*(data["index_4"][i+1]/data["index_4"][i])+
                          SBWBL*(data["index_5"][i+1]/data["index_5"][i]))
        monthly_Settlement.append(total)
    return monthly_Settlement


# def get_json(num,monthly_Settlement,data_name):
#     data_list=[]
#     for i in range(0,len(monthly_Settlement)):
#         record=[ datetime.datetime(2001,i+num,1).strftime("%f") , monthly_Settlement[i] ]
#         data_json.append(record)
#     res ={name:data_name,data:data_list}

#     return res