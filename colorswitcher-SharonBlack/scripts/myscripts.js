"use strict";

// JavaScript to allow the body element to change colors based on which button is pushed. Choice of three background colors and a reset to a white background.

//URL of the color palette used in this project is https://coolors.co/29bf12-abff4f-08bdbd-f21b3f-ff9914


// Click a button to chose body background color or reset to white
document.getElementById("color1").onclick= frenchLime;
document.getElementById("color2").onclick= maximumBlueGreen;
document.getElementById("color3").onclick= redMunsell;
document.getElementById("reset").onclick= resetBackground;


//Functions to change body background colors to reset it to white
function frenchLime() {
    document.getElementById("colorswitch").style.backgroundColor= "#ABFF4F";
};

function maximumBlueGreen() {
    document.getElementById("colorswitch").style.backgroundColor= "#08BDBD";
};

function redMunsell() {
    document.getElementById("colorswitch").style.backgroundColor= "#F21B3F";
};

function resetBackground() {
    document.getElementById("colorswitch").style.backgroundColor= "white";
};




