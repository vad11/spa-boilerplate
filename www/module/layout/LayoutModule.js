import template from './layout.html';
import 'style!css!./layout.css';
import svg from './icomoon/icomoon.svg';

export default class LayoutModule {
    constructor() {
        $('.x-icomoon').html();
        $('.js-container').html(template);
    }
}
