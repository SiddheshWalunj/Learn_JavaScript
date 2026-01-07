const marvel_hero = ["thor","ironman","spiderman"]

const dc_heros = ["superman","flash","batman"]

// marvel_hero.push(dc_heros)

// console.log(marvel_hero); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_hero[3][1]); // flash

const all_heros = marvel_hero.concat(dc_heros)

console.log(all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_hero, ...dc_heros]

console.log(all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log("final real_another_array: ", real_another_array);