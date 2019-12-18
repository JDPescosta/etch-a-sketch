const gridSize = 16*16; // set this as the square of one of the grid's sides e.g. gridSize = 64*64
const tileSize = 32;
const container = document.querySelector('#container')
container.style.cssText = `width: ${tileSize*Math.sqrt(gridSize)}px; height: ${tileSize * (gridSize/gridSize)}px; `

for(let i = 0; i < gridSize; i++){
    const gridTile = document.createElement('div');
    gridTile.classList.add('grid-tile')
    gridTile.style.cssText = `width: ${tileSize}px; height: ${tileSize}px`;
    container.appendChild(gridTile);
}
