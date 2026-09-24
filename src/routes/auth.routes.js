import express from "express";
import {
  register,
  login,
  getMe,
  logout,
} from "../controllers/auth.controller.js";

import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes
router.get("/me", protect, getMe);

// Logout
router.post("/logout", logout);

export default router;