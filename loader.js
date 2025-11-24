//loads "skin" from localStorage and applies it globally

/*Proudly engineered by Zachary Roberts 16 NOV 2025.
"We do these things because they are hard."*/

(function() {
    //detects current "skin" from browser.
    const skin = localStorage.getItem("skin") || "modern";
   
    const gitHubLive = window.location.hostname.includes("github.io");
    // use absolute path else use relative filepath. 
    const pathStart = gitHubLive
        ?"/zachary_roberts_portfolio/"
        :"./"
    /*gets <link id="skinStlyesheet" element.
        if saved skin is 'retro' load retro.ccs by concat pathStart + "retro.css".
        else concat pathStart + "modern.css" load "modern.css".*/
    const link = document.getElementById("skinStylesheet")
    
    if (skin === "retro") {
        link.href = pathStart + "retro.css";
    } else {
        link.href = pathStart + "modern.css";
    }
})();