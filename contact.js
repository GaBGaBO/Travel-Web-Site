
const LiveChat = document.querySelector(`.makingLiveChat`);
LiveChat.style.display = `none`;



const liveChatButton = document.querySelector(`.LiveChat`);
liveChatButton.addEventListener(`click`, function(){
    const LiveChat = document.querySelector(`.makingLiveChat`);
    LiveChat.style.display = `block`;

    const closeChat = document.querySelector(`.CloseChat`);
closeChat.addEventListener(`click`,function(){
    
   const LiveChat = document.querySelector(`.makingLiveChat`);
   LiveChat.style.display = `none`;

})

})