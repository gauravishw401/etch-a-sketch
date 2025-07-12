const container = document.querySelector(".etch-a-sketch");

for (i = 1; i <= 256; i++) {
  const box = document.createElement("div");
  box.setAttribute("class", "theDiv");
  box.style.flexGrow = 1;
  box.style.flexShrink = 1;
  box.style.flexBasis = 6.25 + "%";

  container.appendChild(box);
}

const childDiv = container.querySelectorAll(".theDiv");

childDiv.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style["backgroundColor"] = "blue";
  });
});

function generateRdmColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

const random = document.querySelector(".etch-a-sketch-buttons-random");
random.addEventListener("click", () => {
  childDiv.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      const randomColor = generateRdmColor();
      element.style["backgroundColor"] = randomColor;
    });
  });
});

function resetGrid() {
  let child = container.firstElementChild;
  while (child) {
    container.removeChild(child);
    child = container.firstElementChild;
  }
}

function changeGridSize(gridSize) {
  resetGrid();

  for (i = 1; i <= gridSize * gridSize; i++) {
    const box = document.createElement("div");
    const size = 100 / gridSize;
    box.setAttribute("class", "theDiv");
    box.style.flexGrow = 1;
    box.style.flexShrink = 1;
    box.style.flexBasis = size + "%";

    container.appendChild(box);
  }
}

const gridBtn = document.querySelector(".etch-a-sketch-buttons-grid-size");

gridBtn.addEventListener("click", () => {
  const gridSizeReq = Number(
    prompt("Choose the size of grid you want to create. Max is: 100")
  );
  if (gridSizeReq > 100) {
    alert("Sorry! maximum number of grid size allowed is 100");
  } else {
    changeGridSize(gridSizeReq);

    const childDiv = container.querySelectorAll(".theDiv");

    childDiv.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.style["backgroundColor"] = "blue";
      });
    });

    random.onclick = function () {
      childDiv.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          const randomColor = generateRdmColor();
          element.style["backgroundColor"] = randomColor;
        });
      });
    };
  }
});
