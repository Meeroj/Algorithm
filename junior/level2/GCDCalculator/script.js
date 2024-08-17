const GCD = (a, b) => {
    const maxNum = a > b ? a : b
    const minNum = a < b ? a : b
    if(maxNum % minNum === 0){
        return maxNum
    }else{
        const maxNumArr = []
        const minNumArr = []
        for(let i = 1; i < minNum; i++){
            maxNumArr.push(maxNum * i)
        }
        for (let i = 1; i < maxNum; i++) {
            minNumArr.push(minNum * i)            
        }
        for (let i = 0; i < maxNumArr.length; i++) {
            if(minNumArr.includes(maxNumArr[i])){
                return maxNumArr[i]
            }
            
        }
    }
    return maxNum * minNum
    
}

console.log(GCD(8, 6))