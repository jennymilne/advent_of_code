var fs = require("fs")



// Part I 

// var test_instructions = fs
// .readFileSync("./input/day_2_test.txt", "utf8")
// .split("\n")
// .map((x) => {
//     var [direction, magnitude] = x.split(" ");
//     return {
//         direction,
//         magnitude: parseInt(magnitude)
//     };
// });

var instructions = fs
.readFileSync("./input/day_2.txt", "utf8")
.split("\n")
.map((x) => {
    var [direction, magnitude] = x.split(" ");
    return {
        direction,
        magnitude: parseInt(magnitude)
    };
});

// console.log(instructions)
var horizontal = 0;
var depth = 0;
var aim = 0;

// for (var instruction of instructions) {
//     if (instruction.direction == "forward") {
//         horizontal = horizontal + instruction.magnitude;
//     }
//     if (instruction.direction == "up") {
//         depth = depth - instruction.magnitude;
//     }
//     if (instruction.direction == "down") {
//         depth = depth + instruction.magnitude;
//     }
// }

for (var instruction of instructions) {
    if (instruction.direction == "forward") {
        horizontal = horizontal + instruction.magnitude;
        depth = depth + (aim * instruction.magnitude)
    }
    if (instruction.direction == "up") {
        // depth = depth - instruction.magnitude;
        aim = aim - instruction.magnitude
    }
    if (instruction.direction == "down") {
        // depth = depth + instruction.magnitude;
        aim = aim + instruction.magnitude;
    }
}
// console.log(horizontal);
// console.log(depth);
console.log(horizontal*depth)

// console.log(input_instructions)


// class Instruction {
//     constructor(direction, magnitude){
//         this.direction = direction;
//         this.magnitude = magnitude;
//     }
// }

// let test_input = new Instruction("up", 3); //you can't iterate over objects! but you can in a map??

// const test_instructions = new Map([ // attempt at using map
//     ['forward', 5],
//     ['down', 10],
//     ['up', 2],
//     ['forward', 7]
//   ]);

// for (instruction of test_instructions){
//     console.log(test_instructions.get('forward'))
// }

// console.log(test_instructions)



// attempt at making functions

// var add_to_horizontal  = (input_instructions, "forward") => {
//     for (var direction of input_instructions) {
//         if (direction == "forward") {
//             return true;
//         }
//     return false;
//     }
// }

// var add_to_depth  = (input_instructions, "up", "down") => {
//     for (var direction of input_instructions) {
//         if (direction == "up") {
//             return true;
//         }
//     return false;
//     }
// }