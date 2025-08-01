let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let currentExpression = "";

// Button click logic
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    handleInput(value);
  });
});

// Keyboard input logic
document.addEventListener("keydown", (e) => {
  let key = e.key;

  if (!isNaN(key) || key === ".") {
    handleInput(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    handleInput(key);
  } else if (key === "Enter") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("DEL");
  } else if (key === "Escape") {
    handleInput("AC");
  }
});

function handleInput(value) {
  if (value === "AC") {
    currentExpression = "";
    inputBox.value = "";
  } else if (value === "DEL") {
    currentExpression = currentExpression.slice(0, -1);
    inputBox.value = currentExpression;
  } else if (value === "=") {
    try {
      currentExpression = eval(currentExpression).toString();
      inputBox.value = currentExpression;
    } catch (err) {
      inputBox.value = "Error";
      currentExpression = "";
    }
  } else {
    currentExpression += value;
    inputBox.value = currentExpression;
  }
}
