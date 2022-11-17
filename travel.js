

const guide = document.querySelector(`.guide`);
guide.style.display = `none`;

const bell = document.querySelector(`.bell`);
bell.addEventListener(`click`, function(){
    const guide = document.querySelector(`.guide`);
    guide.style.display = `block`;
    
})


const closeNot = document.querySelector(`.closeNotification`);
closeNot.addEventListener(`click`, function(){
    
const guide = document.querySelector(`.guide`);
guide.style.display = `none`;

})