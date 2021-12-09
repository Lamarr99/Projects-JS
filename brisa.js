let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );


//Do while syntax

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

console.log(i)

