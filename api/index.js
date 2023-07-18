const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const path = require("path")

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DBConnection Successfull!"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.use(express.static(path.join(__dirname, "../client/build")))

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});