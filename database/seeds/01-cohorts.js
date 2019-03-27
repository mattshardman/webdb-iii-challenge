exports.seed = (knex, Promise) => {
    return knex('cohorts').del()
        .then(() => {
            return knex('cohorts').insert([
                { name: "WEBEU1" },
                { name: "WEBEU2" }
            ])
        })
}