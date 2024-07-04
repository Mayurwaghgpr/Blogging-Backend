import express from 'express';
const router = express.Router();
import { SignUp,LogIn, Logout } from '../controllers/auth.js';
import IsAuth from '../middlewares/isAuth.js';

router.put('/SignUp',SignUp);

router.post('/Login', LogIn);

router.post('/logout',IsAuth,Logout)

export default router;