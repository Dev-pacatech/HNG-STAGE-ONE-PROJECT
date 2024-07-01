const currentTime = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

function updateDate() {
  const now = new Date();
  currentTime.textContent = now.toLocaleString("en-US", { timeZone: 'UTC' });
  currentDay.textContent = now.toLocaleDateString("en-US", { weekday: 'long' });
}

updateDate();
setInterval(updateDate, 1000); // Update time every second
