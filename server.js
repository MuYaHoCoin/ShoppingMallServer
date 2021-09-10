const express = require("express");
const app = express();
const port = 8000;

const router = require("./routes/routes");
app.use(express.json());
app.use("/api", router);

app.listen(port, () => console.log(`port : ${port}`));
