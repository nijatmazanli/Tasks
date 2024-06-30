let arr=[3,8,2,5,4,10,7,6]
let arr_cut=[]
let j = 0
for (let i = 0;i<arr.length;i++){
    if (arr[i]%2==0){
        arr_cut[j] = arr[i]
        console.log(arr_cut,arr[i],j);
        j++
    }
}
console.log(arr_cut);
let max = arr_cut[0]

for (let i = 0; i < arr_cut.length; i++) {
    
    // console.log(max,arr[i])
    if (max<arr_cut[i]){
        max = arr_cut[i]
    }
    
}
console.log(max);