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

// Creating a new div

const newRectangle = document.createElement('div');
newRectangle.style.backgroundColor = 'pink';
newRectangle.style.borderStyle = 'solid';

const newH1 = document.createElement('h1');
newH1.textContent = 'I\'m in a div!';

const anotherP = document.createElement('p');
anotherP.textContent = 'ME TOO!';

newRectangle.appendChild(newH1);
newRectangle.appendChild(anotherP);

// Appending the div inside the main container

container.appendChild(newRectangle);

