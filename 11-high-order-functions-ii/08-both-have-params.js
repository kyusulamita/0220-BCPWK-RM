/*

  what if both functions take parameters?
  https://goo.gl/v6EHCW
  https://goo.gl/1KuZJg
  
*/


// function getMonster(species) {
//   // species
//   return function(color) {
//     // color
//     console.log(`ROAR, I am a ${color} ${species}`);
//   };
// }

// let dragonCreator = getMonster('dragon');

// dragonCreator('red');
// dragonCreator('blue');
// dragonCreator('emerald');



function getGreeter(name1) {
  return function(name2) {
    console.log('Hi ' + name1 + ', meet ' + name2);
  };
}

let marieGreetAndIntroduce = getGreeter('Marie');
marieGreetAndIntroduce('Rosalind'); // 'Hi Marie, meet Rosalind'
marieGreetAndIntroduce('Thomas');

let sulaGreetAndIntroduce = getGreeter("Sulamita");
sulaGreetAndIntroduce("Savannah");