function clear(array) {
  let temp_arr = [];

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        console.log(i, j, array[i], array[j]);

        count++;
      }
      console.log(count);

      // console.log(typeof temp_arr.findIndex(array[i]),ar);
      // console.log(array[i]);
    }

    if (count == 1) {
      temp_arr.push(array[i]);
    }
    console.log(temp_arr);
  }
  console.log(temp_arr);
}

clear([1, 2, 1, 2, 3]);
