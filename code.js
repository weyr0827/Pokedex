//Pokedex Search Code

let nationalDex = [
    {
        name: "Bulbasaur",
        number: "001",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto"
    },
    {
        name: "Ivysaur",
        number: "002",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto"
    },
    {
        name: "Venusaur",
        number: "003",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto"
    },
    {
        name: "Charmander",
        number: "004",
        type: ["Fire"],
        category: "Lizard",
        region: "Kanto"
    },
    {
        name: "Charmeleon",
        number: "005",
        type: ["Fire"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Charizard",
        number: "006",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Squirtle",
        number: "007",
        type: ["Water"],
        category: "Tiny Turtle",
        region: "Kanto"
    },
    {
        name: "Wartortle",
        number: "008",
        type: ["Water"],
        category: "Turtle",
        region: "Kanto"
    },
    {
        name: "Blastoise",
        number: "009",
        type: ["Water"],
        category: "Shellfish",
        region: "Kanto"
    },
    {
        name: "Caterpie",
        number: "010",
        type: ["Bug"],
        category: "Worm",
        region: "Kanto"
    },
    {
        name: "Metapod",
        number: "011",
        type: ["Bug"],
        category: "Cocoon",
        region: "Kanto"
    },
    {
        name: "Butterfree",
        number: "012",
        type: ["Bug", "Flying"],
        category: "Butterfly",
        region: "Kanto"
    },
    {
        name: "Weedle",
        number: "013",
        type: ["Bug", "Poison"],
        category: "Hairy Bug",
        region: "Kanto"
    },
    {
        name: "Kakuna",
        number: "014",
        type: ["Bug", "Poison"],
        category: "Cocoon",
        region: "Kanto"
    },
    {
        name: "Beedrill",
        number: "015",
        type: ["Bug", "Poison"],
        category: "Poison Bee",
        region: "Kanto"
    },
    {
        name: "Pidgey",
        number: "016",
        type: ["Normal", "Flying"],
        category: "Tiny Bird",
        region: "Kanto"
    },
    {
        name: "Pidgeotto",
        number: "017",
        type: ["Normal", "Flying"],
        category: "Bird",
        region: "Kanto"
    },
    {
        name: "Pidgeot",
        number: "018",
        type: ["Normal", "Flying"],
        category: "Bird",
        region: "Kanto"
    },
    {
        name: "Rattata",
        number: "019",
        type: ["Normal"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Raticate",
        number: "020",
        type: ["Normal"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Spearow",
        number: "021",
        type: ["Normal", "Flying"],
        category: "Tiny Bird",
        region: "Kanto"
    },
    {
        name: "Fearow",
        number: "022",
        type: ["Normal", "Flying"],
        category: "Beak",
        region: "Kanto"
    },
    {
        name: "Ekans",
        number: "023",
        type: ["Poison"],
        category: "Snake",
        region: "Kanto"
    },
    {
        name: "Arbok",
        number: "024",
        type: ["Poison"],
        category: "Cobra",
        region: "Kanto"
    },
    {
        name: "Pikachu",
        number: "025",
        type: ["Electric"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Raichu",
        number: "026",
        type: ["Electric"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Sandshrew",
        number: "027",
        type: ["Ground"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Sandslash",
        number: "028",
        type: ["Ground"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "NidoranF",
        number: "029",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidorina",
        number: "030",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidoqueen",
        number: "031",
        type: ["Poison", "Ground"],
        category: "Drill",
        region: "Kanto"
    },
    {
        name: "NidoranM",
        number: "032",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidorino",
        number: "033",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidoking",
        number: "034",
        type: ["Poison", "Ground"],
        category: "Drill",
        region: "Kanto"
    },
    {
        name: "Clefairy",
        number: "035",
        type: ["Fairy"],
        category: "Fairy",
        region: "Kanto"
    },
    {
        name: "Clefable",
        number: "036",
        type: ["Fairy"],
        category: "Fairy",
        region: "Kanto"
    },
    {
        name: "Vulpix",
        number: "037",
        type: ["Fire"],
        category: "Fox",
        region: "Kanto"
    },
    {
        name: "Ninetales",
        number: "038",
        type: ["Fire"],
        category: "Fox",
        region: "Kanto"
    },
    {
        name: "Jigglypuff",
        number: "039",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Kanto"
    },
    {
        name: "Wigglytuff",
        number: "040",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Kanto"
    },
    {
        name: "Zubat",
        number: "041",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Kanto"
    },
    {
        name: "Golbat",
        number: "042",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Kanto"
    },
    {
        name: "Oddish",
        number: "043",
        type: ["Grass", "Poison"],
        category: "Weed",
        region: "Kanto"
    },
    {
        name: "Gloom",
        number: "044",
        type: ["Grass", "Poison"],
        category: "Weed",
        region: "Kanto"
    },
    {
        name: "Vileplume",
        number: "045",
        type: ["Grass", "Poison"],
        category: "Flower",
        region: "Kanto"
    },
    {
        name: "Paras",
        number: "046",
        type: ["Bug", "Grass"],
        category: "Mushroom",
        region: "Kanto"
    },
    {
        name: "Parasect",
        number: "047",
        type: ["Bug", "Grass"],
        category: "Mushroom",
        region: "Kanto"
    },
    {
        name: "Venonat",
        number: "048",
        type: ["Bug", "Poison"],
        category: "Insect",
        region: "Kanto"
    },
    {
        name: "Venomoth",
        number: "049",
        type: ["Bug", "Poison"],
        category: "Poison Moth",
        region: "Kanto"
    },
    {
        name: "Diglett",
        number: "050",
        type: ["Ground"],
        category: "Mole",
        region: "Kanto"
    },
    {
        name: "Dugtrio",
        number: "051",
        type: ["Ground"],
        category: "Mole",
        region: "Kanto"
    },
    {
        name: "Meowth",
        number: "052",
        type: ["Normal"],
        category: "Scratch Cat",
        region: "Kanto"
    },
    {
        name: "Persian",
        number: "053",
        type: ["Normal"],
        category: "Classy Cat",
        region: "Kanto"
    },
    {
        name: "Psyduck",
        number: "054",
        type: ["Water"],
        category: "Duck",
        region: "Kanto"
    },
    {
        name: "Golduck",
        number: "055",
        type: ["Water"],
        category: "Duck",
        region: "Kanto"
    },
    {
        name: "Mankey",
        number: "056",
        type: ["Fighting"],
        category: "Pig Monkey",
        region: "Kanto"
    },
    {
        name: "Primeape",
        number: "057",
        type: ["Fighting"],
        category: "Pig Monkey",
        region: "Kanto"
    },
    {
        name: "Growlithe",
        number: "058",
        type: ["Fire"],
        category: "Puppy",
        region: "Kanto"
    },
    {
        name: "Arcanine",
        number: "059",
        type: ["Fire"],
        category: "Legendary",
        region: "Kanto"
    },
    {
        name: "Poliwag",
        number: "060",
        type: ["Water"],
        category: "Tadpole",
        region: "Kanto"
    },
    {
        name: "Poliwhirl",
        number: "061",
        type: ["Water"],
        category: "Tadpole",
        region: "Kanto"
    },
    {
        name: "Poliwrath",
        number: "062",
        type: ["Water", "Fighting"],
        category: "Tadpole",
        region: "Kanto"
    },
    {
        name: "Abra",
        number: "063",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto"
    },
    {
        name: "Kadabra",
        number: "064",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto"
    },
    {
        name: "Alakazam",
        number: "065",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto"
    },
    {
        name: "Machop",
        number: "066",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto"
    },
    {
        name: "Machoke",
        number: "067",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto"
    },
    {
        name: "Machamp",
        number: "068",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto"
    },
    {
        name: "Bellsprout",
        number: "069",
        type: ["Grass", "Poison"],
        category: "Flower",
        region: "Kanto"
    },
    {
        name: "Weepinbell",
        number: "070",
        type: ["Grass", "Poison"],
        category: "Flycatcher",
        region: "Kanto"
    },
    {
        name: "Victreebel",
        number: "071",
        type: ["Grass", "Poison"],
        category: "Flycatcher",
        region: "Kanto"
    },
    {
        name: "Tentacool",
        number: "072",
        type: ["Water", "Poison"],
        category: "Jellyfish",
        region: "Kanto"
    },
    {
        name: "Tentacruel",
        number: "073",
        type: ["Water", "Poison"],
        category: "Jellyfish",
        region: "Kanto"
    },
    {
        name: "Geodude",
        number: "074",
        type: ["Rock", "Ground"],
        category: "Rock",
        region: "Kanto"
    },
    {
        name: "Graveler",
        number: "075",
        type: ["Rock", "Ground"],
        category: "Rock",
        region: "Kanto"
    },
    {
        name: "Golem",
        number: "076",
        type: ["Rock", "Ground"],
        category: "Megaton",
        region: "Kanto"
    },
    {
        name: "Ponyta",
        number: "077",
        type: ["Fire"],
        category: "Fire Horse",
        region: "Kanto"
    },
    {
        name: "Rapidash",
        number: "078",
        type: ["Fire"],
        category: "Fire Horse",
        region: "Kanto"
    },
    {
        name: "Slowpoke",
        number: "079",
        type: ["Water", "Psychic"],
        category: "Dopey",
        region: "Kanto"
    },
    {
        name: "Slowbro",
        number: "080",
        type: ["Water", "Psychic"],
        category: "Hermit Crab",
        region: "Kanto"
    },
    {
        name: "Magnemite",
        number: "081",
        type: ["Electric", "Steel"],
        category: "Magnet",
        region: "Kanto"
    },
    {
        name: "Magneton",
        number: "082",
        type: ["Electric", "Steel"],
        category: "Magnet",
        region: "Kanto"
    },
    {
        name: "Farfetch'd",
        number: "083",
        type: ["Normal", "Flying"],
        category: "Wild Duck",
        region: "Kanto"
    },
    {
        name: "Doduo",
        number: "084",
        type: ["Normal", "Flying"],
        category: "Twin Bird",
        region: "Kanto"
    },
    {
        name: "Dodrio",
        number: "085",
        type: ["Normal", "Flying"],
        category: "Triple Bird",
        region: "Kanto"
    },
    {
        name: "Seel",
        number: "086",
        type: ["Water"],
        category: "Sea Lion",
        region: "Kanto"
    },
    {
        name: "Dewgong",
        number: "087",
        type: ["Water", "Ice"],
        category: "Sea Lion",
        region: "Kanto"
    },
    {
        name: "Grimer",
        number: "088",
        type: ["Poison"],
        category: "Sludge",
        region: "Kanto"
    },
    {
        name: "Muk",
        number: "089",
        type: ["Poison"],
        category: "Sludge",
        region: "Kanto"
    },
    {
        name: "Shellder",
        number: "090",
        type: ["Water"],
        category: "Bivalve",
        region: "Kanto"
    },
    {
        name: "Cloyster",
        number: "091",
        type: ["Water", "Ice"],
        category: "Bivalve",
        region: "Kanto"
    },
    {
        name: "Gastly",
        number: "092",
        type: ["Ghost", "Poison"],
        category: "Gas",
        region: "Kanto"
    },
    {
        name: "Haunter",
        number: "093",
        type: ["Ghost", "Poison"],
        category: "Gas",
        region: "Kanto"
    },
    {
        name: "Gengar",
        number: "094",
        type: ["Ghost", "Poison"],
        category: "Shadow",
        region: "Kanto"
    },
    {
        name: "Onix",
        number: "095",
        type: ["Rock", "Ground"],
        category: "Rock Snake",
        region: "Kanto"
    },
    {
        name: "Drowzee",
        number: "096",
        type: ["Psychic"],
        category: "Hypnosis",
        region: "Kanto"
    },
    {
        name: "Hypno",
        number: "097",
        type: ["Psychic"],
        category: "Hypnosis",
        region: "Kanto"
    },
    {
        name: "Krabby",
        number: "098",
        type: ["Water"],
        category: "River Crab",
        region: "Kanto"
    },
    {
        name: "Kingler",
        number: "099",
        type: ["Water"],
        category: "Pincer",
        region: "Kanto"
    },
    {
        name: "Voltorb",
        number: "100",
        type: ["Electric"],
        category: "Ball",
        region: "Kanto"
    },
    {
        name: "Electrode",
        number: "101",
        type: ["Electric"],
        category: "Ball",
        region: "Kanto"
    },
    {
        name: "Exeggcute",
        number: "102",
        type: ["Grass", "Psychic"],
        category: "Egg",
        region: "Kanto"
    },
    {
        name: "Exeggutor",
        number: "103",
        type: ["Grass", "Psychic"],
        category: "Coconut",
        region: "Kanto"
    },
    {
        name: "Cubone",
        number: "104",
        type: ["Ground"],
        category: "Lonely",
        region: "Kanto"
    },
    {
        name: "Marowak",
        number: "105",
        type: ["Ground"],
        category: "Bone Keeper",
        region: "Kanto"
    },
    {
        name: "Hitmonlee",
        number: "106",
        type: ["Fighting"],
        category: "Kicking",
        region: "Kanto"
    },
    {
        name: "Hitmonchan",
        number: "107",
        type: ["Fighting"],
        category: "Punching",
        region: "Kanto"
    },
    {
        name: "Lickitung",
        number: "108",
        type: ["Normal"],
        category: "Licking",
        region: "Kanto"
    },
    {
        name: "Koffing",
        number: "109",
        type: ["Poison"],
        category: "Poison Gas",
        region: "Kanto"
    },
    {
        name: "Weezing",
        number: "110",
        type: ["Poison"],
        category: "Poison Gas",
        region: "Kanto"
    },
    {
        name: "Rhyhorn",
        number: "111",
        type: ["Ground", "Rock"],
        category: "Spikes",
        region: "Kanto"
    },
    {
        name: "Rhydon",
        number: "112",
        type: ["Ground", "Rock"],
        category: "Drill",
        region: "Kanto"
    },
    {
        name: "Chansey",
        number: "113",
        type: ["Normal"],
        category: "Egg",
        region: "Kanto"
    },
    {
        name: "Tangela",
        number: "114",
        type: ["Grass"],
        category: "Vine",
        region: "Kanto"
    },
    {
        name: "Kangaskhan",
        number: "115",
        type: ["Normal"],
        category: "Parent",
        region: "Kanto"
    },
    {
        name: "Horsea",
        number: "116",
        type: ["Water"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Seadra",
        number: "117",
        type: ["Water"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Goldeen",
        number: "118",
        type: ["Water"],
        category: "Goldfish",
        region: "Kanto"
    },
    {
        name: "Seaking",
        number: "119",
        type: ["Water"],
        category: "Goldfish",
        region: "Kanto"
    },
    {
        name: "Staryu",
        number: "120",
        type: ["Water"],
        category: "Star Shape",
        region: "Kanto"
    },
    {
        name: "Starmie",
        number: "121",
        type: ["Water", "Psychic"],
        category: "Mysterious",
        region: "Kanto"
    },
    {
        name: "Mr. Mime",
        number: "122",
        type: ["Psychic", "Fairy"],
        category: "Barrier",
        region: "Kanto"
    },
    {
        name: "Scyther",
        number: "123",
        type: ["Bug", "Flying"],
        category: "Mantis",
        region: "Kanto"
    },
    {
        name: "Jynx",
        number: "124",
        type: ["Ice", "Psychic"],
        category: "Human Shape",
        region: "Kanto"
    },
    {
        name: "Electabuzz",
        number: "125",
        type: ["Electric"],
        category: "Electric",
        region: "Kanto"
    },
    {
        name: "Magmar",
        number: "126",
        type: ["Fire"],
        category: "Spitfire",
        region: "Kanto"
    },
    {
        name: "Pinsir",
        number: "127",
        type: ["Bug"],
        category: "Stag Beetle",
        region: "Kanto"
    },
    {
        name: "Tauros",
        number: "128",
        type: ["Normal"],
        category: "Wild Bull",
        region: "Kanto"
    },
    {
        name: "Magikarp",
        number: "129",
        type: ["Water"],
        category: "Fish",
        region: "Kanto"
    },
    {
        name: "Gyarados",
        number: "130",
        type: ["Water", "Flying"],
        category: "Atrocious",
        region: "Kanto"
    },
    {
        name: "Lapras",
        number: "131",
        type: ["Water", "Ice"],
        category: "Transport",
        region: "Kanto"
    },
    {
        name: "Ditto",
        number: "132",
        type: ["Normal"],
        category: "Transform",
        region: "Kanto"
    },
    {
        name: "Eevee",
        number: "133",
        type: ["Normal"],
        category: "Evolution",
        region: "Kanto"
    },
    {
        name: "Vaporeon",
        number: "134",
        type: ["Water"],
        category: "Bubble Jet",
        region: "Kanto"
    },
    {
        name: "Jolteon",
        number: "135",
        type: ["Electric"],
        category: "Lightning",
        region: "Kanto"
    },
    {
        name: "Flareon",
        number: "136",
        type: ["Fire"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Porygon",
        number: "137",
        type: ["Normal"],
        category: "Virtual",
        region: "Kanto"
    },
    {
        name: "Omanyte",
        number: "138",
        type: ["Rock", "Water"],
        category: "Spiral",
        region: "Kanto"
    },
    {
        name: "Omastar",
        number: "139",
        type: ["Rock", "Water"],
        category: "Spiral",
        region: "Kanto"
    },
    {
        name: "Kabuto",
        number: "140",
        type: ["Rock", "Water"],
        category: "Shellfish",
        region: "Kanto"
    },
    {
        name: "Kabutops",
        number: "141",
        type: ["Rock", "Water"],
        category: "Shellfish",
        region: "Kanto"
    },
    {
        name: "Aerodactyl",
        number: "142",
        type: ["Rock", "Flying"],
        category: "Fossil",
        region: "Kanto"
    },
    {
        name: "Snorlax",
        number: "143",
        type: ["Normal"],
        category: "Sleeping",
        region: "Kanto"
    },
    {
        name: "Articuno",
        number: "144",
        type: ["Ice", "Flying"],
        category: "Freeze",
        region: "Kanto"
    },
    {
        name: "Zapdos",
        number: "145",
        type: ["Electric", "Flying"],
        category: "Electric",
        region: "Kanto"
    },
    {
        name: "Moltres",
        number: "146",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Dratini",
        number: "147",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Dragonair",
        number: "148",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Dragonite",
        number: "149",
        type: ["Dragon", "Flying"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Mewtwo",
        number: "150",
        type: ["Psychic"],
        category: "Genetic",
        region: "Kanto"
    },
    {
        name: "Mew",
        number: "151",
        type: ["Psychic"],
        category: "New Species",
        region: "Kanto"
    }
]

let dexRender = (pokedex) => {
    let pokeball = document.getElementById("container")
    pokeball.innerHTML=""

    pokedex.forEach(pocketMonster => {
        let divVariable = document.createElement("div")
        divVariable.className = "pokemon"
        let pokemonName = document.createElement("h4")
        pokemonName.append(pocketMonster.name)
        // let movieImage = document.createElement("img")
        // movieImage.src = movieMovie.imageUrl
        let pokemonNumber = document.createElement("p")
        pokemonNumber.append("#", pocketMonster.number)
        let pokemonType = document.createElement("p")
        pokemonType.append("Type: " , pocketMonster.type)
        let pokemonCategory = document.createElement("p")
        pokemonCategory.append(pocketMonster.category , " Pokémon")
        let pokemonRegion = document.createElement("p")
        pokemonRegion.append("Region: " , pocketMonster.region)
        divVariable.append(pokemonName)
        // divVariable.append(movieImage)
        divVariable.append(pokemonNumber)
        divVariable.append(pokemonType)
        divVariable.append(pokemonCategory)
        divVariable.append(pokemonRegion)
        pokeball.append(divVariable)
    })
}
dexRender(nationalDex)

let search = document.getElementById("searchButton")
search.addEventListener("click", searchFilter)
function searchFilter(event){
    event.preventDefault()

let nameId = document.getElementById("name_input").value
let typeId = document.getElementById("type_input").value

let filterPokemon = nationalDex.filter(searching => searching.name.toLowerCase().indexOf(nameId.toLowerCase()) > -1 )
.filter(searching => String(searching.type).toLowerCase().indexOf(typeId.toLowerCase()) > -1 )

dexRender(filterPokemon)

}