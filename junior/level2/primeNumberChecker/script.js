const isPrimeNumber = a => {
    for (let i = 2; i < a; i++) {
        if(a % i === 0){
            return true
        }        
    }
    return false
}

console.log(isPrimeNumber(13))