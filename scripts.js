// Array para armazenar os itens do carrinho
let cart = [];

// Exibe ou oculta o carrinho
function toggleCart() {
  const cartOverlay = document.getElementById("cart-overlay");
  cartOverlay.classList.toggle("hidden");
}

// Adiciona um produto ao carrinho
function addToCart(productName) {
  const product = cart.find((item) => item.name === productName);
  if (product) {
    product.quantity += 1; // Incrementa a quantidade se o produto já estiver no carrinho
  } else {
    cart.push({ name: productName, quantity: 1 }); // Adiciona um novo produto
  }
  renderCart(); // Atualiza a exibição do carrinho
  alert(`${productName} foi adicionado ao carrinho!`); // Exibe o alerta
}

// Renderiza os itens no carrinho
function renderCart() {
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = ""; // Limpa a lista

  if (cart.length === 0) {
    cartItemsList.innerHTML = "<li>O carrinho está vazio.</li>";
    return;
  }

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
            ${item.name} (Quantidade: ${item.quantity})
            <button onclick="removeFromCart('${item.name}')">Remover</button>
        `;
    cartItemsList.appendChild(li);
  });
}

// Remove um item do carrinho
function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  renderCart(); // Atualiza a exibição do carrinho
}

// Finaliza a compra
function checkout() {
  if (cart.length === 0) {
    alert("O carrinho está vazio.");
    return;
  }
  alert("Compra finalizada! Obrigado por comprar com a NextAge.");
  cart = []; // Limpa o carrinho após a compra
  renderCart();
  toggleCart();
}

// abrir e fechar o carrinho com alertas se caso a função não encontrar
document.addEventListener("DOMContentLoaded", () => {
  const btnCarrinho = document.querySelector(".btn-carrinho button");
  const btnCloseCart = document.getElementById("close-cart");

  if (btnCarrinho) {
    btnCarrinho.addEventListener("click", toggleCart);
  } else {
    console.error("Botão de carrinho não encontrado.");
  }

  if (btnCloseCart) {
    btnCloseCart.addEventListener("click", toggleCart);
  } else {
    console.error("Botão para fechar o carrinho não encontrado.");
  }
});
// cadrastro de pessoa
document.addEventListener("DOMContentLoaded", () => {
  const btnCadastrar = document.querySelector(".btn-cadastrar button");

  if (btnCadastrar) {
    btnCadastrar.addEventListener("click", () => {
      alert("A pessoa foi cadastrada com sucesso!");
    });
  } else {
    console.error("Botão de cadastrar não encontrado.");
  }
});

const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')
const themeSystem = localStorage.getItem('themeSystem') || 'light'

btnDarkModeToggle.addEventListener('click', () => {
    let oldTheme = localStorage.getItem('themeSystem') || 'light'
    let newTheme = oldTheme == "light" ? "dark" : "light"
    localStorage.setItem('themeSystem',newTheme)
    defineCurrentTheme(newTheme)
})

function defineCurrentTheme(theme){
    const darkSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-moon-stars' viewBox='0 0 16 16'><path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z'/><path d='M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z'/></svg>"
    const lightSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-sun' viewBox='0 0 16 16'><path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z'/></svg>"
    document.documentElement.setAttribute("data-theme", theme)
    if(theme == "light")
    {
        btnDarkModeToggle.innerHTML = darkSvg
        return
    }
    btnDarkModeToggle.innerHTML = lightSvg
}

defineCurrentTheme(themeSystem)
