function add(num1,num2){
    return num1 + num2
}
function substract(num1,num2){
    return num1 - num2
}
function multiply(num1,num2){
    return num1 * num2
}
function divide(num1,num2){
    return num1 / num2
}





function calculator(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operater = document.getElementById("operater").value;

    switch (operater){
        case "+":
        result=add(num1,num2)
        break;
        case"-":
        result= substract(num1,num2)
        break;
        case"*":
        result= multiply(num1,num2)
        break;
        case"/":
        result= divide(num1,num2)
        break;
        default:
            "invalid operater";
    }
    
    document.getElementById("result").innerHTML = result;
    
}
