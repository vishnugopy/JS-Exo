var tata = document.querySelector( "footer div");
let arr = [];


window.addEventListener("keydown" ,(e) =>{
arr.push(e.key);



 for (let i = 0; i < arr.length; i++) {
   
   tata.textContent = arr ;
   console.log(arr);
 }

 if (arr.length === 42) {
     arr.splice(0,1);
 }

})