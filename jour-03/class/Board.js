export default class Board {
    constructor(grid, hasWinner) {
        this.grid = grid;
        this.hasWinner = hasWinner;
    }
    initializeBoard() {
        let caracStart = [["-","-","-"],["-","-","-"],["-","-","-"]];
        this.grid = caracStart;

        this.hasWinner = false;
    }
    displayBoard() {
        let grille = document.querySelector("#board");
        console.log(grille);
        for (let i = 0; i <=2 ; i++) {
            let ligne = grille.append(div);
            ligne.setAttribute("id","row");
            for(let y = 0; y<=2; y++) {
                let cases = ligne.append(button);
                cases.setAttribute("id","btn-" + y + "-" + i);
                cases.setAttribute("class","case");
            }
        }
    }
}