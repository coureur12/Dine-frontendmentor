var image = document.getElementById("image");
var title = document.getElementById('title');
var text = document.getElementById('text');

var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');

var fmy = document.getElementById('family-button');
var spe = document.getElementById('special-button');
var soc = document.getElementById('social-button');

function zeubi(){
  fmy.addEventListener('click', ()=>{
    fmy.style.opacity="1";
      if(fmy.style.opacity="1"){
        image.style.backgroundImage="";
        line1.style.opacity="1";
        line2.style.opacity="0";
        line3.style.opacity="0";  
      }else{
          fmy.style.opacity="0.6";
          line1.style.opacity="0";
      };
    title.innerHTML = "Family Gathering";
    text.innerHTML = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.";
});
    spe.addEventListener('click', ()=>{
      spe.style.opacity="1";
        if(spe.style.opacity="1"){
            line2.style.opacity="1";
            line1.style.opacity="0";
            line3.style.opacity="0";
        }else{
            spe.style.opacity="0.6";
            line2.style.opacity="0";
        };
    image.style.backgroundImage = "url(images/homepage/special-events-desktop.jpg)"; 
    title.innerHTML = "Special Events";
    text.innerHTML = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";
});
  soc.addEventListener('click', ()=>{
   soc.style.opacity="1";
    if(soc.style.opacity="1"){
        line3.style.opacity="1";
        line1.style.opacity="0";
        line2.style.opacity="0";        
    }else{
        soc.style.opacity="0.6";
        line3.style.opacity="0";
        
    }
    image.style.backgroundImage = "url(images/homepage/social-events-desktop.jpg)";
    title.innerHTML = "Social Events";
    text.innerHTML = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";
});
}