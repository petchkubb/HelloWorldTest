import express, { Router } from 'express';
// Import index action from movies controller
import { index } from './controllers/HelloWorldcon';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/HelloWorldcon.json').get(index);



export default router;