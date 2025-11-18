//loads skin from localStorage and applies it globally
//Proudly engineered by Zachary Roberts 16 NOV 2025.
//"We do these things because they are hard."
(function() {
    //detects current skin.
    const skin = localStorage.getItem("skin") || "modern";
    //detects folder depth.
    const depth = window.location.pathname.split("/").length -2;
    //builds prefix to path
    let prefix = "";
    for (let i = 0; i <depth; i++) {
        prefix += "../";
    }
    // find stylesheet lin
    const link =document.getElementById("skinStylesheet")
    if (skin === "retro") {
        link.href = prefix + "retro.css";
    } else {
        link.href = prefix + "modern.css";
    }
})();