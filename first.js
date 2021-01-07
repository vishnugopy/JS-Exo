function ageCheck(age){
    if (age >= 18){
        return "Vous pouvez entrer ";
    }
        return "Site interdit aux mineurs.";
    }

console.log(ageCheck(10));
console.log(ageCheck(19));
