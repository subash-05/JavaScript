//var selection = document.getElementById("select");
//var selected = selection.options[selection.selectedIndex].value;

//console.write(selected);

function BookChecker()
{
    var bookInput = document.getElementById("bookInput");
    let msgBox = document.getElementById("bookMessage");

    let regEx = /^([a-z A-Z]{1,20})$/;

    if(regEx.test(bookInput.value))
    {
        msgBox.style.visibility = "visible"; 
        bookInput.style.border = "solid .1rem black";
        return true; 
    }
    else
    {
        msgBox.style.visibility = "hidden";
    }
}

function EmailChecker()
{
    var emailInput = document.getElementById("emailInput");
    let msgBox = document.getElementById("mailMessage");

    var regEx = /^([a-z0-9/.-]+)@([a-z]+).([a-z]{1,5})$/;

    if(regEx.test(emailInput.value))
    {
        msgBox.style.visibility = "visible"; 
        emailInput.style.border = "solid .1rem black"; 
        return true;
    }
    else
    {
        msgBox.style.visibility = "hidden";
    }
}

function NameChecker()
{
    var nameInput = document.getElementById("nameInput");
    var msgBox = document.getElementById("authorMessage");

    var regEx = /^[a-z A-Z]+$/;

    if(regEx.test(nameInput.value))
    {
        msgBox.style.visibility = "visible";  
        nameInput.style.border = "solid .1rem black";
        return true;
    }
    else
    {
        msgBox.style.visibility = "hidden";
    }    
}

function YearChecker()
{
    var yearInput = document.getElementById("yearInput");
    var msgBox = document.getElementById("yearMessage");

    var regEx = /[0-9]+/;

    if(regEx.test(yearInput.value))
    {
        msgBox.style.visibility = "visible"; 
        yearInput.style.border = "solid .1rem black";
        return true;
    }
    else
    {
        msgBox.style.visibility = "hidden";
    }    
}

function PriceChecker()
{
    var priceInput = document.getElementById("priceInput");
    var msgBox = document.getElementById("priceMessage");

    var regEx = /^([0-9]+).([0-9]{2})$/;

    if(regEx.test(priceInput.value))
    {
        msgBox.style.visibility = "visible"; 
        priceInput.style.border = "solid .1rem black"; 
        return true;
    }
    else
    {
        msgBox.style.visibility = "hidden";
    }  
}

function AddToTable()
{
    var bookInput = document.getElementById("bookInput");
    if(BookChecker())
    {      
        document.getElementById("book").innerText = bookInput.value;
    } 
    else
    {
        bookInput.style.border = "solid .2rem red";
    }
    
    var emailInput = document.getElementById("emailInput");
    if(EmailChecker())
    {    
        document.getElementById("email").innerText = emailInput.value;
    }
    else
    {
        emailInput.style.border = "solid .2rem red";
    }
    
    var nameInput = document.getElementById("nameInput");
    if(NameChecker())
    {
        document.getElementById("name").innerText = nameInput.value;
    }
    else
    {
        nameInput.style.border = "solid .2rem red";
    }

    
    var yearInput = document.getElementById("yearInput");
    if(YearChecker())
    {
        document.getElementById("year").innerText = yearInput.value;
    }
    else
    {
        yearInput.style.border = "solid .2rem red";
    }

    var priceInput = document.getElementById("priceInput");
    if(PriceChecker())
    {      
        document.getElementById("price").innerText = priceInput.value;
    }
    else
    {
        priceInput.style.border = "solid .2rem red";
    }
}

