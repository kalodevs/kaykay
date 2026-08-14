const openBtn = document.getElementById('openBtn');
const loadingText = document.getElementById('loadingText');
const heartContainer = document.getElementById('heart-container');
const welcomeCard = document.getElementById('welcomeCard');
const mainContent = document.getElementById('mainContent');

// Open surprise button
openBtn.addEventListener('click', () => {
  loadingText.classList.remove('hidden');
  openBtn.disabled = true;

  createHeartRain();

  setTimeout(() => {
    welcomeCard.classList.add('hidden');
    mainContent.classList.remove('hidden');

    // Start the timer immediately when content appears
    updateTimer();
    setInterval(updateTimer, 1000);
  }, 2200);
});

// Heart animation
function createHeartRain() {
  const emojis = ['💗', '💜', '❤️', '✨'];

  for (let i = 0; i < 70; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = (Math.random() * 18 + 20) + 'px';
      heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

      heartContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    }, i * 60);
  }
}

// COUNT-UP TIMER
// February 14, 2026 at 2:00 AM EST
const startDate = new Date('2026-02-14T02:00:00-05:00');

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  if (diff < 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}
