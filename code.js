
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
    console.log(playerName.length)

    if(playerName.length > 10){

        document.getElementById("nameInputError").innerHTML = "<l> The name must have 10 characters or less.<l/>";
    }
    else if(playerName == "Joe" || playerName == "joe"){

        document.getElementById("nameInputError").innerHTML = "<l> Joe who?<l/>";
    }
    else if(playerName == "Joe Mamma" || playerName == "Joe mamma" || playerName == "joe Mamma" || playerName == "joe mamma"){

        document.getElementById("nameInputError").innerHTML = "<l> Joe Mamma who?<l/>";
    }

    else if(playerName != ""){
        player.name = playerName;
        
        document.getElementById("headerMenuText").innerHTML = "<l>Player Name: <span style='color: #8d99ae;font-size: 1.6vw'>" + player.name + "</l>";

        /*document.getElementById("button1").style.display = "none"; deletes the buttons 
        document.getElementById("nameInput").style.display = "none";*/
        document.getElementById("button1").style.animation = document.getElementById("nameInput").style.animation = "fadeOut 700ms forwards";
        document.getElementById("nameInputError").style.display = "none";

        document.getElementById("startMenu").innerHTML = "<l> Welcome <span style='color: #8d99ae;text-decoration:underline;font-weight:bold'>" 
                                                        + playerName +"</span>!<br/> Please choose your starter.<l/>"
    }
}
const player = new Player();

