from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render, get_object_or_404
from .models import Post
from django.utils import timezone
from .serializers import *

@api_view(['GET','POST'])
def post_list(request):
    if request.method == 'GET':
        posts= Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
        
        serializer = PostSerializer(posts, context={'request': request}, many=True)
        
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = PostSerializer(data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
def post_detail(request,pk):
    post= get_object_or_404(Post, pk=pk)
    return render(request, 'blog/podt_detail.html', {'post':post})
