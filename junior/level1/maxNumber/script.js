const maxNumber = arr => arr.reduce((a,b) => a > b ? a : b)

console.log(maxNumber([1,8,3,4,5,5]))

// ChatGPT's answer
/*
const maxNumber = arr => Math.max(...arr);

console.log(maxNumber([1,8,3,4,5,5])); // 8

*/