const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("restaurant_qrcode", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});
async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Kết nối thành công.");
  } catch (error) {
    console.error("kết nối thất bại:", error);
  }
}

export default connectDB;
