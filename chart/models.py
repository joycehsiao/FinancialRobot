from django.db import models

# Create your models here.
class FiveIndexByMonth(models.Model):
    date=models.CharField(max_length=100)
    index_1=models.FloatField(default=0) #MSCI AC 世界指數
    index_2=models.FloatField(default=0) #MSCI 新興市場指數
    index_3=models.FloatField(default=0) #摩根全球高收益債券指數
    index_4=models.FloatField(default=0) #JPMorgan新興市場債券綜合指數(外債)-美元
    index_5=models.FloatField(default=0) #花旗全球投資等級債指數(LCL)
    cycle=models.IntegerField(default=1) #1:谷底期 2:成長期 3:高峰期 4:走緩期

    def __str__(self):
        return "日期:"+str(self.date)+",Cycle:"+str(self.cycle)