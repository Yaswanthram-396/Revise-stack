import express from 'express';
import { data } from '../data/quotes.js';
const router=express.Router();

const validate=(req,res)=>{
    const given=req.body
    
    
    res.json({
        status:201,
        message:"success"
    })
}
const getQuotes=(req,res)=>{
 const number=Math.floor(Math.random()*data.length);
    res.json({
        status:200,
        message:"success",
        data:data[number]
    })
}

const getQuoteById=(req,res)=>{
 const number=req.params.id;
    res.json({
        status:200,
        message:"success",
        data:data.filter((a)=>Number(a.id)==number)
    })
}
const deleteQuoteById=(req,res)=>{
    const number=req.params.id;
    const index = data.findIndex((a)=>Number(a.id)==number);
    if (index !== -1) {
        const deleted = data.splice(index, 1);
        res.json({
            status:200,
            message:"success",
            data:deleted[0]
        })
    } else {
        res.json({
            status:404,
            message:"Quote not found"
        })
    }
}
const addQuote=(req,res)=>{

}

const root="/quotes"


router.get(`${root}/`,getQuotes)
router.get(`${root}/:id`,getQuoteById)
router.post(`${root}/:id`,validate,getQuoteById)
router.delete(`${root}/:id`,validate,deleteQuoteById)

export default router;
