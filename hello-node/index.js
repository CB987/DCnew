const sendHelp = require("./helper");

const message = sendHelp("bitches");

console.log("whatup bitches");
console.log(message);

const stockPrices = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stock_prices) {
  let maxProfit = 0;
  for (let i = 0; i < stock_prices.length; i++) {
    for (let j = i + 1; j < stock_prices.length; j++) {
      if (j - i > 0 && stock_prices[j] - stock_prices[i] > maxProfit) {
        maxProfit = stock_prices[j] - stock_prices[i];
      }
    }
  }
  return maxProfit;
}

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
