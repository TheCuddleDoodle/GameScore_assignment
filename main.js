var player1=0;
var player2=0;
var stage = 0;
var player1_health = 100;
var player2_health = 100;

var audio = new Audio('hit.wav');
function hit(){

    audio.play();
    if(stage != 5){
   //get a true or false value randomly
    var random = Math.random();
    if(random<0.5){
        player1_health=   player1_health - 20 ;
        player2++;
        console.log(20-player1_health);
        document.getElementById("player1_stat").innerHTML=player2;
        document.getElementById("player2_health").innerHTML =player1_health  ;
  


    }else{
        player2_health=   player2_health - 20 ;
        player1++;
        console.log(20-player2_health);
        document.getElementById("player2_stat").innerHTML=player1;
        document.getElementById("player1_health").innerHTML =player2_health ;
 
    }
   
    stage ++;
}
else{
    if(player2 > player1){ 
        document.getElementById("player1_health").innerHTML = "0";
        document.getElementById("player1_health").style.color = "red";
        document.getElementById("player1_health").style.fontSize = "50px";
        document.getElementById("player1_health").style.fontWeight = "bold";
        document.getElementById("player1_health").style.textAlign = "center";
        document.getElementById("player1_health").style.marginTop = "200px";
        document.getElementById("player1_health").style.marginLeft = "200px";
        document.getElementById("player1_health").style.fontFamily = "Impact";
        document.getElementById("player1_health").style.fontStyle = "italic";
        document.getElementById("player1_health").style.textShadow = "2px 2px black";
        document.getElementById("player1_health").innerHTML = "Player 1 Wins!";
    }
    else{
        document.getElementById("player2_health").innerHTML = "0";
        document.getElementById("player2_health").style.color = "red";
        document.getElementById("player2_health").style.fontSize = "50px";
        document.getElementById("player2_health").style.fontWeight = "bold";
        document.getElementById("player2_health").style.textAlign = "center";
        document.getElementById("player2_health").style.marginTop = "200px";
        document.getElementById("player2_health").style.marginLeft = "200px";
        document.getElementById("player2_health").style.fontFamily = "Impact";
        document.getElementById("player2_health").style.fontStyle = "italic";
        document.getElementById("player2_health").style.textShadow = "2px 2px black";
        document.getElementById("player2_health").innerHTML = "Player 2 Wins!";
    }
}

}

function reset(){
    player1 = 0;
    player2 = 0;
    stage = 0;
    player1_health = 100;
    player2_health = 100;
    document.getElementById("player1_stat").innerHTML = player1;
    document.getElementById("player2_stat").innerHTML = player2;
    document.getElementById("player1_health").innerHTML = "";
    document.getElementById("player2_health").innerHTML = "";
}
