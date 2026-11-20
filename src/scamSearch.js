(() => {
  async function loadArticles() {
    const res = await fetch("./articles.json");
    if (!res.ok) throw new Error(`Erro ${res.status} ao carregar artigos.json`);
    return res.json();
  }

  loadArticles().then((artigos) => {
    const container = document.getElementById("articles-container");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    function updateFilteredArticles() {
      return Array.from(artigos)
        .filter((artigo) => artigo.type === "scam")
        .filter((artigo) =>
          artigo.titulo.toLowerCase().includes(searchInput.value.toLowerCase()),
        );
    }
    function displayArticles(filteredArticles) {
      container.innerHTML = "";
      if (filteredArticles.length === 0) {
        const empty = document.createElement("p");
        empty.className = "col-span-full text-center text-gray-500";
        empty.textContent = "Nenhum tutorial encontrado.";
        container.appendChild(empty);
        return;
      }
      filteredArticles.forEach((artigo) => {
        container.appendChild(createCard(artigo));
      });
    }
    function createPlaceholder() {
      const placeholder = document.createElement("div");
      placeholder.className = "aspect-[4/3] w-full bg-primary-bg";
      return placeholder;
    }
    function createCard(artigo) {
      const card = document.createElement("article");
      card.className =
        "aspect-[4/3] flex flex-col bg-white border border-gray-200 rounded-xl p-3 shadow-sm";

      const media = document.createElement("div");
      media.className = "bg-primary-bg rounded-lg mb-3 overflow-hidden";
      if (artigo.imagem) {
        const img = document.createElement("img");
        img.src = artigo.imagem;
        img.alt = artigo.titulo ?? "";
        img.className = "w-full h-full object-cover";
        // Se a imagem não carregar (caminho errado, arquivo ausente), mostra o placeholder
        img.addEventListener("error", () =>
          img.replaceWith(createPlaceholder()),
        );
        media.appendChild(img);
      } else {
        media.appendChild(createPlaceholder());
      }
      const title = document.createElement("h3");
      title.className = "font-bold text-primary-dark mb-1 line-clamp-2";
      title.textContent = artigo.titulo;

      const author = document.createElement("p");
      author.className = "text-sm text-gray-500 flex-1";
      author.textContent = artigo.autor ?? "";

      const button = document.createElement("a");
      button.href = `artigo.html?slug=${encodeURIComponent(artigo.id)}`;
      button.className =
        "mt-4 block text-center border-2 border-primary text-primary font-medium rounded-lg py-2 " +
        "hover:bg-primary hover:text-white transition-colors";
      button.textContent = "Acessar";

      card.append(media, title, author, button);
      return card;
    }
    searchButton.addEventListener("click", () => {
      const filteredArticles = updateFilteredArticles();
      displayArticles(filteredArticles);
    });
    displayArticles(updateFilteredArticles());
    console.log(artigos);
  });
})();
