//loads styleSkins globally.
//Proudly engineered by Zachary Roberts 16 NOV 2025.
//
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
    // find stylesheet link
    const link =document.getElementById("skinStylesheet")
    if (skin === "retro") {
        link.href = prefix + "retro.css";
    } else {
        link.herf = prefix + "modern.css";
    }
})();