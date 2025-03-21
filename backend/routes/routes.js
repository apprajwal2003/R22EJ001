import express from "express";
import { topUsers, trendingPosts, feed } from "../controllers/controllers.js";

const router = express.Router();

router.get("/topUsers", topUsers);
router.get("/trending", trendingPosts);
router.get("/feed", feed);

export default router;
