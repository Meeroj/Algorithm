const removeVowels = function(text) {
    const vowelsList = new Set(['a', 'e', 'i', 'o', 'u', 'y'])
    const splitText = text.split('')
    const returnedText = []
    splitText.forEach(el => {
        if(vowelsList.has(el)){
        }else{
            returnedText.push(el)

        }
    }); 

    return returnedText.join('')
}
console.log(removeVowels('text hsduda audisgdiagdy'))