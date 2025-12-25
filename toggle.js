/*
toggle.js is intended to switch the ccs the browser applies according to user input.

Proudly Engineered by Zachary Roberts 14 NOV 2025.
"Hold on to your butts." Ray Arnold, Jurassic Park.
*/

//finds button id styleToggle, stores it to toggle.
const toggle =document.getElementById("styleToggle");

//click event listener added to toggle, declares var current gets "skin" from local storage, if nothing stored, assigns "modern".
toggle.addEventListener("click", () => { 
    const current = localStorage.getItem("skin") || "modern";
    //if current === retro , it sets skin in browser to modern and redirects user to root/index.html
    if (current === "retro") {
        localStorage.setItem("skin", "modern");
        window.location.href="index.html";
    //else it sets skin in browser to retro, and redirects user to transition/index.html
    } else {
        localStorage.setItem("skin", "retro");
        window.location.href ="transition/index.html";
    }
});
    