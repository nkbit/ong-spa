const CHAVE_CADASTROS = "ong-cadastros";

function lerCadastros() {
  try {
    const dados = localStorage.getItem(CHAVE_CADASTROS);
    const lista = dados ? JSON.parse(dados) : [];
    return Array.isArray(lista) ? lista : [];
  } catch (erro) {
    return [];
  }
}

function salvarCadastro(cadastro) {
  const lista = lerCadastros();
  lista.push(cadastro);
  try {
    localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(lista));
  } catch (erro) {
    console.warn("Não foi possível salvar no localStorage.");
  }
}

function limparCadastros() {
  localStorage.removeItem(CHAVE_CADASTROS);
}