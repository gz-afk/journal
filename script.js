// Load saved data
document.getElementById("journal").value =
  localStorage.getItem("journal") || "";

document.getElementById("moneyDisplay").innerText =
  "Saved: ₹" + (localStorage.getItem("money") || 0);

// Auto-save journal
document.getElementById("journal").addEventListener("input", function() {
  localStorage.setItem("journal", this.value);
});

// Mood system
const moods = ["😭","😢","☹️","😐","🙂","😊","😄","😁","🤩","🔥"];

const slider = document.getElementById("moodSlider");
const display = document.getElementById("moodDisplay");

slider.addEventListener("input", () => {
  display.innerText = moods[slider.value - 1];
  localStorage.setItem("mood", slider.value);
});

// Load mood
let savedMood = localStorage.getItem("mood") || 5;
slider.value = savedMood;
display.innerText = moods[savedMood - 1];

// Finance
function saveMoney() {
  let money = document.getElementById("money").value;
  localStorage.setItem("money", money);
  document.getElementById("moneyDisplay").innerText = "Saved: ₹" + money;
}

// Date
document.getElementById("date").innerText =
  new Date().toDateString();

// Random Quote
const quotes = [
  "Stay consistent.",
  "Small progress matters.",
  "Discipline beats motivation.",
  "Focus on your goals.",
  "You got this."
];

document.getElementById("quote").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];