// We target an specific element that we are going to manipulate

const container = document.querySelector('#container');

// Creating a new p element

const newP = document.createElement('p');
newP.textContent = 'Hey! I\'m red';
newP.style.color = 'red';
container.appendChild(newP);

// Creating a new H3 element

const newH = document.createElement('h3');
newH.textContent = 'I\'m a blue h3!';
newH.style.color = 'blue';
container.appendChild(newH);



