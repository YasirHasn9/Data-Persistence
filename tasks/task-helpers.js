const db = require("../data/config");

async function find() {
  const task = await db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .select();
  return task;
}

async function add(data) {
  const [id] = await db("tasks").insert(data);
  return db("tasks")
    .where({ id })
    .select()
    .first();
}
async function findByProject(project_id) {
  const tasks = await db("tasks")
    .join("projects", "projects.id", "tasks.project_id")
    .where({ project_id })
    .select(
      "tasks.description",
      "tasks.notes",
      "tasks.completed",
      "projects.name",
      "projects.description as project_description"
    );
  return tasks;
}

module.exports = {
  find,
  add,
  findByProject
};
