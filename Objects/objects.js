// Create an empty object user

let user = {

};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
delete user.name;

// Check for emptyness

function isEmpty(obj) {

  let propertyCounter = 0;

  for(let key in obj) {
    propertyCounter++;

  }

  if(propertyCounter == 0) {
    return true;

  } else {
    return false;

  }
}

console.log(isEmpty(user));

// Sum object properties

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let totalSalaries = 0;

for(let employee in salaries) {
  totalSalaries += salaries[employee];
}

console.log(totalSalaries);