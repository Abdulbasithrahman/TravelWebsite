$(document).ready(function(){
    $("#book").on('click',function(){
        var destination = $('#destination').val();
        var persons = $('#persons').val();
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var description = $('#description').val();

        console.log(destination)
        console.log(persons)
        console.log(startDate)
        console.log(endDate)
        console.log(description)

    if (new Date(startDate) < new Date()) {
        alert("Start Date should be a future date.");
        return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
        alert("End Date should be greater than Start Date.");
        return;
    }

    if (destination && persons && startDate && endDate && description) {
        alert("Booking successful!");
    }

    else {
        alert("Please fill in all the fields.");
    }
    })
})

let slideIndex = 1;
displaySlide(slideIndex);

function moveSlides(n) {
    displaySlide(slideIndex += n);
}

function activeSlide(n) {
    displaySlide(slideIndex = n);
}

function displaySlide(n) {
    let i;
    let totalslides =
        document.getElementsByClassName("slide");



    if (n > totalslides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    totalslides[slideIndex - 1].style.display = "block";
}