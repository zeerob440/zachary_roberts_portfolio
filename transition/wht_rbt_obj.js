/*
wht_rbt_obj.js IS NOT AN OBJECT. It is is a cinematic transition from modern.ccs to retro.ccs that outputs on transition/index.html.
 Named after the notorious Jurassic Park bug "wht_rbt.obj" from Michael Chrichton's Jurassic Park.

Proudly Engineered by Zachary Roberts, inspired by Dennis Nedry 12 NOV 2025; version Bravo.
"It's the kicker. wht_rbt.obj, whatever it is, it did it all." -Ray Arnold, Jurassic Park
*/

const TERMINAL = document.getElementById("terminal");

// create element
TERMINAL.textContent = `
...ACCESSING THE 90's\n
BUT....
\n
\n
\n`

//declaration of for loop, set string (YDSTMW), counter (iteration) and robust sentinel value (SENTINEL)
const CRAWL = document.getElementById('i_hate_this_hacker_crap');

const YDSTMW = "YOU DIDN'T SAY THE MAGIC WORD!\n";
let iteration = 0;
const SENTINEL = 90;
//set cascading screen interval, effect.
//increment counter
let timing = setInterval(() => { 
    CRAWL.textContent += YDSTMW;
    //string scrolls as new line iterates.
    window.scrollTo(0, document.body.scrollHeight);  
    iteration++;

/*exit loop when iteration is greater than or equal to sentinel value, creates two conditions for the loop to exit if iteration
 exceeds sentinel some reason. returns to root index.*/

if (iteration >= SENTINEL) {
    clearInterval(timing);
    window.location.href ="/zachary_roberts_portfolio/index.html";
    }
}, 30);