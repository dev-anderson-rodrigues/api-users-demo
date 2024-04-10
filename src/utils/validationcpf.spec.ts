/* eslint-disable @typescript-eslint/no-unused-vars */
import { validarCPF } from './validationcpf';

describe('Testes para a função validarCPF', () => {
  it('Deve retornar verdadeiro para um CPF válido', () => {
    // arrange
    // CPFs válidos e inválidos para teste
    expect(validarCPF('529.982.247-25')).toBe(true);
  });

  it('Deve retornar falso para um CPF inválido', () => {
    // arrange
    // CPFs válidos e inválidos para teste
    expect(validarCPF('123.456.789-00')).toBe(false);
  });
});
