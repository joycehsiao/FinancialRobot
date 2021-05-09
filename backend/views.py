from django.shortcuts import render
import csv
from backend.models import indexData
# Create your views here.
def import_data(request): 
    with open("./rawdata.csv",encoding="utf-8") as f:
        reader = csv.reader(f)
        csv_reader = csv.reader(f, delimiter=',')
        for row in csv_reader:
            unit=indexData.objects.create(
                date=row[0],
                napmpric=row[1],
                wagetrnd=row[2],
                wagetrnd_YoY=row[3],
                lei_totl=row[4],
                lei_YoY=row[5],
                oecd_us_YoY=row[6],
                oecd_total=row[7],
                oecd_total_Yoy=row[8],
                rty_YoY_spx_YoY=row[9],
                m2_Yoy=row[10],
                cycle=row[11])
            unit.save()
            
    return render(request, 'suggestion.html',locals())

def backend(request):
    return render(request, 'backend.html',locals())