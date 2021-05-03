from django.urls import path
from suggestion import views
urlpatterns = [
    path('', views.suggestion.as_view()),
]