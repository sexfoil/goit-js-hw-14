const inputNameElement = document.querySelector("#name-input");

const updateOutputName = () =>
    document.querySelector("#name-output").textContent =
        inputNameElement.value ? inputNameElement.value : "Anonymous";

inputNameElement.addEventListener("input", updateOutputName);
