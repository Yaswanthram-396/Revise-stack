import app from "./app.js";
import { connectDB } from "../db.js";
import "dotenv/config";

const PORT = process.env.PORT || 3001;

// const corsOptions=['http://localhost:3000']
connectDB();
app.listen(PORT, () => {
  console.log(`ServerListening At ${PORT}`);
});
