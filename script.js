/*======================================================
   PARA MI CERDO ❤️
   SCRIPT.JS
   Parte 1
======================================================*/


/*======================================================
CONTADOR DE NUESTRA HISTORIA
Inicio: 02 de agosto de 2024
======================================================*/


const startDate = new Date("2024-08-02T00:00:00");


function updateCounter(){


    const now = new Date();


    let difference = now - startDate;


    if(difference < 0) return;



    const seconds = Math.floor(
        difference / 1000
    );


    const minutes = Math.floor(
        seconds / 60
    );


    const hours = Math.floor(
        minutes / 60
    );


    const days = Math.floor(
        hours / 24
    );


    const months = Math.floor(
        days / 30.44
    );


    const years = Math.floor(
        months / 12
    );


    const remainingMonths = months % 12;


    const remainingDays = Math.floor(
        days % 30.44
    );


    const counterYears = document.querySelector("#years");

    const counterMonths = document.querySelector("#months");

    const counterDays = document.querySelector("#days");

    const counterHours = document.querySelector("#hours");



    if(counterYears){

        counterYears.textContent = years;

    }


    if(counterMonths){

        counterMonths.textContent = remainingMonths;

    }


    if(counterDays){

        counterDays.textContent = remainingDays;

    }


    if(counterHours){

        counterHours.textContent =
        hours % 24;

    }


}



setInterval(updateCounter,1000);

updateCounter();




/*======================================================
BOTÓN COMENZAR
======================================================*/


const startButton = document.querySelector("#startButton");


if(startButton){


    startButton.addEventListener(
        "click",
        ()=>{


            window.scrollTo({

                top:
                window.innerHeight,

                behavior:"smooth"

            });


        }

    );


}




/*======================================================
MÚSICA
======================================================*/


const musicButton =
document.querySelector("#musicButton");


const music =
document.querySelector("#music");



if(musicButton && music){



let playing=false;



musicButton.addEventListener(
"click",
()=>{


    if(playing){


        music.pause();


        musicButton.innerHTML="🎵";


    }
    else{


        music.play();


        musicButton.innerHTML="⏸️";


    }


    playing=!playing;



});



}





/*======================================================
ANIMACIONES AL HACER SCROLL
======================================================*/


const revealElements =
document.querySelectorAll(
".chapter, .photo, .featured-photo, .paper, .moment-card, .timeline-item"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);


}


});


},
{

threshold:.15

}

);



revealElements.forEach(
(element)=>{


observer.observe(element);


});

/*======================================================
   PARA MI CERDO ❤️
   SCRIPT.JS
   Parte 2
======================================================*/


/*======================================================
CORAZONES FLOTANDO ❤️
======================================================*/


function createHeart(){


    const heart = document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"vw";


    heart.style.animationDuration =
    (Math.random()*5+5)+"s";


    heart.style.fontSize =
    (Math.random()*20+15)+"px";


    document.body.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },10000);



}



setInterval(createHeart,1800);





/*======================================================
ESTRELLAS DINÁMICAS ⭐
======================================================*/


const sky =
document.querySelector(".sky");



if(sky){


    for(let i=0;i<80;i++){


        const star =
        document.createElement("span");


        star.className="star";


        star.style.left =
        Math.random()*100+"%";


        star.style.top =
        Math.random()*100+"%";


        star.style.animationDelay =
        Math.random()*5+"s";


        sky.appendChild(star);


    }


}






/*======================================================
CARTA INTERACTIVA 💌
======================================================*/


const envelope =
document.querySelector(".envelope");



if(envelope){


envelope.addEventListener(
"click",
()=>{


    envelope.classList.toggle(
    "active"
    );


});


}





/*======================================================
LIGHTBOX DE FOTOS 📸
======================================================*/


const photos =
document.querySelectorAll(
".photo img"
);



const lightbox =
document.createElement("div");


lightbox.className="lightbox";



const lightboxImage =
document.createElement("img");


lightbox.appendChild(lightboxImage);


document.body.appendChild(lightbox);



photos.forEach(photo=>{


photo.addEventListener(
"click",
()=>{


lightboxImage.src =
photo.src;


lightbox.classList.add(
"active"
);


});


});



lightbox.addEventListener(
"click",
()=>{


lightbox.classList.remove(
"active"
);


});






/*======================================================
BOTÓN VOLVER ARRIBA 🔝
======================================================*/


const backTop =
document.querySelector(".back-top");



if(backTop){


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>500){


backTop.classList.add(
"show"
);


}
else{


backTop.classList.remove(
"show"
);


}



});


backTop.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}







/*======================================================
EASTER EGG 🍔
5 HAMBURGUESAS ESCONDIDAS
======================================================*/


let burgerCount=0;



const burgers =
document.querySelectorAll(
".burger"
);



const secret =
document.querySelector(".secret");



burgers.forEach(
burger=>{


burger.addEventListener(
"click",
()=>{


burger.style.transform=
"scale(1.3)";


setTimeout(()=>{


burger.style.transform=
"";


},300);



burger.style.opacity=".4";



burgerCount++;



if(burgerCount===5){


if(secret){


secret.classList.add(
"show"
);


}


}



});


});





if(secret){


secret.addEventListener(
"click",
()=>{


secret.classList.remove(
"show"
);


});


}

/*======================================================
CERDITOS VOLADORES 🐷❤️
======================================================*/


