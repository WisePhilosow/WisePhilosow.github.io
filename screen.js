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

example.textContent = "inner="+window.innerHeight;
