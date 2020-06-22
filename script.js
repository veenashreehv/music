const A = new Audio("sounds/note1.wav");
const B = new Audio("sounds/note2.wav");
const C = new Audio("sounds/note3.wav");
const D = new Audio("sounds/note4.wav");
const E = new Audio("sounds/note5.wav");
const F = new Audio("sounds/note6.wav");
const G = new Audio("sounds/note7.wav");

const playSound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
}

// A
const AKey = document.querySelector(".A-key");
const playA = () => {
  playSound(A);
  AKey.classList.add("active");
  setTimeout(() => AKey.classList.remove("active"), 200);
};
AKey.addEventListener("click", playA);

// B
const BKey = document.querySelector(".B-key");
const playB = () => {
  playSound(B);
  BKey.classList.add("active");
  setTimeout(() => BKey.classList.remove("active"), 200);
};
BKey.addEventListener("click", playB);

// C
const CKey = document.querySelector(".C-key");
const playC = () => {
  playSound(C);
  CKey.classList.add("active");
  setTimeout(() => CKey.classList.remove("active"), 200);
};
CKey.addEventListener("click", playC);

// D
const DKey = document.querySelector(".D-key");
const playD = () => {
  playSound(D);
  DKey.classList.add("active");
  setTimeout(() => DKey.classList.remove("active"), 200);
};
DKey.addEventListener("click", playD);

// E
const EKey = document.querySelector(".E-key");
const playE = () => {
  playSound(E);
  EKey.classList.add("active");
  setTimeout(() => EKey.classList.remove("active"), 200);
};
EKey.addEventListener("click", playE);

// F
const FKey = document.querySelector(".F-key");
const playF = () => {
  playSound(F);
  FKey.classList.add("active");
  setTimeout(() => FKey.classList.remove("active"), 200);
};
FKey.addEventListener("click", playF);

// G
const GKey = document.querySelector(".G-key");
const playG = () => {
  playSound(G);
  GKey.classList.add("active");
  setTimeout(() => GKey.classList.remove("active"), 200);
};
GKey.addEventListener("click", playG);


window.addEventListener("keydown", ({ keyCode }) => {
  // Press A
  if (keyCode === 76) return playC4();

  // Press B
  if (keyCode === 65) return playDb4();

  // Press C
  if (keyCode === 75) return playD4();

  // Press D
  if (keyCode === 83) return playEb4();

  // Press E
  if (keyCode === 72) return playE4();

  // Press F
  if (keyCode === 77) return playF4();

  // Press G
  if (keyCode === 73) return playGb4();

} )