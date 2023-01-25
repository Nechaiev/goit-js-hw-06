const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  output.textContent = event.target.value !== '' ? event.target.value : 'Anonymous'
})


// const textInput = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// textInput.addEventListener('input', event => {
//   output.textContent = event.target.value
//   if (event.target.value === '') {
//     output.textContent = 'Anonymous'
//   }
// })


// const textInput = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// textInput.addEventListener('input', event => {
//   if (event.target.value === '') {
//     output.textContent = 'Anonymous'
//   }
//   output.textContent = event.target.value
// })