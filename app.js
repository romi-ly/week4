const randomNumberFeedback = document.querySelector('#randomNumber');
const generateRandomBtn = document.querySelector('#generateRandomBtn');

generateRandomBtn.addEventListener('click', () => {
   //const randomNumber = Math.floor(Math.random() * (11 - 1) + 1); //1 - 10 -  Math.random() * (max - min) + min;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    const feedbackMesseage = `Random Number: ${randomNumber}`;
    console.log(feedbackMesseage);

    randomNumberFeedback.innerHTML = feedbackMesseage;

});