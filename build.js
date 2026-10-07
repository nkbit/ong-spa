const fs = require("fs");
const esbuild = require("esbuild");
const { minify } = require("html-minifier-terser");

const ordem = ["menu", "mascaras", "templates", "router", "armazenamento", "validacao", "lista", "main"];
const bytes = (arquivo) => fs.statSync(arquivo).size;

async function construir() {
  fs.rmSync("dist", { recursive: true, force: true });
  fs.mkdirSync("dist/html", { recursive: true });
  fs.mkdirSync("dist/css", { recursive: true });
  fs.mkdirSync("dist/js", { recursive: true });

  const js = ordem.map((nome) => fs.readFileSync("js/" + nome + ".js", "utf8")).join("\n;\n");
  const jsMin = await esbuild.transform(js, { minify: true });
  fs.writeFileSync("dist/js/app.min.js", jsMin.code);

  const css = fs.readFileSync("css/style.css", "utf8");
  const cssMin = await esbuild.transform(css, { loader: "css", minify: true });
  fs.writeFileSync("dist/css/style.min.css", cssMin.code);

  let html = fs.readFileSync("html/index.html", "utf8");
  html = html.replace("../css/style.css", "../css/style.min.css");
  html = html.replace(/<script src="\.\.\/js\/[a-z]+\.js"><\/script>\s*/g, "");
  html = html.replace("</body>", '<script src="../js/app.min.js"></script>\n</body>');
  const htmlMin = await minify(html, { collapseWhitespace: true, removeComments: true });
  fs.writeFileSync("dist/html/index.html", htmlMin);

  fs.cpSync("imagens", "dist/imagens", { recursive: true });

  const relatorio = [
    ["JS", ordem.reduce((soma, nome) => soma + bytes("js/" + nome + ".js"), 0), bytes("dist/js/app.min.js")],
    ["CSS", bytes("css/style.css"), bytes("dist/css/style.min.css")],
    ["HTML", bytes("html/index.html"), bytes("dist/html/index.html")],
  ];
  let totalAntes = 0;
  let totalDepois = 0;
  relatorio.forEach(([nome, antes, depois]) => {
    totalAntes += antes;
    totalDepois += depois;
    console.log(nome + ": " + antes + " -> " + depois + " bytes (" + (100 - (depois / antes) * 100).toFixed(1) + "% menor)");
  });
  console.log("TOTAL: " + totalAntes + " -> " + totalDepois + " bytes (" + (100 - (totalDepois / totalAntes) * 100).toFixed(1) + "% menor)");
}

construir();