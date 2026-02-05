import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { status: 'ok', message: 'JB'})
});

export default router;