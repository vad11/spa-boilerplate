import Url from '../model/Url';
import Request from '../model/Request';
import RequestStore from '../store/RequestStore';
import TokenService from '../service/TokenService';
import requests from 'json!../request/example.json';
import environment from '../environment';

requests.forEach(addToRequestStore);

function addToRequestStore(r) {
    var request = new Request();

    let url = new Url();
    url.addFragment(environment.getApiPath());
    url.addFragment(r.url);

    request.setMethod(r.method);
    request.setUrl(url.format());
    request.setHeader('x-authorization', TokenService.getToken());

    RequestStore.set(r.id, request);
}