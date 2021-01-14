// "use strict";

// let x = 4;
// let y = 5;

// let direction="S";

// function turn(instruction) {
//     if (instruction === "gauche") {
//         switch (direction) {
//             case "S":
//                 direction = "E";
//                 break;

//             case "E":
//                 direction = "N";
//                 break;

//             case "O":
//                 direction = "S"
//                 break;

//             case "N":
//                 direction = "O"
//                 break;

//         }
//     }
//     else if (instruction === "droite") {
//         switch (direction) {
//             case "S":
//                 direction = "O";
//                 break;

//             case "E":
//                 direction = "S";
//                 break;

//             case "O":
//                 direction = "N"
//                 break;

//             case "N":
//                 direction = "E"
//                 break;

//             default:
//                 break;
//         }
//     }
//     console.log(direction);
// }

// turn("gauche");
// turn("gauche");
// turn("droite");

// Le code ci dessous doit etre fonctionnelle après avoir refacto le code ci dessus ---

function MoveInSpace(x, y, direction) {

    console.log(x + y);

    let space = new MoveInSpace(4, 5, "S");


    console.log(space);


}
MoveInSpace(4, 5, "S");


// let space = new MoveInSpace(4, 5, "S");
// space.turn('gauche');
// space.turn('gauche');