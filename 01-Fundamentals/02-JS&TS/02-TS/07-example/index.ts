const users = ['Nix', 'Kiki', 'Joel', 'Ellie'];

const userId = users.map((item, index) => ({ name: item, id: index + 1 }));

console.log(userId);
