const countWords = text => {
    const splitText = text.split(' ')
    const count = [];
    for (let i = 0; i < splitText.length; i++) {
        if(splitText[i].length > 0){
            count.push(splitText[i])
        }
    }
    return count.length
}

console.log(countWords('Nima gap jiyanlar'))