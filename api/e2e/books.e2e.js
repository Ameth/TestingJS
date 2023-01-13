const mockSpyGetAll = jest.fn();

const request = require("supertest");

const createApp = require("../src/app");
const { generateManyBook } = require("../src/fakes/book.fake");

jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockSpyGetAll,
    create: () => {},
  }))
);

describe("Pruebas para books", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("Pruebas para [GET] /api/v1/books", () => {
    test("Retornar el listado total de los libros", async () => {
      const fakeBooks = generateManyBook(10);
      mockSpyGetAll.mockResolvedValue(fakeBooks);

      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(10);
        });
    });
  });
});
