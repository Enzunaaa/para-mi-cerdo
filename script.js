/* ==========================
   PARA MI CERDO ❤️
   SCRIPT PRINCIPAL
========================== */



// ==========================
// MÚSICA
// ==========================


const music = document.getElementById("music");

let playing = false;



function toggleMusic(){


    if(playing){

        music.pause();

        playing = false;


    }else{


        music.play();

        playing = true;


    }


}







// ==========================
// BOTÓN COMENZAR HISTORIA
// ==========================


function scrollToStory(){


    document.querySelector(".letter").scrollIntoView({

        behavior:"smooth"

    });


}







// ==========================
// CONTADOR DE TIEMPO
// CAMBIAR FECHA AQUÍ
// ==========================


const startDate = new Date("2025-01-01 00:00:00");



function updateCounter(){


    const now = new Date();


    const difference = now - startDate;



    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );



    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;


}



setInterval(updateCounter,1000);

updateCounter();







// ==========================
// EASTER EGG
// ==========================


function openSecret(){


    const message =
    document.getElementById("secret-message");



    if(message.style.display === "block"){


        message.style.display="none";


    }else{


        message.style.display="block";


    }


}







// ==========================
// ANIMACIÓN AL SCROLL
// ==========================


const sections =
document.querySelectorAll(".section");



const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{
    threshold:.15
});



sections.forEach(section=>{


    observer.observe(section);


});
