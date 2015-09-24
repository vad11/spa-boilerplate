import template from './about.html';

export default class AboutModule {
    index() {
        $('.js-container').html(template);
    }
}
