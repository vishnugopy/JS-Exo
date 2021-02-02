const tata = document.querySelector( "footer div");

tata.addEventListener("click" , () =>{
  
while (true) {
  input = prompt ('Quel est votre nom ?');
  if (input) {
    let conformation = confirm( `${input} est votre nom ?`);
    if (conformation) {
      alert(`Bonjour! ${input}`);
      tata.innerHTML = `Bonjour! ${input}` ;
      break;
    }
  }
}
})