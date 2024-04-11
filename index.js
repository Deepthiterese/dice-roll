
let x;
let y;


document.getElementById("rollDice").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
   
    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
}