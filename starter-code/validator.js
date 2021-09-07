var inputEmail = document.getElementById("email");
var emailArea = document.getElementById("email-area");
      
function validator(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(inputEmail.value) == false){
        emailArea.style.display = "block";
        inputEmail.style.borderBottom = "1px solid #B54949";
        inputEmail.style.color = "#B54949"
    }else{
        emailArea.style.display = "none";
        inputEmail.style.borderBottom = "1px solid #111111";
        inputEmail.style.color = "#111111"
    }
};

function dayvalidator(){
    const reday = /([1-9]|[12]\d|3[01])/;
    const remonth = /^([1-9]|1[012])$/;

    if (reday.test(document.getElementById("days").value) == false || remonth.test(document.getElementById("mois").value) == false){
        document.getElementById("date-area").style.display = "block";
        document.getElementById("days").style.color = "#B54949";
        document.getElementById("days").style.borderBottom = "1px solid #B54949";
        document.getElementById("mois").style.color = "#B54949";
        document.getElementById("mois").style.borderBottom = "1px solid #B54949";

    }else{
        document.getElementById("date-area").style.display = "none";
        document.getElementById("days").style.color = "#111111";
        document.getElementById("days").style.borderBottom = "1px solid #111111";
        document.getElementById("mois").style.color = "#111111";
        document.getElementById("mois").style.borderBottom = "1px solid #111111";

    }
};