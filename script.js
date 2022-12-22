var output = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var operand1 = 0;
var operand2= null;
var operator = null;

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',logic);
}

function logic(){
    var value = this.getAttribute('data-value');
    if(value=='+'){
        operator = '+';
        operand1=parseFloat(display.textContent);
        display.innerText = '';
    }
    else if(value=='='){
        operand2=parseFloat(display.textContent);
    }
    else{
        display.innerText +=value;
    }
}
