import express from "express";
import cors from "cors";
import usersRoutes from "./routes/users.route.js"
import dotenv from "dotenv";
dotenv.config();

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(usersRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running in port ${port}`));
