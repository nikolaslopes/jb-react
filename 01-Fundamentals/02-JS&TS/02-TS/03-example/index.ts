const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];
const combinedArray = [...numbers1, ...numbers2];

const user = {
  name: 'Nix',
  age: 26,
  address: 'Street X, 12',
};

const user2 = {
  ...user,
  age: 22,
}
console.log(combinedArray);
console.log(user);
console.log(user2);
