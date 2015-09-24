export default class Url {
    constructor() {
        this.fragments = [];
    }

    addFragment(fragment) {
        this.fragments.push(fragment);
    }

    format() {
        return this.fragments.join('/');
    }
}