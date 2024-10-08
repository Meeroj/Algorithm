const arraySum = (arr1, arr2) => {
    const longArr = arr1.length > arr2.length ? arr1 : arr2
    const shortArr = arr1.length < arr2.length ? arr1 : arr2
    const summ = []
    for(let i = 0; i < longArr.length; i++){
        summ.push(longArr[i] + (shortArr[i] ? shortArr[i] : 0))
    }
    return summ
}

console.log(arraySum([1, 2, 3], [4, 5]));


// ChatGPT's answer
// const arraySum = (arr1, arr2) =>
//     arr1.map((num, i) => num + (arr2[i] !== undefined ? arr2[i] : 0))
//         .concat(arr2.slice(arr1.length)); // Qolgan elementlarni qo'shish
  
//   console.log(arraySum([1, 2, 3], [4, 5])); // [5, 7, 3]
//   console.log(arraySum([5, 6], [1, 2, 3, 4])); // [6, 8, 3, 4]
  