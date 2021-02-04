let whitebox = document.querySelector("footer div");
let container = document.querySelector("footer");
let newwhite = document.createElement("div");
let okbutton = whitebox.querySelector("a");
let deletebutton = document.createElement("button")
let currenttime = new Date();
let expire = new Date();; 



container.appendChild(newwhite);
newwhite.appendChild(deletebutton);

deletebutton.textContent = "Supprimer le cookie" ;

okbutton.addEventListener("click" , ()=>{
    expire.setDate(expire.getDate()+1);
    console.log(expire);
    document.cookie = "username=John Doe; expires=" + expire;
    whitebox.style.display = "none";

    console.log(document.cookie); 

    expiretime();
}) 


deletebutton.addEventListener("click" , () =>{
    document.cookie = "username= ; expires = " + expire.setDate(expire.getDate()-2) ;
    // cookies.remove(username)
    whitebox.style.display = "block";
})




function expiretime(){
    if (currenttime == expire) {
    document.cookie = "username= ; expires = " + expire.setDate(expire.getDate()-2) ;
    whitebox.style.display = "block";
    }else{
     whitebox.style.display = "none"; 
    }
}

window.addEventListener("load" , ()=>{
    if (document.cookie === false) {
        whitebox.style.display = "block"; 
        }else{
        whitebox.style.display = "none";
        }
})








