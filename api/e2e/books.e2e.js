const { MongoClient } = require("mongodb");

const request = require("supertest");

const createApp = require("../src/app");

const { config } = require("../src/config/");

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe("Pruebas para books", () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.collection("books").drop();
  });

  describe("Pruebas para [GET] /api/v1/books", () => {
    test("Retornar el listado total de los libros", async () => {
      const seedData = await database.collection("books").insertMany([
        {
          name: "Cien años de soledad",
          year: 1989,
          author: "Gabo",
        },
        {
          name: "La Hojarasca",
          year: 1993,
          author: "Gabo",
        },
      ]);

      console.log("seedata:", seedData);

      return request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
