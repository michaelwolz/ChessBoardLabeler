let board = ChessBoard('board', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
});

$('#download').on('click', function () {
    let matrix = generateMatrix();
    exportToJson(matrix);
});

// Format (0,0,0,0,0,0,0)
// (King,Queen,Rook,Bishop,Knight,Pawn,empty)
function generateMatrix() {
    let matrix = [];
    for (let i = 0; i <= 64; i++) {
        matrix[i] = [0, 0, 0, 0, 0, 0, 1];
    }

    let positions = board.position();
    for (let key in positions) {
        if (positions.hasOwnProperty(key)) {
            let x = key.charCodeAt(0) - 97; // a refers to ascii character 97
            let y = parseInt(key.charAt(1)) - 1;
            let fieldID = x + y * 8;
            let fieldPiece = positions[key].charAt(1);

            matrix[fieldID][6] = 0; // reset empty field back to zero

            switch (fieldPiece) {
                case 'K':
                    matrix[fieldID][0] = 1;
                    break;
                case 'Q':
                    matrix[fieldID][1] = 1;
                    break;
                case 'R':
                    matrix[fieldID][2] = 1;
                    break;
                case 'B':
                    matrix[fieldID][3] = 1;
                    break;
                case 'N':
                    matrix[fieldID][4] = 1;
                    break;
                case 'P':
                    matrix[fieldID][5] = 1;
                    break;
            }
        }
    }
    return matrix;
}

function exportToJson(objectData) {
    let filename = Date.now() + ".json";
    let contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        var a = document.createElement('a');
        a.download = filename;
        a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}