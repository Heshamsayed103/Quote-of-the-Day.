var quotes = [
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The only person you are destined to become is the person you decide to be.",
];

var quoteElement = document.getElementById("quote");
var newQuoteButton = document.getElementById("newQuoteButton");

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
}

newQuoteButton.addEventListener("click", getRandomQuote);


getRandomQuote();