function calculate(operation){
    const num1=parseFloat(document.getElementById('number1').value)
    const num2=parseFloat(document.getElementById('number2').value)
    let result =0
    switch(operation){
        case "sum":
            result=num1+num2
            break;
        case 'differnce':
            result=num1-num2;
            break;
        case 'product':
            result=num1*num2;
            break
        case 'quotient':
            result=num1/num2;
            break
        case 'remainder':
            result=num1%num2
            break
        case 'power':
            result=Math.pow(num1,num2)
            break;
        case 'square':
            result=num1*num1;
            break;
        case 'squareRoot':
            result=Math.sqrt(num1);
            break
        default:
            result=0
    }
    document.getElementById('result').innerText=result
}