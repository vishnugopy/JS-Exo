var tata = document.querySelector( "footer div");
let arr = [];


window.addEventListener("keydown" ,(e) =>{
arr.push(e.key);
tata.textContent = arr ;
if (arr.length === 43) {
     arr.splice(0,1);
     console.log(arr);
 }

})