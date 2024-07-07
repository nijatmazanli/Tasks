const webTechs = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "JS",
    "Redux",
    "Node",
    "JS",
    "MongDB",
  ];
let arr = []
for (let i =0;i<webTechs.length;i++){
    if (webTechs[i].length > 4){
       arr.push(webTechs[i])
    }
}
console.log(arr);