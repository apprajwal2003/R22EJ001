import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

//router all requests
app.use("/", router);

app.listen(PORT, () => {
  console.log("Server running!");
});
