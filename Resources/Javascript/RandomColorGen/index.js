const contentBox = document.querySelector(".content-box");
const root = document.documentElement;
const h1 = document.querySelector(".content-box h1");
const genColorBtn = document.querySelector(".generate-color");
const hexColor = document.querySelector(".hex-value");

let previousColor = "rgb(255, 255, 255)";
let color = "rgb(40, 180, 99)";
let hexColorValue = "";

const styleBackground = (elm) => {
  elm.style.backgroundColor = color;
};

const styleColor = (elm) => {
  elm.style.color = color;
};

const generateNum = () => {
  return Math.floor(Math.random() * 255);
};

const readColor = (color) => {
  hexColor.innerHTML = color;
};
readColor(color);

genColorBtn.addEventListener("click", () => {
  root.style.setProperty("--btn-hover-color", color);
  color = `rgb(${generateNum()}, ${generateNum()}, ${generateNum()})`;
  root.style.setProperty("--generated-color", color);
  styleColor(h1);
  readColor(color);
});
