const person = {
  name: 'bruno',
  age: 34, 
  location:{
    city: 'Perth',
    temp: 30
  }
}

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature ) {
  console.log(`it is ${temperature} in ${city}.`);
}




//
//  Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city1, state = 'New York'] = address;

console.log(`You are in ${city1}, ${state}.`)