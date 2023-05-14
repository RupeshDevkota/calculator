// const btns = document.querySelectorAll(".btn");
// const displayElem = document.querySelector(".display");
// let stringToDisplay = ""
// const operators = ["+", "-", "%", "*"]
// // console.log("btns:",btns)
// btns.forEach((btn) => {
//   // console.log("btns:",btns.innerText)
//   btn.addEventListener("click", () => {
//     let clickedButton = btn.innerText;
//     console.log("click");
//     // console.log("clickedButton:",clickedButton)

//     if (clickedButton === "AC") {
//       stringToDisplay = "";
//       return displayResult("");
//     }

//     if (clickedbutton === "←") {
//       stringToDisplay = stringToDisplay.slice(0, -1);
//       return displayResult(stringToDisplay);
//     }

//     if (operators.includes(clickedButton)) {
//       console.log("operator is clicked");
//       latestoperator = clickedButton;
//       console.log("stringToDisplay:", stringToDisplay)
//     }

//     displayResult(stringToDisplay);
//   });
// });
// stringToDisplay = stringToDisplay + clickedButton;
// displayResult(stringToDisplay);

// const displayResult = (value) => {
//   displayElem.innertext = value || 0;
// };

function calculate() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML = "Invalid input!";
  } else {
    var result = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("result").innerHTML = "Result: " + result;
  }
}
