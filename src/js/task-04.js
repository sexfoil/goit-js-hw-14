let counterValue = 0;

const updateCounter = () => {
    document.querySelector("#value").textContent = counterValue;
}

const increaseCounter = () => {
    counterValue += 1;
    updateCounter();
};

const decreaseCounter = () => {
    counterValue -= 1;
    updateCounter();
};

const decrementButtonElement = document.querySelector('button[data-action="decrement"]');
decrementButtonElement.addEventListener("click", decreaseCounter);

const incrementButtonElement = document.querySelector('button[data-action="increment"]');
incrementButtonElement.addEventListener("click", increaseCounter);
