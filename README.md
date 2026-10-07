# Mãos Solidárias (ong-spa)

Site de uma ONG fictícia, desenvolvido como projeto acadêmico de Desenvolvimento front-end (Experiência Prática II). É uma aplicação de página única (SPA) feita com JavaScript puro.

## Funcionalidades

- Navegação SPA por hash (`#/`, `#/projetos`, `#/cadastro`), sem recarregar a página
- Telas geradas por templates dinâmicos (Template Literals e `map`)
- Formulário de cadastro com máscaras (CPF, telefone e CEP), validação nativa e validação em JavaScript com mensagens no DOM
- Lista de voluntários salva no `localStorage` (guarda só nome, área e data; nunca CPF, e-mail ou telefone)
- Menu responsivo com botão hambúrguer e submenu
- Layout responsivo com CSS Grid de 12 colunas e Flexbox
- Modo escuro automático, conforme a preferência do sistema (`prefers-color-scheme`)
- Acessibilidade: landmarks, atributos ARIA, foco visível e contraste mínimo de 4,5:1

## Tecnologias

- HTML5 semântico
- CSS3: variáveis (Design System), Grid, Flexbox e media queries
- JavaScript (ES6+), sem frameworks
- Day.js 1.11.13, carregado por CDN (datas relativas na lista)
- esbuild e html-minifier-terser (build de produção, via Node.js e npm)
- Git e GitHub, com GitFlow

## Estrutura do projeto

```
ong-spa/
├── html/index.html        # casca fixa da SPA
├── css/style.css          # Design System, Grid, Flexbox, componentes e modo escuro
├── imagens/               # imagens em .jpg e .webp
├── js/
│   ├── menu.js            # menu hambúrguer
│   ├── mascaras.js        # máscaras e validação do CPF
│   ├── templates.js       # dados e templates das telas
│   ├── router.js          # roteamento por hash
│   ├── armazenamento.js   # localStorage
│   ├── validacao.js       # validação e mensagens de erro
│   ├── lista.js           # lista de voluntários cadastrados
│   └── main.js            # eventos e inicialização
├── build.js               # script de build de produção
├── package.json
└── dist/                  # saída minificada gerada pelo build
```

## Pré-requisitos

- Navegador moderno (Chrome, Edge ou Firefox)
- Git, para clonar o repositório
- Node.js, apenas para gerar o build de produção. Para abrir o site em desenvolvimento não é necessário.
- Internet é opcional: serve apenas para carregar o Day.js. Sem ela, a lista mostra a data simples.

## Instalação e execução local

```
git clone https://github.com/nkbit/ong-spa.git
cd ong-spa
```

Abra o arquivo `html/index.html` no navegador.

Alternativa com servidor local (requer Python):

```
python -m http.server 8000
```

Depois acesse `http://localhost:8000/html/index.html`.

## Build de produção

```
npm install
node build.js
```

Gera a pasta `dist/` com HTML, CSS e JS minificados (esbuild e html-minifier-terser) e imprime o tamanho antes e depois. Abra `dist/html/index.html` para ver a versão otimizada.

## Testes

Não há testes automatizados. Os testes foram manuais:

1. Clicar nos itens do menu e conferir que a página não recarrega
2. Digitar números nos campos de CPF, telefone e CEP e conferir as máscaras
3. Sair de campos inválidos e conferir as mensagens de erro
4. Enviar o formulário com dados fictícios e conferir a lista após atualizar a página (F5)
5. Reduzir a janela e testar o menu hambúrguer
6. Alternar o tema claro e escuro do sistema e conferir as cores

Para o CPF, use um número de teste válido, como `529.982.247-25`.

## Versionamento e fluxo de trabalho

- **GitFlow:** `main` (versões estáveis), `develop` (integração), `feature/` (funcionalidades) e `hotfix/` (correções urgentes)
- **Commits:** padrão Conventional Commits (`feat`, `chore`, `docs`)
- **Versões:** Versionamento Semântico, com tags anotadas (por exemplo, `v1.0.0`)
- **Gestão:** issues, milestones e pull requests para registrar e integrar as mudanças