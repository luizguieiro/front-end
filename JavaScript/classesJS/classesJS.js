class Animal {
    constructor (nome){
        this.nome = nome;
    }
    printNome(){
    return this.nome;
    }
}

class Cachorro extends Animal{ //extends herda tudo da classe Animal
    constructor(nome){
        super (nome); //o super invoca o constructor da classe PAI
    }
}

cachorro = new Cachorro('Maltes'); //pelo fato da classe pai exigir um parâmetro, é obrigatório passar esse parâmetro. Caso contrário, não precisaria

console.log(cachorro.printNome());
