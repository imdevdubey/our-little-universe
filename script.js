// BETWEEN THE 11 & 12 ❤️
// Landing page animations


// HEART CURSOR TRAIL

document.addEventListener("mousemove", function(e){

    let heart = document.createElement("div");

    heart.className = "heart-cursor";

    heart.innerHTML = "❤️";

    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";


    document.body.appendChild(heart);


    setTimeout(function(){

        heart.remove();

    },1000);

});



// CLICK SPARKLE EFFECT

document.addEventListener("click", function(e){

    for(let i = 0; i < 6; i++){

        let sparkle = document.createElement("div");

        sparkle.innerHTML = "✨";

        sparkle.style.position = "absolute";
        sparkle.style.left = e.pageX + "px";
        sparkle.style.top = e.pageY + "px";

        sparkle.style.pointerEvents = "none";

        sparkle.style.fontSize = "18px";

        sparkle.style.zIndex = "200";


        let x = (Math.random()-0.5)*100;
        let y = (Math.random()-0.5)*100;


        sparkle.animate(
            [
                {
                    transform:"translate(0,0)",
                    opacity:1
                },

                {
                    transform:`translate(${x}px,${y}px)`,
                    opacity:0
                }

            ],

            {
                duration:1000,
                easing:"ease-out"
            }
        );


        document.body.appendChild(sparkle);


        setTimeout(()=>{

            sparkle.remove();

        },1000);

    }

});



// OPEN HEART BUTTON

// OPEN HEART BUTTON

const button = document.getElementById("openButton");

const passwordPage = document.getElementById("passwordPage");

const intro = document.getElementById("intro");


button.addEventListener("click", function(){

    
    button.innerHTML = "❤️ Opening your heart...";


    setTimeout(function(){

        intro.style.opacity = "0";


        setTimeout(function(){

            intro.style.display = "none";


            passwordPage.style.opacity = "1";

            passwordPage.style.pointerEvents = "all";


        },1000);


    },1500);


});



// PASSWORD CHECK

const unlockButton = document.getElementById("unlockButton");

const passwordInput = document.getElementById("passwordInput");

const passwordMessage = document.getElementById("passwordMessage");



unlockButton.addEventListener("click",function(){


    let answer = passwordInput.value.toLowerCase();



    if(answer === "khushu"){


    passwordMessage.innerHTML =
    "❤️ Welcome back, Khushu";


    setTimeout(function(){


        passwordPage.style.opacity = "0";

        passwordPage.style.pointerEvents = "none";


        setTimeout(function(){


            passwordPage.style.display = "none";


            const envelopePage =
            document.getElementById("envelopePage");


            envelopePage.style.opacity = "1";


            envelopePage.style.pointerEvents = "all";


        },1000);


    },1500);


}

    else {


        passwordMessage.innerHTML =
        "Hmm... that's not my favorite person ❤️";


    }


});
const envelope =
document.getElementById("envelope");


envelope.addEventListener("click",function(){

    envelope.classList.add("open");

});
