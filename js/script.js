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

function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var birthdate = new Date(document.getElementById("birthdate").value);
    var password = document.getElementById("password").value;

    if (fullName == "" || email == "" || contactNumber == "" || birthdate == "" || password == "") {
        alert("All fields must be filled out");
        return false
    }

    if (contactNumber.length != 10) {
        alert("Contact number must be 10 digits long");
        return false 
    }

    if (birthdate > new Date()) {
        alert("Please enter a valid birthdate");
        return false
    }
    else {
        return true;
    }
}
