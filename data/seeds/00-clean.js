exports.seed = async function(knex) {
  await knex("project_resource").truncate();
  await knex("tasks").truncate();
  await knex("resource").truncate();
  await knex("projects").truncate();
};
