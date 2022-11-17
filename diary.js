
const allNycImages = document.querySelector(`.allNycimage`);
allNycImages.style.display = `none`;

const winterBtn  = document.querySelector(`.winterBtn`);
winterBtn.addEventListener(`click`, function(){
    const allNycImages = document.querySelector(`.allNycimage`);
allNycImages.style.display = `block`;
})



const close = document.querySelector(`.x`);
close.addEventListener(`click`, function(){
    
const allNycImages = document.querySelector(`.allNycimage`);
allNycImages.style.display = `none`;
})





const allDelreyimage = document.querySelector(`.allDelreyimage`);
allDelreyimage.style.display = `none`;

const summerBtn = document.querySelector(`.summerBtn`);
summerBtn.addEventListener(`click`, function(){ 
    const allDelreyimage = document.querySelector(`.allDelreyimage`);
    allDelreyimage.style.display = `block`;

})

const close2 = document.querySelector(`.y`);
close2.addEventListener(`click`, function(){
    
    const allDelreyimage = document.querySelector(`.allDelreyimage`);
    allDelreyimage.style.display = `none`;
})

