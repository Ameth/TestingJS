test("Probar objetos", () => {
  const data = { name: "Ameth" };

  data.lastname = "Ordonez";
  expect(data).toEqual({ name: "Ameth", lastname: "Ordonez" });
});

test("Probar nulls", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("Probar boleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("Probar strings", () => {
  expect("Ameth").toMatch(/met/);
});

test("Probar arrays", () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
