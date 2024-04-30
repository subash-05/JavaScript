function assign(input)
{
    textbox.value += input;
}

function calc()
{
    try
    {
        textbox.value = eval(textbox.value);
    }
    catch
    {
        textbox.value = "";
    }
}

function reset()
{
    textbox.value = "";
}

/*
function Add()
{
    
    var number1 = document.getElementById("n1").value;
    var number2 = document.getElementById("n2").value;

    var result = Number(number1) + Number(number2);

    document.getElementById("result").innerText = result;
}

function Sub()
{
    
    var number1 = document.getElementById("n1").value;
    var number2 = document.getElementById("n2").value;

    var result = Number(number1) - Number(number2);

    document.getElementById("result").innerText = result;
}

function Mul()
{
    
    var number1 = document.getElementById("n1").value;
    var number2 = document.getElementById("n2").value;

    var result = Number(number1) * Number(number2);

    document.getElementById("result").innerText = result;
}

function Div()
{
    
    var number1 = document.getElementById("n1").value;
    var number2 = document.getElementById("n2").value;

    var result = Number(number1) / Number(number2);

    document.getElementById("result").innerText = result;
}
*/