const ball = document.getElementById("ball");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reverse = document.getElementById("reverse");
const speedUp = document.getElementById("speed-up");
const slowDown = document.getElementById("slow-down");

const rollAnimation = [
  {
    transform: "rotate(0) translate3D(-50%, -50%, 0)",
    color: "white",
  },
  {
    color: "blue",
    offset: 0.3,
  },
  {
    transform: "rotate(360deg) translate3D(-50%, -50%, 0)",
    color: "white",
  },
];
