function getFirst (array, input=1) {
    let temparr = []
    for (let i = 0; i < input; i++) {
        temparr.push(array[i])
    }
    console.log(temparr)
}

getFirst([1, 73, 99, 20],3)