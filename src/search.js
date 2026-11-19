(() => {
  async function loadArticles() {
    const res = await fetch("./articles.json");
    if (!res.ok) throw new Error(`Erro ${res.status} ao carregar artigos.json`);
    return res.json();
  }

  loadArticles().then((artigos) => {
    const container = document.querySelector("#articles-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    function updateFilteredArticles() {
      return Array.from(artigos).filter((artigo) =>
        artigo.titulo.toLowerCase().includes(searchInput.value.toLowerCase()),
      );
    }
    function displayArticles(filteredArticles) {
      container.innerHTML = "";
      filteredArticles.forEach((artigo) => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("border", "h-80", "bg-amber-50");
        articleElement.textContent = artigo.title;
        container.appendChild(articleElement);
      });
    }
    searchButton.addEventListener("click", () => {
      const filteredArticles = updateFilteredArticles();
      displayArticles(filteredArticles);
    });
    displayArticles(updateFilteredArticles());
    console.log(artigos);
  });
})();
