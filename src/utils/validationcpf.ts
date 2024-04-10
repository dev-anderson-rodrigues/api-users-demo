export const validarCPF = (cpf: string): boolean => {
  // Remove caracteres não numéricos do CPF
  cpf = cpf.replace(/\D/g, '');

  // Verifica se o CPF possui 11 dígitos
  if (cpf.length !== 11) return false;

  // Verifica se todos os dígitos do CPF são iguais
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = soma % 11;
  const digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

  // Verifica o primeiro dígito verificador
  if (parseInt(cpf.charAt(9)) !== digitoVerificador1) return false;

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = soma % 11;
  const digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

  // Verifica o segundo dígito verificador
  if (parseInt(cpf.charAt(10)) !== digitoVerificador2) return false;

  // CPF válido
  return true;
};
