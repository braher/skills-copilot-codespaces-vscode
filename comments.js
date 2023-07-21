// Create web server
const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/posts/:id/comments', isLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', isLoggedIn, commentsCtrl.delete);
router.put('/comments/:id', isLoggedIn, commentsCtrl.update);
router.get('/comments/:id/edit', isLoggedIn, commentsCtrl.edit);
