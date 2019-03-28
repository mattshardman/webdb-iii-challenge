exports.up = function(knex, Promise) {
    return knex.schema.createTable("students", function(tbl) {
      // we must use the callback syntax for .createTable()
      tbl.increments(); // pass the name if you wanted to be called anything other than id
      tbl
        .string("name", 255)
        .notNullable()
        .unique("uq_student_name");
      tbl
        .integer("cohort_id")
        .notNullable()
        .references("id")
        .inTable("cohorts");
      tbl.timestamp("createdAt").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("students");
  };
  