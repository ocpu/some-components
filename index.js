import './slider.js'

const $slider = document.querySelector('#slider')

$slider.addEventListener('value', ({detail:value}) => {
  console.log('value:', value)
})
$slider.addEventListener('change', ({detail:value}) => {
  console.log('change:', value)
})
