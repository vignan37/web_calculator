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
    switch(value){
        case 'AC':
            display.innerText='';
            operand1=0;
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
        case '=':
            operand2=parseFloat(display.textContent);
            var result = eval(operand1+ ' ' + operator + ' ' + operand2);
            display.innerText=result;
            break;
        default :
            display.innerText +=value;

    }

}
