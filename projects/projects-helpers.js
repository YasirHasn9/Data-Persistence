const db = require("../data/config");

function find() {
  return db("projects").select("*");
}

async function add(data) {
  const [id] = await db("projects").insert(data);
  return db("projects")
    .where({ id })
    .select()
    .first();
}

module.exports = {
  find,
  add
};
