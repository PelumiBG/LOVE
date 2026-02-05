import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import messageRoute from './route/message.route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.cors({origin: 'http://localhost:7000'});
app.use(helmet());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/', messageRoute);

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}/`)
})