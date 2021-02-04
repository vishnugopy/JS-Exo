let tata = document.querySelector( "footer div:nth-child(2)");
let dragItem = document.querySelector("footer div canvas");
let container = document.querySelector("footer div");
let active = false;
let startigX;
let startigY;
let currentX;
let currentY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener("mousedown", dragStart);
container.addEventListener("mouseup", dragEnd);
container.addEventListener("mousemove", drag);
container.style.overflow = "hidden";
function dragStart(e) {
 
startigX = e.clientX - xOffset;
startigY = e.clientY - yOffset;

  if (e.target === dragItem) {
    active = true;
  }
}

function drag(e) {
  if (active) {
  
    e.preventDefault();
    currentX = e.clientX - startigX;
    currentY = e.clientY - startigY;
    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function dragEnd(e) {
    currentX = startigX ;
    currentY = startigY ;
    active = false;
}

function setTranslate(currentX, currentY, dragItem) {
  dragItem.style.transform = "translate3d(" + currentX + "px, " + currentY + "px, 0)";
  tata.innerHTML =  "Nouvelles coordonnées => {" + "x " + currentX + ","  + "y " + currentY + "}";
}