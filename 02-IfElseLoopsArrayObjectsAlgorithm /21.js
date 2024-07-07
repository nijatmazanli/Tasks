function adds(array,index,str){
    console.log("Evvel :: ",array)
    if (index => array.length){
        array.push(str)
    }
    else{
        array[index] = str
    }
    console.log("Sonra ::",array)
}
adds(['a','salam','b','world'], 3, "dev")