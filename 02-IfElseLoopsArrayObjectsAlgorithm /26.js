let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
for (let i = 0;i<countries.length;i++){
    let str = countries[i][0]
    let str2 =countries[i][countries[i].length-1].toUpperCase()
    if (str == str2){
        console.log(countries[i])
    }
}