function createPig(){


    const pig = document.createElement("div");


    pig.className="pig";


    pig.innerHTML="🐷";


    pig.style.left =
    Math.random()*100+"vw";


    pig.style.fontSize =
    (Math.random()*20+20)+"px";


    pig.style.animationDuration =
    (Math.random()*6+6)+"s";


    pig.style.animationDelay =
    Math.random()*2+"s";


    document.body.appendChild(pig);



    setTimeout(()=>{


        pig.remove();


    },12000);



}



setInterval(createPig,3500);

/*======================================================
   PARA MI CERDO ❤️
   SCRIPT.JS
   Parte 3
======================================================*/


/*======================================================
INTRO CINEMATOGRÁFICA 🎬
======================================================*/


window.addEventListener(
"load",
()=>{


const intro =
document.querySelector(".intro");



if(intro){


setTimeout(()=>{


intro.classList.add(
"hide"
);


},4500);



}


});





/*======================================================
EFECTO ESCRITURA ✍️
======================================================*/


function typeWriter(element,text,speed=50){


let index=0;


element.innerHTML="";



function write(){


if(index<text.length){


element.innerHTML +=
text.charAt(index);


index++;


setTimeout(
write,
speed
);


}


}


write();


}



const typeElements =
document.querySelectorAll(
".typewriter"
);



typeElements.forEach(
(element)=>{


const text =
element.textContent;


typeWriter(
element,
text,
60
);


});







/*======================================================
CAMBIO DE AMBIENTE AL SCROLL 🌙
======================================================*/


const sections =
document.querySelectorAll(
"section"
);



window.addEventListener(
"scroll",
()=>{


const scroll =
window.scrollY;



sections.forEach(
(section)=>{


const top =
section.offsetTop;


const height =
section.offsetHeight;



if(
scroll >= top-height/2 &&
scroll < top+height
){


section.classList.add(
"active-section"
);



}
else{


section.classList.remove(
"active-section"
);



}


});


});







/*======================================================
MÚSICA CON FADE 🎵
======================================================*/


const audio =
document.querySelector("#music");



if(audio){


audio.volume=0;



audio.addEventListener(
"play",
()=>{


let volume=0;



const fade =
setInterval(()=>{


if(volume<1){


volume+=0.05;


audio.volume=
volume;


}
else{


clearInterval(fade);


}



},200);



});


}






/*======================================================
MENSAJE FINAL ❤️
======================================================*/


const finalMessage =
document.querySelector(".final-message");



if(finalMessage){


const messages=[


"Gracias por llegar a mi vida ❤️",


"Gracias por cada momento juntos 🐷",


"Gracias por ser mi lugar favorito 🤍",


"Te elegiría una y mil veces más ❤️"


];



let current=0;



setInterval(()=>{


finalMessage.textContent =
messages[current];



current++;



if(current>=messages.length){

current=0;

}



},4000);



}

/*======================================================
   PARA MI CERDO ❤️
   SCRIPT.JS
   Parte 4 - Pulido Final
======================================================*/


/*======================================================
INTRO SOLO UNA VEZ 🎬
======================================================*/


const introScreen =
document.querySelector(".intro");


if(introScreen){


const seen =
localStorage.getItem(
"miCerdoIntro"
);



if(seen){


introScreen.style.display="none";


}
else{


localStorage.setItem(
"miCerdoIntro",
"true"
);


}

}





/*======================================================
BOTÓN MÚSICA MEJORADO 🎵
======================================================*/


const audioPlayer =
document.querySelector("#music");


const musicBtn =
document.querySelector("#musicButton");



if(audioPlayer && musicBtn){


musicBtn.addEventListener(
"click",
async()=>{


try{


if(audioPlayer.paused){


await audioPlayer.play();


musicBtn.innerHTML="❤️";


musicBtn.classList.add(
"playing"
);


}
else{


audioPlayer.pause();


musicBtn.innerHTML="🎵";


musicBtn.classList.remove(
"playing"
);


}


}

catch(error){


console.log(
"La reproducción necesita interacción del usuario"
);


}


});


}





/*======================================================
FRASES ALEATORIAS ❤️
======================================================*/


const loveQuotes=[


"Mi lugar favorito siempre va a ser donde estés vos ❤️",


"Gracias por convertir momentos simples en recuerdos enormes 🐷",


"Desde aquel 02 de agosto de 2024 empezó nuestra historia ✨",


"Algunas personas llegan y cambian todo 🤍",


"Te elegiría otra vez, en cualquier vida ❤️"


];



const quoteBox =
document.querySelector(".love-quote");



if(quoteBox){


setInterval(()=>{


const random =
Math.floor(
Math.random()*loveQuotes.length
);



quoteBox.innerHTML =
loveQuotes[random];


},6000);


}







/*======================================================
MODO CELULAR 📱
======================================================*/


const isMobile =
window.innerWidth <= 768;



if(isMobile){


document.body.classList.add(
"mobile"
);



/*

Reducimos algunos efectos
para mejorar velocidad

*/


const pigs =
document.querySelectorAll(
".pig"
);



pigs.forEach(
(pig)=>{


pig.style.animationDuration=
"8s";


});


}







/======================================================
PROTECCIÓN DE IMÁGENES 📸
======================================================/


const images =
document.querySelectorAll(
"img"
);



images.forEach(
(img)=>{


img.loading="lazy";


});







/======================================================
PEQUEÑO DETALLE OCULTO 🐷
======================================================*/


let clickCount=0;



document.addEventListener(
"click",
(e)=>{


if(
e.target.tagName==="H1"
){


clickCount++;



if(clickCount===3){


alert(
"🐷❤️ Encontraste un pequeño secreto de mi Cerdo"
);


clickCount=0;


}



}


});
