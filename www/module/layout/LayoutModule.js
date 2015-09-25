import template from './layout.html';
import icomoon from './icomoon.html';
import './layout.css';

export default class LayoutModule {
    constructor() {
        $('.js-container').html(template);
        $('.js-icomoon').html(icomoon);
    }

    setRepository(repository) {
        $('.js-spinner').addClass('absolute animated fadeOut');

        var $repository = $('.js-repository');
        var $issues = $('.js-issues');

        $repository.find('.item').css('display', 'block').addClass('fadeIn');
        $issues.find('.item').css('display', 'block').addClass('fadeIn');

        $repository.prop('href', repository.html_url);
        $issues.prop('href', `${repository.html_url}/issues`);

        var $content = $('.content');
        $content.addClass('fadeIn');

        var $title = $('<h1/>');
        $title.html(repository.name);

        var $description = $('<p/>');
        $description.html(repository.description);

        $content.append($title, $description);
    }
}

//description