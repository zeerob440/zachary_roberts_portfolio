//loads "skin" from localStorage and applies it globally
//Proudly engineered by Zachary Roberts 16 NOV 2025.
//"We do these things because they are hard."
(function() {
    //detects current "skin" from browser.
    const skin = localStorage.getItem("skin") || "modern";
    //assigns filepath to depth, depth is split into a list delimited by "/" and subtracts (len(list))- 2 (Python).
    const depth = window.location.pathname.split("/").length -2;
    //rebuilds filepath with for loop adds "../" for each iteration.
    let prefix = "";
    for (let i = 0; i <depth; i++) {
        prefix += "../";
    }
    //gets <link id="skinStlyesheet" element.
    //if saved skin is 'retro' load retro.ccs by concat prefix + "retro.css".
    // else concat prefix + "modern.css" load "modern.css".
    const link =document.getElementById("skinStylesheet")
    if (skin === "retro") {
        link.href = prefix + "retro.css";
    } else {
        link.href = prefix + "modern.css";
    }
})();