const request = require("supertest");

const createApp = require("../src/app");

describe("Pruebas para endpoint Hello", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("Pruebas para [GET] /", () => {
    test("Retornar 'Hello World!' en endpoint inicial", () => {
      return request(app)
        .get("/")
        .expect(200)
        .then((res) => {
          expect(res.text).toEqual("Hello World!");
        });
    });
  });
});
