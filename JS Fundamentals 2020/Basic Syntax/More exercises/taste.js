function shoppingList(arrayOfCommands = []){
   let opa = initialList = arrayOfCommands[0].split('!');
   let current = opa[1]
   let one = opa.pop(current)
   console.log(current);
   console.log(opa.splice(1));
}

shoppingList([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
  ]);
