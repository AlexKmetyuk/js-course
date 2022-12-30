const arr = [10, 12, 15, 21];

// const timeout = setTimeout(function () {
//   console.log(`Index: ${i}, element: ${arr[i]}`);
// }, 3000);

for (var i = 0; i < arr.length; i++) {
  let newIterator = i;
  setTimeout(function () {
    console.log(`Index: ${newIterator}, element: ${arr[newIterator]}`);
  }, 3000);
}
