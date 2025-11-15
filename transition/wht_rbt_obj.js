//Proudly Engineered by Zachary Roberts, inspired by Dennis Nedry 12 NOV 2025//
//"It's the kicker. wht_rbt.obj, whatever it is, it did it all." -Ray Arnold, Jurassic Park//

let terminal = document.getElementById("terminal")

let greet = "...ACCESSING THE 90's...." +"<br>"+"BUT...";

terminal.innerHTML += greet + "<br>".repeat(5);
//screen cascade must be cinimatic for desired effect.
let ydstmw = "YOU DIDN'T SAY THE MAGIC WORD!";
let iteration = 0;
let sentinel = 70;

let timing = setInterval(() => {
    terminal.innerHTML += ydstmw + "<br>";
iteration++;
if (iteration >= sentinel) {
    clearInterval(timing);
    }
}, 30);