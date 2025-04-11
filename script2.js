const quotes = [
  "I'm ready! I'm ready!",
  "Is mayonnaise an instrument?",
  "I'm ugly and I'm proud!",
  "The best time to wear a striped sweater is all the time.",
  "I wumbo, you wumbo, he, she, we wumbo.",
  "Once upon a time there was an ugly barnacle. He was so ugly that everyone died. The end.",
];

function changeQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = `"${quote}"`;
}

function playSound() {
  const audio = new Audio("ukelele.mp3");
  audio.volume = 1.0; // max volume
  audio.play();
}
