function sumItems(array) {
  let total = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) total += sumItems(item);
    else total += item;
  });
  return total;
}

//console.log(sumItems([1, 5, 10]));
module.exports = sumItems;