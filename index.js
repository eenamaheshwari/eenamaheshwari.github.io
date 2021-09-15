import tilesData from './TilesData.js';

function renderTiles(tilesData) {
    document.querySelector('.tilesList').innerHTML = '';
    tilesData.map((tile) => {
        let li = document.createElement('li');
        li.innerHTML = tile.value;
        li.setAttribute('class', tile.class);
        document.querySelector('.tilesList').appendChild(li);
    });
}

function shuffleTiles() {
    this.map((tile, index, arr) => {
        let randomindex = Math.floor(Math.random() * arr.length);
        [arr[randomindex], arr[index]] = [arr[index], arr[randomindex]];
    });
    renderTiles(this);
}

function sortTiles() {
    this.sort((tileA, tileB) => tileA.value - tileB.value);
    renderTiles(this);
};

renderTiles(tilesData);

document.querySelector('.shuffle').
    addEventListener('click', shuffleTiles.bind(tilesData));

document.querySelector('.sort').
    addEventListener('click', sortTiles.bind(tilesData));





