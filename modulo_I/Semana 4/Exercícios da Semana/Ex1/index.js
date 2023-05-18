/*const estoque = [];

class CaixaRegistradora {
     constructor(codigoBarra, preco, nome)
        [{
            this.codigoBarra = codigoBarra,
            this.preco = preco,
            this.nome = nome
        }]

        set codigoBarra(novoCodigoBarra){
            this.codigoBarra = novoCodigoBarra

        }
        set preco(novoPreco){
            this.preco = novoPreco

        }
        set nome(novoNome){
            this.nome = novoNome

        }
    
}

 const produto = new CaixaRegistradora(123, 10,'café')
 console.log(produto)

//ideia tirada do video de apoio da semana 4 sobre classes*/

class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.caixa = {};
      this.totalConta = 0;
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const produto = { codigoBarra, preco, nome };
      this.estoque.push(produto);
    }
  
    iniciarAtendimento(clienteNome) {
      alert(`Atendimento iniciado para ${clienteNome}`);
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find((p) => p.codigoBarra === codigoBarra);
      if (produto) {
        this.caixa[codigoBarra] = (this.caixa[codigoBarra] || 0) + quantidade;
        alert(`Item ${produto.nome} adicionado à caixa registradora.`);
      } else {
        alert(`Código de barra ${codigoBarra} não encontrado no estoque.`);
      }
    }
  
    calcularTotalConta() {
      let total = 0;
      for (let codigoBarra in this.caixa) {
        const quantidade = this.caixa[codigoBarra];
        const produto = this.estoque.find((p) => p.codigoBarra === Number(codigoBarra));
        if (produto) {
          total += produto.preco * quantidade;
        }
      }
      this.totalConta = total;
      return total;
    }
  
    fecharConta(dinheiro) {
      const troco = dinheiro - this.totalConta;
      if (troco >= 0) {
        alert(`Conta fechada. Troco: R$ ${troco.toFixed(2)}.`);
        this.caixa = {};
        this.totalConta = 0;
      } else {
        alert("Valor insuficiente. Mande lavar pratos");
      }
    }
  }

  
  const caixa = new CaixaRegistradora();

// Adiciona alguns produtos no estoque
caixa.adicionarProduto(1, 10, "Produto 1");
caixa.adicionarProduto(2, 20, "Produto 2");
caixa.adicionarProduto(3, 30, "Produto 3");

while (true) {
  let product = Number(prompt("Enter the product value:"));
  if (isNaN(product)) {
    alert("Invalid input. Please enter a number.");
    continue;
  }
  if (product === 0) {
    break;
  }
  caixa.adicionarItem(product, 1);
}

let total = caixa.calcularTotalConta();
alert(`Total: R$ ${total.toFixed(2)}`);

let pay = Number(prompt("Enter the amount paid by the customer:"));
if (isNaN(pay)) {
  alert("Invalid input. Please enter a number.");
} else {
  caixa.fecharConta(pay);
}
