document.querySelector('.slider-button__right').onclick = SliderRight;
let buttonLeft = document.querySelector('.slider-button__left');
let sliderShow = document.querySelector ('.slider-block__show') ;
left = 0;

let html = document.querySelector('html') 
console.log();


function SliderRight () {
    left = left - 385

    if (left < -1170 ) {
        left = 0
    }
if (left < -0) {
        buttonLeft.style.display = 'inline-block';
    }
else {
        buttonLeft.style.display = 'none'; 
} 

 sliderShow.style.marginLeft = left +'px'
    
    }
buttonLeft.onclick = function SliderLeft () {
    left = left + 385
    
if ( left > 0) {
    left = 0
}
if  (left == 0) {
     buttonLeft.style.display = 'none';  
}
    sliderShow.style.marginLeft = left +'px'
}