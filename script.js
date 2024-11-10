console.log("Test");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("submitForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        inputVal = document.getElementById("inputField").value
        event.preventDefault();
        const random = getRandomInt(3);
        console.log(random);

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

function fillProgressBar(id, duration) {
    let progressBar = document.getElementById(id);
    let value = 0; // Initial value
    let increment = 100 / (duration / 10); // How much to increment each tick (10 ms)

    let interval = setInterval(() => {
        if (value >= 100) {
            clearInterval(interval); // Stop when width reaches 100%
        } else {
            value += increment;

            progressBar.value = value;
        }
    }, 10); // Update every 10 milliseconds
}

// Start the progress bar with a 5-second (5000 ms) animation duration
fillProgressBar("longProgress", (getRandomInt(15) + 15) * 60000); //15 to 30 minutes lmao


// URL to redirect to if user doesn't confirm
const redirectUrl = '/index.html';

function showConfirmationDialog() {
    // Redirect timeout in milliseconds (10 seconds to respond)
    var redirectTimeout = (getRandomInt(15)+1)*1000; // 1 to 15 seconds lmaooo

    const dialog = document.getElementById('confirmationDialog');
    const confirmButton = document.getElementById('confirmButton');

    // Show the dialog
    dialog.showModal();

    // Set a timer to redirect if the user doesn't confirm within the timeout
    const timeoutId = setTimeout(() => {
        if (dialog.open) {
            dialog.close();
        }
        window.location.href = redirectUrl;
        alert("Your session has expired, you have been logged out for your safety");
    }, redirectTimeout);

    // If the user clicks confirm, close the dialog and clear the redirect timer
    confirmButton.addEventListener('click', () => {
        dialog.close();
        clearTimeout(timeoutId); // Stop the redirect timer
    }, { once: true }); // Use { once: true } to prevent multiple event bindings
}

// Set an interval to show the popup every 60 seconds
setInterval(showConfirmationDialog, (getRandomInt(60)+10)*1000); // every 10 to 60 seconds
