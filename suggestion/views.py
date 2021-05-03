from django.shortcuts import render
from backend.models import indexData
from django.views import View
from backend.models import portfolio
# Create your views here.
class suggestion(View):
    template_name = 'suggestion.html'
    def get(self,request):
        latest_data=indexData.objects.last()
        
        type_no=1 #1:冒險 2:保守
        cycle=latest_data.cycle #有1~4個等級
        date=latest_data.date #資料日期
        type_string="冒險"
        num_1="0"
        num_2="0"
        num_3="0"
        num_4="0"
        type_string=""
        s=portfolio(cycle)#傳送目前景氣

        return render(request, self.template_name,locals())




