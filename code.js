
let POKEMON_LIMIT_ERROR_MSG = "Too many pokemons bruh, we're runnin a business ovah here have some sense"
let POKEMON_LIMIT = 6

class Player {
    constructor() {
        this.name = ""
        this.age = 0
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

}
function receivePlayerName(){
    gameStart();
    var playerName = document.getElementById("nameInput").value;
    if(playerName != ""){
        player.name = playerName;
        
        document.getElementById("menuText").innerHTML = "<p>Player Name: " + player.name + "</p>";

        document.getElementById("button1").style.display = "none"; /*deletes the buttons */
        document.getElementById("nameInput").style.display = "none";

        document.getElementById("gameText").innerHTML = "<l> Welcome <span style='color: #8d99ae;text-decoration:underline;font-weight:bold'>" 
                                                        + playerName +"</span>!<br/> Please choose your starter.<l/>"
    }
}
const player = new Player();

