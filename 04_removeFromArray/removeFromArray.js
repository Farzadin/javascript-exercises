function removeFromArray(array, ...args) {
  let filter = array.filter((element) => !args.includes(element));
  return filter;

  // args.forEach((element) => {
  //   const index = array.indexOf(element);
  //   if (index > -1) array.splice(index, 1);
  // });
  // return array;
}
// Do not edit below this line
module.exports = removeFromArray;
