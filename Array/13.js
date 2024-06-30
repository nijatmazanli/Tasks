let arr=[3,8,2,5,4,10,7,6]
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
    
console.log(max,max_in);
for (let i = 0; i < arr.length; i++) {
    
    // console.log(max,arr[i])
    if (min>arr[i]){
        min = arr[i]
        min_in = i
    }
    
}
console.log(min,min_in);
console.log(arr);

arr[min_in] = max
arr[max_in] = min

console.log(arr);