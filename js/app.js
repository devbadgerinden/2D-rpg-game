var app = {

    // Variables du joueur
    player: null,
    xplayer: null,
    yplayer: null,

    // Variables de la cible
    target: null,
    xtarget: null,
    ytarget: null,

    board: document.getElementById("board"),

    init: function () {
        console.log('Application lancée !');
        app.drawBoard();
    },

    //Fonction qui dessine le plateau de jeu
    drawBoard : function() {
        //console.log("On dessine le tableau");

        // Pour x lignes, je crée une div
        // Je lui ajoute une class et un id
        for (var line = 1; line <= 5; line++) {
            var row = document.createElement("div");
            row.classList.add("row");
            row.setAttribute("id", "row"+line);

            // Pour x cases, je crée une div
            // Je lui ajoute une class et un id
            // J'ajoute chaque case à la ligne en cours
            for (column = 1; column <= 10; column++) {
                var cell = document.createElement("div");
                cell.classList.add("cell");
                cell.setAttribute("id", "cell"+line);
                row.appendChild(cell);

            }
            // J'ajoute chaque ligne à mon plateau de jeu
            app.board.appendChild(row);
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);