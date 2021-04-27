//Pokedex Search Code

let nationalDex = [
    {
        name: "Bulbasaur",
        imageUrl: "images/001Bulbasaur.png",
        number: "001",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto"
    },
    {
        name: "Ivysaur",
        imageUrl: "images/002Ivysaur.png",
        number: "002",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto"
    },
    {
        name: "Venusaur",
        imageUrl: "images/003Venusaur.png",
        number: "003",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto"
    },
    {
        name: "Charmander",
        imageUrl: "images/004Charmander.png",
        number: "004",
        type: ["Fire"],
        category: "Lizard",
        region: "Kanto"
    },
    {
        name: "Charmeleon",
        imageUrl: "images/005Charmeleon.png",
        number: "005",
        type: ["Fire"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Charizard",
        imageUrl: "images/006Charizard.png",
        number: "006",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Squirtle",
        imageUrl: "images/007Squirtle.png",
        number: "007",
        type: ["Water"],
        category: "Tiny Turtle",
        region: "Kanto"
    },
    {
        name: "Wartortle",
        imageUrl: "images/008Wartortle.png",
        number: "008",
        type: ["Water"],
        category: "Turtle",
        region: "Kanto"
    },
    {
        name: "Blastoise",
        imageUrl: "images/009Blastoise.png",
        number: "009",
        type: ["Water"],
        category: "Shellfish",
        region: "Kanto"
    },
    {
        name: "Caterpie",
        imageUrl: "images/010Caterpie.png",
        number: "010",
        type: ["Bug"],
        category: "Worm",
        region: "Kanto"
    },
    {
        name: "Metapod",
        imageUrl: "images/011Metapod.png",
        number: "011",
        type: ["Bug"],
        category: "Cocoon",
        region: "Kanto"
    },
    {
        name: "Butterfree",
        imageUrl: "images/012Butterfree.png",
        number: "012",
        type: ["Bug", "Flying"],
        category: "Butterfly",
        region: "Kanto"
    },
    {
        name: "Weedle",
        imageUrl: "images/013Weedle.png",
        number: "013",
        type: ["Bug", "Poison"],
        category: "Hairy Bug",
        region: "Kanto"
    },
    {
        name: "Kakuna",
        imageUrl: "images/014Kakuna.png",
        number: "014",
        type: ["Bug", "Poison"],
        category: "Cocoon",
        region: "Kanto"
    },
    {
        name: "Beedrill",
        imageUrl: "images/015Beedrill.png",
        number: "015",
        type: ["Bug", "Poison"],
        category: "Poison Bee",
        region: "Kanto"
    },
    {
        name: "Pidgey",
        imageUrl: "images/016Pidgey.png",
        number: "016",
        type: ["Normal", "Flying"],
        category: "Tiny Bird",
        region: "Kanto"
    },
    {
        name: "Pidgeotto",
        imageUrl: "images/017Pidgeotto.png",
        number: "017",
        type: ["Normal", "Flying"],
        category: "Bird",
        region: "Kanto"
    },
    {
        name: "Pidgeot",
        imageUrl: "images/018Pidgeot.png",
        number: "018",
        type: ["Normal", "Flying"],
        category: "Bird",
        region: "Kanto"
    },
    {
        name: "Rattata",
        imageUrl: "images/019Rattata.png",
        number: "019",
        type: ["Normal"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Raticate",
        imageUrl: "images/020Raticate.png",
        number: "020",
        type: ["Normal"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Spearow",
        imageUrl: "images/021Spearow.png",
        number: "021",
        type: ["Normal", "Flying"],
        category: "Tiny Bird",
        region: "Kanto"
    },
    {
        name: "Fearow",
        imageUrl: "images/022Fearow.png",
        number: "022",
        type: ["Normal", "Flying"],
        category: "Beak",
        region: "Kanto"
    },
    {
        name: "Ekans",
        imageUrl: "images/023Ekans.png",
        number: "023",
        type: ["Poison"],
        category: "Snake",
        region: "Kanto"
    },
    {
        name: "Arbok",
        imageUrl: "images/024Arbok.png",
        number: "024",
        type: ["Poison"],
        category: "Cobra",
        region: "Kanto"
    },
    {
        name: "Pikachu",
        imageUrl: "images/025Pikachu.png",
        number: "025",
        type: ["Electric"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Raichu",
        imageUrl: "images/026Raichu.png",
        number: "026",
        type: ["Electric"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Sandshrew",
        imageUrl: "images/027Sandshrew.png",
        number: "027",
        type: ["Ground"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Sandslash",
        imageUrl: "images/028Sandslash.png",
        number: "028",
        type: ["Ground"],
        category: "Mouse",
        region: "Kanto"
    },
    {
        name: "Nidoran♀",
        imageUrl: "images/029NidoranF.png",
        number: "029",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidorina",
        imageUrl: "images/030Nidorina.png",
        number: "030",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidoqueen",
        imageUrl: "images/031Nidoqueen.png",
        number: "031",
        type: ["Poison", "Ground"],
        category: "Drill",
        region: "Kanto"
    },
    {
        name: "Nidoran♂",
        imageUrl: "images/032NidoranM.png",
        number: "032",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidorino",
        imageUrl: "images/033Nidorino.png",
        number: "033",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto"
    },
    {
        name: "Nidoking",
        imageUrl: "images/034Nidoking.png",
        number: "034",
        type: ["Poison", "Ground"],
        category: "Drill",
        region: "Kanto"
    },
    {
        name: "Clefairy",
        imageUrl: "images/035Clefairy.png",
        number: "035",
        type: ["Fairy"],
        category: "Fairy",
        region: "Kanto"
    },
    {
        name: "Clefable",
        imageUrl: "images/036Clefable.png",
        number: "036",
        type: ["Fairy"],
        category: "Fairy",
        region: "Kanto"
    },
    {
        name: "Vulpix",
        imageUrl: "images/037Vulpix.png",
        number: "037",
        type: ["Fire"],
        category: "Fox",
        region: "Kanto"
    },
    {
        name: "Ninetales",
        imageUrl: "images/038Ninetales.png",
        number: "038",
        type: ["Fire"],
        category: "Fox",
        region: "Kanto"
    },
    {
        name: "Jigglypuff",
        imageUrl: "images/039Jigglypuff.png",
        number: "039",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Kanto"
    },
    {
        name: "Wigglytuff",
        imageUrl: "images/040Wigglytuff.png",
        number: "040",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Kanto"
    },
    {
        name: "Zubat",
        imageUrl: "images/041Zubat.png",
        number: "041",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Kanto"
    },
    {
        name: "Golbat",
        imageUrl: "images/042Golbat.png",
        number: "042",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Kanto"
    },
    {
        name: "Oddish",
        imageUrl: "images/043Oddish.png",
        number: "043",
        type: ["Grass", "Poison"],
        category: "Weed",
        region: "Kanto"
    },
    {
        name: "Gloom",
        imageUrl: "images/044Gloom.png",
        number: "044",
        type: ["Grass", "Poison"],
        category: "Weed",
        region: "Kanto"
    },
    {
        name: "Vileplume",
        imageUrl: "images/045Vileplume.png",
        number: "045",
        type: ["Grass", "Poison"],
        category: "Flower",
        region: "Kanto"
    },
    {
        name: "Paras",
        imageUrl: "images/046Paras.png",
        number: "046",
        type: ["Bug", "Grass"],
        category: "Mushroom",
        region: "Kanto"
    },
    {
        name: "Parasect",
        imageUrl: "images/047Parasect.png",
        number: "047",
        type: ["Bug", "Grass"],
        category: "Mushroom",
        region: "Kanto"
    },
    {
        name: "Venonat",
        imageUrl: "images/048Venonat.png",
        number: "048",
        type: ["Bug", "Poison"],
        category: "Insect",
        region: "Kanto"
    },
    {
        name: "Venomoth",
        imageUrl: "images/049Venomoth.png",
        number: "049",
        type: ["Bug", "Poison"],
        category: "Poison Moth",
        region: "Kanto"
    },
    {
        name: "Diglett",
        imageUrl: "images/050Diglett.png",
        number: "050",
        type: ["Ground"],
        category: "Mole",
        region: "Kanto"
    },
    {
        name: "Dugtrio",
        imageUrl: "images/051Dugtrio.png",
        number: "051",
        type: ["Ground"],
        category: "Mole",
        region: "Kanto"
    },
    {
        name: "Meowth",
        imageUrl: "images/052Meowth.png",
        number: "052",
        type: ["Normal"],
        category: "Scratch Cat",
        region: "Kanto"
    },
    {
        name: "Persian",
        imageUrl: "images/053Persian.png",
        number: "053",
        type: ["Normal"],
        category: "Classy Cat",
        region: "Kanto"
    },
    {
        name: "Psyduck",
        imageUrl: "images/054Psyduck.png",
        number: "054",
        type: ["Water"],
        category: "Duck",
        region: "Kanto"
    },
    {
        name: "Golduck",
        imageUrl: "images/055Golduck.png",
        number: "055",
        type: ["Water"],
        category: "Duck",
        region: "Kanto"
    },
    {
        name: "Mankey",
        imageUrl: "images/056Mankey.png",
        number: "056",
        type: ["Fighting"],
        category: "Pig Monkey",
        region: "Kanto"
    },
    {
        name: "Primeape",
        imageUrl: "images/057Primeape.png",
        number: "057",
        type: ["Fighting"],
        category: "Pig Monkey",
        region: "Kanto"
    },
    {
        name: "Growlithe",
        imageUrl: "images/058Growlithe.png",
        number: "058",
        type: ["Fire"],
        category: "Puppy",
        region: "Kanto"
    },
    {
        name: "Arcanine",
        imageUrl: "images/059Arcanine.png",
        number: "059",
        type: ["Fire"],
        category: "Legendary",
        region: "Kanto"
    },
    {
        name: "Poliwag",
        imageUrl: "images/060Poliwag.png",
        number: "060",
        type: ["Water"],
        category: "Tadpole",
        region: "Kanto"
    },
    {
        name: "Poliwhirl",
        imageUrl: "images/061Poliwhirl.png",
        number: "061",
        type: ["Water"],
        category: "Tadpole",
        region: "Kanto"
    },
    {
        name: "Poliwrath",
        imageUrl: "images/062Poliwrath.png",
        number: "062",
        type: ["Water", "Fighting"],
        category: "Tadpole",
        region: "Kanto"
    },
    {
        name: "Abra",
        imageUrl: "images/063Abra.png",
        number: "063",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto"
    },
    {
        name: "Kadabra",
        imageUrl: "images/064Kadabra.png",
        number: "064",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto"
    },
    {
        name: "Alakazam",
        imageUrl: "images/065Alakazam.png",
        number: "065",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto"
    },
    {
        name: "Machop",
        imageUrl: "images/066Machop.png",
        number: "066",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto"
    },
    {
        name: "Machoke",
        imageUrl: "images/067Machoke.png",
        number: "067",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto"
    },
    {
        name: "Machamp",
        imageUrl: "images/068Machamp.png",
        number: "068",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto"
    },
    {
        name: "Bellsprout",
        imageUrl: "images/069Bellsprout.png",
        number: "069",
        type: ["Grass", "Poison"],
        category: "Flower",
        region: "Kanto"
    },
    {
        name: "Weepinbell",
        imageUrl: "images/070Weepinbell.png",
        number: "070",
        type: ["Grass", "Poison"],
        category: "Flycatcher",
        region: "Kanto"
    },
    {
        name: "Victreebel",
        imageUrl: "images/071Victreebel.png",
        number: "071",
        type: ["Grass", "Poison"],
        category: "Flycatcher",
        region: "Kanto"
    },
    {
        name: "Tentacool",
        imageUrl: "images/072Tentacool.png",
        number: "072",
        type: ["Water", "Poison"],
        category: "Jellyfish",
        region: "Kanto"
    },
    {
        name: "Tentacruel",
        imageUrl: "images/073Tentacruel.png",
        number: "073",
        type: ["Water", "Poison"],
        category: "Jellyfish",
        region: "Kanto"
    },
    {
        name: "Geodude",
        imageUrl: "images/074Geodude.png",
        number: "074",
        type: ["Rock", "Ground"],
        category: "Rock",
        region: "Kanto"
    },
    {
        name: "Graveler",
        imageUrl: "images/075Graveler.png",
        number: "075",
        type: ["Rock", "Ground"],
        category: "Rock",
        region: "Kanto"
    },
    {
        name: "Golem",
        imageUrl: "images/076Golem.png",
        number: "076",
        type: ["Rock", "Ground"],
        category: "Megaton",
        region: "Kanto"
    },
    {
        name: "Ponyta",
        imageUrl: "images/077Ponyta.png",
        number: "077",
        type: ["Fire"],
        category: "Fire Horse",
        region: "Kanto"
    },
    {
        name: "Rapidash",
        imageUrl: "images/078Rapidash.png",
        number: "078",
        type: ["Fire"],
        category: "Fire Horse",
        region: "Kanto"
    },
    {
        name: "Slowpoke",
        imageUrl: "images/079Slowpoke.png",
        number: "079",
        type: ["Water", "Psychic"],
        category: "Dopey",
        region: "Kanto"
    },
    {
        name: "Slowbro",
        imageUrl: "images/080Slowbro.png",
        number: "080",
        type: ["Water", "Psychic"],
        category: "Hermit Crab",
        region: "Kanto"
    },
    {
        name: "Magnemite",
        imageUrl: "images/081Magnemite.png",
        number: "081",
        type: ["Electric", "Steel"],
        category: "Magnet",
        region: "Kanto"
    },
    {
        name: "Magneton",
        imageUrl: "images/082Magneton.png",
        number: "082",
        type: ["Electric", "Steel"],
        category: "Magnet",
        region: "Kanto"
    },
    {
        name: "Farfetch'd",
        imageUrl: "images/083Farfetch'd.png",
        number: "083",
        type: ["Normal", "Flying"],
        category: "Wild Duck",
        region: "Kanto"
    },
    {
        name: "Doduo",
        imageUrl: "images/084Doduo.png",
        number: "084",
        type: ["Normal", "Flying"],
        category: "Twin Bird",
        region: "Kanto"
    },
    {
        name: "Dodrio",
        imageUrl: "images/085Dodrio.png",
        number: "085",
        type: ["Normal", "Flying"],
        category: "Triple Bird",
        region: "Kanto"
    },
    {
        name: "Seel",
        imageUrl: "images/086Seel.png",
        number: "086",
        type: ["Water"],
        category: "Sea Lion",
        region: "Kanto"
    },
    {
        name: "Dewgong",
        imageUrl: "images/087Dewgong.png",
        number: "087",
        type: ["Water", "Ice"],
        category: "Sea Lion",
        region: "Kanto"
    },
    {
        name: "Grimer",
        imageUrl: "images/088Grimer.png",
        number: "088",
        type: ["Poison"],
        category: "Sludge",
        region: "Kanto"
    },
    {
        name: "Muk",
        imageUrl: "images/089Muk.png",
        number: "089",
        type: ["Poison"],
        category: "Sludge",
        region: "Kanto"
    },
    {
        name: "Shellder",
        imageUrl: "images/090Shellder.png",
        number: "090",
        type: ["Water"],
        category: "Bivalve",
        region: "Kanto"
    },
    {
        name: "Cloyster",
        imageUrl: "images/091Cloyster.png",
        number: "091",
        type: ["Water", "Ice"],
        category: "Bivalve",
        region: "Kanto"
    },
    {
        name: "Gastly",
        imageUrl: "images/092Gastly.png",
        number: "092",
        type: ["Ghost", "Poison"],
        category: "Gas",
        region: "Kanto"
    },
    {
        name: "Haunter",
        imageUrl: "images/093Haunter.png",
        number: "093",
        type: ["Ghost", "Poison"],
        category: "Gas",
        region: "Kanto"
    },
    {
        name: "Gengar",
        imageUrl: "images/094Gengar.png",
        number: "094",
        type: ["Ghost", "Poison"],
        category: "Shadow",
        region: "Kanto"
    },
    {
        name: "Onix",
        imageUrl: "images/095Onix.png",
        number: "095",
        type: ["Rock", "Ground"],
        category: "Rock Snake",
        region: "Kanto"
    },
    {
        name: "Drowzee",
        imageUrl: "images/096Drowzee.png",
        number: "096",
        type: ["Psychic"],
        category: "Hypnosis",
        region: "Kanto"
    },
    {
        name: "Hypno",
        imageUrl: "images/097Hypno.png",
        number: "097",
        type: ["Psychic"],
        category: "Hypnosis",
        region: "Kanto"
    },
    {
        name: "Krabby",
        imageUrl: "images/098Krabby.png",
        number: "098",
        type: ["Water"],
        category: "River Crab",
        region: "Kanto"
    },
    {
        name: "Kingler",
        imageUrl: "images/099Kingler.png",
        number: "099",
        type: ["Water"],
        category: "Pincer",
        region: "Kanto"
    },
    {
        name: "Voltorb",
        imageUrl: "images/100Voltorb.png",
        number: "100",
        type: ["Electric"],
        category: "Ball",
        region: "Kanto"
    },
    {
        name: "Electrode",
        imageUrl: "images/101Electrode.png",
        number: "101",
        type: ["Electric"],
        category: "Ball",
        region: "Kanto"
    },
    {
        name: "Exeggcute",
        imageUrl: "images/102Exeggcute.png",
        number: "102",
        type: ["Grass", "Psychic"],
        category: "Egg",
        region: "Kanto"
    },
    {
        name: "Exeggutor",
        imageUrl: "images/103Exeggutor.png",
        number: "103",
        type: ["Grass", "Psychic"],
        category: "Coconut",
        region: "Kanto"
    },
    {
        name: "Cubone",
        imageUrl: "images/104Cubone.png",
        number: "104",
        type: ["Ground"],
        category: "Lonely",
        region: "Kanto"
    },
    {
        name: "Marowak",
        imageUrl: "images/105Marowak.png",
        number: "105",
        type: ["Ground"],
        category: "Bone Keeper",
        region: "Kanto"
    },
    {
        name: "Hitmonlee",
        imageUrl: "images/106Hitmonlee.png",
        number: "106",
        type: ["Fighting"],
        category: "Kicking",
        region: "Kanto"
    },
    {
        name: "Hitmonchan",
        imageUrl: "images/107Hitmonchan.png",
        number: "107",
        type: ["Fighting"],
        category: "Punching",
        region: "Kanto"
    },
    {
        name: "Lickitung",
        imageUrl: "images/108Lickitung.png",
        number: "108",
        type: ["Normal"],
        category: "Licking",
        region: "Kanto"
    },
    {
        name: "Koffing",
        imageUrl: "images/109Koffing.png",
        number: "109",
        type: ["Poison"],
        category: "Poison Gas",
        region: "Kanto"
    },
    {
        name: "Weezing",
        imageUrl: "images/110Weezing.png",
        number: "110",
        type: ["Poison"],
        category: "Poison Gas",
        region: "Kanto"
    },
    {
        name: "Rhyhorn",
        imageUrl: "images/111Rhyhorn.png",
        number: "111",
        type: ["Ground", "Rock"],
        category: "Spikes",
        region: "Kanto"
    },
    {
        name: "Rhydon",
        imageUrl: "images/112Rhydon.png",
        number: "112",
        type: ["Ground", "Rock"],
        category: "Drill",
        region: "Kanto"
    },
    {
        name: "Chansey",
        imageUrl: "images/113Chansey.png",
        number: "113",
        type: ["Normal"],
        category: "Egg",
        region: "Kanto"
    },
    {
        name: "Tangela",
        imageUrl: "images/114Tangela.png",
        number: "114",
        type: ["Grass"],
        category: "Vine",
        region: "Kanto"
    },
    {
        name: "Kangaskhan",
        imageUrl: "images/115Kangaskhan.png",
        number: "115",
        type: ["Normal"],
        category: "Parent",
        region: "Kanto"
    },
    {
        name: "Horsea",
        imageUrl: "images/116Horsea.png",
        number: "116",
        type: ["Water"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Seadra",
        imageUrl: "images/117Seadra.png",
        number: "117",
        type: ["Water"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Goldeen",
        imageUrl: "images/118Goldeen.png",
        number: "118",
        type: ["Water"],
        category: "Goldfish",
        region: "Kanto"
    },
    {
        name: "Seaking",
        imageUrl: "images/119Seaking.png",
        number: "119",
        type: ["Water"],
        category: "Goldfish",
        region: "Kanto"
    },
    {
        name: "Staryu",
        imageUrl: "images/120Staryu.png",
        number: "120",
        type: ["Water"],
        category: "Star Shape",
        region: "Kanto"
    },
    {
        name: "Starmie",
        imageUrl: "images/121Starmie.png",
        number: "121",
        type: ["Water", "Psychic"],
        category: "Mysterious",
        region: "Kanto"
    },
    {
        name: "Mr. Mime",
        imageUrl: "images/122Mr._Mime.png",
        number: "122",
        type: ["Psychic", "Fairy"],
        category: "Barrier",
        region: "Kanto"
    },
    {
        name: "Scyther",
        imageUrl: "images/123Scyther.png",
        number: "123",
        type: ["Bug", "Flying"],
        category: "Mantis",
        region: "Kanto"
    },
    {
        name: "Jynx",
        imageUrl: "images/124Jynx.png",
        number: "124",
        type: ["Ice", "Psychic"],
        category: "Human Shape",
        region: "Kanto"
    },
    {
        name: "Electabuzz",
        imageUrl: "images/125Electabuzz.png",
        number: "125",
        type: ["Electric"],
        category: "Electric",
        region: "Kanto"
    },
    {
        name: "Magmar",
        imageUrl: "images/126Magmar.png",
        number: "126",
        type: ["Fire"],
        category: "Spitfire",
        region: "Kanto"
    },
    {
        name: "Pinsir",
        imageUrl: "images/127Pinsir.png",
        number: "127",
        type: ["Bug"],
        category: "Stag Beetle",
        region: "Kanto"
    },
    {
        name: "Tauros",
        imageUrl: "images/128Tauros.png",
        number: "128",
        type: ["Normal"],
        category: "Wild Bull",
        region: "Kanto"
    },
    {
        name: "Magikarp",
        imageUrl: "images/129Magikarp.png",
        number: "129",
        type: ["Water"],
        category: "Fish",
        region: "Kanto"
    },
    {
        name: "Gyarados",
        imageUrl: "images/130Gyarados.png",
        number: "130",
        type: ["Water", "Flying"],
        category: "Atrocious",
        region: "Kanto"
    },
    {
        name: "Lapras",
        imageUrl: "images/131Lapras.png",
        number: "131",
        type: ["Water", "Ice"],
        category: "Transport",
        region: "Kanto"
    },
    {
        name: "Ditto",
        imageUrl: "images/132Ditto.png",
        number: "132",
        type: ["Normal"],
        category: "Transform",
        region: "Kanto"
    },
    {
        name: "Eevee",
        imageUrl: "images/133Eevee.png",
        number: "133",
        type: ["Normal"],
        category: "Evolution",
        region: "Kanto"
    },
    {
        name: "Vaporeon",
        imageUrl: "images/134Vaporeon.png",
        number: "134",
        type: ["Water"],
        category: "Bubble Jet",
        region: "Kanto"
    },
    {
        name: "Jolteon",
        imageUrl: "images/135Jolteon.png",
        number: "135",
        type: ["Electric"],
        category: "Lightning",
        region: "Kanto"
    },
    {
        name: "Flareon",
        imageUrl: "images/136Flareon.png",
        number: "136",
        type: ["Fire"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Porygon",
        imageUrl: "images/137Porygon.png",
        number: "137",
        type: ["Normal"],
        category: "Virtual",
        region: "Kanto"
    },
    {
        name: "Omanyte",
        imageUrl: "images/138Omanyte.png",
        number: "138",
        type: ["Rock", "Water"],
        category: "Spiral",
        region: "Kanto"
    },
    {
        name: "Omastar",
        imageUrl: "images/139Omastar.png",
        number: "139",
        type: ["Rock", "Water"],
        category: "Spiral",
        region: "Kanto"
    },
    {
        name: "Kabuto",
        imageUrl: "images/140Kabuto.png",
        number: "140",
        type: ["Rock", "Water"],
        category: "Shellfish",
        region: "Kanto"
    },
    {
        name: "Kabutops",
        imageUrl: "images/141Kabutops.png",
        number: "141",
        type: ["Rock", "Water"],
        category: "Shellfish",
        region: "Kanto"
    },
    {
        name: "Aerodactyl",
        imageUrl: "images/142Aerodactyl.png",
        number: "142",
        type: ["Rock", "Flying"],
        category: "Fossil",
        region: "Kanto"
    },
    {
        name: "Snorlax",
        imageUrl: "images/143Snorlax.png",
        number: "143",
        type: ["Normal"],
        category: "Sleeping",
        region: "Kanto"
    },
    {
        name: "Articuno",
        imageUrl: "images/144Articuno.png",
        number: "144",
        type: ["Ice", "Flying"],
        category: "Freeze",
        region: "Kanto"
    },
    {
        name: "Zapdos",
        imageUrl: "images/145Zapdos.png",
        number: "145",
        type: ["Electric", "Flying"],
        category: "Electric",
        region: "Kanto"
    },
    {
        name: "Moltres",
        imageUrl: "images/146Moltres.png",
        number: "146",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto"
    },
    {
        name: "Dratini",
        imageUrl: "images/147Dratini.png",
        number: "147",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Dragonair",
        imageUrl: "images/148Dragonair.png",
        number: "148",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Dragonite",
        imageUrl: "images/149Dragonite.png",
        number: "149",
        type: ["Dragon", "Flying"],
        category: "Dragon",
        region: "Kanto"
    },
    {
        name: "Mewtwo",
        imageUrl: "images/150Mewtwo.png",
        number: "150",
        type: ["Psychic"],
        category: "Genetic",
        region: "Kanto"
    },
    {
        name: "Mew",
        imageUrl: "images/151Mew.png",
        number: "151",
        type: ["Psychic"],
        category: "New Species",
        region: "Kanto"
    },
    {
        name: "Chikorita",
        imageUrl: "images/152Chikorita.png",
        number: "152",
        type: ["Grass"],
        category: "Leaf",
        region: "Johto"
    },
    {
        name: "Bayleef",
        imageUrl: "images/153Bayleef.png",
        number: "153",
        type: ["Grass"],
        category: "Leaf",
        region: "Johto"
    },
    {
        name: "Meganium",
        imageUrl: "images/154Meganium.png",
        number: "154",
        type: ["Grass"],
        category: "Herb",
        region: "Johto"
    },
    {
        name: "Cyndaquil",
        imageUrl: "images/155Cyndaquil.png",
        number: "155",
        type: ["Fire"],
        category: "Fire Mouse",
        region: "Johto"
    },
    {
        name: "Quilava",
        imageUrl: "images/156Quilava.png",
        number: "156",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto"
    },
    {
        name: "Typhlosion",
        imageUrl: "images/157Typhlosion.png",
        number: "157",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto"
    },
    {
        name: "Totodile",
        imageUrl: "images/158Totodile.png",
        number: "158",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto"
    },
    {
        name: "Croconaw",
        imageUrl: "images/159Croconaw.png",
        number: "159",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto"
    },
    {
        name: "Feraligatr",
        imageUrl: "images/160Feraligatr.png",
        number: "160",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto"
    },
    {
        name: "Sentret",
        imageUrl: "images/161Sentret.png",
        number: "161",
        type: ["Normal"],
        category: "Scout",
        region: "Johto"
    },
    {
        name: "Furret",
        imageUrl: "images/162Furret.png",
        number: "162",
        type: ["Normal"],
        category: "Long Body",
        region: "Johto"
    },
    {
        name: "Hoothoot",
        imageUrl: "images/163Hoothoot.png",
        number: "163",
        type: ["Normal", "Flying"],
        category: "Owl",
        region: "Johto"
    },
    {
        name: "Noctowl",
        imageUrl: "images/164Noctowl.png",
        number: "164",
        type: ["Normal", "Flying"],
        category: "Owl",
        region: "Johto"
    },
    {
        name: "Ledyba",
        imageUrl: "images/165Ledyba.png",
        number: "165",
        type: ["Bug", "Flying"],
        category: "Five Star",
        region: "Johto"
    },
    {
        name: "Ledian",
        imageUrl: "images/166Ledian.png",
        number: "166",
        type: ["Bug", "Flying"],
        category: "Five Star",
        region: "Johto"
    },
    {
        name: "Spinarak",
        imageUrl: "images/167Spinarak.png",
        number: "167",
        type: ["Bug", "Poison"],
        category: "String Spit",
        region: "Johto"
    },
    {
        name: "Ariados",
        imageUrl: "images/168Ariados.png",
        number: "168",
        type: ["Bug", "Poison"],
        category: "Long Leg",
        region: "Johto"
    },
    {
        name: "Crobat",
        imageUrl: "images/169Crobat.png",
        number: "169",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Johto"
    },
    {
        name: "Chinchou",
        imageUrl: "images/170Chinchou.png",
        number: "170",
        type: ["Water", "Electric"],
        category: "Angler",
        region: "Johto"
    },
    {
        name: "Lanturn",
        imageUrl: "images/171Lanturn.png",
        number: "171",
        type: ["Water", "Electric"],
        category: "Light",
        region: "Johto"
    },
    {
        name: "Pichu",
        imageUrl: "images/172Pichu.png",
        number: "172",
        type: ["Electric"],
        category: "Tiny Mouse",
        region: "Johto"
    },
    {
        name: "Cleffa",
        imageUrl: "images/173Cleffa.png",
        number: "173",
        type: ["Fairy"],
        category: "Star Shape",
        region: "Johto"
    },
    {
        name: "Igglybuff",
        imageUrl: "images/174Igglybuff.png",
        number: "174",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Johto"
    },
    {
        name: "Togepi",
        imageUrl: "images/175Togepi.png",
        number: "175",
        type: ["Fairy"],
        category: "Spike Ball",
        region: "Johto"
    },
    {
        name: "Togetic",
        imageUrl: "images/176Togetic.png",
        number: "176",
        type: ["Fairy", "Flying"],
        category: "Happiness",
        region: "Johto"
    },
    {
        name: "Natu",
        imageUrl: "images/177Natu.png",
        number: "177",
        type: ["Psychic", "Flying"],
        category: "Tiny Bird",
        region: "Johto"
    },
    {
        name: "Xatu",
        imageUrl: "images/178Xatu.png",
        number: "178",
        type: ["Psychic", "Flying"],
        category: "Mystic",
        region: "Johto"
    },
    {
        name: "Mareep",
        imageUrl: "images/179Mareep.png",
        number: "179",
        type: ["Electric"],
        category: "Wool",
        region: "Johto"
    },
    {
        name: "Flaaffy",
        imageUrl: "images/180Flaaffy.png",
        number: "180",
        type: ["Electric"],
        category: "Wool",
        region: "Johto"
    },
    {
        name: "Ampharos",
        imageUrl: "images/181Ampharos.png",
        number: "181",
        type: ["Electric"],
        category: "Light",
        region: "Johto"
    },
    {
        name: "Bellossom",
        imageUrl: "images/182Bellossom.png",
        number: "182",
        type: ["Grass"],
        category: "Flower",
        region: "Johto"
    },
    {
        name: "Marill",
        imageUrl: "images/183Marill.png",
        number: "183",
        type: ["Water", "Fairy"],
        category: "Aqua Mouse",
        region: "Johto"
    },
    {
        name: "Azumarill",
        imageUrl: "images/184Azumarill.png",
        number: "184",
        type: ["Water", "Fairy"],
        category: "Aqua Rabbit",
        region: "Johto"
    },
    {
        name: "Sudowoodo",
        imageUrl: "images/185Sudowoodo.png",
        number: "185",
        type: ["Rock"],
        category: "Imitation",
        region: "Johto"
    },
    {
        name: "Politoed",
        imageUrl: "images/186Politoed.png",
        number: "186",
        type: ["Water"],
        category: "Frog",
        region: "Johto"
    },
    {
        name: "Hoppip",
        imageUrl: "images/187Hoppip.png",
        number: "187",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto"
    },
    {
        name: "Skiploom",
        imageUrl: "images/188Skiploom.png",
        number: "188",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto"
    },
    {
        name: "Jumpluff",
        imageUrl: "images/189Jumpluff.png",
        number: "189",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto"
    },
    {
        name: "Aipom",
        imageUrl: "images/190Aipom.png",
        number: "190",
        type: ["Normal"],
        category: "Long Tail",
        region: "Johto"
    },
    {
        name: "Sunkern",
        imageUrl: "images/191Sunkern.png",
        number: "191",
        type: ["Grass"],
        category: "Seed",
        region: "Johto"
    },
    {
        name: "Sunflora",
        imageUrl: "images/192Sunflora.png",
        number: "192",
        type: ["Grass"],
        category: "Sun",
        region: "Johto"
    },
    {
        name: "Yanma",
        imageUrl: "images/193Yanma.png",
        number: "193",
        type: ["Bug", "Flying"],
        category: "Clear Wing",
        region: "Johto"
    },
    {
        name: "Wooper",
        imageUrl: "images/194Wooper.png",
        number: "194",
        type: ["Water", "Ground"],
        category: "Water Fish",
        region: "Johto"
    },
    {
        name: "Quagsire",
        imageUrl: "images/195Quagsire.png",
        number: "195",
        type: ["Water", "Ground"],
        category: "Water Fish",
        region: "Johto"
    },
    {
        name: "Espeon",
        imageUrl: "images/196Espeon.png",
        number: "196",
        type: ["Psychic"],
        category: "Sun",
        region: "Johto"
    },
    {
        name: "Umbreon",
        imageUrl: "images/197Umbreon.png",
        number: "197",
        type: ["Dark"],
        category: "Moonlight",
        region: "Johto"
    },
    {
        name: "Murkrow",
        imageUrl: "images/198Murkrow.png",
        number: "198",
        type: ["Dark", "Flying"],
        category: "Darkness",
        region: "Johto"
    },
    {
        name: "Slowking",
        imageUrl: "images/199Slowking.png",
        number: "199",
        type: ["Water", "Psychic"],
        category: "Royal",
        region: "Johto"
    },
    {
        name: "Misdreavus",
        imageUrl: "images/200Misdreavus.png",
        number: "200",
        type: ["Ghost"],
        category: "Screech",
        region: "Johto"
    },
    {
        name: "Unown",
        imageUrl: "images/201Unown.png",
        number: "201",
        type: ["Psychic"],
        category: "Symbol",
        region: "Johto"
    },
    {
        name: "Wobbuffet",
        imageUrl: "images/202Wobbuffet.png",
        number: "202",
        type: ["Psychic"],
        category: "Patient",
        region: "Johto"
    },
    {
        name: "Girafarig",
        imageUrl: "images/203Girafarig.png",
        number: "203",
        type: ["Normal", "Psychic"],
        category: "Long Neck",
        region: "Johto"
    },
    {
        name: "Pineco",
        imageUrl: "images/204Pineco.png",
        number: "204",
        type: ["Bug"],
        category: "Bagworm",
        region: "Johto"
    },
    {
        name: "Forretress",
        imageUrl: "images/205Forretress.png",
        number: "205",
        type: ["Bug", "Steel"],
        category: "Bagworm",
        region: "Johto"
    },
    {
        name: "Dunsparce",
        imageUrl: "images/206Dunsparce.png",
        number: "206",
        type: ["Normal"],
        category: "Land Snake",
        region: "Johto"
    },
    {
        name: "Gligar",
        imageUrl: "images/207Gligar.png",
        number: "207",
        type: ["Ground", "Flying"],
        category: "Fly Scorpion",
        region: "Johto"
    },
    {
        name: "Steelix",
        imageUrl: "images/208Steelix.png",
        number: "208",
        type: ["Steel", "Ground"],
        category: "Iron Snake",
        region: "Johto"
    },
    {
        name: "Snubbull",
        imageUrl: "images/209Snubbull.png",
        number: "209",
        type: ["Fairy"],
        category: "Fairy",
        region: "Johto"
    },
    {
        name: "Granbull",
        imageUrl: "images/210Granbull.png",
        number: "210",
        type: ["Fairy"],
        category: "Fairy",
        region: "Johto"
    },
    {
        name: "Qwilfish",
        imageUrl: "images/211Qwilfish.png",
        number: "211",
        type: ["Water", "Poison"],
        category: "Balloon",
        region: "Johto"
    },
    {
        name: "Scizor",
        imageUrl: "images/212Scizor.png",
        number: "212",
        type: ["Bug", "Steel"],
        category: "Pincer",
        region: "Johto"
    },
    {
        name: "Shuckle",
        imageUrl: "images/213Shuckle.png",
        number: "213",
        type: ["Bug", "Rock"],
        category: "Mold",
        region: "Johto"
    },
    {
        name: "Heracross",
        imageUrl: "images/214Heracross.png",
        number: "214",
        type: ["Bug", "Fighting"],
        category: "Single Horn",
        region: "Johto"
    },
    {
        name: "Sneasel",
        imageUrl: "images/215Sneasel.png",
        number: "215",
        type: ["Dark", "Ice"],
        category: "Sharp Claw",
        region: "Johto"
    },
    {
        name: "Teddiursa",
        imageUrl: "images/216Teddiursa.png",
        number: "216",
        type: ["Normal"],
        category: "Little Bear",
        region: "Johto"
    },
    {
        name: "Ursaring",
        imageUrl: "images/217Ursaring.png",
        number: "217",
        type: ["Normal"],
        category: "Hibernator",
        region: "Johto"
    },
    {
        name: "Slugma",
        imageUrl: "images/218Slugma.png",
        number: "218",
        type: ["Fire"],
        category: "Lava",
        region: "Johto"
    },
    {
        name: "Magcargo",
        imageUrl: "images/219Magcargo.png",
        number: "219",
        type: ["Fire", "Rock"],
        category: "Lava",
        region: "Johto"
    },
    {
        name: "Swinub",
        imageUrl: "images/220Swinub.png",
        number: "220",
        type: ["Ice", "Ground"],
        category: "Pig",
        region: "Johto"
    },
    {
        name: "Piloswine",
        imageUrl: "images/221Piloswine.png",
        number: "221",
        type: ["Ice", "Ground"],
        category: "Swine",
        region: "Johto"
    },
    {
        name: "Corsola",
        imageUrl: "images/222Corsola.png",
        number: "222",
        type: ["Water", "Rock"],
        category: "Coral",
        region: "Johto"
    },
    {
        name: "Remoraid",
        imageUrl: "images/223Remoraid.png",
        number: "223",
        type: ["Water"],
        category: "Jet",
        region: "Johto"
    },
    {
        name: "Octillery",
        imageUrl: "images/224Octillery.png",
        number: "224",
        type: ["Water"],
        category: "Jet",
        region: "Johto"
    },
    {
        name: "Delibird",
        imageUrl: "images/225Delibird.png",
        number: "225",
        type: ["Ice", "Flying"],
        category: "Delivery",
        region: "Johto"
    },
    {
        name: "Mantine",
        imageUrl: "images/226Mantine.png",
        number: "226",
        type: ["Water", "Flying"],
        category: "Kite",
        region: "Johto"
    },
    {
        name: "Skarmory",
        imageUrl: "images/227Skarmory.png",
        number: "227",
        type: ["Steel", "Flying"],
        category: "Armor Bird",
        region: "Johto"
    },
    {
        name: "Houndour",
        imageUrl: "images/228Houndour.png",
        number: "228",
        type: ["Dark", "Fire"],
        category: "Dark",
        region: "Johto"
    },
    {
        name: "Houndoom",
        imageUrl: "images/229Houndoom.png",
        number: "229",
        type: ["Dark", "Fire"],
        category: "Dark",
        region: "Johto"
    },
    {
        name: "Kingdra",
        imageUrl: "images/230Kingdra.png",
        number: "230",
        type: ["Water", "Dragon"],
        category: "Dragon",
        region: "Johto"
    },
    {
        name: "Phanpy",
        imageUrl: "images/231Phanpy.png",
        number: "231",
        type: ["Ground"],
        category: "Long Nose",
        region: "Johto"
    },
    {
        name: "Donphan",
        imageUrl: "images/232Donphan.png",
        number: "232",
        type: ["Ground"],
        category: "Armor",
        region: "Johto"
    },
    {
        name: "Porygon2",
        imageUrl: "images/233Porygon2.png",
        number: "233",
        type: ["Normal"],
        category: "Virtual",
        region: "Johto"
    },
    {
        name: "Stantler",
        imageUrl: "images/234Stantler.png",
        number: "234",
        type: ["Normal"],
        category: "Big Horn",
        region: "Johto"
    },
    {
        name: "Smeargle",
        imageUrl: "images/235Smeargle.png",
        number: "235",
        type: ["Normal"],
        category: "Painter",
        region: "Johto"
    },
    {
        name: "Tyrogue",
        imageUrl: "images/236Tyrogue.png",
        number: "236",
        type: ["Fighting"],
        category: "Scuffle",
        region: "Johto"
    },
    {
        name: "Hitmontop",
        imageUrl: "images/237Hitmontop.png",
        number: "237",
        type: ["Fighting"],
        category: "Handstand",
        region: "Johto"
    },
    {
        name: "Smoochum",
        imageUrl: "images/238Smoochum.png",
        number: "238",
        type: ["Ice", "Psychic"],
        category: "Kiss",
        region: "Johto"
    },
    {
        name: "Elekid",
        imageUrl: "images/239Elekid.png",
        number: "239",
        type: ["Electric"],
        category: "Electric",
        region: "Johto"
    },
    {
        name: "Magby",
        imageUrl: "images/240Magby.png",
        number: "240",
        type: ["Fire"],
        category: "Live Coal",
        region: "Johto"
    },
    {
        name: "Miltank",
        imageUrl: "images/241Miltank.png",
        number: "241",
        type: ["Normal"],
        category: "Milk Cow",
        region: "Johto"
    },
    {
        name: "Blissey",
        imageUrl: "images/242Blissey.png",
        number: "242",
        type: ["Normal"],
        category: "Happiness",
        region: "Johto"
    },
    {
        name: "Raikou",
        imageUrl: "images/243Raikou.png",
        number: "243",
        type: ["Electric"],
        category: "Thunder",
        region: "Johto"
    },
    {
        name: "Entei",
        imageUrl: "images/244Entei.png",
        number: "244",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto"
    },
    {
        name: "Suicune",
        imageUrl: "images/245Suicune.png",
        number: "245",
        type: ["Water"],
        category: "Aurora",
        region: "Johto"
    },
    {
        name: "Larvitar",
        imageUrl: "images/246Larvitar.png",
        number: "246",
        type: ["Rock", "Ground"],
        category: "Rock Skin",
        region: "Johto"
    },
    {
        name: "Pupitar",
        imageUrl: "images/247Pupitar.png",
        number: "247",
        type: ["Rock", "Ground"],
        category: "Hard Shell",
        region: "Johto"
    },
    {
        name: "Tyranitar",
        imageUrl: "images/248Tyranitar.png",
        number: "248",
        type: ["Rock", "Dark"],
        category: "Armor",
        region: "Johto"
    },
    {
        name: "Lugia",
        imageUrl: "images/249Lugia.png",
        number: "249",
        type: ["Psychic", "Flying"],
        category: "Diving",
        region: "Johto"
    },
    {
        name: "Ho-Oh",
        imageUrl: "images/250Ho-Oh.png",
        number: "250",
        type: ["Fire", "Flying"],
        category: "Rainbow",
        region: "Johto"
    },
    {
        name: "Celebi",
        imageUrl: "images/251Celebi.png",
        number: "251",
        type: ["Psychic", "Grass"],
        category: "Time Travel",
        region: "Johto"
    },
    {
        name: "Treecko",
        imageUrl: "images/252Treecko.png",
        number: "252",
        type: ["Grass"],
        category: "Wood Gecko",
        region: "Hoenn"
    },
    {
        name: "Grovyle",
        imageUrl: "images/253Grovyle.png",
        number: "253",
        type: ["Grass"],
        category: "Wood Gecko",
        region: "Hoenn"
    },
    {
        name: "Sceptile",
        imageUrl: "images/254Sceptile.png",
        number: "254",
        type: ["Grass"],
        category: "Forest",
        region: "Hoenn"
    },
    {
        name: "Torchic",
        imageUrl: "images/255Torchic.png",
        number: "255",
        type: ["Fire"],
        category: "Chick",
        region: "Hoenn"
    },
    {
        name: "Combusken",
        imageUrl: "images/256Combusken.png",
        number: "256",
        type: ["Fire", "Fighting"],
        category: "Young Fowl",
        region: "Hoenn"
    },
    {
        name: "Blaziken",
        imageUrl: "images/257Blaziken.png",
        number: "257",
        type: ["Fire", "Fighting"],
        category: "Blaze",
        region: "Hoenn"
    },
    {
        name: "Mudkip",
        imageUrl: "images/258Mudkip.png",
        number: "258",
        type: ["Water"],
        category: "Mud Fish",
        region: "Hoenn"
    },
    {
        name: "Marshtomp",
        imageUrl: "images/259Marshtomp.png",
        number: "259",
        type: ["Water", "Ground"],
        category: "Mud Fish",
        region: "Hoenn"
    },
    {
        name: "Swampert",
        imageUrl: "images/260Swampert.png",
        number: "260",
        type: ["Water", "Ground"],
        category: "Mud Fish",
        region: "Hoenn"
    },
    {
        name: "Poochyena",
        imageUrl: "images/261Poochyena.png",
        number: "261",
        type: ["Dark"],
        category: "Bite",
        region: "Hoenn"
    },
    {
        name: "Mightyena",
        imageUrl: "images/262Mightyena.png",
        number: "262",
        type: ["Dark"],
        category: "Bite",
        region: "Hoenn"
    },
    {
        name: "Zigzagoon",
        imageUrl: "images/263Zigzagoon.png",
        number: "263",
        type: ["Normal"],
        category: "Tiny Raccoon",
        region: "Hoenn"
    },
    {
        name: "Linoone",
        imageUrl: "images/264Linoone.png",
        number: "264",
        type: ["Normal"],
        category: "Rushing",
        region: "Hoenn"
    },
    {
        name: "Wurmple",
        imageUrl: "images/265Wurmple.png",
        number: "265",
        type: ["Bug"],
        category: "Worm",
        region: "Hoenn"
    },
    {
        name: "Silcoon",
        imageUrl: "images/266Silcoon.png",
        number: "266",
        type: ["Bug"],
        category: "Cocoon",
        region: "Hoenn"
    },
    {
        name: "Beautifly",
        imageUrl: "images/267Beautifly.png",
        number: "267",
        type: ["Bug", "Flying"],
        category: "Butterfly",
        region: "Hoenn"
    },
    {
        name: "Cascoon",
        imageUrl: "images/268Cascoon.png",
        number: "268",
        type: ["Bug"],
        category: "Cocoon",
        region: "Hoenn"
    },
    {
        name: "Dustox",
        imageUrl: "images/269Dustox.png",
        number: "269",
        type: ["Bug", "Poison"],
        category: "Poison Moth",
        region: "Hoenn"
    },
    {
        name: "Lotad",
        imageUrl: "images/270Lotad.png",
        number: "270",
        type: ["Water", "Grass"],
        category: "Water Weed",
        region: "Hoenn"
    },
    {
        name: "Lombre",
        imageUrl: "images/271Lombre.png",
        number: "271",
        type: ["Water", "Grass"],
        category: "Jolly",
        region: "Hoenn"
    },
    {
        name: "Ludicolo",
        imageUrl: "images/272Ludicolo.png",
        number: "272",
        type: ["Water", "Grass"],
        category: "Carefree",
        region: "Hoenn"
    },
    {
        name: "Seedot",
        imageUrl: "images/273Seedot.png",
        number: "273",
        type: ["Grass"],
        category: "Acorn",
        region: "Hoenn"
    },
    {
        name: "Nuzleaf",
        imageUrl: "images/274Nuzleaf.png",
        number: "274",
        type: ["Grass", "Dark"],
        category: "Wily",
        region: "Hoenn"
    },
    {
        name: "Shiftry",
        imageUrl: "images/275Shiftry.png",
        number: "275",
        type: ["Grass", "Dark"],
        category: "Wicked",
        region: "Hoenn"
    },
    {
        name: "Taillow",
        imageUrl: "images/276Taillow.png",
        number: "276",
        type: ["Normal", "Flying"],
        category: "Tiny Swallow",
        region: "Hoenn"
    },
    {
        name: "Swellow",
        imageUrl: "images/277Swellow.png",
        number: "277",
        type: ["Normal", "Flying"],
        category: "Swallow",
        region: "Hoenn"
    },
    {
        name: "Wingull",
        imageUrl: "images/278Wingull.png",
        number: "278",
        type: ["Water", "Flying"],
        category: "Seagull",
        region: "Hoenn"
    },
    {
        name: "Pelipper",
        imageUrl: "images/279Pelipper.png",
        number: "279",
        type: ["Water", "Flying"],
        category: "Water Bird",
        region: "Hoenn"
    },
    {
        name: "Ralts",
        imageUrl: "images/280Ralts.png",
        number: "280",
        type: ["Psychic", "Fairy"],
        category: "Feeling",
        region: "Hoenn"
    },
    {
        name: "Kirlia",
        imageUrl: "images/281Kirlia.png",
        number: "281",
        type: ["Psychic", "Fairy"],
        category: "Emotion",
        region: "Hoenn"
    },
    {
        name: "Gardevoir",
        imageUrl: "images/282Gardevoir.png",
        number: "282",
        type: ["Psychic", "Fairy"],
        category: "Embrace",
        region: "Hoenn"
    },
    {
        name: "Surskit",
        imageUrl: "images/283Surskit.png",
        number: "283",
        type: ["Bug", "Water"],
        category: "Pond Skater",
        region: "Hoenn"
    },
    {
        name: "Masquerain",
        imageUrl: "images/284Masquerain.png",
        number: "284",
        type: ["Bug", "Flying"],
        category: "Eyeball",
        region: "Hoenn"
    },
    {
        name: "Shroomish",
        imageUrl: "images/285Shroomish.png",
        number: "285",
        type: ["Grass"],
        category: "Mushroom",
        region: "Hoenn"
    },
    {
        name: "Breloom",
        imageUrl: "images/286Breloom.png",
        number: "286",
        type: ["Grass", "Fighting"],
        category: "Mushroom",
        region: "Hoenn"
    },
    {
        name: "Slakoth",
        imageUrl: "images/287Slakoth.png",
        number: "287",
        type: ["Normal"],
        category: "Slacker",
        region: "Hoenn"
    },
    {
        name: "Vigoroth",
        imageUrl: "images/288Vigoroth.png",
        number: "288",
        type: ["Normal"],
        category: "Wild Monkey",
        region: "Hoenn"
    },
    {
        name: "Slaking",
        imageUrl: "images/289Slaking.png",
        number: "289",
        type: ["Normal"],
        category: "Lazy",
        region: "Hoenn"
    },
    {
        name: "Nincada",
        imageUrl: "images/290Nincada.png",
        number: "290",
        type: ["Bug", "Ground"],
        category: "Trainee",
        region: "Hoenn"
    },
    {
        name: "Ninjask",
        imageUrl: "images/291Ninjask.png",
        number: "291",
        type: ["Bug", "Flying"],
        category: "Ninja",
        region: "Hoenn"
    },
    {
        name: "Shedinja",
        imageUrl: "images/292Shedinja.png",
        number: "292",
        type: ["Bug", "Ghost"],
        category: "Shed",
        region: "Hoenn"
    },
    {
        name: "Whismur",
        imageUrl: "images/293Whismur.png",
        number: "293",
        type: ["Normal"],
        category: "Whisper",
        region: "Hoenn"
    },
    {
        name: "Loudred",
        imageUrl: "images/294Loudred.png",
        number: "294",
        type: ["Normal"],
        category: "Big Voice",
        region: "Hoenn"
    },
    {
        name: "Exploud",
        imageUrl: "images/295Exploud.png",
        number: "295",
        type: ["Normal"],
        category: "Loud Noise",
        region: "Hoenn"
    },
    {
        name: "Makuhita",
        imageUrl: "images/296Makuhita.png",
        number: "296",
        type: ["Fighting"],
        category: "Guts",
        region: "Hoenn"
    },
    {
        name: "Hariyama",
        imageUrl: "images/297Hariyama.png",
        number: "297",
        type: ["Fighting"],
        category: "Arm Thrust",
        region: "Hoenn"
    },
    {
        name: "Azurill",
        imageUrl: "images/298Azurill.png",
        number: "298",
        type: ["Normal", "Fairy"],
        category: "Polka Dot",
        region: "Hoenn"
    },
    {
        name: "Nosepass",
        imageUrl: "images/299Nosepass.png",
        number: "299",
        type: ["Rock"],
        category: "Compass",
        region: "Hoenn"
    },
    {
        name: "Skitty",
        imageUrl: "images/300Skitty.png",
        number: "300",
        type: ["Normal"],
        category: "Kitten",
        region: "Hoenn"
    },
    {
        name: "Delcatty",
        imageUrl: "images/301Delcatty.png",
        number: "301",
        type: ["Normal"],
        category: "Prim",
        region: "Hoenn"
    },
    {
        name: "Sableye",
        imageUrl: "images/302Sableye.png",
        number: "302",
        type: ["Dark", "Ghost"],
        category: "Darkness",
        region: "Hoenn"
    },
    {
        name: "Mawile",
        imageUrl: "images/303Mawile.png",
        number: "303",
        type: ["Steel", "Fairy"],
        category: "Deceiver",
        region: "Hoenn"
    },
    {
        name: "Aron",
        imageUrl: "images/304Aron.png",
        number: "304",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn"
    },
    {
        name: "Lairon",
        imageUrl: "images/305Lairon.png",
        number: "305",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn"
    },
    {
        name: "Aggron",
        imageUrl: "images/306Aggron.png",
        number: "306",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn"
    },
    {
        name: "Meditite",
        imageUrl: "images/307Meditite.png",
        number: "307",
        type: ["Fighting", "Psychic"],
        category: "Meditate",
        region: "Hoenn"
    },
    {
        name: "Medicham",
        imageUrl: "images/308Medicham.png",
        number: "308",
        type: ["Fighting", "Psychic"],
        category: "Meditate",
        region: "Hoenn"
    },
    {
        name: "Electrike",
        imageUrl: "images/309Electrike.png",
        number: "309",
        type: ["Electric"],
        category: "Lightning",
        region: "Hoenn"
    },
    {
        name: "Manectric",
        imageUrl: "images/310Manectric.png",
        number: "310",
        type: ["Electric"],
        category: "Discharge",
        region: "Hoenn"
    },
    {
        name: "Plusle",
        imageUrl: "images/311Plusle.png",
        number: "311",
        type: ["Electric"],
        category: "Cheering",
        region: "Hoenn"
    },
    {
        name: "Minun",
        imageUrl: "images/312Minun.png",
        number: "312",
        type: ["Electric"],
        category: "Cheering",
        region: "Hoenn"
    },
    {
        name: "Volbeat",
        imageUrl: "images/313Volbeat.png",
        number: "313",
        type: ["Bug"],
        category: "Firefly",
        region: "Hoenn"
    },
    {
        name: "Illumise",
        imageUrl: "images/314Illumise.png",
        number: "314",
        type: ["Bug"],
        category: "Firefly",
        region: "Hoenn"
    },
    {
        name: "Roselia",
        imageUrl: "images/315Roselia.png",
        number: "315",
        type: ["Grass", "Poison"],
        category: "Thorn",
        region: "Hoenn"
    },
    {
        name: "Gulpin",
        imageUrl: "images/316Gulpin.png",
        number: "316",
        type: ["Poison"],
        category: "Stomach",
        region: "Hoenn"
    },
    {
        name: "Swalot",
        imageUrl: "images/317Swalot.png",
        number: "317",
        type: ["Poison"],
        category: "Poison Bag",
        region: "Hoenn"
    },
    {
        name: "Carvanha",
        imageUrl: "images/318Carvanha.png",
        number: "318",
        type: ["Water", "Dark"],
        category: "Savage",
        region: "Hoenn"
    },
    {
        name: "Sharpedo",
        imageUrl: "images/319Sharpedo.png",
        number: "319",
        type: ["Water", "Dark"],
        category: "Brutal",
        region: "Hoenn"
    },
    {
        name: "Wailmer",
        imageUrl: "images/320Wailmer.png",
        number: "320",
        type: ["Water"],
        category: "Ball Whale",
        region: "Hoenn"
    },
    {
        name: "Wailord",
        imageUrl: "images/321Wailord.png",
        number: "321",
        type: ["Water"],
        category: "Float Whale",
        region: "Hoenn"
    },
    {
        name: "Numel",
        imageUrl: "images/322Numel.png",
        number: "322",
        type: ["Fire", "Ground"],
        category: "Numb",
        region: "Hoenn"
    },
    {
        name: "Camerupt",
        imageUrl: "images/323Camerupt.png",
        number: "323",
        type: ["Fire", "Ground"],
        category: "Eruption",
        region: "Hoenn"
    },
    {
        name: "Torkoal",
        imageUrl: "images/324Torkoal.png",
        number: "324",
        type: ["Fire"],
        category: "Coal",
        region: "Hoenn"
    },
    {
        name: "Spoink",
        imageUrl: "images/325Spoink.png",
        number: "325",
        type: ["Psychic"],
        category: "Bounce",
        region: "Hoenn"
    },
    {
        name: "Grumpig",
        imageUrl: "images/326Grumpig.png",
        number: "326",
        type: ["Psychic"],
        category: "Manipulate",
        region: "Hoenn"
    },
    {
        name: "Spinda",
        imageUrl: "images/327Spinda.png",
        number: "327",
        type: ["Normal"],
        category: "Spot Panda",
        region: "Hoenn"
    },
    {
        name: "Trapinch",
        imageUrl: "images/328Trapinch.png",
        number: "328",
        type: ["Ground"],
        category: "Ant Pit",
        region: "Hoenn"
    },
    {
        name: "Vibrava",
        imageUrl: "images/329Vibrava.png",
        number: "329",
        type: ["Ground", "Dragon"],
        category: "Vibration",
        region: "Hoenn"
    },
    {
        name: "Flygon",
        imageUrl: "images/330Flygon.png",
        number: "330",
        type: ["Ground", "Dragon"],
        category: "Mystic",
        region: "Hoenn"
    },
    {
        name: "Cacnea",
        imageUrl: "images/331Cacnea.png",
        number: "331",
        type: ["Grass"],
        category: "Cactus",
        region: "Hoenn"
    },
    {
        name: "Cacturne",
        imageUrl: "images/332Cacturne.png",
        number: "332",
        type: ["Grass", "Dark"],
        category: "Scarecrow",
        region: "Hoenn"
    },
    {
        name: "Swablu",
        imageUrl: "images/333Swablu.png",
        number: "333",
        type: ["Normal", "Flying"],
        category: "Cotton Bird",
        region: "Hoenn"
    },
    {
        name: "Altaria",
        imageUrl: "images/334Altaria.png",
        number: "334",
        type: ["Dragon", "Flying"],
        category: "Humming",
        region: "Hoenn"
    },
    {
        name: "Zangoose",
        imageUrl: "images/335Zangoose.png",
        number: "335",
        type: ["Normal"],
        category: "Cat Ferret",
        region: "Hoenn"
    },
    {
        name: "Seviper",
        imageUrl: "images/336Seviper.png",
        number: "336",
        type: ["Poison"],
        category: "Fang Snake",
        region: "Hoenn"
    },
    {
        name: "Lunatone",
        imageUrl: "images/337Lunatone.png",
        number: "337",
        type: ["Rock", "Psychic"],
        category: "Meteorite",
        region: "Hoenn"
    },
    {
        name: "Solrock",
        imageUrl: "images/338Solrock.png",
        number: "338",
        type: ["Rock", "Psychic"],
        category: "Meteorite",
        region: "Hoenn"
    },
    {
        name: "Barboach",
        imageUrl: "images/339Barboach.png",
        number: "339",
        type: ["Water", "Ground"],
        category: "Whiskers",
        region: "Hoenn"
    },
    {
        name: "Whiscash",
        imageUrl: "images/340Whiscash.png",
        number: "340",
        type: ["Water", "Ground"],
        category: "Whiskers",
        region: "Hoenn"
    },
    {
        name: "Corphish",
        imageUrl: "images/341Corphish.png",
        number: "341",
        type: ["Water"],
        category: "Ruffian",
        region: "Hoenn"
    },
    {
        name: "Crawdaunt",
        imageUrl: "images/342Crawdaunt.png",
        number: "342",
        type: ["Water", "Dark"],
        category: "Rogue",
        region: "Hoenn"
    },
    {
        name: "Baltoy",
        imageUrl: "images/343Baltoy.png",
        number: "343",
        type: ["Ground", "Psychic"],
        category: "Clay Doll",
        region: "Hoenn"
    },
    {
        name: "Claydol",
        imageUrl: "images/344Claydol.png",
        number: "344",
        type: ["Ground", "Psychic"],
        category: "Clay Doll",
        region: "Hoenn"
    },
    {
        name: "Lileep",
        imageUrl: "images/345Lileep.png",
        number: "345",
        type: ["Rock", "Grass"],
        category: "Sea Lily",
        region: "Hoenn"
    },
    {
        name: "Cradily",
        imageUrl: "images/346Cradily.png",
        number: "346",
        type: ["Rock", "Grass"],
        category: "Barnacle",
        region: "Hoenn"
    },
    {
        name: "Anorith",
        imageUrl: "images/347Anorith.png",
        number: "347",
        type: ["Rock", "Bug"],
        category: "Old Shrimp",
        region: "Hoenn"
    },
    {
        name: "Armaldo",
        imageUrl: "images/348Armaldo.png",
        number: "348",
        type: ["Rock", "Bug"],
        category: "Plate",
        region: "Hoenn"
    },
    {
        name: "Feebas",
        imageUrl: "images/349Feebas.png",
        number: "349",
        type: ["Water"],
        category: "Fish",
        region: "Hoenn"
    },
    {
        name: "Milotic",
        imageUrl: "images/350Milotic.png",
        number: "350",
        type: ["Water"],
        category: "Tender",
        region: "Hoenn"
    },
    {
        name: "Castform",
        imageUrl: "images/351Castform.png",
        number: "351",
        type: ["Normal"],
        category: "Weather",
        region: "Hoenn"
    },
    {
        name: "Kecleon",
        imageUrl: "images/352Kecleon.png",
        number: "352",
        type: ["Normal"],
        category: "Color Swap",
        region: "Hoenn"
    },
    {
        name: "Shuppet",
        imageUrl: "images/353Shuppet.png",
        number: "353",
        type: ["Ghost"],
        category: "Puppet",
        region: "Hoenn"
    },
    {
        name: "Banette",
        imageUrl: "images/354Banette.png",
        number: "354",
        type: ["Ghost"],
        category: "Marionette",
        region: "Hoenn"
    },
    {
        name: "Duskull",
        imageUrl: "images/355Duskull.png",
        number: "355",
        type: ["Ghost"],
        category: "Requiem",
        region: "Hoenn"
    },
    {
        name: "Dusclops",
        imageUrl: "images/356Dusclops.png",
        number: "356",
        type: ["Ghost"],
        category: "Beckon",
        region: "Hoenn"
    },
    {
        name: "Tropius",
        imageUrl: "images/357Tropius.png",
        number: "357",
        type: ["Grass", "Flying"],
        category: "Fruit",
        region: "Hoenn"
    },
    {
        name: "Chimecho",
        imageUrl: "images/358Chimecho.png",
        number: "358",
        type: ["Psychic"],
        category: "Wind Chime",
        region: "Hoenn"
    },
    {
        name: "Absol",
        imageUrl: "images/359Absol.png",
        number: "359",
        type: ["Dark"],
        category: "Disaster",
        region: "Hoenn"
    },
    {
        name: "Wynaut",
        imageUrl: "images/360Wynaut.png",
        number: "360",
        type: ["Psychic"],
        category: "Bright",
        region: "Hoenn"
    },
    {
        name: "Snorunt",
        imageUrl: "images/361Snorunt.png",
        number: "361",
        type: ["Ice"],
        category: "Snow Hat",
        region: "Hoenn"
    },
    {
        name: "Glalie",
        imageUrl: "images/362Glalie.png",
        number: "362",
        type: ["Ice"],
        category: "Face",
        region: "Hoenn"
    },
    {
        name: "Spheal",
        imageUrl: "images/363Spheal.png",
        number: "363",
        type: ["Ice", "Water"],
        category: "Clap",
        region: "Hoenn"
    },
    {
        name: "Sealeo",
        imageUrl: "images/364Sealeo.png",
        number: "364",
        type: ["Ice", "Water"],
        category: "Ball Roll",
        region: "Hoenn"
    },
    {
        name: "Walrein",
        imageUrl: "images/365Walrein.png",
        number: "365",
        type: ["Ice", "Water"],
        category: "Ice Break",
        region: "Hoenn"
    },
    {
        name: "Clamperl",
        imageUrl: "images/366Clamperl.png",
        number: "366",
        type: ["Water"],
        category: "Bivalve",
        region: "Hoenn"
    },
    {
        name: "Huntail",
        imageUrl: "images/367Huntail.png",
        number: "367",
        type: ["Water"],
        category: "Deep Sea",
        region: "Hoenn"
    },
    {
        name: "Gorebyss",
        imageUrl: "images/368Gorebyss.png",
        number: "368",
        type: ["Water"],
        category: "South Sea",
        region: "Hoenn"
    },
    {
        name: "Relicanth",
        imageUrl: "images/369Relicanth.png",
        number: "369",
        type: ["Water", "Rock"],
        category: "Longevity",
        region: "Hoenn"
    },
    {
        name: "Luvdisc",
        imageUrl: "images/370Luvdisc.png",
        number: "370",
        type: ["Water"],
        category: "Rendezvous",
        region: "Hoenn"
    },
    {
        name: "Bagon",
        imageUrl: "images/371Bagon.png",
        number: "371",
        type: ["Dragon"],
        category: "Rock Head",
        region: "Hoenn"
    },
    {
        name: "Shelgon",
        imageUrl: "images/372Shelgon.png",
        number: "372",
        type: ["Dragon"],
        category: "Endurance",
        region: "Hoenn"
    },
    {
        name: "Salamence",
        imageUrl: "images/373Salamence.png",
        number: "373",
        type: ["Dragon", "Flying"],
        category: "Dragon",
        region: "Hoenn"
    },
    {
        name: "Beldum",
        imageUrl: "images/374Beldum.png",
        number: "374",
        type: ["Steel", "Psychic"],
        category: "Iron Ball",
        region: "Hoenn"
    },
    {
        name: "Metang",
        imageUrl: "images/375Metang.png",
        number: "375",
        type: ["Steel", "Psychic"],
        category: "Iron Claw",
        region: "Hoenn"
    },
    {
        name: "Metagross",
        imageUrl: "images/376Metagross.png",
        number: "376",
        type: ["Steel", "Psychic"],
        category: "Iron Leg",
        region: "Hoenn"
    },
    {
        name: "Regirock",
        imageUrl: "images/377Regirock.png",
        number: "377",
        type: ["Rock"],
        category: "Rock Peak",
        region: "Hoenn"
    },
    {
        name: "Regice",
        imageUrl: "images/378Regice.png",
        number: "378",
        type: ["Ice"],
        category: "Iceberg",
        region: "Hoenn"
    },
    {
        name: "Registeel",
        imageUrl: "images/379Registeel.png",
        number: "379",
        type: ["Steel"],
        category: "Iron",
        region: "Hoenn"
    },
    {
        name: "Latias",
        imageUrl: "images/380Latias.png",
        number: "380",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn"
    },
    {
        name: "Latios",
        imageUrl: "images/381Latios.png",
        number: "381",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn"
    },
    {
        name: "Kyogre",
        imageUrl: "images/382Kyogre.png",
        number: "382",
        type: ["Water"],
        category: "Sea Basin",
        region: "Hoenn"
    },
    {
        name: "Groudon",
        imageUrl: "images/383Groudon.png",
        number: "383",
        type: ["Ground"],
        category: "Continent",
        region: "Hoenn"
    },
    {
        name: "Rayquaza",
        imageUrl: "images/384Rayquaza.png",
        number: "384",
        type: ["Dragon", "Flying"],
        category: "Sky High",
        region: "Hoenn"
    },
    {
        name: "Jirachi",
        imageUrl: "images/385Jirachi.png",
        number: "385",
        type: ["Steel", "Psychic"],
        category: "Wish",
        region: "Hoenn"
    },
    {
        name: "Deoxys",
        imageUrl: "images/386Deoxys.png",
        number: "386",
        type: ["Psychic"],
        category: "DNA",
        region: "Hoenn"
    },
    {
        name: "Turtwig",
        imageUrl: "images/387Turtwig.png",
        number: "387",
        type: ["Grass"],
        category: "Tiny Leaf",
        region: "Sinnoh"
    },
    {
        name: "Grotle",
        imageUrl: "images/388Grotle.png",
        number: "388",
        type: ["Grass"],
        category: "Grove",
        region: "Sinnoh"
    },
    {
        name: "Torterra",
        imageUrl: "images/389Torterra.png",
        number: "389",
        type: ["Grass", "Ground"],
        category: "Continent",
        region: "Sinnoh"
    },
    {
        name: "Chimchar",
        imageUrl: "images/390Chimchar.png",
        number: "390",
        type: ["Fire"],
        category: "Chimp",
        region: "Sinnoh"
    },
    {
        name: "Monferno",
        imageUrl: "images/391Monferno.png",
        number: "391",
        type: ["Fire", "Fighting"],
        category: "Playful",
        region: "Sinnoh"
    },
    {
        name: "Infernape",
        imageUrl: "images/392Infernape.png",
        number: "392",
        type: ["Fire", "Fighting"],
        category: "Flame",
        region: "Sinnoh"
    },
    {
        name: "Piplup",
        imageUrl: "images/393Piplup.png",
        number: "393",
        type: ["Water"],
        category: "Penguin",
        region: "Sinnoh"
    },
    {
        name: "Prinplup",
        imageUrl: "images/394Prinplup.png",
        number: "394",
        type: ["Water"],
        category: "Penguin",
        region: "Sinnoh"
    },
    {
        name: "Empoleon",
        imageUrl: "images/395Empoleon.png",
        number: "395",
        type: ["Water", "Steel"],
        category: "Emperor",
        region: "Sinnoh"
    },
    {
        name: "Starly",
        imageUrl: "images/396Starly.png",
        number: "396",
        type: ["Normal", "Flying"],
        category: "Starling",
        region: "Sinnoh"
    },
    {
        name: "Staravia",
        imageUrl: "images/397Staravia.png",
        number: "397",
        type: ["Normal", "Flying"],
        category: "Starling",
        region: "Sinnoh"
    },
    {
        name: "Staraptor",
        imageUrl: "images/398Staraptor.png",
        number: "398",
        type: ["Normal", "Flying"],
        category: "Predator",
        region: "Sinnoh"
    },
    {
        name: "Bidoof",
        imageUrl: "images/399Bidoof.png",
        number: "399",
        type: ["Normal"],
        category: "Plump Mouse",
        region: "Sinnoh"
    },
    {
        name: "Bibarel",
        imageUrl: "images/400Bibarel.png",
        number: "400",
        type: ["Normal", "Water"],
        category: "Beaver",
        region: "Sinnoh"
    },
    {
        name: "Kricketot",
        imageUrl: "images/401Kricketot.png",
        number: "401",
        type: ["Bug"],
        category: "Cricket",
        region: "Sinnoh"
    },
    {
        name: "Kricketune",
        imageUrl: "images/402Kricketune.png",
        number: "402",
        type: ["Bug"],
        category: "Cricket",
        region: "Sinnoh"
    },
    {
        name: "Shinx",
        imageUrl: "images/403Shinx.png",
        number: "403",
        type: ["Electric"],
        category: "Flash",
        region: "Sinnoh"
    },
    {
        name: "Luxio",
        imageUrl: "images/404Luxio.png",
        number: "404",
        type: ["Electric"],
        category: "Spark",
        region: "Sinnoh"
    },
    {
        name: "Luxray",
        imageUrl: "images/405Luxray.png",
        number: "405",
        type: ["Electric"],
        category: "Gleam Eyes",
        region: "Sinnoh"
    },
    {
        name: "Budew",
        imageUrl: "images/406Budew.png",
        number: "406",
        type: ["Grass", "Poison"],
        category: "Bud",
        region: "Sinnoh"
    },
    {
        name: "Roserade",
        imageUrl: "images/407Roserade.png",
        number: "407",
        type: ["Grass", "Poison"],
        category: "Bouquet",
        region: "Sinnoh"
    },
    {
        name: "Cranidos",
        imageUrl: "images/408Cranidos.png",
        number: "408",
        type: ["Rock"],
        category: "Head Butt",
        region: "Sinnoh"
    },
    {
        name: "Rampardos",
        imageUrl: "images/409Rampardos.png",
        number: "409",
        type: ["Rock"],
        category: "Head Butt",
        region: "Sinnoh"
    },
    {
        name: "Shieldon",
        imageUrl: "images/410Shieldon.png",
        number: "410",
        type: ["Rock", "Steel"],
        category: "Shield",
        region: "Sinnoh"
    },
    {
        name: "Bastiodon",
        imageUrl: "images/411Bastiodon.png",
        number: "411",
        type: ["Rock", "Steel"],
        category: "Shield",
        region: "Sinnoh"
    },
    {
        name: "Burmy",
        imageUrl: "images/412Burmy.png",
        number: "412",
        type: ["Bug"],
        category: "Bagworm",
        region: "Sinnoh"
    },
    {
        name: "Wormadam",
        imageUrl: "images/413Wormadam.png",
        number: "413",
        type: ["Bug", "Grass"],
        category: "Bagworm",
        region: "Sinnoh"
    },
    {
        name: "Mothim",
        imageUrl: "images/414Mothim.png",
        number: "414",
        type: ["Bug", "Flying"],
        category: "Moth",
        region: "Sinnoh"
    },
    {
        name: "Combee",
        imageUrl: "images/415Combee.png",
        number: "415",
        type: ["Bug", "Flying"],
        category: "Tiny Bee",
        region: "Sinnoh"
    },
    {
        name: "Vespiquen",
        imageUrl: "images/416Vespiquen.png",
        number: "416",
        type: ["Bug", "Flying"],
        category: "Beehive",
        region: "Sinnoh"
    },
    {
        name: "Pachirisu",
        imageUrl: "images/417Pachirisu.png",
        number: "417",
        type: ["Electric"],
        category: "EleSquirrel",
        region: "Sinnoh"
    },
    {
        name: "Buizel",
        imageUrl: "images/418Buizel.png",
        number: "418",
        type: ["Water"],
        category: "Sea Weasel",
        region: "Sinnoh"
    },
    {
        name: "Floatzel",
        imageUrl: "images/419Floatzel.png",
        number: "419",
        type: ["Water"],
        category: "Sea Weasel",
        region: "Sinnoh"
    },
    {
        name: "Cherubi",
        imageUrl: "images/420Cherubi.png",
        number: "420",
        type: ["Grass"],
        category: "Cherry",
        region: "Sinnoh"
    },
    {
        name: "Cherrim",
        imageUrl: "images/421Cherrim.png",
        number: "421",
        type: ["Grass"],
        category: "Blossom",
        region: "Sinnoh"
    },
    {
        name: "Shellos",
        imageUrl: "images/422Shellos.png",
        number: "422",
        type: ["Water"],
        category: "Sea Slug",
        region: "Sinnoh"
    },
    {
        name: "Gastrodon",
        imageUrl: "images/423Gastrodon.png",
        number: "423",
        type: ["Water", "Ground"],
        category: "Sea Slug",
        region: "Sinnoh"
    },
    {
        name: "Ambipom",
        imageUrl: "images/424Ambipom.png",
        number: "424",
        type: ["Normal"],
        category: "Long Tail",
        region: "Sinnoh"
    },
    {
        name: "Drifloon",
        imageUrl: "images/425Drifloon.png",
        number: "425",
        type: ["Ghost", "Flying"],
        category: "Balloon",
        region: "Sinnoh"
    },
    {
        name: "Drifblim",
        imageUrl: "images/426Drifblim.png",
        number: "426",
        type: ["Ghost", "Flying"],
        category: "Blimp",
        region: "Sinnoh"
    },
    {
        name: "Buneary",
        imageUrl: "images/427Buneary.png",
        number: "427",
        type: ["Normal"],
        category: "Rabbit",
        region: "Sinnoh"
    },
    {
        name: "Lopunny",
        imageUrl: "images/428Lopunny.png",
        number: "428",
        type: ["Normal"],
        category: "Rabbit",
        region: "Sinnoh"
    },
    {
        name: "Mismagius",
        imageUrl: "images/429Mismagius.png",
        number: "429",
        type: ["Ghost"],
        category: "Magical",
        region: "Sinnoh"
    },
    {
        name: "Honchkrow",
        imageUrl: "images/430Honchkrow.png",
        number: "430",
        type: ["Dark", "Flying"],
        category: "Big Boss",
        region: "Sinnoh"
    },
    {
        name: "Glameow",
        imageUrl: "images/431Glameow.png",
        number: "431",
        type: ["Normal"],
        category: "Catty",
        region: "Sinnoh"
    },
    {
        name: "Purugly",
        imageUrl: "images/432Purugly.png",
        number: "432",
        type: ["Normal"],
        category: "Tiger Cat",
        region: "Sinnoh"
    },
    {
        name: "Chingling",
        imageUrl: "images/433Chingling.png",
        number: "433",
        type: ["Psychic"],
        category: "Bell",
        region: "Sinnoh"
    },
    {
        name: "Stunky",
        imageUrl: "images/434Stunky.png",
        number: "434",
        type: ["Poison", "Dark"],
        category: "Skunk",
        region: "Sinnoh"
    },
    {
        name: "Skuntank",
        imageUrl: "images/435Skuntank.png",
        number: "435",
        type: ["Poison", "Dark"],
        category: "Skunk",
        region: "Sinnoh"
    },
    {
        name: "Bronzor",
        imageUrl: "images/436Bronzor.png",
        number: "436",
        type: ["Steel", "Psychic"],
        category: "Bronze",
        region: "Sinnoh"
    },
    {
        name: "Bronzong",
        imageUrl: "images/437Bronzong.png",
        number: "437",
        type: ["Steel", "Psychic"],
        category: "Bronze Bell",
        region: "Sinnoh"
    },
    {
        name: "Bonsly",
        imageUrl: "images/438Bonsly.png",
        number: "438",
        type: ["Rock"],
        category: "Bonsai",
        region: "Sinnoh"
    },
    {
        name: "Mime Jr.",
        imageUrl: "images/439Mime_Jr.png",
        number: "439",
        type: ["Psychic", "Fairy"],
        category: "Mime",
        region: "Sinnoh"
    },
    {
        name: "Happiny",
        imageUrl: "images/440Happiny.png",
        number: "440",
        type: ["Normal"],
        category: "Playhouse",
        region: "Sinnoh"
    },
    {
        name: "Chatot",
        imageUrl: "images/441Chatot.png",
        number: "441",
        type: ["Normal", "Flying"],
        category: "Music Note",
        region: "Sinnoh"
    },
    {
        name: "Spiritomb",
        imageUrl: "images/442Spiritomb.png",
        number: "442",
        type: ["Ghost", "Dark"],
        category: "Forbidden",
        region: "Sinnoh"
    },
    {
        name: "Gible",
        imageUrl: "images/443Gible.png",
        number: "443",
        type: ["Dragon", "Ground"],
        category: "Land Shark",
        region: "Sinnoh"
    },
    {
        name: "Gabite",
        imageUrl: "images/444Gabite.png",
        number: "444",
        type: ["Dragon", "Ground"],
        category: "Cave",
        region: "Sinnoh"
    },
    {
        name: "Garchomp",
        imageUrl: "images/445Garchomp.png",
        number: "445",
        type: ["Dragon", "Ground"],
        category: "Mach",
        region: "Sinnoh"
    },
    {
        name: "Munchlax",
        imageUrl: "images/446Munchlax.png",
        number: "446",
        type: ["Normal"],
        category: "Big Eater",
        region: "Sinnoh"
    },
    {
        name: "Riolu",
        imageUrl: "images/447Riolu.png",
        number: "447",
        type: ["Fighting"],
        category: "Emanation",
        region: "Sinnoh"
    },
    {
        name: "Lucario",
        imageUrl: "images/448Lucario.png",
        number: "448",
        type: ["Fighting", "Steel"],
        category: "Aura",
        region: "Sinnoh"
    },
    {
        name: "Hippopotas",
        imageUrl: "images/449Hippopotas.png",
        number: "449",
        type: ["Ground"],
        category: "Hippo",
        region: "Sinnoh"
    },
    {
        name: "Hippowdon",
        imageUrl: "images/450Hippowdon.png",
        number: "450",
        type: ["Ground"],
        category: "Heavyweight",
        region: "Sinnoh"
    },
    {
        name: "Skorupi",
        imageUrl: "images/451Skorupi.png",
        number: "451",
        type: ["Poison", "Bug"],
        category: "Scorpion",
        region: "Sinnoh"
    },
    {
        name: "Drapion",
        imageUrl: "images/452Drapion.png",
        number: "452",
        type: ["Poison", "Dark"],
        category: "Ogre Scorpion",
        region: "Sinnoh"
    },
    {
        name: "Croagunk",
        imageUrl: "images/453Croagunk.png",
        number: "453",
        type: ["Poison", "Fighting"],
        category: "Toxic Mouth",
        region: "Sinnoh"
    },
    {
        name: "Toxicroak",
        imageUrl: "images/454Toxicroak.png",
        number: "454",
        type: ["Poison", "Fighting"],
        category: "Toxic Mouth",
        region: "Sinnoh"
    },
    {
        name: "Carnivine",
        imageUrl: "images/455Carnivine.png",
        number: "455",
        type: ["Grass"],
        category: "Bug Catcher",
        region: "Sinnoh"
    },
    {
        name: "Finneon",
        imageUrl: "images/456Finneon.png",
        number: "456",
        type: ["Water"],
        category: "Wing Fish",
        region: "Sinnoh"
    },
    {
        name: "Lumineon",
        imageUrl: "images/457Lumineon.png",
        number: "457",
        type: ["Water"],
        category: "Neon",
        region: "Sinnoh"
    },
    {
        name: "Mantyke",
        imageUrl: "images/458Mantyke.png",
        number: "458",
        type: ["Water", "Flying"],
        category: "Kite",
        region: "Sinnoh"
    },
    {
        name: "Snover",
        imageUrl: "images/459Snover.png",
        number: "459",
        type: ["Grass", "Ice"],
        category: "Frost Tree",
        region: "Sinnoh"
    },
    {
        name: "Abomasnow",
        imageUrl: "images/460Abomasnow.png",
        number: "460",
        type: ["Grass", "Ice"],
        category: "Frost Tree",
        region: "Sinnoh"
    },
    {
        name: "Weavile",
        imageUrl: "images/461Weavile.png",
        number: "461",
        type: ["Dark", "Ice"],
        category: "Sharp Claw",
        region: "Sinnoh"
    },
    {
        name: "Magnezone",
        imageUrl: "images/462Magnezone.png",
        number: "462",
        type: ["Electric", "Steel"],
        category: "Magnet Area",
        region: "Sinnoh"
    },
    {
        name: "Lickilicky",
        imageUrl: "images/463Lickilicky.png",
        number: "463",
        type: ["Normal"],
        category: "Licking",
        region: "Sinnoh"
    },
    {
        name: "Rhyperior",
        imageUrl: "images/464Rhyperior.png",
        number: "464",
        type: ["Ground", "Rock"],
        category: "Drill",
        region: "Sinnoh"
    },
    {
        name: "Tangrowth",
        imageUrl: "images/465Tangrowth.png",
        number: "465",
        type: ["Grass"],
        category: "Vine",
        region: "Sinnoh"
    },
    {
        name: "Electivire",
        imageUrl: "images/466Electivire.png",
        number: "466",
        type: ["Electric"],
        category: "Thunderbolt",
        region: "Sinnoh"
    },
    {
        name: "Magmortar",
        imageUrl: "images/467Magmortar.png",
        number: "467",
        type: ["Fire"],
        category: "Blast",
        region: "Sinnoh"
    },
    {
        name: "Togekiss",
        imageUrl: "images/468Togekiss.png",
        number: "468",
        type: ["Fairy", "Flying"],
        category: "Jubilee",
        region: "Sinnoh"
    },
    {
        name: "Yanmega",
        imageUrl: "images/469Yanmega.png",
        number: "469",
        type: ["Bug", "Flying"],
        category: "Ogre Darner",
        region: "Sinnoh"
    },
    {
        name: "Leafeon",
        imageUrl: "images/470Leafeon.png",
        number: "470",
        type: ["Grass"],
        category: "Verdant",
        region: "Sinnoh"
    },
    {
        name: "Glaceon",
        imageUrl: "images/471Glaceon.png",
        number: "471",
        type: ["Ice"],
        category: "Fresh Snow",
        region: "Sinnoh"
    },
    {
        name: "Gliscor",
        imageUrl: "images/472Gliscor.png",
        number: "472",
        type: ["Ground", "Flying"],
        category: "Fang Scorpion",
        region: "Sinnoh"
    },
    {
        name: "Mamoswine",
        imageUrl: "images/473Mamoswine.png",
        number: "473",
        type: ["Ice", "Ground"],
        category: "Twin Tusk",
        region: "Sinnoh"
    },
    {
        name: "Porygon-Z",
        imageUrl: "images/474Porygon-Z.png",
        number: "474",
        type: ["Normal"],
        category: "Virtual",
        region: "Sinnoh"
    },
    {
        name: "Gallade",
        imageUrl: "images/475Gallade.png",
        number: "475",
        type: ["Psychic", "Fighting"],
        category: "Blade",
        region: "Sinnoh"
    },
    {
        name: "Probopass",
        imageUrl: "images/476Probopass.png",
        number: "476",
        type: ["Rock", "Steel"],
        category: "Compass",
        region: "Sinnoh"
    },
    {
        name: "Dusknoir",
        imageUrl: "images/477Dusknoir.png",
        number: "477",
        type: ["Ghost"],
        category: "Gripper",
        region: "Sinnoh"
    },
    {
        name: "Froslass",
        imageUrl: "images/478Froslass.png",
        number: "478",
        type: ["Ice", "Ghost"],
        category: "Snow Land",
        region: "Sinnoh"
    },
    {
        name: "Rotom",
        imageUrl: "images/479Rotom.png",
        number: "479",
        type: ["Electric", "Ghost"],
        category: "Plasma",
        region: "Sinnoh"
    },
    {
        name: "Uxie",
        imageUrl: "images/480Uxie.png",
        number: "480",
        type: ["Psychic"],
        category: "Knowledge",
        region: "Sinnoh"
    },
    {
        name: "Mesprit",
        imageUrl: "images/481Mesprit.png",
        number: "481",
        type: ["Psychic"],
        category: "Emotion",
        region: "Sinnoh"
    },
    {
        name: "Azelf",
        imageUrl: "images/482Azelf.png",
        number: "482",
        type: ["Psychic"],
        category: "Willpower",
        region: "Sinnoh"
    },
    {
        name: "Dialga",
        imageUrl: "images/483Dialga.png",
        number: "483",
        type: ["Steel", "Dragon"],
        category: "Temporal",
        region: "Sinnoh"
    },
    {
        name: "Palkia",
        imageUrl: "images/484Palkia.png",
        number: "484",
        type: ["Water", "Dragon"],
        category: "Spatial",
        region: "Sinnoh"
    },
    {
        name: "Heatran",
        imageUrl: "images/485Heatran.png",
        number: "485",
        type: ["Fire", "Steel"],
        category: "Lava Dome",
        region: "Sinnoh"
    },
    {
        name: "Regigigas",
        imageUrl: "images/486Regigigas.png",
        number: "486",
        type: ["Normal"],
        category: "Colossal",
        region: "Sinnoh"
    },
    {
        name: "Giratina",
        imageUrl: "images/487Giratina.png",
        number: "487",
        type: ["Ghost", "Dragon"],
        category: "Renegade",
        region: "Sinnoh"
    },
    {
        name: "Cresselia",
        imageUrl: "images/488Cresselia.png",
        number: "488",
        type: ["Psychic"],
        category: "Lunar",
        region: "Sinnoh"
    },
    {
        name: "Phione",
        imageUrl: "images/489Phione.png",
        number: "489",
        type: ["Water"],
        category: "Sea Drifter",
        region: "Sinnoh"
    },
    {
        name: "Manaphy",
        imageUrl: "images/490Manaphy.png",
        number: "490",
        type: ["Water"],
        category: "Seafaring",
        region: "Sinnoh"
    },
    {
        name: "Darkrai",
        imageUrl: "images/491Darkrai.png",
        number: "491",
        type: ["Dark"],
        category: "Pitch-Black",
        region: "Sinnoh"
    },
    {
        name: "Shaymin",
        imageUrl: "images/492Shaymin.png",
        number: "492",
        type: ["Grass"],
        category: "Gratitude",
        region: "Sinnoh"
    },
    {
        name: "Arceus",
        imageUrl: "images/493Arceus.png",
        number: "493",
        type: ["Normal"],
        category: "Alpha",
        region: "Sinnoh"
    },
    {
        name: "Victini",
        imageUrl: "images/494Victini.png",
        number: "494",
        type: ["Psychic", "Fire"],
        category: "Victory",
        region: "Unova"
    },
    {
        name: "Snivy",
        imageUrl: "images/495Snivy.png",
        number: "495",
        type: ["Grass"],
        category: "Grass Snake",
        region: "Unova"
    },
    {
        name: "Servine",
        imageUrl: "images/496Servine.png",
        number: "496",
        type: ["Grass"],
        category: "Grass Snake",
        region: "Unova"
    },
    {
        name: "Serperior",
        imageUrl: "images/497Serperior.png",
        number: "497",
        type: ["Grass"],
        category: "Regal",
        region: "Unova"
    },
    {
        name: "Tepig",
        imageUrl: "images/498Tepig.png",
        number: "498",
        type: ["Fire"],
        category: "Fire Pig",
        region: "Unova"
    },
    {
        name: "Pignite",
        imageUrl: "images/499Pignite.png",
        number: "499",
        type: ["Fire", "Fighting"],
        category: "Fire Pig",
        region: "Unova"
    },
    {
        name: "Emboar",
        imageUrl: "images/500Emboar.png",
        number: "500",
        type: ["Fire", "Fighting"],
        category: "Mega Fire Pig",
        region: "Unova"
    },
    {
        name: "Oshawott",
        imageUrl: "images/501Oshawott.png",
        number: "501",
        type: ["Water"],
        category: "Sea Otter",
        region: "Unova"
    },
    {
        name: "Dewott",
        imageUrl: "images/502Dewott.png",
        number: "502",
        type: ["Water"],
        category: "Discipline",
        region: "Unova"
    },
    {
        name: "Samurott",
        imageUrl: "images/503Samurott.png",
        number: "503",
        type: ["Water"],
        category: "Formidable",
        region: "Unova"
    },
    {
        name: "Patrat",
        imageUrl: "images/504Patrat.png",
        number: "504",
        type: ["Normal"],
        category: "Scout",
        region: "Unova"
    },
    {
        name: "Watchog",
        imageUrl: "images/505Watchog.png",
        number: "505",
        type: ["Normal"],
        category: "Lookout",
        region: "Unova"
    },
    {
        name: "Lillipup",
        imageUrl: "images/506Lillipup.png",
        number: "506",
        type: ["Normal"],
        category: "Puppy",
        region: "Unova"
    },
    {
        name: "Herdier",
        imageUrl: "images/507Herdier.png",
        number: "507",
        type: ["Normal"],
        category: "Loyal Dog",
        region: "Unova"
    },
    {
        name: "Stoutland",
        imageUrl: "images/508Stoutland.png",
        number: "508",
        type: ["Normal"],
        category: "Big-Hearted",
        region: "Unova"
    },
    {
        name: "Purrloin",
        imageUrl: "images/509Purrloin.png",
        number: "509",
        type: ["Dark"],
        category: "Devious",
        region: "Unova"
    },
    {
        name: "Liepard",
        imageUrl: "images/510Liepard.png",
        number: "510",
        type: ["Dark"],
        category: "Cruel",
        region: "Unova"
    },
    {
        name: "Pansage",
        imageUrl: "images/511Pansage.png",
        number: "511",
        type: ["Grass"],
        category: "Grass Monkey",
        region: "Unova"
    },
    {
        name: "Simisage",
        imageUrl: "images/512Simisage.png",
        number: "512",
        type: ["Grass"],
        category: "Thorn Monkey",
        region: "Unova"
    },
    {
        name: "Pansear",
        imageUrl: "images/513Pansear.png",
        number: "513",
        type: ["Fire"],
        category: "High Temp",
        region: "Unova"
    },
    {
        name: "Simisear",
        imageUrl: "images/514Simisear.png",
        number: "514",
        type: ["Fire"],
        category: "Ember",
        region: "Unova"
    },
    {
        name: "Panpour",
        imageUrl: "images/515Panpour.png",
        number: "515",
        type: ["Water"],
        category: "Spray",
        region: "Unova"
    },
    {
        name: "Simipour",
        imageUrl: "images/516Simipour.png",
        number: "516",
        type: ["Water"],
        category: "Geyser",
        region: "Unova"
    },
    {
        name: "Munna",
        imageUrl: "images/517Munna.png",
        number: "517",
        type: ["Psychic"],
        category: "Dream Eater",
        region: "Unova"
    },
    {
        name: "Musharna",
        imageUrl: "images/518Musharna.png",
        number: "518",
        type: ["Psychic"],
        category: "Drowsing",
        region: "Unova"
    },
    {
        name: "Pidove",
        imageUrl: "images/519Pidove.png",
        number: "519",
        type: ["Normal", "Flying"],
        category: "Tiny Pigeon",
        region: "Unova"
    },
    {
        name: "Tranquill",
        imageUrl: "images/520Tranquill.png",
        number: "520",
        type: ["Normal", "Flying"],
        category: "Wild Pigeon",
        region: "Unova"
    },
    {
        name: "Unfezant",
        imageUrl: "images/521Unfezant.png",
        number: "521",
        type: ["Normal", "Flying"],
        category: "Proud",
        region: "Unova"
    },
    {
        name: "Blitzle",
        imageUrl: "images/522Blitzle.png",
        number: "522",
        type: ["Electric"],
        category: "Electrified",
        region: "Unova"
    },
    {
        name: "Zebstrika",
        imageUrl: "images/523Zebstrika.png",
        number: "523",
        type: ["Electric"],
        category: "Thunderbolt",
        region: "Unova"
    },
    {
        name: "Roggenrola",
        imageUrl: "images/524Roggenrola.png",
        number: "524",
        type: ["Rock"],
        category: "Mantle",
        region: "Unova"
    },
    {
        name: "Boldore",
        imageUrl: "images/525Boldore.png",
        number: "525",
        type: ["Rock"],
        category: "Ore",
        region: "Unova"
    },
    {
        name: "Gigalith",
        imageUrl: "images/526Gigalith.png",
        number: "526",
        type: ["Rock"],
        category: "Compressed",
        region: "Unova"
    },
    {
        name: "Woobat",
        imageUrl: "images/527Woobat.png",
        number: "527",
        type: ["Psychic", "Flying"],
        category: "Bat",
        region: "Unova"
    },
    {
        name: "Swoobat",
        imageUrl: "images/528Swoobat.png",
        number: "528",
        type: ["Psychic", "Flying"],
        category: "Courting",
        region: "Unova"
    },
    {
        name: "Drilbur",
        imageUrl: "images/529Drilbur.png",
        number: "529",
        type: ["Ground"],
        category: "Mole",
        region: "Unova"
    },
    {
        name: "Excadrill",
        imageUrl: "images/530Excadrill.png",
        number: "530",
        type: ["Ground", "Steel"],
        category: "Subterrene",
        region: "Unova"
    },
    {
        name: "Audino",
        imageUrl: "images/531Audino.png",
        number: "531",
        type: ["Normal"],
        category: "Hearing",
        region: "Unova"
    },
    {
        name: "Timburr",
        imageUrl: "images/532Timburr.png",
        number: "532",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova"
    },
    {
        name: "Gurdurr",
        imageUrl: "images/533Gurdurr.png",
        number: "533",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova"
    },
    {
        name: "Conkeldurr",
        imageUrl: "images/534Conkeldurr.png",
        number: "534",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova"
    },
    {
        name: "Tympole",
        imageUrl: "images/535Tympole.png",
        number: "535",
        type: ["Water"],
        category: "Tadpole",
        region: "Unova"
    },
    {
        name: "Palpitoad",
        imageUrl: "images/536Palpitoad.png",
        number: "536",
        type: ["Water", "Ground"],
        category: "Vibration",
        region: "Unova"
    },
    {
        name: "Seismitoad",
        imageUrl: "images/537Seismitoad.png",
        number: "537",
        type: ["Water", "Ground"],
        category: "Tadpole",
        region: "Unova"
    },
    {
        name: "Throh",
        imageUrl: "images/538Throh.png",
        number: "538",
        type: ["Fighting"],
        category: "Judo",
        region: "Unova"
    },
    {
        name: "Sawk",
        imageUrl: "images/539Sawk.png",
        number: "539",
        type: ["Fighting"],
        category: "Karate",
        region: "Unova"
    },
    {
        name: "Sewaddle",
        imageUrl: "images/540Sewaddle.png",
        number: "540",
        type: ["Bug", "Grass"],
        category: "Sewing",
        region: "Unova"
    },
    {
        name: "Swadloon",
        imageUrl: "images/541Swadloon.png",
        number: "541",
        type: ["Bug", "Grass"],
        category: "Leaf-Wrapped",
        region: "Unova"
    },
    {
        name: "Leavanny",
        imageUrl: "images/542Leavanny.png",
        number: "542",
        type: ["Bug", "Grass"],
        category: "Nurturing",
        region: "Unova"
    },
    {
        name: "Venipede",
        imageUrl: "images/543Venipede.png",
        number: "543",
        type: ["Bug", "Poison"],
        category: "Centipede",
        region: "Unova"
    },
    {
        name: "Whirlipede",
        imageUrl: "images/544Whirlipede.png",
        number: "544",
        type: ["Bug", "Poison"],
        category: "Curlipede",
        region: "Unova"
    },
    {
        name: "Scolipede",
        imageUrl: "images/545Scolipede.png",
        number: "545",
        type: ["Bug", "Poison"],
        category: "Megapede",
        region: "Unova"
    },
    {
        name: "Cottonee",
        imageUrl: "images/546Cottonee.png",
        number: "546",
        type: ["Grass", "Fairy"],
        category: "Cotton Puff",
        region: "Unova"
    },
    {
        name: "Whimsicott",
        imageUrl: "images/547Whimsicott.png",
        number: "547",
        type: ["Grass", "Fairy"],
        category: "Windveiled",
        region: "Unova"
    },
    {
        name: "Petilil",
        imageUrl: "images/548Petilil.png",
        number: "548",
        type: ["Grass"],
        category: "Bulb",
        region: "Unova"
    },
    {
        name: "Lilligant",
        imageUrl: "images/549Lilligant.png",
        number: "549",
        type: ["Grass"],
        category: "Flowering",
        region: "Unova"
    },
    {
        name: "Basculin",
        imageUrl: "images/550Basculin.png",
        number: "550",
        type: ["Water"],
        category: "Hostile",
        region: "Unova"
    },
    {
        name: "Sandile",
        imageUrl: "images/551Sandile.png",
        number: "551",
        type: ["Ground", "Dark"],
        category: "Desert Croc",
        region: "Unova"
    },
    {
        name: "Krokorok",
        imageUrl: "images/552Krokorok.png",
        number: "552",
        type: ["Ground", "Dark"],
        category: "Desert Croc",
        region: "Unova"
    },
    {
        name: "Krookodile",
        imageUrl: "images/553Krookodile.png",
        number: "553",
        type: ["Ground", "Dark"],
        category: "Intimidation",
        region: "Unova"
    },
    {
        name: "Darumaka",
        imageUrl: "images/554Darumaka.png",
        number: "554",
        type: ["Fire"],
        category: "Zen Charm",
        region: "Unova"
    },
    {
        name: "Darmanitan",
        imageUrl: "images/555Darmanitan.png",
        number: "555",
        type: ["Fire"],
        category: "Blazing",
        region: "Unova"
    },
    {
        name: "Maractus",
        imageUrl: "images/556Maractus.png",
        number: "556",
        type: ["Grass"],
        category: "Cactus",
        region: "Unova"
    },
    {
        name: "Dwebble",
        imageUrl: "images/557Dwebble.png",
        number: "557",
        type: ["Bug", "Rock"],
        category: "Rock Inn",
        region: "Unova"
    },
    {
        name: "Crustle",
        imageUrl: "images/558Crustle.png",
        number: "558",
        type: ["Bug", "Rock"],
        category: "Stone Home",
        region: "Unova"
    },
    {
        name: "Scraggy",
        imageUrl: "images/559Scraggy.png",
        number: "559",
        type: ["Dark", "Fighting"],
        category: "Shedding",
        region: "Unova"
    },
    {
        name: "Scrafty",
        imageUrl: "images/560Scrafty.png",
        number: "560",
        type: ["Dark", "Fighting"],
        category: "Hoodlum",
        region: "Unova"
    },
    {
        name: "Sigilyph",
        imageUrl: "images/561Sigilyph.png",
        number: "561",
        type: ["Psychic", "Flying"],
        category: "Avianoid",
        region: "Unova"
    },
    {
        name: "Yamask",
        imageUrl: "images/562Yamask.png",
        number: "562",
        type: ["Ghost"],
        category: "Spirit",
        region: "Unova"
    },
    {
        name: "Cofagrigus",
        imageUrl: "images/563Cofagrigus.png",
        number: "563",
        type: ["Ghost"],
        category: "Coffin",
        region: "Unova"
    },
    {
        name: "Tirtouga",
        imageUrl: "images/564Tirtouga.png",
        number: "564",
        type: ["Water", "Rock"],
        category: "Prototurtle",
        region: "Unova"
    },
    {
        name: "Carracosta",
        imageUrl: "images/565Carracosta.png",
        number: "565",
        type: ["Water", "Rock"],
        category: "Prototurtle",
        region: "Unova"
    },
    {
        name: "Archen",
        imageUrl: "images/566Archen.png",
        number: "566",
        type: ["Rock", "Flying"],
        category: "First Bird",
        region: "Unova"
    },
    {
        name: "Archeops",
        imageUrl: "images/567Archeops.png",
        number: "567",
        type: ["Rock", "Flying"],
        category: "First Bird",
        region: "Unova"
    },
    {
        name: "Trubbish",
        imageUrl: "images/568Trubbish.png",
        number: "568",
        type: ["Poison"],
        category: "Trash Bag",
        region: "Unova"
    },
    {
        name: "Garbodor",
        imageUrl: "images/569Garbodor.png",
        number: "569",
        type: ["Poison"],
        category: "Trash Heap",
        region: "Unova"
    },
    {
        name: "Zorua",
        imageUrl: "images/570Zorua.png",
        number: "570",
        type: ["Dark"],
        category: "Tricky Fox",
        region: "Unova"
    },
    {
        name: "Zoroark",
        imageUrl: "images/571Zoroark.png",
        number: "571",
        type: ["Dark"],
        category: "Illusion Fox",
        region: "Unova"
    },
    {
        name: "Minccino",
        imageUrl: "images/572Minccino.png",
        number: "572",
        type: ["Normal"],
        category: "Chinchilla",
        region: "Unova"
    },
    {
        name: "Cinccino",
        imageUrl: "images/573Cinccino.png",
        number: "573",
        type: ["Normal"],
        category: "Scarf",
        region: "Unova"
    },
    {
        name: "Gothita",
        imageUrl: "images/574Gothita.png",
        number: "574",
        type: ["Psychic"],
        category: "Fixation",
        region: "Unova"
    },
    {
        name: "Gothorita",
        imageUrl: "images/575Gothorita.png",
        number: "575",
        type: ["Psychic"],
        category: "Manipulate",
        region: "Unova"
    },
    {
        name: "Gothitelle",
        imageUrl: "images/576Gothitelle.png",
        number: "576",
        type: ["Psychic"],
        category: "Astral Body",
        region: "Unova"
    },
    {
        name: "Solosis",
        imageUrl: "images/577Solosis.png",
        number: "577",
        type: ["Psychic"],
        category: "Cell",
        region: "Unova"
    },
    {
        name: "Duosion",
        imageUrl: "images/578Duosion.png",
        number: "578",
        type: ["Psychic"],
        category: "Mitosis",
        region: "Unova"
    },
    {
        name: "Reuniclus",
        imageUrl: "images/579Reuniclus.png",
        number: "579",
        type: ["Psychic"],
        category: "Multiplying",
        region: "Unova"
    },
    {
        name: "Ducklett",
        imageUrl: "images/580Ducklett.png",
        number: "580",
        type: ["Water", "Flying"],
        category: "Water Bird",
        region: "Unova"
    },
    {
        name: "Swanna",
        imageUrl: "images/581Swanna.png",
        number: "581",
        type: ["Water", "Flying"],
        category: "White Bird",
        region: "Unova"
    },
    {
        name: "Vanillite",
        imageUrl: "images/582Vanillite.png",
        number: "582",
        type: ["Ice"],
        category: "Fresh Snow",
        region: "Unova"
    },
    {
        name: "Vanillish",
        imageUrl: "images/583Vanillish.png",
        number: "583",
        type: ["Ice"],
        category: "Icy Snow",
        region: "Unova"
    },
    {
        name: "Vanilluxe",
        imageUrl: "images/584Vanilluxe.png",
        number: "584",
        type: ["Ice"],
        category: "Snowstorm",
        region: "Unova"
    },
    {
        name: "Deerling",
        imageUrl: "images/585Deerling.png",
        number: "585",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova"
    },
    {
        name: "Sawsbuck",
        imageUrl: "images/586Sawsbuck.png",
        number: "586",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova"
    },
    {
        name: "Emolga",
        imageUrl: "images/587Emolga.png",
        number: "587",
        type: ["Electric", "Flying"],
        category: "Sky Squirrel",
        region: "Unova"
    },
    {
        name: "Karrablast",
        imageUrl: "images/588Karrablast.png",
        number: "588",
        type: ["Bug"],
        category: "Clamping",
        region: "Unova"
    },
    {
        name: "Escavalier",
        imageUrl: "images/589Escavalier.png",
        number: "589",
        type: ["Bug", "Steel"],
        category: "Cavalry",
        region: "Unova"
    },
    {
        name: "Foongus",
        imageUrl: "images/590Foongus.png",
        number: "590",
        type: ["Grass", "Poison"],
        category: "Mushroom",
        region: "Unova"
    },
    {
        name: "Amoonguss",
        imageUrl: "images/591Amoonguss.png",
        number: "591",
        type: ["Grass", "Poison"],
        category: "Mushroom",
        region: "Unova"
    },
    {
        name: "Frillish",
        imageUrl: "images/592Frillish.png",
        number: "592",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova"
    },
    {
        name: "Jellicent",
        imageUrl: "images/593Jellicent.png",
        number: "593",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova"
    },
    {
        name: "Alomomola",
        imageUrl: "images/594Alomomola.png",
        number: "594",
        type: ["Water"],
        category: "Floating",
        region: "Unova"
    },
    {
        name: "Joltik",
        imageUrl: "images/595Joltik.png",
        number: "595",
        type: ["Bug", "Electric"],
        category: "Attaching",
        region: "Unova"
    },
    {
        name: "Galvantula",
        imageUrl: "images/596Galvantula.png",
        number: "596",
        type: ["Bug", "Electric"],
        category: "EleSpider",
        region: "Unova"
    },
    {
        name: "Ferroseed",
        imageUrl: "images/597Ferroseed.png",
        number: "597",
        type: ["Grass", "Steel"],
        category: "Thorn Seed",
        region: "Unova"
    },
    {
        name: "Ferrothorn",
        imageUrl: "images/598Ferrothorn.png",
        number: "598",
        type: ["Grass", "Steel"],
        category: "Thorn Pod",
        region: "Unova"
    },
    {
        name: "Klink",
        imageUrl: "images/599Klink.png",
        number: "599",
        type: ["Steel"],
        category: "Gear",
        region: "Unova"
    },
    {
        name: "Klang",
        imageUrl: "images/600Klang.png",
        number: "600",
        type: ["Steel"],
        category: "Gear",
        region: "Unova"
    },
    {
        name: "Klinklang",
        imageUrl: "images/601Klinklang.png",
        number: "601",
        type: ["Steel"],
        category: "Gear",
        region: "Unova"
    },
    {
        name: "Tynamo",
        imageUrl: "images/602Tynamo.png",
        number: "602",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova"
    },
    {
        name: "Eelektrik",
        imageUrl: "images/603Eelektrik.png",
        number: "603",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova"
    },
    {
        name: "Eelektross",
        imageUrl: "images/604Eelektross.png",
        number: "604",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova"
    },
    {
        name: "Elgyem",
        imageUrl: "images/605Elgyem.png",
        number: "605",
        type: ["Psychic"],
        category: "Cerebral",
        region: "Unova"
    },
    {
        name: "Beheeyem",
        imageUrl: "images/606Beheeyem.png",
        number: "606",
        type: ["Psychic"],
        category: "Cerebral",
        region: "Unova"
    },
    {
        name: "Litwick",
        imageUrl: "images/607Litwick.png",
        number: "607",
        type: ["Ghost", "Fire"],
        category: "Candle",
        region: "Unova"
    },
    {
        name: "Lampent",
        imageUrl: "images/608Lampent.png",
        number: "608",
        type: ["Ghost", "Fire"],
        category: "Lamp",
        region: "Unova"
    },
    {
        name: "Chandelure",
        imageUrl: "images/609Chandelure.png",
        number: "609",
        type: ["Ghost", "Fire"],
        category: "Luring",
        region: "Unova"
    },
    {
        name: "Axew",
        imageUrl: "images/610Axew.png",
        number: "610",
        type: ["Dragon"],
        category: "Tusk",
        region: "Unova"
    },
    {
        name: "Fraxure",
        imageUrl: "images/611Fraxure.png",
        number: "611",
        type: ["Dragon"],
        category: "Axe Jaw",
        region: "Unova"
    },
    {
        name: "Haxorus",
        imageUrl: "images/612Haxorus.png",
        number: "612",
        type: ["Dragon"],
        category: "Axe Jaw",
        region: "Unova"
    },
    {
        name: "Cubchoo",
        imageUrl: "images/613Cubchoo.png",
        number: "613",
        type: ["Ice"],
        category: "Chill",
        region: "Unova"
    },
    {
        name: "Beartic",
        imageUrl: "images/614Beartic.png",
        number: "614",
        type: ["Ice"],
        category: "Freezing",
        region: "Unova"
    },
    {
        name: "Cryogonal",
        imageUrl: "images/615Cryogonal.png",
        number: "615",
        type: ["Ice"],
        category: "Crystallizing",
        region: "Unova"
    },
    {
        name: "Shelmet",
        imageUrl: "images/616Shelmet.png",
        number: "616",
        type: ["Bug"],
        category: "Snail",
        region: "Unova"
    },
    {
        name: "Accelgor",
        imageUrl: "images/617Accelgor.png",
        number: "617",
        type: ["Bug"],
        category: "Shell Out",
        region: "Unova"
    },
    {
        name: "Stunfisk",
        imageUrl: "images/618Stunfisk.png",
        number: "618",
        type: ["Ground", "Electric"],
        category: "Trap",
        region: "Unova"
    },
    {
        name: "Mienfoo",
        imageUrl: "images/619Mienfoo.png",
        number: "619",
        type: ["Fighting"],
        category: "Martial Arts",
        region: "Unova"
    },
    {
        name: "Mienshao",
        imageUrl: "images/620Mienshao.png",
        number: "620",
        type: ["Fighting"],
        category: "Martial Arts",
        region: "Unova"
    },
    {
        name: "Druddigon",
        imageUrl: "images/621Druddigon.png",
        number: "621",
        type: ["Dragon"],
        category: "Cave",
        region: "Unova"
    },
    {
        name: "Golett",
        imageUrl: "images/622Golett.png",
        number: "622",
        type: ["Ground", "Ghost"],
        category: "Automaton",
        region: "Unova"
    },
    {
        name: "Golurk",
        imageUrl: "images/623Golurk.png",
        number: "623",
        type: ["Ground", "Ghost"],
        category: "Automaton",
        region: "Unova"
    },
    {
        name: "Pawniard",
        imageUrl: "images/624Pawniard.png",
        number: "624",
        type: ["Dark", "Steel"],
        category: "Sharp Blade",
        region: "Unova"
    },
    {
        name: "Bisharp",
        imageUrl: "images/625Bisharp.png",
        number: "625",
        type: ["Dark", "Steel"],
        category: "Sword Blade",
        region: "Unova"
    },
    {
        name: "Bouffalant",
        imageUrl: "images/626Bouffalant.png",
        number: "626",
        type: ["Normal"],
        category: "Bash Buffalo",
        region: "Unova"
    },
    {
        name: "Rufflet",
        imageUrl: "images/627Rufflet.png",
        number: "627",
        type: ["Normal", "Flying"],
        category: "Eaglet",
        region: "Unova"
    },
    {
        name: "Braviary",
        imageUrl: "images/628Braviary.png",
        number: "628",
        type: ["Normal", "Flying"],
        category: "Valiant",
        region: "Unova"
    },
    {
        name: "Vullaby",
        imageUrl: "images/629Vullaby.png",
        number: "629",
        type: ["Dark", "Flying"],
        category: "Diapered",
        region: "Unova"
    },
    {
        name: "Mandibuzz",
        imageUrl: "images/630Mandibuzz.png",
        number: "630",
        type: ["Dark", "Flying"],
        category: "Bone Vulture",
        region: "Unova"
    },
    {
        name: "Heatmor",
        imageUrl: "images/631Heatmor.png",
        number: "631",
        type: ["Fire"],
        category: "Anteater",
        region: "Unova"
    },
    {
        name: "Durant",
        imageUrl: "images/632Durant.png",
        number: "632",
        type: ["Bug", "Steel"],
        category: "Iron Ant",
        region: "Unova"
    },
    {
        name: "Deino",
        imageUrl: "images/633Deino.png",
        number: "633",
        type: ["Dark", "Dragon"],
        category: "Irate",
        region: "Unova"
    },
    {
        name: "Zweilous",
        imageUrl: "images/634Zweilous.png",
        number: "634",
        type: ["Dark", "Dragon"],
        category: "Hostile",
        region: "Unova"
    },
    {
        name: "Hydreigon",
        imageUrl: "images/635Hydreigon.png",
        number: "635",
        type: ["Dark", "Dragon"],
        category: "Brutal",
        region: "Unova"
    },
    {
        name: "Larvesta",
        imageUrl: "images/636Larvesta.png",
        number: "636",
        type: ["Bug", "Fire"],
        category: "Torch",
        region: "Unova"
    },
    {
        name: "Volcarona",
        imageUrl: "images/637Volcarona.png",
        number: "637",
        type: ["Bug", "Fire"],
        category: "Sun",
        region: "Unova"
    },
    {
        name: "Cobalion",
        imageUrl: "images/638Cobalion.png",
        number: "638",
        type: ["Steel", "Fighting"],
        category: "Iron Will",
        region: "Unova"
    },
    {
        name: "Terrakion",
        imageUrl: "images/639Terrakion.png",
        number: "639",
        type: ["Rock", "Fighting"],
        category: "Cavern",
        region: "Unova"
    },
    {
        name: "Virizion",
        imageUrl: "images/640Virizion.png",
        number: "640",
        type: ["Grass", "Fighting"],
        category: "Grassland",
        region: "Unova"
    },
    {
        name: "Tornadus",
        imageUrl: "images/641Tornadus.png",
        number: "641",
        type: ["Flying"],
        category: "Cyclone",
        region: "Unova"
    },
    {
        name: "Thundurus",
        imageUrl: "images/642Thundurus.png",
        number: "642",
        type: ["Electric", "Flying"],
        category: "Bolt Strike",
        region: "Unova"
    },
    {
        name: "Reshiram",
        imageUrl: "images/643Reshiram.png",
        number: "643",
        type: ["Dragon", "Fire"],
        category: "Vast White",
        region: "Unova"
    },
    {
        name: "Zekrom",
        imageUrl: "images/644Zekrom.png",
        number: "644",
        type: ["Dragon", "Electric"],
        category: "Deep Black",
        region: "Unova"
    },
    {
        name: "Landorus",
        imageUrl: "images/645Landorus.png",
        number: "645",
        type: ["Ground", "Flying"],
        category: "Abundance",
        region: "Unova"
    },
    {
        name: "Kyurem",
        imageUrl: "images/646Kyurem.png",
        number: "646",
        type: ["Dragon", "Ice"],
        category: "Boundary",
        region: "Unova"
    },
    {
        name: "Keldeo",
        imageUrl: "images/647Keldeo.png",
        number: "647",
        type: ["Water", "Fighting"],
        category: "Colt",
        region: "Unova"
    },
    {
        name: "Meloetta",
        imageUrl: "images/648Meloetta.png",
        number: "648",
        type: ["Normal", "Psychic"],
        category: "Melody",
        region: "Unova"
    },
    {
        name: "Genesect",
        imageUrl: "images/649Genesect.png",
        number: "649",
        type: ["Bug", "Steel"],
        category: "Paleozoic",
        region: "Unova"
    },
    {
        name: "Chespin",
        imageUrl: "images/650Chespin.png",
        number: "650",
        type: ["Grass"],
        category: "Spiny Nut",
        region: "Kalos"
    },
    {
        name: "Quilladin",
        imageUrl: "images/651Quilladin.png",
        number: "651",
        type: ["Grass"],
        category: "Spiny Armor",
        region: "Kalos"
    },
    {
        name: "Chesnaught",
        imageUrl: "images/652Chesnaught.png",
        number: "652",
        type: ["Grass", "Fighting"],
        category: "Spiny Armor",
        region: "Kalos"
    },
    {
        name: "Fennekin",
        imageUrl: "images/653Fennekin.png",
        number: "653",
        type: ["Fire"],
        category: "Fox",
        region: "Kalos"
    },
    {
        name: "Braixen",
        imageUrl: "images/654Braixen.png",
        number: "654",
        type: ["Fire"],
        category: "Fox",
        region: "Kalos"
    },
    {
        name: "Delphox",
        imageUrl: "images/655Delphox.png",
        number: "655",
        type: ["Fire", "Psychic"],
        category: "Fox",
        region: "Kalos"
    },
    {
        name: "Froakie",
        imageUrl: "images/656Froakie.png",
        number: "656",
        type: ["Water"],
        category: "Bubble Frog",
        region: "Kalos"
    },
    {
        name: "Frogadier",
        imageUrl: "images/657Frogadier.png",
        number: "657",
        type: ["Water"],
        category: "Bubble Frog",
        region: "Kalos"
    },
    {
        name: "Greninja",
        imageUrl: "images/658Greninja.png",
        number: "658",
        type: ["Water", "Dark"],
        category: "Ninja",
        region: "Kalos"
    },
    {
        name: "Bunnelby",
        imageUrl: "images/659Bunnelby.png",
        number: "659",
        type: ["Normal"],
        category: "Digging",
        region: "Kalos"
    },
    {
        name: "Diggersby",
        imageUrl: "images/660Diggersby.png",
        number: "660",
        type: ["Normal", "Ground"],
        category: "Digging",
        region: "Kalos"
    },
    {
        name: "Fletchling",
        imageUrl: "images/661Fletchling.png",
        number: "661",
        type: ["Normal", "Flying"],
        category: "Tiny Robin",
        region: "Kalos"
    },
    {
        name: "Fletchinder",
        imageUrl: "images/662Fletchinder.png",
        number: "662",
        type: ["Fire", "Flying"],
        category: "Ember",
        region: "Kalos"
    },
    {
        name: "Talonflame",
        imageUrl: "images/663Talonflame.png",
        number: "663",
        type: ["Fire", "Flying"],
        category: "Scorching",
        region: "Kalos"
    },
    {
        name: "Scatterbug",
        imageUrl: "images/664Scatterbug.png",
        number: "664",
        type: ["Bug"],
        category: "Scatterdust",
        region: "Kalos"
    },
    {
        name: "Spewpa",
        imageUrl: "images/665Spewpa.png",
        number: "665",
        type: ["Bug"],
        category: "Scatterdust",
        region: "Kalos"
    },
    {
        name: "Vivillon",
        imageUrl: "images/666Vivillon.png",
        number: "666",
        type: ["Bug", "Flying"],
        category: "Scale",
        region: "Kalos"
    },
    {
        name: "Litleo",
        imageUrl: "images/667Litleo.png",
        number: "667",
        type: ["Fire", "Normal"],
        category: "Lion Cub",
        region: "Kalos"
    },
    {
        name: "Pyroar",
        imageUrl: "images/668Pyroar.png",
        number: "668",
        type: ["Fire", "Normal"],
        category: "Royal",
        region: "Kalos"
    },
    {
        name: "Flabébé",
        imageUrl: "images/669Flabebe.png",
        number: "669",
        type: ["Fairy"],
        category: "Single Bloom",
        region: "Kalos"
    },
    {
        name: "Floette",
        imageUrl: "images/670Floette.png",
        number: "670",
        type: ["Fairy"],
        category: "Single Bloom",
        region: "Kalos"
    },
    {
        name: "Florges",
        imageUrl: "images/671Florges.png",
        number: "671",
        type: ["Fairy"],
        category: "Garden",
        region: "Kalos"
    },
    {
        name: "Skiddo",
        imageUrl: "images/672Skiddo.png",
        number: "672",
        type: ["Grass"],
        category: "Mount",
        region: "Kalos"
    },
    {
        name: "Gogoat",
        imageUrl: "images/673Gogoat.png",
        number: "673",
        type: ["Grass"],
        category: "Mount",
        region: "Kalos"
    },
    {
        name: "Pancham",
        imageUrl: "images/674Pancham.png",
        number: "674",
        type: ["Fighting"],
        category: "Playful",
        region: "Kalos"
    },
    {
        name: "Pangoro",
        imageUrl: "images/675Pangoro.png",
        number: "675",
        type: ["Fighting", "Dark"],
        category: "Daunting",
        region: "Kalos"
    },
    {
        name: "Furfrou",
        imageUrl: "images/676Furfrou.png",
        number: "676",
        type: ["Normal"],
        category: "Poodle",
        region: "Kalos"
    },
    {
        name: "Espurr",
        imageUrl: "images/677Espurr.png",
        number: "677",
        type: ["Psychic"],
        category: "Restraint",
        region: "Kalos"
    },
    {
        name: "Meowstic",
        imageUrl: "images/678Meowstic.png",
        number: "678",
        type: ["Psychic"],
        category: "Constraint",
        region: "Kalos"
    },
    {
        name: "Honedge",
        imageUrl: "images/679Honedge.png",
        number: "679",
        type: ["Steel", "Ghost"],
        category: "Sword",
        region: "Kalos"
    },
    {
        name: "Doublade",
        imageUrl: "images/680Doublade.png",
        number: "680",
        type: ["Steel", "Ghost"],
        category: "Sword",
        region: "Kalos"
    },
    {
        name: "Aegislash",
        imageUrl: "images/681Aegislash.png",
        number: "681",
        type: ["Steel", "Ghost"],
        category: "Royal Sword",
        region: "Kalos"
    },
    {
        name: "Spritzee",
        imageUrl: "images/682Spritzee.png",
        number: "682",
        type: ["Fairy"],
        category: "Perfume",
        region: "Kalos"
    },
    {
        name: "Aromatisse",
        imageUrl: "images/683Aromatisse.png",
        number: "683",
        type: ["Fairy"],
        category: "Fragrance",
        region: "Kalos"
    },
    {
        name: "Swirlix",
        imageUrl: "images/684Swirlix.png",
        number: "684",
        type: ["Fairy"],
        category: "Cotton Candy",
        region: "Kalos"
    },
    {
        name: "Slurpuff",
        imageUrl: "images/685Slurpuff.png",
        number: "685",
        type: ["Fairy"],
        category: "Meringue",
        region: "Kalos"
    },
    {
        name: "Inkay",
        imageUrl: "images/686Inkay.png",
        number: "686",
        type: ["Dark", "Psychic"],
        category: "Revolving",
        region: "Kalos"
    },
    {
        name: "Malamar",
        imageUrl: "images/687Malamar.png",
        number: "687",
        type: ["Dark", "Psychic"],
        category: "Overturning",
        region: "Kalos"
    },
    {
        name: "Binacle",
        imageUrl: "images/688Binacle.png",
        number: "688",
        type: ["Rock", "Water"],
        category: "Two-Handed",
        region: "Kalos"
    },
    {
        name: "Barbaracle",
        imageUrl: "images/689Barbaracle.png",
        number: "689",
        type: ["Rock", "Water"],
        category: "Collective",
        region: "Kalos"
    },
    {
        name: "Skrelp",
        imageUrl: "images/690Skrelp.png",
        number: "690",
        type: ["Poison", "Water"],
        category: "Mock Kelp",
        region: "Kalos"
    },
    {
        name: "Dragalge",
        imageUrl: "images/691Dragalge.png",
        number: "691",
        type: ["Poison", "Dragon"],
        category: "Mock Kelp",
        region: "Kalos"
    },
    {
        name: "Clauncher",
        imageUrl: "images/692Clauncher.png",
        number: "692",
        type: ["Water"],
        category: "Water Gun",
        region: "Kalos"
    },
    {
        name: "Clawitzer",
        imageUrl: "images/693Clawitzer.png",
        number: "693",
        type: ["Water"],
        category: "Howitzer",
        region: "Kalos"
    },
    {
        name: "Helioptile",
        imageUrl: "images/694Helioptile.png",
        number: "694",
        type: ["Electric", "Normal"],
        category: "Generator",
        region: "Kalos"
    },
    {
        name: "Heliolisk",
        imageUrl: "images/695Heliolisk.png",
        number: "695",
        type: ["Electric", "Normal"],
        category: "Generator",
        region: "Kalos"
    },
    {
        name: "Tyrunt",
        imageUrl: "images/696Tyrunt.png",
        number: "696",
        type: ["Rock", "Dragon"],
        category: "Royal Heir",
        region: "Kalos"
    },
    {
        name: "Tyrantrum",
        imageUrl: "images/697Tyrantrum.png",
        number: "697",
        type: ["Rock", "Dragon"],
        category: "Despot",
        region: "Kalos"
    },
    {
        name: "Amaura",
        imageUrl: "images/698Amaura.png",
        number: "698",
        type: ["Rock", "Ice"],
        category: "Tundra",
        region: "Kalos"
    },
    {
        name: "Aurorus",
        imageUrl: "images/699Aurorus.png",
        number: "699",
        type: ["Rock", "Ice"],
        category: "Tundra",
        region: "Kalos"
    },
    {
        name: "Sylveon",
        imageUrl: "images/700Sylveon.png",
        number: "700",
        type: ["Fairy"],
        category: "Intertwining",
        region: "Kalos"
    },
    {
        name: "Hawlucha",
        imageUrl: "images/701Hawlucha.png",
        number: "701",
        type: ["Fighting", "Flying"],
        category: "Wrestling",
        region: "Kalos"
    },
    {
        name: "Dedenne",
        imageUrl: "images/702Dedenne.png",
        number: "702",
        type: ["Electric", "Fairy"],
        category: "Antenna",
        region: "Kalos"
    },
    {
        name: "Carbink",
        imageUrl: "images/703Carbink.png",
        number: "703",
        type: ["Rock", "Fairy"],
        category: "Jewel",
        region: "Kalos"
    },
    {
        name: "Goomy",
        imageUrl: "images/704Goomy.png",
        number: "704",
        type: ["Dragon"],
        category: "Soft Tissue",
        region: "Kalos"
    },
    {
        name: "Sliggoo",
        imageUrl: "images/705Sliggoo.png",
        number: "705",
        type: ["Dragon"],
        category: "Soft Tissue",
        region: "Kalos"
    },
    {
        name: "Goodra",
        imageUrl: "images/706Goodra.png",
        number: "706",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kalos"
    },
    {
        name: "Klefki",
        imageUrl: "images/707Klefki.png",
        number: "707",
        type: ["Steel", "Fairy"],
        category: "Key Ring",
        region: "Kalos"
    },
    {
        name: "Phantump",
        imageUrl: "images/708Phantump.png",
        number: "708",
        type: ["Ghost", "Grass"],
        category: "Stump",
        region: "Kalos"
    },
    {
        name: "Trevenant",
        imageUrl: "images/709Trevenant.png",
        number: "709",
        type: ["Ghost", "Grass"],
        category: "Elder Tree",
        region: "Kalos"
    },
    {
        name: "Pumpkaboo",
        imageUrl: "images/710Pumpkaboo.png",
        number: "710",
        type: ["Ghost", "Grass"],
        category: "Pumpkin",
        region: "Kalos"
    },
    {
        name: "Gourgeist",
        imageUrl: "images/711Gourgeist.png",
        number: "711",
        type: ["Ghost", "Grass"],
        category: "Pumpkin",
        region: "Kalos"
    },
    {
        name: "Bergmite",
        imageUrl: "images/712Bergmite.png",
        number: "712",
        type: ["Ice"],
        category: "Ice Chunk",
        region: "Kalos"
    },
    {
        name: "Avalugg",
        imageUrl: "images/713Avalugg.png",
        number: "713",
        type: ["Ice"],
        category: "Iceberg",
        region: "Kalos"
    },
    {
        name: "Noibat",
        imageUrl: "images/714Noibat.png",
        number: "714",
        type: ["Flying", "Dragon"],
        category: "Sound Wave",
        region: "Kalos"
    },
    {
        name: "Noivern",
        imageUrl: "images/715Noivern.png",
        number: "715",
        type: ["Flying", "Dragon"],
        category: "Sound Wave",
        region: "Kalos"
    },
    {
        name: "Xerneas",
        imageUrl: "images/716Xerneas.png",
        number: "716",
        type: ["Fairy"],
        category: "Life",
        region: "Kalos"
    },
    {
        name: "Yveltal",
        imageUrl: "images/717Yveltal.png",
        number: "717",
        type: ["Dark", "Flying"],
        category: "Destruction",
        region: "Kalos"
    },
    {
        name: "Zygarde",
        imageUrl: "images/718Zygarde.png",
        number: "718",
        type: ["Dragon", "Ground"],
        category: "Order",
        region: "Kalos"
    },
    {
        name: "Diancie",
        imageUrl: "images/719Diancie.png",
        number: "719",
        type: ["Rock", "Fairy"],
        category: "Jewel",
        region: "Kalos"
    },
    {
        name: "Hoopa",
        imageUrl: "images/720Hoopa.png",
        number: "720",
        type: ["Psychic", "Ghost"],
        category: "Mischief",
        region: "Kalos"
    },
    {
        name: "Volcanion",
        imageUrl: "images/721Volcanion.png",
        number: "721",
        type: ["Fire", "Water"],
        category: "Steam",
        region: "Kalos"
    },
    {
        name: "Rowlet",
        imageUrl: "images/722Rowlet.png",
        number: "722",
        type: ["Grass", "Flying"],
        category: "Grass Quill",
        region: "Alola"
    },
    {
        name: "Dartrix",
        imageUrl: "images/723Dartrix.png",
        number: "723",
        type: ["Grass", "Flying"],
        category: "Blade Quill",
        region: "Alola"
    },
    {
        name: "Decidueye",
        imageUrl: "images/724Decidueye.png",
        number: "724",
        type: ["Grass", "Ghost"],
        category: "Arrow Quill",
        region: "Alola"
    },
    {
        name: "Litten",
        imageUrl: "images/725Litten.png",
        number: "725",
        type: ["Fire"],
        category: "Fire Cat",
        region: "Alola"
    },
    {
        name: "Torracat",
        imageUrl: "images/726Torracat.png",
        number: "726",
        type: ["Fire"],
        category: "Fire Cat",
        region: "Alola"
    },
    {
        name: "Incineroar",
        imageUrl: "images/727Incineroar.png",
        number: "727",
        type: ["Fire", "Dark"],
        category: "Heel",
        region: "Alola"
    },
    {
        name: "Popplio",
        imageUrl: "images/728Popplio.png",
        number: "728",
        type: ["Water"],
        category: "Sea Lion",
        region: "Alola"
    },
    {
        name: "Brionne",
        imageUrl: "images/729Brionne.png",
        number: "729",
        type: ["Water"],
        category: "Pop Star",
        region: "Alola"
    },
    {
        name: "Primarina",
        imageUrl: "images/730Primarina.png",
        number: "730",
        type: ["Water", "Fairy"],
        category: "Soloist",
        region: "Alola"
    },
    {
        name: "Pikipek",
        imageUrl: "images/731Pikipek.png",
        number: "731",
        type: ["Normal", "Flying"],
        category: "Woodpecker",
        region: "Alola"
    },
    {
        name: "Trumbeak",
        imageUrl: "images/732Trumbeak.png",
        number: "732",
        type: ["Normal", "Flying"],
        category: "Bugle Beak",
        region: "Alola"
    },
    {
        name: "Toucannon",
        imageUrl: "images/733Toucannon.png",
        number: "733",
        type: ["Normal", "Flying"],
        category: "Cannon",
        region: "Alola"
    },
    {
        name: "Yungoos",
        imageUrl: "images/734Yungoos.png",
        number: "734",
        type: ["Normal"],
        category: "Loitering",
        region: "Alola"
    },
    {
        name: "Gumshoos",
        imageUrl: "images/735Gumshoos.png",
        number: "735",
        type: ["Normal"],
        category: "Stakeout",
        region: "Alola"
    },
    {
        name: "Grubbin",
        imageUrl: "images/736Grubbin.png",
        number: "736",
        type: ["Bug"],
        category: "Larva",
        region: "Alola"
    },
    {
        name: "Charjabug",
        imageUrl: "images/737Charjabug.png",
        number: "737",
        type: ["Bug", "Electric"],
        category: "Battery",
        region: "Alola"
    },
    {
        name: "Vikavolt",
        imageUrl: "images/738Vikavolt.png",
        number: "738",
        type: ["Bug", "Electric"],
        category: "Stag Beetle",
        region: "Alola"
    },
    {
        name: "Crabrawler",
        imageUrl: "images/739Crabrawler.png",
        number: "739",
        type: ["Fighting"],
        category: "Boxing",
        region: "Alola"
    },
    {
        name: "Crabominable",
        imageUrl: "images/740Crabominable.png",
        number: "740",
        type: ["Fighting", "Ice"],
        category: "Woolly Crab",
        region: "Alola"
    },
    {
        name: "Oricorio",
        imageUrl: "images/741Oricorio.png",
        number: "741",
        type: ["Fire", "Flying"],
        category: "Dancing",
        region: "Alola"
    },
    {
        name: "Cutiefly",
        imageUrl: "images/742Cutiefly.png",
        number: "742",
        type: ["Bug", "Fairy"],
        category: "Bee Fly",
        region: "Alola"
    },
    {
        name: "Ribombee",
        imageUrl: "images/743Ribombee.png",
        number: "743",
        type: ["Bug", "Fairy"],
        category: "Bee Fly",
        region: "Alola"
    },
    {
        name: "Rockruff",
        imageUrl: "images/744Rockruff.png",
        number: "744",
        type: ["Rock"],
        category: "Puppy",
        region: "Alola"
    },
    {
        name: "Lycanroc",
        imageUrl: "images/745Lycanroc.png",
        number: "745",
        type: ["Rock"],
        category: "Wolf",
        region: "Alola"
    },
    {
        name: "Wishiwashi",
        imageUrl: "images/746Wishiwashi.png",
        number: "746",
        type: ["Water"],
        category: "Small Fry",
        region: "Alola"
    },
    {
        name: "Mareanie",
        imageUrl: "images/747Mareanie.png",
        number: "747",
        type: ["Poison", "Water"],
        category: "Brutal Star",
        region: "Alola"
    },
    {
        name: "Toxapex",
        imageUrl: "images/748Toxapex.png",
        number: "748",
        type: ["Poison", "Water"],
        category: "Brutal Star",
        region: "Alola"
    },
    {
        name: "Mudbray",
        imageUrl: "images/749Mudbray.png",
        number: "749",
        type: ["Ground"],
        category: "Donkey",
        region: "Alola"
    },
    {
        name: "Mudsdale",
        imageUrl: "images/750Mudsdale.png",
        number: "750",
        type: ["Ground"],
        category: "Draft Horse",
        region: "Alola"
    },
    {
        name: "Dewpider",
        imageUrl: "images/751Dewpider.png",
        number: "751",
        type: ["Water", "Bug"],
        category: "Water Bubble",
        region: "Alola"
    },
    {
        name: "Araquanid",
        imageUrl: "images/752Araquanid.png",
        number: "752",
        type: ["Water", "Bug"],
        category: "Water Bubble",
        region: "Alola"
    },
    {
        name: "Fomantis",
        imageUrl: "images/753Fomantis.png",
        number: "753",
        type: ["Grass"],
        category: "Sickle Grass",
        region: "Alola"
    },
    {
        name: "Lurantis",
        imageUrl: "images/754Lurantis.png",
        number: "754",
        type: ["Grass"],
        category: "Bloom Sickle",
        region: "Alola"
    },
    {
        name: "Morelull",
        imageUrl: "images/755Morelull.png",
        number: "755",
        type: ["Grass", "Fairy"],
        category: "Illuminating",
        region: "Alola"
    },
    {
        name: "Shiinotic",
        imageUrl: "images/756Shiinotic.png",
        number: "756",
        type: ["Grass", "Fairy"],
        category: "Illuminating",
        region: "Alola"
    },
    {
        name: "Salandit",
        imageUrl: "images/757Salandit.png",
        number: "757",
        type: ["Poison", "Fire"],
        category: "Toxic Lizard",
        region: "Alola"
    },
    {
        name: "Salazzle",
        imageUrl: "images/758Salazzle.png",
        number: "758",
        type: ["Poison", "FIre"],
        category: "Toxic Lizard",
        region: "Alola"
    },
    {
        name: "Stufful",
        imageUrl: "images/759Stufful.png",
        number: "759",
        type: ["Normal", "Fighting"],
        category: "Flailing",
        region: "Alola"
    },
    {
        name: "Bewear",
        imageUrl: "images/760Bewear.png",
        number: "760",
        type: ["Normal", "Fighting"],
        category: "Strong Arm",
        region: "Alola"
    },
    {
        name: "Bounsweet",
        imageUrl: "images/761Bounsweet.png",
        number: "761",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola"
    },
    {
        name: "Steenee",
        imageUrl: "images/762Steenee.png",
        number: "762",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola"
    },
    {
        name: "Tsareena",
        imageUrl: "images/763Tsareena.png",
        number: "763",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola"
    },
    {
        name: "Comfey",
        imageUrl: "images/764Comfey.png",
        number: "764",
        type: ["Fairy"],
        category: "Posy Picker",
        region: "Alola"
    },
    {
        name: "Oranguru",
        imageUrl: "images/765Oranguru.png",
        number: "765",
        type: ["Normal", "Psychic"],
        category: "Sage",
        region: "Alola"
    },
    {
        name: "Passimian",
        imageUrl: "images/766Passimian.png",
        number: "766",
        type: ["Fighting"],
        category: "Teamwork",
        region: "Alola"
    },
    {
        name: "Wimpod",
        imageUrl: "images/767Wimpod.png",
        number: "767",
        type: ["Bug", "Water"],
        category: "Turn Tail",
        region: "Alola"
    },
    {
        name: "Golisopod",
        imageUrl: "images/768Golisopod.png",
        number: "768",
        type: ["Bug", "Water"],
        category: "Hard Scale",
        region: "Alola"
    },
    {
        name: "Sandygast",
        imageUrl: "images/769Sandygast.png",
        number: "769",
        type: ["Ghost", "Ground"],
        category: "Sand Heap",
        region: "Alola"
    },
    {
        name: "Palossand",
        imageUrl: "images/770Palossand.png",
        number: "770",
        type: ["Ghost", "Ground"],
        category: "Sand Castle",
        region: "Alola"
    },
    {
        name: "Pyukumuku",
        imageUrl: "images/771Pyukumuku.png",
        number: "771",
        type: ["Water"],
        category: "Sea Cucumber",
        region: "Alola"
    },
    {
        name: "Type: Null",
        imageUrl: "images/772Type_Null.png",
        number: "772",
        type: ["Normal"],
        category: "Synthetic",
        region: "Alola"
    },
    {
        name: "Silvally",
        imageUrl: "images/773Silvally.png",
        number: "773",
        type: ["Normal"],
        category: "Synthetic",
        region: "Alola"
    },
    {
        name: "Minior",
        imageUrl: "images/774Minior.png",
        number: "774",
        type: ["Rock", "Flying"],
        category: "Meteor",
        region: "Alola"
    },
    {
        name: "Komala",
        imageUrl: "images/775Komala.png",
        number: "775",
        type: ["Normal"],
        category: "Drowsing",
        region: "Alola"
    },
    {
        name: "Turtonator",
        imageUrl: "images/776Turtonator.png",
        number: "776",
        type: ["Fire", "Dragon"],
        category: "Blast Turtle",
        region: "Alola"
    },
    {
        name: "Togedemaru",
        imageUrl: "images/777Togedemaru.png",
        number: "777",
        type: ["Electric", "Steel"],
        category: "Roly-Poly",
        region: "Alola"
    },
    {
        name: "Mimikyu",
        imageUrl: "images/778Mimikyu.png",
        number: "778",
        type: ["Ghost", "Fairy"],
        category: "Disguise",
        region: "Alola"
    },
    {
        name: "Bruxish",
        imageUrl: "images/779Bruxish.png",
        number: "779",
        type: ["Water", "Psychic"],
        category: "Gnash Teeth",
        region: "Alola"
    },
    {
        name: "Drampa",
        imageUrl: "images/780Drampa.png",
        number: "780",
        type: ["Normal", "Dragon"],
        category: "Placid",
        region: "Alola"
    },
    {
        name: "Dhelmise",
        imageUrl: "images/781Dhelmise.png",
        number: "781",
        type: ["Ghost", "Grass"],
        category: "Sea Creeper",
        region: "Alola"
    },
    {
        name: "Jangmo-o",
        imageUrl: "images/782Jangmo-o.png",
        number: "782",
        type: ["Dragon"],
        category: "Scaly",
        region: "Alola"
    },
    {
        name: "Hakamo-o",
        imageUrl: "images/783Hakamo-o.png",
        number: "783",
        type: ["Dragon", "Fighting"],
        category: "Scaly",
        region: "Alola"
    },
    {
        name: "Kommo-o",
        imageUrl: "images/784Kommo-o.png",
        number: "784",
        type: ["Dragon", "Fighting"],
        category: "Scaly",
        region: "Alola"
    },
    {
        name: "Tapu Koko",
        imageUrl: "images/785Tapu_Koko.png",
        number: "785",
        type: ["Electric", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Tapu Lele",
        imageUrl: "images/786Tapu_Lele.png",
        number: "786",
        type: ["Psychic", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Tapu Bulu",
        imageUrl: "images/787Tapu_Bulu.png",
        number: "787",
        type: ["Grass", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Tapu Fini",
        imageUrl: "images/788Tapu_Fini.png",
        number: "788",
        type: ["Water", "Fairy"],
        category: "Land Spirit",
        region: "Alola"
    },
    {
        name: "Cosmog",
        imageUrl: "images/789Cosmog.png",
        number: "789",
        type: ["Psychic"],
        category: "Nebula",
        region: "Alola"
    },
    {
        name: "Cosmoem",
        imageUrl: "images/790Cosmoem.png",
        number: "790",
        type: ["Psychic"],
        category: "Protostar",
        region: "Alola"
    },
    {
        name: "Solgaleo",
        imageUrl: "images/791Solgaleo.png",
        number: "791",
        type: ["Psychic", "Steel"],
        category: "Sunne",
        region: "Alola"
    },
    {
        name: "Lunala",
        imageUrl: "images/792Lunala.png",
        number: "792",
        type: ["Psychic", "Ghost"],
        category: "Moone",
        region: "Alola"
    },
    {
        name: "Nihilego",
        imageUrl: "images/793Nihilego.png",
        number: "793",
        type: ["Rock", "Poison"],
        category: "Parasite",
        region: "Alola"
    },
    {
        name: "Buzzwole",
        imageUrl: "images/794Buzzwole.png",
        number: "794",
        type: ["Bug", "Fighting"],
        category: "Swollen",
        region: "Alola"
    },
    {
        name: "Pheromosa",
        imageUrl: "images/795Pheromosa.png",
        number: "795",
        type: ["Bug", "Fighting"],
        category: "Lissome",
        region: "Alola"
    },
    {
        name: "Xurkitree",
        imageUrl: "images/796Xurkitree.png",
        number: "796",
        type: ["Electric"],
        category: "Glowing",
        region: "Alola"
    },
    {
        name: "Celesteela",
        imageUrl: "images/797Celesteela.png",
        number: "797",
        type: ["Steel", "Flying"],
        category: "Launch",
        region: "Alola"
    },
    {
        name: "Kartana",
        imageUrl: "images/798Kartana.png",
        number: "798",
        type: ["Grass", "Steel"],
        category: "Drawn Sword",
        region: "Alola"
    },
    {
        name: "Guzzlord",
        imageUrl: "images/799Guzzlord.png",
        number: "799",
        type: ["Dark", "Dragon"],
        category: "Junkivore",
        region: "Alola"
    },
    {
        name: "Necrozma",
        imageUrl: "images/800Necrozma.png",
        number: "800",
        type: ["Psychic"],
        category: "Prism",
        region: "Alola"
    },
    {
        name: "Magearna",
        imageUrl: "images/801Magearna.png",
        number: "801",
        type: ["Steel", "Fairy"],
        category: "Artificial",
        region: "Alola"
    },
    {
        name: "Marshadow",
        imageUrl: "images/802Marshadow.png",
        number: "802",
        type: ["Fighting", "Ghost"],
        category: "Gloomdweller",
        region: "Alola"
    },
    {
        name: "Poipole",
        imageUrl: "images/803Poipole.png",
        number: "803",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Alola"
    },
    {
        name: "Naganadel",
        imageUrl: "images/804Naganadel.png",
        number: "804",
        type: ["Poison", "Dragon"],
        category: "Poison Pin",
        region: "Alola"
    },
    {
        name: "Stakataka",
        imageUrl: "images/805Stakataka.png",
        number: "805",
        type: ["Rock", "Steel"],
        category: "Rampart",
        region: "Alola"
    },
    {
        name: "Blacephalon",
        imageUrl: "images/806Blacephalon.png",
        number: "806",
        type: ["Fire", "Ghost"],
        category: "Fireworks",
        region: "Alola"
    },
    {
        name: "Zeraora",
        imageUrl: "images/807Zeraora.png",
        number: "807",
        type: ["Electric"],
        category: "Thunderclap",
        region: "Alola"
    },
    {
        name: "Meltan",
        imageUrl: "images/808Meltan.png",
        number: "808",
        type: ["Steel"],
        category: "Hex Nut",
        region: "Alola"
    },
    {
        name: "Melmetal",
        imageUrl: "images/809Melmetal.png",
        number: "809",
        type: ["Steel"],
        category: "Hex Nut",
        region: "Alola"
    },
    {
        name: "Grookey",
        imageUrl: "images/810Grookey.png",
        number: "810",
        type: ["Grass"],
        category: "Chimp",
        region: "Galar"
    },
    {
        name: "Thwackey",
        imageUrl: "images/811Thwackey.png",
        number: "811",
        type: ["Grass"],
        category: "Beat",
        region: "Galar"
    },
    {
        name: "Rillaboom",
        imageUrl: "images/812Rillaboom.png",
        number: "812",
        type: ["Grass"],
        category: "Drummer",
        region: "Galar"
    },
    {
        name: "Scorbunny",
        imageUrl: "images/813Scorbunny.png",
        number: "813",
        type: ["Fire"],
        category: "Rabbit",
        region: "Galar"
    },
    {
        name: "Raboot",
        imageUrl: "images/814Raboot.png",
        number: "814",
        type: ["Fire"],
        category: "Rabbit",
        region: "Galar"
    },
    {
        name: "Cinderace",
        imageUrl: "images/815Cinderace.png",
        number: "815",
        type: ["Fire"],
        category: "Striker",
        region: "Galar"
    },
    {
        name: "Sobble",
        imageUrl: "images/816Sobble.png",
        number: "816",
        type: ["Water"],
        category: "Water Lizard",
        region: "Galar"
    },
    {
        name: "Drizzile",
        imageUrl: "images/817Drizzile.png",
        number: "817",
        type: ["Water"],
        category: "Water Lizard",
        region: "Galar"
    },
    {
        name: "Inteleon",
        imageUrl: "images/818Inteleon.png",
        number: "818",
        type: ["Water"],
        category: "Secret Agent",
        region: "Galar"
    },
    {
        name: "Skwovet",
        imageUrl: "images/819Skwovet.png",
        number: "819",
        type: ["Normal"],
        category: "Cheeky",
        region: "Galar"
    },
    {
        name: "Greedent",
        imageUrl: "images/820Greedent.png",
        number: "820",
        type: ["Normal"],
        category: "Greedy",
        region: "Galar"
    },
    {
        name: "Rookidee",
        imageUrl: "images/821Rookidee.png",
        number: "821",
        type: ["Flying"],
        category: "Tiny Bird",
        region: "Galar"
    },
    {
        name: "Corvisquire",
        imageUrl: "images/822Corvisquire.png",
        number: "822",
        type: ["Flying"],
        category: "Raven",
        region: "Galar"
    },
    {
        name: "Corviknight",
        imageUrl: "images/823Corviknight.png",
        number: "823",
        type: ["Flying", "Steel"],
        category: "Raven",
        region: "Galar"
    },
    {
        name: "Blipbug",
        imageUrl: "images/824Blipbug.png",
        number: "824",
        type: ["Bug"],
        category: "Larva",
        region: "Galar"
    },
    {
        name: "Dottler",
        imageUrl: "images/825Dottler.png",
        number: "825",
        type: ["Bug", "Psychic"],
        category: "Radome",
        region: "Galar"
    },
    {
        name: "Orbeetle",
        imageUrl: "images/826Orbeetle.png",
        number: "826",
        type: ["Bug", "Psychic"],
        category: "Seven Spot",
        region: "Galar"
    },
    {
        name: "Nickit",
        imageUrl: "images/827Nickit.png",
        number: "827",
        type: ["Dark"],
        category: "Fox",
        region: "Galar"
    },
    {
        name: "Thievul",
        imageUrl: "images/828Thievul.png",
        number: "828",
        type: ["Dark"],
        category: "Fox",
        region: "Galar"
    },
    {
        name: "Gossifleur",
        imageUrl: "images/829Gossifleur.png",
        number: "829",
        type: ["Grass"],
        category: "Flowering",
        region: "Galar"
    },
    {
        name: "Eldegoss",
        imageUrl: "images/830Eldegoss.png",
        number: "830",
        type: ["Grass"],
        category: "Cotton Bloom",
        region: "Galar"
    },
    {
        name: "Wooloo",
        imageUrl: "images/831Wooloo.png",
        number: "831",
        type: ["Normal"],
        category: "Sheep",
        region: "Galar"
    },
    {
        name: "Dubwool",
        imageUrl: "images/832Dubwool.png",
        number: "832",
        type: ["Normal"],
        category: "Sheep",
        region: "Galar"
    },
    {
        name: "Chewtle",
        imageUrl: "images/833Chewtle.png",
        number: "833",
        type: ["Water"],
        category: "Snapping",
        region: "Galar"
    },
    {
        name: "Drednaw",
        imageUrl: "images/834Drednaw.png",
        number: "834",
        type: ["Water", "Rock"],
        category: "Bite",
        region: "Galar"
    },
    {
        name: "Yamper",
        imageUrl: "images/835Yamper.png",
        number: "835",
        type: ["Electric"],
        category: "Puppy",
        region: "Galar"
    },
    {
        name: "Boltund",
        imageUrl: "images/836Boltund.png",
        number: "836",
        type: ["Electric"],
        category: "Dog",
        region: "Galar"
    },
    {
        name: "Rolycoly",
        imageUrl: "images/837Rolycoly.png",
        number: "837",
        type: ["Rock"],
        category: "Coal",
        region: "Galar"
    },
    {
        name: "Carkol",
        imageUrl: "images/838Carkol.png",
        number: "838",
        type: ["Rock", "Fire"],
        category: "Coal",
        region: "Galar"
    },
    {
        name: "Coalossal",
        imageUrl: "images/839Coalossal.png",
        number: "839",
        type: ["Rock", "Fire"],
        category: "Coal",
        region: "Galar"
    },
    {
        name: "Applin",
        imageUrl: "images/840Applin.png",
        number: "840",
        type: ["Grass", "Dragon"],
        category: "Apple Core",
        region: "Galar"
    },
    {
        name: "Flapple",
        imageUrl: "images/841Flapple.png",
        number: "841",
        type: ["Grass", "Dragon"],
        category: "Apple Wing",
        region: "Galar"
    },
    {
        name: "Appletun",
        imageUrl: "images/842Appletun.png",
        number: "842",
        type: ["Grass", "Dragon"],
        category: "Apple Nectar",
        region: "Galar"
    },
    {
        name: "Silicobra",
        imageUrl: "images/843Silicobra.png",
        number: "843",
        type: ["Ground"],
        category: "Sand Snake",
        region: "Galar"
    },
    {
        name: "Sandaconda",
        imageUrl: "images/844Sandaconda.png",
        number: "844",
        type: ["Ground"],
        category: "Sand Snake",
        region: "Galar"
    },
    {
        name: "Cramorant",
        imageUrl: "images/845Cramorant.png",
        number: "845",
        type: ["Flying", "Water"],
        category: "Sand Snake",
        region: "Galar"
    },
    {
        name: "Arrokuda",
        imageUrl: "images/846Arrokuda.png",
        number: "846",
        type: ["Water"],
        category: "Rush",
        region: "Galar"
    },
    {
        name: "Barraskewda",
        imageUrl: "images/847Barraskewda.png",
        number: "847",
        type: ["Water"],
        category: "Skewer",
        region: "Galar"
    },
    {
        name: "Toxel",
        imageUrl: "images/848Toxel.png",
        number: "848",
        type: ["Electric", "Poison"],
        category: "Baby",
        region: "Galar"
    },
    {
        name: "Toxtricity",
        imageUrl: "images/849Toxtricity.png",
        number: "849",
        type: ["Electric", "Poison"],
        category: "Punk",
        region: "Galar"
    },
    {
        name: "Sizzlipede",
        imageUrl: "images/850Sizzlipede.png",
        number: "850",
        type: ["Fire", "Bug"],
        category: "Radiator",
        region: "Galar"
    },
    {
        name: "Centiskorch",
        imageUrl: "images/851Centiskorch.png",
        number: "851",
        type: ["Fire", "Bug"],
        category: "Radiator",
        region: "Galar"
    },
    {
        name: "Clobbopus",
        imageUrl: "images/852Clobbopus.png",
        number: "852",
        type: ["Fighting"],
        category: "Tantrum",
        region: "Galar"
    },
    {
        name: "Grapploct",
        imageUrl: "images/853Grapploct.png",
        number: "853",
        type: ["Fighting"],
        category: "Jujitsu",
        region: "Galar"
    },
    {
        name: "Sinistea",
        imageUrl: "images/854Sinistea.png",
        number: "854",
        type: ["Ghost"],
        category: "Black Tea",
        region: "Galar"
    },
    {
        name: "Polteageist",
        imageUrl: "images/855Polteageist.png",
        number: "855",
        type: ["Ghost"],
        category: "Black Tea",
        region: "Galar"
    },
    {
        name: "Hatenna",
        imageUrl: "images/856Hatenna.png",
        number: "856",
        type: ["Psychic"],
        category: "Calm",
        region: "Galar"
    },
    {
        name: "Hattrem",
        imageUrl: "images/857Hattrem.png",
        number: "857",
        type: ["Psychic"],
        category: "Serene",
        region: "Galar"
    },
    {
        name: "Hatterene",
        imageUrl: "images/858Hatterene.png",
        number: "858",
        type: ["Psychic", "Fairy"],
        category: "Silent",
        region: "Galar"
    },
    {
        name: "Impidimp",
        imageUrl: "images/859Impidimp.png",
        number: "859",
        type: ["Dark", "Fairy"],
        category: "Wily",
        region: "Galar"
    },
    {
        name: "Morgrem",
        imageUrl: "images/860Morgrem.png",
        number: "860",
        type: ["Dark", "Fairy"],
        category: "Devious",
        region: "Galar"
    },
    {
        name: "Grimmsnarl",
        imageUrl: "images/861Grimmsnarl.png",
        number: "861",
        type: ["Dark", "Fairy"],
        category: "Bulk Up",
        region: "Galar"
    },
    {
        name: "Obstagoon",
        imageUrl: "images/862Obstagoon.png",
        number: "862",
        type: ["Dark", "Normal"],
        category: "Blocking",
        region: "Galar"
    },
    {
        name: "Perrserker",
        imageUrl: "images/863Perrserker.png",
        number: "863",
        type: ["Steel"],
        category: "Viking",
        region: "Galar"
    },
    {
        name: "Cursola",
        imageUrl: "images/864Cursola.png",
        number: "864",
        type: ["Ghost"],
        category: "Coral",
        region: "Galar"
    },
    {
        name: "Sirfetch'd",
        imageUrl: "images/865Sirfetch'd.png",
        number: "865",
        type: ["Fighting"],
        category: "Wild Duck",
        region: "Galar"
    },
    {
        name: "Mr. Rime",
        imageUrl: "images/866Mr._Rime.png",
        number: "866",
        type: ["Ice, Psychic"],
        category: "Comedian",
        region: "Galar"
    },
    {
        name: "Runerigus",
        imageUrl: "images/867Runerigus.png",
        number: "867",
        type: ["Ground", "Ghost"],
        category: "Grudge",
        region: "Galar"
    },
    {
        name: "Milcery",
        imageUrl: "images/868Milcery.png",
        number: "868",
        type: ["Fairy"],
        category: "Cream",
        region: "Galar"
    },
    {
        name: "Alcremie",
        imageUrl: "images/869Alcremie.png",
        number: "869",
        type: ["Fairy"],
        category: "Cream",
        region: "Galar"
    },
    {
        name: "Falinks",
        imageUrl: "images/870Falinks.png",
        number: "870",
        type: ["Fighting"],
        category: "Formation",
        region: "Galar"
    },
    {
        name: "Pincurchin",
        imageUrl: "images/871Pincurchin.png",
        number: "871",
        type: ["Electric"],
        category: "Sea Urchin",
        region: "Galar"
    },
    {
        name: "Snom",
        imageUrl: "images/872Snom.png",
        number: "872",
        type: ["Ice", "Bug"],
        category: "Worm",
        region: "Galar"
    },
    {
        name: "Frosmoth",
        imageUrl: "images/873Frosmoth.png",
        number: "873",
        type: ["Ice", "Bug"],
        category: "Frost Moth",
        region: "Galar"
    },
    {
        name: "Stonjourner",
        imageUrl: "images/874Stonjourner.png",
        number: "874",
        type: ["Rock"],
        category: "Big Rock",
        region: "Galar"
    },
    {
        name: "Eiscue",
        imageUrl: "images/875Eiscue.png",
        number: "875",
        type: ["Ice"],
        category: "Penguin",
        region: "Galar"
    },
    {
        name: "Indeedee",
        imageUrl: "images/876Indeedee.png",
        number: "876",
        type: ["Psychic", "Normal"],
        category: "Emotion",
        region: "Galar"
    },
    {
        name: "Morpeko",
        imageUrl: "images/877Morpeko.png",
        number: "877",
        type: ["Electric", "Dark"],
        category: "Two-Sided",
        region: "Galar"
    },
    {
        name: "Cufant",
        imageUrl: "images/878Cufant.png",
        number: "878",
        type: ["Steel"],
        category: "Copperderm",
        region: "Galar"
    },
    {
        name: "Copperajah",
        imageUrl: "images/879Copperajah.png",
        number: "879",
        type: ["Steel"],
        category: "Copperderm",
        region: "Galar"
    },
    {
        name: "Dracozolt",
        imageUrl: "images/880Dracozolt.png",
        number: "880",
        type: ["Electric", "Dragon"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Arctozolt",
        imageUrl: "images/881Arctozolt.png",
        number: "881",
        type: ["Electric", "Ice"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Dracovish",
        imageUrl: "images/882Dracovish.png",
        number: "882",
        type: ["Water", "Dragon"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Arctovish",
        imageUrl: "images/883Arctovish.png",
        number: "883",
        type: ["Water", "Ice"],
        category: "Fossil",
        region: "Galar"
    },
    {
        name: "Duraludon",
        imageUrl: "images/884Duraludon.png",
        number: "884",
        type: ["Steel", "Dragon"],
        category: "Alloy",
        region: "Galar"
    },
    {
        name: "Dreepy",
        imageUrl: "images/885Dreepy.png",
        number: "885",
        type: ["Dragon", "Ghost"],
        category: "Lingering",
        region: "Galar"
    },
    {
        name: "Drakloak",
        imageUrl: "images/886Drakloak.png",
        number: "886",
        type: ["Dragon", "Ghost"],
        category: "Caretaker",
        region: "Galar"
    },
    {
        name: "Dragapult",
        imageUrl: "images/887Dragapult.png",
        number: "887",
        type: ["Dragon", "Ghost"],
        category: "Stealth",
        region: "Galar"
    },
    {
        name: "Zacian",
        imageUrl: "images/888Zacian.png",
        number: "888",
        type: ["Fairy", "Steel"],
        category: "Warrior",
        region: "Galar"
    },
    {
        name: "Zamazenta",
        imageUrl: "images/889Zamazenta.png",
        number: "889",
        type: ["Fighting", "Steel"],
        category: "Warrior",
        region: "Galar"
    },
    {
        name: "Eternatus",
        imageUrl: "images/890Eternatus.png",
        number: "890",
        type: ["Poison", "Dragon"],
        category: "Gigantic",
        region: "Galar"
    },
    {
        name: "Kubfu",
        imageUrl: "images/891Kubfu.png",
        number: "891",
        type: ["Fighting"],
        category: "Wushu",
        region: "Galar"
    },
    {
        name: "Urshifu",
        imageUrl: "images/892Urshifu.png",
        number: "892",
        type: ["Fighting", "Dark"],
        category: "Wushu",
        region: "Galar"
    },
    {
        name: "Zarude",
        imageUrl: "images/893Zarude.png",
        number: "893",
        type: ["Dark", "Grass"],
        category: "Rogue Monkey",
        region: "Galar"
    },
    {
        name: "Regieleki",
        imageUrl: "images/894Regieleki.png",
        number: "894",
        type: ["Electric"],
        category: "Electron",
        region: "Galar"
    },
    {
        name: "Regidrago",
        imageUrl: "images/895Regidrago.png",
        number: "895",
        type: ["Dragon"],
        category: "Dragon Orb",
        region: "Galar"
    },
    {
        name: "Glastrier",
        imageUrl: "images/896Glastrier.png",
        number: "896",
        type: ["Ice"],
        category: "Wild Horse",
        region: "Galar"
    },
    {
        name: "Spectrier",
        imageUrl: "images/897Spectrier.png",
        number: "897",
        type: ["Ghost"],
        category: "Swift Horse",
        region: "Galar"
    },
    {
        name: "Calyrex",
        imageUrl: "images/898Calyrex.png",
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
        let pokemonName = document.createElement("h3")
        pokemonName.append(pocketMonster.name)
        let pokemonImage = document.createElement("img")
        pokemonImage.src = pocketMonster.imageUrl
        pokemonImage.style = "height:200px"
        let pokemonNumber = document.createElement("p")
        pokemonNumber.append("#", pocketMonster.number)
        let pokemonType = document.createElement("p")
        let typeString = (pocketMonster.type).toString()
        let typeFormat = typeString.replace(",", "/")
        pokemonType.append("Type: " , typeFormat)
        let pokemonCategory = document.createElement("p")
        pokemonCategory.append(pocketMonster.category , " Pokémon")
        let pokemonRegion = document.createElement("p")
        pokemonRegion.append("Region: " , pocketMonster.region)
        divVariable.append(pokemonName)
        divVariable.append(pokemonImage)
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
.filter(searching => searching.type.toLowerCase().indexOf(typeId.toLowerCase()) > -1 )
.filter(searching => searching.category.toLowerCase().indexOf(categoryId.toLowerCase()) > -1 )
.filter(searching => searching.region.toLowerCase().indexOf(regionId.toLowerCase()) > -1 )

dexRender(filterPokemon)

}