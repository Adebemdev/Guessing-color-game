let currentScore = 0;

const colors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B7D1',
  '#96CEB4',
  '#FFEEAD',
  '#D4A5A5',
  '#9B59B6',
  '#3498DB',
  '#E74C3C',
  '#2ECC71',
  '#F1C40F',
  '#E67E22',
];

// Function that generate a random color
function getRandomColors(count) {
  const shuffled = [...colors].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function updateScore() {
  document.querySelector('.score').textContent = currentScore;
}

function resetGame() {
  currentScore = 0;
  updateScore();
  initGame();
}

function initGame() {
  const gameColors = getRandomColors(6);
  const targetColor = gameColors[Math.floor(Math.random() * gameColors.length)];

  const targetBox = document.querySelector('.target-box');
  targetBox.style.backgroundColor = targetColor;

  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.innerHTML = '';

  gameColors.forEach((color) => {
    const button = document.createElement('button');
    button.className = 'color-button';
    button.style.backgroundColor = color;
    button.onclick = () => checkGuess(color, targetColor);
    buttonsContainer.appendChild(button);
  });

  document.querySelector('.message').textContent = '';
}

function checkGuess(guessColor, targetColor) {
  const messageElement = document.querySelector('.message');

  if (guessColor === targetColor) {
    currentScore++;
    updateScore();
    messageElement.style.color = '#2ECC71';
    messageElement.textContent = 'Correct! Get ready for the next color! 🎉';

    // Disable all buttons temporarily
    const buttons = document.querySelectorAll('.color-button');
    buttons.forEach((button) => (button.style.pointerEvents = 'none'));

    setTimeout(() => {
      initGame();
    }, 1500);
  } else {
    messageElement.style.color = '#E74C3C';
    messageElement.textContent = 'Try again! Keep going! 🎨';
  }
}

// Start the game when page loads
initGame();
