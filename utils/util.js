function templateStr(tpl, attr) {
    for(var i in attr) {
        if(attr.hasOwnProperty(i)) {
            tpl = tpl.replace('{{' + i + '}}', attr[i]);
        }
    }
    return tpl;
}

function randNumbForColumn() {
   return Math.floor(Math.random() * 4);
}

function randNumbInsideColumn() {
    if (Math.floor(Math.random(2 - 4) * 4) / 2 !== 1) {
        return  2;
    } else {
        return 4;
    }
}

function addNewNum () {
    var matrix = new MatrixModel(),
        i = randNumbForColumn(),
        j = randNumbForColumn(),
        matrixGrid = matrix.attributes.grid;
    if (matrixGrid[i][j] === ''){
        matrix.attributes.grid[randNumbForColumn()][randNumbForColumn()] = randNumbInsideColumn();
    }
}

function move (key) {
    var matrix = new MatrixModel(),
        matrixGrid = matrix.attributes.grid,
        filterGrid,
        newRow;

    if (key === 'left') {
        for(var i = 0; i < matrixGrid.length; i += 1) {
            filterGrid = matrixGrid[i].filter(num => num);
            var miss = 4 - filterGrid.length;
            var zeros = Array(miss).fill('');
            newRow = filterGrid.concat(zeros);
            matrixGrid[i] = newRow;
        }
    } else if (key === 'right') {
        for(var i = 0; i < matrixGrid.length; i += 1) {
            filterGrid = matrixGrid[i].filter(num => num);
            var miss = 4 - filterGrid.length;
            var zeros = Array(miss).fill('');
            newRow = zeros.concat(filterGrid);
            matrixGrid[i] = newRow;
        }
    }
}

