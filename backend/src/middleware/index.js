

export const validate=(fields)=>{
    
    return(req,res,next)=>{
        for(const field of fields){
            if (req.body[field] === undefined) {
                return res.status(400).json({
                    status:400,
                    message:`${field} is required`,
                })
            }
        }
        next();
    }
}

export const validateId=(req,res,next)=>{
    const id=req.params.id;
    if(!id){
        return res.json({
            status:400,
            message:"Id is required",
        })
    }
    next()
}