import express from 'express';
import dotenv from 'dotenv';
import userAuth from './routes/userRoute.mjs';
import adminRoute from './routes/adminRoute.mjs';
import groupRoute from './routes/groupRoute.mjs';
import directMessageRoute from './routes/directMessageRoute.mjs';

import { authenticateToken } from './middlewares/authenticate.mjs';

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
	res.send('Hello Express');
});

app.use('/api/user', userAuth);
app.use(authenticateToken);
app.get('/hello', (req, res) => {
	res.send('Hello Express');
});
app.use('/api/admin', adminRoute);
app.use('/api/group', groupRoute);
app.use('/api/directmessage', directMessageRoute);

app.listen(process.env.PORT, () => console.log('http://localhost:3000'));
