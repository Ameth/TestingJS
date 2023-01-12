const { generateManyBook } = require("../fakes/book.fake");
const BooksService = require("./books.service");

const mockSpyGetAll = jest.fn();

const MongoLibStub = {
  getAll: mockSpyGetAll,
  create: () => {},
};

// const MongoLibStub = {
//   getAll: () => [...faceBooks], -> Para usar mocks fakes
//   create: () => {},
// };

jest.mock("../lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockSpyGetAll,
    create: () => {},
  }))
);

describe("Pruebas para BooksServices", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe("Pruebas para getBooks()", () => {
    test("Retornar una lista de libros", async () => {
      // Arrange
      const fakeBooks = generateManyBook(10);
      mockSpyGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks({});

      console.log(books);

      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled(); // Si fue llamado
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1); // Cuantas veces fue llamando
      expect(mockSpyGetAll).toHaveBeenCalledWith("books", {}); // Si se llamo con estos parametros
    });

    test("Verificar el primer nombre del libro", async () => {
      // Arrange
      const fakeBooks = generateManyBook(4);
      mockSpyGetAll.mockResolvedValue(fakeBooks);

      // Act
      const books = await service.getBooks();

      console.log(books);

      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
