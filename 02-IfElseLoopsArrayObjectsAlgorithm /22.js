function addds(arr1,arr2,str){
    let sr = ""
    for (let i =0;i<arr1.length;i++){
        sr+=arr1[i]+str
    }
    for (let j =0;j<arr2.length-1;j++){
        sr+=arr2[j]+str
    }
    sr += arr2[arr2.length-1]
    console.log(sr);
}
addds([1,2,3,4,5],[12,3,3,4,3,0],"!")