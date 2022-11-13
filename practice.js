// const person = {
//     name: ["Ashunti", "Ware"],
//     age: 23,
//     bio: function () {
//       console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//     },
//     introduceSelf: function () {
//       console.log(`Hi! I'm ${this.name[0]}.`);
//     },
//   };

const colors = ["Infrared", "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Ultraviolet"]

//using forEach:
// colors.forEach((color, index) => {
//     return colors[index] = "neon" + color;
// });
// console.log(colors)

//using .map:
let hotcolors = colors.map(color => {
    return "hot" + color;
})
console.log(hotcolors)

//using forEach:
colors.forEach((color, index) => {
 return colors[index] = "neon" + color;
});
console.log(colors)