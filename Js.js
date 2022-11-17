//Location
const georgia = document.getElementById(`fname`);


//Destination
const trip = document.getElementById(`Nyc`);



// this is working when you click icons 
const icons  = document.querySelector(`.iconss`);
icons.addEventListener(`click`, function(){
    const georgia = document.getElementById(`fname`).value = `New York City`;
    const trip = document.getElementById(`Nyc`).value = `Georgia`;
    

    setTimeout(function(){
      icons.addEventListener(`click`, function(){
        const georgia = document.getElementById(`fname`).value = `Georgia`
        const trip = document.getElementById(`Nyc`).value = `New York City`
      })
     
    },10) 



   
})






// // buy ticket 


const makeTicket = document.querySelector(`.makeTicket`);
makeTicket.style.display = `none`;

const buyTicket = document.getElementById(`Buy`);
buyTicket.style.display = `none`;


// Finish   
// This is working when you click Search flights  button:)
const Search = document.getElementById(`Search`);
Search.addEventListener(`click`, function(){
    const buyTicket = document.getElementById(`Buy`);
    buyTicket.style.display = `block`;

const makeTicket = document.querySelector(`.makeTicket`);
makeTicket.style.display = `block`;


})
// payment ჯერ გავაქრობთ და შემდეგ უკვე ავდგებით და გამოვაჩენთ როცა
// დავაწვებით ყიდვის ღილაკს :)
const paymentMethod = document.getElementById(`paymentt`);
paymentMethod.style.display = `none`;



const buyTick = document.getElementById(`Buy`);
buyTick.addEventListener(`click`, function(){
    
    const makeTicket = document.querySelector(`.makeTicket`);
    makeTicket.style.display = `none`;

    const buyTicket = document.getElementById(`Buy`);
    buyTicket.style.display = `none`;
    
    const paymentMethod = document.getElementById(`paymentt`);
    paymentMethod.style.display = `block`;

    const btnPay = document.querySelector(`.pay`);
    btnPay.addEventListener(`click`, function(){
        paymentMethod.style.display = `none`;
        setTimeout(function(){
            alert(`Congratulation🍾This Ticket Is Purchased🎫✈`)
        })
    })
})







