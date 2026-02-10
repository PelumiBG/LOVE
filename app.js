import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import messageRoute from './route/message.route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// allowed origin by cors
app.use(cors({origin: ['http://localhost:7000/',
    'https://love-u4os.onrender.com/'],
    credentials: true}
));
// Security middleware
app.use(helmet());
// Serve static files from the "view" directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
// Use the message route for handling requests to the root path
app.use('/', messageRoute);

const PORT = 7000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}/`)
})