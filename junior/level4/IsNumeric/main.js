// ChatGPT's answer
const isNumeric = (text) => {
    // Matn faqat raqamlar va bo'shliq bo'lishini tekshirish kerak
    return /^[0-9\s]+$/.test(text);
}

console.log(isNumeric("11 11 3 45")); // true
console.log(isNumeric("11a 11 3 45")); // false
console.log(isNumeric("11345")); // true
console.log(isNumeric("11, 45")); // false