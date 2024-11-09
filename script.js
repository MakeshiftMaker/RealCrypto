console.log("Test");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("submitForm");

    form.addEventListener("submit", function(event) {
        inputVal = document.getElementById("inputField").value
        event.preventDefault();
        console.log(flipCoin());
    })
})






function flipCoin(){
    const random = getRandomInt(100);
    if(random >= 50){
        return 1
    }
    return 0;
}