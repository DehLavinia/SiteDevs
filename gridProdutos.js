// Função para criar os cards
function criarCards() {
    const containerCards = document.getElementById("containerCards");
  
    Produtos.forEach((produto) => {
      // Criação dos elementos do card
      const cardProduto = document.createElement("div");
      cardProduto.className = "cardProduto";
  
      const containerCard3d = document.createElement("div");
      containerCard3d.className = "containerCard3d";
  
      const frontCard = document.createElement("div");
      frontCard.className = "frontCard";
  
      const imgFrontCard = document.createElement("img");
      imgFrontCard.src = produto.IMAGEM;
      imgFrontCard.className = "imgFrontCard";
  
      const backCard = document.createElement("div");
      backCard.className = "backCard";
  
      const imgBackCard = document.createElement("img");
      imgBackCard.src = produto.IMAGEMBACK;
      imgBackCard.className = "imgBackCard";
  
      const codigoProdutoCard = document.createElement("p");
      codigoProdutoCard.className = "codigoProdutoCard";
      codigoProdutoCard.textContent = produto.PRODUTO;
  
      const PrecoProdutoCard = document.createElement("p");
      PrecoProdutoCard.className = "PrecoProdutoCard";
      PrecoProdutoCard.textContent = `R$ ${produto.VALOR}`;
  
      const nota = document.createElement("p");
      nota.className = "nota";
      nota.textContent = "*frete não incluso";
  
      const vejaMaisBtn = document.createElement("button");
      vejaMaisBtn.innerHTML =
        '<i class="ph-fill ph-shopping-cart"></i> Adicionar';
      vejaMaisBtn.className = "vejaMaisBtn";
  
      // Adição dos elementos ao card
      frontCard.appendChild(imgFrontCard);
      backCard.appendChild(imgBackCard);
      containerCard3d.appendChild(frontCard);
      containerCard3d.appendChild(backCard);
      cardProduto.appendChild(containerCard3d);
      cardProduto.appendChild(codigoProdutoCard);
      cardProduto.appendChild(PrecoProdutoCard);
      cardProduto.appendChild(nota);
      cardProduto.appendChild(vejaMaisBtn);
  
      // Adição do card ao container
      containerCards.appendChild(cardProduto);
    });
  }

  

  criarCards();

