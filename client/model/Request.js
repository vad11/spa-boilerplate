export default class Request {
    constructor() {
        this.model = {
            header: {}
        };

        this.METHODS = {
            GET: 'get',
            POST: 'post',
            PUT: 'put',
            DELETE: 'delete'
        }
    }

    setMethod(method) {
        this.method = method;
    }

    setUrl(url) {
        this.model.url = url;
    }

    setHeader(header, value) {
        this.model.header[header] = value;
    }
}