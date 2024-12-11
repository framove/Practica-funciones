/*let myFavoriteHero = 'Hulk';

let h = 5;




const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character);

let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24;

console.log("Soy " + firstName + " " + lastName + ", tengo "+age+" años y me gustan los lobos." );

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1.price + toy2.price);

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice = 25000;

car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;

console.log(car1, car2);

let x = 10;
let y = 5;

let suma = ( x * y );

alert(suma);*/

/*const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let avenger = avengers[0];

console.log(avenger);

avengers.splice(0, 1, 'IRONMAN')

console.log(avengers);*/

//alert("El array avengers tiene "+avengers.length+" elementos.")

/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer")

console.log(rickAndMortyCharacters[4]);*/


/*const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop()

console.log(rickAndMortyCharacters[0] + " " + rickAndMortyCharacters[4]);

rickAndMortyCharacters.splice(1,1);

console.log(rickAndMortyCharacters);*/

/*const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number2  / number1  == number3){
    console.log('number2 dividido entre number1 es igual a 2')
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");
  }
  
  if (number3 != number1) {
    console.log("number3 es distinto number1");
  }

  if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
  }

  if (number3 * 5 == number1 && number1 * 2 == number2) {
    console.log("number3 por 5 es igual a number1 y number1 por 2 es igual a nunber2");
  }

if (number2 / 2 == number1 || number1 / 5 == number3) {
    console.log("number2 entre 2 es igual a number1 o number1 entre 5 es igual a number3");
    
}*/

for (let i = 0; i <= 10; i++ ) {
    if (i < 10 ) {
        console.log("intentado dormir " + i );
    }else { 
        console.log("dormido");
        
    }
}