import express from "express";
import { topUsers } from "../controllers/controllers.js";

const router = express.Router();

router.get("/topUsers", topUsers);

export default router;
