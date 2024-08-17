const returnedArr = []
const flattening = arr => {
    arr.forEach(el => {
        if(typeof el === 'object'){
            flattening(el)
        }else{
            returnedArr.push(el)
        }
    });
    return returnedArr
}

console.log(flattening(['asksai', ['hdhdsja', 'kasdksag', 1, [1,23, [1232,[23213]]]]]))