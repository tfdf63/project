"use srtict"

if (4 == 5) {
    console.log('ОК');
} else {
    console.log('Error');
}

const num = 155;
 if (num < 49) {
     console.log('Error');
 } else if (num > 100) {
     console.log('Много');
 } console.log('ОК');

 const num = 155;
 switch (num) {
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