var tata = document.querySelector( "footer div");
var canvas = document.querySelector( "footer div canvas");
var audio = new Audio("./triangle.ogg");
var pause = document.querySelector( "footer div:nth-child(2) button");
var stop = document.querySelector( "footer div:nth-child(2) button:nth-child(2)");
var mute = document.querySelector( "footer div:nth-child(2) button:nth-child(3)");


if (canvas.getContext) {
    var space = canvas.getContext('2d');

    // Triangle start
space.beginPath();
space.moveTo(6, 6);
space.lineTo(6, 14);
space.lineTo(14, 10);
space.closePath();

space.lineWidth = 1;
space.strokeStyle = '#666666';
space.stroke();


space.fillStyle = "#FFF";
space.fill();
// Triangle end
  }

canvas.addEventListener("click" , () => {
  audio.play();
  audio.muted = false;
})

stop.addEventListener("click" , () => {
  audio.pause();
  audio.currentTime = 0;
})

mute.addEventListener("click" , () => {
  audio.muted = true;

})

pause.addEventListener("click" , () => {
  audio.pause();
})

