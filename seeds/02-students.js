exports.seed = (knex, Promise) => {
    return knex('students').del()
        .then(() => {
            return knex('students').insert([
                { cohort_id: 1, name: "Matty" },
                { cohort_id: 1, name: "Mo" },
                { cohort_id: 2, name: "Matt" }
            ])
        })
}