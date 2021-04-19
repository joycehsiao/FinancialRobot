from django.shortcuts import render

# Create your views here.
def suggestion(request):
    type_no=1 #1:冒險 2:保守
    
    degree=1 #有1~4個等級
    num_1="0"
    num_2="0"
    num_3="0"
    num_4="0"
    type_string=""
    if type_no == 1:
        type_string="冒險"
        if degree==1:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
        elif degree==2:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
        elif degree==3:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
        elif degree==4:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
    elif type_no ==2:
        type_string="保守"
        if degree==1:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
        elif degree==2:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
        elif degree==3:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
        elif degree==4:
            num_1="25%"
            num_2="25%"
            num_3="25%"
            num_4="25%"
    return render(request, 'suggestion.html',locals())