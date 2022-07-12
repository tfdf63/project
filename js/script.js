"use srtict"

const arr = [1, 22, 23, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(12);
// console.log(arr);

/*
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${1}: ${item} внутри массива ${arr}`);
});
*/

// const str = prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));