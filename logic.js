var initialPrice = document.querySelector("#initial-price");

var stocksQuantity = document.querySelector("#stocks-quantity");

var currentPrice = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");

var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);


// submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

// function submitHandler() {
//     var ip = Number(initialPrice.value);
//     var qty = Number(stocksQuantity.value);
//     ip*qty;
//     currentPrice*qty;
//     var curr = Number(currentPrice.value);
  
//     calculateProfitAndLoss(ip, qty, curr);
//   }

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, Mahn its a red day With Loss of ${loss} and the loss percentage is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, congrats its a green day with profit of  ${profit} and the profit percentage percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`Please enter Valid Values`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}