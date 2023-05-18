/*class Veiculo {
    constructor(cor, velocidade){
        this.cor = cor
        this.velocidade = velocidade
    }

    acelerar(){
        console.log('O carro chegou a '+this.velocidade + ' km/h')
    }

    buzinar(){
        console.log('Fom fom')
    }
}

const umCarro = new Veiculo('azul', 100)*/


// 2º Exemplo de utilização de classes, começando com o paradigma funcional e depois adaptando a objetos
let altura = 50
let largura = 60

function calcularArea(alt, lar){
    return alt*lar
}

console.log(calcularArea(50,60))


class Poligono {
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }

    get area(){
        return this.#calcularArea()
    }

    set mudarLargura(largura){
        this.largura = largura
    }

    //usando # para tornar a função abaixo privada. Aí precisamos de um get para acessar
    #calcularArea(){
        return this.altura*this.largura
    }
}
let poligono = new Poligono(50,60)
poligono.mudarLargura = 20
console.log(poligono.area)