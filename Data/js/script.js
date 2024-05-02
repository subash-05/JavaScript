function Calling()
{
    Validate();
    GetInput();
}

flag = false;

function Validate()
{
    var message = document.getElementById("messg");
    var email = document.getElementById("mail");
    var regEx = /^([a-zA-Z0-9\.-]+)@([a-z]+).([a-z]{2,5})(.[a-z]{2,5})?$/
    
    if(regEx.test(email.value))
    {
        message.style.visibility = "visible";
    }
    else
    {
        email.style.border = "solid .2rem red";
    }

}

function GetInput()
{   
    var name = document.getElementById("username").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("pass").value;

    var gender;
    var m = document.getElementById("m");
    var f = document.getElementById("f");
    var not = document.getElementById("not");

    if(m.checked==true)
    {
        gender = "Male"
    }
    else if(f.checked==true)
    {
        gender = "Female";
    }
    else if(not.checked==true)
    {
        gender="Not disclosed";
    }
    else 
    {
        gender = "";
    }

    var lang;
    var tam = document.getElementById("tamil");
    var eng = document.getElementById("eng");
    var fren = document.getElementById("french");
    var mal = document.getElementById("malay");

    if(tam.checked==true)
    {
        lang.push(tam.value);
    }
    else if(eng.checked==true)
    {
        lang.push(eng.value);
    }
    else if(fren.checked==true)
    {
        lang="French";
    }
    else if(mal.checked==true)
    {
        lang="Malay";  
    }
    else
    {
        lang="";
    }


    var selection = document.getElementById("select");
    var selected = selection.options[selection.selectedIndex].value;

    document.getElementById("nameInput").innerText = name;
    document.getElementById("mailInput").zinnerText = email;
    document.getElementById("phoneInput").innerText = phone;
    document.getElementById("passInput").innerText = pass;
    document.getElementById("genderInput").innerText = gender;
    document.getElementById("langInput").innerText = lang;
    document.getElementById("hobbieInput").innerText = selected;
}