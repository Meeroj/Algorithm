const reverseWord = text => {
    const splitText = text.split(' ')
    const reverseWordsTextList = []
    for (let i = 0; i < splitText.length; i++) {
        reverseWordsTextList.push(splitText[i].split('').reverse().join(''))
    }

    return reverseWordsTextList.join(' ')
}
console.log(reverseWord('Salom mening ismim nimaligi ni bilsanmi?'))