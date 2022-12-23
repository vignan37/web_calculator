var output = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var operand1 = null;
var operand2= null;
var operator = null;
var error = false;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',logic);
}
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('mouseover',mouseon);
}
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('mouseout',mouseoff);
}

function mouseon(){
    this.style.backgroundColor = 'orange';
}
function mouseoff(){
    this.style.backgroundColor = '';
}

function logic(){
    var value = this.getAttribute('data-value');
    //directly clicks operator error without first operand
    if(display.textContent=='' && (value=='+' || value=='-' || value=='/' || value=='*' || value=='.' || value=='=' || value=='%')){
        display.innerText='Error';
        error=true;
        return;
    }

    //if after an error they enter a number.
    if(error==true && !(value=='+' || value=='-' || value=='/' || value=='*' || value=='.' || value=='=' || value=='%')){
        display.innerText=''
        error=false;
    }

    //check previous error and remove text
    if(error==true && (value=='+' || value=='-' || value=='/' || value=='*' || value=='.' || value=='=' || value=='%')){
        display.innerText='Error';
        return;
    }
    
    

    switch(value){
        case 'AC':
            display.innerText='';
            operand1=null;
            operand2=null;
            operator=null;
            break;
        case '+':
            operator = '+';
            operand1=parseFloat(display.textContent);
            display.innerText='';
            break;
        case '-':
            operator = '-';
            operand1=parseFloat(display.textContent);
            display.innerText='';
            break;
        case '/':
            operator = '/';
            operand1=parseFloat(display.textContent);
            display.innerText='';
            break;
        case '%':
            operator = '%';
            operand1=parseFloat(display.textContent);
            display.innerText='';
            break;
        case '*':
            operator = '*';
            operand1=parseFloat(display.textContent);
            display.innerText='';
            break;
        case '+/-':
            operand1=-1*parseFloat(display.textContent);
            display.innerText=operand1;
            break;
        case '=':
            operand2=parseFloat(display.textContent);
            var result = eval(operand1+ ' ' + operator + ' ' + operand2);
            display.innerText=result;
            break;
        default :
            display.innerText +=value;

    }
    

}
