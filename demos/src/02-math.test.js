const { suma, multiplicar, dividir } = require("./02-math");

test("Sumar 5 + 7 es igual a 12", () => {
  const rta = suma(5, 7);
  expect(rta).toBe(12);
});

test("Multiplicar 4 * 3 es igual a 12", () => {
  const rta = multiplicar(4, 3);
  expect(rta).toBe(12);
});

test("Probando divisiones", () => {
  expect(dividir(20, 4)).toBe(5);
  expect(dividir(100, 4)).toBe(25);
  expect(dividir(60, 2)).toBe(30);
});

test("División por cero", () => {
  expect(dividir(10, 0)).toBeNull();
});
