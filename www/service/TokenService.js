import jwt from 'jsonwebtoken';

export default new class TokenService {
    constructor() {
        this._tokenKey = 'spa-boilerplate-token';
        this._storage = localStorage;
        this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
    }

    getTokenKey() {
        return this._tokenKey;
    }

    setTokenKey(key) {
        this._tokenKey = key;
    }

    getToken() {
        return this._storage.getItem(this._tokenKey);
    }

    setToken(token) {
        this._storage.setItem(this._tokenKey, token);
        return this.getToken();
    }

    decode() {
        return jwt.decode(this.getToken());
    }
}