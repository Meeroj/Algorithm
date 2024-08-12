const countVowels = text => {
    let count = 0
    const splitedText = text.split('')
    for (let i = 0; i < splitedText.length; i++) {
        switch (splitedText[i]) {
            case 'a':
                count++
                break;
            case 'e':
                count++
                break;
            case 'i':
                count++
                break;
            case 'o':
                count++
                break;
            case 'u':
                count++
                break;
            case 'y':
                count++
                break;
            default:
                break;
        }

    }
    return count
}

console.log(countVowels('salom mening ismim merojiddinxon'))

// ChatGPT's answer
/*
const countVowels = text => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'y']);
    let count = 0;
    
    for (let char of text.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels('salom mening ismim merojiddinxon')); // 11

*/