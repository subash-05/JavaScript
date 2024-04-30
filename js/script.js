//document.write("Hellooo World!");

var cars = ["Benz","BMW","Ferrari"];
document.write(cars);

var car = {
    brand : "Benz",
    model : "S-Class",
    type : "Sedan",
    Year : 2020,

    availableVersion : function()
    {
        document.write("<h2>This car has pertrol and diesel engines</h2>");
    }
}

document.write("<h2>"+car.brand+"</h2>");
car.availableVersion();



function validate()
{
    var n = document.getElementById("uname").value;
    var regEx = /UN/;

    if(regEx.test(n))
    {
        alert("Username is valid!");
    }
    else
    {
        alert("Invalid");
    }
}

function validateEmail()
{
    var e_mail = document.getElementById("email").value;
    var regEx = /^([a-z0-9\.-]+)@([a-z]+).([a-z]{2,5})$/;

    if(regEx.test(e_mail))
    {
        alert("Username is valid!");
    }
    else
    {
        alert("Invalid");
    }
}