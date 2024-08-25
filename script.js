let currentPlayer = "X";
let arr = Array(9).fill(null);
let endGame = false;

function checkWinner(currentPlayer) {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.querySelector("#winner").innerText=`winner is ${currentPlayer}`
    endGame = true;
  }

}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null || endGame) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner(currentPlayer);
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
