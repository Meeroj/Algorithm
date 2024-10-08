const findDublicates = (arr) => {
    const dublicatesElements = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {  
            if(arr[i] === arr[j]){
                dublicatesElements.push(arr[j])
            }
        }
        
    }
    return dublicatesElements.sort((a,b)=> a-b)
}


// ChatGPT's answer
// const findDublicates = (arr) => {
//     const seen = new Set(); // Bu elementlarni kuzatish uchun
//     const dublicates = new Set(); // Dublikatlarni saqlash uchun

//     for (let i = 0; i < arr.length; i++) {
//         if (seen.has(arr[i])) {
//             dublicates.add(arr[i]); // Agar element ko'rilgan bo'lsa, dublikatga qo'shamiz
//         } else {
//             seen.add(arr[i]); // Agar ko'rilmagan bo'lsa, ko'rilganlarga qo'shamiz
//         }
//     }

//     // Dublikatlarni saralab, massiv shaklida qaytaramiz
//     return Array.from(dublicates).sort((a, b) => a - b);
// }

// // Misol uchun chaqirish
// const arr = [1, 2, 3, 4, 3, 2, 5, 6, 6, 7];
// console.log(findDublicates(arr)); // [2, 3, 6]

console.log(findDublicates([1,2,3,4,5,6,7,8,9,1,2,3,3,3,3]))