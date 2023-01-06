describe("Grupo 1", () => {
  beforeAll(() => {
    console.log("beforeAll Grupo 1");
  });

  afterAll(() => {
    console.log("afterAll Grupo 1");
  });

  beforeEach(() => {
    console.log("Corriendo una prueba...");
  });

  afterEach(() => {
    console.log("Se termino de correr una prueba...");
  });

  test("Caso 1", () => {
    expect(1 + 2).toBe(3);
  });

  test("Caso 2", () => {
    expect(1 + 3).toBe(4);
  });

  describe("Subgrupo 1.1", () => {
    beforeAll(() => {
      console.log("beforeAll Subgrupo 1.1");
    });

    test("Caso 3", () => {
      expect(1 + 2).toBe(3);
    });

    test("Caso 4", () => {
      expect(1 + 3).toBe(4);
    });
  });
});
