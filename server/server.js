/* eslint-disable no-console */
require('newrelic');
const app = require('./index');


const port = 8000;

app.listen(port, () => { console.log(`listening at http://localhost:${port}`); });
