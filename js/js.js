let btn = 1;
let btns = 1;
const rowOne = () => {
  document.getElementById("btn").innerHTML = btn;
  btn = btn + 1;
  console.log(btn);
};
const rowTwo = () => {
  document.getElementById("btns").innerHTML = btns;
  btns = btns + 1;
  console.log(btns);
};
const resetAll = () => {
  btn = 0;
  btns = 0;
  document.getElementById("btn").innerHTML = btn;
  document.getElementById("btns").innerHTML = btns;
  console.log(btn, btns);
};
