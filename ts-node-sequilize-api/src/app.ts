import express, { Application } from 'express';
import sequelize  from './config/database';
import userRoutes from './routes/userRoutes';

const app: Application = express();

app.use(express.json());

app.use('/api/v1/users', userRoutes);

sequelize.sync().then(() => {
   console.log("Database & tables created!");
});

export default app;