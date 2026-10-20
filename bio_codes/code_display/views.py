from django.http import HttpResponse
from django.shortcuts import render

# Function imports from modules without import-time prompts or function calls.
#from bio_modules.Cellular.cellular_pathways import readings, temprature, cell_fate
#from bio_modules.Genetic.DNA_Sequence import (
#    val,
#    dna_gen,
#    dna_ver,
#    count_dna,
#    start_locate,
#    AT,
#    GC,
#)
#from bio_modules.Genetic.Sequence_Alignment import s_a, diff_s_a, relational

# Find method to include python scripts
#from "/Genetic/DNA_Sequence.py" import dna_ver
#from Genetic.Punnett_Squares import punn_simple
#from Genetic.Phylogenetic_tree import  phylo_tree
#from bio_modules.Cellular.Cellular_division import simp_cell
#from bio_modules.Genetic.Punnett_Squares import punn_simple, punn_multi

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


def test_py_html(request):
    """Show a small, fixed Python calculation driven by a web form input."""
    context = {"seconds": "", "cycles": None, "error": None}

    if request.method == "POST":
        raw_seconds = request.POST.get("seconds", "").strip()
        try:
            seconds = int(raw_seconds)
            if not 0 <= seconds <= 3600:
                raise ValueError

            context["seconds"] = seconds
            context["cycles"] = seconds // 20
        except ValueError:
            context["seconds"] = raw_seconds
            context["error"] = "Enter a whole number from 0 to 3600."

    return render(request, "TEST_PY_HTML/index.html", context)
