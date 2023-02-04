// Targeting the second method
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World Again!");

// Targeting the third method
const finalBtn = document.querySelector('#idealbtn');
finalBtn.addEventListener('click', () => {
    alert("Hello World!!!");
});

// Practicing callbacks
finalBtn.addEventListener('click', (e) => {
    console.log(e.target);
} );

finalBtn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });