const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", function (e) {
  if (this.value.length >= +this.dataset.length) {
    this.classList.add("valid");
    this.classList.remove("invalid");
    return
  }
  this.classList.add("invalid");
  this.classList.remove("valid");
})

// const textInput = document.querySelector("#validation-input");
// textInput.addEventListener("blur", onBlur);
// function onBlur(e) {
//   const input1 = e.currentTarget;
//   const inputLength = Number(input1.dataset.length);
//   if (input1.value.length === inputLength) {
//     input1.classList.remove("invalid");
//     input1.classList.add("valid");
//   } else {
//     input1.classList.remove("valid");
//     input1.classList.add("invalid");
//   }
// }

// const textInput = document.querySelector('#validation-input');
// textInput.addEventListener('blur', event => {
//   if (event.target.value.length == textInput.getAttribute('data-length')) {
//     textInput.classList.add('valid')
//     if (textInput.classList.contains('invalid')) {
//       textInput.classList.remove('invalid')
//     }
//   } else {
//     if (textInput.classList.contains('valid')) {
//       textInput.classList.remove('valid')
//     }
//     textInput.classList.add('invalid')
//   }
// })

