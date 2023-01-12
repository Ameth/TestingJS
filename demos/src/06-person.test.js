const Person = require("./06-person");

const person = new Person("Ameth", 286.601, 193);
const imc = person.calcIMC();

console.log(imc);

// AAA
// Arrange -> Preparar las condiciones previas
// Act -> Ejecutar cada paso
// Assert -> Resolver y verificar los resultados esperados

describe("Test para Person", () => {
  let person;

  //Arrange
  beforeEach(() => {
    person = new Person("Ameth", 130, 193);
  });

  test("Probar que está bajo de peso", () => {
    //Arrange
    person.weight = 130;

    // Act
    const imc = person.calcIMC();

    // Assert
    expect(imc).toBe("down");
  });

  test("Probar que está normal", () => {
    person.weight = 100;
    const imc = person.calcIMC();
    expect(imc).toBe("down");
  });
});
