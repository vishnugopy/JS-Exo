let whitebox = document.querySelector("footer div");
let container = document.querySelector("footer");
let newwhite = document.createElement("div");
let okbutton = whitebox.querySelector("a");
let deletebutton = document.createElement("button")
let currenttime = new Date();
let expire = new Date();

container.appendChild(newwhite);
newwhite.appendChild(deletebutton);

deletebutton.textContent = "Supprimer le cookie" ;

okbutton.addEventListener("click" , ()=>{
    expire.setDate(expire.getDate()+1);
    console.log(expire);
    document.cookie = "username=John Doe; expires=" +  expire;
    console.log(document.cookie);
    expiretime();
}) 

deletebutton.addEventListener("click" , () =>{
    expire.setDate(expire.getDate()-2)
    document.cookie = "username= ; expires = " + expire ;
    // cookies.remove(username)
    console.log(document.cookie); 
    console.log(expire);

})

function expiretime(){
    if (currenttime == expire) {
    document.cookie = "username= ; expires = " + expire.setDate(expire.getDate()-2) ;
    }else{
     console.log(document.cookie); 
    }
}

function afficher(){
    whitebox.style.display = "block"; 
    newwhite.style.display = "none";
}

function cacher(){
    whitebox.style.display = "none";
    newwhite.style.display = "block";
}


window.addEventListener("load" , ()=>{
    if (document.cookie === true) {
            afficher();
        }else{
            cacher();
        }
})








