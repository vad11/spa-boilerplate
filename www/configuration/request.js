import Url from '../model/Url';
import Request from '../model/Request';
import RequestStore from '../store/RequestStore';
import TokenService from '../service/TokenService';
import requests from '../request/example.json';
import environment from '../environment.json';

requests.forEach(r => {
    var request = new Request();

    let url = new Url();

    if (r.url.indexOf('http') < 0 && r.url[0] !== '/') {
        url.addFragment(environment.PATHS.API);
    }

    url.addFragment(r.url);

    request.setMethod(r.method);
    request.setUrl(url.format());

    // Add JSON Web Token to all requests
    //request.setHeader('x-authorization', TokenService.getToken());

    RequestStore[r.id] = request;
});