let display = document.getElementById("display");
function appendToDisplay(value) {
  display.value += value;
}
function clearDisplay() {
  display.value = "";
}
function backSpace() {
  display.value = display.value.slice(0, -1);
}
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function handleInput(value) {
  document.getElementById("display").textContent = value;
}
