let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
let str="";
let max = 0;
let index = 0;
for (let i = 0; i < arr.length; i++){
      if (typeof arr[i] == "string" && arr[i].length > max){
            index = i
            max = arr[i].length
            // console.log(index,arr[i],arr[i].length,max);
      }
}
console.log(max, arr[index]);
