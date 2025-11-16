//toggle.js is intended to switch the ccs the browser applies according to user input
//Proudly Engineered by Zachary Roberts 14 NOV 2025
//"Hold on to your butts." Ray Arnold, Jurassic Park

const toggle =document.getElementById("styleToggle");


toggle.addEventListener("click", () => { 
    const current = localStorage.getItem("skin") || "modern";

    if (current === "retro") {
        localStorage.setItem("skin", "modern");
        window.location.href="index.html";
    } else {
        localStorage.setItem("skin", "retro");
        window.location.href ="transition/index.html";
    }
});
    