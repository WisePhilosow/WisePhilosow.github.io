let screenW = screenH = windowW = windowH = false;

let element = document.getElementById("text");

var calcScreen = function() {
  screenW = screen.width;
  screenH = screen.height;
  windowW = Math.max(document.documentElement.clientWidth, window.innerWidth);
  windowH = Math.max(document.documentElement.clientHeight, window.innerHeight);

 let example = document.getElementById("example");

console.log(example.textContent); // в консоли отобразится "Это текст"

example.textContent = screenW;
};
 
calcScreen();
window.addEventListener("resize", calcScreen());
window.addEventListener("orientationchange", calcScreen());

