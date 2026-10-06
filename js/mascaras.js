const apenasDigitos = (v) => v.replace(/\D/g, "");

const mascaras = {
  cpf: (v) =>
    apenasDigitos(v).slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2"),

  telefone: (v) =>
    apenasDigitos(v).slice(0, 11)
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4,5})(\d{4})$/, "$1-$2"),

  cep: (v) =>
    apenasDigitos(v).slice(0, 8)
      .replace(/(\d{5})(\d)/, "$1-$2"),
};

// Validação extra do CPF (dígitos verificadores)
function cpfValido(cpf) {
  cpf = apenasDigitos(cpf);
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  for (let t = 9; t < 11; t++) {
    let soma = 0;
    for (let i = 0; i < t; i++) soma += cpf[i] * (t + 1 - i);
    const dv = ((soma * 10) % 11) % 10;
    if (dv != cpf[t]) return false;
  }
  return true;
}

function iniciarMascaras() {
  Object.keys(mascaras).forEach((id) => {
    const campo = document.getElementById(id);
    if (campo) {
      campo.addEventListener("input", () => {
        campo.value = mascaras[id](campo.value);
      });
    }
  });

  const cpfCampo = document.getElementById("cpf");
  if (cpfCampo) {
    cpfCampo.addEventListener("blur", () => {
      cpfCampo.setCustomValidity(
        cpfValido(cpfCampo.value) ? "" : "CPF inválido."
      );
      cpfCampo.reportValidity();
    });
  }
}

