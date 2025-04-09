// routes/exerciseRoutes.js
const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

/**
 * @swagger
 * /api/exercises:
 *   get:
 *     summary: Lấy danh sách bài tập
 *     responses:
 *       200:
 *         description: Danh sách bài tập
 */
router.get('/', exerciseController.getAllExercises);

/**
 * @swagger
 * /api/exercises:
 *   post:
 *     summary: Tạo bài tập mới
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Exercise'
 *     responses:
 *       201:
 *         description: Bài tập được tạo thành công
 */
router.post('/', exerciseController.createExercise);

/**
 * @swagger
 * /api/exercises/{id}:
 *   put:
 *     summary: Cập nhật bài tập theo id
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
 *         description: Cập nhật bài tập thành công
 */
router.put('/:id', exerciseController.updateExercise);

/**
 * @swagger
 * /api/exercises/{id}:
 *   delete:
 *     summary: Xoá bài tập theo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xoá bài tập thành công
 */
router.delete('/:id', exerciseController.deleteExercise);

module.exports = router;
