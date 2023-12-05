const marvel_heroes = ["thor", "iron man", "spiderman"]
const dc_heroes = ["batman", "flash", "superman"]

// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);

const allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes);

let arr1 = [1, 2, 3 ,[4, 5], [6, [7, 8]]]
let arr2 = arr1.flat(Infinity)
console.log(arr2);

console.log(Array.from("HelloWorld"));