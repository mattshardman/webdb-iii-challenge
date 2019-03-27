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

app.get('/api/cohorts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cohorts = await db('cohorts').where({ id });
        res.status(200);
        res.json(cohorts);
    } catch (e) {
        res.status(500);
        res.json(e);
    }
});

app.put('/api/cohorts/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const cohorts = await db('cohorts').where({ id }).update(body);
        res.status(200);
        res.json(cohorts);
    } catch (e) {
        res.status(500);
        res.json(e);
    }
});

app.delete('/api/cohorts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cohorts = await db('cohorts').where({ id }).del();
        res.status(200);
        res.json(cohorts);
    } catch (e) {
        res.status(500);
        res.json(e);
    }
});

app.listen(3000, () => console.log('Listening'));
