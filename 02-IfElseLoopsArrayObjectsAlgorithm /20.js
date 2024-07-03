function sum(symbol,str){
    let total = 0;
    for (let i = 0;i<str.length;i++){
        if (str[i] == symbol){
            total += i
        }
    }
    if (total == 0){
        console.log("-1");
    }
    else{
        console.log(total)
    }
}
sum("a","salam")