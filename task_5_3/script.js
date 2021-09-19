function init() {
    var styleChessboard = document.createElement("style");
    styleChessboard.innerHTML =
        ".chess-board { border-spacing: 0; border-collapse: collapse; }\n" +
        ".chess-board th { padding: .5em; }\n" +
        ".chess-board th + th { border-bottom: 5px solid #000; }\n" +
        ".chess-board th:first-child,\n" +
        ".chess-board td:last-child { border-right: 5px solid #000; }\n" +
        ".chess-board tr:last-child td { border-bottom: 5px solid; }\n" +
        ".chess-board th:empty { border: none; }\n" +
        ".chess-board td { width: 1.5em; height: 1.5em; text-align: center; font-size: 32px; line-height: 0;}\n" +
        ".chess-board .light { background: #eee; }\n" +
        ".chess-board .dark { background: #aaa; }\n";
    document.head.appendChild(styleChessboard);

    var chessboard = document.createElement("table");
    chessboard.setAttribute("class", "chess-board");

    var columnTitleChessboard = document.createElement("tr");
    columnTitleChessboard.appendChild(document.createElement("th"));
    for (let elem of "abcdefgh") {
        let letter = document.createElement("th");
        letter.innerText = elem;
        columnTitleChessboard.appendChild(letter)
    }
    chessboard.appendChild(columnTitleChessboard);

    var firstColor;
    var secondColor;
    var figuresDarkFirstRow = "♜♞♝♛♚♝♞♜";
    var figuresDarkSecondRow = "♟".repeat(8);
    var figuresLightFirstRow = "♖♘♗♕♔♗♘♖";
    var figuresLigthSecondRow = "♙".repeat(8);
    for (let idxRow = 8; idxRow > 0; idxRow--) {
        rowChessboard = document.createElement("tr");
        rowTitleElement = document.createElement("th");
        rowTitleElement.innerText = idxRow;
        rowChessboard.appendChild(rowTitleElement);
        if (idxRow % 2 === 0) {
            firstColor = "ligth";
            secondColor = "dark";
        } else {
            firstColor = "dark";
            secondColor = "ligth";
        }
        for (let idxCell = 0; idxCell < 8; idxCell++) {
            let cellChessboard = document.createElement("td");
            switch (idxRow) {
                case 8:
                    cellChessboard.innerText = figuresDarkFirstRow[idxCell];
                    break;
                case 7:
                    cellChessboard.innerText = figuresDarkSecondRow[idxCell];
                    break;
                case 2:
                    cellChessboard.innerText = figuresLigthSecondRow[idxCell];
                    break;
                case 1:
                    cellChessboard.innerText = figuresLightFirstRow[idxCell];
                    break;
            }
            if (idxCell % 2 === 0) {
                cellChessboard.setAttribute("class", firstColor);
            } else {
                cellChessboard.setAttribute("class", secondColor);
            }
            rowChessboard.appendChild(cellChessboard);
        }
        chessboard.appendChild(rowChessboard);
    }

    document.body.appendChild(chessboard);
}

window.onload = init;