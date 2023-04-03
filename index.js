const quoteText = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");

function generateQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.quotable.io/random");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const quote = JSON.parse(xhr.responseText);
      quoteText.textContent = `"${quote.content}" - ${quote.author}`;
      copyBtn.disabled = false;
    } else {
      console.error("Error fetching quote");
    }
  };
  xhr.send();
}

function copyQuote() {
  const text = quoteText.textContent;
  const elem = document.createElement("textarea");
  elem.value = text;
  document.body.appendChild(elem);
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);
}

generateBtn.addEventListener("click", generateQuote);
copyBtn.addEventListener("click", copyQuote);
