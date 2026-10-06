const dadosPilares = [
  { titulo: "Missão", texto: "Promover inclusão social e apoio a comunidades em vulnerabilidade." },
  { titulo: "Visão", texto: "Ser referência em transparência e impacto social." },
  { titulo: "Valores", texto: "Empatia, transparência, respeito e cooperação." },
];

const dadosProjetos = [
  { titulo: "Cesta Solidária", imagem: "cestas", alt: "Mãos entregando uma cesta básica a uma família", legenda: "Distribuição mensal de alimentos." },
  { titulo: "Reforço Escolar", imagem: "reforco", alt: "Voluntária ajudando crianças a estudar em uma mesa", legenda: "Apoio a crianças da rede pública." },
  { titulo: "Mutirão de Saúde", imagem: "saude", alt: "Profissionais voluntários atendendo a comunidade em uma tenda", legenda: "Atendimento básico trimestral." },
];

const cardPilar = (p) => `<article><h3>${p.titulo}</h3><p>${p.texto}</p></article>`;

const cardProjeto = (p) => `<article><h4>${p.titulo}</h4>
<figure><img src="../imagens/${p.imagem}.jpg" alt="${p.alt}" width="400" height="200"><figcaption>${p.legenda}</figcaption></figure></article>`;

const templates = {
  inicio: () => `
<section>
<h2>Quem somos</h2>
<figure>
<picture>
<source srcset="../imagens/voluntarios.webp" type="image/webp">
<img src="../imagens/voluntarios.jpg" alt="Grupo de voluntários da ONG organizando cestas básicas em um galpão" width="600" height="400">
</picture>
<figcaption>Voluntários em ação na campanha mensal de alimentos.</figcaption>
</figure>
<p>Somos uma organização do terceiro setor dedicada a transformar vidas por meio da solidariedade e do voluntariado.</p>
</section>
<section>
<h2>Missão, visão e valores</h2>
${dadosPilares.map(cardPilar).join("\n")}
</section>
<section>
<h2>Fale conosco</h2>
<address>
<p>E-mail: <a href="mailto:contato@maossolidarias.org">contato@maossolidarias.org</a></p>
<p>Telefone: <a href="tel:+551100000000">(11) 0000-0000</a></p>
</address>
</section>
`,

  projetos: () => `
<h2>Nossas iniciativas</h2>
<section id="andamento">
<h3>Projetos em andamento</h3>
${dadosProjetos.map(cardProjeto).join("\n")}
</section>
<section id="voluntario">
<h3>Como ser voluntário</h3>
<ol>
<li>Preencha o <a href="#/cadastro">formulário de cadastro</a>.</li>
<li>Escolha sua área de interesse e disponibilidade.</li>
<li>Aguarde o contato da nossa equipe.</li>
</ol>
</section>
<section id="doar">
<h3>Como doar</h3>
<ul><li>Alimentos não perecíveis</li><li>Doação financeira via Pix</li></ul>
<table>
<caption>Dados para doação</caption>
<tr><th scope="row">Chave Pix</th><td>contato@maossolidarias.org</td></tr>
<tr><th scope="row">Favorecido</th><td>Mãos Solidárias</td></tr>
</table>
</section>
`,

  cadastro: () => `
<h2>Cadastro de voluntário</h2>
<form action="#" method="post">
<fieldset><legend>Dados pessoais</legend>
<label for="nome">Nome completo</label>
<input type="text" id="nome" name="nome" required minlength="3" autocomplete="name">
<label for="email">E-mail</label>
<input type="email" id="email" name="email" required autocomplete="email">
<label for="cpf">CPF</label>
<input type="text" id="cpf" name="cpf" required inputmode="numeric" maxlength="14" placeholder="000.000.000-00" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Formato: 000.000.000-00">
<label for="nascimento">Data de nascimento</label>
<input type="date" id="nascimento" name="nascimento" required>
<label for="telefone">Telefone</label>
<input type="tel" id="telefone" name="telefone" required maxlength="15" placeholder="(00) 00000-0000" pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" title="Formato: (00) 00000-0000">
</fieldset>
<fieldset><legend>Endereço</legend>
<label for="cep">CEP</label>
<input type="text" id="cep" name="cep" required inputmode="numeric" maxlength="9" placeholder="00000-000" pattern="\\d{5}-\\d{3}" title="Formato: 00000-000">
<label for="cidade">Cidade</label>
<input type="text" id="cidade" name="cidade" required>
<label for="uf">Estado</label>
<select id="uf" name="uf" required>
<option value="">Selecione</option>
<option value="SP">São Paulo</option>
<option value="RJ">Rio de Janeiro</option>
<option value="MG">Minas Gerais</option>
</select>
</fieldset>
<fieldset><legend>Participação</legend>
<label for="area">Área de interesse</label>
<select id="area" name="area" required>
<option value="">Selecione</option>
<option>Alimentação</option><option>Educação</option><option>Saúde</option>
</select>
<fieldset><legend>Disponibilidade</legend>
<label><input type="radio" name="disp" value="semana" required> Dias úteis</label>
<label><input type="radio" name="disp" value="fds"> Fins de semana</label>
</fieldset>
<label for="msg">Por que quer ser voluntário?</label>
<textarea id="msg" name="msg" rows="4" maxlength="500"></textarea>
<label><input type="checkbox" name="termos" required> Concordo com o uso dos meus dados para contato.</label>
</fieldset>
<button type="submit">Enviar cadastro</button>
</form>
`,

  naoEncontrado: () => `
<section>
<h2>Página não encontrada</h2>
<p>O endereço acessado não existe. <a href="#/">Voltar ao início</a>.</p>
</section>
`,
};