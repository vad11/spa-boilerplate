import Url from '../model/Url';
import Request from '../model/Request';
import RequestStore from '../store/RequestStore';
import TokenService from '../service/TokenService';
import requests from 'json!../request/example.json';
import environment from 'json!../environment.json';

requests.forEach(r => {
    var request = new Request();

    let url = new Url();

    if (r.url.indexOf('http') < 0) {
        url.addFragment(environment.PATHS.API);
    }

    url.addFragment(r.url);

    request.setMethod(r.method);
    request.setUrl(url.format());

    // Add JSON Web Token to all requests
    //request.setHeader('x-authorization', TokenService.getToken());

    RequestStore.set(r.id, request);
});