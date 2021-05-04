function SummeryModel() {
    this.attributes = {
        totalScore:0,
        addScore:0,
        bestScore:JSON.parse(localStorage.getItem('bestScore')) || 0
    }
    var instance = this;
    SummeryModel = function () {
        return instance;
    }
}

SummeryModel.prototype = Object.create(BaseModel.prototype);
SummeryModel.prototype.constructor = SummeryModel;

SummeryModel.prototype.startNewGame = function () {
    this.attributes.totalScore = 0;
    this.publish('changeData')
}

SummeryModel.prototype.makeActionByKey = function () {
    
}