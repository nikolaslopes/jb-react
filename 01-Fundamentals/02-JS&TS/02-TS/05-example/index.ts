const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'papaya', 'melon'];

function verifyFruits(fruit: string) {
  return fruit != 'apple';
}

const filteredNumbers = numbers.filter((number) => number > 3);
const filteredFruits = fruits.filter(verifyFruits);

console.log(filteredNumbers);
console.log(filteredFruits);
