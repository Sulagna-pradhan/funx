const { PrismaClient } = require("@prisma/client");

// const prismaClient = new PrismaClient({
//   log: ["query", "error"],
// });

class CustomClient extends PrismaClient {
  constructor() {
    super({
      log: ["query", "error"],
    });
    this.$connect()
      .then(() => {
        console.log("Database connected");
      })
      .catch((err) => {
        console.log("Database connection error: ", err);
      });
  }
}

module.exports.prismaClient = new CustomClient();
