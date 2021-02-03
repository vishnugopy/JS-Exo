
var tata = document.querySelector( "footer > div");


var mage = new Hero("Amadeus", "mage", 10, 3);
var guerrier = new Hero("Pontius", "guerrier", 3, 10);


function Hero(name , role , intel , force){
    this.name = name ;
    this.role = role ;
    this.intel = intel ;
    this.force = force ;
}

let empty = "";
Hero.prototype.toString = function() {
    empty +=  `Je suis ${this.name} le ${this.role}, j'ai ${this.intel} points d'intelligence et ${this.force} points de force ! \n` 
};

mage.toString();
guerrier.toString();
tata.textContent = empty;

console.log(tata);
console.log(empty);








