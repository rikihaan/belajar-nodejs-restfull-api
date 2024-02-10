import { ResponseError } from "../error/response-error.js"

const errorMiddleware = async(err,req,res,next)=>{
    // jika tidak ada error
    if(!err){
        next();
        return;
    }

    // jika ada error ini di jalanakan
    if (err instanceof ResponseError){
        res.status(err.status).json({
            errors:err.message
        }).end()
    }else{
        res.status(500).end();
    }
}

export{
    errorMiddleware
}