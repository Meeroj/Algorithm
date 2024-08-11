const fibonacci = n => {
    const element = [0, 1]
    for (let i = 0; i < n - 2; i++) {
        element.push(element[i] + element[i+1])
    }
    return element
}

console.log(fibonacci(10))

// ChatGPT's answer
/*
const fibonacci = n => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(50)); 
*/