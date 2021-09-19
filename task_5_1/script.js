function init() {
    var styleChessboard = document.createElement("style");
    styleChessboard.innerHTML = ".chess-board { border-spacing: 0; border-collapse: collapse; }\n" +
        ".chess-board th { padding: .5em; }\n" +
        ".chess-board td { border: 1px solid; width: 2em; height: 2em; }\n" +
        ".chess-board .ligth { background: #eee; }\n" +
        ".chess-board .dark { background: #000; }\n";
    document.head.appendChild(styleChessboard);

    var chessboard = document.createElement("table");
    chessboard.setAttribute("class", "chess-board");

    var columnTitleChessboard = document.createElement("tr");
    for (let elem of " abcdefgh") {
        let letter = document.createElement("th");
        letter.innerText = elem;
        columnTitleChessboard.appendChild(letter)
    }
    chessboard.appendChild(columnTitleChessboard);

    var firstColor;
    var secondColor;
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