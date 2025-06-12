// CounterUp
let counter01 = document.getElementById("counter01");
let counter02 = document.getElementById("counter02");
let counter03 = document.getElementById("counter03");
let counter04 = document.getElementById("counter04");


let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

// __x
function counterjs1() {
  count1++;
  counter01.innerText = count1;
  if (count1 == 27) {
    clearInterval(x);
  }
}
let x = setInterval(() => {
  counterjs1();
}, 200);

// _____y
function counterjs2() {
  count2++;
  counter02.innerText = count2;
  if (count2 == 11) {
    clearInterval(y);
  }
}
let y = setInterval(() => {
  counterjs2();
}, 300);

// _____z
function counterjs3() {
  count3++;
  counter03.innerText = count3;
  if (count3 == 301) {
    clearInterval(z);
  }
}
let z = setInterval(() => {
  counterjs3();
}, 30);

// _____xyz
function counterjs4() {
  count4++;
  counter04.innerText = count4;
  if (count4 == 34) {
    clearInterval(a);
  }
}
let a = setInterval(() => {
  counterjs4();
}, 80);
//  CounterUp++++++++++++++++++++++++++++

//Back to Top
let bactoTop = document.getElementById("bactoTop");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    bactoTop.style.display = "grid";
  } else {
    bactoTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Back to Top
