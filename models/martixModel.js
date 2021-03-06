function MatrixModel() {
    BaseModel.call(this);
    this.attributes = {
        size: {
            width:4,
            height: 4,
        },
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
        ]
    }

    var instance = this;
    MatrixModel = function () {
        return instance;
    }
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.startNewGame = function () {
    this.attributes.grid[randNumbForColumn()][randNumbForColumn()] = randNumbInsideColumn();
    this.publish('changeData');
}

MatrixModel.prototype.makeRandNumbByKey = function (key) {
    move(key);
    addNewNum();
    this.publish('changeData');
};

//PubSUb ==> BaseModel ==> MatrixModel