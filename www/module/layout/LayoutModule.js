import template from './layout.html';
import icomoon from './icomoon.html';
import './layout.css';

export default class LayoutModule {
    constructor() {
        $('.js-container').html(template);
        $('.x-icomoon').html(icomoon);
    }
}
