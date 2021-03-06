import 'dotenv/config'
import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3030, () => console.log("Server ouvindo na porta 3030"));
