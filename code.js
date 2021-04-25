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
    },
    {
        name: "Chikorita",
        number: "152",
        type: ["Grass"],
        category: "Leaf",
        region: "Johto"
    },
    {
        name: "Bayleef",
        number: "153",
        type: ["Grass"],
        category: "Leaf",
        region: "Johto"
    },
    {
        name: "Meganium",
        number: "154",
        type: ["Grass"],
        category: "Herb",
        region: "Johto"
    },
    {
        name: "Cyndaquil",
        number: "155",
        type: ["Fire"],
        category: "Fire Mouse",
        region: "Johto"
    },
    {
        name: "Quilava",
        number: "156",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto"
    },
    {
        name: "Typhlosion",
        number: "157",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto"
    },
    {
        name: "Totodile",
        number: "158",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto"
    },
    {
        name: "Croconaw",
        number: "159",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto"
    },
    {
        name: "Feraligatr",
        number: "160",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto"
    },
    {
        name: "Sentret",
        number: "161",
        type: ["Normal"],
        category: "Scout",
        region: "Johto"
    },
    {
        name: "Furret",
        number: "162",
        type: ["Normal"],
        category: "Long Body",
        region: "Johto"
    },
    {
        name: "Hoothoot",
        number: "163",
        type: ["Normal", "Flying"],
        category: "Owl",
        region: "Johto"
    },
    {
        name: "Noctowl",
        number: "164",
        type: ["Normal", "Flying"],
        category: "Owl",
        region: "Johto"
    },
    {
        name: "Ledyba",
        number: "165",
        type: ["Bug", "Flying"],
        category: "Five Star",
        region: "Johto"
    },
    {
        name: "Ledian",
        number: "166",
        type: ["Bug", "Flying"],
        category: "Five Star",
        region: "Johto"
    },
    {
        name: "Spinarak",
        number: "167",
        type: ["Bug", "Poison"],
        category: "String Spit",
        region: "Johto"
    },
    {
        name: "Ariados",
        number: "168",
        type: ["Bug", "Poison"],
        category: "Long Leg",
        region: "Johto"
    },
    {
        name: "Crobat",
        number: "169",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Johto"
    },
    {
        name: "Chinchou",
        number: "170",
        type: ["Water", "Electric"],
        category: "Angler",
        region: "Johto"
    },
    {
        name: "Lanturn",
        number: "171",
        type: ["Water", "Electric"],
        category: "Light",
        region: "Johto"
    },
    {
        name: "Pichu",
        number: "172",
        type: ["Electric"],
        category: "Tiny Mouse",
        region: "Johto"
    },
    {
        name: "Cleffa",
        number: "173",
        type: ["Fairy"],
        category: "Star Shape",
        region: "Johto"
    },
    {
        name: "Igglybuff",
        number: "174",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Johto"
    },
    {
        name: "Togepi",
        number: "175",
        type: ["Fairy"],
        category: "Spike Ball",
        region: "Johto"
    },
    {
        name: "Togetic",
        number: "176",
        type: ["Fairy", "Flying"],
        category: "Happiness",
        region: "Johto"
    },
    {
        name: "Natu",
        number: "177",
        type: ["Psychic", "Flying"],
        category: "Tiny Bird",
        region: "Johto"
    },
    {
        name: "Xatu",
        number: "178",
        type: ["Psychic", "Flying"],
        category: "Mystic",
        region: "Johto"
    },
    {
        name: "Mareep",
        number: "179",
        type: ["Electric"],
        category: "Wool",
        region: "Johto"
    },
    {
        name: "Flaaffy",
        number: "180",
        type: ["Electric"],
        category: "Wool",
        region: "Johto"
    },
    {
        name: "Ampharos",
        number: "181",
        type: ["Electric"],
        category: "Light",
        region: "Johto"
    },
    {
        name: "Bellossom",
        number: "182",
        type: ["Grass"],
        category: "Flower",
        region: "Johto"
    },
    {
        name: "Marill",
        number: "183",
        type: ["Water", "Fairy"],
        category: "Aqua Mouse",
        region: "Johto"
    },
    {
        name: "Azumarill",
        number: "184",
        type: ["Water", "Fairy"],
        category: "Aqua Rabbit",
        region: "Johto"
    },
    {
        name: "Sudowoodo",
        number: "185",
        type: ["Rock"],
        category: "Imitation",
        region: "Johto"
    },
    {
        name: "Politoed",
        number: "186",
        type: ["Water"],
        category: "Frog",
        region: "Johto"
    },
    {
        name: "Hoppip",
        number: "187",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto"
    },
    {
        name: "Skiploom",
        number: "188",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto"
    },
    {
        name: "Jumpluff",
        number: "189",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto"
    },
    {
        name: "Aipom",
        number: "190",
        type: ["Normal"],
        category: "Long Tail",
        region: "Johto"
    },
    {
        name: "Sunkern",
        number: "191",
        type: ["Grass"],
        category: "Seed",
        region: "Johto"
    },
    {
        name: "Sunflora",
        number: "192",
        type: ["Grass"],
        category: "Sun",
        region: "Johto"
    },
    {
        name: "Yanma",
        number: "193",
        type: ["Bug", "Flying"],
        category: "Clear Wing",
        region: "Johto"
    },
    {
        name: "Wooper",
        number: "194",
        type: ["Water", "Ground"],
        category: "Water Fish",
        region: "Johto"
    },
    {
        name: "Quagsire",
        number: "195",
        type: ["Water", "Ground"],
        category: "Water Fish",
        region: "Johto"
    },
    {
        name: "Espeon",
        number: "196",
        type: ["Psychic"],
        category: "Sun",
        region: "Johto"
    },
    {
        name: "Umbreon",
        number: "197",
        type: ["Dark"],
        category: "Moonlight",
        region: "Johto"
    },
    {
        name: "Murkrow",
        number: "198",
        type: ["Dark", "Flying"],
        category: "Darkness",
        region: "Johto"
    },
    {
        name: "Slowking",
        number: "199",
        type: ["Water", "Psychic"],
        category: "Royal",
        region: "Johto"
    },
    {
        name: "Misdreavus",
        number: "200",
        type: ["Ghost"],
        category: "Screech",
        region: "Johto"
    },
    {
        name: "Unown",
        number: "201",
        type: ["Psychic"],
        category: "Symbol",
        region: "Johto"
    },
    {
        name: "Wobbuffet",
        number: "202",
        type: ["Psychic"],
        category: "Patient",
        region: "Johto"
    },
    {
        name: "Girafarig",
        number: "203",
        type: ["Normal", "Psychic"],
        category: "Long Neck",
        region: "Johto"
    },
    {
        name: "Pineco",
        number: "204",
        type: ["Bug"],
        category: "Bagworm",
        region: "Johto"
    },
    {
        name: "Forretress",
        number: "205",
        type: ["Bug", "Steel"],
        category: "Bagworm",
        region: "Johto"
    },
    {
        name: "Dunsparce",
        number: "206",
        type: ["Normal"],
        category: "Land Snake",
        region: "Johto"
    },
    {
        name: "Gligar",
        number: "207",
        type: ["Ground", "Flying"],
        category: "Fly Scorpion",
        region: "Johto"
    },
    {
        name: "Steelix",
        number: "208",
        type: ["Steel", "Ground"],
        category: "Iron Snake",
        region: "Johto"
    },
    {
        name: "Snubbull",
        number: "209",
        type: ["Fairy"],
        category: "Fairy",
        region: "Johto"
    },
    {
        name: "Granbull",
        number: "210",
        type: ["Fairy"],
        category: "Fairy",
        region: "Johto"
    },
    {
        name: "Qwilfish",
        number: "211",
        type: ["Water", "Poison"],
        category: "Balloon",
        region: "Johto"
    },
    {
        name: "Scizor",
        number: "212",
        type: ["Bug", "Steel"],
        category: "Pincer",
        region: "Johto"
    },
    {
        name: "Shuckle",
        number: "213",
        type: ["Bug", "Rock"],
        category: "Mold",
        region: "Johto"
    },
    {
        name: "Heracross",
        number: "214",
        type: ["Bug", "Fighting"],
        category: "Single Horn",
        region: "Johto"
    },
    {
        name: "Sneasel",
        number: "215",
        type: ["Dark", "Ice"],
        category: "Sharp Claw",
        region: "Johto"
    },
    {
        name: "Teddiursa",
        number: "216",
        type: ["Normal"],
        category: "Little Bear",
        region: "Johto"
    },
    {
        name: "Ursaring",
        number: "217",
        type: ["Normal"],
        category: "Hibernator",
        region: "Johto"
    },
    {
        name: "Slugma",
        number: "218",
        type: ["Fire"],
        category: "Lava",
        region: "Johto"
    },
    {
        name: "Magcargo",
        number: "219",
        type: ["Fire", "Rock"],
        category: "Lava",
        region: "Johto"
    },
    {
        name: "Swinub",
        number: "220",
        type: ["Ice", "Ground"],
        category: "Pig",
        region: "Johto"
    },
    {
        name: "Piloswine",
        number: "221",
        type: ["Ice", "Ground"],
        category: "Swine",
        region: "Johto"
    },
    {
        name: "Corsola",
        number: "222",
        type: ["Water", "Rock"],
        category: "Coral",
        region: "Johto"
    },
    {
        name: "Remoraid",
        number: "223",
        type: ["Water"],
        category: "Jet",
        region: "Johto"
    },
    {
        name: "Octillery",
        number: "224",
        type: ["Water"],
        category: "Jet",
        region: "Johto"
    },
    {
        name: "Delibird",
        number: "225",
        type: ["Ice", "Flying"],
        category: "Delivery",
        region: "Johto"
    },
    {
        name: "Mantine",
        number: "226",
        type: ["Water", "Flying"],
        category: "Kite",
        region: "Johto"
    },
    {
        name: "Skarmory",
        number: "227",
        type: ["Steel", "Flying"],
        category: "Armor Bird",
        region: "Johto"
    },
    {
        name: "Houndour",
        number: "228",
        type: ["Dark", "Fire"],
        category: "Dark",
        region: "Johto"
    },
    {
        name: "Houndoom",
        number: "229",
        type: ["Dark", "Fire"],
        category: "Dark",
        region: "Johto"
    },
    {
        name: "Kingdra",
        number: "230",
        type: ["Water", "Dragon"],
        category: "Dragon",
        region: "Johto"
    },
    {
        name: "Phanpy",
        number: "231",
        type: ["Ground"],
        category: "Long Nose",
        region: "Johto"
    },
    {
        name: "Donphan",
        number: "232",
        type: ["Ground"],
        category: "Armor",
        region: "Johto"
    },
    {
        name: "Porygon2",
        number: "233",
        type: ["Normal"],
        category: "Virtual",
        region: "Johto"
    },
    {
        name: "Stantler",
        number: "234",
        type: ["Normal"],
        category: "Big Horn",
        region: "Johto"
    },
    {
        name: "Smeargle",
        number: "235",
        type: ["Normal"],
        category: "Painter",
        region: "Johto"
    },
    {
        name: "Tyrogue",
        number: "236",
        type: ["Fighting"],
        category: "Scuffle",
        region: "Johto"
    },
    {
        name: "Hitmontop",
        number: "237",
        type: ["Fighting"],
        category: "Handstand",
        region: "Johto"
    },
    {
        name: "Smoochum",
        number: "238",
        type: ["Ice", "Psychic"],
        category: "Kiss",
        region: "Johto"
    },
    {
        name: "Elekid",
        number: "239",
        type: ["Electric"],
        category: "Electric",
        region: "Johto"
    },
    {
        name: "Magby",
        number: "240",
        type: ["Fire"],
        category: "Live Coal",
        region: "Johto"
    },
    {
        name: "Miltank",
        number: "241",
        type: ["Normal"],
        category: "Milk Cow",
        region: "Johto"
    },
    {
        name: "Blissey",
        number: "242",
        type: ["Normal"],
        category: "Happiness",
        region: "Johto"
    },
    {
        name: "Raikou",
        number: "243",
        type: ["Electric"],
        category: "Thunder",
        region: "Johto"
    },
    {
        name: "Entei",
        number: "244",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto"
    },
    {
        name: "Suicune",
        number: "245",
        type: ["Water"],
        category: "Aurora",
        region: "Johto"
    },
    {
        name: "Larvitar",
        number: "246",
        type: ["Rock", "Ground"],
        category: "Rock Skin",
        region: "Johto"
    },
    {
        name: "Pupitar",
        number: "247",
        type: ["Rock", "Ground"],
        category: "Hard Shell",
        region: "Johto"
    },
    {
        name: "Tyranitar",
        number: "248",
        type: ["Rock", "Dark"],
        category: "Armor",
        region: "Johto"
    },
    {
        name: "Lugia",
        number: "249",
        type: ["Psychic", "Flying"],
        category: "Diving",
        region: "Johto"
    },
    {
        name: "Ho-Oh",
        number: "250",
        type: ["Fire", "Flying"],
        category: "Rainbow",
        region: "Johto"
    },
    {
        name: "Celebi",
        number: "251",
        type: ["Psychic", "Grass"],
        category: "Time Travel",
        region: "Johto"
    },
    {
        name: "Treecko",
        number: "252",
        type: ["Grass"],
        category: "Wood Gecko",
        region: "Hoenn"
    },
    {
        name: "Grovyle",
        number: "253",
        type: ["Grass"],
        category: "Wood Gecko",
        region: "Hoenn"
    },
    {
        name: "Sceptile",
        number: "254",
        type: ["Grass"],
        category: "Forest",
        region: "Hoenn"
    },
    {
        name: "Torchic",
        number: "255",
        type: ["Fire"],
        category: "Chick",
        region: "Hoenn"
    },
    {
        name: "Combusken",
        number: "256",
        type: ["Fire", "Fighting"],
        category: "Young Fowl",
        region: "Hoenn"
    },
    {
        name: "Blaziken",
        number: "257",
        type: ["Fire", "Fighting"],
        category: "Blaze",
        region: "Hoenn"
    },
    {
        name: "Mudkip",
        number: "258",
        type: ["Water"],
        category: "Mud Fish",
        region: "Hoenn"
    },
    {
        name: "Marshtomp",
        number: "259",
        type: ["Water", "Ground"],
        category: "Mud Fish",
        region: "Hoenn"
    },
    {
        name: "Swampert",
        number: "260",
        type: ["Water", "Ground"],
        category: "Mud Fish",
        region: "Hoenn"
    },
    {
        name: "Poochyena",
        number: "261",
        type: ["Dark"],
        category: "Bite",
        region: "Hoenn"
    },
    {
        name: "Mightyena",
        number: "262",
        type: ["Dark"],
        category: "Bite",
        region: "Hoenn"
    },
    {
        name: "Zigzagoon",
        number: "263",
        type: ["Normal"],
        category: "Tiny Raccoon",
        region: "Hoenn"
    },
    {
        name: "Linoone",
        number: "264",
        type: ["Normal"],
        category: "Rushing",
        region: "Hoenn"
    },
    {
        name: "Wurmple",
        number: "265",
        type: ["Bug"],
        category: "Worm",
        region: "Hoenn"
    },
    {
        name: "Silcoon",
        number: "266",
        type: ["Bug"],
        category: "Cocoon",
        region: "Hoenn"
    },
    {
        name: "Beautifly",
        number: "267",
        type: ["Bug", "Flying"],
        category: "Butterfly",
        region: "Hoenn"
    },
    {
        name: "Cascoon",
        number: "268",
        type: ["Bug"],
        category: "Cocoon",
        region: "Hoenn"
    },
    {
        name: "Dustox",
        number: "269",
        type: ["Bug", "Poison"],
        category: "Poison Moth",
        region: "Hoenn"
    },
    {
        name: "Lotad",
        number: "270",
        type: ["Water", "Grass"],
        category: "Water Weed",
        region: "Hoenn"
    },
    {
        name: "Lombre",
        number: "271",
        type: ["Water", "Grass"],
        category: "Jolly",
        region: "Hoenn"
    },
    {
        name: "Ludicolo",
        number: "272",
        type: ["Water", "Grass"],
        category: "Carefree",
        region: "Hoenn"
    },
    {
        name: "Seedot",
        number: "273",
        type: ["Grass"],
        category: "Acorn",
        region: "Hoenn"
    },
    {
        name: "Nuzleaf",
        number: "274",
        type: ["Grass", "Dark"],
        category: "Wily",
        region: "Hoenn"
    },
    {
        name: "Shiftry",
        number: "275",
        type: ["Grass", "Dark"],
        category: "Wicked",
        region: "Hoenn"
    },
    {
        name: "Taillow",
        number: "276",
        type: ["Normal", "Flying"],
        category: "Tiny Swallow",
        region: "Hoenn"
    },
    {
        name: "Swellow",
        number: "277",
        type: ["Normal", "Flying"],
        category: "Swallow",
        region: "Hoenn"
    },
    {
        name: "Wingull",
        number: "278",
        type: ["Water", "Flying"],
        category: "Seagull",
        region: "Hoenn"
    },
    {
        name: "Pelipper",
        number: "279",
        type: ["Water", "Flying"],
        category: "Water Bird",
        region: "Hoenn"
    },
    {
        name: "Ralts",
        number: "280",
        type: ["Psychic", "Fairy"],
        category: "Feeling",
        region: "Hoenn"
    },
    {
        name: "Kirlia",
        number: "281",
        type: ["Psychic", "Fairy"],
        category: "Emotion",
        region: "Hoenn"
    },
    {
        name: "Gardevoir",
        number: "282",
        type: ["Psychic", "Fairy"],
        category: "Embrace",
        region: "Hoenn"
    },
    {
        name: "Surskit",
        number: "283",
        type: ["Bug", "Water"],
        category: "Pond Skater",
        region: "Hoenn"
    },
    {
        name: "Masquerain",
        number: "284",
        type: ["Bug", "Flying"],
        category: "Eyeball",
        region: "Hoenn"
    },
    {
        name: "Shroomish",
        number: "285",
        type: ["Grass"],
        category: "Mushroom",
        region: "Hoenn"
    },
    {
        name: "Breloom",
        number: "286",
        type: ["Grass", "Fighting"],
        category: "Mushroom",
        region: "Hoenn"
    },
    {
        name: "Slakoth",
        number: "287",
        type: ["Normal"],
        category: "Slacker",
        region: "Hoenn"
    },
    {
        name: "Vigoroth",
        number: "288",
        type: ["Normal"],
        category: "Wild Monkey",
        region: "Hoenn"
    },
    {
        name: "Slaking",
        number: "289",
        type: ["Normal"],
        category: "Lazy",
        region: "Hoenn"
    },
    {
        name: "Nincada",
        number: "290",
        type: ["Bug", "Ground"],
        category: "Trainee",
        region: "Hoenn"
    },
    {
        name: "Ninjask",
        number: "291",
        type: ["Bug", "Flying"],
        category: "Ninja",
        region: "Hoenn"
    },
    {
        name: "Shedinja",
        number: "292",
        type: ["Bug", "Ghost"],
        category: "Shed",
        region: "Hoenn"
    },
    {
        name: "Whismur",
        number: "293",
        type: ["Normal"],
        category: "Whisper",
        region: "Hoenn"
    },
    {
        name: "Loudred",
        number: "294",
        type: ["Normal"],
        category: "Big Voice",
        region: "Hoenn"
    },
    {
        name: "Exploud",
        number: "295",
        type: ["Normal"],
        category: "Loud Noise",
        region: "Hoenn"
    },
    {
        name: "Makuhita",
        number: "296",
        type: ["Fighting"],
        category: "Guts",
        region: "Hoenn"
    },
    {
        name: "Hariyama",
        number: "297",
        type: ["Fighting"],
        category: "Arm Thrust",
        region: "Hoenn"
    },
    {
        name: "Azurill",
        number: "298",
        type: ["Normal", "Fairy"],
        category: "Polka Dot",
        region: "Hoenn"
    },
    {
        name: "Nosepass",
        number: "299",
        type: ["Rock"],
        category: "Compass",
        region: "Hoenn"
    },
    {
        name: "Skitty",
        number: "300",
        type: ["Normal"],
        category: "Kitten",
        region: "Hoenn"
    },
    {
        name: "Delcatty",
        number: "301",
        type: ["Normal"],
        category: "Prim",
        region: "Hoenn"
    },
    {
        name: "Sableye",
        number: "302",
        type: ["Dark", "Ghost"],
        category: "Darkness",
        region: "Hoenn"
    },
    {
        name: "Mawile",
        number: "303",
        type: ["Steel", "Fairy"],
        category: "Deceiver",
        region: "Hoenn"
    },
    {
        name: "Aron",
        number: "304",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn"
    },
    {
        name: "Lairon",
        number: "305",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn"
    },
    {
        name: "Aggron",
        number: "306",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn"
    },
    {
        name: "Meditie",
        number: "307",
        type: ["Fighting", "Psychic"],
        category: "Meditate",
        region: "Hoenn"
    },
    {
        name: "Medicham",
        number: "308",
        type: ["Fighting", "Psychic"],
        category: "Meditate",
        region: "Hoenn"
    },
    {
        name: "Electrike",
        number: "309",
        type: ["Electric"],
        category: "Lightning",
        region: "Hoenn"
    },
    {
        name: "Manectric",
        number: "310",
        type: ["Electric"],
        category: "Discharge",
        region: "Hoenn"
    },
    {
        name: "Plusle",
        number: "311",
        type: ["Electric"],
        category: "Cheering",
        region: "Hoenn"
    },
    {
        name: "Minun",
        number: "312",
        type: ["Electric"],
        category: "Cheering",
        region: "Hoenn"
    },
    {
        name: "Volbeat",
        number: "313",
        type: ["Bug"],
        category: "Firefly",
        region: "Hoenn"
    },
    {
        name: "Illumise",
        number: "314",
        type: ["Bug"],
        category: "Firefly",
        region: "Hoenn"
    },
    {
        name: "Roselia",
        number: "315",
        type: ["Grass", "Poison"],
        category: "Thorn",
        region: "Hoenn"
    },
    {
        name: "Gulpin",
        number: "316",
        type: ["Poison"],
        category: "Stomach",
        region: "Hoenn"
    },
    {
        name: "Swalot",
        number: "317",
        type: ["Poison"],
        category: "Poison Bag",
        region: "Hoenn"
    },
    {
        name: "Carvanha",
        number: "318",
        type: ["Water", "Dark"],
        category: "Savage",
        region: "Hoenn"
    },
    {
        name: "Sharpedo",
        number: "319",
        type: ["Water", "Dark"],
        category: "Brutal",
        region: "Hoenn"
    },
    {
        name: "Wailmer",
        number: "320",
        type: ["Water"],
        category: "Ball Whale",
        region: "Hoenn"
    },
    {
        name: "Wailord",
        number: "321",
        type: ["Water"],
        category: "Float Whale",
        region: "Hoenn"
    },
    {
        name: "Numel",
        number: "322",
        type: ["Fire", "Ground"],
        category: "Numb",
        region: "Hoenn"
    },
    {
        name: "Camerupt",
        number: "323",
        type: ["Fire", "Ground"],
        category: "Eruption",
        region: "Hoenn"
    },
    {
        name: "Torkoal",
        number: "324",
        type: ["Fire"],
        category: "Coal",
        region: "Hoenn"
    },
    {
        name: "Spoink",
        number: "325",
        type: ["Psychic"],
        category: "Bounce",
        region: "Hoenn"
    },
    {
        name: "Grumpig",
        number: "326",
        type: ["Psychic"],
        category: "Manipulate",
        region: "Hoenn"
    },
    {
        name: "Spinda",
        number: "327",
        type: ["Normal"],
        category: "Spot Panda",
        region: "Hoenn"
    },
    {
        name: "Trapinch",
        number: "328",
        type: ["Ground"],
        category: "Ant Pit",
        region: "Hoenn"
    },
    {
        name: "Vibrava",
        number: "329",
        type: ["Ground", "Dragon"],
        category: "Vibration",
        region: "Hoenn"
    },
    {
        name: "Flygon",
        number: "330",
        type: ["Ground", "Dragon"],
        category: "Mystic",
        region: "Hoenn"
    },
    {
        name: "Cacnea",
        number: "331",
        type: ["Grass"],
        category: "Cactus",
        region: "Hoenn"
    },
    {
        name: "Cacturne",
        number: "332",
        type: ["Grass", "Dark"],
        category: "Scarecrow",
        region: "Hoenn"
    },
    {
        name: "Swablu",
        number: "333",
        type: ["Normal", "Flying"],
        category: "Cotton Bird",
        region: "Hoenn"
    },
    {
        name: "Altaria",
        number: "334",
        type: ["Dragon", "Flying"],
        category: "Humming",
        region: "Hoenn"
    },
    {
        name: "Zangoose",
        number: "335",
        type: ["Normal"],
        category: "Cat Ferret",
        region: "Hoenn"
    },
    {
        name: "Seviper",
        number: "336",
        type: ["Poison"],
        category: "Fang Snake",
        region: "Hoenn"
    },
    {
        name: "Lunatone",
        number: "337",
        type: ["Rock", "Psychic"],
        category: "Meteorite",
        region: "Hoenn"
    },
    {
        name: "Solrock",
        number: "338",
        type: ["Rock", "Psychic"],
        category: "Meteorite",
        region: "Hoenn"
    },
    {
        name: "Barboach",
        number: "339",
        type: ["Water", "Ground"],
        category: "Whiskers",
        region: "Hoenn"
    },
    {
        name: "Whiscash",
        number: "340",
        type: ["Water", "Ground"],
        category: "Whiskers",
        region: "Hoenn"
    },
    {
        name: "Corphish",
        number: "341",
        type: ["Water"],
        category: "Ruffian",
        region: "Hoenn"
    },
    {
        name: "Crawdaunt",
        number: "342",
        type: ["Water", "Dark"],
        category: "Rogue",
        region: "Hoenn"
    },
    {
        name: "Baltoy",
        number: "343",
        type: ["Ground", "Psychic"],
        category: "Clay Doll",
        region: "Hoenn"
    },
    {
        name: "Claydol",
        number: "344",
        type: ["Ground", "Psychic"],
        category: "Clay Doll",
        region: "Hoenn"
    },
    {
        name: "Lileep",
        number: "345",
        type: ["Rock", "Grass"],
        category: "Sea Lily",
        region: "Hoenn"
    },
    {
        name: "Cradily",
        number: "346",
        type: ["Rock", "Grass"],
        category: "Barnacle",
        region: "Hoenn"
    },
    {
        name: "Anorith",
        number: "347",
        type: ["Rock", "Bug"],
        category: "Old Shrimp",
        region: "Hoenn"
    },
    {
        name: "Armaldo",
        number: "348",
        type: ["Rock", "Bug"],
        category: "Plate",
        region: "Hoenn"
    },
    {
        name: "Feebas",
        number: "349",
        type: ["Water"],
        category: "Fish",
        region: "Hoenn"
    },
    {
        name: "Milotic",
        number: "350",
        type: ["Water"],
        category: "Tender",
        region: "Hoenn"
    },
    {
        name: "Castforrm",
        number: "351",
        type: ["Normal"],
        category: "Weather",
        region: "Hoenn"
    },
    {
        name: "Kecleon",
        number: "352",
        type: ["Normal"],
        category: "Color Swap",
        region: "Hoenn"
    },
    {
        name: "Shuppet",
        number: "353",
        type: ["Ghost"],
        category: "Puppet",
        region: "Hoenn"
    },
    {
        name: "Banette",
        number: "354",
        type: ["Ghost"],
        category: "Marionette",
        region: "Hoenn"
    },
    {
        name: "Duskull",
        number: "355",
        type: ["Ghost"],
        category: "Requiem",
        region: "Hoenn"
    },
    {
        name: "Dusclops",
        number: "356",
        type: ["Ghost"],
        category: "Beckon",
        region: "Hoenn"
    },
    {
        name: "Tropius",
        number: "357",
        type: ["Grass", "Flying"],
        category: "Fruit",
        region: "Hoenn"
    },
    {
        name: "Chimecho",
        number: "358",
        type: ["Psychic"],
        category: "Wind Chime",
        region: "Hoenn"
    },
    {
        name: "Absol",
        number: "359",
        type: ["Dark"],
        category: "Disaster",
        region: "Hoenn"
    },
    {
        name: "Wynaut",
        number: "360",
        type: ["Psychic"],
        category: "Bright",
        region: "Hoenn"
    },
    {
        name: "Snorunt",
        number: "361",
        type: ["Ice"],
        category: "Snow Hat",
        region: "Hoenn"
    },
    {
        name: "Glalie",
        number: "362",
        type: ["Ice"],
        category: "Face",
        region: "Hoenn"
    },
    {
        name: "Spheal",
        number: "363",
        type: ["Ice", "Water"],
        category: "Clap",
        region: "Hoenn"
    },
    {
        name: "Sealeo",
        number: "364",
        type: ["Ice", "Water"],
        category: "Ball Roll",
        region: "Hoenn"
    },
    {
        name: "Walrein",
        number: "365",
        type: ["Ice", "Water"],
        category: "Ice Break",
        region: "Hoenn"
    },
    {
        name: "Clamperl",
        number: "366",
        type: ["Water"],
        category: "Bivalve",
        region: "Hoenn"
    },
    {
        name: "Huntail",
        number: "367",
        type: ["Water"],
        category: "Deep Sea",
        region: "Hoenn"
    },
    {
        name: "Gorebyss",
        number: "368",
        type: ["Water"],
        category: "South Sea",
        region: "Hoenn"
    },
    {
        name: "Relicanth",
        number: "369",
        type: ["Water", "Rock"],
        category: "Longevity",
        region: "Hoenn"
    },
    {
        name: "Luvdisc",
        number: "370",
        type: ["Water"],
        category: "Rendezvous",
        region: "Hoenn"
    },
    {
        name: "Bagon",
        number: "371",
        type: ["Dragon"],
        category: "Rock Head",
        region: "Hoenn"
    },
    {
        name: "Shelgon",
        number: "372",
        type: ["Dragon"],
        category: "Endurance",
        region: "Hoenn"
    },
    {
        name: "Salamence",
        number: "373",
        type: ["Dragon", "Flying"],
        category: "Dragon",
        region: "Hoenn"
    },
    {
        name: "Beldum",
        number: "374",
        type: ["Steel", "Psychic"],
        category: "Iron Ball",
        region: "Hoenn"
    },
    {
        name: "Metang",
        number: "375",
        type: ["Steel", "Psychic"],
        category: "Iron Claw",
        region: "Hoenn"
    },
    {
        name: "Metagross",
        number: "376",
        type: ["Steel", "Psychic"],
        category: "Iron Leg",
        region: "Hoenn"
    },
    {
        name: "Regirock",
        number: "377",
        type: ["Rock"],
        category: "Rock Peak",
        region: "Hoenn"
    },
    {
        name: "Regice",
        number: "378",
        type: ["Ice"],
        category: "Iceberg",
        region: "Hoenn"
    },
    {
        name: "Registeel",
        number: "379",
        type: ["Steel"],
        category: "Iron",
        region: "Hoenn"
    },
    {
        name: "Latias",
        number: "380",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn"
    },
    {
        name: "Latios",
        number: "381",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn"
    },
    {
        name: "Kyogre",
        number: "382",
        type: ["Water"],
        category: "Sea Basin",
        region: "Hoenn"
    },
    {
        name: "Groudon",
        number: "383",
        type: ["Ground"],
        category: "Continent",
        region: "Hoenn"
    },
    {
        name: "Rayquaza",
        number: "384",
        type: ["Dragon", "Flying"],
        category: "Sky High",
        region: "Hoenn"
    },
    {
        name: "Jirachi",
        number: "385",
        type: ["Steel", "Psychic"],
        category: "Wish",
        region: "Hoenn"
    },
    {
        name: "Deoxys",
        number: "386",
        type: ["Psychic"],
        category: "DNA",
        region: "Hoenn"
    },
    {
        name: "Turtwig",
        number: "387",
        type: ["Grass"],
        category: "Tiny Leaf",
        region: "Sinnoh"
    },
    {
        name: "Grotle",
        number: "388",
        type: ["Grass"],
        category: "Grove",
        region: "Sinnoh"
    },
    {
        name: "Torterra",
        number: "389",
        type: ["Grass", "Ground"],
        category: "Continent",
        region: "Sinnoh"
    },
    {
        name: "Chimchar",
        number: "390",
        type: ["Fire"],
        category: "Chimp",
        region: "Sinnoh"
    },
    {
        name: "Monferno",
        number: "391",
        type: ["Fire", "Fighting"],
        category: "Playful",
        region: "Sinnoh"
    },
    {
        name: "Infernape",
        number: "392",
        type: ["Fire", "Fighting"],
        category: "Flame",
        region: "Sinnoh"
    },
    {
        name: "Piplup",
        number: "393",
        type: ["Water"],
        category: "Penguin",
        region: "Sinnoh"
    },
    {
        name: "Prinplup",
        number: "394",
        type: ["Water"],
        category: "Penguin",
        region: "Sinnoh"
    },
    {
        name: "Empoleon",
        number: "395",
        type: ["Water", "Steel"],
        category: "Emperor",
        region: "Sinnoh"
    },
    {
        name: "Starly",
        number: "396",
        type: ["Normal", "Flying"],
        category: "Starling",
        region: "Sinnoh"
    },
    {
        name: "Staravia",
        number: "397",
        type: ["Normal", "Flying"],
        category: "Starling",
        region: "Sinnoh"
    },
    {
        name: "Staraptor",
        number: "398",
        type: ["Normal", "Flying"],
        category: "Predator",
        region: "Sinnoh"
    },
    {
        name: "Bidoof",
        number: "399",
        type: ["Normal"],
        category: "Plump Mouse",
        region: "Sinnoh"
    },
    {
        name: "Bibarel",
        number: "400",
        type: ["Normal", "Water"],
        category: "Beaver",
        region: "Sinnoh"
    },
    {
        name: "Kricketot",
        number: "401",
        type: ["Bug"],
        category: "Cricket",
        region: "Sinnoh"
    },
    {
        name: "Kricketune",
        number: "402",
        type: ["Bug"],
        category: "Cricket",
        region: "Sinnoh"
    },
    {
        name: "Shinx",
        number: "403",
        type: ["Electric"],
        category: "Flash",
        region: "Sinnoh"
    },
    {
        name: "Luxio",
        number: "404",
        type: ["Electric"],
        category: "Spark",
        region: "Sinnoh"
    },
    {
        name: "Luxray",
        number: "405",
        type: ["Electric"],
        category: "Gleam Eyes",
        region: "Sinnoh"
    },
    {
        name: "Budew",
        number: "406",
        type: ["Grass", "Poison"],
        category: "Bud",
        region: "Sinnoh"
    },
    {
        name: "Roserade",
        number: "407",
        type: ["Grass", "Poison"],
        category: "Bouquet",
        region: "Sinnoh"
    },
    {
        name: "Cranidos",
        number: "408",
        type: ["Rock"],
        category: "Head Butt",
        region: "Sinnoh"
    },
    {
        name: "Rampardos",
        number: "409",
        type: ["Rock"],
        category: "Head Butt",
        region: "Sinnoh"
    },
    {
        name: "Shieldon",
        number: "410",
        type: ["Rock", "Steel"],
        category: "Shield",
        region: "Sinnoh"
    },
    {
        name: "Bastiodon",
        number: "411",
        type: ["Rock", "Steel"],
        category: "Shield",
        region: "Sinnoh"
    },
    {
        name: "Burmy",
        number: "412",
        type: ["Bug"],
        category: "Bagworm",
        region: "Sinnoh"
    },
    {
        name: "Wormadam",
        number: "413",
        type: ["Bug", "Grass"],
        category: "Bagworm",
        region: "Sinnoh"
    },
    {
        name: "Mothim",
        number: "414",
        type: ["Bug", "Flying"],
        category: "Moth",
        region: "Sinnoh"
    },
    {
        name: "Combee",
        number: "415",
        type: ["Bug", "Flying"],
        category: "Tiny Bee",
        region: "Sinnoh"
    },
    {
        name: "Vespiquen",
        number: "416",
        type: ["Bug", "Flying"],
        category: "Beehive",
        region: "Sinnoh"
    },
    {
        name: "Pachirisu",
        number: "417",
        type: ["Electric"],
        category: "EleSquirrel",
        region: "Sinnoh"
    },
    {
        name: "Buizel",
        number: "418",
        type: ["Water"],
        category: "Sea Weasel",
        region: "Sinnoh"
    },
    {
        name: "Floatzel",
        number: "419",
        type: ["Water"],
        category: "Sea Weasel",
        region: "Sinnoh"
    },
    {
        name: "Cherubi",
        number: "420",
        type: ["Grass"],
        category: "Cherry",
        region: "Sinnoh"
    },
    {
        name: "Cherrim",
        number: "421",
        type: ["Grass"],
        category: "Blossom",
        region: "Sinnoh"
    },
    {
        name: "Shellos",
        number: "422",
        type: ["Water"],
        category: "Sea Slug",
        region: "Sinnoh"
    },
    {
        name: "Gastrodon",
        number: "423",
        type: ["Water", "Ground"],
        category: "Sea Slug",
        region: "Sinnoh"
    },
    {
        name: "Ambipom",
        number: "424",
        type: ["Normal"],
        category: "Long Tail",
        region: "Sinnoh"
    },
    {
        name: "Drifloon",
        number: "425",
        type: ["Ghost", "Flying"],
        category: "Balloon",
        region: "Sinnoh"
    },
    {
        name: "Drifblim",
        number: "426",
        type: ["Ghost", "Flying"],
        category: "Blimp",
        region: "Sinnoh"
    },
    {
        name: "Buneary",
        number: "427",
        type: ["Normal"],
        category: "Rabbit",
        region: "Sinnoh"
    },
    {
        name: "Lopunny",
        number: "428",
        type: ["Normal"],
        category: "Rabbit",
        region: "Sinnoh"
    },
    {
        name: "Mismagius",
        number: "429",
        type: ["Ghost"],
        category: "Magical",
        region: "Sinnoh"
    },
    {
        name: "Honchkrow",
        number: "430",
        type: ["Dark", "Flying"],
        category: "Big Boss",
        region: "Sinnoh"
    },
    {
        name: "Glameow",
        number: "431",
        type: ["Normal"],
        category: "Catty",
        region: "Sinnoh"
    },
    {
        name: "Purugly",
        number: "432",
        type: ["Normal"],
        category: "Tiger Cat",
        region: "Sinnoh"
    },
    {
        name: "Chingling",
        number: "433",
        type: ["Psychic"],
        category: "Bell",
        region: "Sinnoh"
    },
    {
        name: "Stunky",
        number: "434",
        type: ["Poison", "Dark"],
        category: "Skunk",
        region: "Sinnoh"
    },
    {
        name: "Skuntank",
        number: "435",
        type: ["Poison", "Dark"],
        category: "Skunk",
        region: "Sinnoh"
    },
    {
        name: "Bronzor",
        number: "436",
        type: ["Steel", "Psychic"],
        category: "Bronze",
        region: "Sinnoh"
    },
    {
        name: "Bronzong",
        number: "437",
        type: ["Steel", "Psychic"],
        category: "Bronze Bell",
        region: "Sinnoh"
    },
    {
        name: "Bonsly",
        number: "438",
        type: ["Rock"],
        category: "Bonsai",
        region: "Sinnoh"
    },
    {
        name: "Mime Jr.",
        number: "439",
        type: ["Psychic", "Fairy"],
        category: "Mime",
        region: "Sinnoh"
    },
    {
        name: "Happiny",
        number: "440",
        type: ["Normal"],
        category: "Playhouse",
        region: "Sinnoh"
    },
    {
        name: "Chatot",
        number: "441",
        type: ["Normal", "Flying"],
        category: "Music Note",
        region: "Sinnoh"
    },
    {
        name: "Spiritomb",
        number: "442",
        type: ["Ghost", "Dark"],
        category: "Forbidden",
        region: "Sinnoh"
    },
    {
        name: "Gible",
        number: "443",
        type: ["Dragon", "Ground"],
        category: "Land Shark",
        region: "Sinnoh"
    },
    {
        name: "Gabite",
        number: "444",
        type: ["Dragon", "Ground"],
        category: "Cave",
        region: "Sinnoh"
    },
    {
        name: "Garchomp",
        number: "445",
        type: ["Dragon", "Ground"],
        category: "Mach",
        region: "Sinnoh"
    },
    {
        name: "Munchlax",
        number: "446",
        type: ["Normal"],
        category: "Big Eater",
        region: "Sinnoh"
    },
    {
        name: "Riolu",
        number: "447",
        type: ["Fighting"],
        category: "Emanation",
        region: "Sinnoh"
    },
    {
        name: "Lucario",
        number: "448",
        type: ["Fighting", "Steel"],
        category: "Aura",
        region: "Sinnoh"
    },
    {
        name: "Hippopotas",
        number: "449",
        type: ["Ground"],
        category: "Hippo",
        region: "Sinnoh"
    },
    {
        name: "Hippowdon",
        number: "450",
        type: ["Ground"],
        category: "Heavyweight",
        region: "Sinnoh"
    },
    {
        name: "Skorupi",
        number: "451",
        type: ["Poison", "Bug"],
        category: "Scorpion",
        region: "Sinnoh"
    },
    {
        name: "Drapion",
        number: "452",
        type: ["Poison", "Dark"],
        category: "Ogre Scorpion",
        region: "Sinnoh"
    },
    {
        name: "Croagunk",
        number: "453",
        type: ["Poison", "Fighting"],
        category: "Toxic Mouth",
        region: "Sinnoh"
    },
    {
        name: "Toxicroak",
        number: "454",
        type: ["Poison", "Fighting"],
        category: "Toxic Mouth",
        region: "Sinnoh"
    },
    {
        name: "Carnivine",
        number: "455",
        type: ["Grass"],
        category: "Bug Catcher",
        region: "Sinnoh"
    },
    {
        name: "Finneon",
        number: "456",
        type: ["Water"],
        category: "Wing Fish",
        region: "Sinnoh"
    },
    {
        name: "Lumineon",
        number: "457",
        type: ["Water"],
        category: "Neon",
        region: "Sinnoh"
    },
    {
        name: "Mantyke",
        number: "458",
        type: ["Water", "Flying"],
        category: "Kite",
        region: "Sinnoh"
    },
    {
        name: "Snover",
        number: "459",
        type: ["Grass", "Ice"],
        category: "Frost Tree",
        region: "Sinnoh"
    },
    {
        name: "Abomasnow",
        number: "460",
        type: ["Grass", "Ice"],
        category: "Frost Tree",
        region: "Sinnoh"
    },
    {
        name: "Weavile",
        number: "461",
        type: ["Dark", "Ice"],
        category: "Sharp Claw",
        region: "Sinnoh"
    },
    {
        name: "Magnezone",
        number: "462",
        type: ["Electric", "Steel"],
        category: "Magnet Area",
        region: "Sinnoh"
    },
    {
        name: "Lickilicky",
        number: "463",
        type: ["Normal"],
        category: "Licking",
        region: "Sinnoh"
    },
    {
        name: "Rhyperior",
        number: "464",
        type: ["Ground", "Rock"],
        category: "Drill",
        region: "Sinnoh"
    },
    {
        name: "Tangrowth",
        number: "465",
        type: ["Grass"],
        category: "Vine",
        region: "Sinnoh"
    },
    {
        name: "Electivire",
        number: "466",
        type: ["Electric"],
        category: "Thunderbolt",
        region: "Sinnoh"
    },
    {
        name: "Magmortar",
        number: "467",
        type: ["Fire"],
        category: "Blast",
        region: "Sinnoh"
    },
    {
        name: "Togekiss",
        number: "468",
        type: ["Fairy", "Flying"],
        category: "Jubilee",
        region: "Sinnoh"
    },
    {
        name: "Yanmega",
        number: "469",
        type: ["Bug", "Flying"],
        category: "Ogre Darner",
        region: "Sinnoh"
    },
    {
        name: "Leafeon",
        number: "470",
        type: ["Grass"],
        category: "Verdant",
        region: "Sinnoh"
    },
    {
        name: "Glaceon",
        number: "471",
        type: ["Ice"],
        category: "Fresh Snow",
        region: "Sinnoh"
    },
    {
        name: "Gliscor",
        number: "472",
        type: ["Ground", "Flying"],
        category: "Fang Scorpion",
        region: "Sinnoh"
    },
    {
        name: "Mamoswine",
        number: "473",
        type: ["Ice", "Ground"],
        category: "Twin Tusk",
        region: "Sinnoh"
    },
    {
        name: "Porygon-Z",
        number: "474",
        type: ["Normal"],
        category: "Virtual",
        region: "Sinnoh"
    },
    {
        name: "Gallade",
        number: "475",
        type: ["Psychic", "Fighting"],
        category: "Blade",
        region: "Sinnoh"
    },
    {
        name: "Probopass",
        number: "476",
        type: ["Rock", "Steel"],
        category: "Compass",
        region: "Sinnoh"
    },
    {
        name: "Dusknoir",
        number: "477",
        type: ["Ghost"],
        category: "Gripper",
        region: "Sinnoh"
    },
    {
        name: "Froslass",
        number: "478",
        type: ["Ice", "Ghost"],
        category: "Snow Land",
        region: "Sinnoh"
    },
    {
        name: "Rotom",
        number: "479",
        type: ["Electric", "Ghost"],
        category: "Plasma",
        region: "Sinnoh"
    },
    {
        name: "Uxie",
        number: "480",
        type: ["Psychic"],
        category: "Knowledge",
        region: "Sinnoh"
    },
    {
        name: "Mesprit",
        number: "481",
        type: ["Psychic"],
        category: "Emotion",
        region: "Sinnoh"
    },
    {
        name: "Azelf",
        number: "482",
        type: ["Psychic"],
        category: "Willpower",
        region: "Sinnoh"
    },
    {
        name: "Dialga",
        number: "483",
        type: ["Steel", "Dragon"],
        category: "Temporal",
        region: "Sinnoh"
    },
    {
        name: "Palkia",
        number: "484",
        type: ["Water", "Dragon"],
        category: "Spatial",
        region: "Sinnoh"
    },
    {
        name: "Heatran",
        number: "485",
        type: ["Fire", "Steel"],
        category: "Lava Dome",
        region: "Sinnoh"
    },
    {
        name: "Regigigas",
        number: "486",
        type: ["Normal"],
        category: "Colossal",
        region: "Sinnoh"
    },
    {
        name: "Giratina",
        number: "487",
        type: ["Ghost", "Dragon"],
        category: "Renegade",
        region: "Sinnoh"
    },
    {
        name: "Cresselia",
        number: "488",
        type: ["Psychic"],
        category: "Lunar",
        region: "Sinnoh"
    },
    {
        name: "Phione",
        number: "489",
        type: ["Water"],
        category: "Sea Drifter",
        region: "Sinnoh"
    },
    {
        name: "Manaphy",
        number: "490",
        type: ["Water"],
        category: "Seafaring",
        region: "Sinnoh"
    },
    {
        name: "Darkrai",
        number: "491",
        type: ["Dark"],
        category: "Pitch-Black",
        region: "Sinnoh"
    },
    {
        name: "Shaymin",
        number: "492",
        type: ["Grass"],
        category: "Gratitude",
        region: "Sinnoh"
    },
    {
        name: "Arceus",
        number: "493",
        type: ["Normal"],
        category: "Alpha",
        region: "Sinnoh"
    },
    {
        name: "Victini",
        number: "494",
        type: ["Psychic", "Fire"],
        category: "Victory",
        region: "Unova"
    },
    {
        name: "Snivy",
        number: "495",
        type: ["Grass"],
        category: "Grass Snake",
        region: "Unova"
    },
    {
        name: "Servine",
        number: "496",
        type: ["Grass"],
        category: "Grass Snake",
        region: "Unova"
    },
    {
        name: "Serperior",
        number: "497",
        type: ["Grass"],
        category: "Regal",
        region: "Unova"
    },
    {
        name: "Tepig",
        number: "498",
        type: ["Fire"],
        category: "Fire Pig",
        region: "Unova"
    },
    {
        name: "Pignite",
        number: "499",
        type: ["Fire", "Fighting"],
        category: "Fire Pig",
        region: "Unova"
    },
    {
        name: "Emboar",
        number: "500",
        type: ["Fire", "Fighting"],
        category: "Mega Fire Pig",
        region: "Unova"
    },
    {
        name: "Oshawott",
        number: "501",
        type: ["Water"],
        category: "Sea Otter",
        region: "Unova"
    },
    {
        name: "Dewott",
        number: "502",
        type: ["Water"],
        category: "Discipline",
        region: "Unova"
    },
    {
        name: "Samurott",
        number: "503",
        type: ["Water"],
        category: "Formidable",
        region: "Unova"
    },
    {
        name: "Patrat",
        number: "504",
        type: ["Normal"],
        category: "Scout",
        region: "Unova"
    },
    {
        name: "Watchog",
        number: "505",
        type: ["Normal"],
        category: "Lookout",
        region: "Unova"
    },
    {
        name: "Lillipup",
        number: "506",
        type: ["Normal"],
        category: "Puppy",
        region: "Unova"
    },
    {
        name: "Herdier",
        number: "507",
        type: ["Normal"],
        category: "Loyal Dog",
        region: "Unova"
    },
    {
        name: "Stoutland",
        number: "508",
        type: ["Normal"],
        category: "Big-Hearted",
        region: "Unova"
    },
    {
        name: "Purrloin",
        number: "509",
        type: ["Dark"],
        category: "Devious",
        region: "Unova"
    },
    {
        name: "Liepard",
        number: "510",
        type: ["Dark"],
        category: "Cruel",
        region: "Unova"
    },
    {
        name: "Pansage",
        number: "511",
        type: ["Grass"],
        category: "Grass Monkey",
        region: "Unova"
    },
    {
        name: "Simisage",
        number: "512",
        type: ["Grass"],
        category: "Thorn Monkey",
        region: "Unova"
    },
    {
        name: "Pansear",
        number: "513",
        type: ["Fire"],
        category: "High Temp",
        region: "Unova"
    },
    {
        name: "Simisear",
        number: "514",
        type: ["Fire"],
        category: "Ember",
        region: "Unova"
    },
    {
        name: "Panpour",
        number: "515",
        type: ["Water"],
        category: "Spray",
        region: "Unova"
    },
    {
        name: "Simipour",
        number: "516",
        type: ["Water"],
        category: "Geyser",
        region: "Unova"
    },
    {
        name: "Munna",
        number: "517",
        type: ["Psychic"],
        category: "Dream Eater",
        region: "Unova"
    },
    {
        name: "Musharna",
        number: "518",
        type: ["Psychic"],
        category: "Drowsing",
        region: "Unova"
    },
    {
        name: "Pidove",
        number: "519",
        type: ["Normal", "Flying"],
        category: "Tiny Pigeon",
        region: "Unova"
    },
    {
        name: "Tranquill",
        number: "520",
        type: ["Normal", "Flying"],
        category: "Wild Pigeon",
        region: "Unova"
    },
    {
        name: "Unfezant",
        number: "521",
        type: ["Normal", "Flying"],
        category: "Proud",
        region: "Unova"
    },
    {
        name: "Blitzle",
        number: "522",
        type: ["Electric"],
        category: "Electrified",
        region: "Unova"
    },
    {
        name: "Zebstrika",
        number: "523",
        type: ["Electric"],
        category: "Thunderbolt",
        region: "Unova"
    },
    {
        name: "Roggenrola",
        number: "524",
        type: ["Rock"],
        category: "Mantle",
        region: "Unova"
    },
    {
        name: "Boldore",
        number: "524",
        type: ["Rock"],
        category: "Ore",
        region: "Unova"
    },
    {
        name: "Gigalith",
        number: "526",
        type: ["Rock"],
        category: "Compressed",
        region: "Unova"
    },
    {
        name: "Woobat",
        number: "527",
        type: ["Psychic", "Flying"],
        category: "Bat",
        region: "Unova"
    },
    {
        name: "Swoobat",
        number: "528",
        type: ["Psychic", "Flying"],
        category: "Courting",
        region: "Unova"
    },
    {
        name: "Drilbur",
        number: "529",
        type: ["Ground"],
        category: "Mole",
        region: "Unova"
    },
    {
        name: "Excadrill",
        number: "530",
        type: ["Ground", "Steel"],
        category: "Subterrene",
        region: "Unova"
    },
    {
        name: "Audino",
        number: "531",
        type: ["Normal"],
        category: "Hearing",
        region: "Unova"
    },
    {
        name: "Timburr",
        number: "532",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova"
    },
    {
        name: "Gurdurr",
        number: "533",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova"
    },
    {
        name: "Conkeldurr",
        number: "534",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova"
    },
    {
        name: "Tympole",
        number: "535",
        type: ["Water"],
        category: "Tadpole",
        region: "Unova"
    },
    {
        name: "Palpitoad",
        number: "536",
        type: ["Water", "Ground"],
        category: "Vibration",
        region: "Unova"
    },
    {
        name: "Seismitoad",
        number: "537",
        type: ["Water", "Ground"],
        category: "Tadpole",
        region: "Unova"
    },
    {
        name: "Throh",
        number: "538",
        type: ["Fighting"],
        category: "Judo",
        region: "Unova"
    },
    {
        name: "Sawk",
        number: "539",
        type: ["Fighting"],
        category: "Karate",
        region: "Unova"
    },
    {
        name: "Sewaddle",
        number: "540",
        type: ["Bug", "Grass"],
        category: "Sewing",
        region: "Unova"
    },
    {
        name: "Swadloon",
        number: "541",
        type: ["Bug", "Grass"],
        category: "Leaf-Wrapped",
        region: "Unova"
    },
    {
        name: "Leavanny",
        number: "542",
        type: ["Bug", "Grass"],
        category: "Nurturing",
        region: "Unova"
    },
    {
        name: "Venipede",
        number: "543",
        type: ["Bug", "Poison"],
        category: "Centipede",
        region: "Unova"
    },
    {
        name: "Whirlipede",
        number: "544",
        type: ["Bug", "Poison"],
        category: "Curlipede",
        region: "Unova"
    },
    {
        name: "Scolipede",
        number: "545",
        type: ["Bug", "Poison"],
        category: "Megapede",
        region: "Unova"
    },
    {
        name: "Cottonee",
        number: "546",
        type: ["Grass", "Fairy"],
        category: "Cotton Puff",
        region: "Unova"
    },
    {
        name: "Whimsicott",
        number: "547",
        type: ["Grass", "Fairy"],
        category: "Windveiled",
        region: "Unova"
    },
    {
        name: "Petilil",
        number: "548",
        type: ["Grass"],
        category: "Bulb",
        region: "Unova"
    },
    {
        name: "Lilligant",
        number: "549",
        type: ["Grass"],
        category: "Flowering",
        region: "Unova"
    },
    {
        name: "Basculin",
        number: "550",
        type: ["Water"],
        category: "Hostile",
        region: "Unova"
    },
    {
        name: "Sandile",
        number: "551",
        type: ["Ground", "Dark"],
        category: "Desert Croc",
        region: "Unova"
    },
    {
        name: "Krokorok",
        number: "552",
        type: ["Ground", "Dark"],
        category: "Desert Croc",
        region: "Unova"
    },
    {
        name: "Krookodile",
        number: "553",
        type: ["Ground", "Dark"],
        category: "Intimidation",
        region: "Unova"
    },
    {
        name: "Darumaka",
        number: "554",
        type: ["Fire"],
        category: "Zen Charm",
        region: "Unova"
    },
    {
        name: "Darmanitan",
        number: "555",
        type: ["Fire"],
        category: "Blazing",
        region: "Unova"
    },
    {
        name: "Maractus",
        number: "556",
        type: ["Grass"],
        category: "Cactus",
        region: "Unova"
    },
    {
        name: "Dwebble",
        number: "557",
        type: ["Bug", "Rock"],
        category: "Rock Inn",
        region: "Unova"
    },
    {
        name: "Crustle",
        number: "558",
        type: ["Bug", "Rock"],
        category: "Stone Home",
        region: "Unova"
    },
    {
        name: "Scraggy",
        number: "559",
        type: ["Dark", "Fighting"],
        category: "Shedding",
        region: "Unova"
    },
    {
        name: "Scrafty",
        number: "560",
        type: ["Dark", "Fighting"],
        category: "Hoodlum",
        region: "Unova"
    },
    {
        name: "Sigilyph",
        number: "561",
        type: ["Psychic", "Flying"],
        category: "Avianoid",
        region: "Unova"
    },
    {
        name: "Yamask",
        number: "562",
        type: ["Ghost"],
        category: "Spirit",
        region: "Unova"
    },
    {
        name: "Cofagrigus",
        number: "563",
        type: ["Ghost"],
        category: "Coffin",
        region: "Unova"
    },
    {
        name: "Tirtouga",
        number: "564",
        type: ["Water", "Rock"],
        category: "Prototurtle",
        region: "Unova"
    },
    {
        name: "Carracosta",
        number: "565",
        type: ["Water", "Rock"],
        category: "Prototurtle",
        region: "Unova"
    },
    {
        name: "Archen",
        number: "566",
        type: ["Rock", "Flying"],
        category: "First Bird",
        region: "Unova"
    },
    {
        name: "Archeops",
        number: "567",
        type: ["Rock", "Flying"],
        category: "First Bird",
        region: "Unova"
    },
    {
        name: "Trubbish",
        number: "568",
        type: ["Poison"],
        category: "Trash Bag",
        region: "Unova"
    },
    {
        name: "Garbodor",
        number: "569",
        type: ["Poison"],
        category: "Trash Heap",
        region: "Unova"
    },
    {
        name: "Zorua",
        number: "570",
        type: ["Dark"],
        category: "Tricky Fox",
        region: "Unova"
    },
    {
        name: "Zoroark",
        number: "571",
        type: ["Dark"],
        category: "Illusion Fox",
        region: "Unova"
    },
    {
        name: "Minccino",
        number: "572",
        type: ["Normal"],
        category: "Chinchilla",
        region: "Unova"
    },
    {
        name: "Cinccino",
        number: "573",
        type: ["Normal"],
        category: "Scarf",
        region: "Unova"
    },
    {
        name: "Gothita",
        number: "574",
        type: ["Psychic"],
        category: "Fixation",
        region: "Unova"
    },
    {
        name: "Gothorita",
        number: "575",
        type: ["Psychic"],
        category: "Manipulate",
        region: "Unova"
    },
    {
        name: "Gothitelle",
        number: "576",
        type: ["Psychic"],
        category: "Astral Body",
        region: "Unova"
    },
    {
        name: "Solosis",
        number: "577",
        type: ["Psychic"],
        category: "Cell",
        region: "Unova"
    },
    {
        name: "Duosion",
        number: "578",
        type: ["Psychic"],
        category: "Mitosis",
        region: "Unova"
    },
    {
        name: "Reuniclus",
        number: "579",
        type: ["Psychic"],
        category: "Multiplying",
        region: "Unova"
    },
    {
        name: "Ducklett",
        number: "580",
        type: ["Water", "Flying"],
        category: "Water Bird",
        region: "Unova"
    },
    {
        name: "Swanna",
        number: "581",
        type: ["Water", "Flying"],
        category: "White Bird",
        region: "Unova"
    },
    {
        name: "Vanillite",
        number: "582",
        type: ["Ice"],
        category: "Fresh Snow",
        region: "Unova"
    },
    {
        name: "Vanillish",
        number: "583",
        type: ["Ice"],
        category: "Icy Snow",
        region: "Unova"
    },
    {
        name: "Vanilluxe",
        number: "584",
        type: ["Ice"],
        category: "Snowstorm",
        region: "Unova"
    },
    {
        name: "Deerling",
        number: "585",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova"
    },
    {
        name: "Sawsbuck",
        number: "586",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova"
    },
    {
        name: "Emolga",
        number: "587",
        type: ["Electric", "Flying"],
        category: "Sky Squirrel",
        region: "Unova"
    },
    {
        name: "Karrablast",
        number: "588",
        type: ["Bug"],
        category: "Clamping",
        region: "Unova"
    },
    {
        name: "Escavalier",
        number: "589",
        type: ["Bug", "Steel"],
        category: "Cavalry",
        region: "Unova"
    },
    {
        name: "Foongus",
        number: "590",
        type: ["Grass", "Poison"],
        category: "Mushroom",
        region: "Unova"
    },
    {
        name: "Amoonguss",
        number: "591",
        type: ["Grass", "Poison"],
        category: "Mushroom",
        region: "Unova"
    },
    {
        name: "Frillish",
        number: "592",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova"
    },
    {
        name: "Jellicent",
        number: "593",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova"
    },
    {
        name: "Alomomola",
        number: "594",
        type: ["Water"],
        category: "Floating",
        region: "Unova"
    },
    {
        name: "Joltik",
        number: "595",
        type: ["Bug", "Electric"],
        category: "Attaching",
        region: "Unova"
    },
    {
        name: "Galvantula",
        number: "596",
        type: ["Bug", "Electric"],
        category: "EleSpider",
        region: "Unova"
    },
    {
        name: "Ferroseed",
        number: "597",
        type: ["Grass", "Steel"],
        category: "Thorn Seed",
        region: "Unova"
    },
    {
        name: "Ferrothorn",
        number: "598",
        type: ["Grass", "Steel"],
        category: "Thorn Pod",
        region: "Unova"
    },
    {
        name: "Klink",
        number: "599",
        type: ["Steel"],
        category: "Gear",
        region: "Unova"
    },
    {
        name: "Klang",
        number: "600",
        type: ["Steel"],
        category: "Gear",
        region: "Unova"
    },
    {
        name: "Klinklang",
        number: "601",
        type: ["Steel"],
        category: "Gear",
        region: "Unova"
    },
    {
        name: "Tynamo",
        number: "602",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova"
    },
    {
        name: "Eelektrik",
        number: "603",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova"
    },
    {
        name: "Eelektross",
        number: "604",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova"
    },
    {
        name: "Elgyem",
        number: "605",
        type: ["Psychic"],
        category: "Cerebral",
        region: "Unova"
    },
    {
        name: "Beheeyem",
        number: "606",
        type: ["Psychic"],
        category: "Cerebral",
        region: "Unova"
    },
    {
        name: "Litwick",
        number: "607",
        type: ["Ghost", "Fire"],
        category: "Candle",
        region: "Unova"
    },
    {
        name: "Lampent",
        number: "608",
        type: ["Ghost", "Fire"],
        category: "Lamp",
        region: "Unova"
    },
    {
        name: "Chandelure",
        number: "609",
        type: ["Ghost", "Fire"],
        category: "Luring",
        region: "Unova"
    },
    {
        name: "Axew",
        number: "610",
        type: ["Dragon"],
        category: "Tusk",
        region: "Unova"
    },
    {
        name: "Fraxure",
        number: "611",
        type: ["Dragon"],
        category: "Axe Jaw",
        region: "Unova"
    },
    {
        name: "Haxorus",
        number: "612",
        type: ["Dragon"],
        category: "Axe Jaw",
        region: "Unova"
    },
    {
        name: "Cubchoo",
        number: "613",
        type: ["Ice"],
        category: "Chill",
        region: "Unova"
    },
    {
        name: "Beartic",
        number: "614",
        type: ["Ice"],
        category: "Freezing",
        region: "Unova"
    },
    {
        name: "Cryogonal",
        number: "615",
        type: ["Ice"],
        category: "Crystallizing",
        region: "Unova"
    },
    {
        name: "Shelmet",
        number: "616",
        type: ["Bug"],
        category: "Snail",
        region: "Unova"
    },
    {
        name: "Accelgor",
        number: "617",
        type: ["Bug"],
        category: "Shell Out",
        region: "Unova"
    },
    {
        name: "Stunfisk",
        number: "618",
        type: ["Ground", "Electric"],
        category: "Trap",
        region: "Unova"
    },
    {
        name: "Mienfoo",
        number: "619",
        type: ["Fighting"],
        category: "Martial Arts",
        region: "Unova"
    },
    {
        name: "Mienshao",
        number: "620",
        type: ["Fighting"],
        category: "Martial Arts",
        region: "Unova"
    },
    {
        name: "Druddigon",
        number: "621",
        type: ["Dragon"],
        category: "Cave",
        region: "Unova"
    },
    {
        name: "Golett",
        number: "622",
        type: ["Ground", "Ghost"],
        category: "Automaton",
        region: "Unova"
    },
    {
        name: "Golurk",
        number: "623",
        type: ["Ground", "Ghost"],
        category: "Automaton",
        region: "Unova"
    },
    {
        name: "Pawniard",
        number: "624",
        type: ["Dark", "Steel"],
        category: "Sharp Blade",
        region: "Unova"
    },
    {
        name: "Bisharp",
        number: "625",
        type: ["Dark", "Steel"],
        category: "Sword Blade",
        region: "Unova"
    },
    {
        name: "Bouffalant",
        number: "626",
        type: ["Normal"],
        category: "Bash Buffalo",
        region: "Unova"
    },
    {
        name: "Rufflet",
        number: "627",
        type: ["Normal", "Flying"],
        category: "Eaglet",
        region: "Unova"
    },
    {
        name: "Braviary",
        number: "628",
        type: ["Normal", "Flying"],
        category: "Valiant",
        region: "Unova"
    },
    {
        name: "Vullaby",
        number: "629",
        type: ["Dark", "Flying"],
        category: "Diapered",
        region: "Unova"
    },
    {
        name: "Mandibuzz",
        number: "630",
        type: ["Dark", "Flying"],
        category: "Bone Vulture",
        region: "Unova"
    },
    {
        name: "Heatmor",
        number: "631",
        type: ["Fire"],
        category: "Anteater",
        region: "Unova"
    },
    {
        name: "Durant",
        number: "632",
        type: ["Bug", "Steel"],
        category: "Iron Ant",
        region: "Unova"
    },
    {
        name: "Deino",
        number: "633",
        type: ["Dark", "Dragon"],
        category: "Irate",
        region: "Unova"
    },
    {
        name: "Zweilous",
        number: "634",
        type: ["Dark", "Dragon"],
        category: "Hostile",
        region: "Unova"
    },
    {
        name: "Hydreigon",
        number: "635",
        type: ["Dark", "Dragon"],
        category: "Brutal",
        region: "Unova"
    },
    {
        name: "Larvesta",
        number: "636",
        type: ["Bug", "Fire"],
        category: "Torch",
        region: "Unova"
    },
    {
        name: "Volcarona",
        number: "637",
        type: ["Bug", "Fire"],
        category: "Sun",
        region: "Unova"
    },
    {
        name: "Cobalion",
        number: "638",
        type: ["Steel", "Fighting"],
        category: "Iron Will",
        region: "Unova"
    },
    {
        name: "Terrakion",
        number: "639",
        type: ["Rock", "Fighting"],
        category: "Cavern",
        region: "Unova"
    },
    {
        name: "Virizion",
        number: "640",
        type: ["Grass", "Fighting"],
        category: "Grassland",
        region: "Unova"
    },
    {
        name: "Tornadus",
        number: "641",
        type: ["Flying"],
        category: "Cyclone",
        region: "Unova"
    },
    {
        name: "Thundurus",
        number: "642",
        type: ["Electric", "Flying"],
        category: "Bolt Strike",
        region: "Unova"
    },
    {
        name: "Reshiram",
        number: "643",
        type: ["Dragon", "Fire"],
        category: "Vast White",
        region: "Unova"
    },
    {
        name: "Zekrom",
        number: "644",
        type: ["Dragon", "Electric"],
        category: "Deep Black",
        region: "Unova"
    },
    {
        name: "Landorus",
        number: "645",
        type: ["Ground", "Flying"],
        category: "Abundance",
        region: "Unova"
    },
    {
        name: "Kyurem",
        number: "646",
        type: ["Dragon", "Ice"],
        category: "Boundary",
        region: "Unova"
    },
    {
        name: "Keldeo",
        number: "647",
        type: ["Water", "Fighting"],
        category: "Colt",
        region: "Unova"
    },
    {
        name: "Meloetta",
        number: "648",
        type: ["Normal", "Psychic"],
        category: "Melody",
        region: "Unova"
    },
    {
        name: "Genesect",
        number: "649",
        type: ["Bug", "Steel"],
        category: "Paleozoic",
        region: "Unova"
    },
    {
        name: "Chespin",
        number: "650",
        type: ["Grass"],
        category: "Spiny Nut",
        region: "Kalos"
    },
    {
        name: "Quilladin",
        number: "651",
        type: ["Grass"],
        category: "Spiny Armor",
        region: "Kalos"
    },
    {
        name: "Chesnaught",
        number: "652",
        type: ["Grass", "Fighting"],
        category: "Spiny Armor",
        region: "Kalos"
    },
    {
        name: "Fennekin",
        number: "653",
        type: ["Fire"],
        category: "Fox",
        region: "Kalos"
    },
    {
        name: "Braixen",
        number: "654",
        type: ["Fire"],
        category: "Fox",
        region: "Kalos"
    },
    {
        name: "Delphox",
        number: "655",
        type: ["Fire", "Psychic"],
        category: "Fox",
        region: "Kalos"
    },
    {
        name: "Froakie",
        number: "656",
        type: ["Water"],
        category: "Bubble Frog",
        region: "Kalos"
    },
    {
        name: "Frogadier",
        number: "657",
        type: ["Water"],
        category: "Bubble Frog",
        region: "Kalos"
    },
    {
        name: "Greninja",
        number: "658",
        type: ["Water", "Dark"],
        category: "Ninja",
        region: "Kalos"
    },
    {
        name: "Bunnelby",
        number: "659",
        type: ["Normal"],
        category: "Digging",
        region: "Kalos"
    },
    {
        name: "Diggersby",
        number: "660",
        type: ["Normal", "Ground"],
        category: "Digging",
        region: "Kalos"
    },
    {
        name: "Fletchling",
        number: "661",
        type: ["Normal", "Flying"],
        category: "Tiny Robin",
        region: "Kalos"
    },
    {
        name: "Fletchinder",
        number: "662",
        type: ["Fire", "Flying"],
        category: "Ember",
        region: "Kalos"
    },
    {
        name: "Talonflame",
        number: "663",
        type: ["Fire", "Flying"],
        category: "Scorching",
        region: "Kalos"
    },
    {
        name: "Scatterbug",
        number: "664",
        type: ["Bug"],
        category: "Scatterdust",
        region: "Kalos"
    },
    {
        name: "Spewpa",
        number: "665",
        type: ["Bug"],
        category: "Scatterdust",
        region: "Kalos"
    },
    {
        name: "Vivillon",
        number: "666",
        type: ["Bug", "Flying"],
        category: "Scale",
        region: "Kalos"
    },
    {
        name: "Litleo",
        number: "667",
        type: ["Fire", "Normal"],
        category: "Lion Cub",
        region: "Kalos"
    },
    {
        name: "Pyroar",
        number: "668",
        type: ["Fire", "Normal"],
        category: "Royal",
        region: "Kalos"
    },
    {
        name: "Flabébé",
        number: "669",
        type: ["Fairy"],
        category: "Single Bloom",
        region: "Kalos"
    },
    {
        name: "Floette",
        number: "670",
        type: ["Fairy"],
        category: "Single Bloom",
        region: "Kalos"
    },
    {
        name: "Florges",
        number: "671",
        type: ["Fairy"],
        category: "Garden",
        region: "Kalos"
    },
    {
        name: "Skiddo",
        number: "672",
        type: ["Grass"],
        category: "Mount",
        region: "Kalos"
    },
    {
        name: "Gogoat",
        number: "673",
        type: ["Grass"],
        category: "Mount",
        region: "Kalos"
    },
    {
        name: "Pancham",
        number: "674",
        type: ["Fighting"],
        category: "Playful",
        region: "Kalos"
    },
    {
        name: "Pangoro",
        number: "675",
        type: ["Fighting", "Dark"],
        category: "Daunting",
        region: "Kalos"
    },
    {
        name: "Furfrou",
        number: "676",
        type: ["Poodle"],
        category: "Normal",
        region: "Kalos"
    },
    {
        name: "Espurr",
        number: "677",
        type: ["Psychic"],
        category: "Restraint",
        region: "Kalos"
    },
    {
        name: "Meowstic",
        number: "678",
        type: ["Psychic"],
        category: "Constraint",
        region: "Kalos"
    },
    {
        name: "Honedge",
        number: "679",
        type: ["Steel", "Ghost"],
        category: "Sword",
        region: "Kalos"
    },
    {
        name: "Doublade",
        number: "680",
        type: ["Steel", "Ghost"],
        category: "Sword",
        region: "Kalos"
    },
    {
        name: "Aegislash",
        number: "681",
        type: ["Steel", "Ghost"],
        category: "Royal Sword",
        region: "Kalos"
    },
    {
        name: "Spritzee",
        number: "682",
        type: ["Fairy"],
        category: "Perfume",
        region: "Kalos"
    },
    {
        name: "Aromatisse",
        number: "683",
        type: ["Fairy"],
        category: "Fragrance",
        region: "Kalos"
    },
    {
        name: "Swirlix",
        number: "684",
        type: ["Fairy"],
        category: "Cotton Candy",
        region: "Kalos"
    },
    {
        name: "Slurpuff",
        number: "685",
        type: ["Fairy"],
        category: "Meringue",
        region: "Kalos"
    },
    {
        name: "Inkay",
        number: "686",
        type: ["Dark", "Psychic"],
        category: "Revolving",
        region: "Kalos"
    },
    {
        name: "Malamar",
        number: "687",
        type: ["Dark", "Psychic"],
        category: "Overturning",
        region: "Kalos"
    },
    {
        name: "Binacle",
        number: "688",
        type: ["Rock", "Water"],
        category: "Two-Handed",
        region: "Kalos"
    },
    {
        name: "Barbaracle",
        number: "689",
        type: ["Rock", "Water"],
        category: "Collective",
        region: "Kalos"
    },
    {
        name: "Skrelp",
        number: "690",
        type: ["Poison", "Water"],
        category: "Mock Kelp",
        region: "Kalos"
    },
    {
        name: "Dragalge",
        number: "691",
        type: ["Poison", "Dragon"],
        category: "Mock Kelp",
        region: "Kalos"
    },
    {
        name: "Clauncher",
        number: "692",
        type: ["Water"],
        category: "Water Gun",
        region: "Kalos"
    },
    {
        name: "Clawitzer",
        number: "693",
        type: ["Water"],
        category: "Howitzer",
        region: "Kalos"
    },
    {
        name: "Helioptile",
        number: "694",
        type: ["Electric", "Normal"],
        category: "Generator",
        region: "Kalos"
    },
    {
        name: "Heliolisk",
        number: "695",
        type: ["Electric", "Normal"],
        category: "Generator",
        region: "Kalos"
    },
    {
        name: "Tyrunt",
        number: "696",
        type: ["Rock", "Dragon"],
        category: "Royal Heir",
        region: "Kalos"
    },
    {
        name: "Tyrantrum",
        number: "697",
        type: ["Rock", "Dragon"],
        category: "Despot",
        region: "Kalos"
    },
    {
        name: "Amaura",
        number: "698",
        type: ["Rock", "Ice"],
        category: "Tundra",
        region: "Kalos"
    },
    {
        name: "Aurorus",
        number: "699",
        type: ["Rock", "Ice"],
        category: "Tundra",
        region: "Kalos"
    },
    {
        name: "Sylveon",
        number: "700",
        type: ["Fairy"],
        category: "Intertwining",
        region: "Kalos"
    },
    {
        name: "Hawlucha",
        number: "701",
        type: ["Fighting", "Flying"],
        category: "Wrestling",
        region: "Kalos"
    },
    {
        name: "Dedenne",
        number: "702",
        type: ["Electric", "Fairy"],
        category: "Antenna",
        region: "Kalos"
    },
    {
        name: "Carbink",
        number: "703",
        type: ["Rock", "Fairy"],
        category: "Jewel",
        region: "Kalos"
    },
    {
        name: "Goomy",
        number: "704",
        type: ["Dragon"],
        category: "Soft Tissue",
        region: "Kalos"
    },
    {
        name: "Sliggoo",
        number: "705",
        type: ["Dragon"],
        category: "Soft Tissue",
        region: "Kalos"
    },
    {
        name: "Goodra",
        number: "706",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kalos"
    },
    {
        name: "Klefki",
        number: "707",
        type: ["Steel", "Fairy"],
        category: "Key Ring",
        region: "Kalos"
    },
    {
        name: "Phantump",
        number: "708",
        type: ["Ghost", "Grass"],
        category: "Stump",
        region: "Kalos"
    },
    {
        name: "Trevenant",
        number: "709",
        type: ["Ghost", "Grass"],
        category: "Elder Tree",
        region: "Kalos"
    },
    {
        name: "Pumpkaboo",
        number: "710",
        type: ["Ghost", "Grass"],
        category: "Pumpkin",
        region: "Kalos"
    },
    {
        name: "Gourgeist",
        number: "711",
        type: ["Ghost", "Grass"],
        category: "Pumpkin",
        region: "Kalos"
    },
    {
        name: "Bergmite",
        number: "712",
        type: ["Ice"],
        category: "Ice Chunk",
        region: "Kalos"
    },
    {
        name: "Avalugg",
        number: "713",
        type: ["Ice"],
        category: "Iceberg",
        region: "Kalos"
    },
    {
        name: "Noibat",
        number: "714",
        type: ["Flying", "Dragon"],
        category: "Sound Wave",
        region: "Kalos"
    },
    {
        name: "Noivern",
        number: "715",
        type: ["Flying", "Dragon"],
        category: "Sound Wave",
        region: "Kalos"
    },
    {
        name: "Xerneas",
        number: "716",
        type: ["Fairy"],
        category: "Life",
        region: "Kalos"
    },
    {
        name: "Yveltal",
        number: "717",
        type: ["Dark", "Flying"],
        category: "Destruction",
        region: "Kalos"
    },
    {
        name: "Zygarde",
        number: "718",
        type: ["Dragon", "Ground"],
        category: "Order",
        region: "Kalos"
    },
    {
        name: "Diancie",
        number: "719",
        type: ["Rock", "Fairy"],
        category: "Jewel",
        region: "Kalos"
    },
    {
        name: "Hoopa",
        number: "720",
        type: ["Psychic", "Ghost"],
        category: "Mischief",
        region: "Kalos"
    },
    {
        name: "Volcanion",
        number: "721",
        type: ["Fire", "Water"],
        category: "Steam",
        region: "Kalos"
    },
    {
        name: "Rowlet",
        number: "722",
        type: ["Grass", "Flying"],
        category: "Grass Quill",
        region: "Alola"
    },
    {
        name: "Dartrix",
        number: "723",
        type: ["Grass", "Flying"],
        category: "Blade Quill",
        region: "Alola"
    },
    {
        name: "Decidueye",
        number: "724",
        type: ["Grass", "Ghost"],
        category: "Arrow Quill",
        region: "Alola"
    },
    {
        name: "Litten",
        number: "725",
        type: ["Fire"],
        category: "Fire Cat",
        region: "Alola"
    },
    {
        name: "Torracat",
        number: "726",
        type: ["Fire"],
        category: "Fire Cat",
        region: "Alola"
    },
    {
        name: "Incineroar",
        number: "727",
        type: ["Fire", "Dark"],
        category: "Heel",
        region: "Alola"
    },
    {
        name: "Popplio",
        number: "728",
        type: ["Water"],
        category: "Sea Lion",
        region: "Alola"
    },
    {
        name: "Brionne",
        number: "729",
        type: ["Water"],
        category: "Pop Star",
        region: "Alola"
    },
    {
        name: "Primarina",
        number: "730",
        type: ["Water", "Fairy"],
        category: "Soloist",
        region: "Alola"
    },
    {
        name: "Pikipek",
        number: "731",
        type: ["Normal", "Flying"],
        category: "Woodpecker",
        region: "Alola"
    },
    {
        name: "Trumbeak",
        number: "732",
        type: ["Normal", "Flying"],
        category: "Bugle Beak",
        region: "Alola"
    },
    {
        name: "Toucannon",
        number: "733",
        type: ["Normal", "Flying"],
        category: "Cannon",
        region: "Alola"
    },
    {
        name: "Yungoos",
        number: "734",
        type: ["Normal"],
        category: "Loitering",
        region: "Alola"
    },
    {
        name: "Gumshoos",
        number: "735",
        type: ["Normal"],
        category: "Stakeout",
        region: "Alola"
    },
    {
        name: "Grubbin",
        number: "736",
        type: ["Bug"],
        category: "Larva",
        region: "Alola"
    },
    {
        name: "Charjabug",
        number: "737",
        type: ["Bug", "Electric"],
        category: "Battery",
        region: "Alola"
    },
    {
        name: "Vikavolt",
        number: "738",
        type: ["Bug", "Electric"],
        category: "Stag Beetle",
        region: "Alola"
    },
    {
        name: "Crabrawler",
        number: "739",
        type: ["Fighting"],
        category: "Boxing",
        region: "Alola"
    },
    {
        name: "Crabominable",
        number: "740",
        type: ["Fighting", "Ice"],
        category: "Woolly Crab",
        region: "Alola"
    },
    {
        name: "Oricorio",
        number: "741",
        type: ["Fire", "Flying"],
        category: "Dancing",
        region: "Alola"
    },
    {
        name: "Cutiefly",
        number: "742",
        type: ["Bug", "Fairy"],
        category: "Bee Fly",
        region: "Alola"
    },
    {
        name: "Ribombee",
        number: "743",
        type: ["Bug", "Fairy"],
        category: "Bee Fly",
        region: "Alola"
    },
    {
        name: "Rockruff",
        number: "744",
        type: ["Rock"],
        category: "Puppy",
        region: "Alola"
    },
    {
        name: "Lycanroc",
        number: "745",
        type: ["Rock"],
        category: "Wolf",
        region: "Alola"
    },
    {
        name: "Wishiwashi",
        number: "746",
        type: ["Water"],
        category: "Small Fry",
        region: "Alola"
    },
    {
        name: "Mareanie",
        number: "747",
        type: ["Poison", "Water"],
        category: "Brutal Star",
        region: "Alola"
    },
    {
        name: "Toxapex",
        number: "748",
        type: ["Poison", "Water"],
        category: "Brutal Star",
        region: "Alola"
    },
    {
        name: "Mudbray",
        number: "749",
        type: ["Ground"],
        category: "Donkey",
        region: "Alola"
    },
    {
        name: "Mudsdale",
        number: "750",
        type: ["Ground"],
        category: "Draft Horse",
        region: "Alola"
    },
    {
        name: "Dewpider",
        number: "751",
        type: ["Water", "Bug"],
        category: "Water Bubble",
        region: "Alola"
    },
    {
        name: "Araquanid",
        number: "752",
        type: ["Water", "Bug"],
        category: "Water Bubble",
        region: "Alola"
    },
    {
        name: "Fomantis",
        number: "753",
        type: ["Grass"],
        category: "Sickle Grass",
        region: "Alola"
    },
    {
        name: "Lurantis",
        number: "754",
        type: ["Grass"],
        category: "Bloom Sickle",
        region: "Alola"
    },
    {
        name: "Morelull",
        number: "755",
        type: ["Grass", "Fairy"],
        category: "Illuminating",
        region: "Alola"
    },
    {
        name: "Shiinotic",
        number: "756",
        type: ["Grass", "Fairy"],
        category: "Illuminating",
        region: "Alola"
    },
    {
        name: "Salandit",
        number: "757",
        type: ["Poison", "Fire"],
        category: "Toxic Lizard",
        region: "Alola"
    },
    {
        name: "Salazzle",
        number: "758",
        type: ["Poison", "FIre"],
        category: "Toxic Lizard",
        region: "Alola"
    },
    {
        name: "Stufful",
        number: "759",
        type: ["Normal", "Fighting"],
        category: "Flailing",
        region: "Alola"
    },
    {
        name: "Bewear",
        number: "760",
        type: ["Normal", "Fighting"],
        category: "Strong Arm",
        region: "Alola"
    },
    {
        name: "Bounsweet",
        number: "761",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola"
    },
    {
        name: "Steenee",
        number: "762",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola"
    },
    {
        name: "Tsareena",
        number: "763",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola"
    },
    {
        name: "Comfey",
        number: "764",
        type: ["Fairy"],
        category: "Posy Picker",
        region: "Alola"
    },
    {
        name: "Oranguru",
        number: "765",
        type: ["Normal", "Psychic"],
        category: "Sage",
        region: "Alola"
    },
    {
        name: "Passimian",
        number: "766",
        type: ["Fighting"],
        category: "Teamwork",
        region: "Alola"
    },
    {
        name: "Wimpod",
        number: "767",
        type: ["Bug", "Water"],
        category: "Turn Tail",
        region: "Alola"
    },
    {
        name: "Golisopod",
        number: "768",
        type: ["Bug", "Water"],
        category: "Hard Scale",
        region: "Alola"
    },
    {
        name: "Sandygast",
        number: "769",
        type: ["Ghost", "Ground"],
        category: "Sand Heap",
        region: "Alola"
    },
    {
        name: "Palossand",
        number: "770",
        type: ["Ghost", "Ground"],
        category: "Sand Castle",
        region: "Alola"
    },
    {
        name: "Pyukumuku",
        number: "771",
        type: ["Water"],
        category: "Sea Cucumber",
        region: "Alola"
    },
    {
        name: "Type: Null",
        number: "772",
        type: ["Normal"],
        category: "Synthetic",
        region: "Alola"
    },
    {
        name: "Silvally",
        number: "773",
        type: ["Normal"],
        category: "Synthetic",
        region: "Alola"
    },
    {
        name: "Minior",
        number: "774",
        type: ["Rock", "Flying"],
        category: "Meteor",
        region: "Alola"
    },
    {
        name: "Komala",
        number: "775",
        type: ["Normal"],
        category: "Drowsing",
        region: "Alola"
    },
    {
        name: "Turtonator",
        number: "776",
        type: ["Fire", "Dragon"],
        category: "Blast Turtle",
        region: "Alola"
    },
    {
        name: "Togedemaru",
        number: "777",
        type: ["Electric", "Steel"],
        category: "Roly-Poly",
        region: "Alola"
    },
    {
        name: "Mimikyu",
        number: "778",
        type: ["Ghost", "Fairy"],
        category: "Disguise",
        region: "Alola"
    },
    {
        name: "Bruxish",
        number: "779",
        type: ["Water", "Psychic"],
        category: "Gnash Teeth",
        region: "Alola"
    },
    {
        name: "Drampa",
        number: "780",
        type: ["Normal", "Dragon"],
        category: "Placid",
        region: "Alola"
    },
    {
        name: "Dhelmise",
        number: "781",
        type: ["Ghost", "Grass"],
        category: "Sea Creeper",
        region: "Alola"
    },
    {
        name: "Jangmo-o",
        number: "782",
        type: ["Dragon"],
        category: "Scaly",
        region: "Alola"
    },
    {
        name: "Hakamo-o",
        number: "783",
        type: ["Dragon", "Fighting"],
        category: "Scaly",
        region: "Alola"
    },
    {
        name: "Kommo-o",
        number: "784",
        type: ["Dragon", "Fighting"],
        category: "Scaly",
        region: "Alola"
    },
    {
        name: "Tapu Koko",
        number: "785",
        type: ["Electric", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Tapu Lele",
        number: "786",
        type: ["Psychic", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Tapu Bulu",
        number: "787",
        type: ["Grass", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Tapu Fini",
        number: "788",
        type: ["Water", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Cosmog",
        number: "789",
        type: ["Psychic"],
        category: "Nebula",
        region: "Alola"
    },
    {
        name: "Cosmoem",
        number: "790",
        type: ["Psychic"],
        category: "Protostar",
        region: "Alola"
    },
    {
        name: "Solgaleo",
        number: "791",
        type: ["Psychic", "Steel"],
        category: "Sunne",
        region: "Alola"
    },
    {
        name: "Lunala",
        number: "792",
        type: ["Psychic", "Ghost"],
        category: "Moone",
        region: "Alola"
    },
    {
        name: "Nihilego",
        number: "793",
        type: ["Rock", "Poison"],
        category: "Parasite",
        region: "Alola"
    },
    {
        name: "Buzzwole",
        number: "794",
        type: ["Bug", "Fighting"],
        category: "Swollen",
        region: "Alola"
    },
    {
        name: "Pheromosa",
        number: "795",
        type: ["Bug", "Fighting"],
        category: "Lissome",
        region: "Alola"
    },
    {
        name: "Xurkitree",
        number: "796",
        type: ["Electric"],
        category: "Glowing",
        region: "Alola"
    },
    {
        name: "Celesteela",
        number: "797",
        type: ["Steel", "Flying"],
        category: "Launch",
        region: "Alola"
    },
    {
        name: "Kartana",
        number: "798",
        type: ["Grass", "Steel"],
        category: "Drawn Sword",
        region: "Alola"
    },
    {
        name: "Guzzlord",
        number: "799",
        type: ["Dark", "Dragon"],
        category: "Junkivore",
        region: "Alola"
    },
    {
        name: "Necrozma",
        number: "800",
        type: ["Psychic"],
        category: "Prism",
        region: "Alola"
    },
    {
        name: "Magearna",
        number: "801",
        type: ["Steel", "Fairy"],
        category: "Artificial",
        region: "Alola"
    },
    {
        name: "Marshadow",
        number: "802",
        type: ["Fighting", "Ghost"],
        category: "Gloomdweller",
        region: "Alola"
    },
    {
        name: "Poipole",
        number: "803",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Alola"
    },
    {
        name: "Naganadel",
        number: "804",
        type: ["Poison", "Dragon"],
        category: "Poison Pin",
        region: "Alola"
    },
    {
        name: "Stakataka",
        number: "805",
        type: ["Rock", "Steel"],
        category: "Rampart",
        region: "Alola"
    },
    {
        name: "Blacephalon",
        number: "806",
        type: ["Fire", "Ghost"],
        category: "Fireworks",
        region: "Alola"
    },
    {
        name: "Zeraora",
        number: "807",
        type: ["Electric"],
        category: "Thunderclap",
        region: "Alola"
    },
    {
        name: "Meltan",
        number: "808",
        type: ["Steel"],
        category: "Hex Nut",
        region: "Alola"
    },
    {
        name: "Melmetal",
        number: "809",
        type: ["Steel"],
        category: "Hex Nut",
        region: "Alola"
    },
    {
        name: "Grookey",
        number: "810",
        type: ["Grass"],
        category: "Chimp",
        region: "Galar"
    },
    {
        name: "Thwackey",
        number: "811",
        type: ["Grass"],
        category: "Beat",
        region: "Galar"
    },
    {
        name: "Rillaboom",
        number: "812",
        type: ["Grass"],
        category: "Drummer",
        region: "Galar"
    },
    {
        name: "Scorbunny",
        number: "813",
        type: ["Fire"],
        category: "Rabbit",
        region: "Galar"
    },
    {
        name: "Raboot",
        number: "814",
        type: ["Fire"],
        category: "Rabbit",
        region: "Galar"
    },
    {
        name: "Cinderace",
        number: "815",
        type: ["Fire"],
        category: "Striker",
        region: "Galar"
    },
    {
        name: "Sobble",
        number: "816",
        type: ["Water"],
        category: "Water Lizard",
        region: "Galar"
    },
    {
        name: "Drizzile",
        number: "817",
        type: ["Water"],
        category: "Water Lizard",
        region: "Galar"
    },
    {
        name: "Inteleon",
        number: "818",
        type: ["Water"],
        category: "Secret Agent",
        region: "Galar"
    },
    {
        name: "Skwovet",
        number: "819",
        type: ["Normal"],
        category: "Cheeky",
        region: "Galar"
    },
    {
        name: "Greedent",
        number: "820",
        type: ["Normal"],
        category: "Greedy",
        region: "Galar"
    },
    {
        name: "Rookidee",
        number: "821",
        type: ["Flying"],
        category: "Tiny Bird",
        region: "Galar"
    },
    {
        name: "Corvisquire",
        number: "822",
        type: ["Flying"],
        category: "Raven",
        region: "Galar"
    },
    {
        name: "Corviknight",
        number: "823",
        type: ["Flying", "Steel"],
        category: "Raven",
        region: "Galar"
    },
    {
        name: "Blipbug",
        number: "824",
        type: ["Bug"],
        category: "Larva",
        region: "Galar"
    },
    {
        name: "Dottler",
        number: "825",
        type: ["Bug", "Psychic"],
        category: "Radome",
        region: "Galar"
    },
    {
        name: "Orbeetle",
        number: "826",
        type: ["Bug", "Psychic"],
        category: "Seven Spot",
        region: "Galar"
    },
    {
        name: "Nickit",
        number: "827",
        type: ["Dark"],
        category: "Fox",
        region: "Galar"
    },
    {
        name: "Thievul",
        number: "828",
        type: ["Dark"],
        category: "Fox",
        region: "Galar"
    },
    {
        name: "Gossifleur",
        number: "829",
        type: ["Grass"],
        category: "Flowering",
        region: "Galar"
    },
    {
        name: "Eldegoss",
        number: "830",
        type: ["Grass"],
        category: "Cotton Bloom",
        region: "Galar"
    },
    {
        name: "Wooloo",
        number: "831",
        type: ["Normal"],
        category: "Sheep",
        region: "Galar"
    },
    {
        name: "Dubwool",
        number: "832",
        type: ["Normal"],
        category: "Sheep",
        region: "Galar"
    },
    {
        name: "Chewtle",
        number: "833",
        type: ["Water"],
        category: "Snapping",
        region: "Galar"
    },
    {
        name: "Drednaw",
        number: "834",
        type: ["Water", "Rock"],
        category: "Bite",
        region: "Galar"
    },
    {
        name: "Yamper",
        number: "835",
        type: ["Electric"],
        category: "Puppy",
        region: "Galar"
    },
    {
        name: "Boltund",
        number: "836",
        type: ["Electric"],
        category: "Dog",
        region: "Galar"
    },
    {
        name: "Rolycoly",
        number: "837",
        type: ["Rock"],
        category: "Coal",
        region: "Galar"
    },
    {
        name: "Carkol",
        number: "838",
        type: ["Rock", "Fire"],
        category: "Coal",
        region: "Galar"
    },
    {
        name: "Coalossal",
        number: "839",
        type: ["Rock", "Fire"],
        category: "Coal",
        region: "Galar"
    },
    {
        name: "Applin",
        number: "840",
        type: ["Grass", "Dragon"],
        category: "Apple Core",
        region: "Galar"
    },
    {
        name: "Flapple",
        number: "841",
        type: ["Grass", "Dragon"],
        category: "Apple Wing",
        region: "Galar"
    },
    {
        name: "Appletun",
        number: "842",
        type: ["Grass", "Dragon"],
        category: "Apple Nectar",
        region: "Galar"
    },
    {
        name: "Silicobra",
        number: "843",
        type: ["Ground"],
        category: "Sand Snake",
        region: "Galar"
    },
    {
        name: "Sandaconda",
        number: "844",
        type: ["Ground"],
        category: "Sand Snake",
        region: "Galar"
    },
    {
        name: "Cramorant",
        number: "845",
        type: ["Flying", "Water"],
        category: "Sand Snake",
        region: "Galar"
    },
    {
        name: "Arrokuda",
        number: "846",
        type: ["Water"],
        category: "Rush",
        region: "Galar"
    },
    {
        name: "Barraskewda",
        number: "847",
        type: ["Water"],
        category: "Skewer",
        region: "Galar"
    },
    {
        name: "Toxel",
        number: "848",
        type: ["Electric", "Poison"],
        category: "Baby",
        region: "Galar"
    },
    {
        name: "Toxtricity",
        number: "849",
        type: ["Electric", "Poison"],
        category: "Punk",
        region: "Galar"
    },
    {
        name: "Sizzlipede",
        number: "850",
        type: ["Fire", "Bug"],
        category: "Radiator",
        region: "Galar"
    },
    {
        name: "Centiskorch",
        number: "851",
        type: ["Fire", "Bug"],
        category: "Radiator",
        region: "Galar"
    },
    {
        name: "Clobbopus",
        number: "852",
        type: ["Fighting"],
        category: "Tantrum",
        region: "Galar"
    },
    {
        name: "Grapploct",
        number: "853",
        type: ["Fighting"],
        category: "Jujitsu",
        region: "Galar"
    },
    {
        name: "Sinistea",
        number: "854",
        type: ["Ghost"],
        category: "Black Tea",
        region: "Galar"
    },
    {
        name: "Polteageist",
        number: "855",
        type: ["Ghost"],
        category: "Black Tea",
        region: "Galar"
    },
    {
        name: "Hatenna",
        number: "856",
        type: ["Psychic"],
        category: "Calm",
        region: "Galar"
    },
    {
        name: "Hattrem",
        number: "857",
        type: ["Psychic"],
        category: "Serene",
        region: "Galar"
    },
    {
        name: "Hatterene",
        number: "858",
        type: ["Psychic", "Fairy"],
        category: "Silent",
        region: "Galar"
    },
    {
        name: "Impidimp",
        number: "859",
        type: ["Dark", "Fairy"],
        category: "Wily",
        region: "Galar"
    },
    {
        name: "Morgrem",
        number: "860",
        type: ["Dark", "Fairy"],
        category: "Devious",
        region: "Galar"
    },
    {
        name: "Grimmsnarl",
        number: "861",
        type: ["Dark", "Fairy"],
        category: "Bulk Up",
        region: "Galar"
    },
    {
        name: "Obstagoon",
        number: "862",
        type: ["Dark", "Normal"],
        category: "Blocking",
        region: "Galar"
    },
    {
        name: "Perrserker",
        number: "863",
        type: ["Steel"],
        category: "Viking",
        region: "Galar"
    },
    {
        name: "Cursola",
        number: "864",
        type: ["Ghost"],
        category: "Coral",
        region: "Galar"
    },
    {
        name: "Sirfetch'd",
        number: "865",
        type: ["Fighting"],
        category: "Wild Duck",
        region: "Galar"
    },
    {
        name: "Mr. Rime",
        number: "866",
        type: ["Ice, Psychic"],
        category: "Comedian",
        region: "Galar"
    },
    {
        name: "Runerigus",
        number: "867",
        type: ["Ground", "Ghost"],
        category: "Grudge",
        region: "Galar"
    },
    {
        name: "Milcery",
        number: "868",
        type: ["Fairy"],
        category: "Cream",
        region: "Galar"
    },
    {
        name: "Alcremie",
        number: "869",
        type: ["Fairy"],
        category: "Cream",
        region: "Galar"
    },
    {
        name: "Falinks",
        number: "870",
        type: ["Fighting"],
        category: "Formation",
        region: "Galar"
    },
    {
        name: "Pincurchin",
        number: "871",
        type: ["Electric"],
        category: "Sea Urchin",
        region: "Galar"
    },
    {
        name: "Snom",
        number: "872",
        type: ["Ice", "Bug"],
        category: "Worm",
        region: "Galar"
    },
    {
        name: "Frosmoth",
        number: "873",
        type: ["Ice", "Bug"],
        category: "Frost Moth",
        region: "Galar"
    },
    {
        name: "Stonjourner",
        number: "874",
        type: ["Rock"],
        category: "Big Rock",
        region: "Galar"
    },
    {
        name: "Eiscue",
        number: "875",
        type: ["Ice"],
        category: "Penguin",
        region: "Galar"
    },
    {
        name: "Indeedee",
        number: "876",
        type: ["Psychic", "Normal"],
        category: "Emotion",
        region: "Galar"
    },
    {
        name: "Morpeko",
        number: "877",
        type: ["Electric", "Dark"],
        category: "Two-Sided",
        region: "Galar"
    },
    {
        name: "Cufant",
        number: "878",
        type: ["Steel"],
        category: "Copperderm",
        region: "Galar"
    },
    {
        name: "Copperajah",
        number: "879",
        type: ["Steel"],
        category: "Copperderm",
        region: "Galar"
    },
    {
        name: "Dracozolt",
        number: "880",
        type: ["Electric", "Dragon"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Arctozolt",
        number: "881",
        type: ["Electric", "Ice"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Dracovish",
        number: "882",
        type: ["Water", "Dragon"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Arctovish",
        number: "883",
        type: ["Water", "Ice"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Duraludon",
        number: "884",
        type: ["Steel", "Dragon"],
        category: "Alloy",
        region: "Galar"
    },
    {
        name: "Dreepy",
        number: "885",
        type: ["Dragon", "Ghost"],
        category: "Lingering",
        region: "Galar"
    },
    {
        name: "Drakloak",
        number: "886",
        type: ["Dragon", "Ghost"],
        category: "Caretaker",
        region: "Galar"
    },
    {
        name: "Dragapult",
        number: "887",
        type: ["Dragon", "Ghost"],
        category: "Stealth",
        region: "Galar"
    },
    {
        name: "Zacian",
        number: "888",
        type: ["Fairy", "Steel"],
        category: "Warrior",
        region: "Galar"
    },
    {
        name: "Zamazenta",
        number: "889",
        type: ["Fighting", "Steel"],
        category: "Warrior",
        region: "Galar"
    },
    {
        name: "Eternatus",
        number: "890",
        type: ["Poison", "Dragon"],
        category: "Gigantic",
        region: "Galar"
    },
    {
        name: "Kubfu",
        number: "891",
        type: ["Fighting"],
        category: "Wushu",
        region: "Galar"
    },
    {
        name: "Urshifu",
        number: "892",
        type: ["Fighting", "Dark"],
        category: "Wushu",
        region: "Galar"
    },
    {
        name: "Zarude",
        number: "893",
        type: ["Dark", "Grass"],
        category: "Rogue Monkey",
        region: "Galar"
    },
    {
        name: "Regieleki",
        number: "894",
        type: ["Electric"],
        category: "Electron",
        region: "Galar"
    },
    {
        name: "Regidrago",
        number: "895",
        type: ["Dragon"],
        category: "Dragon Orb",
        region: "Galar"
    },
    {
        name: "Glastrier",
        number: "896",
        type: ["Ice"],
        category: "Wild Horse",
        region: "Galar"
    },
    {
        name: "Spectrier",
        number: "897",
        type: ["Ghost"],
        category: "Swift Horse",
        region: "Galar"
    },
    {
        name: "Calyrex",
        number: "898",
        type: ["Psychic", "Grass"],
        category: "King",
        region: "Galar"
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
        // let pokemonImage = document.createElement("img")
        // pokemonImage.src = pocketMonster.imageUrl
        let pokemonNumber = document.createElement("p")
        pokemonNumber.append("#", pocketMonster.number)
        let pokemonType = document.createElement("p")
        pokemonType.append("Type: " , pocketMonster.type)
        let pokemonCategory = document.createElement("p")
        pokemonCategory.append(pocketMonster.category , " Pokémon")
        let pokemonRegion = document.createElement("p")
        pokemonRegion.append("Region: " , pocketMonster.region)
        divVariable.append(pokemonName)
        // divVariable.append(pokemonImage)
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
let numberId = document.getElementById("number_input").value
let typeId = document.getElementById("type_input").value
let categoryId = document.getElementById("category_input").value
let regionId = document.getElementById("region_input").value

let filterPokemon = nationalDex.filter(searching => searching.name.toLowerCase().indexOf(nameId.toLowerCase()) > -1 )
.filter(searching => searching.number.indexOf(numberId) > -1 )
.filter(searching => String(searching.type).toLowerCase().indexOf(typeId.toLowerCase()) > -1 )
.filter(searching => String(searching.category).toLowerCase().indexOf(categoryId.toLowerCase()) > -1 )
.filter(searching => String(searching.region).toLowerCase().indexOf(regionId.toLowerCase()) > -1 )

dexRender(filterPokemon)

}