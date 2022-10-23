import { Router } from "express";
import { getFiguritas, getFigurita, createFigurita, updateFigurita,
deleteFigurita } from "../controllers/figuritas.controller.js";


const router = Router();

router.get('/figuritas', getFiguritas );

router.get('/figuritas/:id', getFigurita );

router.post('/figuritas', createFigurita );

router.patch('/figuritas/:id', updateFigurita );

router.delete('/figuritas/:id', deleteFigurita );

export default router