const envelope = document.getElementById("envelope");
const modal = document.getElementById("letterModal");
const closeBtn = document.getElementById("close");
const typing = document.getElementById("typing");
const music = document.getElementById("music");
const quill = document.getElementById("quill");

const carta = `

Holaa. 🍉

Ale te quiero mucho jaja...

sabes que eres una gran chica y mereces que te lo demuestren, las personas que te quieren;
y yo pensé en una cartita para ti.

Me huebira gustado el detalle en físico, pero talvez algun dia pasara.

Me a encantado conocerte, desde hace un tiempo. Aun que no lo creas me has ayudado a sobresalir y a sentirme mejor.

Tantas personas en el mundo pero conectar con alguien es difícil, y aun mas confiar en alguien, y yo confío en ti y en tu hermosa forma de ser. 

Me gustan muchas cosas de ti, como te expresas y la atención que me prestas...

Me alegro de haberte conocido, mas a un teniendo mucha vida por delante, para compartir posibles momentos 
contigo.

Gracias por existir.

Siempre habra una parte de ti en mi corazón, y pedire que siempre te valla bien, y logres todo lo que deseas,
y ojalá nunca nada ni nadie te haga sentir mal, siempre me tendras a mi, la unica persona que puede alejarme de ti, eres tu misma;
abrazo por siempre. 

Te quiero mucho, con cariño B 💗
por cierto me encanta tu voz y tu risa. 

`;

let escribiendo = false;

function escribirTexto(texto){

    typing.innerHTML = "";
    quill.style.opacity = "1";
quill.style.animation = "escribir .35s infinite";

    let i = 0;

    escribiendo = true;

    function escribir(){

        if(i < texto.length){

            const span = document.createElement("span");
span.textContent = texto.charAt(i);
typing.appendChild(span);

// Movimiento de la pluma
const rectLetra = span.getBoundingClientRect();
const rectPapel = document.querySelector(".paper").getBoundingClientRect();

quill.style.left = (rectLetra.left - rectPapel.left - 55) + "px";
quill.style.top  = (rectLetra.top - rectPapel.top - 35) + "px";
quill.style.transform = "rotate(20deg)";
i++;

setTimeout(escribir,35);

        }else{

    escribiendo = false;

    quill.style.opacity = "0";
    quill.style.animation = "none";
        }

    }

    escribir();

}

envelope.addEventListener("click",()=>{

    modal.classList.add("show");

    music.volume = .5;

    music.play().catch(()=>{});

    escribirTexto(carta);

});

closeBtn.addEventListener("click",()=>{

    modal.classList.remove("show");
    quill.style.opacity = "0";
quill.style.animation = "none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");
        quill.style.opacity = "0";
quill.style.animation = "none";

    }

});



/**************
PARTÍCULAS
**************/

const particles = document.getElementById("particles");

function crearCorazon(){

    const heart = document.createElement("div");

    heart.innerHTML="💗";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="105vh";

    heart.style.fontSize=(16+Math.random()*18)+"px";

    heart.style.opacity=Math.random();

    heart.style.transition="transform 10s linear, opacity 10s linear";

    particles.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=`translateY(-120vh)
                               translateX(${Math.random()*100-50}px)
                               rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(crearCorazon,900);


/******************
MÚSICA
******************/

music.addEventListener("ended",()=>{

    music.play();

});
