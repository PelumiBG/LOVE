import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('ques', { name: 'OYENIKE', message: '' });
});

router.post('/submit', (req, res) => {
    const { message, name } = req.body || {};
    const userName = name || 'OYENIKE';
    if(!message) {
        return res.render('ques', { name: userName, message: 'Error: No answer provided' });
    }
    if(message.toLowerCase() === 'yes') {
        return res.render('index', { message: userName });
    } else {
        return res.render('ques', { name: userName, message: 'Sorry can\'t view this Letter' });
    }
});

export default router;