from django.http import HttpResponse
from django.shortcuts import render

code = 0

# Create your views here.
def index(request):
    return render(request, "home/index.html", {
        'code': code
    })
    

def ore(request):
    return HttpResponse("Hello, Ore")

# General Display for site 

# Cellular Functions 
def cell(request):
    # simp_cell() waits for command-line input and cannot run during an HTTP request.
    return render(request, "cell/index.html")

# Genetic Functions 
def genetic(request):
    return render(request, "genetic/index.html")

# Gross Anatomy Functions
def gross(request):
    return render(request, "gross/index.html")



