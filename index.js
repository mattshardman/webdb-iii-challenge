const mattspress = require('mattspress');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const app = mattspress();

app.use(helmet());

app.get('/api/cohorts', async (req, res) => {
    try {
        const cohorts = await db('cohorts');
        res.status(200);
        res.json(cohorts);
    } catch (e) {
        res.status(500);
        res.json(e);
    }
});

app.post('/api/cohorts', async (req, res) => {
    const cohortToAdd = req.body;
    try {
        const cohort = await db.insert(cohortToAdd).into('cohorts');
        res.status(201);
        res.json(cohort);
    } catch (e) {
        res.status(500);
        res.json(e);
    }
});

app.listen(3000, () => console.log('Listening'));