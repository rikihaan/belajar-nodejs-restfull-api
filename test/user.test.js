import request from 'supertest';
import { prismaClient } from '../src/application/database.js';
import { logger } from '../src/application/logging.js';
import {web} from '../src/application/web.js';

describe('POST /api/users', () => {
    afterEach(async()=>{
        await prismaClient.user.deleteMany({
            where:{
                username:"asep"
            }
        })
    })

    it('should can register new user',async () => {
        const result = await request(web)
        .post("/api/users").send({
            username:"asep",
            password:"rahasiah",
            name:"Asep Riki"

        });
        logger.info(result);
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("asep");
        expect(result.body.data.name).toBe("Asep Riki");
        expect(result.body.data.password).toBeUndefined();
    });

    it('should be register failed or reject new user',async () => {
        const result = await request(web)
        .post("/api/users").send({
            username:"asep",
            password:"",
            name:""

        });
        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined()
    });

    it('should if register failed or reject user already exists',async () => {
        let result = await request(web)
        .post("/api/users").send({
            username:"asep",
            password:"rahasiah",
            name:"Asep Riki"

        });
        logger.info(result.body);
        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe("asep");
        expect(result.body.data.name).toBe("Asep Riki");
        expect(result.body.data.password).toBeUndefined();

         result = await request(web)
        .post("/api/users").send({
            username:"asep",
            password:"rahasiah",
            name:"Asep Riki"

        });
        logger.info(result.body);
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
       
    });
});