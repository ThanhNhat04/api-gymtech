// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Lấy danh sách bài đăng
 *     responses:
 *       200:
 *         description: Danh sách bài đăng
 */
router.get('/', postController.getAllPosts);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Tạo bài đăng mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: Bài đăng được tạo thành công
 */
router.post('/', postController.createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Cập nhật bài đăng theo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Cập nhật bài đăng thành công
 */
router.put('/:id', postController.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Xoá bài đăng theo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xoá bài đăng thành công
 */
router.delete('/:id', postController.deletePost);

module.exports = router;
