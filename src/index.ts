import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'express-async-errors';
import BooksRouter from './routes/books.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use(BooksRouter);

// error middleware
app.get('/', (req: Request, res: Response) => {
    res.status(StatusCodes.OK).send('Express + TypeScript')
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const { name, message, details } = err as any;
    console.log(`name: ${name}`);
  
    switch (name) {
      case 'ValidationError':
        res.status(400).json({ message: details[0].message });
        break;
      case 'NotFoundError':
        res.status(404).json({ message });
        break;
      case 'ConflictError':
        res.status(409).json({ message });
        break;
      default:
        console.error(err);
        res.sendStatus(500);
    }
  
    next();
  });

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});