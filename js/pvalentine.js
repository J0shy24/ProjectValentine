document.addEventListener("readystatechange",inicio,false);

function inicio(){
    if(document.readyState="complete"){
        
        let yesButton=document.getElementById("Si");
        let noButton=document.getElementById("No");

        yesButton.addEventListener("click",happy,true);
        noButton.addEventListener("click",sad,true);
    }
}

function happy(){
    let image=document.getElementById("foxxie-gif");

    image.src="imgs/foxxie.gif";

    document.getElementById("texto").innerHTML="Te quiero Mucho!";
}

function sad(){
    let image=document.getElementById("foxxie-gif");

    image.src="imgs/foxxie-cry.gif";
    document.getElementById("texto").innerHTML="¿Sabes que es gratis cortar conmigo?";
}