exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments("id");
    tbl
      .text("name")
      .notNullable()
      .unique();
    tbl.text("description");
    tbl.boolean("completed").defaultTo("false");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects");
};