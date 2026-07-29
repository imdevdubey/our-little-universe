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

const button = document.getElementById("openButton");


button.addEventListener("click",function(){

    button.innerHTML="❤️ Opening your heart...";

    button.style.transform="scale(1.1)";


    setTimeout(function(){

        alert("Next chapter coming soon ❤️");

    },1500);


});
