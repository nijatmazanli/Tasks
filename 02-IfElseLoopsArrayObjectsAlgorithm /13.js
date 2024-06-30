let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
for (let i = 0; i < arr.length; i++){
    let check = 0;
    if (typeof arr[i] == "string"){
        let strs = arr[i]
        for (let j = 0;j<strs.length;j++){

            if (strs[j] == strs[j].toUpperCase()){
            check++
            }
        }
    }
    if (check > 2){
        console.log(arr[i]);
    }
}
