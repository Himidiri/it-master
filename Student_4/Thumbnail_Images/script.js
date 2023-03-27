function changebgcolor(getcolor) {
   let bg = document.querySelector(".bg");
   let selectcolor = getcolor.value;
   bg.style.background = selectcolor;
} // For Background Color Change

function changetxtcolor(getcolor) {
   let tx = document.querySelector(".tx");
   let text = getcolor.value;
   tx.style.color = text;
} // For Text Color Change

var thumb1 = document.getElementById("thumb1");
var thumb1Src = document.getElementById("thumb1").src;
var thumb2 = document.getElementById("thumb2");
var thumb2Src = document.getElementById("thumb2").src;
var thumb3 = document.getElementById("thumb3");
var thumb3Src = document.getElementById("thumb3").src;
var thumb4 = document.getElementById("thumb4");
var thumb4Src = document.getElementById("thumb4").src;
var thumb5 = document.getElementById("thumb5");
var thumb5Src = document.getElementById("thumb5").src;

thumb1.addEventListener("click", function () {
   document.getElementById("mainImg").src = thumb1Src;
});
thumb2.addEventListener("click", function () {
   document.getElementById("mainImg").src = thumb2Src;
});
thumb3.addEventListener("click", function () {
   document.getElementById("mainImg").src = thumb3Src;
});
thumb4.addEventListener("click", function () {
   document.getElementById("mainImg").src = thumb4Src;
});
thumb5.addEventListener("click", function () {
   document.getElementById("mainImg").src = thumb5Src;
}); // For Image Change and Show in Big box
