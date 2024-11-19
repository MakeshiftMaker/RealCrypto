//console.log("Test");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("submitForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        inputVal = document.getElementById("inputField").value
        event.preventDefault();
        const random = getRandomInt(3);
        //console.log(random);

        if (random != 2) {
            revealBuffer();
            setTimeout(function () {
                revealError();
                hideBuffer();
            }, 5000); // Redirects after 15 seconds


        }
        else {
            revealBuffer();
            setTimeout(function () {
                window.location.replace("./collection.html");
                hideBuffer();
            }, 15000); // Redirects after 15 seconds

        }

        document.getElementById("inputField").value = "";

    })


    const inputField = document.getElementById('inputField');

    inputField.addEventListener('copy', (event) => {
        event.preventDefault();
    });

    inputField.addEventListener('paste', (event) => {
        event.preventDefault();
    });

    inputField.addEventListener('cut', (event) => {
        event.preventDefault();
    });



})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function revealError() {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.style.display = "block";
}

function revealBuffer() {
    const bufferGif = document.getElementById("bufferGif");
    bufferGif.style.display = "block";
}

function hideBuffer() {
    const bufferGif = document.getElementById("bufferGif");
    bufferGif.style.display = "none";
}

function fillProgressBar(id, duration, finishFunction) {
    let progressBar = document.getElementById(id);
    if(!progressBar) return;
    let value = progressBar.value; // Initial value
    let increment = 100 / (duration / 10); // How much to increment each tick (10 ms)

    let interval = setInterval(() => {
        if (value >= 100) {
            finishFunction();
            clearInterval(interval); // Stop when width reaches 100%
        } else {
            value += increment;

            progressBar.value = value;
        }
    }, 10); // Update every 10 milliseconds
}

function emptyProgressBar(id, duration) {
    let progressBar = document.getElementById(id);
    if(!progressBar) return;
    progressBar.value = 100; // Initial value
    value = progressBar.value;
    let decrement = 100 / (duration / 10); // How much to increment each tick (10 ms)

    let interval = setInterval(() => {
        if (value <= 0) {
            clearInterval(interval); // Stop when width reaches 100%
        } else {
            value -= decrement;
            //console.log(value);

            progressBar.value = value;
        }
    }, 10); // Update every 10 milliseconds
}

// Start the progress bar with a 5-second (5000 ms) animation duration
const progressLength = (getRandomInt(15) + 15) * 60000;//15 to 30 minutes lmao
fillProgressBar("longProgress", progressLength, showForm); 
console.log("Progress time is: " + progressLength/60000);

//fillProgressBar("longProgress", 5000, showForm);

// URL to redirect to if user doesn't confirm
const redirectUrl = '/index.html';

function showConfirmationDialog() {
    // Redirect timeout in milliseconds (10 seconds to respond)
    var redirectTimeout = (getRandomInt(5)+1)*1000; // 1 to 5 seconds lmaooo
    console.log("React Time is: " + redirectTimeout / 1000);
    

    const dialog = document.getElementById('confirmationDialog');
    if(!dialog) return;
    const confirmButton = document.getElementById('confirmButton');
    

    // Show the dialog
    dialog.showModal();
    emptyProgressBar("timeoutProgress", redirectTimeout);
    // Set a timer to redirect if the user doesn't confirm within the timeout
    const timeoutId = setTimeout(() => {
        if (dialog.open) {
            dialog.close();
        }
        window.location.replace("./index.html");
        //alert("Your session has expired, you have been logged out for your safety");
    }, redirectTimeout);

    // If the user clicks confirm, close the dialog and clear the redirect timer
    confirmButton.addEventListener('click', () => {
        dialog.close();
        clearTimeout(timeoutId); // Stop the redirect timer
    }, { once: true }); // Use { once: true } to prevent multiple event bindings
}

// Set an interval to show the popup every 10-20 seconds
const intervalTime = (getRandomInt(10)+10)*1000;
setInterval(showConfirmationDialog, intervalTime); // every 10 to 60 seconds
console.log("Interval time is: " + intervalTime/1000);

function showForm(){
    console.log("finsihed!");
    const statusField = document.getElementById("statusField");
    statusField.style.opacity = 1;
}
