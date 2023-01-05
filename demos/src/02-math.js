function suma(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return b === 0 ? null : a / b;
}

module.exports = {
  suma,
  multiplicar,
  dividir,
};
