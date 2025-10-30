document.getElementById("meetMe").onclick = function () {window.location = "https://www.instagram.com/hisyamauralistiawan?igsh=dzNyNWJqYmMxdnl3"; };

const quotes = [
  "Hello world",
  "Do it scared. Bravery isn’t the absence of fear it’s action despite it.",
  "The best way to predict your future is to create it.",
  "You don’t have to be extreme, just consistent.",
  "Discipline is choosing what you want most over what you want now.",
  "Dream big. Start small. Act now.",
  "Perfection is not attainable, but if we chase perfection we can catch excellence.",
  "Don’t count the days, make the days count.",
  "You either run the day or the day runs you.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Work hard in silence, let your success make the noise.",
  "The secret of getting ahead is getting started.",
  "Sometimes later becomes never. Do it now.",
  "Don’t let yesterday take up too much of today.",
  "Courage is resistance to fear, mastery of fear — not absence of fear.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "You don’t find willpower, you create it.",
  "A year from now, you’ll wish you had started today.",
  "It always seems impossible until it’s done.",
  "Push yourself, because no one else is going to do it for you.",
  "Fall seven times, stand up eight.",
  "Make your life a masterpiece; imagine no limitations on what you can be.",
  "Motivation gets you started. Habit keeps you going.",
  "Don’t wish for it. Work for it.",
  "What you do today can improve all your tomorrows.",
  "Energy flows where attention goes."
];

const textEl = document.getElementById("text");
const cursorEl = document.querySelector(".cursor");

let quoteIndex = 0;
let charIndex = 0;
let typingSpeed = 80;
let delayBetweenQuotes = 5000; // 5 seconds

function type() {
  const currentQuote = quotes[quoteIndex];
  cursorEl.classList.add("typing"); // stop blinking while typing

  if (charIndex < currentQuote.length) {
    textEl.textContent += currentQuote.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    cursorEl.classList.remove("typing"); // resume blink
    setTimeout(erase, delayBetweenQuotes);
  }
}

function erase() {
  cursorEl.classList.add("typing"); // stop blinking while erasing

  if (charIndex > 0) {
    textEl.textContent = textEl.textContent.slice(0, -1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    cursorEl.classList.remove("typing");
    quoteIndex = (quoteIndex + 1) % quotes.length;
    setTimeout(type, 500);
  }
}

window.onload = type;
