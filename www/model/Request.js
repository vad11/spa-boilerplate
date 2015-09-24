import $ from 'jquery';

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
        this.model.method = method;
    }

    setUrl(url) {
        this.model.url = url;
    }

    setHeader(header, value) {
        this.model.header[header] = value;
    }

    setData(data) {
        this.model.data = data;
    }

    setOptions(options) {
        this.options = options;
    }

    execute(data) {
        return $.ajax({
            url: this.model.url,
            headers: this.model.header,
            type: this.model.method,
            data: data || this.model.data
        });
    }
}