const countConsonants = (text) => {
    const splitedText = text.split('')
    const consonants = new Set(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z',])
    let count = 0
    splitedText.map(el => {
        if(consonants.has(el)){
            count++
        }
    })
    return count
}

// ChatGPT's answer
// const countConsonants = (text) => {
//     const consonants = new Set(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z']);
//     let count = 0;
    
//     for (let char of text.toLowerCase()) { // Katta va kichik harflarni tekshirish uchun
//         if (consonants.has(char)) {
//             count++;
//         }
//     }
    
//     return count;
// }

// console.log(countConsonants('Salom Mening Ismim Merojiddinxon')); // 17

console.log(countConsonants('aoaoaoaoaoasg as af'))