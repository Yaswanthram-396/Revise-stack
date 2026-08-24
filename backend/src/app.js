import express from "express";
import {data} from "./data/quotes.js";
// const router = express.Router();
import root from "./api/index.js"
import { Router } from "express";
const router=Router();

const app=express();

app.use(express.json());


app.use('/api', root);


export default app;