import template from './layout.html';
import './layout.css';

export default class LayoutModule {
    constructor() {
        $('.x-icomoon').html();
        $('.js-container').html(template);
    }
}
