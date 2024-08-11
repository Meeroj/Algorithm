const factorial = (n) => {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}

console.log(factorial(10))

// ChatGPT's answer
/*
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

console.log(factorial(10)); // 3628800

*/