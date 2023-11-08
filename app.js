
let white = document.querySelector('.white');
let orange = document.querySelector('.orange');
let h6 = document.querySelector('#h6');
let first = document.querySelector('.firstPrompt');
let second = document.querySelector('.secondPrompt');
let tulips = document.querySelector('.tulips');
let button = document.querySelector('#next');
let sunFlower = document.querySelector('.sunFlower');
let isActiveTulips = false;

let attr = 'color';
let active = false;


let counter = 0;
const messages = {
    msg1: "You have selected the color white, now click next for next step.",
    msg2: "You have selected tulips as your favorite flower, now click next for next step.",
    msg3: "Thankyou for completing my survey! Now, close your eyes and slowly count from 1 to 10.",
}


white.addEventListener('click',()=>{
    active = true;

    h6.innerHTML = '';

    orange.style.opacity = '0';
    setTimeout(()=>{
        orange.style.display = 'none';
        (active === true) ? button.style.display = 'block' : 'none';
    },5000)

    typing();

})




tulips.addEventListener('click',()=>{
    isActiveTulips = true;


    active = true;

    counter = 0;

  h6.innerHTML = '';
  attr = 'flower';
  

    sunFlower.style.opacity = '0';
    setTimeout(()=>{
        sunFlower.style.display = 'none';
        (active === true) ? button.style.display = 'block' : 'none';
    },6000)

    

  

        typing();
        

})


function typing() {
    if (counter < messages.msg1.length && attr === 'color') {
        h6.textContent += messages.msg1.charAt(counter);
        counter++;

        setTimeout(typing, 70);
        
    }else if(counter < messages.msg2.length && attr === 'flower'){
        

        h6.textContent += messages.msg2.charAt(counter);
        counter++;

       
        setTimeout(typing, 70);
    }else if(counter < messages.msg3.length && attr === 'all'){
        h6.textContent += messages.msg3.charAt(counter);
        counter++;

       
        setTimeout(typing, 70);
    }

    
}


button.addEventListener('click',()=>{
    if(active === true && isActiveTulips === true){
        h6.innerHTML = '';

        counter = 0;
        attr = 'all';
        active = false;

        button.style.display = 'none';
        second.style.display = 'none';
        
        typing();
        
    }else if( active === true){
        active = false;

    button.style.display = 'none';
    first.style.display = 'none';
    second.style.display = 'block';

    h6.innerHTML = 'Click your favorite flower'
    }
})

