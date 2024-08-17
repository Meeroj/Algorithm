const removeVowels = function(text) {
    const splitText = text.split('')
    const returnedText = []
    splitText.forEach(el => {
        if(el === ' '){
        }else{
            returnedText.push(el)

        }
    }); 

    return returnedText.join('')
}
console.log(removeVowels('text hsduda audisgdiagdy'))