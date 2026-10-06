function mostrarCadastros() {
  const antigo = document.getElementById("lista-cadastros");
  if (antigo) antigo.remove();

  const lista = lerCadastros();
  if (lista.length === 0) return;

  const secao = document.createElement("section");
  secao.id = "lista-cadastros";

  const titulo = document.createElement("h3");
  titulo.textContent = "Voluntários cadastrados neste navegador";

  const ul = document.createElement("ul");
  lista.forEach((item) => {
    const li = document.createElement("li");
    const quando = item.criadoEm && typeof dayjs === "function"
      ? dayjs(item.criadoEm).fromNow()
      : item.data;
    li.textContent = item.nome + " - " + item.area + " (" + quando + ")";
    ul.append(li);
  });

  const limpar = document.createElement("button");
  limpar.type = "button";
  limpar.id = "limpar-cadastros";
  limpar.textContent = "Limpar lista";

  secao.append(titulo, ul, limpar);
  app.append(secao);
}