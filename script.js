
var header= document.getElementById("header");
            var ms= document.getElementById("MERCEDES-BENZ");
            var m3= document.getElementById("ROLLS ROYCE");
            var mx= document.getElementById("BUGATTI VEYRON");
            var my= document.getElementById("AUDI");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");

            ms.onclick=function(){
                header.style.backgroundImage="url(front-left-side-47.jpg)";
                model.innerHTML="MERCEDES-BENZ";
                mph.innerHTML="4.4s";
                speed.innerHTML="149 mph";
                range.innerHTML="400 mi";
            }
            m3.onclick=function(){
                header.style.backgroundImage="url(rolls-royce-wraith.jpg)";
                model.innerHTML="ROLLS ROYCE";
                mph.innerHTML="1.7s";
                speed.innerHTML="250 mph";
                range.innerHTML="300 mi";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(se-image-9d570bf41153dbc38a79750d2f377da5.jpg)";
                model.innerHTML="BUGATTI VEYRON";
                mph.innerHTML="2.5s";
                speed.innerHTML="420 mph";
                range.innerHTML="450 mi";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(r8.jpg)";
                model.innerHTML="AUDI";
                mph.innerHTML="3.5s";
                speed.innerHTML="450 mph";
                range.innerHTML="350 mi";
            }