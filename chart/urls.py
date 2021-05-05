from django.urls import path
from chart import views
urlpatterns = [
    path('', views.chart.as_view()),
    path('upload', views.import_data),
]