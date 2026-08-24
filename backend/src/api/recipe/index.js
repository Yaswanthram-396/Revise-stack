import express from "express";
import Recipe from "../../models/recipe.js";
const router=express.Router();

const getRecipies=async(req,res)=>{
    const {search,cuisine,time,limit=10,rating}=req.query;
    const filter={};
    if(cuisine)filter.cuisine=cuisine;
    if(time)filter.cookTime={$lte:Number(time)};
    if(rating)filter.rating={$gte:Number(rating)};
    if(search)filter.name={$regex:search,$options:"i"}

    try{
        const data=await Recipe.find({...filter}).sort({rating:-1}).limit(Number(limit))
        res.json({
            status:200,
            message:"success",
            data:data
        })
    }
    catch{
        console.log("error");
        res.json({
            status:400,
            message:"error",
        })

    }



}

router.get("/",getRecipies);
export default router;