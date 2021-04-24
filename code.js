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
let typeId = document.getElementById("type_input").value

let filterPokemon = nationalDex.filter(searching => searching.name.toLowerCase().indexOf(nameId.toLowerCase()) > -1 )
.filter(searching => String(searching.type).toLowerCase().indexOf(typeId.toLowerCase()) > -1 )

dexRender(filterPokemon)

}