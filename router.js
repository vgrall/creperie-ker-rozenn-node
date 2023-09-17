import express from "express";
import homeControler from "./controlers/homeControler.js";
import avisControler from "./controlers/avisControler.js";

const router = express.Router();

router.get("/", homeControler);
router.get("/avis", avisControler);

export default router;
