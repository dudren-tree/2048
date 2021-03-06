function MatrixView() {
    this.matrixModel = new MatrixModel();
    this.controller = new Controller();
    this.template = document.getElementById('matrixTemplate').innerHTML;
    this.className = 'table';
    BaseView.call(this);
}

MatrixView.prototype = Object.create(BaseView.prototype);
MatrixView.prototype.constructor = MatrixView;

MatrixView.prototype.beforeRender = function () {
    this.matrixModel.subsctibe('changeData', this.reRender, this);
}

MatrixView.prototype.render = function () {
    var i, 
        j, 
        attributes = this.matrixModel.attributes,
        str = '';


    for(i = 0; i < attributes.size.width; i += 1) {
        str += `<div class="row">`;
        for(j = 0; j < attributes.size.height; j += 1) {
            str += '<div class="cell apear-' + attributes.grid[i][j] + '">' + attributes.grid[i][j] + '</div>';
        }
        str+='</div>';
    }
    
    return this.template.replace('{{matrix}}', str)
}

MatrixView.prototype.afterRender = function () {
    var newGameBtn = document.getElementById('newGameBtn');
    window.onkeydown = this.controller.onKeyPress.bind(this.controller);

    newGameBtn.addEventListener('click', this.controller.onClickNewGame.bind(this.controller));
};