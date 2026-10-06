const campoValidavel = (el) =>
  el.matches("input:not([type=radio]):not([type=checkbox]), select, textarea");

function mensagemDeErro(campo) {
  const v = campo.validity;
  if (v.valueMissing) return "Preencha este campo.";
  if (v.typeMismatch) return "Informe um valor válido.";
  if (v.patternMismatch) return campo.title || "Formato inválido.";
  if (v.tooShort) return "Digite pelo menos " + campo.minLength + " caracteres.";
  if (v.customError) return campo.validationMessage;
  return "Valor inválido.";
}

function validarCampo(campo) {
  if (campo.id === "cpf") {
    campo.setCustomValidity(campo.value && !cpfValido(campo.value) ? "CPF inválido." : "");
  }

  const avisoAnterior = document.getElementById("erro-" + campo.id);
  if (avisoAnterior) avisoAnterior.remove();
  campo.classList.remove("campo-erro", "campo-ok");
  campo.removeAttribute("aria-invalid");
  campo.removeAttribute("aria-describedby");

  if (campo.validity.valid) {
    if (campo.value) campo.classList.add("campo-ok");
    return;
  }

  const mensagem = document.createElement("span");
  mensagem.id = "erro-" + campo.id;
  mensagem.className = "mensagem-erro";
  mensagem.setAttribute("role", "alert");
  mensagem.textContent = mensagemDeErro(campo);

  campo.after(mensagem);
  campo.classList.add("campo-erro");
  campo.setAttribute("aria-invalid", "true");
  campo.setAttribute("aria-describedby", mensagem.id);
}