const {
  soma,
  ePar,
  inverteString,
  eAnoBissexto,
  contaVogais,
} = require("./questions");
//----------------------------------------------------------//
//soma
test('soma 5 + 7 = 12', () => {//1
  expect(soma(5, 7)).toBe(12);
});

test('soma 11 + 100 NÃO deve ser 110', () => {//2
  expect(soma(11, 100)).toBeLessThan(120);
});

test('soma 70 + 68 = 138', () => {//3
  expect(soma(70, 68)).toBe(138);
});

test('soma 77 + 77 = ser MAIOR que 150', () => {//4
  expect(soma(77, 77)).toBeGreaterThan(150);
});

//----------------------------------------------------------//
//ePar
test('A divisão do número 8 dividido por 2 deve ser par', () => {//1
  expect(ePar(8)).toBeTruthy();
});

test('A divisão do número 19 dividido por 2 NÃO deve ser par', () => {//2
  expect(ePar(19)).toBeFalsy();
});

test('A divisão do número 5 dividido por 2 NÃO deve ser par', () => {//3
  expect(ePar(5)).toBeFalsy();
});

test('A divisão do número 10 dividido por 2 deve ser par', () => {//4
  expect(ePar(10)).toBeTruthy();
});


//----------------------------------------------------------//
//inverteString
test('O nome "Talles", ao inverso, deve ser "sellaT "', () => {//1
  expect(inverteString('Talles')).toMatch(/sellaT/);
});

test('O nome "Leael", ao inverso, deve ser "leaeL "', () => {//2
  expect(inverteString('Leael')).toMatch(/leaeL/);
});

test('A frase "subi no onibus", ao inverso, deve ser "subino on ibus"', () => {//3
  expect(inverteString('subi no onibus')).toMatch(/subino on ibus/);
});

test('A palavra "Casa", ao inverso, deve ser "asaC"', () => {//4
  expect(inverteString('Casa')).toMatch(/asaC/);
});


//----------------------------------------------------------//
//eAnoBissexto
test('O ano "2022" NÃO deve ser bissexto', () => {//1
  expect(eAnoBissexto(2022)).toBeFalsy();
});

test('O ano "2024" deve ser bissexto', () => {//2
  expect(eAnoBissexto(2024)).toBeTruthy();
});

test('O ano "2028" deve ser bissexto', () => {//3
  expect(eAnoBissexto(2028)).toBeTruthy();
});

test('O ano "2002" NÃO deve ser bissexto', () => {//4
  expect(eAnoBissexto(2002)).toBeFalsy();
});


//----------------------------------------------------------//
//contaVogais
test('A palavra "Uva" deve conter 2 vogais', () => {//1
  expect(contaVogais('Uva')).toBe(2);
});

test('A palavra "Paralelepipedo" deve conter 7 vogais', () => {//2
  expect(contaVogais('Paralelepipedo')).toBe(7);
});

test('O nome "Aluisio" deve conter 5 vogais', () => {//3
  expect(contaVogais('Aluisio')).toBe(5);
});

test('A palavra "Reservatorio" deve conter 6 vogais', () => {//4
  expect(contaVogais('Reservatorio')).toBe(6)
});

// //Exemplo de teste - npm run test
// describe("Descrição do grupo de testes", () => {
//   test("Descrição do teste", () => {
//     expect(true).toBe(true);
//   });
// });
