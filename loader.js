/*
loader.js (Version Bravo)
loads "skin" from localStorage and applies it globally
This version was created once the portfolio was live
links changed, and I could improve the structure by
replacing the for loop with an if-else selection.

Proudly engineered by Zachary Roberts 16 NOV 2025.
"We do these things because they are hard, and we repeat until
they are easy."
*/

(function() {
    //detects current "skin" from browser.
    const skin = localStorage.getItem("skin") || "modern";
   
    const gitHubLive = window.location.hostname.includes("github.io");
    // use absolute path else use relative filepath. 
    const pathStart = gitHubLive
        ?"/zachary_roberts_portfolio/"
        :"./"
    /*gets <link id="skinStlyesheet" element.
        if saved skin is 'retro' load retro.css by concatenate pathStart + "retro.css".
        else concatenate pathStart + "modern.css" load "modern.css".*/
    const link = document.getElementById("skinStylesheet")
    
    if (skin === "retro") {
        link.href = pathStart + "retro.css";
    } else {
        link.href = pathStart + "modern.css";
    }
})();