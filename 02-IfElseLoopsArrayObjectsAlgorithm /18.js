function clear(array) {
  let temp_arr = [array[0]];
  for (let i = 1; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < temp_arr.length; j++) {
      if (array[i] == temp_arr[j]) {
        count++;
      }
    }
    if (count == 0) {
      temp_arr.push(array[i]);
    }
  }
  console.log(temp_arr);
}

clear([1, 2, 1, 2, 3]);
clear(["a", 2, "d", 2, "a", 14, 14, "s", false]);
