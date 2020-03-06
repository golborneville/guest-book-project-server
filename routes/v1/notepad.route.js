import express from 'express'
import {
    get, remove, post, put, getById
} from '../../controllers/v1/notepad.controller'

const router = express.Router();

// GET /v1/notepad : 사용자 조회
// POST /v1/notepad : 사용자 생성
router.route('/')
    .get(get)
    .post(post)

// GET /v1/notepad/id : 특정 사용자 조회
// PUT /v1/notepad/id : 특정 사용자 수정
// DEL /v1/notpad/id : 특정 사용자 삭제
router.route('/:id')
    .get(getById)
    .put(put)
    .delete(remove)
export default router