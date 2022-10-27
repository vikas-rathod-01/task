const mongoose = require("mongoose");
require("dotenv").config();
module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
      w: "majority",
    });
  } catch (error) {
    console.error(error, "Database Connection Failed, Server Shutting Down");
    process.exit(1);
  }
};
