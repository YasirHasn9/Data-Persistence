const db = require("../data/config");

function find() {
  return db("resource").select("*");
}

async function add(data) {
  const [id] = await db("resource").insert(data);
  return db("resource")
    .where({ id })
    .select()
    .first();
}

module.exports = {
  find,
  add
};
