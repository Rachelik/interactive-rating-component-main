let x = "";

function submit_rating_handler() {
    if (x == "") {
        alert('Please select a rating.');
    }
    else {
        document.getElementById('rating-container').style.display = 'none';
        document.getElementById('thanku-container').style.display = 'flex';
    }
}

function rating_click() {
    x = event.target.innerHTML;
    document.getElementById('rating-score').innerHTML = x;

    ratingBtns = document.getElementsByClassName("rating-button");
    for (var i = 0; i < ratingBtns.length; i++) {

        if (ratingBtns[i].innerHTML != x) {
            ratingBtns[i].style.background = 'hsl(213, 19%, 18%)';
            ratingBtns[i].style.color = '#7c8798';
        }
        else {
            event.target.style.background = 'hsl(25, 97%, 53%)';
            event.target.style.color = '#FFFFFF';
        }
    }
}