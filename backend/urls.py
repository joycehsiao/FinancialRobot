from django.urls import path
from backend import views
urlpatterns = [
    path('', views.backend),
    path('upload',views.import_data)
]