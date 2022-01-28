var fs = require("fs")

var test_depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
var increase_count = 0
// var increase_window_count = 0

var input = fs.readFileSync("./input/day_1.txt", "utf8")
// console.log(input)
input_depths = input.split("\n").map((n) => {
    return parseInt(n)})

//Part I

// for (var depth = 1; depth < input_depths.length; depth++){ 
//     const prev_depth = input_depths[depth - 1];
//     const current_depth = input_depths[depth];
//         if (current_depth >= prev_depth){
//             increase_count++;
//         }
//     } 
    
// console.log(increase_count)

// Part II

for (var depth = 3; depth < input_depths.length; depth++){
    var prev_window_sum = input_depths[depth - 1] + input_depths[depth - 2] + input_depths[depth - 3];
    var current_window_sum = input_depths[depth] + input_depths[depth - 1] + input_depths[depth - 2];
        if (current_window_sum > prev_window_sum){
            increase_count++;
        }
    } 
    
console.log(increase_count)

// for (var depth = 1; current_depth < input_depths.length; depth++){
//         const prev_depth = input_depths[depth-1];
//         const current_depth = input_depths[depth];
//         const next_depth = input_depths[depth+1];
//         var window_sum = prev_depth + current_depth + next_depth;
//     for (var window_sum of input_depths){
//         if (window_sum[depth++] >= window_sum[depth]){
//             increase_window_count++;
//         }
//     }
// }
// console.log(increase_window_count)
// for (var depth of input_depths){
//     var increase_count = 0
//     var increase = increased_depth(input_depths, depth)
//   if (increase == true){
//         var increase_count = increase_count + 1
//         console.log(increase_count)
//     if (increase == false){
//         var increase_count = increase_count
//         console.log(increase_count)
//     }   
//   }  
// }


