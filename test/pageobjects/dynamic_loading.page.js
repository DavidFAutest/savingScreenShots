const Page = require('./page');

class dynamicloadingpage extends Page {

    get startbutton() {
        return $('<button />');
    }

    get h4() {
        return $('h4*=Hello')
    }

    open() {
        return super.open('dynamic_loading/2');
    }
}

module.exports = new dynamicloadingpage();
