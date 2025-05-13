//your JS code here. If required.
const counterEl = document.getElementById("counter");
    const buttonEl = document.getElementById("incrementBtn");

    buttonEl.addEventListener("click", () => {
      const currentValue = parseInt(counterEl.innerText);
      alert(currentValue);
      counterEl.innerText = currentValue + 1;
    });