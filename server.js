const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

const router = require("./routes/routes");
app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(port, () => console.log(`port : ${port}`));
