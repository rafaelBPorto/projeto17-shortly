import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js"
import urlsRoutes from "./routes/urls.routes.js"
import rankingRoutes from "./routes/ranking.routes.js"
import dotenv from "dotenv";
dotenv.config();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(usersRoutes);
app.use(urlsRoutes);
app.use(rankingRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running in port ${port}`));
