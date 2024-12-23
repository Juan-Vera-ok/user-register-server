import express from "express";
import UserRoutes from "./routes/UserRoutes.js";
import connectDB from "./config/config.js";
import dotenv from "dotenv";
const app = express();
const port = 3000
dotenv.config();
connectDB();

app.use(express.json());
app.use(UserRoutes);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});