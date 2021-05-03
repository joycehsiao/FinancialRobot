from django.contrib import admin
from backend import models
# Register your models here.


# class indexDataAdmin(admin.ModelAdmin):
#     list_display="{}:{}..".format(self.id, self.paragraph[:10])

# admin.site.register(models.indexData,indexDataAdmin)
admin.site.register(models.indexData)