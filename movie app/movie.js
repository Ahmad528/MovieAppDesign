//toggle menu button
document.querySelector('.menu-bar').addEventListener('click', toggleMenu);
document.querySelector('.cls-menu').addEventListener('click', toggleMenu);
function toggleMenu(){
    document.querySelector('.menu-list').classList.toggle('toggle-menu');
}

//toggle signin page
document.querySelector('.profile-tab').addEventListener('click', toggleSignin);
document.querySelector('.signin').addEventListener('click', toggleSignin);
function toggleSignin(){
    document.querySelector('.login-page').classList.toggle('toggle-signin');
}

//open rating box
var clickToRate= document.querySelectorAll('.click-to-rate');
clickToRate.forEach(element=>{
    element.addEventListener('click',openRating);
})
function openRating(e){
    console.log(e.target)
    const toggleRatingBtn= e.target.classList;
    toggleRatingBtn.toggle("toggle-rating-btn");
    const ramR= e.target.parentNode.nextElementSibling.classList;
    ramR.toggle("open-rating");
}

//add rating
var clickToAdd= document.querySelectorAll('.click-to-add').forEach(element=>{
    element.addEventListener('click', addRating);
})
function addRating(e){
    const rateToggle = e.target.classList;
    rateToggle.toggle("fa-star-o");
    rateToggle.toggle("fa-star");
}

//show popular movies card details
var cardDetails= document.querySelector('.popular-card-details');
var moviesImg= document.querySelectorAll('.movies-img');
moviesImg.forEach(element=>{
    element.addEventListener('click', showDetails);
})
function showDetails(e){
    cardDetails.classList.toggle("show");
}

//hide card details
document.querySelector('.close-card-detail').addEventListener('click', hideDetails);
function hideDetails(e){
    cardDetails.classList.toggle("show");
    e.stopPropagation();
}

//toggle review box
document.querySelector('.review-btn').addEventListener('click', toggleReview);
function toggleReview(e){
    document.querySelector('.review-box').classList.toggle("review-box-toggle");
}

//toggle artists detail
document.querySelector('.close-btn').addEventListener('click', toggleArtistDetail);
document.querySelectorAll('.art-img').forEach(element=>{
    element.addEventListener('click',toggleArtistDetail);
})
function toggleArtistDetail(e){
    document.querySelector('.artists-profile').classList.toggle("toggleArtists");
}

//click to watch
document.querySelectorAll('.trailer-play').forEach(element=>{
    element.addEventListener('click',watchVideo);
});
document.querySelectorAll('.streaming-card-body').forEach(element=>{
    element.addEventListener('click',watchVideo);
});
document.querySelectorAll('.stream').forEach(element=>{
    element.addEventListener('click',watchVideo);
});
document.querySelector('.watch-from-details').addEventListener('click',watchVideo);
function watchVideo(){
    window.location.href= "./watchmovie.html";
}