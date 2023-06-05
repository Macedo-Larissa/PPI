function multiplo (n, m){
    if (m % n == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(multiplo(7, 21));
console.log(multiplo(7, 13));
console.log(multiplo(5, 100));
console.log(multiplo(5, 134));

// function multiplo(n, m) {
//     for (i = 0; i >= 1; i++) {
//         if (n * i == m); {
//             return true;
//         } 
//     } return false; 
// }

// console.log(multiplo(7, 21));
// console.log(multiplo(7, 13));
// console.log(multiplo(5, 100));
// console.log(multiplo(5, 134));