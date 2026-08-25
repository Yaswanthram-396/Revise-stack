import express from 'express';
import reciperouter from './recipe/index.js'
import bookrouter from './books/index.js'
import {
getQuotes,
getQuoteById,
deleteQuoteById} from "../controllers/index.js"
import feedbackRouter from "./feedback/index.js"
import { validateId } from '../middleware/index.js';
import configRouter from "./config/index.js"

const router=express.Router();



const root="/quotes"
const recipe="/recipes"
const books="/books"
const feedback="/feedback"
const config="/config"




router.use(`${recipe}/`,reciperouter)

router.use(`${books}/`,bookrouter)

router.use(`${feedback}/`,feedbackRouter)

router.use(`${config}/`,configRouter)

router.get(`${root}/`,getQuotes)
router.get(`${root}/:id`,getQuoteById)
router.get(`${root}/:id`,validateId,getQuoteById)
router.delete(`${root}/:id`,validateId,deleteQuoteById)


export default router;
