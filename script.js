const envelopeWrapper = document.getElementById("envelopeWrapper");
const instruction = document.getElementById("instruction");

envelopeWrapper.addEventListener("click", () => {

    envelopeWrapper.classList.toggle("open");

    if (envelopeWrapper.classList.contains("open")) {
        instruction.textContent = "A little message, written just for you ♡";
    } else {
        instruction.textContent = "Click the envelope to open your letter";
    }

});