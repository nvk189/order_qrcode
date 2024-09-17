const express = require("express");
const cors = require("cors");
const app = express();
// const http = require("http");
// const notification = require("./app/config/notification");
// const path = require("path");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// const server = http.createServer(app);
// khởi tạo socket và module thông báo
// notification.initializeSocket(server);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Đảm bảo body-parser được sử dụng trước khi đến các tuyến đường cụ thể
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/public", express.static(path.join(__dirname, "public")));

const customer = require("./router/customerRouter");
const product = require("./router/productRouter");

app.use("/customer", customer);
app.use("/product", product);
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
