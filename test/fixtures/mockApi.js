const api_url = 'http://localhost:8080';
const api_username = 'someUser';
const api_key = 'super secret key';

const api = require('../../api')({ api_url, api_username, api_key });

module.exports = Object.assign(api, { api_url, api_username, api_key });
