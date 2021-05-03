from django.db import models

# Create your models here.

class indexData(models.Model):
    #name = models.CharField(max_length=100)
    date=models.CharField(max_length=100)#使用者輸入指標的當日月份
    napmpric=models.FloatField(default=0) #某個經濟指標1
    wagetrnd=models.FloatField(default=0) #某個經濟指標2
    wagetrnd_YoY=models.FloatField(default=0) #某個經濟指標3
    lei_totl=models.FloatField(default=0) #某個經濟指標4
    lei_YoY=models.FloatField(default=0) #某個經濟指標5
    oecd_us_YoY=models.FloatField(default=0) #某個經濟指標6
    oecd_total=models.FloatField(default=0) #某個經濟指標7
    oecd_total_Yoy=models.FloatField(default=0) #某個經濟指標8
    rty_YoY_spx_YoY=models.FloatField(default=0) #某個經濟指標9
    m2_Yoy=models.FloatField(default=0) #某個經濟指標10

    cycle=models.IntegerField(default=1) #1:谷底期 2:成長期 3:高峰期 4:走緩期
    
    def __str__(self):
        return "日期:"+str(self.date)+",Cycle:"+str(self.cycle)


class portfolio:
    def __init__(self, c):
        self.cycle_type = c
        if self.cycle_type==1:
                self.state= "谷底期"
                self.intro="產業在短期內無法看到景氣有好轉的跡象"
                self.aggressive='{  "EF":25,"EMB":60,"HYB":10,"IGCB":5}'
                self.conservative='{"EF":10,"EMB":15,"HYB":5,"IGCB":70}'
        elif self.cycle_type==2:
                self.state= "成長期"
                self.intro="物價穩定走揚，物價持續上漲"
                self.aggressive='{ "EF":30,"EMB":60,"HYB":10,"IGCB":0}'
                self.conservative='{"EF":60,"EMB":25,"HYB":5,"IGCB":10}'
        elif self.cycle_type==3:
                self.state= "高峰期"
                self.intro="投資及消費需求持續增加但增加幅度逐漸減弱"
                self.aggressive='{  "EF":20,"EMB":70,"HYB":5,"IGCB":5}'
                self.conservative='{"EF":30,"EMB":20,"HYB":10,"IGCB":40 }'
        elif self.cycle_type==4:
                self.state= "走緩期"
                self.intro="風險性資產價格持續下降"
                self.aggressive='{  "EF":0,"EMB":20,"HYB":0,"IGCB":80}'
                self.conservative='{"EF":0,"EMB":20, "HYB":5,"IGCB":75}'