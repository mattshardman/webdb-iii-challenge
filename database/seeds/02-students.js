exports.seed = (knex, Promise) => {
    return knex('students').del()
        .then(() => {
            return knex('students').insert([
                { cohort_id: 3, name: "Matty" },
                { cohort_id: 3, name: "Mo" },
                { cohort_id: 4, name: "Matt" }
            ])
        })
}