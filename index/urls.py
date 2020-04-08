from django.urls import path
from .views import sk_price_render, crawling_data

urlpatterns = [
    path('', sk_price_render),
    path('crawling', crawling_data),
]