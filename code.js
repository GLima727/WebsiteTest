
let POKEMON_LIMIT_ERROR_MSG = "Too many pokemons bruh, we're runnin a business ovah here have some sense"
let POKEMON_LIMIT = 6

class Player {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.numPokemons = 0
        this.pokemons = []
        this.bag = new Bag()

    }
    addPokemon(pokemon){
        
        try{
            if(this.numPokemons == POKEMON_LIMIT){ //checks if the pokemon limit has been reached
                throw tooManyPokemonsException
            }

            this.pokemons.push(pokemon) 
            this.numPokemons++

        }catch(pokemonLimitException){
            document.writeln(POKEMON_LIMIT_ERROR_MSG)
        }
    }

}

class Pokemon {
    constructor(name, type, level) {

        this.name = name
        this.type = type
        this.level = level
        this.xp = 0
    }

}

class Pikachu extends Pokemon{
    constructor(name, level){

        super(name, "Lightning", level)
        
    }
}

class Bag {
    constructor() {

        this.numItems = 0
        this.isFull = false
        this.items = []

    }

}

class Potion{
    constructor(quantity, tag){
        this.quantity = quantity
        this.tag = tag
    }
}

function gameStart() {
    playerStart()
}

function playerStart(){
    var name = window.prompt("Enter your name: ");
    var age = window.prompt("Enter your age: ");
    const player1 = new Player(name, age);
}


const pikachu = new Pikachu("hdwahd", 2323)
document.getElementById('grad1').innerHTML = "<p>" +  player1.name + "</p>";
document.write(pikachu.type)
gameStart()
