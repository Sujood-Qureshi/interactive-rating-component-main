const frontCard = document.querySelector('.front-card');
// console.log(frontCard) 
const ratingBtn = document.querySelectorAll('.unactive');
// console.log(ratingBtn);
const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
const btnThree = document.querySelector('#three');
const btnFour = document.querySelector('#four');
const btnFive = document.querySelector('#five');
const finalRating = document.querySelector('#your-rating');
const backCard = document.querySelector('.back-card')


// console.log(typeof(finalRating.childNodes[1].innerText))


const onRatingOne = () => {
    ratingBtn.forEach((el) => {
        el.classList.remove('active')
    })
    btnOne.classList.add('active');
    finalRating.childNodes[1].innerText = 1;
}
const onRatingTwo = () => {
    ratingBtn.forEach((el) => {
        el.classList.remove('active')
    })
    btnTwo.classList.add('active');
    finalRating.childNodes[1].innerText = 2;

}
const onRatingThree = () => {
    ratingBtn.forEach((el) => {
        el.classList.remove('active')
    })
    btnThree.classList.add('active');
    finalRating.childNodes[1].innerText = 3;

}
const onRatingFour = () => {
    ratingBtn.forEach((el) => {
        el.classList.remove('active')
    })
    btnFour.classList.add('active');
    finalRating.childNodes[1].innerText = 4;

}
const onRatingFive = () => {
    ratingBtn.forEach((el) => {
        el.classList.remove('active')
    })
    btnFive.classList.add('active');
    finalRating.childNodes[1].innerText = 5;

}
const onSubmit = () => {
    frontCard.classList.add('hidden');
    backCard.classList.remove('hidden');

}
// console.log(Rating)
