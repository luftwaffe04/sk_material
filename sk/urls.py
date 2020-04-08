from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('index.urls')),  # endpoint 가 없으면 index 의 url 로 간다
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
