import express from 'express';
import { getAllUser,signup,login } from '../controller/usercontroller.js';

const router= express.Router();

router.get('/',getAllUser);
router.post("/signup",signup);
router.post("/login",login)

export default router;