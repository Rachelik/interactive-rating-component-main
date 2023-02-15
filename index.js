function submit_rating_handler() {

    document.getElementById('rating-container').style.display = 'none';
    document.getElementById('thanku-container').style.display = 'flex';

    // alert('button clicked');
}

function rating_click() {
    document.getElementById('rating-score').innerHTML = event.target.innerHTML;

    ratingBtns = document.getElementsByClassName("rating-button");
    for (var i = 0; i < ratingBtns.length; i++) {
        ratingBtns[i].style.background = 'hsl(213, 19%, 18%)';
        ratingBtns[i].style.color = '#7c8798';
    }

    event.target.style.background = 'hsl(25, 97%, 53%)';
    event.target.style.color = 'white';

}