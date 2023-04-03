const quoteText = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");

function generateQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.quotable.io/random");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const quote = JSON.parse(xhr.responseText);
      quoteText.textContent = `"${quote.content}" - ${quote.author}`;
    } else {
      console.error("Error fetching quote");
    }
  };
  xhr.send();
}

generateBtn.addEventListener("click", generateQuote);
