import express from 'express'
import { login, register } from '../controllers/auth.js'
const router = express.Router()

// Register user
router.post('/register',register)

// Register user
router.post('/login',login)

export default router;

