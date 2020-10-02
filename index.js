const box = document.getElementById("box");
const text = document.getElementById("text");

box.addEventListener("focus", function () {
  text.textContent = "Type a number between 1 and 5";
});

box.addEventListener("focusout", function () {
  text.textContent = "Click here to give your rating";
});

// Write your code here 👇

const keyToEmoji = {
  53: "😁",
  52: "🙂",
  51: "😐",
  50: "🙁",
  49: "🤬",
};

box.addEventListener("keyup", function (evt) {
  text.textContent = keyToEmoji[evt.keyCode];
});
