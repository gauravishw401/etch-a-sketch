const container = document.querySelector(".etch-a-sketch");

const num = Number(prompt("Choose the size of grid you want to create"));
const size = 100 / num;
console.log(typeof size);
for (i = 1; i <= num * num; i++) {
  const box = document.createElement("div");
  box.setAttribute("class", "theDiv");
  box.style.flexGrow = 1;
  box.style.flexShrink = 1;
  box.style.flexBasis = size + "%";

  container.appendChild(box);
}
