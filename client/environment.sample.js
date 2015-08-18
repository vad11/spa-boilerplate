export default {
    getLanguage: function () {
        return localStorage.language || 'en-US';
    },

    getApiPath: function () {
        return 'http//api.example.com/v1';
    },

    getCdnPath: function () {
        return 'http://cdn.example.com';
    }
};