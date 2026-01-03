//your JS code here. If required.
const submitBtn = document.getElementById("submit");
const gameDiv = document.getElementById("game");
const messageDiv = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";
let currentPlayer = "";
let currentSymbol = "x";
let gameActive = true;

const winPatterns = [
  ["1","2","3"], ["4","5","6"], ["7","8","9"],
  ["1","4","7"], ["2","5","8"], ["3","6","9"],
  ["1","5","9"], ["3","5","7"]
];

// Start Game
submitBtn.addEventListener("click", () => {
  player1 = document.getElementById("player-1").value;
  player2 = document.getElementById("player-2").value;

  if (!player1 || !player2) return;

  document.getElementById("player-form").style.display = "none";
  gameDiv.style.display = "block";

  currentPlayer = player1;
  messageDiv.textContent = `${currentPlayer}, you're up`;
});

// Cell Click Logic
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (!gameActive || cell.textContent !== "") return;

    cell.textContent = currentSymbol;

    if (checkWinner()) {
      messageDiv.textContent = `${currentPlayer} congratulations you won!`;
      gameActive = false;
      return;
    }

    // Switch Turn
    if (currentPlayer === player1) {
      currentPlayer = player2;
      currentSymbol = "o";
    } else {
      currentPlayer = player1;
      currentSymbol = "x";
    }

    messageDiv.textContent = `${currentPlayer}, you're up`;
  });
});

// Check Winner
function checkWinner() {
  return winPatterns.some(pattern =>
    pattern.every(id =>
      document.getElementById(id).textContent === currentSymbol
    )
  );
}