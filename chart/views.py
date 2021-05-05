from django.shortcuts import render
from chart.models import FiveIndexByMonth
from django.views import View
import csv
from chart import cal_chart
# Create your views here.

class chart(View):

    template_name = 'chart.html'
    
    def get(self,request):
        predict_data=cal_chart.draw_predict(0)
        half_data=cal_chart.draw_predict(0)
        con_data=cal_chart.draw_conservative(0)
        return render(request, self.template_name,locals())


def import_data(request): 
    with open("./FiveIndexByMonth.csv",encoding="utf-8") as f:
        reader = csv.reader(f)
        csv_reader = csv.reader(f, delimiter=',')
        for row in csv_reader:
            unit=FiveIndexByMonth.objects.create(
                date=row[0],
                index_1=row[1],
                index_2=row[2],
                index_3=row[3],
                index_4=row[4],
                index_5=row[5],
                cycle=row[6])
            unit.save()
            
    return render(request, 'chart.html',locals())