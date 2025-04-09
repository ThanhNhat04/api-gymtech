// routes/friendshipRoutes.js
const express = require('express');
const router = express.Router();
const friendshipController = require('../controllers/friendshipController');

/**
 * @swagger
 * /api/friendships:
 *   get:
 *     summary: Lấy danh sách lời mời hoặc quan hệ kết bạn
 *     responses:
 *       200:
 *         description: Danh sách lời mời/quan hệ kết bạn
 */
router.get('/', friendshipController.getAllFriendships);

/**
 * @swagger
 * /api/friendships:
 *   post:
 *     summary: Gửi lời mời kết bạn
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Friendship'
 *     responses:
 *       201:
 *         description: Lời mời kết bạn được tạo thành công
 */
router.post('/', friendshipController.createFriendship);

/**
 * @swagger
 * /api/friendships/{id}:
 *   delete:
 *     summary: Hủy lời mời hoặc xoá quan hệ kết bạn theo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Xoá quan hệ kết bạn thành công
 */
router.delete('/:id', friendshipController.deleteFriendship);

module.exports = router;
