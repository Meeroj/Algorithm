const LCM = (a,b) => {
    const maxNum = a > b ? a : b
    const minNum = a < b ? a : b

    if(maxNum % minNum === 0){
        return minNum
    }
    for (let i = 0; i < minNum; i++) {
        if (minNum % (minNum - i) === 0 && maxNum % (minNum -i) === 0) {
            console.log('kirdi')
            return minNum - i
        }
    }
}

console.log(LCM(36,24))