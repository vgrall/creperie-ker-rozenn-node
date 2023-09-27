import express from "express";
import homeControler from "./controlers/homeControler.js";
import avisControler from "./controlers/avisControler.js";
import crepeControler from "./controlers/crepeControler.js";
import galetteControler from "./controlers/galetteControler.js";
import boissonControler from "./controlers/boissonControler.js";

const router = express.Router();

router.get("/", homeControler);
router.get("/avis", avisControler);
router.get("/crepe", crepeControler);
router.get("/galette", galetteControler);
router.get("/boissons", boissonControler);

export default router;
