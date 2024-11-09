console.log("Test");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("submitForm");

    form.addEventListener("submit", function (event) {
        inputVal = document.getElementById("inputField").value
        event.preventDefault();
        const random = getRandomInt(3);
        console.log(random);
        if(random != 2){
            revealError();
        }
        else{
            revealBuffer();
            setTimeout(function() {
                window.location.replace("./style.css");
            }, 5000); // Redirects after 15 seconds
        }
    })
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