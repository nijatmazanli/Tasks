// 1 

console.log("<-------------------------------------- I --------------------------------------> ");
let a = 10;
let b = 20;
let c = 30;

let sum1 = a+b;
let sum2 = a+c;
let sum3 = c+b;

if (sum1>sum2 && sum1>sum3){
    console.log(sum1,`$(a) and $(b)`);
} else if (sum2>sum1 && sum2>sum3){
    console.log(sum2,`$(a) and $(c)`);
} else if (sum3>sum1 && sum3>sum1){
    console.log(sum3,`${b} and ${c}`);
}else{
    console.log();
}

let name = "nicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanlinicat mazanli"
let n = 1 
let t = 1
for (let i = 0; i < name.length; i+=n) {
    let str = ""

    for (let j = 0;j<i;j++){
        str += " "
    }
    if (n==1){let de = "";for (let g = 0; g < name.length; g++) {de+="_\\"}str+=name[i]+"\\----\\"+de}
    else {let de = "";for (let g = 0; g < name.length; g++) {de+="#/"}str+=name[i]+"/----/"+de}
    console.log(str)
    if (i == name.length-1){

        n = -1
    }
    if (i == 0){
        n = 1
        // console.log("------------------------");
    }
    t++
    if (t==10000){
        break
    }
    
}