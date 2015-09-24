import configuration from './configuration/registry';
import modules from './module/registry';
import RequestStore from './store/RequestStore';

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
    //RequestStore.get('getRepo').execute().then(initialize);
    initialize();
}

/*
|--------------------------------------------------------------------------
| Initialize application
|--------------------------------------------------------------------------
|
| Use data from bootstrap to initialize the application. All application
| initialization code in the following block.
|
*/

function initialize() {
    _.forEach(modules, Module => new Module());
}

/*
|--------------------------------------------------------------------------
| Run bootstrap
|--------------------------------------------------------------------------
*/

bootstrap();