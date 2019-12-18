let squaresPerSide = 16; // the number of squares per a side of the drawing grid
const containerSide = 640; // the length of the container's side in pixels.
const container = document.querySelector("#container"); 
const reset = document.createElement("button");
const header = document.querySelector("header");

header.appendChild(reset);

container.style.cssText = `width: ${containerSide}px; height: ${containerSide}px; `;

const gridGen = () => {
  const gridSize = squaresPerSide * squaresPerSide;
  const tileSide = containerSide / squaresPerSide;

  for (let i = 0; i < gridSize; i++) {
    const gridTile = document.createElement("div");
    gridTile.classList.add("grid-tile");
    gridTile.style.cssText = `width: ${tileSide}px; height: ${tileSide}px`;
    gridTile.addEventListener("mouseover", () => {
      gridTile.style.backgroundColor = "white";
    });
    container.appendChild(gridTile);
  }
};

gridGen();

reset.textContent = "Reset the grid.";

reset.addEventListener("click", () => {
  let tiles = document.querySelectorAll(".grid-tile");
  tiles.forEach(tile => {
    container.removeChild(tile);
  });
  squaresPerSide = prompt(
    "How many squares per a side would you like the new etch-a-sketch grid to be?", 16
  );
  gridGen();
});
