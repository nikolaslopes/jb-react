const numbers = [1, 2, 3, 4, 5];
const names = ['Nix', 'Kiki'];

function sumNumber(number: number) {
  return number + 2;
}
const numbersPlus2 = numbers.map(sumNumber);
const namesWithLastName = names.map((name) => `${name} Lopes`);

console.log(numbers);
console.log(numbersPlus2);
console.log('\n');
console.log(names);
console.log(namesWithLastName);
