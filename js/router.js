const rotas = {
  "/": { titulo: "Início", template: () => templates.inicio() },
  "/projetos": { titulo: "Projetos", template: () => templates.projetos() },
  "/cadastro": { titulo: "Cadastro", template: () => templates.cadastro() },
};

const app = document.getElementById("app");

function atualizarMenu(caminho) {
  document.querySelectorAll("[data-rota]").forEach((link) => {
    if (link.dataset.rota === caminho) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function fecharMenu() {
  const menuAberto = document.getElementById("menu-principal");
  const botaoMenu = document.querySelector(".menu-toggle");
  if (menuAberto) menuAberto.classList.remove("aberto");
  if (botaoMenu) {
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
  }
}

function renderizar() {
  const caminho = location.hash.slice(1) || "/";
  const rota = rotas[caminho];
  const html = rota ? rota.template() : templates.naoEncontrado();

  app.replaceChildren();
  app.insertAdjacentHTML("beforeend", html);

  if (caminho === "/cadastro") {
    iniciarMascaras();
    mostrarCadastros();
    }

  document.title = "Mãos Solidárias | " + (rota ? rota.titulo : "Página não encontrada");
  atualizarMenu(caminho);
  fecharMenu();
  app.focus();
  window.scrollTo(0, 0);
}

function iniciarRoteador() {
  window.addEventListener("hashchange", renderizar);
  renderizar();
}

