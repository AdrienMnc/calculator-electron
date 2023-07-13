let currentInput = "";
let operation = "";
let previousInput = "";

function updateDisplay() {
  document.querySelector("#display__content").innerText = currentInput;
}

document.querySelectorAll(".number").forEach((el) => {
  el.addEventListener("click", (e) => {
    currentInput += e.target.innerText;
    updateDisplay();
  });
});

document.querySelector("#clear").addEventListener("click", () => {
  currentInput = "";
  operation = "";
  previousInput = "";
  updateDisplay();
});

document.querySelector("#switch").addEventListener("click", () => {
  currentInput = currentInput.startsWith("-")
    ? currentInput.slice(1)
    : "-" + currentInput;
  updateDisplay();
});

document.querySelector("#dot").addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
});

document
  .querySelectorAll("#add, #subtract, #multiply, #divide")
  .forEach((el) => {
    el.addEventListener("click", () => {
      if (currentInput !== "") {
        operation = el.id;
        previousInput = currentInput;
        currentInput = "";
      }
    });
  });

document.querySelector("#equal").addEventListener("click", () => {
  if (previousInput !== "" && currentInput !== "" && operation !== "") {
    switch (operation) {
      case "add":
        currentInput = parseFloat(previousInput) + parseFloat(currentInput);
        break;
      case "subtract":
        currentInput = parseFloat(previousInput) - parseFloat(currentInput);
        break;
      case "multiply":
        currentInput = parseFloat(previousInput) * parseFloat(currentInput);
        break;
      case "divide":
        currentInput = parseFloat(previousInput) / parseFloat(currentInput);
        break;
    }
    operation = "";
    previousInput = "";
    updateDisplay();
  }
});
