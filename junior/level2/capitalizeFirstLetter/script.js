const upperCaseFirstLeter = word => {
    const splitWord = word.split('')
    const returnedWord = []
    for (let i = 0; i < splitWord.length; i++) {
        if(i===0){
            returnedWord.push(splitWord[i].toUpperCase())
        }else{
            returnedWord.push(splitWord[i])
        }
    }
    return returnedWord.join('')
}
const CapitalizeText = text => {
    const splitText = text.split(' ')
    const returnedText = []
    splitText.forEach(element => {
        returnedText.push(upperCaseFirstLeter(element))
    });
    return returnedText.join(' ')
}

console.log(CapitalizeText('salom mening ismim merojiddin NIIBKJi'))