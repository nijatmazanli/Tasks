function makeString(array, symbol){
    let string = ""
    for(let i = 0; i < array.length -1; i++){
        string += array[i] + symbol
    }
    string+=array[array.length - 1]
    console.log(string);
}
makeString([1, 73, 99, 20], "*")