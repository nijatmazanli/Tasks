let arr=[3,8,2,5,4,10,7,6]
let min = arr[0]
let index = 0
for (let i = 0; i < arr.length; i++) {
    
    // console.log(max,arr[i])
    if (min>arr[i]){
        min = arr[i]
        index = i
    }
    
}
console.log(min,index);