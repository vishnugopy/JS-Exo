function ageCheck(age){
    if (age >= 18){
        return "Vous pouvez entrer  car vous avez " + age + " ans";
    }
        return "Site interdit aux mineurs.";
    }

console.log(ageCheck(10));
console.log(ageCheck(19));
