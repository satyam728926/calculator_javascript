function addition(){
    var pre_inp=document.getElementById("screen").value;
    document.getElementById("screen").value+="+";
}
function substraction(){
    var pre_inp=document.getElementById("screen").value;
    document.getElementById("screen").value+="-";
}
function multiplication(){
    var pre_inp=document.getElementById("screen").value;
    document.getElementById("screen").value+="*";
}
function devision(){
    var pre_inp=document.getElementById("screen").value;
    document.getElementById("screen").value+="/";
}
function button_0(){
    document.getElementById("screen").value+=0;
}
function button_1(){
    document.getElementById("screen").value+=1;
}
function button_2(){
    document.getElementById("screen").value+=2;
}
function button_3(){
    document.getElementById("screen").value+=3;
}
function button_4(){
    document.getElementById("screen").value+=4;
}
function button_5(){
    document.getElementById("screen").value+=5;
}
function button_6(){
    document.getElementById("screen").value+=6;
}
function button_7(){
    document.getElementById("screen").value+=7;
}
function button_8(){
    document.getElementById("screen").value+=8;
}
function button_9(){
    document.getElementById("screen").value+=9;
}
function cut(){
    document.getElementById("screen").value=null;
}
function evaluate1(){
    var enter=document.getElementById("screen").value;
    // let value=enter.tostring();
    // prompt(enter);
    var result=eval(enter);
    document.getElementById("screen").value=result;
}