import express from "express";
import homeControler from "./controlers/homeControler.js";
import avisControler from "./controlers/avisControler.js";
import crepeControler from "./controlers/crepeControler.js";

const router = express.Router();

router.get("/", homeControler);
router.get("/avis", avisControler);
router.get("/crepe", crepeControler);

export default router;
