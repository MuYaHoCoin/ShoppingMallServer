const express = require("express");
const makeAddress = require("./functions/key_management/make_address");
const transactions = require("./routers/transaction_router");
const app = express();
const port = 3000;

const router = require("./routes/routes");
app.use(express.json());
app.use("/api", router);

app.listen(port, () => console.log(`port : ${port}`));
