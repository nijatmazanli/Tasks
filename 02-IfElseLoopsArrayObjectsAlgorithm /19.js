function isEqual(array1, array2) {
  let count = 0;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        count++;
      }
    }
  }
  if (count == array1.length && array2.length == count) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])