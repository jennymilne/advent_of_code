var fs = require("fs")
// console.log(fs)
var values = fs.readFileSync("./day_1_2020_input.txt", "utf8")
// console.log(values)
array_2 = values.split("\n").map((n) => {
    return parseInt(n)})


var isInArray = (array, num_2) => {
    for (var x of array) {
      if (x == num_2) {
        return true;
      }
    }
    return false;
  }

  //var test_input = [1721, 979, 366, 299, 675, 1456]
  // console.log(test_input)
  for (var num_1 of array_2){
        num_2 = 2020 - num_1
        var hit = isInArray(array_2, num_2)
      for (var num_2 of array_2){
          num_3 = 2020 -(num_1 + num_2)
          var hit = isInArray(array_2, num_3)
     
      if (hit == true){
          var solution = num_1 * num_2 * num_3
          console.log(solution)
          break
      }
      }
      
      // console.log(num)
  }