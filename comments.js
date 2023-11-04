// Create web server
// =================

// Import express
const express = require('express');

// Import the controller
const commentsController = require('../controllers/comments');

// Create the router
const router = express.Router();

// Create the routes
router.get('/:id', commentsController.getComments);
router.post('/:id', commentsController.createComment);
router.get('/:id/:commentId', commentsController.getComment);
router.put('/:id/:commentId', commentsController.updateComment);
router.delete('/:id/:commentId', commentsController.deleteComment);

// Export the router
module.exports = router;