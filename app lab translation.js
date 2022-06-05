//idk how to get onevent to work, sorry folks

function setText(elementID,text){
    document.getElementById(elementID).innerHTML=text;
}

//its important to note that randomNumber will not return max. i can fix this pretty easily, but i chose not too bc it suited my program better. sorry
function randomNumber(min,max){
    if(max==undefined){
        max = min;
        min=0;
    }
    return(Math.floor(Math.random() * (max - min) ) + min);
}

function setProperty(elementID,style,property){
    var e =  document.getElementById(elementID);
    if(style == "border-color"){
       e.style.borderColor=property;
    }
    else if (style=="text-color"){
        e.style.color=property;
    } 
    else if(style == "background-color"){
        e.style.backgroundColor = property;
    }
    else{
        console.log("MISSING: " + style);
    }
}

//i was really surprised to need this function actually, apparently app lab lets you use rgb without quotations (not a string) but html needs it to be a string
function rgb(r,g,b,a){
    if(a==undefined){
        a=1;
    }
    return("rgb("+r+","+g+","+b+","+a+")");
}

//x and y and width and height are converted to % (of the screen consumed), youre going to need to adjust your original code, sorry
//also width and height arent required :D
function setPosition(elementID,x,y,width,height){
    var element = document.getElementById(elementID);
    element.style.left=x+"%"; 
    element.style.top=y+"%";
    if(width!=undefined){
        element.style.width=width+"%";
    }
    if(height!=undefined){
        element.style.height=height+"%";
    }
}

function getChecked(elementID){
    return document.getElementById(elementID).checked;
}

//RETURNS* a list with item at the end of it
function appendItem(list,item){//dont forget to update your code
    list.push(item);
}


// ==== CANVAS ====

var activeCanvas="canvas";
var strokeWidth=1;
var strokeColor="white";
var fillColor="black";

//""sets"" the active canvas to whatever is passed through canvas. in actuality, it just stores the activeCanvas to the id
function setActiveCanvas(canvas){
    activeCanvas=canvas;
}

//javascripts built in rectangle function is called rect, so youre going to need to replace all instances of 'rect()' with 'rectangle' sorry.
function rectangle(x,y,width,height)
{
    var c = document.getElementById(activeCanvas);
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = String(strokeWidth);
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.rect(x, y, width, height);
    ctx.fillRect(x,y,width,height);
    ctx.fill();
    ctx.stroke();
}

function circle(x,y,radius){
    var c = document.getElementById(activeCanvas);
    var ctx = c.getContext("2d");
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
}

//wid doesnt necessarily need to be an integer, you can use 'px' or 'in' if you want (NOT TESTED. MIGHT NOT WORK)
function setStrokeWidth(wid){
    strokeWidth=wid;
}

function setStrokeColor(color){
    strokeColor=color;
}

function setFillColor(color){
    fillColor = color;
}