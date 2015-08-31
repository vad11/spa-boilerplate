import configuration from './configuration/registry';
import modules from './module/registry';
import Store from './store/registry';

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
    Store.Request.get('getRepo').execute().then(initialize);
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