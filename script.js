const envelope = document.getElementById("envelope");
const modal = document.getElementById("letterModal");
const closeBtn = document.getElementById("close");
const typing = document.getElementById("typing");
const music = document.getElementById("music");

const carta = `

Hola. 🌷

Si llegaste hasta aquí...

Es porque quería hacerte un detalle diferente.

No una imagen.
No un mensaje cualquiera.

Quería crear algo que pudieras abrir,
explorar y recordar.

Cada tulipán representa un pequeño pensamiento.

Cada color representa un momento.

Y esta carta...

Es simplemente para decirte
que eres una persona muy especial.

Gracias por existir.

Espero que este pequeño detalle
te saque una sonrisa.

Con mucho cariño. 💗

`;

let escribiendo = false;

function escribirTexto(texto){

    typing.innerHTML = "";

    let i = 0;

    escribiendo = true;

    function escribir(){

        if(i < texto.length){

            typing.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escribir,35);

        }else{

            escribiendo = false;

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

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");

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
