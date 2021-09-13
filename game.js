const pageWidth = window.innerWidth;
const random = Math.floor(Math.random() * pageWidth)
const randomNumber = random + "px";

const pageWidth2 = window.innerWidth;
const random2 = Math.floor(Math.random() * pageWidth2)
const randomNumber2 = random2 + "px";


function moveBall(){
    if(random < pageWidth){
        ball.style.left = randomNumber;
        document.getElementById("text1").innerHTML = random;
        
    }else{
        ball.style.left = random - pageWidth;
        document.getElementById("text1").innerHTML = random - pageWidth - 100;
    }

    
    
   
}

function moveBall2(){
    if(random2 < pageWidth2){
        ball2.style.left = randomNumber2;
        document.getElementById("text2").innerHTML = random2;
        
    }else{
        ball2.style.left = random2 - pageWidth2;
        document.getElementById("text2").innerHTML = random2 - pageWidth2 - 100;
    }

    
    
   
}

function reloadPage(){
    
    location.reload();
    
    
    return false;
    
    
}

//all this code does is make a ball move a random amount of pixels forward
//and then shows how many pixels forward it has moved
//completely RNG game I was able to make without help