(() => {
  query = new URL(window.location.href).searchParams.get("slug");
  async function loadArticles() {
    const res = await fetch("./articles.json");
    if (!res.ok) throw new Error(`Erro ${res.status} ao carregar artigos.json`);
    return res.json();
  }

  loadArticles().then((artigos) => {
    const artigo = Array.from(artigos).find((artigo) => artigo.id === query);
    console.log(artigo);
    if (artigo) {
      const container = document.querySelector(".prose");
      container.innerHTML = artigo.html;
    }
  });
})();
