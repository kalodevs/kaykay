const openBtn = document.getElementById('openBtn');
const loadingText = document.getElementById('loadingText');
const heartContainer = document.getElementById('heart-container');
const welcomeCard = document.getElementById('welcomeCard');
const mainContent = document.getElementById('mainContent');

openBtn.addEventListener('click', () => {
  loadingText.classList.remove('hidden');
  openBtn.disabled = true;

  createHeartRain();

  setTimeout(() => {
    welcomeCard.classList.add('hidden');
    mainContent.classList.remove('hidden');
    updateTimer();
  }, 2200);
});

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

const startDate = new Date('2026-02-14T02:00:00-05:00');

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

