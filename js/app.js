let totalGeral = 0;
limpar();

function adicionarAoCarrinho() {
    // recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value; 
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(produto.split('R$')[1].trim());
    let quantidade = document.getElementById('quantidade').value;

    //verifica se a quantidade add no carrinho é > q 0
    if (quantidade > 0) {
      // calcular o preco, subtotal
      let preco = quantidade * valorUnitario;
      let carrinho = document.getElementById('lista-produtos');
    
    
    // adicionar no carrinho
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade} x </span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario.toFixed(2)}</span>
    </section>`;
    
    // atualizar o valor total
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;
    
    // limpar o valor da quantidade
    document.getElementById('quantidade').value = 0;
  }
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0.00';
}

