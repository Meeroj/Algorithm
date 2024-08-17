const CheckUppercase = text => {
    const splitText = text.split('')
    for(let i in splitText){
        if(splitText[i].charCodeAt() === splitText[i].toUpperCase().charCodeAt()){
            return true
        }

    }
    return false
}

console.log(CheckUppercase('ahdbabiysbhd Aiasujdbuoasjb'))