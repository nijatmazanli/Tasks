function clear(array){
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] == "number" && array[i] != 0){
            arr.push(array[i])
        }
        if(typeof array[i] == "string" && array[i].length > 0){
            arr.push(array[i])
        }
        }
        console.log(arr);
    }


clear([0, 1, false, 2, undefined, '', 3, null, "hello"])