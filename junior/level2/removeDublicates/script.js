const removeDublicate = arr => {
    const set = []
    for(let item in arr){
        if(!set.includes(arr[item])){
            set.push(arr[item])
        }
    }
    return set
}
console.log(removeDublicate(['salom', 'qaley', 'hello', 'salom', 'hello', 'babnik']))