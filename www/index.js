import configuration from './configuration/registry';
import modules from './module/registry';
import RequestStore from './store/RequestStore';
import LayoutModule from './module/layout/LayoutModule';

/*
|--------------------------------------------------------------------------
| Bootstrap
|--------------------------------------------------------------------------
|
| Make any requests necessary to bootstrap the application. e.g. translations,
| profile or other.
|
*/

function bootstrap() {
    var layoutModule = new LayoutModule();
    setTimeout(() => {
        RequestStore.getRepo.execute().then(repository => initialize(layoutModule, repository));
    }, 500);
}

/*
|--------------------------------------------------------------------------
| Initialize application
|--------------------------------------------------------------------------
|
| Use data from bootstrap to initialize the application. All application
| initialization code should go in this block.
|
*/

function initialize(layout, repository) {
    console.log(repository);
    console.info('[initialize()] Application up and running');
    layout.setRepository(repository);
}

/*
|--------------------------------------------------------------------------
| Run bootstrap
|--------------------------------------------------------------------------
*/

bootstrap();