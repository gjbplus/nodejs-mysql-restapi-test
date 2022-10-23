import { Router } from "express";
import { getPaises, createPais, updatePais, deletePais,
        getPais }from "../controllers/paises.controller.js";

const router = Router();

router.get('/paises', getPaises );

router.get('/paises/:id', getPais );

router.post('/paises', createPais );

router.patch('/paises/:id', updatePais );

router.delete('/paises/:id', deletePais );

export default router