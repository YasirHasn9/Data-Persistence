const db = require("../data/config");

function find() {
  return db("tasks").select("*");
}

async function add(data) {
  const [id] = await db("tasks").insert(data);
  return db("tasks")
    .where({ id })
    .select()
    .first();
}

module.exports = {
  find,
  add
};
