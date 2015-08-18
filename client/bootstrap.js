import configuration from './configuration';
import modules from './module/registry';

modules.forEach(Module => new Module());