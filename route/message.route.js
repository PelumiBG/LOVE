import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('ques', { name: 'OYENIKE', message: 'JB' });
});

router.post('/submit', (req, res) => {
    const { message } = req.body || {};
    if(!message) {
        return res.render('ques', { message: 'Error: No message provided' });
    }
    if(message || message.toLowerCase() === 'YES') {
        return res.render('index', { message:'JB' });
    }else {
        return res.render('ques', { message });
    };
});

export default router;