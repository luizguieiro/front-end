function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.returnAnimal = function(Animal){
        return Animal;
    }
}

function Animal(){
    this.especie = 'Cobra';
    this.raca = 'Mamba Negra';
}

var pessoa = new Pessoa('Felipe', 20);

var animal = new Animal();

animal.raca = 'Cascavel';

console.log(pessoa.returnAnimal(animal).raca);
console.log(pessoa.nome);
console.log(pessoa.idade);
