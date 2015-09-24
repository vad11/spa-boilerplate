import template from './home.html';

export default class HomeModule {
    index() {
        $('.js-container').html(template);
    }
}
