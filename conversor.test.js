const conversor = require('./conversor');

test('quando passar uma string', () => {
  expect(conversor('90')).toBe('Não é um número.');
});
test('quando passar a temperatura em °C retornar em °F', () => {
  expect(conversor(35)).toBe('95 °F');
});
