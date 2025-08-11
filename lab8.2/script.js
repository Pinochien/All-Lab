// 1. Select HTML elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuoteButton");

// 2. Create an array of quotes
const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Do something today that your future self will thank you for.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
];

// 3. Add event listener to the button
newQuoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[randomIndex];
});
