// --- SLIDE --- 

var btnS = document.getElementsByClassName("btnS");
    var slide = document.getElementById("slide");

    btnS[0].onclick = function(){
        slide.style.transform = "translateX(0px)";
        for(i = 0; i < 3; i++){
            btnS[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    btnS[1].onclick = function(){
        slide.style.transform = "translateX(-800px)";
        for(i = 0; i < 3; i++){
            btnS[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    btnS[2].onclick = function(){
        slide.style.transform = "translateX(-1600px)";
        for(i = 0; i < 3; i++){
            btnS[i].classList.remove("active");
        }
        this.classList.add("active");
    }

// --- SLIDE --- 