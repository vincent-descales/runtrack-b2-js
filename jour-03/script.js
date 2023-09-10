import Player from "./class/Player.js";
import Board from "./class/Board.js";

let test;

window.addEventListener("DOMContentLoaded", (event) => {
    test = new Board();
    console.log(test);
    test.displayBoard();
});