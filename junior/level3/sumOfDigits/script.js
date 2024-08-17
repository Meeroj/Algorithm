const summOfDigits = num => num.toString().split('').reduce((a,b)=> Number(a)+Number(b))
console.log(summOfDigits(1122))