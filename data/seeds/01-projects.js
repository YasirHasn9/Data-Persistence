exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Vacation",  
      description: "Let's plan it =)",
      completed: false },
    {
      name: "Lambda",
      description: "What should I learn/repeat",
      completed: false
    },
    {
      name: "Home",
      description: "What should I do for home work",
      completed: true
    }
  ]);
};
