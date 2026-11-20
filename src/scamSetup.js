(() => {
  const query = new URL(window.location.href).searchParams.get("slug");

  async function loadArticles() {
    const res = await fetch("./articles.json");
    if (!res.ok) throw new Error(`Erro ${res.status} ao carregar artigos.json`);
    return res.json();
  }

  function formatDate(isoDate) {
    if (!isoDate) return "";
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  }

  loadArticles().then((artigos) => {
    const artigo = Array.from(artigos).find((artigo) => artigo.id === query);
    const title = document.getElementById("article-title");
    const subtitle = document.getElementById("article-subtitle");
    const container = document.querySelector(".prose");

    if (!artigo) {
      title.textContent = "Artigo não encontrado";
      return;
    }

    document.title = artigo.titulo;
    title.textContent = artigo.titulo;
    subtitle.textContent = [artigo.autor, formatDate(artigo.data)]
      .filter(Boolean)
      .join(" · ");
    container.innerHTML = artigo.html;
  });
})();
