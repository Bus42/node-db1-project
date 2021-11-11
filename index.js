const server = require("./api/server.js");
const colors = require("colors");
require("dotenv").config();

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`.america);
});
