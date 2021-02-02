var tata = document.querySelector( "footer div");
var firstbut = document.querySelector(" footer > div > button");
var secondebut = document.querySelector(" footer  div  button:nth-child(2)");
var select = document.querySelector(" footer  div  select");
let size = 16 ;


firstbut.addEventListener("click" , () =>{
    size ++;
    document.body.style.fontSize = size + "px";
})

secondebut.addEventListener("click" , () =>{
    size --;
    document.body.style.fontSize = size + "px";
})

select.addEventListener("click" , () =>{
    document.body.style.backgroundColor = select.value;
})


