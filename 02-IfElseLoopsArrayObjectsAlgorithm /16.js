function swap(str){
    let string = ""
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() == str[i]){
            string += str[i].toLowerCase()

        }else{
            string += str[i].toUpperCase()
        }
    }
    console.log(string);
}

swap("SALaM")