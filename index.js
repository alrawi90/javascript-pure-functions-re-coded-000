



let heroes = [
  { firstName: 'Tony', lastName: 'Stark', heroName: 'Iron Man' },
  { firstName: 'Steve', lastName: 'Rogers', heroName: 'Captain America' },
  { firstName: 'Barry', lastName: 'Allen', heroName: 'The Flash' },
];

// function addInitialsToHeroes(heroes) {
//   heroes.forEach(hero => {
//     hero.initials = hero.firstName.charAt(0) + hero.lastName.charAt(0);
//   });
 
//   return heroes;
// }
 
// let heroesWithInitials = addInitialsToHeroes(heroes);
// console.log(heroesWithInitials[0]); // prints 'TS'


const addInitialsToHeroes1 = heroes => heroes.map(hero => Object.assign({}, hero, {
  initials: hero.firstName.charAt(0) + hero.lastName.charAt(0),
}));
let heroesWithInitials = addInitialsToHeroes1(heroes);
 
console.log(heroesWithInitials[0].initials); // prints undefined