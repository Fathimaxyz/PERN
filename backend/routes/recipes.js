import express from 'express';
const router = express.Router();

import * as recipeController from '../controllers/recipeController.js';
import authMiddleware from '../middleware/auth.js';

//All routes are protected
router.use(authMiddleware);

//AI generation
router.post('/generate', recipeController.generateRecipe);
router.get('/search', recipeController.getPantrySuggestions);

//CRUD operations
router.get('/', recipeController.generateRecipe);
router.get('/recent', recipeController.getRecentRecipes);
router.get('/stats', recipeController.getRecipeStats);
router.post('/:id', recipeController.getRecipeById);
router.post('/', recipeController.saveRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

export default router;
