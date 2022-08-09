import { Router } from 'express';
import BooksController from '../controllers/books.controller';
import validationBook from '../validations/books.validations';

const booksController = new BooksController()
const BooksRouter = Router();
const booksSlashId = '/books/:id';

BooksRouter.get('/books', booksController.getAll);
BooksRouter.get(booksSlashId, booksController.getById);
BooksRouter.post('/books/', validationBook, booksController.create);
BooksRouter.put(booksSlashId, validationBook, booksController.update);
BooksRouter.delete(booksSlashId, booksController.remove);

export default BooksRouter;