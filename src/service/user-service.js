import { registerUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js";
import {prismaClient} from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from 'bcrypt';


const register = async (request)=>{

    // melakukan validation
    const user = validate(registerUserValidation,request);

    // pengecekan user terregistrasi apa belum?
    const countUser = await prismaClient.user.count({
        where:{
            username: user.username
        }
    })

    if(countUser ===1){
        throw new ResponseError(400,"username already exists")
    }

    // hashing password
    user.password = await bcrypt.hash(user.password,10);


    // create user
    return prismaClient.user.create({
        data:user,
        select:{
            username:true,
            name:true
        }
    });

    
}

export default {
    register
}