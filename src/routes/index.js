import express from 'express';
import userRoutes from './userRoute';


const router = express.Router();

userRoutes(router);


export default router;
