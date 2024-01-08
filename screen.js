let screenW = screenH = windowW = windowH = false;

 let example = document.getElementById("example");

var calcScreen = function() {
  screenW = screen.width;
  screenH = screen.height;
  windowW = Math.max(document.documentElement.clientWidth, window.innerWidth);
  windowH = Math.max(document.documentElement.clientHeight, window.innerHeight);



};
 
calcScreen();
window.addEventListener("resize", calcScreen());
window.addEventListener("orientationchange", calcScreen());


console.log(example.textContent); // в консоли отобразится "Это текст"

example.textContent = screenW+" Cl="+document.documentElement.clientWidth+" inner="+window.innerWidth;
