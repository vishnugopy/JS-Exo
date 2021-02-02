var tata = document.querySelector( "footer div");
var canvas = document.querySelector( "footer div canvas");

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
