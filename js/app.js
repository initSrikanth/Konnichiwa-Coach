"use strict";
const activities = Object.freeze({
  learn: { title: "Learn", symbol: "あ", description: "Discover Japanese words with pictures and pronunciation." },
  practise: { title: "Practise", symbol: "✓", description: "Match pictures and words to see what you remember." },
  play: { title: "Play", symbol: "✿", description: "Explore Japanese through simple memory games and quizzes." },
  progress: { title: "My Progress", symbol: "★", description: "Celebrate each step in your Japanese learning journey." }
});
const home = document.getElementById("home");
const activityView = document.getElementById("activity-view");
const activityTitle = document.getElementById("activity-title");
const activityDescription = document.getElementById("activity-description");
const activitySymbol = document.getElementById("activity-symbol");
let lastTrigger = null;
function showView(view) {
  const activity = activities[view];
  const isHome = !activity;
  home.hidden = !isHome;
  activityView.hidden = isHome;
  if (activity) {
    activityTitle.textContent = activity.title;
    activityDescription.textContent = activity.description;
    activitySymbol.textContent = activity.symbol;
  }
  document.title = isHome ? "Konnichiwa Coach | Japanese made joyful" : `${activity.title} | Konnichiwa Coach`;
  window.scrollTo({ top: 0, behavior: "instant" });
  if (isHome && lastTrigger) {
    lastTrigger.focus({ preventScroll: true });
  } else if (!isHome) {
    document.getElementById("back-home").focus({ preventScroll: true });
  }
}
document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => {
    lastTrigger = button;
    location.hash = button.dataset.view;
  });
});
document.getElementById("back-home").addEventListener("click", () => { location.hash = "home"; });
document.getElementById("return-home").addEventListener("click", () => { location.hash = "home"; });
window.addEventListener("hashchange", () => showView(location.hash.slice(1)));
showView(location.hash.slice(1));
