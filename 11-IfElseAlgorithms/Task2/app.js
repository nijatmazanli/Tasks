
//2

console.log("<-------------------------------------- II --------------------------------------> ");
let a=4;
let b=5;
let c=6;

let max1;
let max2;
let min2;
let min1;

if (a>b && a>c && b>c){
    max1 = a
    max2 = b
    min2 = b
    min1 = c

} else if (a>b && a>c && c>b){
    max1 = a
    max2 = c
    min2 = c
    min1 = b
    
} else if (b>a && b>c && c>a){
    max1 = b
    max2 = c
    min2 = c
    min1 = a
    
} else if (b>a && b>c && a>c){
    max1 = b
    max2 = a
    min2 = a
    min1 = c
    
}
else if (c>a && c>b && a>b){
    max1 = c
    max2 = a
    min2 = a
    min1 = b
    
}
else if (c>a && c>b && b>a){
    max1 = c
    max2 = b
    min2 = b
    min1 = a
    
}else{
    console.log("All are same");
}

let max = max1*100 + max2*10 + min1
let min = min1*100 + min2*10 + max1
console.log(max,min);


