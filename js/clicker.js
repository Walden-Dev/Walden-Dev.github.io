var y = 0;

function plusone() {
  y++;
  document.querySelector(".number").innerHTML = y;
  console.log(y);
}

//minusone
function minusone() {
  y--;
  document.querySelector(".number").innerHTML = y;
  console.log(y);
}

function someFunc() {
  plusone();
}