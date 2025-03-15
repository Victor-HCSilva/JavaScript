function add_five(MyObject) {
  console.log('Antes:');
  if (MyObject) {
      console.log(MyObject.Joao);
      console.log(MyObject.pedro);
      console.log(MyObject.alice);

      MyObject.Joao += 5;
      MyObject.pedro += 5;
      MyObject.alice += 5;
  }
}

const MyObject = {
  'Joao': 20,
  'pedro': 10,
  'alice': 14,
};

add_five(MyObject);

console.log('Depois:');
console.log(MyObject.Joao);
console.log(MyObject.pedro);
console.log(MyObject.alice);
