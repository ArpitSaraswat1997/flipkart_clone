import express from 'express';
import  userSignup  from '../controller/userController.js';
const router = express();



router.post('/signup',userSignup);


export default router;