import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import BooksRouter from './routes/books.routes';
import dotenv from 'dotenv';
import errorMiddleware from './errors/errorMiddleware';

dotenv.config();

const app = express();

app.use(express.json());

app.use(BooksRouter);

// error middleware
app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});