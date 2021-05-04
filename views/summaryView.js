function SummaryView() {
    this.summaryModel = new SummeryModel();
    this.template = document.getElementById('summaryTemplate').innerHTML;
    BaseView.call(this);
}

SummaryView.prototype = Object.create(BaseView.prototype);
SummaryView.prototype.constructor = SummaryView;

SummaryView.prototype.beforeRender = function () {
    this.summaryModel.subsctibe('changeData', this.reRender, this)
};

SummaryView.prototype.render = function () {
    return templateStr(this.template, this.summaryModel.attributes);
}

SummaryView.prototype.afterRender = function () {};