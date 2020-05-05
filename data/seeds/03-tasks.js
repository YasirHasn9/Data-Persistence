exports.seed = async knex => {
  await knex("tasks").insert([
    { description: "Buy tickets", notes: "", completed: true, project_id: 1 },
    {
      description: "Find interesting places",
      notes: "Check videos, posts etc",
      completed: false,
      project_id: 1
    },
    {
      description: "Find where to live",
      notes: "Depends on the task #2",
      completed: false,
      project_id: 1
    }
  ]);
};
