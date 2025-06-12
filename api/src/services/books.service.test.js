/* Nuestro objeto de pruebas */
const BooksService = require('./books.service')

/* Sumplantando la clase MongoLib */
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => [...newBook]
};

/* Datos simulados */
const fakeBooks = [
  {
    _id:1,
    name: 'Harry Potter'
  }
];

let newBook = {
  'title' : 'Star Wars 3',
  'Author' : 'George Lucas',
  'Year' : '2007'
};

/* Llamando a Mock */
// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {

  /* Variable para instancia del servicio */
  let service;

  /* Para cada prueba, crear una nueva instancia*/
  beforeEach(() => {
    /* Crear instancia del servicio */
    service = new BooksService();
  });

  /* Pruebas para el metodo getBook */
  describe('Test for getBooks()', () => {
    test('Should return a list of books', async () => {
      /* Arrange: preparar el entorno */

      /* Act: Accion a probar */
      const books = await service.getBooks({})
      console.log(books);

      /* Assert: Confirmar */
      expect(books.length).toEqual(1);
    });
  });

  /* Pruebas para el metodo createBook */
  describe('Test for createBooks()', () => {
    test('Should create a new books', async () => {
      /* Arrange: preparar el entorno */

      /* Act: Accion a probar */
      const createdBook = await service.createBook(newBook)
      console.log(createdBook);

      /* Assert: Confirmar */
      expect(createdBook).toBeDefined();
      expect(createdBook._id).toBeDefined();
      expect(createdBook.title).toBe(newBook.title);
    });
  });

});
