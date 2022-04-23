function es5Function() {
  console.log('Function es5', this);
}

const es6Function = () => {
  console.log('Arrow Function', this);
};

es5Function();
es6Function();
