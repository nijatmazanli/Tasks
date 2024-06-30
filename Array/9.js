let arr=[3,8,2,5,4,10,7,6]
let total=  0;
let min = arr[0]
let max = arr[0]
let min_in;
let max_in;
for (let i = 0; i < arr.length; i++) {
    
    // console.log(max,arr[i])
    if (max<arr[i]){
        max = arr[i]
        max_in = i
    }
        
}
    
for (let i = 0; i < arr.length; i++) {
    
    // console.log(max,arr[i])
    if (min>arr[i]){
        min = arr[i]
        min_in = i
    }
    
}
for (let j = 0; j<arr.length; j++){
    if (j== min_in || j== max_in){
        continue
    }
else{
    total+=arr[j]
}

}
console.log(total);