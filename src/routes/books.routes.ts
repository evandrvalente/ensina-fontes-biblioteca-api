import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const booksController = new BooksController()
const BooksRouter = Router();

BooksRouter.get('/books', booksController.getAll);

export default BooksRouter;