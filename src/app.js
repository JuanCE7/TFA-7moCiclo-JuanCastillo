import express from 'express'
import morgan from 'morgan'
import cookieparser from 'cookie-parser'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import usersRoutes from './routes/user.routes.js'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieparser());

app.use("/api", authRoutes);
app.use("/api", tasksRoutes);
app.use("/api", usersRoutes);

export default app;