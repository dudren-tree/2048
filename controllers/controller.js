function Controller() {
    this.matrixModel = new MatrixModel();
    this.summaryModel = new SummeryModel();
}

Controller.prototype.onKeyPress = function (event) {
    var key;
    switch(event.code) {
        case 'ArrowUp':
            key = 'up';
            break;
        case 'ArrowDown':
            key = 'down';
            break;
        case 'ArrowLeft':
            key = 'left';
            break;
        case 'ArrowRight':
            key = 'right';
            break;
        default:
            return;
    }

    this.matrixModel.makeRandNumbByKey(key)
    // this.matrixModel.makeActionByKey();
}

Controller.prototype.onClickNewGame = function () {
    this.matrixModel.startNewGame();
    this.summaryModel.startNewGame();
}