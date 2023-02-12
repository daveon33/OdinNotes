// Options to define objects

let user = new Object();
let anotherUser = {
    name: "David",
    age: 27,
    "likes Yellyfish": true,
};

// To access a property we can use the dot notation, also it adds new properties to the object

console.log(anotherUser.age)
anotherUser.isAdmin = true;
console.log(anotherUser.isAdmin);

// Remove a property with delete

delete user.age;


// Square brackets, with multiword property names, accesing the values is done with this

console.log(anotherUser["likes Yellyfish"]);

// Computed properties: To use square brakets when creating an object

let fruit = prompt('What fruit do you want to add? ');

let basket = {
    [fruit]: 5,
}

console.log(basket.orange);

// Property value shorthand, when the name and value have the same tag

function makeUser(name, age) {
    return {
        name,
        age,
    }
}

let mateo = makeUser("Mateo", 26);
console.log(mateo.name);

// The "in" keyword helps by checking if a property is define in an objecct

// With the for..in loop we can go aroung every property inside an object

for(let key in anotherUser) {
    alert(key);
    alert(anotherUser[key]);
}