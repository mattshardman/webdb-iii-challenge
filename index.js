const mattspress = require('mattspress');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const app = mattspress();

app.use(helmet());

app.post('/', (req, res) => {
    res.send('hi');
});

app.listen(3000, () => console.log('Listening'));