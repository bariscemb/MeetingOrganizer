


from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers                    
from organiser import views                            
        
router = routers.DefaultRouter()                      
router.register(r'organiser', views.organiserView, 'organiser')     
        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))                
]