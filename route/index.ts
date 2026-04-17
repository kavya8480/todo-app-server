import { authRouter } from "./auth";
import { userRouter } from "./users";
import { Router } from "express";

export let router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);