const express = require("express");
const app = express();
const user = require("./routes/user");
const dbConnection = require("./utils/dbConnection");
require("dotenv").config();

/* Middlewares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.use("/user", user);

/* Starting Server */
try {
  const startServer = async () => {
    await dbConnection();
    app.listen(process.env.SERVER_PORT || 4000, () => {
      console.log(
        `Server Listening on Port ${process.env.SERVER_PORT || 4000}`
      );
      console.log(" ");
    });
  };
  startServer();
} catch (error) {
  console.error({ error: error.message });
  process.exit(1);
}
