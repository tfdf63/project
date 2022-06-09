"use srtict"

if (4 == 5) {
    console.log('ОК');
} else {
    console.log('Error');
}

let a = 155;

 if (a < 49) {
     console.log('Error');
 } else if (a > 100) {
     console.log('Много');
 } console.log('ОК');


 switch (a) {
     case 49:
         console.log('Неверно');
         break;
    case 100:
        console.log('Неверно');
         break;
    case 155:
        console.log('Верно');
        break;
    default:
        console.log('Неверно');
        break;
 }