import Express from "express";
import routes from "./routes";

require("dotenv").config();

const port = 3000;
const app = Express();

app.use(routes);

app.listen(port, () => console.log(`🚀 Iniciado em http://localhost:${port}/`));
