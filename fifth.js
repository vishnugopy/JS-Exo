function checkTwo(a,b){
    if (typeof a == typeof b && a === b){
        console.log("Même type et valeur");
    }else if(a == b){
        console.log("same type");
    }else {
        console.log("same value");
    }
}


checkTwo("6",6);
checkTwo(6,6);
checkTwo(6,5);
