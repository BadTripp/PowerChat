logo = document.getElementById("Logo");
form = document.getElementById("form");

pos=1;
FadeLogo =()=>{
    
    anim = setInterval(() => {
        pos-=0.05;
        logo.style.opacity=pos;
       
        if(logo.style.opacity < 0){
            
            logo.style.display="none";
            clearInterval(anim);
        }
    }, 200);
   
}

