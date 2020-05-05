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

  await knex.schema.createTable("resource", tbl => {
    tbl.increments("id");
    tbl
      .text("name")
      .notNullable()
      .unique();
    tbl.text("description").nullable();
  });

  await knex.schema.createTable("tasks", tbl => {
    tbl.increments("id");
    tbl.text("description").notNullable();
    tbl.text("notes");
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects");
  });
  await knex.schema.createTable("project_resource", tbl => {
    tbl
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects");

    tbl
      .integer("resource_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("resource");

    tbl.primary(["project_id", "resource_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resource");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resource");
  await knex.schema.dropTableIfExists("projects");
};
