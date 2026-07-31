// =====================================================
// PARA MI CERDO ❤️
// SCRIPT SIMPLE
// =====================================================


// ===============================
// CONTADOR ❤️
// Desde 02 de agosto de 2024
// ===============================


const startDate = new Date("2024-08-02T00:00:00");


function updateCounter(){

    const now = new Date();

    let difference = now - startDate;


    if(difference < 0){
        return;
    }


    const seconds = Math.floor(difference / 1000);

    const minutes = Math.floor(seconds / 60);

    const hoursTotal = Math.floor(minutes / 60);

    const daysTotal = Math.floor(hoursTotal / 24);



    const years = Math.floor(daysTotal / 365);


    const months = Math.floor(
        (daysTotal % 365) / 30.44
    );


    const days = Math.floor(
        daysTotal % 30.44
    );


    const hours = hoursTotal % 24;



    document.querySelector("#years").textContent = years;

    document.querySelector("#months").textContent = months;

    document.querySelector("#days").textContent = days;

    document.querySelector("#hours").textContent = hours;


}


setInterval(updateCounter,1000);

updateCounter();





// ===============================
// BOTÓN COMENZAR ❤️
// ===============================


const startButton = document.querySelector("#startButton");


if(startButton){

    startButton.addEventListener("click",()=>{


        window.scrollTo({

            top: window.innerHeight,

            behavior:"smooth"

        });


    });

}





// ===============================
// MÚSICA 🎵
// Compatible con Safari iPhone
// ===============================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

if (music && musicButton) {

    musicButton.addEventListener("click", async () => {

        try {

            if (music.paused) {

                await music.play();

                musicButton.innerHTML = "❤️";

            } else {

                music.pause();

                musicButton.innerHTML = "🎵";

            }

        } catch (error) {

            console.error("No se pudo reproducir el audio:", error);

        }

    });

}






// ===============================
// ANIMACIÓN SIMPLE AL SCROLL
// ===============================


const sections = document.querySelectorAll(".section");


window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position =
        section.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            section.classList.add("show");

        }


    });


});
