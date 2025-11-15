//Proudly Engineered by Zachary Roberts, inspired by Dennis Nedry 12 NOV 2025//
//"It's the kicker. wht_rbt.obj, whatever it is, it did it all." -Ray Arnold, Jurassic Park//



let ydstmw = "YOU DIDN'T SAY THE MAGIC WORD!";
let iteration = 0;
let max_iteration = 10;

let terminal = document.getElementById("terminal")

let sentinel = setInterval(() => {
    terminal.innerHTML += ydstmw + "<br>";
iteration++;
if (iteration >= max_iteration) {
    clearInterval(sentinel);
    }
}, 30);