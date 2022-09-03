from django.urls import path, re_path
from . import views

urlpatterns = [
    path(r'api/post/',views.post_list,name='post_list'),
    re_path(r'^api/post/<int:pk>/', views.post_detail, name='post-detail'),
]
