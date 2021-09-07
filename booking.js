var personInput = document.getElementById("input-people");
var plus = document.getElementById("plus");
var moins = document.getElementById("menos");
let str = 3;
var mois = document.getElementById("mois");
var jour = document.getElementById("days");
var years = document.getElementById("years");
var z = mois.value;
var y = jour.value;
var inputName = document.getElementById("input-name");
const dateLabel = document.getElementById("date-label");
const dateArea = document.getElementById("date-area");
const hourLabel = document.getElementById("hour-label");
const timeArea = document.getElementById("time-area");
var heure = document.getElementById("heure");
var minute = document.getElementById("minute");
var select = document.getElementById("select-box");

personInput.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 38:
            for (let i = 0; i < 2; i++) {
                str = str + i;
                if(str === 1){
                    personInput.value = str + " person";    
                }else{
                    personInput.value = str + " people";
                }
                console.log(str); 
              }
                  if (str > 14) {
                  str = 14;
                  console.log(str);
                  personInput.value = str + " people";
                }
            break;
        case 40:
            for (let i = 0; i < 2; i++) {
                str = str - i;
                if(str === 1){
                    personInput.value = str + " person";    
                }else{
                    personInput.value = str + " people";
                }
                console.log(str); 
              }
                  if (str < 1) {
                  str = 2;
                  console.log(str);
                  personInput.value = str + " people";
                }
            break;
    }
});

select.addEventListener('click', (invert)=>{
    
});


plus.addEventListener('click', (addNumber)=>{
    
    for (let i = 0; i < 2; i++) {
        str = str + i;
        if(str === 1){
            personInput.value = str + " person";    
        }else{
            personInput.value = str + " people";
        }
        console.log(str); 
      }
          if (str > 14) {
          str = 14;
          console.log(str);
          personInput.value = str + " people";
        }

});

moins.addEventListener('click', (lessNumber)=>{
    
    for (let i = 0; i < 2; i++) {
        str = str - i;
        if(str === 1){
            personInput.value = str + " person";    
        }else{
            personInput.value = str + " people";
        }
        console.log(str); 
      }
          if (str < 1) {
          str = 2;
          console.log(str);
          personInput.value = str + " people";
        }

});

    mois.addEventListener('input', ()=>{

        jour.value = "";

        if( mois.value == "2"){
            jour.max = "28";
        } else if (mois.value % 2 == 0){
            jour.max = "30";
        } else {
            jour.max = "31";
        }
    });

    function leadingZeros(input) {
        if(!isNaN(input.value) && input.value.length === 1) {
          input.value = '0' + input.value;
          return input.value;          
        }
      };

      
      
 