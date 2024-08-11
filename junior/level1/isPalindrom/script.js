const isPalindrom = (word) => {
    const splitWord = word.split('')
    for(let i = 0; i < word.length/2; i++){
        if(splitWord[i] !== splitWord[splitWord.length - i - 1]){
            console.log(splitWord[i], splitWord[splitWord.length - 1 - i])
            return false
        }
    }
    return true
}

console.log(isPalindrom('sananas'))


// chatGPT's answer 

/*
const isPalindrom = word => word === word.split('').reverse().join('');

console.log(isPalindrom('sananas')); // true

*/