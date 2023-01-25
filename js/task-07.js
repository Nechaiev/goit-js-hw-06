const inputChange = document.querySelector('#font-size-control');
const abracadabra = document.querySelector('#text');
inputChange.addEventListener('input', e => {
  abracadabra.style.fontSize = `${e.target.value}px`
})