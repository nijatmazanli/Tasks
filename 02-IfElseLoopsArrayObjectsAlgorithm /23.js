let sss =[
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Davud", scores: [100, 100, 100] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
  ];
let sum= []
for (let i = 0;i<sss.length;i++){
    let arr = sss[i].scores
    sum.push(arr[0]+arr[1]+arr[2])
    sss[i].sum = arr[0]+arr[1]+arr[2]

}
console.log(sum);
console.log(sss);
