/*
wht_rbt_obj.js IS NOT AN OBJECT. It is is a cinimatic transition from modern.ccs to retro.ccs that outputs on transition/index.html.
 Named after the notorious Jurassic Park bug "wht_rbt.obj" from Michael Chrichton's Jurassic Park.

Proudly Engineered by Zachary Roberts, inspired by Dennis Nedry 12 NOV 2025
"It's the kicker. wht_rbt.obj, whatever it is, it did it all." -Ray Arnold, Jurassic Park
*/

let terminal = document.getElementById("terminal")

let greet = "...ACCESSING THE 90's...." +"<br>"+"BUT...";

terminal.innerHTML += greet + "<br>".repeat(5);
//declaration of for loop, set string (ydstmw), counter (iteration) and robust sentinel value (sentinel)
let ydstmw = "YOU DIDN'T SAY THE MAGIC WORD!";
let iteration = 0;
let sentinel = 90;
//set cascading scree interval, effect must be cinematic
//output string, increment counter
let timing = setInterval(() => {
    terminal.innerHTML += ydstmw + "<br>";
iteration++;
/*exit loop when ineration is greater than or equal to sentinel value, creates two conditions for the loop to exit if iteration
 exceedes sentinel some reason. returns to root index.*/

if (iteration >= sentinel) {
    clearInterval(timing);
    window.location.href ="../index.html";
    }
}, 30);
