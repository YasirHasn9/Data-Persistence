exports.seed = async knex => {
  await knex("resource").insert([
    { name: "Tablet", description: "Needed" },
    { name: "Just me", description: "Who else will do everything? =)" },
    { name: "Friends", description: "My-my-my" }
  ]);
};
