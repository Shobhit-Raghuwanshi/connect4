let square = document.querySelectorAll(".square");
let player = 1;
let arr = [];
for (let i = 0; i < 42; i++) {
  square[i].setAttribute("id", i);
}
function diagonalCheck(player, index) {
  let doubt = parseInt(index);
  let check = 0;
  for (let k = doubt; k < 42; k += 8) {
    if (square[k].classList.contains(player)) {
      check++;
    } else {
      check = 0;
    }
    if (check >= 4) {
      alert(player + " wins!!!!!!!!!!");
    }
  }
  check = 0;
  for (let k = doubt; k < 42; k += 6) {
    if (square[k].classList.contains(player)) {
      check++;
    } else {
      check = 0;
    }
    if (check >= 4) {
      alert(player + " wins!!!!!!!!!!");
    }
  }
}

let y = 0;
for (let i = 0; i < 6; i++) {
  let a = [];
  for (let j = 0; j < 7; j++) {
    a.push(square[y]);
    y++;
  }
  arr.push(a);
}

function findingIndex(index, player) {
  let a = -1;
  let b = -1;
  let check = 0;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
      if (arr[i][j] == square[index]) {
        a = i;
        b = j;
        break;
      }
    }
    if (a != -1 && b != -1) {
      break;
    }
  }
  // console.log(a, b);
  function winingConditions(player, index) {
    for (let j = 0; j < 7; j++) {
      if (arr[a][j].classList.contains(player)) {
        check++;
      } else {
        check = 0;
      }
      if (check >= 4) {
        alert(player + "wins!!!!!!!!!!");
        break;
      }
    }
    check = 0;

    for (let j = 0; j < 6; j++) {
      if (arr[j][b].classList.contains(player)) {
        check++;
      } else {
        check = 0;
      }
      if (check >= 4) {
        alert(player + "wins!!!!!!!!!!");
        break;
      }
    }
    check = 0;
  }

  winingConditions(player, index);
  if (index <= 20) {
    diagonalCheck(player, index);
  }
}

square.forEach(function (i) {
  i.addEventListener("click", function () {
    if (i.classList.contains("taken") && player == 1) {
      let name = "player1";
      i.classList.add("player1");
      i.classList.remove("taken");
      let index = i.getAttribute("id");
      if (index >= 7) {
        square[index - 7].classList.add("taken");
      }
      findingIndex(index, name);
      player = 2;
    } else if (i.classList.contains("taken") && player == 2) {
      let name = "player2";
      i.classList.add("player2");
      i.classList.remove("taken");
      let index = i.getAttribute("id");
      if (index >= 7) {
        square[index - 7].classList.add("taken");
      }
      findingIndex(index, name);
      player = 1;
    } else {
      alert("cannot use this block");
    }
  });
});
