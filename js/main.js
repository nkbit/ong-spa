if (typeof dayjs === "function") {
  dayjs.extend(dayjs_plugin_relativeTime);
  dayjs.locale("pt-br");
}

app.addEventListener("focusout", (evento) => {
  if (campoValidavel(evento.target)) validarCampo(evento.target);
});

app.addEventListener("input", (evento) => {
  if (campoValidavel(evento.target) && evento.target.matches(".campo-erro, .campo-ok")) {
    validarCampo(evento.target);
  }
});

app.addEventListener("invalid", (evento) => {
  if (campoValidavel(evento.target)) validarCampo(evento.target);
}, true);

app.addEventListener("click", (evento) => {
  if (evento.target.id === "limpar-cadastros") {
    limparCadastros();
    mostrarCadastros();
  }
});

app.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formulario = evento.target;
  const anterior = app.querySelector(".alerta");
  if (anterior) anterior.remove();

  salvarCadastro({
    nome: formulario.elements.nome.value,
    area: formulario.elements.area.value,
    data: new Date().toLocaleDateString("pt-BR"),
    criadoEm: new Date().toISOString(),
  });

  const aviso = document.createElement("div");
  aviso.className = "alerta alerta-sucesso";
  aviso.setAttribute("role", "alert");
  aviso.textContent = "Cadastro enviado com sucesso. Obrigado por ser voluntário!";

  formulario.querySelectorAll(".mensagem-erro").forEach((m) => m.remove());
  formulario.querySelectorAll(".campo-erro, .campo-ok").forEach((c) => c.classList.remove("campo-erro", "campo-ok"));
  formulario.reset();
  formulario.before(aviso);
  mostrarCadastros();
});

iniciarRoteador();