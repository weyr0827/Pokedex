//Pokedex Search Code

let nationalDex = [
    {
        name: "Bulbasaur",
        imageUrl: "images/001Bulbasaur.png",
        number: "001",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto",
        height: "2'04\"",
        weight: "15.2 lbs."
    },
    {
        name: "Ivysaur",
        imageUrl: "images/002Ivysaur.png",
        number: "002",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto",
        height: "3'03\"",
        weight: "28.7 lbs."
    },
    {
        name: "Venusaur",
        imageUrl: "images/003Venusaur.png",
        number: "003",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto",
        height: "6'07\"",
        weight: "220.5 lbs."
    },
    {
        name: "Mega Venusaur",
        imageUrl: "forms/003Venusaur-Mega.png",
        number: "003",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto",
        height: "7'10\"",
        weight: "342.8 lbs."
    },
    {
        name: "Gigantamax Venusaur",
        imageUrl: "forms/003Venusaur-Gigantamax.png",
        number: "003",
        type: ["Grass", "Poison"],
        category: "Seed",
        region: "Kanto",
        height: "78'09\"+",
        weight: "??? lbs."
    },
    {
        name: "Charmander",
        imageUrl: "images/004Charmander.png",
        number: "004",
        type: ["Fire"],
        category: "Lizard",
        region: "Kanto",
        height: "2'00\"",
        weight: "18.7 lbs."
    },
    {
        name: "Charmeleon",
        imageUrl: "images/005Charmeleon.png",
        number: "005",
        type: ["Fire"],
        category: "Flame",
        region: "Kanto",
        height: "3'07\"",
        weight: "41.9 lbs."
    },
    {
        name: "Charizard",
        imageUrl: "images/006Charizard.png",
        number: "006",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto",
        height: "5'07\"",
        weight: "199.5 lbs."
    },
    {
        name: "Mega Charizard X",
        imageUrl: "forms/006Charizard-Mega_X.png",
        number: "006",
        type: ["Fire", "Dragon"],
        category: "Flame",
        region: "Kanto",
        height: "5'07\"",
        weight: "243.6 lbs."
    },
    {
        name: "Mega Charizard Y",
        imageUrl: "forms/006Charizard-Mega_Y.png",
        number: "006",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto",
        height: "5'07\"",
        weight: "221.6 lbs."
    },
    {
        name: "Gigantamax Charizard",
        imageUrl: "forms/006Charizard-Gigantamax.png",
        number: "006",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto",
        height: "91'10\"+",
        weight: "??? lbs."
    },
    {
        name: "Squirtle",
        imageUrl: "images/007Squirtle.png",
        number: "007",
        type: ["Water"],
        category: "Tiny Turtle",
        region: "Kanto",
        height: "1'08\"",
        weight: "19.8 lbs."
    },
    {
        name: "Wartortle",
        imageUrl: "images/008Wartortle.png",
        number: "008",
        type: ["Water"],
        category: "Turtle",
        region: "Kanto",
        height: "3'03\"",
        weight: "49.6 lbs."
    },
    {
        name: "Blastoise",
        imageUrl: "images/009Blastoise.png",
        number: "009",
        type: ["Water"],
        category: "Shellfish",
        region: "Kanto",
        height: "5'03\"",
        weight: "188.5 lbs."
    },
    {
        name: "Mega Blastoise",
        imageUrl: "forms/009Blastoise-Mega.png",
        number: "009",
        type: ["Water"],
        category: "Shellfish",
        region: "Kanto",
        height: "5'03\"",
        weight: "222.9 lbs."
    },
    {
        name: "Gigantamax Blastoise",
        imageUrl: "forms/009Blastoise-Gigantamax.png",
        number: "009",
        type: ["Water"],
        category: "Shellfish",
        region: "Kanto",
        height: "82'00\"+",
        weight: "??? lbs."
    },
    {
        name: "Caterpie",
        imageUrl: "images/010Caterpie.png",
        number: "010",
        type: ["Bug"],
        category: "Worm",
        region: "Kanto",
        height: "1'00\"",
        weight: "6.4 lbs."
    },
    {
        name: "Metapod",
        imageUrl: "images/011Metapod.png",
        number: "011",
        type: ["Bug"],
        category: "Cocoon",
        region: "Kanto",
        height: "2'04\"",
        weight: "21.8 lbs."
    },
    {
        name: "Butterfree",
        imageUrl: "images/012Butterfree.png",
        number: "012",
        type: ["Bug", "Flying"],
        category: "Butterfly",
        region: "Kanto",
        height: "3'07\"",
        weight: "70.5 lbs."
    },
    {
        name: "Gigantamax Butterfree",
        imageUrl: "forms/012Butterfree-Gigantamax.png",
        number: "012",
        type: ["Bug", "Flying"],
        category: "Butterfly",
        region: "Kanto",
        height: "55'09\"+",
        weight: "??? lbs."
    },
    {
        name: "Weedle",
        imageUrl: "images/013Weedle.png",
        number: "013",
        type: ["Bug", "Poison"],
        category: "Hairy Bug",
        region: "Kanto",
        height: "1'00\"",
        weight: "7.1 lbs."
    },
    {
        name: "Kakuna",
        imageUrl: "images/014Kakuna.png",
        number: "014",
        type: ["Bug", "Poison"],
        category: "Cocoon",
        region: "Kanto",
        height: "2'00\"",
        weight: "22.0 lbs."
    },
    {
        name: "Beedrill",
        imageUrl: "images/015Beedrill.png",
        number: "015",
        type: ["Bug", "Poison"],
        category: "Poison Bee",
        region: "Kanto",
        height: "3'03\"",
        weight: "65.0 lbs."
    },
    {
        name: "Mega Beedrill",
        imageUrl: "forms/015Beedrill-Mega.png",
        number: "015",
        type: ["Bug", "Poison"],
        category: "Poison Bee",
        region: "Kanto",
        height: "4'07\"",
        weight: "89.3 lbs."
    },
    {
        name: "Pidgey",
        imageUrl: "images/016Pidgey.png",
        number: "016",
        type: ["Normal", "Flying"],
        category: "Tiny Bird",
        region: "Kanto",
        height: "1'00\"",
        weight: "4.0 lbs."
    },
    {
        name: "Pidgeotto",
        imageUrl: "images/017Pidgeotto.png",
        number: "017",
        type: ["Normal", "Flying"],
        category: "Bird",
        region: "Kanto",
        height: "3'07\"",
        weight: "66.1 lbs."
    },
    {
        name: "Pidgeot",
        imageUrl: "images/018Pidgeot.png",
        number: "018",
        type: ["Normal", "Flying"],
        category: "Bird",
        region: "Kanto",
        height: "4'11\"",
        weight: "87.1 lbs."
    },
    {
        name: "Mega Pidgeot",
        imageUrl: "forms/018Pidgeot-Mega.png",
        number: "018",
        type: ["Normal", "Flying"],
        category: "Bird",
        region: "Kanto",
        height: "7'03\"",
        weight: "111.3 lbs."
    },
    {
        name: "Rattata",
        imageUrl: "images/019Rattata.png",
        number: "019",
        type: ["Normal"],
        category: "Mouse",
        region: "Kanto",
        height: "1'00\"",
        weight: "7.7 lbs."
    },
    {
        name: "Alolan Rattata",
        imageUrl: "forms/019Rattata-Alola.png",
        number: "019",
        type: ["Dark", "Normal"],
        category: "Mouse",
        region: "Kanto",
        height: "1'00\"",
        weight: "8.4 lbs."
    },
    {
        name: "Raticate",
        imageUrl: "images/020Raticate.png",
        number: "020",
        type: ["Normal"],
        category: "Mouse",
        region: "Kanto",
        height: "2'04\"",
        weight: "40.8 lbs."
    },
    {
        name: "Alolan Raticate",
        imageUrl: "forms/020Raticate-Alola.png",
        number: "020",
        type: ["Dark", "Normal"],
        category: "Mouse",
        region: "Kanto",
        height: "2'04\"",
        weight: "56.2 lbs."
    },
    {
        name: "Spearow",
        imageUrl: "images/021Spearow.png",
        number: "021",
        type: ["Normal", "Flying"],
        category: "Tiny Bird",
        region: "Kanto",
        height: "1'00\"",
        weight: "4.4 lbs."
    },
    {
        name: "Fearow",
        imageUrl: "images/022Fearow.png",
        number: "022",
        type: ["Normal", "Flying"],
        category: "Beak",
        region: "Kanto",
        height: "3'11\"",
        weight: "83.8 lbs."
    },
    {
        name: "Ekans",
        imageUrl: "images/023Ekans.png",
        number: "023",
        type: ["Poison"],
        category: "Snake",
        region: "Kanto",
        height: "6'07\"",
        weight: "15.2 lbs."
    },
    {
        name: "Arbok",
        imageUrl: "images/024Arbok.png",
        number: "024",
        type: ["Poison"],
        category: "Cobra",
        region: "Kanto",
        height: "11'06\"",
        weight: "143.3 lbs."
    },
    {
        name: "Pikachu",
        imageUrl: "images/025Pikachu.png",
        number: "025",
        type: ["Electric"],
        category: "Mouse",
        region: "Kanto",
        height: "1'04\"",
        weight: "13.2 lbs."
    },
    {
        name: "Gigantamax Pikachu",
        imageUrl: "forms/025Pikachu-Gigantamax.png",
        number: "025",
        type: ["Electric"],
        category: "Mouse",
        region: "Kanto",
        height: "68'11\"+",
        weight: "??? lbs."
    },
    {
        name: "Raichu",
        imageUrl: "images/026Raichu.png",
        number: "026",
        type: ["Electric"],
        category: "Mouse",
        region: "Kanto",
        height: "2'07\"",
        weight: "66.1 lbs."
    },
    {
        name: "Alolan Raichu",
        imageUrl: "forms/026Raichu-Alola.png",
        number: "026",
        type: ["Electric", "Psychic"],
        category: "Mouse",
        region: "Kanto",
        height: "2'04\"",
        weight: "46.3 lbs."
    },
    {
        name: "Sandshrew",
        imageUrl: "images/027Sandshrew.png",
        number: "027",
        type: ["Ground"],
        category: "Mouse",
        region: "Kanto",
        height: "2'00\"",
        weight: "26.5 lbs."
    },
    {
        name: "Alolan Sandshrew",
        imageUrl: "forms/027Sandshrew-Alola.png",
        number: "027",
        type: ["Ice", "Steel"],
        category: "Mouse",
        region: "Kanto",
        height: "2'04\"",
        weight: "88.2 lbs."
    },
    {
        name: "Sandslash",
        imageUrl: "images/028Sandslash.png",
        number: "028",
        type: ["Ground"],
        category: "Mouse",
        region: "Kanto",
        height: "3'03\"",
        weight: "65.0 lbs."
    },
    {
        name: "Alolan Sandslash",
        imageUrl: "forms/028Sandslash-Alola.png",
        number: "028",
        type: ["Ice", "Steel"],
        category: "Mouse",
        region: "Kanto",
        height: "3'11\"",
        weight: "121.3 lbs."
    },
    {
        name: "Nidoran♀",
        imageUrl: "images/029NidoranF.png",
        number: "029",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto",
        height: "1'04\"",
        weight: "15.4 lbs."
    },
    {
        name: "Nidorina",
        imageUrl: "images/030Nidorina.png",
        number: "030",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto",
        height: "2'07\"",
        weight: "44.1 lbs."
    },
    {
        name: "Nidoqueen",
        imageUrl: "images/031Nidoqueen.png",
        number: "031",
        type: ["Poison", "Ground"],
        category: "Drill",
        region: "Kanto",
        height: "4'03\"",
        weight: "132.3 lbs."
    },
    {
        name: "Nidoran♂",
        imageUrl: "images/032NidoranM.png",
        number: "032",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto",
        height: "1'08\"",
        weight: "19.8 lbs."
    },
    {
        name: "Nidorino",
        imageUrl: "images/033Nidorino.png",
        number: "033",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Kanto",
        height: "2'11\"",
        weight: "43.0 lbs."
    },
    {
        name: "Nidoking",
        imageUrl: "images/034Nidoking.png",
        number: "034",
        type: ["Poison", "Ground"],
        category: "Drill",
        region: "Kanto",
        height: "4'07\"",
        weight: "136.7 lbs."
    },
    {
        name: "Clefairy",
        imageUrl: "images/035Clefairy.png",
        number: "035",
        type: ["Fairy"],
        category: "Fairy",
        region: "Kanto",
        height: "2'00\"",
        weight: "16.5 lbs."
    },
    {
        name: "Clefable",
        imageUrl: "images/036Clefable.png",
        number: "036",
        type: ["Fairy"],
        category: "Fairy",
        region: "Kanto",
        height: "4'03\"",
        weight: "88.2 lbs."
    },
    {
        name: "Vulpix",
        imageUrl: "images/037Vulpix.png",
        number: "037",
        type: ["Fire"],
        category: "Fox",
        region: "Kanto",
        height: "2'00\"",
        weight: "21.8 lbs."
    },
    {
        name: "Alolan Vulpix",
        imageUrl: "forms/037Vulpix-Alola.png",
        number: "037",
        type: ["Ice"],
        category: "Fox",
        region: "Kanto",
        height: "2'00\"",
        weight: "21.8 lbs."
    },
    {
        name: "Ninetales",
        imageUrl: "images/038Ninetales.png",
        number: "038",
        type: ["Fire"],
        category: "Fox",
        region: "Kanto",
        height: "3'07\"",
        weight: "43.9 lbs."
    },
    {
        name: "Alolan Ninetales",
        imageUrl: "forms/038Ninetales-Alola.png",
        number: "038",
        type: ["Ice", "Fairy"],
        category: "Fox",
        region: "Kanto",
        height: "3'07\"",
        weight: "43.9 lbs."
    },
    {
        name: "Jigglypuff",
        imageUrl: "images/039Jigglypuff.png",
        number: "039",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Kanto",
        height: "1'08\"",
        weight: "12.1 lbs."
    },
    {
        name: "Wigglytuff",
        imageUrl: "images/040Wigglytuff.png",
        number: "040",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Kanto",
        height: "3'03\"",
        weight: "26.5 lbs."
    },
    {
        name: "Zubat",
        imageUrl: "images/041Zubat.png",
        number: "041",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Kanto",
        height: "2'07\"",
        weight: "16.5 lbs."
    },
    {
        name: "Golbat",
        imageUrl: "images/042Golbat.png",
        number: "042",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Kanto",
        height: "5'03\"",
        weight: "121.3 lbs."
    },
    {
        name: "Oddish",
        imageUrl: "images/043Oddish.png",
        number: "043",
        type: ["Grass", "Poison"],
        category: "Weed",
        region: "Kanto",
        height: "1'08\"",
        weight: "11.9 lbs."
    },
    {
        name: "Gloom",
        imageUrl: "images/044Gloom.png",
        number: "044",
        type: ["Grass", "Poison"],
        category: "Weed",
        region: "Kanto",
        height: "2'07\"",
        weight: "19.0 lbs."
    },
    {
        name: "Vileplume",
        imageUrl: "images/045Vileplume.png",
        number: "045",
        type: ["Grass", "Poison"],
        category: "Flower",
        region: "Kanto",
        height: "3'11\"",
        weight: "41.0 lbs."
    },
    {
        name: "Paras",
        imageUrl: "images/046Paras.png",
        number: "046",
        type: ["Bug", "Grass"],
        category: "Mushroom",
        region: "Kanto",
        height: "1'00\"",
        weight: "11.9 lbs."
    },
    {
        name: "Parasect",
        imageUrl: "images/047Parasect.png",
        number: "047",
        type: ["Bug", "Grass"],
        category: "Mushroom",
        region: "Kanto",
        height: "3'03\"",
        weight: "65.0 lbs."
    },
    {
        name: "Venonat",
        imageUrl: "images/048Venonat.png",
        number: "048",
        type: ["Bug", "Poison"],
        category: "Insect",
        region: "Kanto",
        height: "3'03\"",
        weight: "66.1 lbs."
    },
    {
        name: "Venomoth",
        imageUrl: "images/049Venomoth.png",
        number: "049",
        type: ["Bug", "Poison"],
        category: "Poison Moth",
        region: "Kanto",
        height: "4'11\"",
        weight: "27.6 lbs."
    },
    {
        name: "Diglett",
        imageUrl: "images/050Diglett.png",
        number: "050",
        type: ["Ground"],
        category: "Mole",
        region: "Kanto",
        height: "0'08\"",
        weight: "1.8 lbs."
    },
    {
        name: "Alolan Diglett",
        imageUrl: "forms/050Diglett-Alola.png",
        number: "050",
        type: ["Ground", "Steel"],
        category: "Mole",
        region: "Kanto",
        height: "0'08\"",
        weight: "2.2 lbs."
    },
    {
        name: "Dugtrio",
        imageUrl: "images/051Dugtrio.png",
        number: "051",
        type: ["Ground"],
        category: "Mole",
        region: "Kanto",
        height: "2'04\"",
        weight: "73.4 lbs."
    },
    {
        name: "Alolan Dugtrio",
        imageUrl: "forms/051Dugtrio-Alola.png",
        number: "051",
        type: ["Ground", "Steel"],
        category: "Mole",
        region: "Kanto",
        height: "2'04\"",
        weight: "146.8 lbs."
    },
    {
        name: "Meowth",
        imageUrl: "images/052Meowth.png",
        number: "052",
        type: ["Normal"],
        category: "Scratch Cat",
        region: "Kanto",
        height: "1'04\"",
        weight: "9.3 lbs."
    },
    {
        name: "Gigantamax Meowth",
        imageUrl: "forms/052Meowth-Gigantamax.png",
        number: "052",
        type: ["Normal"],
        category: "Scratch Cat",
        region: "Kanto",
        height: "103'03\"+",
        weight: "??? lbs."
    },
    {
        name: "Alolan Meowth",
        imageUrl: "forms/052Meowth-Alola.png",
        number: "052",
        type: ["Dark"],
        category: "Scratch Cat",
        region: "Kanto",
        height: "1'04\"",
        weight: "9.3 lbs."
    },
    {
        name: "Galarian Meowth",
        imageUrl: "forms/052Meowth-Galar.png",
        number: "052",
        type: ["Steel"],
        category: "Scratch Cat",
        region: "Kanto",
        height: "1'04\"",
        weight: "16.5 lbs."
    },
    {
        name: "Persian",
        imageUrl: "images/053Persian.png",
        number: "053",
        type: ["Normal"],
        category: "Classy Cat",
        region: "Kanto",
        height: "3'03\"",
        weight: "70.5 lbs."
    },
    {
        name: "Alolan Persian",
        imageUrl: "forms/053Persian-Alola.png",
        number: "053",
        type: ["Dark"],
        category: "Classy Cat",
        region: "Kanto",
        height: "3'07\"",
        weight: "72.8 lbs."
    },
    {
        name: "Psyduck",
        imageUrl: "images/054Psyduck.png",
        number: "054",
        type: ["Water"],
        category: "Duck",
        region: "Kanto",
        height: "2'07\"",
        weight: "43.2 lbs."
    },
    {
        name: "Golduck",
        imageUrl: "images/055Golduck.png",
        number: "055",
        type: ["Water"],
        category: "Duck",
        region: "Kanto",
        height: "5'07\"",
        weight: "168.9 lbs."
    },
    {
        name: "Mankey",
        imageUrl: "images/056Mankey.png",
        number: "056",
        type: ["Fighting"],
        category: "Pig Monkey",
        region: "Kanto",
        height: "1'08\"",
        weight: "61.7 lbs."
    },
    {
        name: "Primeape",
        imageUrl: "images/057Primeape.png",
        number: "057",
        type: ["Fighting"],
        category: "Pig Monkey",
        region: "Kanto",
        height: "3'03\"",
        weight: "70.5 lbs."
    },
    {
        name: "Growlithe",
        imageUrl: "images/058Growlithe.png",
        number: "058",
        type: ["Fire"],
        category: "Puppy",
        region: "Kanto",
        height: "2'04\"",
        weight: "41.9 lbs."
    },
    {
        name: "Hisuian Growlithe",
        imageUrl: "forms/058Growlithe-Hisui.png",
        number: "058",
        type: ["Fire", "Rock"],
        category: "Scout",
        region: "Kanto",
        height: "2'07\"",
        weight: "50.0 lbs."
    },
    {
        name: "Arcanine",
        imageUrl: "images/059Arcanine.png",
        number: "059",
        type: ["Fire"],
        category: "Legendary",
        region: "Kanto",
        height: "6'03\"",
        weight: "341.7 lbs."
    },
    {
        name: "Hisuian Arcanine",
        imageUrl: "forms/059Arcanine-Hisui.png",
        number: "059",
        type: ["Fire", "Rock"],
        category: "Legendary",
        region: "Kanto",
        height: "6'07\"",
        weight: "370.4 lbs."
    },
    {
        name: "Poliwag",
        imageUrl: "images/060Poliwag.png",
        number: "060",
        type: ["Water"],
        category: "Tadpole",
        region: "Kanto",
        height: "2'00\"",
        weight: "27.3 lbs."
    },
    {
        name: "Poliwhirl",
        imageUrl: "images/061Poliwhirl.png",
        number: "061",
        type: ["Water"],
        category: "Tadpole",
        region: "Kanto",
        height: "3'03\"",
        weight: "44.1 lbs."
    },
    {
        name: "Poliwrath",
        imageUrl: "images/062Poliwrath.png",
        number: "062",
        type: ["Water", "Fighting"],
        category: "Tadpole",
        region: "Kanto",
        height: "4'03\"",
        weight: "119.0 lbs."
    },
    {
        name: "Abra",
        imageUrl: "images/063Abra.png",
        number: "063",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto",
        height: "2'11\"",
        weight: "43.0 lbs."
    },
    {
        name: "Kadabra",
        imageUrl: "images/064Kadabra.png",
        number: "064",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto",
        height: "4'03\"",
        weight: "124.6 lbs."
    },
    {
        name: "Alakazam",
        imageUrl: "images/065Alakazam.png",
        number: "065",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto",
        height: "4'11\"",
        weight: "105.8 lbs."
    },
    {
        name: "Mega Alakazam",
        imageUrl: "forms/065Alakazam-Mega.png",
        number: "065",
        type: ["Psychic"],
        category: "Psi",
        region: "Kanto",
        height: "3'11\"",
        weight: "105.8 lbs."
    },
    {
        name: "Machop",
        imageUrl: "images/066Machop.png",
        number: "066",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto",
        height: "2'07\"",
        weight: "43.0 lbs."
    },
    {
        name: "Machoke",
        imageUrl: "images/067Machoke.png",
        number: "067",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto",
        height: "4'11\"",
        weight: "155.4 lbs."
    },
    {
        name: "Machamp",
        imageUrl: "images/068Machamp.png",
        number: "068",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto",
        height: "5'03\"",
        weight: "286.6 lbs."
    },
    {
        name: "Gigantamax Machamp",
        imageUrl: "forms/068Machamp-Gigantamax.png",
        number: "068",
        type: ["Fighting"],
        category: "Superpower",
        region: "Kanto",
        height: "82'00\"+",
        weight: "??? lbs."
    },
    {
        name: "Bellsprout",
        imageUrl: "images/069Bellsprout.png",
        number: "069",
        type: ["Grass", "Poison"],
        category: "Flower",
        region: "Kanto",
        height: "2'04\"",
        weight: "8.8 lbs."
    },
    {
        name: "Weepinbell",
        imageUrl: "images/070Weepinbell.png",
        number: "070",
        type: ["Grass", "Poison"],
        category: "Flycatcher",
        region: "Kanto",
        height: "3'03\"",
        weight: "14.1 lbs."
    },
    {
        name: "Victreebel",
        imageUrl: "images/071Victreebel.png",
        number: "071",
        type: ["Grass", "Poison"],
        category: "Flycatcher",
        region: "Kanto",
        height: "5'07\"",
        weight: "34.2 lbs."
    },
    {
        name: "Tentacool",
        imageUrl: "images/072Tentacool.png",
        number: "072",
        type: ["Water", "Poison"],
        category: "Jellyfish",
        region: "Kanto",
        height: "2'11\"",
        weight: "100.3 lbs."
    },
    {
        name: "Tentacruel",
        imageUrl: "images/073Tentacruel.png",
        number: "073",
        type: ["Water", "Poison"],
        category: "Jellyfish",
        region: "Kanto",
        height: "5'03\"",
        weight: "121.3 lbs."
    },
    {
        name: "Geodude",
        imageUrl: "images/074Geodude.png",
        number: "074",
        type: ["Rock", "Ground"],
        category: "Rock",
        region: "Kanto",
        height: "1'04\"",
        weight: "44.1 lbs."
    },
    {
        name: "Alolan Geodude",
        imageUrl: "forms/074Geodude-Alola.png",
        number: "074",
        type: ["Rock", "Electric"],
        category: "Rock",
        region: "Kanto",
        height: "1'04\"",
        weight: "44.8 lbs."
    },
    {
        name: "Graveler",
        imageUrl: "images/075Graveler.png",
        number: "075",
        type: ["Rock", "Ground"],
        category: "Rock",
        region: "Kanto",
        height: "3'03\"",
        weight: "231.5 lbs."
    },
    {
        name: "Alolan Graveler",
        imageUrl: "forms/075Graveler-Alola.png",
        number: "075",
        type: ["Rock", "Electric"],
        category: "Rock",
        region: "Kanto",
        height: "3'03\"",
        weight: "242.5 lbs."
    },
    {
        name: "Golem",
        imageUrl: "images/076Golem.png",
        number: "076",
        type: ["Rock", "Ground"],
        category: "Megaton",
        region: "Kanto",
        height: "4'07\"",
        weight: "661.4 lbs."
    },
    {
        name: "Alolan Golem",
        imageUrl: "forms/076Golem-Alola.png",
        number: "076",
        type: ["Rock", "Electric"],
        category: "Megaton",
        region: "Kanto",
        height: "5'07\"",
        weight: "696.7 lbs."
    },
    {
        name: "Ponyta",
        imageUrl: "images/077Ponyta.png",
        number: "077",
        type: ["Fire"],
        category: "Fire Horse",
        region: "Kanto",
        height: "3'03\"",
        weight: "66.1 lbs."
    },
    {
        name: "Galarian Ponyta",
        imageUrl: "forms/077Ponyta-Galar.png",
        number: "077",
        type: ["Psychic"],
        category: "Unique Horn",
        region: "Kanto",
        height: "2'07\"",
        weight: "52.9 lbs."
    },
    {
        name: "Rapidash",
        imageUrl: "images/078Rapidash.png",
        number: "078",
        type: ["Fire"],
        category: "Fire Horse",
        region: "Kanto",
        height: "5'07\"",
        weight: "209.4 lbs."
    },
    {
        name: "Galarian Rapidash",
        imageUrl: "forms/078Rapidash-Galar.png",
        number: "078",
        type: ["Psychic", "Fairy"],
        category: "Unique Horn",
        region: "Kanto",
        height: "5'07\"",
        weight: "176.4 lbs."
    },
    {
        name: "Slowpoke",
        imageUrl: "images/079Slowpoke.png",
        number: "079",
        type: ["Water", "Psychic"],
        category: "Dopey",
        region: "Kanto",
        height: "3'11\"",
        weight: "79.4 lbs."
    },
    {
        name: "Galarian Slowpoke",
        imageUrl: "forms/079Slowpoke-Galar.png",
        number: "079",
        type: ["Psychic"],
        category: "Dopey",
        region: "Kanto",
        height: "3'11\"",
        weight: "79.4 lbs."
    },
    {
        name: "Slowbro",
        imageUrl: "images/080Slowbro.png",
        number: "080",
        type: ["Water", "Psychic"],
        category: "Hermit Crab",
        region: "Kanto",
        height: "5'03\"",
        weight: "173.1 lbs."
    },
    {
        name: "Mega Slowbro",
        imageUrl: "forms/080Slowbro-Mega.png",
        number: "080",
        type: ["Water", "Psychic"],
        category: "Hermit Crab",
        region: "Kanto",
        height: "6'07\"",
        weight: "264.6 lbs."
    },
    {
        name: "Galarian Slowbro",
        imageUrl: "forms/080Slowbro-Galar.png",
        number: "080",
        type: ["Poison", "Psychic"],
        category: "Hermit Crab",
        region: "Kanto",
        height: "5'03\"",
        weight: "155.4 lbs."
    },
    {
        name: "Magnemite",
        imageUrl: "images/081Magnemite.png",
        number: "081",
        type: ["Electric", "Steel"],
        category: "Magnet",
        region: "Kanto",
        height: "1'00\"",
        weight: "13.2 lbs."
    },
    {
        name: "Magneton",
        imageUrl: "images/082Magneton.png",
        number: "082",
        type: ["Electric", "Steel"],
        category: "Magnet",
        region: "Kanto",
        height: "3'03\"",
        weight: "132.3 lbs."
    },
    {
        name: "Farfetch'd",
        imageUrl: "images/083Farfetch'd.png",
        number: "083",
        type: ["Normal", "Flying"],
        category: "Wild Duck",
        region: "Kanto",
        height: "2'07\"",
        weight: "33.1 lbs."
    },
    {
        name: "Galarian Farfetch'd",
        imageUrl: "forms/083Farfetch'd-Galar.png",
        number: "083",
        type: ["Fighting"],
        category: "Wild Duck",
        region: "Kanto",
        height: "2'07\"",
        weight: "92.6 lbs."
    },
    {
        name: "Doduo",
        imageUrl: "images/084Doduo.png",
        number: "084",
        type: ["Normal", "Flying"],
        category: "Twin Bird",
        region: "Kanto",
        height: "4'07\"",
        weight: "86.4 lbs."
    },
    {
        name: "Dodrio",
        imageUrl: "images/085Dodrio.png",
        number: "085",
        type: ["Normal", "Flying"],
        category: "Triple Bird",
        region: "Kanto",
        height: "5'11\"",
        weight: "187.8 lbs."
    },
    {
        name: "Seel",
        imageUrl: "images/086Seel.png",
        number: "086",
        type: ["Water"],
        category: "Sea Lion",
        region: "Kanto",
        height: "3'07\"",
        weight: "198.4 lbs."
    },
    {
        name: "Dewgong",
        imageUrl: "images/087Dewgong.png",
        number: "087",
        type: ["Water", "Ice"],
        category: "Sea Lion",
        region: "Kanto",
        height: "5'07\"",
        weight: "264.6 lbs."
    },
    {
        name: "Grimer",
        imageUrl: "images/088Grimer.png",
        number: "088",
        type: ["Poison"],
        category: "Sludge",
        region: "Kanto",
        height: "2'11\"",
        weight: "66.1 lbs."
    },
    {
        name: "Alolan Grimer",
        imageUrl: "forms/088Grimer-Alola.png",
        number: "088",
        type: ["Poison", "Dark"],
        category: "Sludge",
        region: "Kanto",
        height: "2'04\"",
        weight: "92.6 lbs."
    },
    {
        name: "Muk",
        imageUrl: "images/089Muk.png",
        number: "089",
        type: ["Poison"],
        category: "Sludge",
        region: "Kanto",
        height: "3'11\"",
        weight: "66.1 lbs."
    },
    {
        name: "Alolan Muk",
        imageUrl: "forms/089Muk-Alola.png",
        number: "089",
        type: ["Poison", "Dark"],
        category: "Sludge",
        region: "Kanto",
        height: "3'03\"",
        weight: "114.6 lbs."
    },
    {
        name: "Shellder",
        imageUrl: "images/090Shellder.png",
        number: "090",
        type: ["Water"],
        category: "Bivalve",
        region: "Kanto",
        height: "1'00\"",
        weight: "8.8 lbs."
    },
    {
        name: "Cloyster",
        imageUrl: "images/091Cloyster.png",
        number: "091",
        type: ["Water", "Ice"],
        category: "Bivalve",
        region: "Kanto",
        height: "4'11\"",
        weight: "292.1 lbs."
    },
    {
        name: "Gastly",
        imageUrl: "images/092Gastly.png",
        number: "092",
        type: ["Ghost", "Poison"],
        category: "Gas",
        region: "Kanto",
        height: "4'03\"",
        weight: "0.2 lbs."
    },
    {
        name: "Haunter",
        imageUrl: "images/093Haunter.png",
        number: "093",
        type: ["Ghost", "Poison"],
        category: "Gas",
        region: "Kanto",
        height: "5'03\"",
        weight: "0.2 lbs."
    },
    {
        name: "Gengar",
        imageUrl: "images/094Gengar.png",
        number: "094",
        type: ["Ghost", "Poison"],
        category: "Shadow",
        region: "Kanto",
        height: "4'11\"",
        weight: "89.3 lbs."
    },
    {
        name: "Mega Gengar",
        imageUrl: "forms/094Gengar-Mega.png",
        number: "094",
        type: ["Ghost", "Poison"],
        category: "Shadow",
        region: "Kanto",
        height: "4'07\"",
        weight: "89.3 lbs."
    },
    {
        name: "Gigantamax Gengar",
        imageUrl: "forms/094Gengar-Gigantamax.png",
        number: "094",
        type: ["Ghost", "Poison"],
        category: "Shadow",
        region: "Kanto",
        height: "65'07\"+",
        weight: "??? lbs."
    },
    {
        name: "Onix",
        imageUrl: "images/095Onix.png",
        number: "095",
        type: ["Rock", "Ground"],
        category: "Rock Snake",
        region: "Kanto",
        height: "28'10\"",
        weight: "463.0 lbs."
    },
    {
        name: "Drowzee",
        imageUrl: "images/096Drowzee.png",
        number: "096",
        type: ["Psychic"],
        category: "Hypnosis",
        region: "Kanto",
        height: "3'03\"",
        weight: "71.4 lbs."
    },
    {
        name: "Hypno",
        imageUrl: "images/097Hypno.png",
        number: "097",
        type: ["Psychic"],
        category: "Hypnosis",
        region: "Kanto",
        height: "5'03\"",
        weight: "71.4 lbs."
    },
    {
        name: "Krabby",
        imageUrl: "images/098Krabby.png",
        number: "098",
        type: ["Water"],
        category: "River Crab",
        region: "Kanto",
        height: "1'04\"",
        weight: "14.3 lbs."
    },
    {
        name: "Kingler",
        imageUrl: "images/099Kingler.png",
        number: "099",
        type: ["Water"],
        category: "Pincer",
        region: "Kanto",
        height: "4'03\"",
        weight: "132.3 lbs."
    },
    {
        name: "Gigantamax Kingler",
        imageUrl: "forms/099Kingler-Gigantamax.png",
        number: "099",
        type: ["Water"],
        category: "Pincer",
        region: "Kanto",
        height: "62'04\"+",
        weight: "??? lbs."
    },
    {
        name: "Voltorb",
        imageUrl: "images/100Voltorb.png",
        number: "100",
        type: ["Electric"],
        category: "Ball",
        region: "Kanto",
        height: "1'08\"",
        weight: "22.9 lbs."
    },
    {
        name: "Hisuian Voltorb",
        imageUrl: "forms/100Voltorb-Hisui.png",
        number: "100",
        type: ["Electric", "Grass"],
        category: "Sphere",
        region: "Kanto",
        height: "1'08\"",
        weight: "28.7 lbs."
    },
    {
        name: "Electrode",
        imageUrl: "images/101Electrode.png",
        number: "101",
        type: ["Electric"],
        category: "Ball",
        region: "Kanto",
        height: "3'11\"",
        weight: "146.8 lbs."
    },
    {
        name: "Hisuian Electrode",
        imageUrl: "forms/101Electrode-Hisui.png",
        number: "101",
        type: ["Electric", "Grass"],
        category: "Sphere",
        region: "Kanto",
        height: "3'11\"",
        weight: "156.5 lbs."
    },
    {
        name: "Exeggcute",
        imageUrl: "images/102Exeggcute.png",
        number: "102",
        type: ["Grass", "Psychic"],
        category: "Egg",
        region: "Kanto",
        height: "1'04\"",
        weight: "5.5 lbs."
    },
    {
        name: "Exeggutor",
        imageUrl: "images/103Exeggutor.png",
        number: "103",
        type: ["Grass", "Psychic"],
        category: "Coconut",
        region: "Kanto",
        height: "6'07\"",
        weight: "264.6 lbs."
    },
    {
        name: "Alolan Exeggutor",
        imageUrl: "forms/103Exeggutor-Alola.png",
        number: "103",
        type: ["Grass", "Dragon"],
        category: "Coconut",
        region: "Kanto",
        height: "35'09\"",
        weight: "916.2 lbs."
    },
    {
        name: "Cubone",
        imageUrl: "images/104Cubone.png",
        number: "104",
        type: ["Ground"],
        category: "Lonely",
        region: "Kanto",
        height: "1'04\"",
        weight: "14.3 lbs."
    },
    {
        name: "Marowak",
        imageUrl: "images/105Marowak.png",
        number: "105",
        type: ["Ground"],
        category: "Bone Keeper",
        region: "Kanto",
        height: "3'03\"",
        weight: "99.2 lbs."
    },
    {
        name: "Alolan Marowak",
        imageUrl: "forms/105Marowak-Alola.png",
        number: "105",
        type: ["Fire", "Ghost"],
        category: "Bone Keeper",
        region: "Kanto",
        height: "3'03\"",
        weight: "75.0 lbs."
    },
    {
        name: "Hitmonlee",
        imageUrl: "images/106Hitmonlee.png",
        number: "106",
        type: ["Fighting"],
        category: "Kicking",
        region: "Kanto",
        height: "4'11\"",
        weight: "109.8 lbs."
    },
    {
        name: "Hitmonchan",
        imageUrl: "images/107Hitmonchan.png",
        number: "107",
        type: ["Fighting"],
        category: "Punching",
        region: "Kanto",
        height: "4'07\"",
        weight: "110.7 lbs."
    },
    {
        name: "Lickitung",
        imageUrl: "images/108Lickitung.png",
        number: "108",
        type: ["Normal"],
        category: "Licking",
        region: "Kanto",
        height: "3'11\"",
        weight: "144.4 lbs."
    },
    {
        name: "Koffing",
        imageUrl: "images/109Koffing.png",
        number: "109",
        type: ["Poison"],
        category: "Poison Gas",
        region: "Kanto",
        height: "2'00\"",
        weight: "2.2 lbs."
    },
    {
        name: "Weezing",
        imageUrl: "images/110Weezing.png",
        number: "110",
        type: ["Poison"],
        category: "Poison Gas",
        region: "Kanto",
        height: "3'11\"",
        weight: "20.9 lbs."
    },
    {
        name: "Galarian Weezing",
        imageUrl: "forms/110Weezing-Galar.png",
        number: "110",
        type: ["Poison", "Fairy"],
        category: "Poison Gas",
        region: "Kanto",
        height: "9'10\"",
        weight: "35.3 lbs."
    },
    {
        name: "Rhyhorn",
        imageUrl: "images/111Rhyhorn.png",
        number: "111",
        type: ["Ground", "Rock"],
        category: "Spikes",
        region: "Kanto",
        height: "3'03\"",
        weight: "253.5 lbs."
    },
    {
        name: "Rhydon",
        imageUrl: "images/112Rhydon.png",
        number: "112",
        type: ["Ground", "Rock"],
        category: "Drill",
        region: "Kanto",
        height: "6'03\"",
        weight: "264.6 lbs."
    },
    {
        name: "Chansey",
        imageUrl: "images/113Chansey.png",
        number: "113",
        type: ["Normal"],
        category: "Egg",
        region: "Kanto",
        height: "3'07\"",
        weight: "76.3 lbs."
    },
    {
        name: "Tangela",
        imageUrl: "images/114Tangela.png",
        number: "114",
        type: ["Grass"],
        category: "Vine",
        region: "Kanto",
        height: "3'03\"",
        weight: "77.2 lbs."
    },
    {
        name: "Kangaskhan",
        imageUrl: "images/115Kangaskhan.png",
        number: "115",
        type: ["Normal"],
        category: "Parent",
        region: "Kanto",
        height: "7'03\"",
        weight: "176.4 lbs."
    },
    {
        name: "Mega Kangaskhan",
        imageUrl: "forms/115Kangaskhan-Mega.png",
        number: "115",
        type: ["Normal"],
        category: "Parent",
        region: "Kanto",
        height: "7'03\"",
        weight: "220.5 lbs."
    },
    {
        name: "Horsea",
        imageUrl: "images/116Horsea.png",
        number: "116",
        type: ["Water"],
        category: "Dragon",
        region: "Kanto",
        height: "1'04\"",
        weight: "17.6 lbs."
    },
    {
        name: "Seadra",
        imageUrl: "images/117Seadra.png",
        number: "117",
        type: ["Water"],
        category: "Dragon",
        region: "Kanto",
        height: "3'11\"",
        weight: "55.1 lbs."
    },
    {
        name: "Goldeen",
        imageUrl: "images/118Goldeen.png",
        number: "118",
        type: ["Water"],
        category: "Goldfish",
        region: "Kanto",
        height: "2'00\"",
        weight: "33.1 lbs."
    },
    {
        name: "Seaking",
        imageUrl: "images/119Seaking.png",
        number: "119",
        type: ["Water"],
        category: "Goldfish",
        region: "Kanto",
        height: "2'00\"",
        weight: "33.1 lbs."
    },
    {
        name: "Staryu",
        imageUrl: "images/120Staryu.png",
        number: "120",
        type: ["Water"],
        category: "Star Shape",
        region: "Kanto",
        height: "2'07\"",
        weight: "76.1 lbs."
    },
    {
        name: "Starmie",
        imageUrl: "images/121Starmie.png",
        number: "121",
        type: ["Water", "Psychic"],
        category: "Mysterious",
        region: "Kanto",
        height: "3'07\"",
        weight: "176.4 lbs."
    },
    {
        name: "Mr. Mime",
        imageUrl: "images/122Mr._Mime.png",
        number: "122",
        type: ["Psychic", "Fairy"],
        category: "Barrier",
        region: "Kanto",
        height: "4'03\"",
        weight: "120.2 lbs."
    },
    {
        name: "Galarian Mr. Mime",
        imageUrl: "forms/122Mr._Mime-Galar.png",
        number: "122",
        type: ["Ice", "Psychic"],
        category: "Dancing",
        region: "Kanto",
        height: "4'07\"",
        weight: "125.2 lbs."
    },
    {
        name: "Scyther",
        imageUrl: "images/123Scyther.png",
        number: "123",
        type: ["Bug", "Flying"],
        category: "Mantis",
        region: "Kanto",
        height: "4'11\"",
        weight: "123.5 lbs."
    },
    {
        name: "Jynx",
        imageUrl: "images/124Jynx.png",
        number: "124",
        type: ["Ice", "Psychic"],
        category: "Human Shape",
        region: "Kanto",
        height: "4'07\"",
        weight: "89.5 lbs."
    },
    {
        name: "Electabuzz",
        imageUrl: "images/125Electabuzz.png",
        number: "125",
        type: ["Electric"],
        category: "Electric",
        region: "Kanto",
        height: "3'07\"",
        weight: "66.1 lbs."
    },
    {
        name: "Magmar",
        imageUrl: "images/126Magmar.png",
        number: "126",
        type: ["Fire"],
        category: "Spitfire",
        region: "Kanto",
        height: "4'03\"",
        weight: "98.1 lbs."
    },
    {
        name: "Pinsir",
        imageUrl: "images/127Pinsir.png",
        number: "127",
        type: ["Bug"],
        category: "Stag Beetle",
        region: "Kanto",
        height: "4'11\"",
        weight: "121.3 lbs."
    },
    {
        name: "Mega Pinsir",
        imageUrl: "forms/127Pinsir-Mega.png",
        number: "127",
        type: ["Bug", "Flying"],
        category: "Stag Beetle",
        region: "Kanto",
        height: "5'07\"",
        weight: "130.1 lbs."
    },
    {
        name: "Tauros",
        imageUrl: "images/128Tauros.png",
        number: "128",
        type: ["Normal"],
        category: "Wild Bull",
        region: "Kanto",
        height: "4'07\"",
        weight: "194.9 lbs."
    },
    {
        name: "Magikarp",
        imageUrl: "images/129Magikarp.png",
        number: "129",
        type: ["Water"],
        category: "Fish",
        region: "Kanto",
        height: "2'11\"",
        weight: "22.0 lbs."
    },
    {
        name: "Gyarados",
        imageUrl: "images/130Gyarados.png",
        number: "130",
        type: ["Water", "Flying"],
        category: "Atrocious",
        region: "Kanto",
        height: "21'04\"",
        weight: "518.1 lbs."
    },
    {
        name: "Mega Gyarados",
        imageUrl: "forms/130Gyarados-Mega.png",
        number: "130",
        type: ["Water", "Dark"],
        category: "Atrocious",
        region: "Kanto",
        height: "21'04\"",
        weight: "627.4 lbs."
    },
    {
        name: "Lapras",
        imageUrl: "images/131Lapras.png",
        number: "131",
        type: ["Water", "Ice"],
        category: "Transport",
        region: "Kanto",
        height: "8'02\"",
        weight: "485.0 lbs."
    },
    {
        name: "Gigantamax Lapras",
        imageUrl: "forms/131Lapras-Gigantamax.png",
        number: "131",
        type: ["Water", "Ice"],
        category: "Transport",
        region: "Kanto",
        height: "78'00\"+",
        weight: "??? lbs."
    },
    {
        name: "Ditto",
        imageUrl: "images/132Ditto.png",
        number: "132",
        type: ["Normal"],
        category: "Transform",
        region: "Kanto",
        height: "1'00\"",
        weight: "8.8 lbs."
    },
    {
        name: "Eevee",
        imageUrl: "images/133Eevee.png",
        number: "133",
        type: ["Normal"],
        category: "Evolution",
        region: "Kanto",
        height: "1'00\"",
        weight: "14.3 lbs."
    },
    {
        name: "Gigantamax Eevee",
        imageUrl: "forms/133Eevee-Gigantamax.png",
        number: "133",
        type: ["Normal"],
        category: "Evolution",
        region: "Kanto",
        height: "59'01\"+",
        weight: "??? lbs."
    },
    {
        name: "Vaporeon",
        imageUrl: "images/134Vaporeon.png",
        number: "134",
        type: ["Water"],
        category: "Bubble Jet",
        region: "Kanto",
        height: "3'03\"",
        weight: "63.9 lbs."
    },
    {
        name: "Jolteon",
        imageUrl: "images/135Jolteon.png",
        number: "135",
        type: ["Electric"],
        category: "Lightning",
        region: "Kanto",
        height: "2'07\"",
        weight: "54.0 lbs."
    },
    {
        name: "Flareon",
        imageUrl: "images/136Flareon.png",
        number: "136",
        type: ["Fire"],
        category: "Flame",
        region: "Kanto",
        height: "2'11\"",
        weight: "55.1 lbs."
    },
    {
        name: "Porygon",
        imageUrl: "images/137Porygon.png",
        number: "137",
        type: ["Normal"],
        category: "Virtual",
        region: "Kanto",
        height: "2'07\"",
        weight: "80.5 lbs."
    },
    {
        name: "Omanyte",
        imageUrl: "images/138Omanyte.png",
        number: "138",
        type: ["Rock", "Water"],
        category: "Spiral",
        region: "Kanto",
        height: "1'04\"",
        weight: "16.5 lbs."
    },
    {
        name: "Omastar",
        imageUrl: "images/139Omastar.png",
        number: "139",
        type: ["Rock", "Water"],
        category: "Spiral",
        region: "Kanto",
        height: "3'03\"",
        weight: "77.2 lbs."
    },
    {
        name: "Kabuto",
        imageUrl: "images/140Kabuto.png",
        number: "140",
        type: ["Rock", "Water"],
        category: "Shellfish",
        region: "Kanto",
        height: "1'08\"",
        weight: "25.4 lbs."
    },
    {
        name: "Kabutops",
        imageUrl: "images/141Kabutops.png",
        number: "141",
        type: ["Rock", "Water"],
        category: "Shellfish",
        region: "Kanto",
        height: "4'03\"",
        weight: "25.4 lbs."
    },
    {
        name: "Aerodactyl",
        imageUrl: "images/142Aerodactyl.png",
        number: "142",
        type: ["Rock", "Flying"],
        category: "Fossil",
        region: "Kanto",
        height: "5'11\"",
        weight: "130.1 lbs."
    },
    {
        name: "Mega Aerodactyl",
        imageUrl: "forms/142Aerodactyl-Mega.png",
        number: "142",
        type: ["Rock", "Flying"],
        category: "Fossil",
        region: "Kanto",
        height: "6'11\"",
        weight: "174.2 lbs."
    },
    {
        name: "Snorlax",
        imageUrl: "images/143Snorlax.png",
        number: "143",
        type: ["Normal"],
        category: "Sleeping",
        region: "Kanto",
        height: "6'11\"",
        weight: "1041.1 lbs."
    },
    {
        name: "Gigantamax Snorlax",
        imageUrl: "forms/143Snorlax-Gigantamax.png",
        number: "143",
        type: ["Normal"],
        category: "Sleeping",
        region: "Kanto",
        height: "114'10\"+",
        weight: "??? lbs."
    },
    {
        name: "Articuno",
        imageUrl: "images/144Articuno.png",
        number: "144",
        type: ["Ice", "Flying"],
        category: "Freeze",
        region: "Kanto",
        height: "5'07\"",
        weight: "122.1 lbs."
    },
    {
        name: "Galarian Articuno",
        imageUrl: "forms/144Articuno-Galar.png",
        number: "144",
        type: ["Psychic", "Flying"],
        category: "Cruel",
        region: "Kanto",
        height: "5'07\"",
        weight: "112.2 lbs."
    },
    {
        name: "Zapdos",
        imageUrl: "images/145Zapdos.png",
        number: "145",
        type: ["Electric", "Flying"],
        category: "Electric",
        region: "Kanto",
        height: "5'03\"",
        weight: "116.0 lbs."
    },
    {
        name: "Galarian Zapdos",
        imageUrl: "forms/145Zapdos-Galar.png",
        number: "145",
        type: ["Fighting", "Flying"],
        category: "Strong Legs",
        region: "Kanto",
        height: "5'03\"",
        weight: "128.3 lbs."
    },
    {
        name: "Moltres",
        imageUrl: "images/146Moltres.png",
        number: "146",
        type: ["Fire", "Flying"],
        category: "Flame",
        region: "Kanto",
        height: "6'07\"",
        weight: "132.3 lbs."
    },
    {
        name: "Galarian Moltres",
        imageUrl: "forms/146Moltres-Galar.png",
        number: "146",
        type: ["Dark", "Flying"],
        category: "Malevolent",
        region: "Kanto",
        height: "6'07\"",
        weight: "145.5 lbs."
    },
    {
        name: "Dratini",
        imageUrl: "images/147Dratini.png",
        number: "147",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kanto",
        height: "5'11\"",
        weight: "7.3 lbs."
    },
    {
        name: "Dragonair",
        imageUrl: "images/148Dragonair.png",
        number: "148",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kanto",
        height: "13'01\"",
        weight: "36.4 lbs."
    },
    {
        name: "Dragonite",
        imageUrl: "images/149Dragonite.png",
        number: "149",
        type: ["Dragon", "Flying"],
        category: "Dragon",
        region: "Kanto",
        height: "7'03\"",
        weight: "463.0 lbs."
    },
    {
        name: "Mewtwo",
        imageUrl: "images/150Mewtwo.png",
        number: "150",
        type: ["Psychic"],
        category: "Genetic",
        region: "Kanto",
        height: "6'07\"",
        weight: "269.0 lbs."
    },
    {
        name: "Mega Mewtwo X",
        imageUrl: "forms/150Mewtwo-Mega_X.png",
        number: "150",
        type: ["Psychic", "Fighting"],
        category: "Genetic",
        region: "Kanto",
        height: "7'07\"",
        weight: "280.0 lbs."
    },
    {
        name: "Mega Mewtwo Y",
        imageUrl: "forms/150Mewtwo-Mega_Y.png",
        number: "150",
        type: ["Psychic"],
        category: "Genetic",
        region: "Kanto",
        height: "4'11\"",
        weight: "72.8 lbs."
    },
    {
        name: "Mew",
        imageUrl: "images/151Mew.png",
        number: "151",
        type: ["Psychic"],
        category: "New Species",
        region: "Kanto",
        height: "1'04\"",
        weight: "8.8 lbs."
    },
    {
        name: "Chikorita",
        imageUrl: "images/152Chikorita.png",
        number: "152",
        type: ["Grass"],
        category: "Leaf",
        region: "Johto",
        height: "2'11\"",
        weight: "14.1 lbs."
    },
    {
        name: "Bayleef",
        imageUrl: "images/153Bayleef.png",
        number: "153",
        type: ["Grass"],
        category: "Leaf",
        region: "Johto",
        height: "3'11\"",
        weight: "34.8 lbs."
    },
    {
        name: "Meganium",
        imageUrl: "images/154Meganium.png",
        number: "154",
        type: ["Grass"],
        category: "Herb",
        region: "Johto",
        height: "5'11\"",
        weight: "221.6 lbs."
    },
    {
        name: "Cyndaquil",
        imageUrl: "images/155Cyndaquil.png",
        number: "155",
        type: ["Fire"],
        category: "Fire Mouse",
        region: "Johto",
        height: "1'08\"",
        weight: "17.4 lbs."
    },
    {
        name: "Quilava",
        imageUrl: "images/156Quilava.png",
        number: "156",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto",
        height: "2'11\"",
        weight: "41.9 lbs."
    },
    {
        name: "Typhlosion",
        imageUrl: "images/157Typhlosion.png",
        number: "157",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto",
        height: "5'07\"",
        weight: "175.3 lbs."
    },
    {
        name: "Hisuian Typhlosion",
        imageUrl: "forms/157Typhlosion-Hisui.png",
        number: "157",
        type: ["Fire", "Ghost"],
        category: "Ghost Flame",
        region: "Johto",
        height: "5'03\"",
        weight: "153.9 lbs."
    },
    {
        name: "Totodile",
        imageUrl: "images/158Totodile.png",
        number: "158",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto",
        height: "2'00\"",
        weight: "20.9 lbs."
    },
    {
        name: "Croconaw",
        imageUrl: "images/159Croconaw.png",
        number: "159",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto",
        height: "3'07\"",
        weight: "55.1 lbs."
    },
    {
        name: "Feraligatr",
        imageUrl: "images/160Feraligatr.png",
        number: "160",
        type: ["Water"],
        category: "Big Jaw",
        region: "Johto",
        height: "7'07\"",
        weight: "195.8 lbs."
    },
    {
        name: "Sentret",
        imageUrl: "images/161Sentret.png",
        number: "161",
        type: ["Normal"],
        category: "Scout",
        region: "Johto",
        height: "2'07\"",
        weight: "13.2 lbs."
    },
    {
        name: "Furret",
        imageUrl: "images/162Furret.png",
        number: "162",
        type: ["Normal"],
        category: "Long Body",
        region: "Johto",
        height: "5'11\"",
        weight: "71.7 lbs."
    },
    {
        name: "Hoothoot",
        imageUrl: "images/163Hoothoot.png",
        number: "163",
        type: ["Normal", "Flying"],
        category: "Owl",
        region: "Johto",
        height: "2'04\"",
        weight: "46.7 lbs."
    },
    {
        name: "Noctowl",
        imageUrl: "images/164Noctowl.png",
        number: "164",
        type: ["Normal", "Flying"],
        category: "Owl",
        region: "Johto",
        height: "5'03\"",
        weight: "89.9 lbs."
    },
    {
        name: "Ledyba",
        imageUrl: "images/165Ledyba.png",
        number: "165",
        type: ["Bug", "Flying"],
        category: "Five Star",
        region: "Johto",
        height: "3'03\"",
        weight: "23.8 lbs."
    },
    {
        name: "Ledian",
        imageUrl: "images/166Ledian.png",
        number: "166",
        type: ["Bug", "Flying"],
        category: "Five Star",
        region: "Johto",
        height: "4'07\"",
        weight: "78.5 lbs."
    },
    {
        name: "Spinarak",
        imageUrl: "images/167Spinarak.png",
        number: "167",
        type: ["Bug", "Poison"],
        category: "String Spit",
        region: "Johto",
        height: "1'08\"",
        weight: "18.7 lbs."
    },
    {
        name: "Ariados",
        imageUrl: "images/168Ariados.png",
        number: "168",
        type: ["Bug", "Poison"],
        category: "Long Leg",
        region: "Johto",
        height: "3'07\"",
        weight: "73.9 lbs."
    },
    {
        name: "Crobat",
        imageUrl: "images/169Crobat.png",
        number: "169",
        type: ["Poison", "Flying"],
        category: "Bat",
        region: "Johto",
        height: "5'11\"",
        weight: "165.3 lbs."
    },
    {
        name: "Chinchou",
        imageUrl: "images/170Chinchou.png",
        number: "170",
        type: ["Water", "Electric"],
        category: "Angler",
        region: "Johto",
        height: "1'08\"",
        weight: "26.5 lbs."
    },
    {
        name: "Lanturn",
        imageUrl: "images/171Lanturn.png",
        number: "171",
        type: ["Water", "Electric"],
        category: "Light",
        region: "Johto",
        height: "3'11\"",
        weight: "49.6 lbs."
    },
    {
        name: "Pichu",
        imageUrl: "images/172Pichu.png",
        number: "172",
        type: ["Electric"],
        category: "Tiny Mouse",
        region: "Johto",
        height: "1'00\"",
        weight: "4.4 lbs."
    },
    {
        name: "Cleffa",
        imageUrl: "images/173Cleffa.png",
        number: "173",
        type: ["Fairy"],
        category: "Star Shape",
        region: "Johto",
        height: "1'00\"",
        weight: "6.6 lbs."
    },
    {
        name: "Igglybuff",
        imageUrl: "images/174Igglybuff.png",
        number: "174",
        type: ["Normal", "Fairy"],
        category: "Balloon",
        region: "Johto",
        height: "1'00\"",
        weight: "2.2 lbs."
    },
    {
        name: "Togepi",
        imageUrl: "images/175Togepi.png",
        number: "175",
        type: ["Fairy"],
        category: "Spike Ball",
        region: "Johto",
        height: "1'00\"",
        weight: "3.3 lbs."
    },
    {
        name: "Togetic",
        imageUrl: "images/176Togetic.png",
        number: "176",
        type: ["Fairy", "Flying"],
        category: "Happiness",
        region: "Johto",
        height: "2'00\"",
        weight: "7.1 lbs."
    },
    {
        name: "Natu",
        imageUrl: "images/177Natu.png",
        number: "177",
        type: ["Psychic", "Flying"],
        category: "Tiny Bird",
        region: "Johto",
        height: "0'08\"",
        weight: "4.4 lbs."
    },
    {
        name: "Xatu",
        imageUrl: "images/178Xatu.png",
        number: "178",
        type: ["Psychic", "Flying"],
        category: "Mystic",
        region: "Johto",
        height: "4'11\"",
        weight: "33.1 lbs."
    },
    {
        name: "Mareep",
        imageUrl: "images/179Mareep.png",
        number: "179",
        type: ["Electric"],
        category: "Wool",
        region: "Johto",
        height: "2'00\"",
        weight: "17.2 lbs."
    },
    {
        name: "Flaaffy",
        imageUrl: "images/180Flaaffy.png",
        number: "180",
        type: ["Electric"],
        category: "Wool",
        region: "Johto",
        height: "2'07\"",
        weight: "29.3 lbs."
    },
    {
        name: "Ampharos",
        imageUrl: "images/181Ampharos.png",
        number: "181",
        type: ["Electric",],
        category: "Light",
        region: "Johto",
        height: "4'07\"",
        weight: "135.6 lbs."
    },
    {
        name: "Mega Ampharos",
        imageUrl: "forms/181Ampharos-Mega.png",
        number: "181",
        type: ["Electric", "Dragon"],
        category: "Light",
        region: "Johto",
        height: "4'07\"",
        weight: "135.6 lbs."
    },
    {
        name: "Bellossom",
        imageUrl: "images/182Bellossom.png",
        number: "182",
        type: ["Grass"],
        category: "Flower",
        region: "Johto",
        height: "1'04\"",
        weight: "12.8 lbs."
    },
    {
        name: "Marill",
        imageUrl: "images/183Marill.png",
        number: "183",
        type: ["Water", "Fairy"],
        category: "Aqua Mouse",
        region: "Johto",
        height: "1'04\"",
        weight: "18.7 lbs."
    },
    {
        name: "Azumarill",
        imageUrl: "images/184Azumarill.png",
        number: "184",
        type: ["Water", "Fairy"],
        category: "Aqua Rabbit",
        region: "Johto",
        height: "2'07\"",
        weight: "62.8 lbs."
    },
    {
        name: "Sudowoodo",
        imageUrl: "images/185Sudowoodo.png",
        number: "185",
        type: ["Rock"],
        category: "Imitation",
        region: "Johto",
        height: "3'11\"",
        weight: "83.8 lbs."
    },
    {
        name: "Politoed",
        imageUrl: "images/186Politoed.png",
        number: "186",
        type: ["Water"],
        category: "Frog",
        region: "Johto",
        height: "3'07\"",
        weight: "74.7 lbs."
    },
    {
        name: "Hoppip",
        imageUrl: "images/187Hoppip.png",
        number: "187",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto",
        height: "1'04\"",
        weight: "1.1 lbs."
    },
    {
        name: "Skiploom",
        imageUrl: "images/188Skiploom.png",
        number: "188",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto",
        height: "2'00\"",
        weight: "2.2 lbs."
    },
    {
        name: "Jumpluff",
        imageUrl: "images/189Jumpluff.png",
        number: "189",
        type: ["Grass", "Flying"],
        category: "Cottonweed",
        region: "Johto",
        height: "2'07\"",
        weight: "6.6 lbs."
    },
    {
        name: "Aipom",
        imageUrl: "images/190Aipom.png",
        number: "190",
        type: ["Normal"],
        category: "Long Tail",
        region: "Johto",
        height: "2'07\"",
        weight: "25.4 lbs."
    },
    {
        name: "Sunkern",
        imageUrl: "images/191Sunkern.png",
        number: "191",
        type: ["Grass"],
        category: "Seed",
        region: "Johto",
        height: "1'00\"",
        weight: "4.0 lbs."
    },
    {
        name: "Sunflora",
        imageUrl: "images/192Sunflora.png",
        number: "192",
        type: ["Grass"],
        category: "Sun",
        region: "Johto",
        height: "2'07\"",
        weight: "18.7 lbs."
    },
    {
        name: "Yanma",
        imageUrl: "images/193Yanma.png",
        number: "193",
        type: ["Bug", "Flying"],
        category: "Clear Wing",
        region: "Johto",
        height: "3'11\"",
        weight: "83.8 lbs."
    },
    {
        name: "Wooper",
        imageUrl: "images/194Wooper.png",
        number: "194",
        type: ["Water", "Ground"],
        category: "Water Fish",
        region: "Johto",
        height: "1'04\"",
        weight: "18.7 lbs."
    },
    {
        name: "Quagsire",
        imageUrl: "images/195Quagsire.png",
        number: "195",
        type: ["Water", "Ground"],
        category: "Water Fish",
        region: "Johto",
        height: "4'07\"",
        weight: "165.3 lbs."
    },
    {
        name: "Espeon",
        imageUrl: "images/196Espeon.png",
        number: "196",
        type: ["Psychic"],
        category: "Sun",
        region: "Johto",
        height: "2'11\"",
        weight: "58.4 lbs."
    },
    {
        name: "Umbreon",
        imageUrl: "images/197Umbreon.png",
        number: "197",
        type: ["Dark"],
        category: "Moonlight",
        region: "Johto",
        height: "3'03\"",
        weight: "59.5 lbs."
    },
    {
        name: "Murkrow",
        imageUrl: "images/198Murkrow.png",
        number: "198",
        type: ["Dark", "Flying"],
        category: "Darkness",
        region: "Johto",
        height: "1'08\"",
        weight: "4.6 lbs."
    },
    {
        name: "Slowking",
        imageUrl: "images/199Slowking.png",
        number: "199",
        type: ["Water", "Psychic"],
        category: "Royal",
        region: "Johto",
        height: "6'07\"",
        weight: "175.3 lbs."
    },
    {
        name: "Galarian Slowking",
        imageUrl: "forms/199Slowking-Galar.png",
        number: "199",
        type: ["Poison", "Psychic"],
        category: "Hexpert",
        region: "Johto",
        height: "5'11\"",
        weight: "175.3 lbs."
    },
    {
        name: "Misdreavus",
        imageUrl: "images/200Misdreavus.png",
        number: "200",
        type: ["Ghost"],
        category: "Screech",
        region: "Johto",
        height: "2'04\"",
        weight: "2.2 lbs."
    },
    {
        name: "Unown",
        imageUrl: "images/201Unown.png",
        number: "201",
        type: ["Psychic"],
        category: "Symbol",
        region: "Johto",
        height: "1'08\"",
        weight: "11.0 lbs."
    },
    {
        name: "Wobbuffet",
        imageUrl: "images/202Wobbuffet.png",
        number: "202",
        type: ["Psychic"],
        category: "Patient",
        region: "Johto",
        height: "4'03\"",
        weight: "62.8 lbs."
    },
    {
        name: "Girafarig",
        imageUrl: "images/203Girafarig.png",
        number: "203",
        type: ["Normal", "Psychic"],
        category: "Long Neck",
        region: "Johto",
        height: "4'11\"",
        weight: "91.5 lbs."
    },
    {
        name: "Pineco",
        imageUrl: "images/204Pineco.png",
        number: "204",
        type: ["Bug"],
        category: "Bagworm",
        region: "Johto",
        height: "2'00\"",
        weight: "15.9 lbs."
    },
    {
        name: "Forretress",
        imageUrl: "images/205Forretress.png",
        number: "205",
        type: ["Bug", "Steel"],
        category: "Bagworm",
        region: "Johto",
        height: "3'11\"",
        weight: "277.3 lbs."
    },
    {
        name: "Dunsparce",
        imageUrl: "images/206Dunsparce.png",
        number: "206",
        type: ["Normal"],
        category: "Land Snake",
        region: "Johto",
        height: "4'11\"",
        weight: "30.9 lbs."
    },
    {
        name: "Gligar",
        imageUrl: "images/207Gligar.png",
        number: "207",
        type: ["Ground", "Flying"],
        category: "Fly Scorpion",
        region: "Johto",
        height: "3'07\"",
        weight: "142.9 lbs."
    },
    {
        name: "Steelix",
        imageUrl: "images/208Steelix.png",
        number: "208",
        type: ["Steel", "Ground"],
        category: "Iron Snake",
        region: "Johto",
        height: "30'02\"",
        weight: "881.8 lbs."
    },
    {
        name: "Mega Steelix",
        imageUrl: "forms/208Steelix-Mega.png",
        number: "208",
        type: ["Steel", "Ground"],
        category: "Iron Snake",
        region: "Johto",
        height: "34'05\"",
        weight: "1631.4 lbs."
    },
    {
        name: "Snubbull",
        imageUrl: "images/209Snubbull.png",
        number: "209",
        type: ["Fairy"],
        category: "Fairy",
        region: "Johto",
        height: "2'00\"",
        weight: "17.2 lbs."
    },
    {
        name: "Granbull",
        imageUrl: "images/210Granbull.png",
        number: "210",
        type: ["Fairy"],
        category: "Fairy",
        region: "Johto",
        height: "4'07\"",
        weight: "107.4 lbs."
    },
    {
        name: "Qwilfish",
        imageUrl: "images/211Qwilfish.png",
        number: "211",
        type: ["Water", "Poison"],
        category: "Balloon",
        region: "Johto",
        height: "1'08\"",
        weight: "8.6 lbs."
    },
    {
        name: "Hisuian Qwilfish",
        imageUrl: "forms/211Qwilfish-Hisui.png",
        number: "211",
        type: ["Dark", "Poison"],
        category: "Balloon",
        region: "Johto",
        height: "1'08\"",
        weight: "8.6 lbs."
    },
    {
        name: "Scizor",
        imageUrl: "images/212Scizor.png",
        number: "212",
        type: ["Bug", "Steel"],
        category: "Pincer",
        region: "Johto",
        height: "5'11\"",
        weight: "260.1 lbs."
    },
    {
        name: "Mega Scizor",
        imageUrl: "forms/212Scizor-Mega.png",
        number: "212",
        type: ["Bug", "Steel"],
        category: "Pincer",
        region: "Johto",
        height: "6'07\"",
        weight: "275.6 lbs."
    },
    {
        name: "Shuckle",
        imageUrl: "images/213Shuckle.png",
        number: "213",
        type: ["Bug", "Rock"],
        category: "Mold",
        region: "Johto",
        height: "2'00\"",
        weight: "45.2 lbs."
    },
    {
        name: "Heracross",
        imageUrl: "images/214Heracross.png",
        number: "214",
        type: ["Bug", "Fighting"],
        category: "Single Horn",
        region: "Johto",
        height: "4'11\"",
        weight: "119.0 lbs."
    },
    {
        name: "Mega Heracross",
        imageUrl: "forms/214Heracross-Mega.png",
        number: "214",
        type: ["Bug", "Fighting"],
        category: "Single Horn",
        region: "Johto",
        height: "5'07\"",
        weight: "137.8 lbs."
    },
    {
        name: "Sneasel",
        imageUrl: "images/215Sneasel.png",
        number: "215",
        type: ["Dark", "Ice"],
        category: "Sharp Claw",
        region: "Johto",
        height: "2'11\"",
        weight: "61.7 lbs."
    },
    {
        name: "Hisuian Sneasel",
        imageUrl: "forms/215Sneasel-Hisui.png",
        number: "215",
        type: ["Fighting", "Poison"],
        category: "Sharp Claw",
        region: "Johto",
        height: "2'11\"",
        weight: "59.5 lbs."
    },
    {
        name: "Teddiursa",
        imageUrl: "images/216Teddiursa.png",
        number: "216",
        type: ["Normal"],
        category: "Little Bear",
        region: "Johto",
        height: "2'00\"",
        weight: "19.4 lbs."
    },
    {
        name: "Ursaring",
        imageUrl: "images/217Ursaring.png",
        number: "217",
        type: ["Normal"],
        category: "Hibernator",
        region: "Johto",
        height: "5'11\"",
        weight: "277.3 lbs."
    },
    {
        name: "Slugma",
        imageUrl: "images/218Slugma.png",
        number: "218",
        type: ["Fire"],
        category: "Lava",
        region: "Johto",
        height: "2'04\"",
        weight: "77.2 lbs."
    },
    {
        name: "Magcargo",
        imageUrl: "images/219Magcargo.png",
        number: "219",
        type: ["Fire", "Rock"],
        category: "Lava",
        region: "Johto",
        height: "2'07\"",
        weight: "121.3 lbs."
    },
    {
        name: "Swinub",
        imageUrl: "images/220Swinub.png",
        number: "220",
        type: ["Ice", "Ground"],
        category: "Pig",
        region: "Johto",
        height: "1'04\"",
        weight: "14.3 lbs."
    },
    {
        name: "Piloswine",
        imageUrl: "images/221Piloswine.png",
        number: "221",
        type: ["Ice", "Ground"],
        category: "Swine",
        region: "Johto",
        height: "3'07\"",
        weight: "123.0 lbs."
    },
    {
        name: "Corsola",
        imageUrl: "images/222Corsola.png",
        number: "222",
        type: ["Water", "Rock"],
        category: "Coral",
        region: "Johto",
        height: "2'00\"",
        weight: "11.0 lbs."
    },
    {
        name: "Galarian Corsola",
        imageUrl: "forms/222Corsola-Galar.png",
        number: "222",
        type: ["Ghost"],
        category: "Coral",
        region: "Johto",
        height: "2'00\"",
        weight: "1.1 lbs."
    },
    {
        name: "Remoraid",
        imageUrl: "images/223Remoraid.png",
        number: "223",
        type: ["Water"],
        category: "Jet",
        region: "Johto",
        height: "2'00\"",
        weight: "26.5 lbs."
    },
    {
        name: "Octillery",
        imageUrl: "images/224Octillery.png",
        number: "224",
        type: ["Water"],
        category: "Jet",
        region: "Johto",
        height: "2'11\"",
        weight: "62.8 lbs."
    },
    {
        name: "Delibird",
        imageUrl: "images/225Delibird.png",
        number: "225",
        type: ["Ice", "Flying"],
        category: "Delivery",
        region: "Johto",
        height: "2'11\"",
        weight: "35.3 lbs."
    },
    {
        name: "Mantine",
        imageUrl: "images/226Mantine.png",
        number: "226",
        type: ["Water", "Flying"],
        category: "Kite",
        region: "Johto",
        height: "6'11\"",
        weight: "485.0 lbs."
    },
    {
        name: "Skarmory",
        imageUrl: "images/227Skarmory.png",
        number: "227",
        type: ["Steel", "Flying"],
        category: "Armor Bird",
        region: "Johto",
        height: "5'07\"",
        weight: "111.3 lbs."
    },
    {
        name: "Houndour",
        imageUrl: "images/228Houndour.png",
        number: "228",
        type: ["Dark", "Fire"],
        category: "Dark",
        region: "Johto",
        height: "2'00\"",
        weight: "23.8 lbs."
    },
    {
        name: "Houndoom",
        imageUrl: "images/229Houndoom.png",
        number: "229",
        type: ["Dark", "Fire"],
        category: "Dark",
        region: "Johto",
        height: "4'07\"",
        weight: "77.2 lbs."
    },
    {
        name: "Mega Houndoom",
        imageUrl: "forms/229Houndoom-Mega.png",
        number: "229",
        type: ["Dark", "Fire"],
        category: "Dark",
        region: "Johto",
        height: "6'03\"",
        weight: "109.1 lbs."
    },
    {
        name: "Kingdra",
        imageUrl: "images/230Kingdra.png",
        number: "230",
        type: ["Water", "Dragon"],
        category: "Dragon",
        region: "Johto",
        height: "5'11\"",
        weight: "335.1 lbs."
    },
    {
        name: "Phanpy",
        imageUrl: "images/231Phanpy.png",
        number: "231",
        type: ["Ground"],
        category: "Long Nose",
        region: "Johto",
        height: "1'08\"",
        weight: "73.9 lbs."
    },
    {
        name: "Donphan",
        imageUrl: "images/232Donphan.png",
        number: "232",
        type: ["Ground"],
        category: "Armor",
        region: "Johto",
        height: "3'07\"",
        weight: "264.6 lbs."
    },
    {
        name: "Porygon2",
        imageUrl: "images/233Porygon2.png",
        number: "233",
        type: ["Normal"],
        category: "Virtual",
        region: "Johto",
        height: "2'00\"",
        weight: "71.7 lbs."
    },
    {
        name: "Stantler",
        imageUrl: "images/234Stantler.png",
        number: "234",
        type: ["Normal"],
        category: "Big Horn",
        region: "Johto",
        height: "4'07\"",
        weight: "157.0 lbs."
    },
    {
        name: "Smeargle",
        imageUrl: "images/235Smeargle.png",
        number: "235",
        type: ["Normal"],
        category: "Painter",
        region: "Johto",
        height: "3'11\"",
        weight: "127.9 lbs."
    },
    {
        name: "Tyrogue",
        imageUrl: "images/236Tyrogue.png",
        number: "236",
        type: ["Fighting"],
        category: "Scuffle",
        region: "Johto",
        height: "2'04\"",
        weight: "46.3 lbs."
    },
    {
        name: "Hitmontop",
        imageUrl: "images/237Hitmontop.png",
        number: "237",
        type: ["Fighting"],
        category: "Handstand",
        region: "Johto",
        height: "4'07\"",
        weight: "105.8 lbs."
    },
    {
        name: "Smoochum",
        imageUrl: "images/238Smoochum.png",
        number: "238",
        type: ["Ice", "Psychic"],
        category: "Kiss",
        region: "Johto",
        height: "1'04\"",
        weight: "13.2 lbs."
    },
    {
        name: "Elekid",
        imageUrl: "images/239Elekid.png",
        number: "239",
        type: ["Electric"],
        category: "Electric",
        region: "Johto",
        height: "2'00\"",
        weight: "51.8 lbs."
    },
    {
        name: "Magby",
        imageUrl: "images/240Magby.png",
        number: "240",
        type: ["Fire"],
        category: "Live Coal",
        region: "Johto",
        height: "2'04\"",
        weight: "47.2 lbs."
    },
    {
        name: "Miltank",
        imageUrl: "images/241Miltank.png",
        number: "241",
        type: ["Normal"],
        category: "Milk Cow",
        region: "Johto",
        height: "3'11\"",
        weight: "166.4 lbs."
    },
    {
        name: "Blissey",
        imageUrl: "images/242Blissey.png",
        number: "242",
        type: ["Normal"],
        category: "Happiness",
        region: "Johto",
        height: "4'11\"",
        weight: "103.2 lbs."
    },
    {
        name: "Raikou",
        imageUrl: "images/243Raikou.png",
        number: "243",
        type: ["Electric"],
        category: "Thunder",
        region: "Johto",
        height: "6'03\"",
        weight: "392.4 lbs."
    },
    {
        name: "Entei",
        imageUrl: "images/244Entei.png",
        number: "244",
        type: ["Fire"],
        category: "Volcano",
        region: "Johto",
        height: "6'11\"",
        weight: "436.5 lbs."
    },
    {
        name: "Suicune",
        imageUrl: "images/245Suicune.png",
        number: "245",
        type: ["Water"],
        category: "Aurora",
        region: "Johto",
        height: "6'07\"",
        weight: "412.3 lbs."
    },
    {
        name: "Larvitar",
        imageUrl: "images/246Larvitar.png",
        number: "246",
        type: ["Rock", "Ground"],
        category: "Rock Skin",
        region: "Johto",
        height: "2'00\"",
        weight: "158.7 lbs."
    },
    {
        name: "Pupitar",
        imageUrl: "images/247Pupitar.png",
        number: "247",
        type: ["Rock", "Ground"],
        category: "Hard Shell",
        region: "Johto",
        height: "3'11\"",
        weight: "335.1 lbs."
    },
    {
        name: "Tyranitar",
        imageUrl: "images/248Tyranitar.png",
        number: "248",
        type: ["Rock", "Dark"],
        category: "Armor",
        region: "Johto",
        height: "6'07\"",
        weight: "445.3 lbs."
    },
    {
        name: "Mega Tyranitar",
        imageUrl: "forms/248Tyranitar-Mega.png",
        number: "248",
        type: ["Rock", "Dark"],
        category: "Armor",
        region: "Johto",
        height: "8'02\"",
        weight: "562.2 lbs."
    },
    {
        name: "Lugia",
        imageUrl: "images/249Lugia.png",
        number: "249",
        type: ["Psychic", "Flying"],
        category: "Diving",
        region: "Johto",
        height: "17'01\"",
        weight: "476.2 lbs."
    },
    {
        name: "Ho-Oh",
        imageUrl: "images/250Ho-Oh.png",
        number: "250",
        type: ["Fire", "Flying"],
        category: "Rainbow",
        region: "Johto",
        height: "12'06\"",
        weight: "438.7 lbs."
    },
    {
        name: "Celebi",
        imageUrl: "images/251Celebi.png",
        number: "251",
        type: ["Psychic", "Grass"],
        category: "Time Travel",
        region: "Johto",
        height: "2'00\"",
        weight: "11.0 lbs."
    },
    {
        name: "Treecko",
        imageUrl: "images/252Treecko.png",
        number: "252",
        type: ["Grass"],
        category: "Wood Gecko",
        region: "Hoenn",
        height: "1'08\"",
        weight: "11.0 lbs."
    },
    {
        name: "Grovyle",
        imageUrl: "images/253Grovyle.png",
        number: "253",
        type: ["Grass"],
        category: "Wood Gecko",
        region: "Hoenn",
        height: "2'11\"",
        weight: "47.6 lbs."
    },
    {
        name: "Sceptile",
        imageUrl: "images/254Sceptile.png",
        number: "254",
        type: ["Grass"],
        category: "Forest",
        region: "Hoenn",
        height: "5'07\"",
        weight: "115.1 lbs."
    },
    {
        name: "Mega Sceptile",
        imageUrl: "forms/254Sceptile-Mega.png",
        number: "254",
        type: ["Grass", "Dragon"],
        category: "Forest",
        region: "Hoenn",
        height: "6'03\"",
        weight: "121.7 lbs."
    },
    {
        name: "Torchic",
        imageUrl: "images/255Torchic.png",
        number: "255",
        type: ["Fire"],
        category: "Chick",
        region: "Hoenn",
        height: "1'04\"",
        weight: "5.5 lbs."
    },
    {
        name: "Combusken",
        imageUrl: "images/256Combusken.png",
        number: "256",
        type: ["Fire", "Fighting"],
        category: "Young Fowl",
        region: "Hoenn",
        height: "2'11\"",
        weight: "43.0 lbs."
    },
    {
        name: "Blaziken",
        imageUrl: "images/257Blaziken.png",
        number: "257",
        type: ["Fire", "Fighting"],
        category: "Blaze",
        region: "Hoenn",
        height: "6'03\"",
        weight: "114.6 lbs."
    },
    {
        name: "Mega Blaziken",
        imageUrl: "forms/257Blaziken-Mega.png",
        number: "257",
        type: ["Fire", "Fighting"],
        category: "Blaze",
        region: "Hoenn",
        height: "6'03\"",
        weight: "114.6 lbs."
    },
    {
        name: "Mudkip",
        imageUrl: "images/258Mudkip.png",
        number: "258",
        type: ["Water"],
        category: "Mud Fish",
        region: "Hoenn",
        height: "1'04\"",
        weight: "16.8 lbs."
    },
    {
        name: "Marshtomp",
        imageUrl: "images/259Marshtomp.png",
        number: "259",
        type: ["Water", "Ground"],
        category: "Mud Fish",
        region: "Hoenn",
        height: "2'04\"",
        weight: "61.7 lbs."
    },
    {
        name: "Swampert",
        imageUrl: "images/260Swampert.png",
        number: "260",
        type: ["Water", "Ground"],
        category: "Mud Fish",
        region: "Hoenn",
        height: "4'11\"",
        weight: "180.6 lbs."
    },
    {
        name: "Mega Swampert",
        imageUrl: "forms/260Swampert-Mega.png",
        number: "260",
        type: ["Water", "Ground"],
        category: "Mud Fish",
        region: "Hoenn",
        height: "6'03\"",
        weight: "224.9 lbs."
    },
    {
        name: "Poochyena",
        imageUrl: "images/261Poochyena.png",
        number: "261",
        type: ["Dark"],
        category: "Bite",
        region: "Hoenn",
        height: "1'08\"",
        weight: "30.0 lbs."
    },
    {
        name: "Mightyena",
        imageUrl: "images/262Mightyena.png",
        number: "262",
        type: ["Dark"],
        category: "Bite",
        region: "Hoenn",
        height: "3'03\"",
        weight: "81.6 lbs."
    },
    {
        name: "Zigzagoon",
        imageUrl: "images/263Zigzagoon.png",
        number: "263",
        type: ["Normal"],
        category: "Tiny Raccoon",
        region: "Hoenn",
        height: "1'04\"",
        weight: "38.6 lbs."
    },
    {
        name: "Galarian Zigzagoon",
        imageUrl: "forms/263Zigzagoon-Galar.png",
        number: "263",
        type: ["Dark", "Normal"],
        category: "Tiny Raccoon",
        region: "Hoenn",
        height: "1'04\"",
        weight: "38.6 lbs."
    },
    {
        name: "Linoone",
        imageUrl: "images/264Linoone.png",
        number: "264",
        type: ["Normal"],
        category: "Rushing",
        region: "Hoenn",
        height: "1'08\"",
        weight: "71.7 lbs."
    },
    {
        name: "Galarian Linoone",
        imageUrl: "forms/264Linoone-Galar.png",
        number: "264",
        type: ["Dark", "Normal"],
        category: "Rushing",
        region: "Hoenn",
        height: "1'08\"",
        weight: "71.7 lbs."
    },
    {
        name: "Wurmple",
        imageUrl: "images/265Wurmple.png",
        number: "265",
        type: ["Bug"],
        category: "Worm",
        region: "Hoenn",
        height: "1'00\"",
        weight: "7.9 lbs."
    },
    {
        name: "Silcoon",
        imageUrl: "images/266Silcoon.png",
        number: "266",
        type: ["Bug"],
        category: "Cocoon",
        region: "Hoenn",
        height: "2'00\"",
        weight: "22.0 lbs."
    },
    {
        name: "Beautifly",
        imageUrl: "images/267Beautifly.png",
        number: "267",
        type: ["Bug", "Flying"],
        category: "Butterfly",
        region: "Hoenn",
        height: "3'03\"",
        weight: "62.6 lbs."
    },
    {
        name: "Cascoon",
        imageUrl: "images/268Cascoon.png",
        number: "268",
        type: ["Bug"],
        category: "Cocoon",
        region: "Hoenn",
        height: "2'04\"",
        weight: "25.4 lbs."
    },
    {
        name: "Dustox",
        imageUrl: "images/269Dustox.png",
        number: "269",
        type: ["Bug", "Poison"],
        category: "Poison Moth",
        region: "Hoenn",
        height: "3'11\"",
        weight: "69.7 lbs."
    },
    {
        name: "Lotad",
        imageUrl: "images/270Lotad.png",
        number: "270",
        type: ["Water", "Grass"],
        category: "Water Weed",
        region: "Hoenn",
        height: "1'08\"",
        weight: "5.7 lbs."
    },
    {
        name: "Lombre",
        imageUrl: "images/271Lombre.png",
        number: "271",
        type: ["Water", "Grass"],
        category: "Jolly",
        region: "Hoenn",
        height: "3'11\"",
        weight: "71.7 lbs."
    },
    {
        name: "Ludicolo",
        imageUrl: "images/272Ludicolo.png",
        number: "272",
        type: ["Water", "Grass"],
        category: "Carefree",
        region: "Hoenn",
        height: "4'11\"",
        weight: "121.3 lbs."
    },
    {
        name: "Seedot",
        imageUrl: "images/273Seedot.png",
        number: "273",
        type: ["Grass"],
        category: "Acorn",
        region: "Hoenn",
        height: "1'08\"",
        weight: "8.8 lbs."
    },
    {
        name: "Nuzleaf",
        imageUrl: "images/274Nuzleaf.png",
        number: "274",
        type: ["Grass", "Dark"],
        category: "Wily",
        region: "Hoenn",
        height: "3'03\"",
        weight: "61.7 lbs."
    },
    {
        name: "Shiftry",
        imageUrl: "images/275Shiftry.png",
        number: "275",
        type: ["Grass", "Dark"],
        category: "Wicked",
        region: "Hoenn",
        height: "4'03\"",
        weight: "131.4 lbs."
    },
    {
        name: "Taillow",
        imageUrl: "images/276Taillow.png",
        number: "276",
        type: ["Normal", "Flying"],
        category: "Tiny Swallow",
        region: "Hoenn",
        height: "1'00\"",
        weight: "5.1 lbs."
    },
    {
        name: "Swellow",
        imageUrl: "images/277Swellow.png",
        number: "277",
        type: ["Normal", "Flying"],
        category: "Swallow",
        region: "Hoenn",
        height: "2'04\"",
        weight: "43.7 lbs."
    },
    {
        name: "Wingull",
        imageUrl: "images/278Wingull.png",
        number: "278",
        type: ["Water", "Flying"],
        category: "Seagull",
        region: "Hoenn",
        height: "2'00\"",
        weight: "20.9 lbs."
    },
    {
        name: "Pelipper",
        imageUrl: "images/279Pelipper.png",
        number: "279",
        type: ["Water", "Flying"],
        category: "Water Bird",
        region: "Hoenn",
        height: "3'11\"",
        weight: "61.7 lbs."
    },
    {
        name: "Ralts",
        imageUrl: "images/280Ralts.png",
        number: "280",
        type: ["Psychic", "Fairy"],
        category: "Feeling",
        region: "Hoenn",
        height: "1'04\"",
        weight: "14.6 lbs."
    },
    {
        name: "Kirlia",
        imageUrl: "images/281Kirlia.png",
        number: "281",
        type: ["Psychic", "Fairy"],
        category: "Emotion",
        region: "Hoenn",
        height: "2'07\"",
        weight: "44.5 lbs."
    },
    {
        name: "Gardevoir",
        imageUrl: "images/282Gardevoir.png",
        number: "282",
        type: ["Psychic", "Fairy"],
        category: "Embrace",
        region: "Hoenn",
        height: "5'03\"",
        weight: "106.7 lbs."
    },
    {
        name: "Mega Gardevoir",
        imageUrl: "forms/282Gardevoir-Mega.png",
        number: "282",
        type: ["Psychic", "Fairy"],
        category: "Embrace",
        region: "Hoenn",
        height: "5'03\"",
        weight: "106.7 lbs."
    },
    {
        name: "Surskit",
        imageUrl: "images/283Surskit.png",
        number: "283",
        type: ["Bug", "Water"],
        category: "Pond Skater",
        region: "Hoenn",
        height: "1'08\"",
        weight: "3.7 lbs."
    },
    {
        name: "Masquerain",
        imageUrl: "images/284Masquerain.png",
        number: "284",
        type: ["Bug", "Flying"],
        category: "Eyeball",
        region: "Hoenn",
        height: "2'07\"",
        weight: "7.9 lbs."
    },
    {
        name: "Shroomish",
        imageUrl: "images/285Shroomish.png",
        number: "285",
        type: ["Grass"],
        category: "Mushroom",
        region: "Hoenn",
        height: "1'04\"",
        weight: "9.9 lbs."
    },
    {
        name: "Breloom",
        imageUrl: "images/286Breloom.png",
        number: "286",
        type: ["Grass", "Fighting"],
        category: "Mushroom",
        region: "Hoenn",
        height: "3'11\"",
        weight: "86.4 lbs."
    },
    {
        name: "Slakoth",
        imageUrl: "images/287Slakoth.png",
        number: "287",
        type: ["Normal"],
        category: "Slacker",
        region: "Hoenn",
        height: "2'07\"",
        weight: "52.9 lbs."
    },
    {
        name: "Vigoroth",
        imageUrl: "images/288Vigoroth.png",
        number: "288",
        type: ["Normal"],
        category: "Wild Monkey",
        region: "Hoenn",
        height: "4'07\"",
        weight: "102.5 lbs."
    },
    {
        name: "Slaking",
        imageUrl: "images/289Slaking.png",
        number: "289",
        type: ["Normal"],
        category: "Lazy",
        region: "Hoenn",
        height: "6'07\"",
        weight: "287.7 lbs."
    },
    {
        name: "Nincada",
        imageUrl: "images/290Nincada.png",
        number: "290",
        type: ["Bug", "Ground"],
        category: "Trainee",
        region: "Hoenn",
        height: "1'08\"",
        weight: "12.1 lbs."
    },
    {
        name: "Ninjask",
        imageUrl: "images/291Ninjask.png",
        number: "291",
        type: ["Bug", "Flying"],
        category: "Ninja",
        region: "Hoenn",
        height: "2'07\"",
        weight: "26.5 lbs."
    },
    {
        name: "Shedinja",
        imageUrl: "images/292Shedinja.png",
        number: "292",
        type: ["Bug", "Ghost"],
        category: "Shed",
        region: "Hoenn",
        height: "2'07\"",
        weight: "2.6 lbs."
    },
    {
        name: "Whismur",
        imageUrl: "images/293Whismur.png",
        number: "293",
        type: ["Normal"],
        category: "Whisper",
        region: "Hoenn",
        height: "2'00\"",
        weight: "35.9 lbs."
    },
    {
        name: "Loudred",
        imageUrl: "images/294Loudred.png",
        number: "294",
        type: ["Normal"],
        category: "Big Voice",
        region: "Hoenn",
        height: "3'03\"",
        weight: "89.3 lbs."
    },
    {
        name: "Exploud",
        imageUrl: "images/295Exploud.png",
        number: "295",
        type: ["Normal"],
        category: "Loud Noise",
        region: "Hoenn",
        height: "4'11\"",
        weight: "185.2 lbs."
    },
    {
        name: "Makuhita",
        imageUrl: "images/296Makuhita.png",
        number: "296",
        type: ["Fighting"],
        category: "Guts",
        region: "Hoenn",
        height: "3'03\"",
        weight: "190.5 lbs."
    },
    {
        name: "Hariyama",
        imageUrl: "images/297Hariyama.png",
        number: "297",
        type: ["Fighting"],
        category: "Arm Thrust",
        region: "Hoenn",
        height: "7'07\"",
        weight: "559.5 lbs."
    },
    {
        name: "Azurill",
        imageUrl: "images/298Azurill.png",
        number: "298",
        type: ["Normal", "Fairy"],
        category: "Polka Dot",
        region: "Hoenn",
        height: "0'08\"",
        weight: "4.4 lbs."
    },
    {
        name: "Nosepass",
        imageUrl: "images/299Nosepass.png",
        number: "299",
        type: ["Rock"],
        category: "Compass",
        region: "Hoenn",
        height: "3'03\"",
        weight: "213.8 lbs."
    },
    {
        name: "Skitty",
        imageUrl: "images/300Skitty.png",
        number: "300",
        type: ["Normal"],
        category: "Kitten",
        region: "Hoenn",
        height: "2'00\"",
        weight: "24.3 lbs."
    },
    {
        name: "Delcatty",
        imageUrl: "images/301Delcatty.png",
        number: "301",
        type: ["Normal"],
        category: "Prim",
        region: "Hoenn",
        height: "3'07\"",
        weight: "71.9 lbs."
    },
    {
        name: "Sableye",
        imageUrl: "images/302Sableye.png",
        number: "302",
        type: ["Dark", "Ghost"],
        category: "Darkness",
        region: "Hoenn",
        height: "1'08\"",
        weight: "24.3 lbs."
    },
    {
        name: "Mega Sableye",
        imageUrl: "forms/302Sableye-Mega.png",
        number: "302",
        type: ["Dark", "Ghost"],
        category: "Darkness",
        region: "Hoenn",
        height: "1'08\"",
        weight: "354.9 lbs."
    },
    {
        name: "Mawile",
        imageUrl: "images/303Mawile.png",
        number: "303",
        type: ["Steel", "Fairy"],
        category: "Deceiver",
        region: "Hoenn",
        height: "2'00\"",
        weight: "25.4 lbs."
    },
    {
        name: "Mega Mawile",
        imageUrl: "forms/303Mawile-Mega.png",
        number: "303",
        type: ["Steel", "Fairy"],
        category: "Deceiver",
        region: "Hoenn",
        height: "3'03\"",
        weight: "51.8 lbs."
    },
    {
        name: "Aron",
        imageUrl: "images/304Aron.png",
        number: "304",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn",
        height: "1'04\"",
        weight: "132.3 lbs."
    },
    {
        name: "Lairon",
        imageUrl: "images/305Lairon.png",
        number: "305",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn",
        height: "2'11\"",
        weight: "264.6 lbs."
    },
    {
        name: "Aggron",
        imageUrl: "images/306Aggron.png",
        number: "306",
        type: ["Steel", "Rock"],
        category: "Iron Armor",
        region: "Hoenn",
        height: "6'11\"",
        weight: "793.7 lbs."
    },
    {
        name: "Mega Aggron",
        imageUrl: "forms/306Aggron-Mega.png",
        number: "306",
        type: ["Steel"],
        category: "Iron Armor",
        region: "Hoenn",
        height: "7'03\"",
        weight: "870.8 lbs."
    },
    {
        name: "Meditite",
        imageUrl: "images/307Meditite.png",
        number: "307",
        type: ["Fighting", "Psychic"],
        category: "Meditate",
        region: "Hoenn",
        height: "2'00\"",
        weight: "24.7 lbs."
    },
    {
        name: "Medicham",
        imageUrl: "images/308Medicham.png",
        number: "308",
        type: ["Fighting", "Psychic"],
        category: "Meditate",
        region: "Hoenn",
        height: "4'03\"",
        weight: "69.4 lbs."
    },
    {
        name: "Mega Medicham",
        imageUrl: "forms/308Medicham-Mega.png",
        number: "308",
        type: ["Fighting", "Psychic"],
        category: "Meditate",
        region: "Hoenn",
        height: "4'03\"",
        weight: "69.4 lbs."
    },
    {
        name: "Electrike",
        imageUrl: "images/309Electrike.png",
        number: "309",
        type: ["Electric"],
        category: "Lightning",
        region: "Hoenn",
        height: "2'00\"",
        weight: "33.5 lbs."
    },
    {
        name: "Manectric",
        imageUrl: "images/310Manectric.png",
        number: "310",
        type: ["Electric"],
        category: "Discharge",
        region: "Hoenn",
        height: "4'11\"",
        weight: "88.6 lbs."
    },
    {
        name: "Mega Manectric",
        imageUrl: "forms/310Manectric-Mega.png",
        number: "310",
        type: ["Electric"],
        category: "Discharge",
        region: "Hoenn",
        height: "5'11\"",
        weight: "97.0 lbs."
    },
    {
        name: "Plusle",
        imageUrl: "images/311Plusle.png",
        number: "311",
        type: ["Electric"],
        category: "Cheering",
        region: "Hoenn",
        height: "1'04\"",
        weight: "9.3 lbs."
    },
    {
        name: "Minun",
        imageUrl: "images/312Minun.png",
        number: "312",
        type: ["Electric"],
        category: "Cheering",
        region: "Hoenn",
        height: "1'04\"",
        weight: "9.3 lbs."
    },
    {
        name: "Volbeat",
        imageUrl: "images/313Volbeat.png",
        number: "313",
        type: ["Bug"],
        category: "Firefly",
        region: "Hoenn",
        height: "2'04\"",
        weight: "39.0 lbs."
    },
    {
        name: "Illumise",
        imageUrl: "images/314Illumise.png",
        number: "314",
        type: ["Bug"],
        category: "Firefly",
        region: "Hoenn",
        height: "2'00\"",
        weight: "39.0 lbs."
    },
    {
        name: "Roselia",
        imageUrl: "images/315Roselia.png",
        number: "315",
        type: ["Grass", "Poison"],
        category: "Thorn",
        region: "Hoenn",
        height: "1'00\"",
        weight: "4.4 lbs."
    },
    {
        name: "Gulpin",
        imageUrl: "images/316Gulpin.png",
        number: "316",
        type: ["Poison"],
        category: "Stomach",
        region: "Hoenn",
        height: "1'04\"",
        weight: "22.7 lbs."
    },
    {
        name: "Swalot",
        imageUrl: "images/317Swalot.png",
        number: "317",
        type: ["Poison"],
        category: "Poison Bag",
        region: "Hoenn",
        height: "5'07\"",
        weight: "176.4 lbs."
    },
    {
        name: "Carvanha",
        imageUrl: "images/318Carvanha.png",
        number: "318",
        type: ["Water", "Dark"],
        category: "Savage",
        region: "Hoenn",
        height: "2'07\"",
        weight: "45.9 lbs."
    },
    {
        name: "Sharpedo",
        imageUrl: "images/319Sharpedo.png",
        number: "319",
        type: ["Water", "Dark"],
        category: "Brutal",
        region: "Hoenn",
        height: "5'11\"",
        weight: "195.8 lbs."
    },
    {
        name: "Mega Sharpedo",
        imageUrl: "forms/319Sharpedo-Mega.png",
        number: "319",
        type: ["Water", "Dark"],
        category: "Brutal",
        region: "Hoenn",
        height: "8'02\"",
        weight: "287.3 lbs."
    },
    {
        name: "Wailmer",
        imageUrl: "images/320Wailmer.png",
        number: "320",
        type: ["Water"],
        category: "Ball Whale",
        region: "Hoenn",
        height: "6'07\"",
        weight: "286.6 lbs."
    },
    {
        name: "Wailord",
        imageUrl: "images/321Wailord.png",
        number: "321",
        type: ["Water"],
        category: "Float Whale",
        region: "Hoenn",
        height: "47'07\"",
        weight: "877.4 lbs."
    },
    {
        name: "Numel",
        imageUrl: "images/322Numel.png",
        number: "322",
        type: ["Fire", "Ground"],
        category: "Numb",
        region: "Hoenn",
        height: "2'04\"",
        weight: "52.9 lbs."
    },
    {
        name: "Camerupt",
        imageUrl: "images/323Camerupt.png",
        number: "323",
        type: ["Fire", "Ground"],
        category: "Eruption",
        region: "Hoenn",
        height: "6'03\"",
        weight: "485.0 lbs."
    },
    {
        name: "Mega Camerupt",
        imageUrl: "forms/323Camerupt-Mega.png",
        number: "323",
        type: ["Fire", "Ground"],
        category: "Eruption",
        region: "Hoenn",
        height: "8'02\"",
        weight: "706.6 lbs."
    },
    {
        name: "Torkoal",
        imageUrl: "images/324Torkoal.png",
        number: "324",
        type: ["Fire"],
        category: "Coal",
        region: "Hoenn",
        height: "1'08\"",
        weight: "177.3 lbs."
    },
    {
        name: "Spoink",
        imageUrl: "images/325Spoink.png",
        number: "325",
        type: ["Psychic"],
        category: "Bounce",
        region: "Hoenn",
        height: "2'04\"",
        weight: "67.5 lbs."
    },
    {
        name: "Grumpig",
        imageUrl: "images/326Grumpig.png",
        number: "326",
        type: ["Psychic"],
        category: "Manipulate",
        region: "Hoenn",
        height: "2'11\"",
        weight: "157.6 lbs."
    },
    {
        name: "Spinda",
        imageUrl: "images/327Spinda.png",
        number: "327",
        type: ["Normal"],
        category: "Spot Panda",
        region: "Hoenn",
        height: "3'07\"",
        weight: "11.0 lbs."
    },
    {
        name: "Trapinch",
        imageUrl: "images/328Trapinch.png",
        number: "328",
        type: ["Ground"],
        category: "Ant Pit",
        region: "Hoenn",
        height: "2'04\"",
        weight: "33.1 lbs."
    },
    {
        name: "Vibrava",
        imageUrl: "images/329Vibrava.png",
        number: "329",
        type: ["Ground", "Dragon"],
        category: "Vibration",
        region: "Hoenn",
        height: "3'07\"",
        weight: "33.7 lbs."
    },
    {
        name: "Flygon",
        imageUrl: "images/330Flygon.png",
        number: "330",
        type: ["Ground", "Dragon"],
        category: "Mystic",
        region: "Hoenn",
        height: "6'07\"",
        weight: "180.8 lbs."
    },
    {
        name: "Cacnea",
        imageUrl: "images/331Cacnea.png",
        number: "331",
        type: ["Grass"],
        category: "Cactus",
        region: "Hoenn",
        height: "1'04\"",
        weight: "113.1 lbs."
    },
    {
        name: "Cacturne",
        imageUrl: "images/332Cacturne.png",
        number: "332",
        type: ["Grass", "Dark"],
        category: "Scarecrow",
        region: "Hoenn",
        height: "4'03\"",
        weight: "170.6 lbs."
    },
    {
        name: "Swablu",
        imageUrl: "images/333Swablu.png",
        number: "333",
        type: ["Normal", "Flying"],
        category: "Cotton Bird",
        region: "Hoenn",
        height: "1'04\"",
        weight: "2.6 lbs."
    },
    {
        name: "Altaria",
        imageUrl: "images/334Altaria.png",
        number: "334",
        type: ["Dragon", "Flying"],
        category: "Humming",
        region: "Hoenn",
        height: "3'07\"",
        weight: "45.4 lbs."
    },
    {
        name: "Mega Altaria",
        imageUrl: "forms/334Altaria-Mega.png",
        number: "334",
        type: ["Dragon", "Fairy"],
        category: "Humming",
        region: "Hoenn",
        height: "4'11\"",
        weight: "45.4 lbs."
    },
    {
        name: "Zangoose",
        imageUrl: "images/335Zangoose.png",
        number: "335",
        type: ["Normal"],
        category: "Cat Ferret",
        region: "Hoenn",
        height: "4'03\"",
        weight: "88.8 lbs."
    },
    {
        name: "Seviper",
        imageUrl: "images/336Seviper.png",
        number: "336",
        type: ["Poison"],
        category: "Fang Snake",
        region: "Hoenn",
        height: "8'10\"",
        weight: "115.7 lbs."
    },
    {
        name: "Lunatone",
        imageUrl: "images/337Lunatone.png",
        number: "337",
        type: ["Rock", "Psychic"],
        category: "Meteorite",
        region: "Hoenn",
        height: "3'03\"",
        weight: "370.4 lbs."
    },
    {
        name: "Solrock",
        imageUrl: "images/338Solrock.png",
        number: "338",
        type: ["Rock", "Psychic"],
        category: "Meteorite",
        region: "Hoenn",
        height: "3'11\"",
        weight: "339.5 lbs."
    },
    {
        name: "Barboach",
        imageUrl: "images/339Barboach.png",
        number: "339",
        type: ["Water", "Ground"],
        category: "Whiskers",
        region: "Hoenn",
        height: "1'04\"",
        weight: "4.2 lbs."
    },
    {
        name: "Whiscash",
        imageUrl: "images/340Whiscash.png",
        number: "340",
        type: ["Water", "Ground"],
        category: "Whiskers",
        region: "Hoenn",
        height: "2'11\"",
        weight: "52.0 lbs."
    },
    {
        name: "Corphish",
        imageUrl: "images/341Corphish.png",
        number: "341",
        type: ["Water"],
        category: "Ruffian",
        region: "Hoenn",
        height: "2'00\"",
        weight: "25.4 lbs."
    },
    {
        name: "Crawdaunt",
        imageUrl: "images/342Crawdaunt.png",
        number: "342",
        type: ["Water", "Dark"],
        category: "Rogue",
        region: "Hoenn",
        height: "3'07\"",
        weight: "72.3 lbs."
    },
    {
        name: "Baltoy",
        imageUrl: "images/343Baltoy.png",
        number: "343",
        type: ["Ground", "Psychic"],
        category: "Clay Doll",
        region: "Hoenn",
        height: "1'08\"",
        weight: "47.4 lbs."
    },
    {
        name: "Claydol",
        imageUrl: "images/344Claydol.png",
        number: "344",
        type: ["Ground", "Psychic"],
        category: "Clay Doll",
        region: "Hoenn",
        height: "4'11\"",
        weight: "238.0 lbs."
    },
    {
        name: "Lileep",
        imageUrl: "images/345Lileep.png",
        number: "345",
        type: ["Rock", "Grass"],
        category: "Sea Lily",
        region: "Hoenn",
        height: "3'03\"",
        weight: "52.5 lbs."
    },
    {
        name: "Cradily",
        imageUrl: "images/346Cradily.png",
        number: "346",
        type: ["Rock", "Grass"],
        category: "Barnacle",
        region: "Hoenn",
        height: "4'11\"",
        weight: "133.2 lbs."
    },
    {
        name: "Anorith",
        imageUrl: "images/347Anorith.png",
        number: "347",
        type: ["Rock", "Bug"],
        category: "Old Shrimp",
        region: "Hoenn",
        height: "2'04\"",
        weight: "27.6 lbs."
    },
    {
        name: "Armaldo",
        imageUrl: "images/348Armaldo.png",
        number: "348",
        type: ["Rock", "Bug"],
        category: "Plate",
        region: "Hoenn",
        height: "4'11\"",
        weight: "150.4 lbs."
    },
    {
        name: "Feebas",
        imageUrl: "images/349Feebas.png",
        number: "349",
        type: ["Water"],
        category: "Fish",
        region: "Hoenn",
        height: "2'00\"",
        weight: "16.3 lbs."
    },
    {
        name: "Milotic",
        imageUrl: "images/350Milotic.png",
        number: "350",
        type: ["Water"],
        category: "Tender",
        region: "Hoenn",
        height: "20'04\"",
        weight: "357.1 lbs."
    },
    {
        name: "Castform",
        imageUrl: "images/351Castform.png",
        number: "351",
        type: ["Normal"],
        category: "Weather",
        region: "Hoenn",
        height: "1'00\"",
        weight: "1.8 lbs."
    },
    {
        name: "Castform (Sunny Form)",
        imageUrl: "forms/351Castform-Sunny.png",
        number: "351",
        type: ["Fire"],
        category: "Weather",
        region: "Hoenn",
        height: "1'00\"",
        weight: "1.8 lbs."
    },
    {
        name: "Castform (Rainy Form)",
        imageUrl: "forms/351Castform-Rainy.png",
        number: "351",
        type: ["Water"],
        category: "Weather",
        region: "Hoenn",
        height: "1'00\"",
        weight: "1.8 lbs."
    },
    {
        name: "Castform (Snowy Form)",
        imageUrl: "forms/351Castform-Snowy.png",
        number: "351",
        type: ["Ice"],
        category: "Weather",
        region: "Hoenn",
        height: "1'00\"",
        weight: "1.8 lbs."
    },
    {
        name: "Kecleon",
        imageUrl: "images/352Kecleon.png",
        number: "352",
        type: ["Normal"],
        category: "Color Swap",
        region: "Hoenn",
        height: "3'03\"",
        weight: "48.5 lbs."
    },
    {
        name: "Shuppet",
        imageUrl: "images/353Shuppet.png",
        number: "353",
        type: ["Ghost"],
        category: "Puppet",
        region: "Hoenn",
        height: "2'00\"",
        weight: "5.1 lbs."
    },
    {
        name: "Banette",
        imageUrl: "images/354Banette.png",
        number: "354",
        type: ["Ghost"],
        category: "Marionette",
        region: "Hoenn",
        height: "3'07\"",
        weight: "27.6 lbs."
    },
    {
        name: "Mega Banette",
        imageUrl: "forms/354Banette-Mega.png",
        number: "354",
        type: ["Ghost"],
        category: "Marionette",
        region: "Hoenn",
        height: "3'11\"",
        weight: "28.7 lbs."
    },
    {
        name: "Duskull",
        imageUrl: "images/355Duskull.png",
        number: "355",
        type: ["Ghost"],
        category: "Requiem",
        region: "Hoenn",
        height: "2'07\"",
        weight: "33.1 lbs."
    },
    {
        name: "Dusclops",
        imageUrl: "images/356Dusclops.png",
        number: "356",
        type: ["Ghost"],
        category: "Beckon",
        region: "Hoenn",
        height: "5'03\"",
        weight: "67.5 lbs."
    },
    {
        name: "Tropius",
        imageUrl: "images/357Tropius.png",
        number: "357",
        type: ["Grass", "Flying"],
        category: "Fruit",
        region: "Hoenn",
        height: "6'07\"",
        weight: "220.5 lbs."
    },
    {
        name: "Chimecho",
        imageUrl: "images/358Chimecho.png",
        number: "358",
        type: ["Psychic"],
        category: "Wind Chime",
        region: "Hoenn",
        height: "2'00\"",
        weight: "2.2 lbs."
    },
    {
        name: "Absol",
        imageUrl: "images/359Absol.png",
        number: "359",
        type: ["Dark"],
        category: "Disaster",
        region: "Hoenn",
        height: "3'11\"",
        weight: "103.6 lbs."
    },
    {
        name: "Mega Absol",
        imageUrl: "forms/359Absol-Mega.png",
        number: "359",
        type: ["Dark"],
        category: "Disaster",
        region: "Hoenn",
        height: "3'11\"",
        weight: "108.0 lbs."
    },
    {
        name: "Wynaut",
        imageUrl: "images/360Wynaut.png",
        number: "360",
        type: ["Psychic"],
        category: "Bright",
        region: "Hoenn",
        height: "2'00\"",
        weight: "30.9 lbs."
    },
    {
        name: "Snorunt",
        imageUrl: "images/361Snorunt.png",
        number: "361",
        type: ["Ice"],
        category: "Snow Hat",
        region: "Hoenn",
        height: "2'04\"",
        weight: "37.0 lbs."
    },
    {
        name: "Glalie",
        imageUrl: "images/362Glalie.png",
        number: "362",
        type: ["Ice"],
        category: "Face",
        region: "Hoenn",
        height: "4'11\"",
        weight: "565.5 lbs."
    },
    {
        name: "Mega Glalie",
        imageUrl: "forms/362Glalie-Mega.png",
        number: "362",
        type: ["Ice"],
        category: "Face",
        region: "Hoenn",
        height: "6'11\"",
        weight: "772.1 lbs."
    },
    {
        name: "Spheal",
        imageUrl: "images/363Spheal.png",
        number: "363",
        type: ["Ice", "Water"],
        category: "Clap",
        region: "Hoenn",
        height: "2'07\"",
        weight: "87.1 lbs."
    },
    {
        name: "Sealeo",
        imageUrl: "images/364Sealeo.png",
        number: "364",
        type: ["Ice", "Water"],
        category: "Ball Roll",
        region: "Hoenn",
        height: "3'07\"",
        weight: "193.1 lbs."
    },
    {
        name: "Walrein",
        imageUrl: "images/365Walrein.png",
        number: "365",
        type: ["Ice", "Water"],
        category: "Ice Break",
        region: "Hoenn",
        height: "4'07\"",
        weight: "332.0 lbs."
    },
    {
        name: "Clamperl",
        imageUrl: "images/366Clamperl.png",
        number: "366",
        type: ["Water"],
        category: "Bivalve",
        region: "Hoenn",
        height: "1'04\"",
        weight: "115.7 lbs."
    },
    {
        name: "Huntail",
        imageUrl: "images/367Huntail.png",
        number: "367",
        type: ["Water"],
        category: "Deep Sea",
        region: "Hoenn",
        height: "5'07\"",
        weight: "59.5 lbs."
    },
    {
        name: "Gorebyss",
        imageUrl: "images/368Gorebyss.png",
        number: "368",
        type: ["Water"],
        category: "South Sea",
        region: "Hoenn",
        height: "5'11\"",
        weight: "49.8 lbs."
    },
    {
        name: "Relicanth",
        imageUrl: "images/369Relicanth.png",
        number: "369",
        type: ["Water", "Rock"],
        category: "Longevity",
        region: "Hoenn",
        height: "3'03\"",
        weight: "51.6 lbs."
    },
    {
        name: "Luvdisc",
        imageUrl: "images/370Luvdisc.png",
        number: "370",
        type: ["Water"],
        category: "Rendezvous",
        region: "Hoenn",
        height: "2'00\"",
        weight: "19.2 lbs."
    },
    {
        name: "Bagon",
        imageUrl: "images/371Bagon.png",
        number: "371",
        type: ["Dragon"],
        category: "Rock Head",
        region: "Hoenn",
        height: "2'00\"",
        weight: "92.8 lbs."
    },
    {
        name: "Shelgon",
        imageUrl: "images/372Shelgon.png",
        number: "372",
        type: ["Dragon"],
        category: "Endurance",
        region: "Hoenn",
        height: "3'07\"",
        weight: "243.6 lbs."
    },
    {
        name: "Salamence",
        imageUrl: "images/373Salamence.png",
        number: "373",
        type: ["Dragon", "Flying"],
        category: "Dragon",
        region: "Hoenn",
        height: "4'11\"",
        weight: "226.2 lbs."
    },
    {
        name: "Mega Salamence",
        imageUrl: "forms/373Salamence-Mega.png",
        number: "373",
        type: ["Dragon", "Flying"],
        category: "Dragon",
        region: "Hoenn",
        height: "5'11\"",
        weight: "248.2 lbs."
    },
    {
        name: "Beldum",
        imageUrl: "images/374Beldum.png",
        number: "374",
        type: ["Steel", "Psychic"],
        category: "Iron Ball",
        region: "Hoenn",
        height: "2'00\"",
        weight: "209.9 lbs."
    },
    {
        name: "Metang",
        imageUrl: "images/375Metang.png",
        number: "375",
        type: ["Steel", "Psychic"],
        category: "Iron Claw",
        region: "Hoenn",
        height: "3'11\"",
        weight: "446.4 lbs."
    },
    {
        name: "Metagross",
        imageUrl: "images/376Metagross.png",
        number: "376",
        type: ["Steel", "Psychic"],
        category: "Iron Leg",
        region: "Hoenn",
        height: "5'03\"",
        weight: "1212.5 lbs."
    },
    {
        name: "Mega Metagross",
        imageUrl: "forms/376Metagross-Mega.png",
        number: "376",
        type: ["Steel", "Psychic"],
        category: "Iron Leg",
        region: "Hoenn",
        height: "8'02\"",
        weight: "2078.7 lbs."
    },
    {
        name: "Regirock",
        imageUrl: "images/377Regirock.png",
        number: "377",
        type: ["Rock"],
        category: "Rock Peak",
        region: "Hoenn",
        height: "5'07\"",
        weight: "507.1 lbs."
    },
    {
        name: "Regice",
        imageUrl: "images/378Regice.png",
        number: "378",
        type: ["Ice"],
        category: "Iceberg",
        region: "Hoenn",
        height: "5'11\"",
        weight: "385.8 lbs."
    },
    {
        name: "Registeel",
        imageUrl: "images/379Registeel.png",
        number: "379",
        type: ["Steel"],
        category: "Iron",
        region: "Hoenn",
        height: "6'03\"",
        weight: "451.9 lbs."
    },
    {
        name: "Latias",
        imageUrl: "images/380Latias.png",
        number: "380",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn",
        height: "4'07\"",
        weight: "88.2 lbs."
    },
    {
        name: "Mega Latias",
        imageUrl: "forms/380Latias-Mega.png",
        number: "380",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn",
        height: "5'11\"",
        weight: "114.6 lbs."
    },
    {
        name: "Latios",
        imageUrl: "images/381Latios.png",
        number: "381",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn",
        height: "6'07\"",
        weight: "132.3 lbs."
    },
    {
        name: "Mega Latios",
        imageUrl: "forms/381Latios-Mega.png",
        number: "381",
        type: ["Dragon", "Psychic"],
        category: "Eon",
        region: "Hoenn",
        height: "7'07\"",
        weight: "154.3 lbs."
    },
    {
        name: "Kyogre",
        imageUrl: "images/382Kyogre.png",
        number: "382",
        type: ["Water"],
        category: "Sea Basin",
        region: "Hoenn",
        height: "14'09\"",
        weight: "776.0 lbs."
    },
    {
        name: "Primal Kyogre",
        imageUrl: "forms/382Kyogre-Primal.png",
        number: "382",
        type: ["Water"],
        category: "Sea Basin",
        region: "Hoenn",
        height: "32'02\"",
        weight: "948.0 lbs."
    },
    {
        name: "Groudon",
        imageUrl: "images/383Groudon.png",
        number: "383",
        type: ["Ground"],
        category: "Continent",
        region: "Hoenn",
        height: "11'06\"",
        weight: "2094.4 lbs."
    },
    {
        name: "Primal Groudon",
        imageUrl: "forms/383Groudon-Primal.png",
        number: "383",
        type: ["Ground", "Fire"],
        category: "Continent",
        region: "Hoenn",
        height: "16'05\"",
        weight: "2204.0 lbs."
    },
    {
        name: "Rayquaza",
        imageUrl: "images/384Rayquaza.png",
        number: "384",
        type: ["Dragon", "Flying"],
        category: "Sky High",
        region: "Hoenn",
        height: "23'00\"",
        weight: "455.3 lbs."
    },
    {
        name: "Mega Rayquaza",
        imageUrl: "forms/384Rayquaza-Mega.png",
        number: "384",
        type: ["Dragon", "Flying"],
        category: "Sky High",
        region: "Hoenn",
        height: "35'05\"",
        weight: "864.2 lbs."
    },
    {
        name: "Jirachi",
        imageUrl: "images/385Jirachi.png",
        number: "385",
        type: ["Steel", "Psychic"],
        category: "Wish",
        region: "Hoenn",
        height: "1'00\"",
        weight: "2.4 lbs."
    },
    {
        name: "Deoxys",
        imageUrl: "images/386Deoxys.png",
        number: "386",
        type: ["Psychic"],
        category: "DNA",
        region: "Hoenn",
        height: "5'07\"",
        weight: "134.0 lbs."
    },
    {
        name: "Deoxys (Attack Forme)",
        imageUrl: "forms/386Deoxys-Attack.png",
        number: "386",
        type: ["Psychic"],
        category: "DNA",
        region: "Hoenn",
        height: "5'07\"",
        weight: "134.0 lbs."
    },
    {
        name: "Deoxys (Defense Forme)",
        imageUrl: "forms/386Deoxys-Defense.png",
        number: "386",
        type: ["Psychic"],
        category: "DNA",
        region: "Hoenn",
        height: "5'07\"",
        weight: "134.0 lbs."
    },
    {
        name: "Deoxys (Speed Forme)",
        imageUrl: "forms/386Deoxys-Speed.png",
        number: "386",
        type: ["Psychic"],
        category: "DNA",
        region: "Hoenn",
        height: "5'07\"",
        weight: "134.0 lbs."
    },
    {
        name: "Turtwig",
        imageUrl: "images/387Turtwig.png",
        number: "387",
        type: ["Grass"],
        category: "Tiny Leaf",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "22.5 lbs."
    },
    {
        name: "Grotle",
        imageUrl: "images/388Grotle.png",
        number: "388",
        type: ["Grass"],
        category: "Grove",
        region: "Sinnoh",
        height: "3'07\"",
        weight: "213.8 lbs."
    },
    {
        name: "Torterra",
        imageUrl: "images/389Torterra.png",
        number: "389",
        type: ["Grass", "Ground"],
        category: "Continent",
        region: "Sinnoh",
        height: "7'03\"",
        weight: "683.4 lbs."
    },
    {
        name: "Chimchar",
        imageUrl: "images/390Chimchar.png",
        number: "390",
        type: ["Fire"],
        category: "Chimp",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "13.7 lbs."
    },
    {
        name: "Monferno",
        imageUrl: "images/391Monferno.png",
        number: "391",
        type: ["Fire", "Fighting"],
        category: "Playful",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "48.5 lbs."
    },
    {
        name: "Infernape",
        imageUrl: "images/392Infernape.png",
        number: "392",
        type: ["Fire", "Fighting"],
        category: "Flame",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "121.3 lbs."
    },
    {
        name: "Piplup",
        imageUrl: "images/393Piplup.png",
        number: "393",
        type: ["Water"],
        category: "Penguin",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "11.5 lbs."
    },
    {
        name: "Prinplup",
        imageUrl: "images/394Prinplup.png",
        number: "394",
        type: ["Water"],
        category: "Penguin",
        region: "Sinnoh",
        height: "2'07\"",
        weight: "50.7 lbs."
    },
    {
        name: "Empoleon",
        imageUrl: "images/395Empoleon.png",
        number: "395",
        type: ["Water", "Steel"],
        category: "Emperor",
        region: "Sinnoh",
        height: "5'07\"",
        weight: "186.3 lbs."
    },
    {
        name: "Starly",
        imageUrl: "images/396Starly.png",
        number: "396",
        type: ["Normal", "Flying"],
        category: "Starling",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "4.4 lbs."
    },
    {
        name: "Staravia",
        imageUrl: "images/397Staravia.png",
        number: "397",
        type: ["Normal", "Flying"],
        category: "Starling",
        region: "Sinnoh",
        height: "2'00\"",
        weight: "34.2 lbs."
    },
    {
        name: "Staraptor",
        imageUrl: "images/398Staraptor.png",
        number: "398",
        type: ["Normal", "Flying"],
        category: "Predator",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "54.9 lbs."
    },
    {
        name: "Bidoof",
        imageUrl: "images/399Bidoof.png",
        number: "399",
        type: ["Normal"],
        category: "Plump Mouse",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "44.1 lbs."
    },
    {
        name: "Bibarel",
        imageUrl: "images/400Bibarel.png",
        number: "400",
        type: ["Normal", "Water"],
        category: "Beaver",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "69.4 lbs."
    },
    {
        name: "Kricketot",
        imageUrl: "images/401Kricketot.png",
        number: "401",
        type: ["Bug"],
        category: "Cricket",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "4.9 lbs."
    },
    {
        name: "Kricketune",
        imageUrl: "images/402Kricketune.png",
        number: "402",
        type: ["Bug"],
        category: "Cricket",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "56.2 lbs."
    },
    {
        name: "Shinx",
        imageUrl: "images/403Shinx.png",
        number: "403",
        type: ["Electric"],
        category: "Flash",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "20.9 lbs."
    },
    {
        name: "Luxio",
        imageUrl: "images/404Luxio.png",
        number: "404",
        type: ["Electric"],
        category: "Spark",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "67.2 lbs."
    },
    {
        name: "Luxray",
        imageUrl: "images/405Luxray.png",
        number: "405",
        type: ["Electric"],
        category: "Gleam Eyes",
        region: "Sinnoh",
        height: "4'07\"",
        weight: "92.6 lbs."
    },
    {
        name: "Budew",
        imageUrl: "images/406Budew.png",
        number: "406",
        type: ["Grass", "Poison"],
        category: "Bud",
        region: "Sinnoh",
        height: "0'08\"",
        weight: "2.6 lbs."
    },
    {
        name: "Roserade",
        imageUrl: "images/407Roserade.png",
        number: "407",
        type: ["Grass", "Poison"],
        category: "Bouquet",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "32.0 lbs."
    },
    {
        name: "Cranidos",
        imageUrl: "images/408Cranidos.png",
        number: "408",
        type: ["Rock"],
        category: "Head Butt",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "69.4 lbs."
    },
    {
        name: "Rampardos",
        imageUrl: "images/409Rampardos.png",
        number: "409",
        type: ["Rock"],
        category: "Head Butt",
        region: "Sinnoh",
        height: "5'03\"",
        weight: "226.0 lbs."
    },
    {
        name: "Shieldon",
        imageUrl: "images/410Shieldon.png",
        number: "410",
        type: ["Rock", "Steel"],
        category: "Shield",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "125.7 lbs."
    },
    {
        name: "Bastiodon",
        imageUrl: "images/411Bastiodon.png",
        number: "411",
        type: ["Rock", "Steel"],
        category: "Shield",
        region: "Sinnoh",
        height: "4'03\"",
        weight: "329.6 lbs."
    },
    {
        name: "Burmy (Plant Cloak)",
        imageUrl: "images/412Burmy.png",
        number: "412",
        type: ["Bug"],
        category: "Bagworm",
        region: "Sinnoh",
        height: "0'08\"",
        weight: "7.5 lbs."
    },
    {
        name: "Burmy (Sandy Cloak)",
        imageUrl: "forms/412Burmy-Sandy.png",
        number: "412",
        type: ["Bug"],
        category: "Bagworm",
        region: "Sinnoh",
        height: "0'08\"",
        weight: "7.5 lbs."
    },
    {
        name: "Burmy (Trash Cloak)",
        imageUrl: "forms/412Burmy-Trash.png",
        number: "412",
        type: ["Bug"],
        category: "Bagworm",
        region: "Sinnoh",
        height: "0'08\"",
        weight: "7.5 lbs."
    },
    {
        name: "Wormadam (Plant Cloak)",
        imageUrl: "images/413Wormadam.png",
        number: "413",
        type: ["Bug", "Grass"],
        category: "Bagworm",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "14.3 lbs."
    },
    {
        name: "Wormadam (Sandy Cloak)",
        imageUrl: "forms/413Wormadam-Sandy.png",
        number: "413",
        type: ["Bug", "Ground"],
        category: "Bagworm",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "14.3 lbs."
    },
    {
        name: "Wormadam (Trash Cloak)",
        imageUrl: "forms/413Wormadam-Trash.png",
        number: "413",
        type: ["Bug", "Steel"],
        category: "Bagworm",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "14.3 lbs."
    },
    {
        name: "Mothim",
        imageUrl: "images/414Mothim.png",
        number: "414",
        type: ["Bug", "Flying"],
        category: "Moth",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "51.4 lbs."
    },
    {
        name: "Combee",
        imageUrl: "images/415Combee.png",
        number: "415",
        type: ["Bug", "Flying"],
        category: "Tiny Bee",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "12.1 lbs."
    },
    {
        name: "Vespiquen",
        imageUrl: "images/416Vespiquen.png",
        number: "416",
        type: ["Bug", "Flying"],
        category: "Beehive",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "84.9 lbs."
    },
    {
        name: "Pachirisu",
        imageUrl: "images/417Pachirisu.png",
        number: "417",
        type: ["Electric"],
        category: "EleSquirrel",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "8.6 lbs."
    },
    {
        name: "Buizel",
        imageUrl: "images/418Buizel.png",
        number: "418",
        type: ["Water"],
        category: "Sea Weasel",
        region: "Sinnoh",
        height: "2'04\"",
        weight: "65.0 lbs."
    },
    {
        name: "Floatzel",
        imageUrl: "images/419Floatzel.png",
        number: "419",
        type: ["Water"],
        category: "Sea Weasel",
        region: "Sinnoh",
        height: "3'07\"",
        weight: "73.9 lbs."
    },
    {
        name: "Cherubi",
        imageUrl: "images/420Cherubi.png",
        number: "420",
        type: ["Grass"],
        category: "Cherry",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "7.3 lbs."
    },
    {
        name: "Cherrim (Overcast Form)",
        imageUrl: "images/421Cherrim.png",
        number: "421",
        type: ["Grass"],
        category: "Blossom",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "20.5 lbs."
    },
    {
        name: "Cherrim (Sunshine Form)",
        imageUrl: "forms/421Cherrim-Sunny.png",
        number: "421",
        type: ["Grass"],
        category: "Blossom",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "20.5 lbs."
    },
    {
        name: "Shellos (East Sea)",
        imageUrl: "images/422Shellos.png",
        number: "422",
        type: ["Water"],
        category: "Sea Slug",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "13.9 lbs."
    },
    {
        name: "Shellos (West Sea)",
        imageUrl: "forms/422Shellos-West.png",
        number: "422",
        type: ["Water"],
        category: "Sea Slug",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "13.9 lbs."
    },
    {
        name: "Gastrodon (East Sea)",
        imageUrl: "images/423Gastrodon.png",
        number: "423",
        type: ["Water", "Ground"],
        category: "Sea Slug",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "65.9 lbs."
    },
    {
        name: "Gastrodon (West Sea)",
        imageUrl: "forms/423Gastrodon-West.png",
        number: "423",
        type: ["Water", "Ground"],
        category: "Sea Slug",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "65.9 lbs."
    },
    {
        name: "Ambipom",
        imageUrl: "images/424Ambipom.png",
        number: "424",
        type: ["Normal"],
        category: "Long Tail",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "44.8 lbs."
    },
    {
        name: "Drifloon",
        imageUrl: "images/425Drifloon.png",
        number: "425",
        type: ["Ghost", "Flying"],
        category: "Balloon",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "2.6 lbs."
    },
    {
        name: "Drifblim",
        imageUrl: "images/426Drifblim.png",
        number: "426",
        type: ["Ghost", "Flying"],
        category: "Blimp",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "33.1 lbs."
    },
    {
        name: "Buneary",
        imageUrl: "images/427Buneary.png",
        number: "427",
        type: ["Normal"],
        category: "Rabbit",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "12.1 lbs."
    },
    {
        name: "Lopunny",
        imageUrl: "images/428Lopunny.png",
        number: "428",
        type: ["Normal"],
        category: "Rabbit",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "73.4 lbs."
    },
    {
        name: "Mega Lopunny",
        imageUrl: "forms/428Lopunny-Mega.png",
        number: "428",
        type: ["Normal", "Fighting"],
        category: "Rabbit",
        region: "Sinnoh",
        height: "4'03\"",
        weight: "62.4 lbs."
    },
    {
        name: "Mismagius",
        imageUrl: "images/429Mismagius.png",
        number: "429",
        type: ["Ghost"],
        category: "Magical",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "9.7 lbs."
    },
    {
        name: "Honchkrow",
        imageUrl: "images/430Honchkrow.png",
        number: "430",
        type: ["Dark", "Flying"],
        category: "Big Boss",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "60.2 lbs."
    },
    {
        name: "Glameow",
        imageUrl: "images/431Glameow.png",
        number: "431",
        type: ["Normal"],
        category: "Catty",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "8.6 lbs."
    },
    {
        name: "Purugly",
        imageUrl: "images/432Purugly.png",
        number: "432",
        type: ["Normal"],
        category: "Tiger Cat",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "96.6 lbs."
    },
    {
        name: "Chingling",
        imageUrl: "images/433Chingling.png",
        number: "433",
        type: ["Psychic"],
        category: "Bell",
        region: "Sinnoh",
        height: "0'08\"",
        weight: "1.3 lbs."
    },
    {
        name: "Stunky",
        imageUrl: "images/434Stunky.png",
        number: "434",
        type: ["Poison", "Dark"],
        category: "Skunk",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "42.3 lbs."
    },
    {
        name: "Skuntank",
        imageUrl: "images/435Skuntank.png",
        number: "435",
        type: ["Poison", "Dark"],
        category: "Skunk",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "83.8 lbs."
    },
    {
        name: "Bronzor",
        imageUrl: "images/436Bronzor.png",
        number: "436",
        type: ["Steel", "Psychic"],
        category: "Bronze",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "133.4 lbs."
    },
    {
        name: "Bronzong",
        imageUrl: "images/437Bronzong.png",
        number: "437",
        type: ["Steel", "Psychic"],
        category: "Bronze Bell",
        region: "Sinnoh",
        height: "4'03\"",
        weight: "412.3 lbs."
    },
    {
        name: "Bonsly",
        imageUrl: "images/438Bonsly.png",
        number: "438",
        type: ["Rock"],
        category: "Bonsai",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "33.1 lbs."
    },
    {
        name: "Mime Jr.",
        imageUrl: "images/439Mime_Jr.png",
        number: "439",
        type: ["Psychic", "Fairy"],
        category: "Mime",
        region: "Sinnoh",
        height: "2'00\"",
        weight: "28.7 lbs."
    },
    {
        name: "Happiny",
        imageUrl: "images/440Happiny.png",
        number: "440",
        type: ["Normal"],
        category: "Playhouse",
        region: "Sinnoh",
        height: "2'00\"",
        weight: "53.8 lbs."
    },
    {
        name: "Chatot",
        imageUrl: "images/441Chatot.png",
        number: "441",
        type: ["Normal", "Flying"],
        category: "Music Note",
        region: "Sinnoh",
        height: "1'08\"",
        weight: "4.2 lbs."
    },
    {
        name: "Spiritomb",
        imageUrl: "images/442Spiritomb.png",
        number: "442",
        type: ["Ghost", "Dark"],
        category: "Forbidden",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "238.1 lbs."
    },
    {
        name: "Gible",
        imageUrl: "images/443Gible.png",
        number: "443",
        type: ["Dragon", "Ground"],
        category: "Land Shark",
        region: "Sinnoh",
        height: "2'04\"",
        weight: "45.2 lbs."
    },
    {
        name: "Gabite",
        imageUrl: "images/444Gabite.png",
        number: "444",
        type: ["Dragon", "Ground"],
        category: "Cave",
        region: "Sinnoh",
        height: "4'07\"",
        weight: "123.5 lbs."
    },
    {
        name: "Garchomp",
        imageUrl: "images/445Garchomp.png",
        number: "445",
        type: ["Dragon", "Ground"],
        category: "Mach",
        region: "Sinnoh",
        height: "6'03\"",
        weight: "209.4 lbs."
    },
    {
        name: "Mega Garchomp",
        imageUrl: "forms/445Garchomp-Mega.png",
        number: "445",
        type: ["Dragon", "Ground"],
        category: "Mach",
        region: "Sinnoh",
        height: "6'03\"",
        weight: "209.4 lbs."
    },
    {
        name: "Munchlax",
        imageUrl: "images/446Munchlax.png",
        number: "446",
        type: ["Normal"],
        category: "Big Eater",
        region: "Sinnoh",
        height: "2'00\"",
        weight: "231.5 lbs."
    },
    {
        name: "Riolu",
        imageUrl: "images/447Riolu.png",
        number: "447",
        type: ["Fighting"],
        category: "Emanation",
        region: "Sinnoh",
        height: "2'04\"",
        weight: "44.5 lbs."
    },
    {
        name: "Lucario",
        imageUrl: "images/448Lucario.png",
        number: "448",
        type: ["Fighting", "Steel"],
        category: "Aura",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "119.0 lbs."
    },
    {
        name: "Mega Lucario",
        imageUrl: "forms/448Lucario-Mega.png",
        number: "448",
        type: ["Fighting", "Steel"],
        category: "Aura",
        region: "Sinnoh",
        height: "4'09\"",
        weight: "126.8 lbs."
    },
    {
        name: "Hippopotas",
        imageUrl: "images/449Hippopotas.png",
        number: "449",
        type: ["Ground"],
        category: "Hippo",
        region: "Sinnoh",
        height: "2'07\"",
        weight: "109.1 lbs."
    },
    {
        name: "Hippowdon",
        imageUrl: "images/450Hippowdon.png",
        number: "450",
        type: ["Ground"],
        category: "Heavyweight",
        region: "Sinnoh",
        height: "6'07\"",
        weight: "661.4 lbs."
    },
    {
        name: "Skorupi",
        imageUrl: "images/451Skorupi.png",
        number: "451",
        type: ["Poison", "Bug"],
        category: "Scorpion",
        region: "Sinnoh",
        height: "2'07\"",
        weight: "26.5 lbs."
    },
    {
        name: "Drapion",
        imageUrl: "images/452Drapion.png",
        number: "452",
        type: ["Poison", "Dark"],
        category: "Ogre Scorpion",
        region: "Sinnoh",
        height: "4'03\"",
        weight: "135.6 lbs."
    },
    {
        name: "Croagunk",
        imageUrl: "images/453Croagunk.png",
        number: "453",
        type: ["Poison", "Fighting"],
        category: "Toxic Mouth",
        region: "Sinnoh",
        height: "2'04\"",
        weight: "50.7 lbs."
    },
    {
        name: "Toxicroak",
        imageUrl: "images/454Toxicroak.png",
        number: "454",
        type: ["Poison", "Fighting"],
        category: "Toxic Mouth",
        region: "Sinnoh",
        height: "4'03\"",
        weight: "97.9 lbs."
    },
    {
        name: "Carnivine",
        imageUrl: "images/455Carnivine.png",
        number: "455",
        type: ["Grass"],
        category: "Bug Catcher",
        region: "Sinnoh",
        height: "4'07\"",
        weight: "59.5 lbs."
    },
    {
        name: "Finneon",
        imageUrl: "images/456Finneon.png",
        number: "456",
        type: ["Water"],
        category: "Wing Fish",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "15.4 lbs."
    },
    {
        name: "Lumineon",
        imageUrl: "images/457Lumineon.png",
        number: "457",
        type: ["Water"],
        category: "Neon",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "52.9 lbs."
    },
    {
        name: "Mantyke",
        imageUrl: "images/458Mantyke.png",
        number: "458",
        type: ["Water", "Flying"],
        category: "Kite",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "143.3 lbs."
    },
    {
        name: "Snover",
        imageUrl: "images/459Snover.png",
        number: "459",
        type: ["Grass", "Ice"],
        category: "Frost Tree",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "111.3 lbs."
    },
    {
        name: "Abomasnow",
        imageUrl: "images/460Abomasnow.png",
        number: "460",
        type: ["Grass", "Ice"],
        category: "Frost Tree",
        region: "Sinnoh",
        height: "7'03\"",
        weight: "298.7 lbs."
    },
    {
        name: "Mega Abomasnow",
        imageUrl: "forms/460Abomasnow-Mega.png",
        number: "460",
        type: ["Grass", "Ice"],
        category: "Frost Tree",
        region: "Sinnoh",
        height: "8'10\"",
        weight: "407.9 lbs."
    },
    {
        name: "Weavile",
        imageUrl: "images/461Weavile.png",
        number: "461",
        type: ["Dark", "Ice"],
        category: "Sharp Claw",
        region: "Sinnoh",
        height: "3'07\"",
        weight: "75.0 lbs."
    },
    {
        name: "Magnezone",
        imageUrl: "images/462Magnezone.png",
        number: "462",
        type: ["Electric", "Steel"],
        category: "Magnet Area",
        region: "Sinnoh",
        height: "3'11\"",
        weight: "396.8 lbs."
    },
    {
        name: "Lickilicky",
        imageUrl: "images/463Lickilicky.png",
        number: "463",
        type: ["Normal"],
        category: "Licking",
        region: "Sinnoh",
        height: "5'07\"",
        weight: "308.6 lbs."
    },
    {
        name: "Rhyperior",
        imageUrl: "images/464Rhyperior.png",
        number: "464",
        type: ["Ground", "Rock"],
        category: "Drill",
        region: "Sinnoh",
        height: "7'10\"",
        weight: "623.5 lbs."
    },
    {
        name: "Tangrowth",
        imageUrl: "images/465Tangrowth.png",
        number: "465",
        type: ["Grass"],
        category: "Vine",
        region: "Sinnoh",
        height: "6'07\"",
        weight: "283.5 lbs."
    },
    {
        name: "Electivire",
        imageUrl: "images/466Electivire.png",
        number: "466",
        type: ["Electric"],
        category: "Thunderbolt",
        region: "Sinnoh",
        height: "5'11\"",
        weight: "305.6 lbs."
    },
    {
        name: "Magmortar",
        imageUrl: "images/467Magmortar.png",
        number: "467",
        type: ["Fire"],
        category: "Blast",
        region: "Sinnoh",
        height: "5'03\"",
        weight: "149.9 lbs."
    },
    {
        name: "Togekiss",
        imageUrl: "images/468Togekiss.png",
        number: "468",
        type: ["Fairy", "Flying"],
        category: "Jubilee",
        region: "Sinnoh",
        height: "4'11\"",
        weight: "83.8 lbs."
    },
    {
        name: "Yanmega",
        imageUrl: "images/469Yanmega.png",
        number: "469",
        type: ["Bug", "Flying"],
        category: "Ogre Darner",
        region: "Sinnoh",
        height: "6'03\"",
        weight: "113.5 lbs."
    },
    {
        name: "Leafeon",
        imageUrl: "images/470Leafeon.png",
        number: "470",
        type: ["Grass"],
        category: "Verdant",
        region: "Sinnoh",
        height: "3'03\"",
        weight: "56.2 lbs."
    },
    {
        name: "Glaceon",
        imageUrl: "images/471Glaceon.png",
        number: "471",
        type: ["Ice"],
        category: "Fresh Snow",
        region: "Sinnoh",
        height: "2'07\"",
        weight: "57.1 lbs."
    },
    {
        name: "Gliscor",
        imageUrl: "images/472Gliscor.png",
        number: "472",
        type: ["Ground", "Flying"],
        category: "Fang Scorpion",
        region: "Sinnoh",
        height: "6'07\"",
        weight: "93.7 lbs."
    },
    {
        name: "Mamoswine",
        imageUrl: "images/473Mamoswine.png",
        number: "473",
        type: ["Ice", "Ground"],
        category: "Twin Tusk",
        region: "Sinnoh",
        height: "8'02\"",
        weight: "641.5 lbs."
    },
    {
        name: "Porygon-Z",
        imageUrl: "images/474Porygon-Z.png",
        number: "474",
        type: ["Normal"],
        category: "Virtual",
        region: "Sinnoh",
        height: "2'11\"",
        weight: "75.0 lbs."
    },
    {
        name: "Gallade",
        imageUrl: "images/475Gallade.png",
        number: "475",
        type: ["Psychic", "Fighting"],
        category: "Blade",
        region: "Sinnoh",
        height: "5'03\"",
        weight: "114.6 lbs."
    },
    {
        name: "Mega Gallade",
        imageUrl: "forms/475Gallade-Mega.png",
        number: "475",
        type: ["Psychic", "Fighting"],
        category: "Blade",
        region: "Sinnoh",
        height: "5'03\"",
        weight: "124.3 lbs."
    },
    {
        name: "Probopass",
        imageUrl: "images/476Probopass.png",
        number: "476",
        type: ["Rock", "Steel"],
        category: "Compass",
        region: "Sinnoh",
        height: "4'07\"",
        weight: "749.6 lbs."
    },
    {
        name: "Dusknoir",
        imageUrl: "images/477Dusknoir.png",
        number: "477",
        type: ["Ghost"],
        category: "Gripper",
        region: "Sinnoh",
        height: "7'03\"",
        weight: "235.0 lbs."
    },
    {
        name: "Froslass",
        imageUrl: "images/478Froslass.png",
        number: "478",
        type: ["Ice", "Ghost"],
        category: "Snow Land",
        region: "Sinnoh",
        height: "4'03\"",
        weight: "58.6 lbs."
    },
    {
        name: "Rotom",
        imageUrl: "images/479Rotom.png",
        number: "479",
        type: ["Electric", "Ghost"],
        category: "Plasma",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Heat Rotom",
        imageUrl: "forms/479Rotom-Heat.png",
        number: "479",
        type: ["Electric", "Fire"],
        category: "Plasma",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Wash Rotom",
        imageUrl: "forms/479Rotom-Wash.png",
        number: "479",
        type: ["Electric", "Water"],
        category: "Plasma",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Frost Rotom",
        imageUrl: "forms/479Rotom-Frost.png",
        number: "479",
        type: ["Electric", "Ice"],
        category: "Plasma",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Fan Rotom",
        imageUrl: "forms/479Rotom-Fan.png",
        number: "479",
        type: ["Electric", "Flying"],
        category: "Plasma",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Mow Rotom",
        imageUrl: "forms/479Rotom-Mow.png",
        number: "479",
        type: ["Electric", "Grass"],
        category: "Plasma",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Uxie",
        imageUrl: "images/480Uxie.png",
        number: "480",
        type: ["Psychic"],
        category: "Knowledge",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Mesprit",
        imageUrl: "images/481Mesprit.png",
        number: "481",
        type: ["Psychic"],
        category: "Emotion",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Azelf",
        imageUrl: "images/482Azelf.png",
        number: "482",
        type: ["Psychic"],
        category: "Willpower",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Dialga",
        imageUrl: "images/483Dialga.png",
        number: "483",
        type: ["Steel", "Dragon"],
        category: "Temporal",
        region: "Sinnoh",
        height: "17'09\"",
        weight: "1505.8 lbs."
    },
    {
        name: "Dialga (Origin Forme)",
        imageUrl: "forms/483Dialga-Origin.png",
        number: "483",
        type: ["Steel", "Dragon"],
        category: "Temporal",
        region: "Sinnoh",
        height: "23'00\"",
        weight: "1873.9 lbs."
    },
    {
        name: "Palkia",
        imageUrl: "images/484Palkia.png",
        number: "484",
        type: ["Water", "Dragon"],
        category: "Spatial",
        region: "Sinnoh",
        height: "13'09\"",
        weight: "740.8 lbs."
    },
    {
        name: "Palkia (Origin Forme)",
        imageUrl: "forms/484Palkia-Origin.png",
        number: "484",
        type: ["Water", "Dragon"],
        category: "Spatial",
        region: "Sinnoh",
        height: "20'08\"",
        weight: "1455.1 lbs."
    },
    {
        name: "Heatran",
        imageUrl: "images/485Heatran.png",
        number: "485",
        type: ["Fire", "Steel"],
        category: "Lava Dome",
        region: "Sinnoh",
        height: "5'07\"",
        weight: "948.0 lbs."
    },
    {
        name: "Regigigas",
        imageUrl: "images/486Regigigas.png",
        number: "486",
        type: ["Normal"],
        category: "Colossal",
        region: "Sinnoh",
        height: "12'02\"",
        weight: "925.9 lbs."
    },
    {
        name: "Giratina (Altered Forme)",
        imageUrl: "images/487Giratina.png",
        number: "487",
        type: ["Ghost", "Dragon"],
        category: "Renegade",
        region: "Sinnoh",
        height: "14'09\"",
        weight: "1653.5 lbs."
    },
    {
        name: "Giratina (Origin Forme)",
        imageUrl: "forms/487Giratina-Origin.png",
        number: "487",
        type: ["Ghost", "Dragon"],
        category: "Renegade",
        region: "Sinnoh",
        height: "22'08\"",
        weight: "1433.0 lbs."
    },
    {
        name: "Cresselia",
        imageUrl: "images/488Cresselia.png",
        number: "488",
        type: ["Psychic"],
        category: "Lunar",
        region: "Sinnoh",
        height: "4'11\"",
        weight: "188.7 lbs."
    },
    {
        name: "Phione",
        imageUrl: "images/489Phione.png",
        number: "489",
        type: ["Water"],
        category: "Sea Drifter",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "6.8 lbs."
    },
    {
        name: "Manaphy",
        imageUrl: "images/490Manaphy.png",
        number: "490",
        type: ["Water"],
        category: "Seafaring",
        region: "Sinnoh",
        height: "1'00\"",
        weight: "3.1 lbs."
    },
    {
        name: "Darkrai",
        imageUrl: "images/491Darkrai.png",
        number: "491",
        type: ["Dark"],
        category: "Pitch-Black",
        region: "Sinnoh",
        height: "4'11\"",
        weight: "111.3 lbs."
    },
    {
        name: "Shaymin (Land Forme)",
        imageUrl: "images/492Shaymin.png",
        number: "492",
        type: ["Grass"],
        category: "Gratitude",
        region: "Sinnoh",
        height: "0'08\"",
        weight: "4.6 lbs."
    },
    {
        name: "Shaymin (Sky Forme)",
        imageUrl: "forms/492Shaymin-Sky.png",
        number: "492",
        type: ["Grass"],
        category: "Gratitude",
        region: "Sinnoh",
        height: "1'04\"",
        weight: "11.5 lbs."
    },
    {
        name: "Arceus",
        imageUrl: "images/493Arceus.png",
        number: "493",
        type: ["Normal"],
        category: "Alpha",
        region: "Sinnoh",
        height: "10'06\"",
        weight: "705.5 lbs."
    },
    {
        name: "Victini",
        imageUrl: "images/494Victini.png",
        number: "494",
        type: ["Psychic", "Fire"],
        category: "Victory",
        region: "Unova",
        height: "1'04\"",
        weight: "8.8 lbs."
    },
    {
        name: "Snivy",
        imageUrl: "images/495Snivy.png",
        number: "495",
        type: ["Grass"],
        category: "Grass Snake",
        region: "Unova",
        height: "2'00\"",
        weight: "17.9 lbs."
    },
    {
        name: "Servine",
        imageUrl: "images/496Servine.png",
        number: "496",
        type: ["Grass"],
        category: "Grass Snake",
        region: "Unova",
        height: "2'07\"",
        weight: "35.3 lbs."
    },
    {
        name: "Serperior",
        imageUrl: "images/497Serperior.png",
        number: "497",
        type: ["Grass"],
        category: "Regal",
        region: "Unova",
        height: "10'10\"",
        weight: "138.9 lbs."
    },
    {
        name: "Tepig",
        imageUrl: "images/498Tepig.png",
        number: "498",
        type: ["Fire"],
        category: "Fire Pig",
        region: "Unova",
        height: "1'08\"",
        weight: "21.8 lbs."
    },
    {
        name: "Pignite",
        imageUrl: "images/499Pignite.png",
        number: "499",
        type: ["Fire", "Fighting"],
        category: "Fire Pig",
        region: "Unova",
        height: "3'03\"",
        weight: "122.4 lbs."
    },
    {
        name: "Emboar",
        imageUrl: "images/500Emboar.png",
        number: "500",
        type: ["Fire", "Fighting"],
        category: "Mega Fire Pig",
        region: "Unova",
        height: "5'03\"",
        weight: "330.7 lbs."
    },
    {
        name: "Oshawott",
        imageUrl: "images/501Oshawott.png",
        number: "501",
        type: ["Water"],
        category: "Sea Otter",
        region: "Unova",
        height: "1'08\"",
        weight: "13.0 lbs."
    },
    {
        name: "Dewott",
        imageUrl: "images/502Dewott.png",
        number: "502",
        type: ["Water"],
        category: "Discipline",
        region: "Unova",
        height: "2'07\"",
        weight: "54.0 lbs."
    },
    {
        name: "Samurott",
        imageUrl: "images/503Samurott.png",
        number: "503",
        type: ["Water"],
        category: "Formidable",
        region: "Unova",
        height: "4'11\"",
        weight: "208.6 lbs."
    },
    {
        name: "Hisuian Samurott",
        imageUrl: "forms/503Samurott-Hisui.png",
        number: "503",
        type: ["Water", "Dark"],
        category: "Formidable",
        region: "Unova",
        height: "4'11\"",
        weight: "128.3 lbs."
    },
    {
        name: "Patrat",
        imageUrl: "images/504Patrat.png",
        number: "504",
        type: ["Normal"],
        category: "Scout",
        region: "Unova",
        height: "1'08\"",
        weight: "25.6 lbs."
    },
    {
        name: "Watchog",
        imageUrl: "images/505Watchog.png",
        number: "505",
        type: ["Normal"],
        category: "Lookout",
        region: "Unova",
        height: "3'07\"",
        weight: "59.5 lbs."
    },
    {
        name: "Lillipup",
        imageUrl: "images/506Lillipup.png",
        number: "506",
        type: ["Normal"],
        category: "Puppy",
        region: "Unova",
        height: "1'04\"",
        weight: "9.0 lbs."
    },
    {
        name: "Herdier",
        imageUrl: "images/507Herdier.png",
        number: "507",
        type: ["Normal"],
        category: "Loyal Dog",
        region: "Unova",
        height: "2'11\"",
        weight: "32.4 lbs."
    },
    {
        name: "Stoutland",
        imageUrl: "images/508Stoutland.png",
        number: "508",
        type: ["Normal"],
        category: "Big-Hearted",
        region: "Unova",
        height: "3'11\"",
        weight: "134.5 lbs."
    },
    {
        name: "Purrloin",
        imageUrl: "images/509Purrloin.png",
        number: "509",
        type: ["Dark"],
        category: "Devious",
        region: "Unova",
        height: "1'04\"",
        weight: "22.3 lbs."
    },
    {
        name: "Liepard",
        imageUrl: "images/510Liepard.png",
        number: "510",
        type: ["Dark"],
        category: "Cruel",
        region: "Unova",
        height: "3'07\"",
        weight: "82.7 lbs."
    },
    {
        name: "Pansage",
        imageUrl: "images/511Pansage.png",
        number: "511",
        type: ["Grass"],
        category: "Grass Monkey",
        region: "Unova",
        height: "2'00\"",
        weight: "23.1 lbs."
    },
    {
        name: "Simisage",
        imageUrl: "images/512Simisage.png",
        number: "512",
        type: ["Grass"],
        category: "Thorn Monkey",
        region: "Unova",
        height: "3'07\"",
        weight: "67.2 lbs."
    },
    {
        name: "Pansear",
        imageUrl: "images/513Pansear.png",
        number: "513",
        type: ["Fire"],
        category: "High Temp",
        region: "Unova",
        height: "2'00\"",
        weight: "24.3 lbs."
    },
    {
        name: "Simisear",
        imageUrl: "images/514Simisear.png",
        number: "514",
        type: ["Fire"],
        category: "Ember",
        region: "Unova",
        height: "3'03\"",
        weight: "61.7 lbs."
    },
    {
        name: "Panpour",
        imageUrl: "images/515Panpour.png",
        number: "515",
        type: ["Water"],
        category: "Spray",
        region: "Unova",
        height: "2'00\"",
        weight: "29.8 lbs."
    },
    {
        name: "Simipour",
        imageUrl: "images/516Simipour.png",
        number: "516",
        type: ["Water"],
        category: "Geyser",
        region: "Unova",
        height: "3'03\"",
        weight: "63.9 lbs."
    },
    {
        name: "Munna",
        imageUrl: "images/517Munna.png",
        number: "517",
        type: ["Psychic"],
        category: "Dream Eater",
        region: "Unova",
        height: "2'00\"",
        weight: "51.3 lbs."
    },
    {
        name: "Musharna",
        imageUrl: "images/518Musharna.png",
        number: "518",
        type: ["Psychic"],
        category: "Drowsing",
        region: "Unova",
        height: "3'07\"",
        weight: "133.4 lbs."
    },
    {
        name: "Pidove",
        imageUrl: "images/519Pidove.png",
        number: "519",
        type: ["Normal", "Flying"],
        category: "Tiny Pigeon",
        region: "Unova",
        height: "1'00\"",
        weight: "4.6 lbs."
    },
    {
        name: "Tranquill",
        imageUrl: "images/520Tranquill.png",
        number: "520",
        type: ["Normal", "Flying"],
        category: "Wild Pigeon",
        region: "Unova",
        height: "2'00\"",
        weight: "33.1 lbs."
    },
    {
        name: "Unfezant (Male)",
        imageUrl: "images/521Unfezant.png",
        number: "521",
        type: ["Normal", "Flying"],
        category: "Proud",
        region: "Unova",
        height: "3'11\"",
        weight: "63.9 lbs."
    },
    {
        name: "Unfezant (Female)",
        imageUrl: "forms/521Unfezant-Female.png",
        number: "521",
        type: ["Normal", "Flying"],
        category: "Proud",
        region: "Unova",
        height: "3'11\"",
        weight: "63.9 lbs."
    },
    {
        name: "Blitzle",
        imageUrl: "images/522Blitzle.png",
        number: "522",
        type: ["Electric"],
        category: "Electrified",
        region: "Unova",
        height: "2'07\"",
        weight: "65.7 lbs."
    },
    {
        name: "Zebstrika",
        imageUrl: "images/523Zebstrika.png",
        number: "523",
        type: ["Electric"],
        category: "Thunderbolt",
        region: "Unova",
        height: "5'03\"",
        weight: "175.3 lbs."
    },
    {
        name: "Roggenrola",
        imageUrl: "images/524Roggenrola.png",
        number: "524",
        type: ["Rock"],
        category: "Mantle",
        region: "Unova",
        height: "1'04\"",
        weight: "39.7 lbs."
    },
    {
        name: "Boldore",
        imageUrl: "images/525Boldore.png",
        number: "525",
        type: ["Rock"],
        category: "Ore",
        region: "Unova",
        height: "2'11\"",
        weight: "224.9 lbs."
    },
    {
        name: "Gigalith",
        imageUrl: "images/526Gigalith.png",
        number: "526",
        type: ["Rock"],
        category: "Compressed",
        region: "Unova",
        height: "5'07\"",
        weight: "573.2 lbs."
    },
    {
        name: "Woobat",
        imageUrl: "images/527Woobat.png",
        number: "527",
        type: ["Psychic", "Flying"],
        category: "Bat",
        region: "Unova",
        height: "1'04\"",
        weight: "4.6 lbs."
    },
    {
        name: "Swoobat",
        imageUrl: "images/528Swoobat.png",
        number: "528",
        type: ["Psychic", "Flying"],
        category: "Courting",
        region: "Unova",
        height: "2'11\"",
        weight: "23.1 lbs."
    },
    {
        name: "Drilbur",
        imageUrl: "images/529Drilbur.png",
        number: "529",
        type: ["Ground"],
        category: "Mole",
        region: "Unova",
        height: "1'00\"",
        weight: "18.7 lbs."
    },
    {
        name: "Excadrill",
        imageUrl: "images/530Excadrill.png",
        number: "530",
        type: ["Ground", "Steel"],
        category: "Subterrene",
        region: "Unova",
        height: "2'04\"",
        weight: "89.1 lbs."
    },
    {
        name: "Audino",
        imageUrl: "images/531Audino.png",
        number: "531",
        type: ["Normal"],
        category: "Hearing",
        region: "Unova",
        height: "3'07\"",
        weight: "68.3 lbs."
    },
    {
        name: "Mega Audino",
        imageUrl: "forms/531Audino-Mega.png",
        number: "531",
        type: ["Normal", "Fairy"],
        category: "Hearing",
        region: "Unova",
        height: "4'11\"",
        weight: "70.5 lbs."
    },
    {
        name: "Timburr",
        imageUrl: "images/532Timburr.png",
        number: "532",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova",
        height: "2'00\"",
        weight: "27.6 lbs."
    },
    {
        name: "Gurdurr",
        imageUrl: "images/533Gurdurr.png",
        number: "533",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova",
        height: "3'11\"",
        weight: "88.2 lbs."
    },
    {
        name: "Conkeldurr",
        imageUrl: "images/534Conkeldurr.png",
        number: "534",
        type: ["Fighting"],
        category: "Muscular",
        region: "Unova",
        height: "4'07\"",
        weight: "191.8 lbs."
    },
    {
        name: "Tympole",
        imageUrl: "images/535Tympole.png",
        number: "535",
        type: ["Water"],
        category: "Tadpole",
        region: "Unova",
        height: "1'08\"",
        weight: "9.9 lbs."
    },
    {
        name: "Palpitoad",
        imageUrl: "images/536Palpitoad.png",
        number: "536",
        type: ["Water", "Ground"],
        category: "Vibration",
        region: "Unova",
        height: "2'07\"",
        weight: "37.5 lbs."
    },
    {
        name: "Seismitoad",
        imageUrl: "images/537Seismitoad.png",
        number: "537",
        type: ["Water", "Ground"],
        category: "Tadpole",
        region: "Unova",
        height: "4'11\"",
        weight: "136.5 lbs."
    },
    {
        name: "Throh",
        imageUrl: "images/538Throh.png",
        number: "538",
        type: ["Fighting"],
        category: "Judo",
        region: "Unova",
        height: "4'03\"",
        weight: "122.4 lbs."
    },
    {
        name: "Sawk",
        imageUrl: "images/539Sawk.png",
        number: "539",
        type: ["Fighting"],
        category: "Karate",
        region: "Unova",
        height: "4'07\"",
        weight: "112.4 lbs."
    },
    {
        name: "Sewaddle",
        imageUrl: "images/540Sewaddle.png",
        number: "540",
        type: ["Bug", "Grass"],
        category: "Sewing",
        region: "Unova",
        height: "1'00\"",
        weight: "5.5 lbs."
    },
    {
        name: "Swadloon",
        imageUrl: "images/541Swadloon.png",
        number: "541",
        type: ["Bug", "Grass"],
        category: "Leaf-Wrapped",
        region: "Unova",
        height: "1'08\"",
        weight: "16.1 lbs."
    },
    {
        name: "Leavanny",
        imageUrl: "images/542Leavanny.png",
        number: "542",
        type: ["Bug", "Grass"],
        category: "Nurturing",
        region: "Unova",
        height: "3'11\"",
        weight: "45.2 lbs."
    },
    {
        name: "Venipede",
        imageUrl: "images/543Venipede.png",
        number: "543",
        type: ["Bug", "Poison"],
        category: "Centipede",
        region: "Unova",
        height: "1'04\"",
        weight: "11.7 lbs."
    },
    {
        name: "Whirlipede",
        imageUrl: "images/544Whirlipede.png",
        number: "544",
        type: ["Bug", "Poison"],
        category: "Curlipede",
        region: "Unova",
        height: "3'11\"",
        weight: "129.0 lbs."
    },
    {
        name: "Scolipede",
        imageUrl: "images/545Scolipede.png",
        number: "545",
        type: ["Bug", "Poison"],
        category: "Megapede",
        region: "Unova",
        height: "8'02\"",
        weight: "442.0 lbs."
    },
    {
        name: "Cottonee",
        imageUrl: "images/546Cottonee.png",
        number: "546",
        type: ["Grass", "Fairy"],
        category: "Cotton Puff",
        region: "Unova",
        height: "1'00\"",
        weight: "1.3 lbs."
    },
    {
        name: "Whimsicott",
        imageUrl: "images/547Whimsicott.png",
        number: "547",
        type: ["Grass", "Fairy"],
        category: "Windveiled",
        region: "Unova",
        height: "2'04\"",
        weight: "14.6 lbs."
    },
    {
        name: "Petilil",
        imageUrl: "images/548Petilil.png",
        number: "548",
        type: ["Grass"],
        category: "Bulb",
        region: "Unova",
        height: "1'08\"",
        weight: "14.6 lbs."
    },
    {
        name: "Lilligant",
        imageUrl: "images/549Lilligant.png",
        number: "549",
        type: ["Grass"],
        category: "Flowering",
        region: "Unova",
        height: "3'07\"",
        weight: "35.9 lbs."
    },
    {
        name: "Hisuian Lilligant",
        imageUrl: "forms/549Lilligant-Hisui.png",
        number: "549",
        type: ["Grass", "Fighting"],
        category: "Flowering",
        region: "Unova",
        height: "3'11\"",
        weight: "42.3 lbs."
    },
    {
        name: "Red-Striped Basculin",
        imageUrl: "images/550Basculin.png",
        number: "550",
        type: ["Water"],
        category: "Hostile",
        region: "Unova",
        height: "3'03\"",
        weight: "39.7 lbs."
    },
    {
        name: "Blue-Striped Basculin",
        imageUrl: "forms/550Basculin-Blue.png",
        number: "550",
        type: ["Water"],
        category: "Hostile",
        region: "Unova",
        height: "3'03\"",
        weight: "39.7 lbs."
    },
    {
        name: "White-Striped Basculin",
        imageUrl: "forms/550Basculin-White.png",
        number: "550",
        type: ["Water"],
        category: "Mellow",
        region: "Unova",
        height: "3'03\"",
        weight: "39.7 lbs."
    },
    {
        name: "Sandile",
        imageUrl: "images/551Sandile.png",
        number: "551",
        type: ["Ground", "Dark"],
        category: "Desert Croc",
        region: "Unova",
        height: "2'04\"",
        weight: "33.5 lbs."
    },
    {
        name: "Krokorok",
        imageUrl: "images/552Krokorok.png",
        number: "552",
        type: ["Ground", "Dark"],
        category: "Desert Croc",
        region: "Unova",
        height: "3'03\"",
        weight: "73.6 lbs."
    },
    {
        name: "Krookodile",
        imageUrl: "images/553Krookodile.png",
        number: "553",
        type: ["Ground", "Dark"],
        category: "Intimidation",
        region: "Unova",
        height: "4'11\"",
        weight: "212.3 lbs."
    },
    {
        name: "Darumaka",
        imageUrl: "images/554Darumaka.png",
        number: "554",
        type: ["Fire"],
        category: "Zen Charm",
        region: "Unova",
        height: "2'00\"",
        weight: "82.7 lbs."
    },
    {
        name: "Galarian Darumaka",
        imageUrl: "forms/554Darumaka-Galar.png",
        number: "554",
        type: ["Ice"],
        category: "Zen Charm",
        region: "Unova",
        height: "2'04\"",
        weight: "88.2 lbs."
    },
    {
        name: "Darmanitan",
        imageUrl: "images/555Darmanitan.png",
        number: "555",
        type: ["Fire"],
        category: "Blazing",
        region: "Unova",
        height: "4'03\"",
        weight: "204.8 lbs."
    },
    {
        name: "Darmanitan (Zen Mode)",
        imageUrl: "forms/555Darmanitan-Zen.png",
        number: "555",
        type: ["Fire", "Psychic"],
        category: "Blazing",
        region: "Unova",
        height: "4'03\"",
        weight: "204.8 lbs."
    },
    {
        name: "Galarian Darmanitan",
        imageUrl: "forms/555Darmanitan-Galar.png",
        number: "555",
        type: ["Ice"],
        category: "Zen Charm",
        region: "Unova",
        height: "5'07\"",
        weight: "264.6 lbs."
    },
    {
        name: "Galarian Darmanitan (Zen Mode)",
        imageUrl: "forms/555Darmanitan-Galar-Zen.png",
        number: "555",
        type: ["Ice", "Fire"],
        category: "Zen Charm",
        region: "Unova",
        height: "5'07\"",
        weight: "264.6 lbs."
    },
    {
        name: "Maractus",
        imageUrl: "images/556Maractus.png",
        number: "556",
        type: ["Grass"],
        category: "Cactus",
        region: "Unova",
        height: "3'03\"",
        weight: "61.7 lbs."
    },
    {
        name: "Dwebble",
        imageUrl: "images/557Dwebble.png",
        number: "557",
        type: ["Bug", "Rock"],
        category: "Rock Inn",
        region: "Unova",
        height: "1'00\"",
        weight: "32.0 lbs."
    },
    {
        name: "Crustle",
        imageUrl: "images/558Crustle.png",
        number: "558",
        type: ["Bug", "Rock"],
        category: "Stone Home",
        region: "Unova",
        height: "4'07\"",
        weight: "440.9 lbs."
    },
    {
        name: "Scraggy",
        imageUrl: "images/559Scraggy.png",
        number: "559",
        type: ["Dark", "Fighting"],
        category: "Shedding",
        region: "Unova",
        height: "2'00\"",
        weight: "26.0 lbs."
    },
    {
        name: "Scrafty",
        imageUrl: "images/560Scrafty.png",
        number: "560",
        type: ["Dark", "Fighting"],
        category: "Hoodlum",
        region: "Unova",
        height: "3'07\"",
        weight: "66.1 lbs."
    },
    {
        name: "Sigilyph",
        imageUrl: "images/561Sigilyph.png",
        number: "561",
        type: ["Psychic", "Flying"],
        category: "Avianoid",
        region: "Unova",
        height: "4'07\"",
        weight: "30.9 lbs."
    },
    {
        name: "Yamask",
        imageUrl: "images/562Yamask.png",
        number: "562",
        type: ["Ghost"],
        category: "Spirit",
        region: "Unova",
        height: "1'08\"",
        weight: "3.3 lbs."
    },
    {
        name: "Galarian Yamask",
        imageUrl: "forms/562Yamask-Galar.png",
        number: "562",
        type: ["Ground", "Ghost"],
        category: "Spirit",
        region: "Unova",
        height: "1'08\"",
        weight: "3.3 lbs."
    },
    {
        name: "Cofagrigus",
        imageUrl: "images/563Cofagrigus.png",
        number: "563",
        type: ["Ghost"],
        category: "Coffin",
        region: "Unova",
        height: "5'07\"",
        weight: "168.7 lbs."
    },
    {
        name: "Tirtouga",
        imageUrl: "images/564Tirtouga.png",
        number: "564",
        type: ["Water", "Rock"],
        category: "Prototurtle",
        region: "Unova",
        height: "2'04\"",
        weight: "36.4 lbs."
    },
    {
        name: "Carracosta",
        imageUrl: "images/565Carracosta.png",
        number: "565",
        type: ["Water", "Rock"],
        category: "Prototurtle",
        region: "Unova",
        height: "3'11\"",
        weight: "178.6 lbs."
    },
    {
        name: "Archen",
        imageUrl: "images/566Archen.png",
        number: "566",
        type: ["Rock", "Flying"],
        category: "First Bird",
        region: "Unova",
        height: "1'08\"",
        weight: "20.9 lbs."
    },
    {
        name: "Archeops",
        imageUrl: "images/567Archeops.png",
        number: "567",
        type: ["Rock", "Flying"],
        category: "First Bird",
        region: "Unova",
        height: "4'07\"",
        weight: "70.5 lbs."
    },
    {
        name: "Trubbish",
        imageUrl: "images/568Trubbish.png",
        number: "568",
        type: ["Poison"],
        category: "Trash Bag",
        region: "Unova",
        height: "2'00\"",
        weight: "68.3 lbs."
    },
    {
        name: "Garbodor",
        imageUrl: "images/569Garbodor.png",
        number: "569",
        type: ["Poison"],
        category: "Trash Heap",
        region: "Unova",
        height: "6'03\"",
        weight: "236.6 lbs."
    },
    {
        name: "Gigantamax Garbodor",
        imageUrl: "forms/569Garbodor-Gigantamax.png",
        number: "569",
        type: ["Poison"],
        category: "Trash Heap",
        region: "Unova",
        height: "68'11\"+",
        weight: "??? lbs."
    },
    {
        name: "Zorua",
        imageUrl: "images/570Zorua.png",
        number: "570",
        type: ["Dark"],
        category: "Tricky Fox",
        region: "Unova",
        height: "2'04\"",
        weight: "27.6 lbs."
    },
    {
        name: "Hisuian Zorua",
        imageUrl: "forms/570Zorua-Hisui.png",
        number: "570",
        type: ["Normal", "Ghost"],
        category: "Spiteful Fox",
        region: "Unova",
        height: "2'04\"",
        weight: "12.5 lbs."
    },
    {
        name: "Zoroark",
        imageUrl: "images/571Zoroark.png",
        number: "571",
        type: ["Dark"],
        category: "Illusion Fox",
        region: "Unova",
        height: "5'03\"",
        weight: "178.8 lbs."
    },
    {
        name: "Hisuian Zoroark",
        imageUrl: "forms/571Zoroark-Hisui.png",
        number: "571",
        type: ["Normal", "Ghost"],
        category: "Baneful Fox",
        region: "Unova",
        height: "5'03\"",
        weight: "160.9 lbs."
    },
    {
        name: "Minccino",
        imageUrl: "images/572Minccino.png",
        number: "572",
        type: ["Normal"],
        category: "Chinchilla",
        region: "Unova",
        height: "1'04\"",
        weight: "12.8 lbs."
    },
    {
        name: "Cinccino",
        imageUrl: "images/573Cinccino.png",
        number: "573",
        type: ["Normal"],
        category: "Scarf",
        region: "Unova",
        height: "1'08\"",
        weight: "16.5 lbs."
    },
    {
        name: "Gothita",
        imageUrl: "images/574Gothita.png",
        number: "574",
        type: ["Psychic"],
        category: "Fixation",
        region: "Unova",
        height: "1'04\"",
        weight: "12.8 lbs."
    },
    {
        name: "Gothorita",
        imageUrl: "images/575Gothorita.png",
        number: "575",
        type: ["Psychic"],
        category: "Manipulate",
        region: "Unova",
        height: "2'04\"",
        weight: "39.7 lbs."
    },
    {
        name: "Gothitelle",
        imageUrl: "images/576Gothitelle.png",
        number: "576",
        type: ["Psychic"],
        category: "Astral Body",
        region: "Unova",
        height: "4'11\"",
        weight: "97.0 lbs."
    },
    {
        name: "Solosis",
        imageUrl: "images/577Solosis.png",
        number: "577",
        type: ["Psychic"],
        category: "Cell",
        region: "Unova",
        height: "1'00\"",
        weight: "2.2 lbs."
    },
    {
        name: "Duosion",
        imageUrl: "images/578Duosion.png",
        number: "578",
        type: ["Psychic"],
        category: "Mitosis",
        region: "Unova",
        height: "2'00\"",
        weight: "17.6 lbs."
    },
    {
        name: "Reuniclus",
        imageUrl: "images/579Reuniclus.png",
        number: "579",
        type: ["Psychic"],
        category: "Multiplying",
        region: "Unova",
        height: "3'03\"",
        weight: "44.3 lbs."
    },
    {
        name: "Ducklett",
        imageUrl: "images/580Ducklett.png",
        number: "580",
        type: ["Water", "Flying"],
        category: "Water Bird",
        region: "Unova",
        height: "1'08\"",
        weight: "12.1 lbs."
    },
    {
        name: "Swanna",
        imageUrl: "images/581Swanna.png",
        number: "581",
        type: ["Water", "Flying"],
        category: "White Bird",
        region: "Unova",
        height: "4'03\"",
        weight: "53.4 lbs."
    },
    {
        name: "Vanillite",
        imageUrl: "images/582Vanillite.png",
        number: "582",
        type: ["Ice"],
        category: "Fresh Snow",
        region: "Unova",
        height: "1'04\"",
        weight: "12.6 lbs."
    },
    {
        name: "Vanillish",
        imageUrl: "images/583Vanillish.png",
        number: "583",
        type: ["Ice"],
        category: "Icy Snow",
        region: "Unova",
        height: "3'07\"",
        weight: "90.4 lbs."
    },
    {
        name: "Vanilluxe",
        imageUrl: "images/584Vanilluxe.png",
        number: "584",
        type: ["Ice"],
        category: "Snowstorm",
        region: "Unova",
        height: "4'03\"",
        weight: "126.8 lbs."
    },
    {
        name: "Deerling (Spring Form)",
        imageUrl: "images/585Deerling.png",
        number: "585",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "2'00\"",
        weight: "43.0 lbs."
    },
    {
        name: "Deerling (Summer Form)",
        imageUrl: "forms/585Deerling-Summer.png",
        number: "585",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "2'00\"",
        weight: "43.0 lbs."
    },
    {
        name: "Deerling (Autumn Form)",
        imageUrl: "forms/585Deerling-Autumn.png",
        number: "585",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "2'00\"",
        weight: "43.0 lbs."
    },
    {
        name: "Deerling (Winter Form)",
        imageUrl: "forms/585Deerling-Winter.png",
        number: "585",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "2'00\"",
        weight: "43.0 lbs."
    },
    {
        name: "Sawsbuck (Spring Form)",
        imageUrl: "images/586Sawsbuck.png",
        number: "586",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "6'03\"",
        weight: "203.9 lbs."
    },
    {
        name: "Sawsbuck (Summer Form)",
        imageUrl: "forms/586Sawsbuck-Summer.png",
        number: "586",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "6'03\"",
        weight: "203.9 lbs."
    },
    {
        name: "Sawsbuck (Autumn Form)",
        imageUrl: "forms/586Sawsbuck-Autumn.png",
        number: "586",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "6'03\"",
        weight: "203.9 lbs."
    },
    {
        name: "Sawsbuck (Winter Form)",
        imageUrl: "forms/586Sawsbuck-Winter.png",
        number: "586",
        type: ["Normal", "Grass"],
        category: "Season",
        region: "Unova",
        height: "6'03\"",
        weight: "203.9 lbs."
    },
    {
        name: "Emolga",
        imageUrl: "images/587Emolga.png",
        number: "587",
        type: ["Electric", "Flying"],
        category: "Sky Squirrel",
        region: "Unova",
        height: "1'04\"",
        weight: "11.0 lbs."
    },
    {
        name: "Karrablast",
        imageUrl: "images/588Karrablast.png",
        number: "588",
        type: ["Bug"],
        category: "Clamping",
        region: "Unova",
        height: "1'08\"",
        weight: "13.0 lbs."
    },
    {
        name: "Escavalier",
        imageUrl: "images/589Escavalier.png",
        number: "589",
        type: ["Bug", "Steel"],
        category: "Cavalry",
        region: "Unova",
        height: "3'03\"",
        weight: "72.8 lbs."
    },
    {
        name: "Foongus",
        imageUrl: "images/590Foongus.png",
        number: "590",
        type: ["Grass", "Poison"],
        category: "Mushroom",
        region: "Unova",
        height: "0'08\"",
        weight: "2.2 lbs."
    },
    {
        name: "Amoonguss",
        imageUrl: "images/591Amoonguss.png",
        number: "591",
        type: ["Grass", "Poison"],
        category: "Mushroom",
        region: "Unova",
        height: "2'00\"",
        weight: "23.1 lbs."
    },
    {
        name: "Frillish (Male)",
        imageUrl: "images/592Frillish.png",
        number: "592",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova",
        height: "3'11\"",
        weight: "72.8 lbs."
    },
    {
        name: "Frillish (Female)",
        imageUrl: "forms/592Frillish-Female.png",
        number: "592",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova",
        height: "3'11\"",
        weight: "72.8 lbs."
    },
    {
        name: "Jellicent (Male)",
        imageUrl: "images/593Jellicent.png",
        number: "593",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova",
        height: "7'03\"",
        weight: "297.6 lbs."
    },
    {
        name: "Jellicent (Female)",
        imageUrl: "forms/593Jellicent-Female.png",
        number: "593",
        type: ["Water", "Ghost"],
        category: "Floating",
        region: "Unova",
        height: "7'03\"",
        weight: "297.6 lbs."
    },
    {
        name: "Alomomola",
        imageUrl: "images/594Alomomola.png",
        number: "594",
        type: ["Water"],
        category: "Floating",
        region: "Unova",
        height: "3'11\"",
        weight: "69.7 lbs."
    },
    {
        name: "Joltik",
        imageUrl: "images/595Joltik.png",
        number: "595",
        type: ["Bug", "Electric"],
        category: "Attaching",
        region: "Unova",
        height: "0'04\"",
        weight: "1.3 lbs."
    },
    {
        name: "Galvantula",
        imageUrl: "images/596Galvantula.png",
        number: "596",
        type: ["Bug", "Electric"],
        category: "EleSpider",
        region: "Unova",
        height: "2'07\"",
        weight: "31.5 lbs."
    },
    {
        name: "Ferroseed",
        imageUrl: "images/597Ferroseed.png",
        number: "597",
        type: ["Grass", "Steel"],
        category: "Thorn Seed",
        region: "Unova",
        height: "2'00\"",
        weight: "41.4 lbs."
    },
    {
        name: "Ferrothorn",
        imageUrl: "images/598Ferrothorn.png",
        number: "598",
        type: ["Grass", "Steel"],
        category: "Thorn Pod",
        region: "Unova",
        height: "3'03\"",
        weight: "242.5 lbs."
    },
    {
        name: "Klink",
        imageUrl: "images/599Klink.png",
        number: "599",
        type: ["Steel"],
        category: "Gear",
        region: "Unova",
        height: "1'00\"",
        weight: "46.3 lbs."
    },
    {
        name: "Klang",
        imageUrl: "images/600Klang.png",
        number: "600",
        type: ["Steel"],
        category: "Gear",
        region: "Unova",
        height: "2'00\"",
        weight: "112.4 lbs."
    },
    {
        name: "Klinklang",
        imageUrl: "images/601Klinklang.png",
        number: "601",
        type: ["Steel"],
        category: "Gear",
        region: "Unova",
        height: "2'00\"",
        weight: "178.6 lbs."
    },
    {
        name: "Tynamo",
        imageUrl: "images/602Tynamo.png",
        number: "602",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova",
        height: "0'08\"",
        weight: "0.7 lbs."
    },
    {
        name: "Eelektrik",
        imageUrl: "images/603Eelektrik.png",
        number: "603",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova",
        height: "3'11\"",
        weight: "48.5 lbs."
    },
    {
        name: "Eelektross",
        imageUrl: "images/604Eelektross.png",
        number: "604",
        type: ["Electric"],
        category: "EleFish",
        region: "Unova",
        height: "6'11\"",
        weight: "177.5 lbs."
    },
    {
        name: "Elgyem",
        imageUrl: "images/605Elgyem.png",
        number: "605",
        type: ["Psychic"],
        category: "Cerebral",
        region: "Unova",
        height: "1'08\"",
        weight: "19.8 lbs."
    },
    {
        name: "Beheeyem",
        imageUrl: "images/606Beheeyem.png",
        number: "606",
        type: ["Psychic"],
        category: "Cerebral",
        region: "Unova",
        height: "3'03\"",
        weight: "76.1 lbs."
    },
    {
        name: "Litwick",
        imageUrl: "images/607Litwick.png",
        number: "607",
        type: ["Ghost", "Fire"],
        category: "Candle",
        region: "Unova",
        height: "1'00\"",
        weight: "6.8 lbs."
    },
    {
        name: "Lampent",
        imageUrl: "images/608Lampent.png",
        number: "608",
        type: ["Ghost", "Fire"],
        category: "Lamp",
        region: "Unova",
        height: "2'00\"",
        weight: "28.7 lbs."
    },
    {
        name: "Chandelure",
        imageUrl: "images/609Chandelure.png",
        number: "609",
        type: ["Ghost", "Fire"],
        category: "Luring",
        region: "Unova",
        height: "3'03\"",
        weight: "75.6 lbs."
    },
    {
        name: "Axew",
        imageUrl: "images/610Axew.png",
        number: "610",
        type: ["Dragon"],
        category: "Tusk",
        region: "Unova",
        height: "2'00\"",
        weight: "39.7 lbs."
    },
    {
        name: "Fraxure",
        imageUrl: "images/611Fraxure.png",
        number: "611",
        type: ["Dragon"],
        category: "Axe Jaw",
        region: "Unova",
        height: "3'03\"",
        weight: "79.4 lbs."
    },
    {
        name: "Haxorus",
        imageUrl: "images/612Haxorus.png",
        number: "612",
        type: ["Dragon"],
        category: "Axe Jaw",
        region: "Unova",
        height: "5'11\"",
        weight: "232.6 lbs."
    },
    {
        name: "Cubchoo",
        imageUrl: "images/613Cubchoo.png",
        number: "613",
        type: ["Ice"],
        category: "Chill",
        region: "Unova",
        height: "1'08\"",
        weight: "18.7 lbs."
    },
    {
        name: "Beartic",
        imageUrl: "images/614Beartic.png",
        number: "614",
        type: ["Ice"],
        category: "Freezing",
        region: "Unova",
        height: "8'06\"",
        weight: "573.2 lbs."
    },
    {
        name: "Cryogonal",
        imageUrl: "images/615Cryogonal.png",
        number: "615",
        type: ["Ice"],
        category: "Crystallizing",
        region: "Unova",
        height: "3'07\"",
        weight: "326.3 lbs."
    },
    {
        name: "Shelmet",
        imageUrl: "images/616Shelmet.png",
        number: "616",
        type: ["Bug"],
        category: "Snail",
        region: "Unova",
        height: "1'04\"",
        weight: "17.0 lbs."
    },
    {
        name: "Accelgor",
        imageUrl: "images/617Accelgor.png",
        number: "617",
        type: ["Bug"],
        category: "Shell Out",
        region: "Unova",
        height: "2'07\"",
        weight: "55.8 lbs."
    },
    {
        name: "Stunfisk",
        imageUrl: "images/618Stunfisk.png",
        number: "618",
        type: ["Ground", "Electric"],
        category: "Trap",
        region: "Unova",
        height: "2'04\"",
        weight: "24.3 lbs."
    },
    {
        name: "Galarian Stunfisk",
        imageUrl: "forms/618Stunfisk-Galar.png",
        number: "618",
        type: ["Ground", "Steel"],
        category: "Trap",
        region: "Unova",
        height: "2'04\"",
        weight: "45.2 lbs."
    },
    {
        name: "Mienfoo",
        imageUrl: "images/619Mienfoo.png",
        number: "619",
        type: ["Fighting"],
        category: "Martial Arts",
        region: "Unova",
        height: "2'11\"",
        weight: "44.1 lbs."
    },
    {
        name: "Mienshao",
        imageUrl: "images/620Mienshao.png",
        number: "620",
        type: ["Fighting"],
        category: "Martial Arts",
        region: "Unova",
        height: "4'07\"",
        weight: "78.3 lbs."
    },
    {
        name: "Druddigon",
        imageUrl: "images/621Druddigon.png",
        number: "621",
        type: ["Dragon"],
        category: "Cave",
        region: "Unova",
        height: "5'03\"",
        weight: "306.4 lbs."
    },
    {
        name: "Golett",
        imageUrl: "images/622Golett.png",
        number: "622",
        type: ["Ground", "Ghost"],
        category: "Automaton",
        region: "Unova",
        height: "3'03\"",
        weight: "202.8 lbs."
    },
    {
        name: "Golurk",
        imageUrl: "images/623Golurk.png",
        number: "623",
        type: ["Ground", "Ghost"],
        category: "Automaton",
        region: "Unova",
        height: "9'02\"",
        weight: "727.5 lbs."
    },
    {
        name: "Pawniard",
        imageUrl: "images/624Pawniard.png",
        number: "624",
        type: ["Dark", "Steel"],
        category: "Sharp Blade",
        region: "Unova",
        height: "1'08\"",
        weight: "22.5 lbs."
    },
    {
        name: "Bisharp",
        imageUrl: "images/625Bisharp.png",
        number: "625",
        type: ["Dark", "Steel"],
        category: "Sword Blade",
        region: "Unova",
        height: "5'03\"",
        weight: "154.3 lbs."
    },
    {
        name: "Bouffalant",
        imageUrl: "images/626Bouffalant.png",
        number: "626",
        type: ["Normal"],
        category: "Bash Buffalo",
        region: "Unova",
        height: "5'03\"",
        weight: "208.3 lbs."
    },
    {
        name: "Rufflet",
        imageUrl: "images/627Rufflet.png",
        number: "627",
        type: ["Normal", "Flying"],
        category: "Eaglet",
        region: "Unova",
        height: "1'08\"",
        weight: "23.1 lbs."
    },
    {
        name: "Braviary",
        imageUrl: "images/628Braviary.png",
        number: "628",
        type: ["Normal", "Flying"],
        category: "Valiant",
        region: "Unova",
        height: "4'11\"",
        weight: "90.4 lbs."
    },
    {
        name: "Hisuian Braviary",
        imageUrl: "forms/628Braviary-Hisui.png",
        number: "628",
        type: ["Psychic", "Flying"],
        category: "Battle Cry",
        region: "Unova",
        height: "5'07\"",
        weight: "95.7 lbs."
    },
    {
        name: "Vullaby",
        imageUrl: "images/629Vullaby.png",
        number: "629",
        type: ["Dark", "Flying"],
        category: "Diapered",
        region: "Unova",
        height: "1'08\"",
        weight: "19.8 lbs."
    },
    {
        name: "Mandibuzz",
        imageUrl: "images/630Mandibuzz.png",
        number: "630",
        type: ["Dark", "Flying"],
        category: "Bone Vulture",
        region: "Unova",
        height: "3'11\"",
        weight: "87.1 lbs."
    },
    {
        name: "Heatmor",
        imageUrl: "images/631Heatmor.png",
        number: "631",
        type: ["Fire"],
        category: "Anteater",
        region: "Unova",
        height: "4'07\"",
        weight: "127.9 lbs."
    },
    {
        name: "Durant",
        imageUrl: "images/632Durant.png",
        number: "632",
        type: ["Bug", "Steel"],
        category: "Iron Ant",
        region: "Unova",
        height: "1'00\"",
        weight: "72.8 lbs."
    },
    {
        name: "Deino",
        imageUrl: "images/633Deino.png",
        number: "633",
        type: ["Dark", "Dragon"],
        category: "Irate",
        region: "Unova",
        height: "2'07\"",
        weight: "38.1 lbs."
    },
    {
        name: "Zweilous",
        imageUrl: "images/634Zweilous.png",
        number: "634",
        type: ["Dark", "Dragon"],
        category: "Hostile",
        region: "Unova",
        height: "4'07\"",
        weight: "110.2 lbs."
    },
    {
        name: "Hydreigon",
        imageUrl: "images/635Hydreigon.png",
        number: "635",
        type: ["Dark", "Dragon"],
        category: "Brutal",
        region: "Unova",
        height: "5'11\"",
        weight: "352.7 lbs."
    },
    {
        name: "Larvesta",
        imageUrl: "images/636Larvesta.png",
        number: "636",
        type: ["Bug", "Fire"],
        category: "Torch",
        region: "Unova",
        height: "3'07\"",
        weight: "63.5 lbs."
    },
    {
        name: "Volcarona",
        imageUrl: "images/637Volcarona.png",
        number: "637",
        type: ["Bug", "Fire"],
        category: "Sun",
        region: "Unova",
        height: "5'03\"",
        weight: "101.4 lbs."
    },
    {
        name: "Cobalion",
        imageUrl: "images/638Cobalion.png",
        number: "638",
        type: ["Steel", "Fighting"],
        category: "Iron Will",
        region: "Unova",
        height: "6'11\"",
        weight: "551.2 lbs."
    },
    {
        name: "Terrakion",
        imageUrl: "images/639Terrakion.png",
        number: "639",
        type: ["Rock", "Fighting"],
        category: "Cavern",
        region: "Unova",
        height: "6'03\"",
        weight: "573.2 lbs."
    },
    {
        name: "Virizion",
        imageUrl: "images/640Virizion.png",
        number: "640",
        type: ["Grass", "Fighting"],
        category: "Grassland",
        region: "Unova",
        height: "6'07\"",
        weight: "440.9 lbs."
    },
    {
        name: "Tornadus (Incarnate Forme)",
        imageUrl: "images/641Tornadus.png",
        number: "641",
        type: ["Flying"],
        category: "Cyclone",
        region: "Unova",
        height: "4'11\"",
        weight: "138.9 lbs."
    },
    {
        name: "Tornadus (Therian Forme)",
        imageUrl: "forms/641Tornadus-Therian.png",
        number: "641",
        type: ["Flying"],
        category: "Cyclone",
        region: "Unova",
        height: "4'07\"",
        weight: "138.9 lbs."
    },
    {
        name: "Thundurus (Incarnate Forme)",
        imageUrl: "images/642Thundurus.png",
        number: "642",
        type: ["Electric", "Flying"],
        category: "Bolt Strike",
        region: "Unova",
        height: "4'11\"",
        weight: "134.5 lbs."
    },
    {
        name: "Thundurus (Therian Forme)",
        imageUrl: "forms/642Thundurus-Therian.png",
        number: "642",
        type: ["Electric", "Flying"],
        category: "Bolt Strike",
        region: "Unova",
        height: "9'10\"",
        weight: "134.5 lbs."
    },
    {
        name: "Reshiram",
        imageUrl: "images/643Reshiram.png",
        number: "643",
        type: ["Dragon", "Fire"],
        category: "Vast White",
        region: "Unova",
        height: "10'06\"",
        weight: "727.5 lbs."
    },
    {
        name: "Zekrom",
        imageUrl: "images/644Zekrom.png",
        number: "644",
        type: ["Dragon", "Electric"],
        category: "Deep Black",
        region: "Unova",
        height: "9'06\"",
        weight: "760.6 lbs."
    },
    {
        name: "Landorus (Incarnate Forme)",
        imageUrl: "images/645Landorus.png",
        number: "645",
        type: ["Ground", "Flying"],
        category: "Abundance",
        region: "Unova",
        height: "4'11\"",
        weight: "149.9 lbs."
    },
    {
        name: "Landorus (Therian Forme)",
        imageUrl: "forms/645Landorus-Therian.png",
        number: "645",
        type: ["Ground", "Flying"],
        category: "Abundance",
        region: "Unova",
        height: "4'03\"",
        weight: "149.9 lbs."
    },
    {
        name: "Kyurem",
        imageUrl: "images/646Kyurem.png",
        number: "646",
        type: ["Dragon", "Ice"],
        category: "Boundary",
        region: "Unova",
        height: "9'10\"",
        weight: "716.5 lbs."
    },
    {
        name: "Black Kyurem",
        imageUrl: "forms/646Kyurem-Black.png",
        number: "646",
        type: ["Dragon", "Ice"],
        category: "Boundary",
        region: "Unova",
        height: "10'10\"",
        weight: "716.5 lbs."
    },
    {
        name: "White Kyurem",
        imageUrl: "forms/646Kyurem-White.png",
        number: "646",
        type: ["Dragon", "Ice"],
        category: "Boundary",
        region: "Unova",
        height: "11'10\"",
        weight: "716.5 lbs."
    },
    {
        name: "Keldeo (Ordinary Form)",
        imageUrl: "images/647Keldeo.png",
        number: "647",
        type: ["Water", "Fighting"],
        category: "Colt",
        region: "Unova",
        height: "4'07\"",
        weight: "106.9 lbs."
    },
    {
        name: "Keldeo (Resolute Form)",
        imageUrl: "forms/647Keldeo-Resolute.png",
        number: "647",
        type: ["Water", "Fighting"],
        category: "Colt",
        region: "Unova",
        height: "4'07\"",
        weight: "106.9 lbs."
    },
    {
        name: "Meloetta (Aria Forme)",
        imageUrl: "images/648Meloetta.png",
        number: "648",
        type: ["Normal", "Psychic"],
        category: "Melody",
        region: "Unova",
        height: "2'00\"",
        weight: "14.3 lbs."
    },
    {
        name: "Meloetta (Pirouette Forme)",
        imageUrl: "forms/648Meloetta-Pirouette.png",
        number: "648",
        type: ["Normal", "Fighting"],
        category: "Melody",
        region: "Unova",
        height: "2'00\"",
        weight: "14.3 lbs."
    },
    {
        name: "Genesect",
        imageUrl: "images/649Genesect.png",
        number: "649",
        type: ["Bug", "Steel"],
        category: "Paleozoic",
        region: "Unova",
        height: "4'11\"",
        weight: "181.9 lbs."
    },
    {
        name: "Chespin",
        imageUrl: "images/650Chespin.png",
        number: "650",
        type: ["Grass"],
        category: "Spiny Nut",
        region: "Kalos",
        height: "1'04\"",
        weight: "19.8 lbs."
    },
    {
        name: "Quilladin",
        imageUrl: "images/651Quilladin.png",
        number: "651",
        type: ["Grass"],
        category: "Spiny Armor",
        region: "Kalos",
        height: "2'04\"",
        weight: "63.9 lbs."
    },
    {
        name: "Chesnaught",
        imageUrl: "images/652Chesnaught.png",
        number: "652",
        type: ["Grass", "Fighting"],
        category: "Spiny Armor",
        region: "Kalos",
        height: "5'03\"",
        weight: "198.4 lbs."
    },
    {
        name: "Fennekin",
        imageUrl: "images/653Fennekin.png",
        number: "653",
        type: ["Fire"],
        category: "Fox",
        region: "Kalos",
        height: "1'04\"",
        weight: "20.7 lbs."
    },
    {
        name: "Braixen",
        imageUrl: "images/654Braixen.png",
        number: "654",
        type: ["Fire"],
        category: "Fox",
        region: "Kalos",
        height: "3'03\"",
        weight: "32.0 lbs."
    },
    {
        name: "Delphox",
        imageUrl: "images/655Delphox.png",
        number: "655",
        type: ["Fire", "Psychic"],
        category: "Fox",
        region: "Kalos",
        height: "4'11\"",
        weight: "86.0 lbs."
    },
    {
        name: "Froakie",
        imageUrl: "images/656Froakie.png",
        number: "656",
        type: ["Water"],
        category: "Bubble Frog",
        region: "Kalos",
        height: "1'00\"",
        weight: "15.4 lbs."
    },
    {
        name: "Frogadier",
        imageUrl: "images/657Frogadier.png",
        number: "657",
        type: ["Water"],
        category: "Bubble Frog",
        region: "Kalos",
        height: "2'00\"",
        weight: "24.0 lbs."
    },
    {
        name: "Greninja",
        imageUrl: "images/658Greninja.png",
        number: "658",
        type: ["Water", "Dark"],
        category: "Ninja",
        region: "Kalos",
        height: "4'11\"",
        weight: "88.2 lbs."
    },
    {
        name: "Ash-Greninja",
        imageUrl: "forms/658Greninja-Ash.png",
        number: "658",
        type: ["Water", "Dark"],
        category: "Ninja",
        region: "Kalos",
        height: "4'11\"",
        weight: "88.2 lbs."
    },
    {
        name: "Bunnelby",
        imageUrl: "images/659Bunnelby.png",
        number: "659",
        type: ["Normal"],
        category: "Digging",
        region: "Kalos",
        height: "1'04\"",
        weight: "11.0 lbs."
    },
    {
        name: "Diggersby",
        imageUrl: "images/660Diggersby.png",
        number: "660",
        type: ["Normal", "Ground"],
        category: "Digging",
        region: "Kalos",
        height: "3'03\"",
        weight: "93.5 lbs."
    },
    {
        name: "Fletchling",
        imageUrl: "images/661Fletchling.png",
        number: "661",
        type: ["Normal", "Flying"],
        category: "Tiny Robin",
        region: "Kalos",
        height: "1'00\"",
        weight: "3.7 lbs."
    },
    {
        name: "Fletchinder",
        imageUrl: "images/662Fletchinder.png",
        number: "662",
        type: ["Fire", "Flying"],
        category: "Ember",
        region: "Kalos",
        height: "2'04\"",
        weight: "35.3 lbs."
    },
    {
        name: "Talonflame",
        imageUrl: "images/663Talonflame.png",
        number: "663",
        type: ["Fire", "Flying"],
        category: "Scorching",
        region: "Kalos",
        height: "3'11\"",
        weight: "54.0 lbs."
    },
    {
        name: "Scatterbug",
        imageUrl: "images/664Scatterbug.png",
        number: "664",
        type: ["Bug"],
        category: "Scatterdust",
        region: "Kalos",
        height: "1'00\"",
        weight: "5.5 lbs."
    },
    {
        name: "Spewpa",
        imageUrl: "images/665Spewpa.png",
        number: "665",
        type: ["Bug"],
        category: "Scatterdust",
        region: "Kalos",
        height: "1'00\"",
        weight: "18.5 lbs."
    },
    {
        name: "Vivillon",
        imageUrl: "images/666Vivillon.png",
        number: "666",
        type: ["Bug", "Flying"],
        category: "Scale",
        region: "Kalos",
        height: "3'11\"",
        weight: "37.5 lbs."
    },
    {
        name: "Litleo",
        imageUrl: "images/667Litleo.png",
        number: "667",
        type: ["Fire", "Normal"],
        category: "Lion Cub",
        region: "Kalos",
        height: "2'00\"",
        weight: "29.8 lbs."
    },
    {
        name: "Pyroar (Male)",
        imageUrl: "images/668Pyroar.png",
        number: "668",
        type: ["Fire", "Normal"],
        category: "Royal",
        region: "Kalos",
        height: "4'11\"",
        weight: "179.7 lbs."
    },
    {
        name: "Pyroar (Female)",
        imageUrl: "forms/668Pyroar-Female.png",
        number: "668",
        type: ["Fire", "Normal"],
        category: "Royal",
        region: "Kalos",
        height: "4'11\"",
        weight: "179.7 lbs."
    },
    {
        name: "Flabébé",
        imageUrl: "images/669Flabebe.png",
        number: "669",
        type: ["Fairy"],
        category: "Single Bloom",
        region: "Kalos",
        height: "0'04\"",
        weight: "0.2 lbs."
    },
    {
        name: "Floette",
        imageUrl: "images/670Floette.png",
        number: "670",
        type: ["Fairy"],
        category: "Single Bloom",
        region: "Kalos",
        height: "0'08\"",
        weight: "2.0 lbs."
    },
    {
        name: "Florges",
        imageUrl: "images/671Florges.png",
        number: "671",
        type: ["Fairy"],
        category: "Garden",
        region: "Kalos",
        height: "3'07\"",
        weight: "22.0 lbs."
    },
    {
        name: "Skiddo",
        imageUrl: "images/672Skiddo.png",
        number: "672",
        type: ["Grass"],
        category: "Mount",
        region: "Kalos",
        height: "2'11\"",
        weight: "68.3 lbs."
    },
    {
        name: "Gogoat",
        imageUrl: "images/673Gogoat.png",
        number: "673",
        type: ["Grass"],
        category: "Mount",
        region: "Kalos",
        height: "5'07\"",
        weight: "200.6 lbs."
    },
    {
        name: "Pancham",
        imageUrl: "images/674Pancham.png",
        number: "674",
        type: ["Fighting"],
        category: "Playful",
        region: "Kalos",
        height: "2'00\"",
        weight: "17.6 lbs."
    },
    {
        name: "Pangoro",
        imageUrl: "images/675Pangoro.png",
        number: "675",
        type: ["Fighting", "Dark"],
        category: "Daunting",
        region: "Kalos",
        height: "6'11\"",
        weight: "299.8 lbs."
    },
    {
        name: "Furfrou",
        imageUrl: "images/676Furfrou.png",
        number: "676",
        type: ["Normal"],
        category: "Poodle",
        region: "Kalos",
        height: "3'11\"",
        weight: "61.7 lbs."
    },
    {
        name: "Espurr",
        imageUrl: "images/677Espurr.png",
        number: "677",
        type: ["Psychic"],
        category: "Restraint",
        region: "Kalos",
        height: "1'00\"",
        weight: "7.7 lbs."
    },
    {
        name: "Meowstic (Male)",
        imageUrl: "images/678Meowstic.png",
        number: "678",
        type: ["Psychic"],
        category: "Constraint",
        region: "Kalos",
        height: "2'00\"",
        weight: "18.7 lbs."
    },
    {
        name: "Meowstic (Female)",
        imageUrl: "forms/678Meowstic-Female.png",
        number: "678",
        type: ["Psychic"],
        category: "Constraint",
        region: "Kalos",
        height: "2'00\"",
        weight: "18.7 lbs."
    },
    {
        name: "Honedge",
        imageUrl: "images/679Honedge.png",
        number: "679",
        type: ["Steel", "Ghost"],
        category: "Sword",
        region: "Kalos",
        height: "2'07\"",
        weight: "4.4 lbs."
    },
    {
        name: "Doublade",
        imageUrl: "images/680Doublade.png",
        number: "680",
        type: ["Steel", "Ghost"],
        category: "Sword",
        region: "Kalos",
        height: "2'07\"",
        weight: "9.9 lbs."
    },
    {
        name: "Aegislash (Shield Forme)",
        imageUrl: "images/681Aegislash.png",
        number: "681",
        type: ["Steel", "Ghost"],
        category: "Royal Sword",
        region: "Kalos",
        height: "5'07\"",
        weight: "116.8 lbs."
    },
    {
        name: "Aegislash (Blade Forme)",
        imageUrl: "forms/681Aegislash-Blade.png",
        number: "681",
        type: ["Steel", "Ghost"],
        category: "Royal Sword",
        region: "Kalos",
        height: "5'07\"",
        weight: "116.8 lbs."
    },
    {
        name: "Spritzee",
        imageUrl: "images/682Spritzee.png",
        number: "682",
        type: ["Fairy"],
        category: "Perfume",
        region: "Kalos",
        height: "0'08\"",
        weight: "1.1 lbs."
    },
    {
        name: "Aromatisse",
        imageUrl: "images/683Aromatisse.png",
        number: "683",
        type: ["Fairy"],
        category: "Fragrance",
        region: "Kalos",
        height: "2'07\"",
        weight: "34.2 lbs."
    },
    {
        name: "Swirlix",
        imageUrl: "images/684Swirlix.png",
        number: "684",
        type: ["Fairy"],
        category: "Cotton Candy",
        region: "Kalos",
        height: "1'04\"",
        weight: "7.7 lbs."
    },
    {
        name: "Slurpuff",
        imageUrl: "images/685Slurpuff.png",
        number: "685",
        type: ["Fairy"],
        category: "Meringue",
        region: "Kalos",
        height: "2'07\"",
        weight: "11.0 lbs."
    },
    {
        name: "Inkay",
        imageUrl: "images/686Inkay.png",
        number: "686",
        type: ["Dark", "Psychic"],
        category: "Revolving",
        region: "Kalos",
        height: "1'04\"",
        weight: "7.7 lbs."
    },
    {
        name: "Malamar",
        imageUrl: "images/687Malamar.png",
        number: "687",
        type: ["Dark", "Psychic"],
        category: "Overturning",
        region: "Kalos",
        height: "4'11\"",
        weight: "103.6 lbs."
    },
    {
        name: "Binacle",
        imageUrl: "images/688Binacle.png",
        number: "688",
        type: ["Rock", "Water"],
        category: "Two-Handed",
        region: "Kalos",
        height: "1'08\"",
        weight: "68.3 lbs."
    },
    {
        name: "Barbaracle",
        imageUrl: "images/689Barbaracle.png",
        number: "689",
        type: ["Rock", "Water"],
        category: "Collective",
        region: "Kalos",
        height: "4'03\"",
        weight: "211.6 lbs."
    },
    {
        name: "Skrelp",
        imageUrl: "images/690Skrelp.png",
        number: "690",
        type: ["Poison", "Water"],
        category: "Mock Kelp",
        region: "Kalos",
        height: "1'08\"",
        weight: "16.1 lbs."
    },
    {
        name: "Dragalge",
        imageUrl: "images/691Dragalge.png",
        number: "691",
        type: ["Poison", "Dragon"],
        category: "Mock Kelp",
        region: "Kalos",
        height: "5'11\"",
        weight: "179.7 lbs."
    },
    {
        name: "Clauncher",
        imageUrl: "images/692Clauncher.png",
        number: "692",
        type: ["Water"],
        category: "Water Gun",
        region: "Kalos",
        height: "1'08\"",
        weight: "18.3 lbs."
    },
    {
        name: "Clawitzer",
        imageUrl: "images/693Clawitzer.png",
        number: "693",
        type: ["Water"],
        category: "Howitzer",
        region: "Kalos",
        height: "4'03\"",
        weight: "77.8 lbs."
    },
    {
        name: "Helioptile",
        imageUrl: "images/694Helioptile.png",
        number: "694",
        type: ["Electric", "Normal"],
        category: "Generator",
        region: "Kalos",
        height: "1'08\"",
        weight: "13.2 lbs."
    },
    {
        name: "Heliolisk",
        imageUrl: "images/695Heliolisk.png",
        number: "695",
        type: ["Electric", "Normal"],
        category: "Generator",
        region: "Kalos",
        height: "3'03\"",
        weight: "46.3 lbs."
    },
    {
        name: "Tyrunt",
        imageUrl: "images/696Tyrunt.png",
        number: "696",
        type: ["Rock", "Dragon"],
        category: "Royal Heir",
        region: "Kalos",
        height: "2'07\"",
        weight: "57.3 lbs."
    },
    {
        name: "Tyrantrum",
        imageUrl: "images/697Tyrantrum.png",
        number: "697",
        type: ["Rock", "Dragon"],
        category: "Despot",
        region: "Kalos",
        height: "8'02\"",
        weight: "595.2 lbs."
    },
    {
        name: "Amaura",
        imageUrl: "images/698Amaura.png",
        number: "698",
        type: ["Rock", "Ice"],
        category: "Tundra",
        region: "Kalos",
        height: "4'03\"",
        weight: "55.6 lbs."
    },
    {
        name: "Aurorus",
        imageUrl: "images/699Aurorus.png",
        number: "699",
        type: ["Rock", "Ice"],
        category: "Tundra",
        region: "Kalos",
        height: "8'10\"",
        weight: "496.0 lbs."
    },
    {
        name: "Sylveon",
        imageUrl: "images/700Sylveon.png",
        number: "700",
        type: ["Fairy"],
        category: "Intertwining",
        region: "Kalos",
        height: "3'03\"",
        weight: "51.8 lbs."
    },
    {
        name: "Hawlucha",
        imageUrl: "images/701Hawlucha.png",
        number: "701",
        type: ["Fighting", "Flying"],
        category: "Wrestling",
        region: "Kalos",
        height: "2'07\"",
        weight: "47.4 lbs."
    },
    {
        name: "Dedenne",
        imageUrl: "images/702Dedenne.png",
        number: "702",
        type: ["Electric", "Fairy"],
        category: "Antenna",
        region: "Kalos",
        height: "0'08\"",
        weight: "4.9 lbs."
    },
    {
        name: "Carbink",
        imageUrl: "images/703Carbink.png",
        number: "703",
        type: ["Rock", "Fairy"],
        category: "Jewel",
        region: "Kalos",
        height: "1'00\"",
        weight: "12.6 lbs."
    },
    {
        name: "Goomy",
        imageUrl: "images/704Goomy.png",
        number: "704",
        type: ["Dragon"],
        category: "Soft Tissue",
        region: "Kalos",
        height: "1'00\"",
        weight: "6.2 lbs."
    },
    {
        name: "Sliggoo",
        imageUrl: "images/705Sliggoo.png",
        number: "705",
        type: ["Dragon"],
        category: "Soft Tissue",
        region: "Kalos",
        height: "2'07\"",
        weight: "38.6 lbs."
    },
    {
        name: "Hisuian Sliggoo",
        imageUrl: "forms/705Sliggoo-Hisui.png",
        number: "705",
        type: ["Dragon", "Steel"],
        category: "Snail",
        region: "Kalos",
        height: "2'04\"",
        weight: "151.0 lbs."
    },
    {
        name: "Goodra",
        imageUrl: "images/706Goodra.png",
        number: "706",
        type: ["Dragon"],
        category: "Dragon",
        region: "Kalos",
        height: "6'07\"",
        weight: "331.8 lbs."
    },
    {
        name: "Hisuian Goodra",
        imageUrl: "forms/706Goodra-Hisui.png",
        number: "706",
        type: ["Dragon", "Steel"],
        category: "Shell Bunker",
        region: "Kalos",
        height: "5'07\"",
        weight: "736.6 lbs."
    },
    {
        name: "Klefki",
        imageUrl: "images/707Klefki.png",
        number: "707",
        type: ["Steel", "Fairy"],
        category: "Key Ring",
        region: "Kalos",
        height: "0'08\"",
        weight: "6.6 lbs."
    },
    {
        name: "Phantump",
        imageUrl: "images/708Phantump.png",
        number: "708",
        type: ["Ghost", "Grass"],
        category: "Stump",
        region: "Kalos",
        height: "1'04\"",
        weight: "15.4 lbs."
    },
    {
        name: "Trevenant",
        imageUrl: "images/709Trevenant.png",
        number: "709",
        type: ["Ghost", "Grass"],
        category: "Elder Tree",
        region: "Kalos",
        height: "4'11\"",
        weight: "156.5 lbs."
    },
    {
        name: "Pumpkaboo",
        imageUrl: "images/710Pumpkaboo.png",
        number: "710",
        type: ["Ghost", "Grass"],
        category: "Pumpkin",
        region: "Kalos",
        height: "1'04\"",
        weight: "11.0 lbs."
    },
    {
        name: "Gourgeist",
        imageUrl: "images/711Gourgeist.png",
        number: "711",
        type: ["Ghost", "Grass"],
        category: "Pumpkin",
        region: "Kalos",
        height: "2'11\"",
        weight: "27.6 lbs."
    },
    {
        name: "Bergmite",
        imageUrl: "images/712Bergmite.png",
        number: "712",
        type: ["Ice"],
        category: "Ice Chunk",
        region: "Kalos",
        height: "3'03\"",
        weight: "219.4 lbs."
    },
    {
        name: "Avalugg",
        imageUrl: "images/713Avalugg.png",
        number: "713",
        type: ["Ice"],
        category: "Iceberg",
        region: "Kalos",
        height: "6'07\"",
        weight: "1113.3 lbs."
    },
    {
        name: "Hisuian Avalugg",
        imageUrl: "forms/713Avalugg-Hisui.png",
        number: "713",
        type: ["Ice", "Rock"],
        category: "Iceberg",
        region: "Kalos",
        height: "4'07\"",
        weight: "578.5 lbs."
    },
    {
        name: "Noibat",
        imageUrl: "images/714Noibat.png",
        number: "714",
        type: ["Flying", "Dragon"],
        category: "Sound Wave",
        region: "Kalos",
        height: "1'08\"",
        weight: "17.6 lbs."
    },
    {
        name: "Noivern",
        imageUrl: "images/715Noivern.png",
        number: "715",
        type: ["Flying", "Dragon"],
        category: "Sound Wave",
        region: "Kalos",
        height: "4'11\"",
        weight: "187.4 lbs."
    },
    {
        name: "Xerneas",
        imageUrl: "images/716Xerneas.png",
        number: "716",
        type: ["Fairy"],
        category: "Life",
        region: "Kalos",
        height: "9'10\"",
        weight: "474.0 lbs."
    },
    {
        name: "Yveltal",
        imageUrl: "images/717Yveltal.png",
        number: "717",
        type: ["Dark", "Flying"],
        category: "Destruction",
        region: "Kalos",
        height: "19'00\"",
        weight: "447.5 lbs."
    },
    {
        name: "Zygarde (50% Forme)",
        imageUrl: "images/718Zygarde.png",
        number: "718",
        type: ["Dragon", "Ground"],
        category: "Order",
        region: "Kalos",
        height: "16'05\"",
        weight: "672.4 lbs."
    },
    {
        name: "Zygarde (10% Forme)",
        imageUrl: "forms/718Zygarde-10Percent.png",
        number: "718",
        type: ["Dragon", "Ground"],
        category: "Order",
        region: "Kalos",
        height: "3'11\"",
        weight: "73.9 lbs."
    },
    {
        name: "Zygarde (Complete Forme)",
        imageUrl: "forms/718Zygarde-Complete.png",
        number: "718",
        type: ["Dragon", "Ground"],
        category: "Order",
        region: "Kalos",
        height: "14'09\"",
        weight: "1344.8 lbs."
    },
    {
        name: "Diancie",
        imageUrl: "images/719Diancie.png",
        number: "719",
        type: ["Rock", "Fairy"],
        category: "Jewel",
        region: "Kalos",
        height: "2'04\"",
        weight: "19.4 lbs."
    },
    {
        name: "Mega Diancie",
        imageUrl: "forms/719Diancie-Mega.png",
        number: "719",
        type: ["Rock", "Fairy"],
        category: "Jewel",
        region: "Kalos",
        height: "3'07\"",
        weight: "61.3 lbs."
    },
    {
        name: "Hoopa Confined",
        imageUrl: "images/720Hoopa.png",
        number: "720",
        type: ["Psychic", "Ghost"],
        category: "Mischief",
        region: "Kalos",
        height: "1'08\"",
        weight: "19.8 lbs."
    },
    {
        name: "Hoopa Unbound",
        imageUrl: "forms/720Hoopa-Unbound.png",
        number: "720",
        type: ["Psychic", "Dark"],
        category: "Djinn",
        region: "Kalos",
        height: "21'04\"",
        weight: "1080.3 lbs."
    },
    {
        name: "Volcanion",
        imageUrl: "images/721Volcanion.png",
        number: "721",
        type: ["Fire", "Water"],
        category: "Steam",
        region: "Kalos",
        height: "5'07\"",
        weight: "429.9 lbs."
    },
    {
        name: "Rowlet",
        imageUrl: "images/722Rowlet.png",
        number: "722",
        type: ["Grass", "Flying"],
        category: "Grass Quill",
        region: "Alola",
        height: "1'00\"",
        weight: "3.3 lbs."
    },
    {
        name: "Dartrix",
        imageUrl: "images/723Dartrix.png",
        number: "723",
        type: ["Grass", "Flying"],
        category: "Blade Quill",
        region: "Alola",
        height: "2'04\"",
        weight: "35.3 lbs."
    },
    {
        name: "Decidueye",
        imageUrl: "images/724Decidueye.png",
        number: "724",
        type: ["Grass", "Ghost"],
        category: "Arrow Quill",
        region: "Alola",
        height: "5'03\"",
        weight: "80.7 lbs."
    },
    {
        name: "Hisuian Decidueye",
        imageUrl: "forms/724Decidueye-Hisui.png",
        number: "724",
        type: ["Grass", "Fighting"],
        category: "Arrow Quill",
        region: "Alola",
        height: "5'03\"",
        weight: "81.6 lbs."
    },
    {
        name: "Litten",
        imageUrl: "images/725Litten.png",
        number: "725",
        type: ["Fire"],
        category: "Fire Cat",
        region: "Alola",
        height: "1'04\"",
        weight: "9.5 lbs."
    },
    {
        name: "Torracat",
        imageUrl: "images/726Torracat.png",
        number: "726",
        type: ["Fire"],
        category: "Fire Cat",
        region: "Alola",
        height: "2'04\"",
        weight: "55.1 lbs."
    },
    {
        name: "Incineroar",
        imageUrl: "images/727Incineroar.png",
        number: "727",
        type: ["Fire", "Dark"],
        category: "Heel",
        region: "Alola",
        height: "5'11\"",
        weight: "183.0 lbs."
    },
    {
        name: "Popplio",
        imageUrl: "images/728Popplio.png",
        number: "728",
        type: ["Water"],
        category: "Sea Lion",
        region: "Alola",
        height: "1'04\"",
        weight: "16.5 lbs."
    },
    {
        name: "Brionne",
        imageUrl: "images/729Brionne.png",
        number: "729",
        type: ["Water"],
        category: "Pop Star",
        region: "Alola",
        height: "2'00\"",
        weight: "38.6 lbs."
    },
    {
        name: "Primarina",
        imageUrl: "images/730Primarina.png",
        number: "730",
        type: ["Water", "Fairy"],
        category: "Soloist",
        region: "Alola",
        height: "5'11\"",
        weight: "97.0 lbs."
    },
    {
        name: "Pikipek",
        imageUrl: "images/731Pikipek.png",
        number: "731",
        type: ["Normal", "Flying"],
        category: "Woodpecker",
        region: "Alola",
        height: "1'00\"",
        weight: "2.6 lbs."
    },
    {
        name: "Trumbeak",
        imageUrl: "images/732Trumbeak.png",
        number: "732",
        type: ["Normal", "Flying"],
        category: "Bugle Beak",
        region: "Alola",
        height: "2'00\"",
        weight: "32.6 lbs."
    },
    {
        name: "Toucannon",
        imageUrl: "images/733Toucannon.png",
        number: "733",
        type: ["Normal", "Flying"],
        category: "Cannon",
        region: "Alola",
        height: "3'07\"",
        weight: "57.3 lbs."
    },
    {
        name: "Yungoos",
        imageUrl: "images/734Yungoos.png",
        number: "734",
        type: ["Normal"],
        category: "Loitering",
        region: "Alola",
        height: "1'04\"",
        weight: "13.2 lbs."
    },
    {
        name: "Gumshoos",
        imageUrl: "images/735Gumshoos.png",
        number: "735",
        type: ["Normal"],
        category: "Stakeout",
        region: "Alola",
        height: "2'04\"",
        weight: "31.3 lbs."
    },
    {
        name: "Grubbin",
        imageUrl: "images/736Grubbin.png",
        number: "736",
        type: ["Bug"],
        category: "Larva",
        region: "Alola",
        height: "1'04\"",
        weight: "9.7 lbs."
    },
    {
        name: "Charjabug",
        imageUrl: "images/737Charjabug.png",
        number: "737",
        type: ["Bug", "Electric"],
        category: "Battery",
        region: "Alola",
        height: "1'08\"",
        weight: "23.1 lbs."
    },
    {
        name: "Vikavolt",
        imageUrl: "images/738Vikavolt.png",
        number: "738",
        type: ["Bug", "Electric"],
        category: "Stag Beetle",
        region: "Alola",
        height: "4'11\"",
        weight: "99.2 lbs."
    },
    {
        name: "Crabrawler",
        imageUrl: "images/739Crabrawler.png",
        number: "739",
        type: ["Fighting"],
        category: "Boxing",
        region: "Alola",
        height: "2'00\"",
        weight: "15.4 lbs."
    },
    {
        name: "Crabominable",
        imageUrl: "images/740Crabominable.png",
        number: "740",
        type: ["Fighting", "Ice"],
        category: "Woolly Crab",
        region: "Alola",
        height: "5'07\"",
        weight: "396.8 lbs."
    },
    {
        name: "Oricorio (Baile Style)",
        imageUrl: "images/741Oricorio.png",
        number: "741",
        type: ["Fire", "Flying"],
        category: "Dancing",
        region: "Alola",
        height: "2'00\"",
        weight: "7.5 lbs."
    },
    {
        name: "Oricorio (Pom-Pom Style)",
        imageUrl: "forms/741Oricorio-Pom-Pom.png",
        number: "741",
        type: ["Electric", "Flying"],
        category: "Dancing",
        region: "Alola",
        height: "2'00\"",
        weight: "7.5 lbs."
    },
    {
        name: "Oricorio (Pa'u Style)",
        imageUrl: "forms/741Oricorio-Pa'u.png",
        number: "741",
        type: ["Psychic", "Flying"],
        category: "Dancing",
        region: "Alola",
        height: "2'00\"",
        weight: "7.5 lbs."
    },
    {
        name: "Oricorio (Sensu Style)",
        imageUrl: "forms/741Oricorio-Sensu.png",
        number: "741",
        type: ["Ghost", "Flying"],
        category: "Dancing",
        region: "Alola",
        height: "2'00\"",
        weight: "7.5 lbs."
    },
    {
        name: "Cutiefly",
        imageUrl: "images/742Cutiefly.png",
        number: "742",
        type: ["Bug", "Fairy"],
        category: "Bee Fly",
        region: "Alola",
        height: "0'04\"",
        weight: "0.4 lbs."
    },
    {
        name: "Ribombee",
        imageUrl: "images/743Ribombee.png",
        number: "743",
        type: ["Bug", "Fairy"],
        category: "Bee Fly",
        region: "Alola",
        height: "0'08\"",
        weight: "1.1 lbs."
    },
    {
        name: "Rockruff",
        imageUrl: "images/744Rockruff.png",
        number: "744",
        type: ["Rock"],
        category: "Puppy",
        region: "Alola",
        height: "1'08\"",
        weight: "20.3 lbs."
    },
    {
        name: "Lycanroc (Midday Form)",
        imageUrl: "images/745Lycanroc.png",
        number: "745",
        type: ["Rock"],
        category: "Wolf",
        region: "Alola",
        height: "2'07\"",
        weight: "55.1 lbs."
    },
    {
        name: "Lycanroc (Midnight Form)",
        imageUrl: "forms/745Lycanroc-Midnight.png",
        number: "745",
        type: ["Rock"],
        category: "Wolf",
        region: "Alola",
        height: "3'07\"",
        weight: "55.1 lbs."
    },
    {
        name: "Lycanroc (Dusk Form)",
        imageUrl: "forms/745Lycanroc-Dusk.png",
        number: "745",
        type: ["Rock"],
        category: "Wolf",
        region: "Alola",
        height: "2'07\"",
        weight: "55.1 lbs."
    },
    {
        name: "Wishiwashi (Solo Form)",
        imageUrl: "images/746Wishiwashi.png",
        number: "746",
        type: ["Water"],
        category: "Small Fry",
        region: "Alola",
        height: "0'08\"",
        weight: "0.7 lbs."
    },
    {
        name: "Wishiwashi (School Form)",
        imageUrl: "forms/746Wishiwashi-School.png",
        number: "746",
        type: ["Water"],
        category: "Small Fry",
        region: "Alola",
        height: "26'11\"",
        weight: "173.3 lbs."
    },
    {
        name: "Mareanie",
        imageUrl: "images/747Mareanie.png",
        number: "747",
        type: ["Poison", "Water"],
        category: "Brutal Star",
        region: "Alola",
        height: "1'04\"",
        weight: "17.6 lbs."
    },
    {
        name: "Toxapex",
        imageUrl: "images/748Toxapex.png",
        number: "748",
        type: ["Poison", "Water"],
        category: "Brutal Star",
        region: "Alola",
        height: "2'04\"",
        weight: "32.0 lbs."
    },
    {
        name: "Mudbray",
        imageUrl: "images/749Mudbray.png",
        number: "749",
        type: ["Ground"],
        category: "Donkey",
        region: "Alola",
        height: "3'03\"",
        weight: "242.5 lbs."
    },
    {
        name: "Mudsdale",
        imageUrl: "images/750Mudsdale.png",
        number: "750",
        type: ["Ground"],
        category: "Draft Horse",
        region: "Alola",
        height: "8'02\"",
        weight: "2028.3 lbs."
    },
    {
        name: "Dewpider",
        imageUrl: "images/751Dewpider.png",
        number: "751",
        type: ["Water", "Bug"],
        category: "Water Bubble",
        region: "Alola",
        height: "1'00\"",
        weight: "8.8 lbs."
    },
    {
        name: "Araquanid",
        imageUrl: "images/752Araquanid.png",
        number: "752",
        type: ["Water", "Bug"],
        category: "Water Bubble",
        region: "Alola",
        height: "5'11\"",
        weight: "180.8 lbs."
    },
    {
        name: "Fomantis",
        imageUrl: "images/753Fomantis.png",
        number: "753",
        type: ["Grass"],
        category: "Sickle Grass",
        region: "Alola",
        height: "1'00\"",
        weight: "3.3 lbs."
    },
    {
        name: "Lurantis",
        imageUrl: "images/754Lurantis.png",
        number: "754",
        type: ["Grass"],
        category: "Bloom Sickle",
        region: "Alola",
        height: "2'11\"",
        weight: "40.8 lbs."
    },
    {
        name: "Morelull",
        imageUrl: "images/755Morelull.png",
        number: "755",
        type: ["Grass", "Fairy"],
        category: "Illuminating",
        region: "Alola",
        height: "0'08\"",
        weight: "3.3 lbs."
    },
    {
        name: "Shiinotic",
        imageUrl: "images/756Shiinotic.png",
        number: "756",
        type: ["Grass", "Fairy"],
        category: "Illuminating",
        region: "Alola",
        height: "3'03\"",
        weight: "25.4 lbs."
    },
    {
        name: "Salandit",
        imageUrl: "images/757Salandit.png",
        number: "757",
        type: ["Poison", "Fire"],
        category: "Toxic Lizard",
        region: "Alola",
        height: "2'00\"",
        weight: "10.6 lbs."
    },
    {
        name: "Salazzle",
        imageUrl: "images/758Salazzle.png",
        number: "758",
        type: ["Poison", "FIre"],
        category: "Toxic Lizard",
        region: "Alola",
        height: "3'11\"",
        weight: "48.9 lbs."
    },
    {
        name: "Stufful",
        imageUrl: "images/759Stufful.png",
        number: "759",
        type: ["Normal", "Fighting"],
        category: "Flailing",
        region: "Alola",
        height: "1'08\"",
        weight: "15.0 lbs."
    },
    {
        name: "Bewear",
        imageUrl: "images/760Bewear.png",
        number: "760",
        type: ["Normal", "Fighting"],
        category: "Strong Arm",
        region: "Alola",
        height: "6'11\"",
        weight: "297.6 lbs."
    },
    {
        name: "Bounsweet",
        imageUrl: "images/761Bounsweet.png",
        number: "761",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola",
        height: "1'00\"",
        weight: "7.1 lbs."
    },
    {
        name: "Steenee",
        imageUrl: "images/762Steenee.png",
        number: "762",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola",
        height: "2'04\"",
        weight: "18.1 lbs."
    },
    {
        name: "Tsareena",
        imageUrl: "images/763Tsareena.png",
        number: "763",
        type: ["Grass"],
        category: "Fruit",
        region: "Alola",
        height: "3'11\"",
        weight: "47.2 lbs."
    },
    {
        name: "Comfey",
        imageUrl: "images/764Comfey.png",
        number: "764",
        type: ["Fairy"],
        category: "Posy Picker",
        region: "Alola",
        height: "0'04\"",
        weight: "0.7 lbs."
    },
    {
        name: "Oranguru",
        imageUrl: "images/765Oranguru.png",
        number: "765",
        type: ["Normal", "Psychic"],
        category: "Sage",
        region: "Alola",
        height: "4'11\"",
        weight: "167.6 lbs."
    },
    {
        name: "Passimian",
        imageUrl: "images/766Passimian.png",
        number: "766",
        type: ["Fighting"],
        category: "Teamwork",
        region: "Alola",
        height: "6'07\"",
        weight: "182.5 lbs."
    },
    {
        name: "Wimpod",
        imageUrl: "images/767Wimpod.png",
        number: "767",
        type: ["Bug", "Water"],
        category: "Turn Tail",
        region: "Alola",
        height: "1'08\"",
        weight: "26.5 lbs."
    },
    {
        name: "Golisopod",
        imageUrl: "images/768Golisopod.png",
        number: "768",
        type: ["Bug", "Water"],
        category: "Hard Scale",
        region: "Alola",
        height: "6'07\"",
        weight: "238.1 lbs."
    },
    {
        name: "Sandygast",
        imageUrl: "images/769Sandygast.png",
        number: "769",
        type: ["Ghost", "Ground"],
        category: "Sand Heap",
        region: "Alola",
        height: "1'08\"",
        weight: "154.3 lbs."
    },
    {
        name: "Palossand",
        imageUrl: "images/770Palossand.png",
        number: "770",
        type: ["Ghost", "Ground"],
        category: "Sand Castle",
        region: "Alola",
        height: "4'03\"",
        weight: "551.2 lbs."
    },
    {
        name: "Pyukumuku",
        imageUrl: "images/771Pyukumuku.png",
        number: "771",
        type: ["Water"],
        category: "Sea Cucumber",
        region: "Alola",
        height: "1'00\"",
        weight: "2.6 lbs."
    },
    {
        name: "Type: Null",
        imageUrl: "images/772Type_Null.png",
        number: "772",
        type: ["Normal"],
        category: "Synthetic",
        region: "Alola",
        height: "6'03\"",
        weight: "265.7 lbs."
    },
    {
        name: "Silvally",
        imageUrl: "images/773Silvally.png",
        number: "773",
        type: ["Normal"],
        category: "Synthetic",
        region: "Alola",
        height: "7'07\"",
        weight: "221.6 lbs."
    },
    {
        name: "Minior",
        imageUrl: "images/774Minior.png",
        number: "774",
        type: ["Rock", "Flying"],
        category: "Meteor",
        region: "Alola",
        height: "1'00\"",
        weight: "88.2 lbs."
    },
    {
        name: "Minior (Core)",
        imageUrl: "forms/774Minior-Core.png",
        number: "774",
        type: ["Rock", "Flying"],
        category: "Meteor",
        region: "Alola",
        height: "1'00\"",
        weight: "0.7 lbs."
    },
    {
        name: "Komala",
        imageUrl: "images/775Komala.png",
        number: "775",
        type: ["Normal"],
        category: "Drowsing",
        region: "Alola",
        height: "1'04\"",
        weight: "43.9 lbs."
    },
    {
        name: "Turtonator",
        imageUrl: "images/776Turtonator.png",
        number: "776",
        type: ["Fire", "Dragon"],
        category: "Blast Turtle",
        region: "Alola",
        height: "6'07\"",
        weight: "467.4 lbs."
    },
    {
        name: "Togedemaru",
        imageUrl: "images/777Togedemaru.png",
        number: "777",
        type: ["Electric", "Steel"],
        category: "Roly-Poly",
        region: "Alola",
        height: "1'00\"",
        weight: "7.3 lbs."
    },
    {
        name: "Mimikyu",
        imageUrl: "images/778Mimikyu.png",
        number: "778",
        type: ["Ghost", "Fairy"],
        category: "Disguise",
        region: "Alola",
        height: "0'08\"",
        weight: "1.5 lbs."
    },
    {
        name: "Bruxish",
        imageUrl: "images/779Bruxish.png",
        number: "779",
        type: ["Water", "Psychic"],
        category: "Gnash Teeth",
        region: "Alola",
        height: "2'11\"",
        weight: "41.9 lbs."
    },
    {
        name: "Drampa",
        imageUrl: "images/780Drampa.png",
        number: "780",
        type: ["Normal", "Dragon"],
        category: "Placid",
        region: "Alola",
        height: "9'10\"",
        weight: "407.9 lbs."
    },
    {
        name: "Dhelmise",
        imageUrl: "images/781Dhelmise.png",
        number: "781",
        type: ["Ghost", "Grass"],
        category: "Sea Creeper",
        region: "Alola",
        height: "12'10\"",
        weight: "463.0 lbs."
    },
    {
        name: "Jangmo-o",
        imageUrl: "images/782Jangmo-o.png",
        number: "782",
        type: ["Dragon"],
        category: "Scaly",
        region: "Alola",
        height: "2'00\"",
        weight: "65.5 lbs."
    },
    {
        name: "Hakamo-o",
        imageUrl: "images/783Hakamo-o.png",
        number: "783",
        type: ["Dragon", "Fighting"],
        category: "Scaly",
        region: "Alola",
        height: "3'11\"",
        weight: "103.6 lbs."
    },
    {
        name: "Kommo-o",
        imageUrl: "images/784Kommo-o.png",
        number: "784",
        type: ["Dragon", "Fighting"],
        category: "Scaly",
        region: "Alola",
        height: "5'03\"",
        weight: "172.4 lbs."
    },
    {
        name: "Tapu Koko",
        imageUrl: "images/785Tapu_Koko.png",
        number: "785",
        type: ["Electric", "Fairy"],
        category: "Land Spirit",
        region: "Alola",
        height: "5'11\"",
        weight: "45.2 lbs."
    },
    {
        name: "Tapu Lele",
        imageUrl: "images/786Tapu_Lele.png",
        number: "786",
        type: ["Psychic", "Fairy"],
        category: "Land Spirit",
        region: "Alola",
        height: "3'11\"",
        weight: "41.0 lbs."
    },
    {
        name: "Tapu Bulu",
        imageUrl: "images/787Tapu_Bulu.png",
        number: "787",
        type: ["Grass", "Fairy"],
        category: "Land Spirit",
        region: "Alola",
        height: "6'03\"",
        weight: "100.3 lbs."
    },
    {
        name: "Tapu Fini",
        imageUrl: "images/788Tapu_Fini.png",
        number: "788",
        type: ["Water", "Fairy"],
        category: "Land Spirit",
        region: "Alola",
        height: "4'03\"",
        weight: "46.7 lbs."
    },
    {
        name: "Cosmog",
        imageUrl: "images/789Cosmog.png",
        number: "789",
        type: ["Psychic"],
        category: "Nebula",
        region: "Alola",
        height: "0'08\"",
        weight: "0.2 lbs."
    },
    {
        name: "Cosmoem",
        imageUrl: "images/790Cosmoem.png",
        number: "790",
        type: ["Psychic"],
        category: "Protostar",
        region: "Alola",
        height: "0'04\"",
        weight: "2204.4 lbs."
    },
    {
        name: "Solgaleo",
        imageUrl: "images/791Solgaleo.png",
        number: "791",
        type: ["Psychic", "Steel"],
        category: "Sunne",
        region: "Alola",
        height: "11'02\"",
        weight: "507.1 lbs."
    },
    {
        name: "Lunala",
        imageUrl: "images/792Lunala.png",
        number: "792",
        type: ["Psychic", "Ghost"],
        category: "Moone",
        region: "Alola",
        height: "13'01\"",
        weight: "264.6 lbs."
    },
    {
        name: "Nihilego",
        imageUrl: "images/793Nihilego.png",
        number: "793",
        type: ["Rock", "Poison"],
        category: "Parasite",
        region: "Alola",
        height: "3'11\"",
        weight: "122.4 lbs."
    },
    {
        name: "Buzzwole",
        imageUrl: "images/794Buzzwole.png",
        number: "794",
        type: ["Bug", "Fighting"],
        category: "Swollen",
        region: "Alola",
        height: "7'10\"",
        weight: "735.5 lbs."
    },
    {
        name: "Pheromosa",
        imageUrl: "images/795Pheromosa.png",
        number: "795",
        type: ["Bug", "Fighting"],
        category: "Lissome",
        region: "Alola",
        height: "5'11\"",
        weight: "55.1 lbs."
    },
    {
        name: "Xurkitree",
        imageUrl: "images/796Xurkitree.png",
        number: "796",
        type: ["Electric"],
        category: "Glowing",
        region: "Alola",
        height: "12'06\"",
        weight: "220.5 lbs."
    },
    {
        name: "Celesteela",
        imageUrl: "images/797Celesteela.png",
        number: "797",
        type: ["Steel", "Flying"],
        category: "Launch",
        region: "Alola",
        height: "30'02\"",
        weight: "2204.4 lbs."
    },
    {
        name: "Kartana",
        imageUrl: "images/798Kartana.png",
        number: "798",
        type: ["Grass", "Steel"],
        category: "Drawn Sword",
        region: "Alola",
        height: "1'00\"",
        weight: "0.2 lbs."
    },
    {
        name: "Guzzlord",
        imageUrl: "images/799Guzzlord.png",
        number: "799",
        type: ["Dark", "Dragon"],
        category: "Junkivore",
        region: "Alola",
        height: "18'01\"",
        weight: "1957.7 lbs."
    },
    {
        name: "Necrozma",
        imageUrl: "images/800Necrozma.png",
        number: "800",
        type: ["Psychic"],
        category: "Prism",
        region: "Alola",
        height: "7'10\"",
        weight: "507.1 lbs."
    },
    {
        name: "Dusk Mane Necrozma",
        imageUrl: "forms/800Necrozma-Dusk_Mane.png",
        number: "800",
        type: ["Psychic", "Steel"],
        category: "Prism",
        region: "Alola",
        height: "12'06\"",
        weight: "1014.1 lbs."
    },
    {
        name: "Dawn Wings Necrozma",
        imageUrl: "forms/800Necrozma-Dawn_Wings.png",
        number: "800",
        type: ["Psychic", "Ghost"],
        category: "Prism",
        region: "Alola",
        height: "13'09\"",
        weight: "771.6 lbs."
    },
    {
        name: "Ultra Necrozma",
        imageUrl: "forms/800Necrozma-Ultra.png",
        number: "800",
        type: ["Psychic", "Dragon"],
        category: "Prism",
        region: "Alola",
        height: "24'07\"",
        weight: "507.1 lbs."
    },
    {
        name: "Magearna",
        imageUrl: "images/801Magearna.png",
        number: "801",
        type: ["Steel", "Fairy"],
        category: "Artificial",
        region: "Alola",
        height: "3'03\"",
        weight: "177.5 lbs."
    },
    {
        name: "Marshadow",
        imageUrl: "images/802Marshadow.png",
        number: "802",
        type: ["Fighting", "Ghost"],
        category: "Gloomdweller",
        region: "Alola",
        height: "2'04\"",
        weight: "48.9 lbs."
    },
    {
        name: "Poipole",
        imageUrl: "images/803Poipole.png",
        number: "803",
        type: ["Poison"],
        category: "Poison Pin",
        region: "Alola",
        height: "2'00\"",
        weight: "4.0 lbs."
    },
    {
        name: "Naganadel",
        imageUrl: "images/804Naganadel.png",
        number: "804",
        type: ["Poison", "Dragon"],
        category: "Poison Pin",
        region: "Alola",
        height: "11'10\"",
        weight: "330.7 lbs."
    },
    {
        name: "Stakataka",
        imageUrl: "images/805Stakataka.png",
        number: "805",
        type: ["Rock", "Steel"],
        category: "Rampart",
        region: "Alola",
        height: "18'01\"",
        weight: "1807.8 lbs."
    },
    {
        name: "Blacephalon",
        imageUrl: "images/806Blacephalon.png",
        number: "806",
        type: ["Fire", "Ghost"],
        category: "Fireworks",
        region: "Alola",
        height: "5'11\"",
        weight: "28.7 lbs."
    },
    {
        name: "Zeraora",
        imageUrl: "images/807Zeraora.png",
        number: "807",
        type: ["Electric"],
        category: "Thunderclap",
        region: "Alola",
        height: "4'11\"",
        weight: "98.1 lbs."
    },
    {
        name: "Meltan",
        imageUrl: "images/808Meltan.png",
        number: "808",
        type: ["Steel"],
        category: "Hex Nut",
        region: "Alola",
        height: "0'08\"",
        weight: "17.6 lbs."
    },
    {
        name: "Melmetal",
        imageUrl: "images/809Melmetal.png",
        number: "809",
        type: ["Steel"],
        category: "Hex Nut",
        region: "Alola",
        height: "8'02\"",
        weight: "1763.7 lbs."
    },
    {
        name: "Gigantamax Melmetal",
        imageUrl: "forms/809Melmetal-Gigantamax.png",
        number: "809",
        type: ["Steel"],
        category: "Hex Nut",
        region: "Alola",
        height: "82'00\"+",
        weight: "??? lbs."
    },
    {
        name: "Grookey",
        imageUrl: "images/810Grookey.png",
        number: "810",
        type: ["Grass"],
        category: "Chimp",
        region: "Galar",
        height: "1'00\"",
        weight: "11.0 lbs."
    },
    {
        name: "Thwackey",
        imageUrl: "images/811Thwackey.png",
        number: "811",
        type: ["Grass"],
        category: "Beat",
        region: "Galar",
        height: "2'04\"",
        weight: "30.9 lbs."
    },
    {
        name: "Rillaboom",
        imageUrl: "images/812Rillaboom.png",
        number: "812",
        type: ["Grass"],
        category: "Drummer",
        region: "Galar",
        height: "5'11\"",
        weight: "198.4 lbs."
    },
    {
        name: "Gigantamax Rillaboom",
        imageUrl: "forms/812Rillaboom-Gigantamax.png",
        number: "812",
        type: ["Grass"],
        category: "Drummer",
        region: "Galar",
        height: "91'10\"+",
        weight: "??? lbs."
    },
    {
        name: "Scorbunny",
        imageUrl: "images/813Scorbunny.png",
        number: "813",
        type: ["Fire"],
        category: "Rabbit",
        region: "Galar",
        height: "1'00\"",
        weight: "9.9 lbs."
    },
    {
        name: "Raboot",
        imageUrl: "images/814Raboot.png",
        number: "814",
        type: ["Fire"],
        category: "Rabbit",
        region: "Galar",
        height: "2'00\"",
        weight: "19.8 lbs."
    },
    {
        name: "Cinderace",
        imageUrl: "images/815Cinderace.png",
        number: "815",
        type: ["Fire"],
        category: "Striker",
        region: "Galar",
        height: "4'07\"",
        weight: "72.8 lbs."
    },
    {
        name: "Gigantamax Cinderace",
        imageUrl: "forms/815Cinderace-Gigantamax.png",
        number: "815",
        type: ["Fire"],
        category: "Striker",
        region: "Galar",
        height: "88'07\"+",
        weight: "??? lbs."
    },
    {
        name: "Sobble",
        imageUrl: "images/816Sobble.png",
        number: "816",
        type: ["Water"],
        category: "Water Lizard",
        region: "Galar",
        height: "1'00\"",
        weight: "8.8 lbs."
    },
    {
        name: "Drizzile",
        imageUrl: "images/817Drizzile.png",
        number: "817",
        type: ["Water"],
        category: "Water Lizard",
        region: "Galar",
        height: "2'04\"",
        weight: "25.4 lbs."
    },
    {
        name: "Inteleon",
        imageUrl: "images/818Inteleon.png",
        number: "818",
        type: ["Water"],
        category: "Secret Agent",
        region: "Galar",
        height: "6'03\"",
        weight: "99.6 lbs."
    },
    {
        name: "Gigantamax Inteleon",
        imageUrl: "forms/818Inteleon-Gigantamax.png",
        number: "818",
        type: ["Water"],
        category: "Secret Agent",
        region: "Galar",
        height: "131'03\"+",
        weight: "??? lbs."
    },
    {
        name: "Skwovet",
        imageUrl: "images/819Skwovet.png",
        number: "819",
        type: ["Normal"],
        category: "Cheeky",
        region: "Galar",
        height: "1'00\"",
        weight: "5.5 lbs."
    },
    {
        name: "Greedent",
        imageUrl: "images/820Greedent.png",
        number: "820",
        type: ["Normal"],
        category: "Greedy",
        region: "Galar",
        height: "2'00\"",
        weight: "13.2 lbs."
    },
    {
        name: "Rookidee",
        imageUrl: "images/821Rookidee.png",
        number: "821",
        type: ["Flying"],
        category: "Tiny Bird",
        region: "Galar",
        height: "0'08\"",
        weight: "4.0 lbs."
    },
    {
        name: "Corvisquire",
        imageUrl: "images/822Corvisquire.png",
        number: "822",
        type: ["Flying"],
        category: "Raven",
        region: "Galar",
        height: "2'07\"",
        weight: "35.3 lbs."
    },
    {
        name: "Corviknight",
        imageUrl: "images/823Corviknight.png",
        number: "823",
        type: ["Flying", "Steel"],
        category: "Raven",
        region: "Galar",
        height: "7'03\"",
        weight: "165.3 lbs."
    },
    {
        name: "Gigantamax Corviknight",
        imageUrl: "forms/823Corviknight-Gigantamax.png",
        number: "823",
        type: ["Flying", "Steel"],
        category: "Raven",
        region: "Galar",
        height: "45'11\"+",
        weight: "??? lbs."
    },
    {
        name: "Blipbug",
        imageUrl: "images/824Blipbug.png",
        number: "824",
        type: ["Bug"],
        category: "Larva",
        region: "Galar",
        height: "1'04\"",
        weight: "17.6 lbs."
    },
    {
        name: "Dottler",
        imageUrl: "images/825Dottler.png",
        number: "825",
        type: ["Bug", "Psychic"],
        category: "Radome",
        region: "Galar",
        height: "1'04\"",
        weight: "43.0 lbs."
    },
    {
        name: "Orbeetle",
        imageUrl: "images/826Orbeetle.png",
        number: "826",
        type: ["Bug", "Psychic"],
        category: "Seven Spot",
        region: "Galar",
        height: "1'04\"",
        weight: "89.9 lbs."
    },
    {
        name: "Gigantamax Orbeetle",
        imageUrl: "forms/826Orbeetle-Gigantamax.png",
        number: "826",
        type: ["Bug", "Psychic"],
        category: "Seven Spot",
        region: "Galar",
        height: "45'11\"+",
        weight: "??? lbs."
    },
    {
        name: "Nickit",
        imageUrl: "images/827Nickit.png",
        number: "827",
        type: ["Dark"],
        category: "Fox",
        region: "Galar",
        height: "2'00\"",
        weight: "19.6 lbs."
    },
    {
        name: "Thievul",
        imageUrl: "images/828Thievul.png",
        number: "828",
        type: ["Dark"],
        category: "Fox",
        region: "Galar",
        height: "3'11\"",
        weight: "43.9 lbs."
    },
    {
        name: "Gossifleur",
        imageUrl: "images/829Gossifleur.png",
        number: "829",
        type: ["Grass"],
        category: "Flowering",
        region: "Galar",
        height: "1'04\"",
        weight: "4.9 lbs."
    },
    {
        name: "Eldegoss",
        imageUrl: "images/830Eldegoss.png",
        number: "830",
        type: ["Grass"],
        category: "Cotton Bloom",
        region: "Galar",
        height: "1'08\"",
        weight: "5.5 lbs."
    },
    {
        name: "Wooloo",
        imageUrl: "images/831Wooloo.png",
        number: "831",
        type: ["Normal"],
        category: "Sheep",
        region: "Galar",
        height: "2'00\"",
        weight: "13.2 lbs."
    },
    {
        name: "Dubwool",
        imageUrl: "images/832Dubwool.png",
        number: "832",
        type: ["Normal"],
        category: "Sheep",
        region: "Galar",
        height: "4'03\"",
        weight: "94.8 lbs."
    },
    {
        name: "Chewtle",
        imageUrl: "images/833Chewtle.png",
        number: "833",
        type: ["Water"],
        category: "Snapping",
        region: "Galar",
        height: "1'00\"",
        weight: "18.7 lbs."
    },
    {
        name: "Drednaw",
        imageUrl: "images/834Drednaw.png",
        number: "834",
        type: ["Water", "Rock"],
        category: "Bite",
        region: "Galar",
        height: "3'03\"",
        weight: "254.6 lbs."
    },
    {
        name: "Gigantamax Drednaw",
        imageUrl: "forms/834Drednaw-Gigantamax.png",
        number: "834",
        type: ["Water", "Rock"],
        category: "Bite",
        region: "Galar",
        height: "78'09\"+",
        weight: "??? lbs."
    },
    {
        name: "Yamper",
        imageUrl: "images/835Yamper.png",
        number: "835",
        type: ["Electric"],
        category: "Puppy",
        region: "Galar",
        height: "1'00\"",
        weight: "29.8 lbs."
    },
    {
        name: "Boltund",
        imageUrl: "images/836Boltund.png",
        number: "836",
        type: ["Electric"],
        category: "Dog",
        region: "Galar",
        height: "3'03\"",
        weight: "75.0 lbs."
    },
    {
        name: "Rolycoly",
        imageUrl: "images/837Rolycoly.png",
        number: "837",
        type: ["Rock"],
        category: "Coal",
        region: "Galar",
        height: "1'00\"",
        weight: "26.5 lbs."
    },
    {
        name: "Carkol",
        imageUrl: "images/838Carkol.png",
        number: "838",
        type: ["Rock", "Fire"],
        category: "Coal",
        region: "Galar",
        height: "3'07\"",
        weight: "172.0 lbs."
    },
    {
        name: "Coalossal",
        imageUrl: "images/839Coalossal.png",
        number: "839",
        type: ["Rock", "Fire"],
        category: "Coal",
        region: "Galar",
        height: "9'02\"",
        weight: "684.5 lbs."
    },
    {
        name: "Gigantamax Coalossal",
        imageUrl: "forms/839Coalossal-Gigantamax.png",
        number: "839",
        type: ["Rock", "Fire"],
        category: "Coal",
        region: "Galar",
        height: "137'10\"+",
        weight: "??? lbs."
    },
    {
        name: "Applin",
        imageUrl: "images/840Applin.png",
        number: "840",
        type: ["Grass", "Dragon"],
        category: "Apple Core",
        region: "Galar",
        height: "0'08\"",
        weight: "1.1 lbs."
    },
    {
        name: "Flapple",
        imageUrl: "images/841Flapple.png",
        number: "841",
        type: ["Grass", "Dragon"],
        category: "Apple Wing",
        region: "Galar",
        height: "1'00\"",
        weight: "2.2 lbs."
    },
    {
        name: "Gigantamax Flapple",
        imageUrl: "forms/841Flapple-Gigantamax.png",
        number: "841",
        type: ["Grass", "Dragon"],
        category: "Apple Wing",
        region: "Galar",
        height: "78'09\"+",
        weight: "??? lbs."
    },
    {
        name: "Appletun",
        imageUrl: "images/842Appletun.png",
        number: "842",
        type: ["Grass", "Dragon"],
        category: "Apple Nectar",
        region: "Galar",
        height: "1'04\"",
        weight: "28.7 lbs."
    },
    {
        name: "Gigantamax Appletun",
        imageUrl: "forms/842Appletun-Gigantamax.png",
        number: "842",
        type: ["Grass", "Dragon"],
        category: "Apple Nectar",
        region: "Galar",
        height: "78'09\"+",
        weight: "??? lbs."
    },
    {
        name: "Silicobra",
        imageUrl: "images/843Silicobra.png",
        number: "843",
        type: ["Ground"],
        category: "Sand Snake",
        region: "Galar",
        height: "7'03\"",
        weight: "16.8 lbs."
    },
    {
        name: "Sandaconda",
        imageUrl: "images/844Sandaconda.png",
        number: "844",
        type: ["Ground"],
        category: "Sand Snake",
        region: "Galar",
        height: "12'06\"",
        weight: "144.4 lbs."
    },
    {
        name: "Gigantamax Sandaconda",
        imageUrl: "forms/844Sandaconda-Gigantamax.png",
        number: "844",
        type: ["Ground"],
        category: "Sand Snake",
        region: "Galar",
        height: "72'02\"+",
        weight: "??? lbs."
    },
    {
        name: "Cramorant",
        imageUrl: "images/845Cramorant.png",
        number: "845",
        type: ["Flying", "Water"],
        category: "Gulp",
        region: "Galar",
        height: "2'07\"",
        weight: "39.7 lbs."
    },
    {
        name: "Arrokuda",
        imageUrl: "images/846Arrokuda.png",
        number: "846",
        type: ["Water"],
        category: "Rush",
        region: "Galar",
        height: "1'08\"",
        weight: "2.2 lbs."
    },
    {
        name: "Barraskewda",
        imageUrl: "images/847Barraskewda.png",
        number: "847",
        type: ["Water"],
        category: "Skewer",
        region: "Galar",
        height: "4'03\"",
        weight: "66.1 lbs."
    },
    {
        name: "Toxel",
        imageUrl: "images/848Toxel.png",
        number: "848",
        type: ["Electric", "Poison"],
        category: "Baby",
        region: "Galar",
        height: "1'04\"",
        weight: "24.3 lbs."
    },
    {
        name: "Toxtricity (Amped Form)",
        imageUrl: "images/849Toxtricity.png",
        number: "849",
        type: ["Electric", "Poison"],
        category: "Punk",
        region: "Galar",
        height: "5'03\"",
        weight: "88.2 lbs."
    },
    {
        name: "Toxtricity (Low Key Form)",
        imageUrl: "forms/849Toxtricity-Low_Key.png",
        number: "849",
        type: ["Electric", "Poison"],
        category: "Punk",
        region: "Galar",
        height: "5'03\"",
        weight: "88.2 lbs."
    },
    {
        name: "Gigantamax Toxtricity",
        imageUrl: "forms/849Toxtricity-Gigantamax.png",
        number: "849",
        type: ["Electric", "Poison"],
        category: "Punk",
        region: "Galar",
        height: "78'09\"+",
        weight: "??? lbs."
    },
    {
        name: "Sizzlipede",
        imageUrl: "images/850Sizzlipede.png",
        number: "850",
        type: ["Fire", "Bug"],
        category: "Radiator",
        region: "Galar",
        height: "2'04\"",
        weight: "2.2 lbs."
    },
    {
        name: "Centiskorch",
        imageUrl: "images/851Centiskorch.png",
        number: "851",
        type: ["Fire", "Bug"],
        category: "Radiator",
        region: "Galar",
        height: "9'10\"",
        weight: "264.6 lbs."
    },
    {
        name: "Gigantamax Centiskorch",
        imageUrl: "forms/851Centiskorch-Gigantamax.png",
        number: "851",
        type: ["Fire", "Bug"],
        category: "Radiator",
        region: "Galar",
        height: "246'01\"+",
        weight: "??? lbs."
    },
    {
        name: "Clobbopus",
        imageUrl: "images/852Clobbopus.png",
        number: "852",
        type: ["Fighting"],
        category: "Tantrum",
        region: "Galar",
        height: "2'00\"",
        weight: "8.8 lbs."
    },
    {
        name: "Grapploct",
        imageUrl: "images/853Grapploct.png",
        number: "853",
        type: ["Fighting"],
        category: "Jujitsu",
        region: "Galar",
        height: "5'03\"",
        weight: "86.0 lbs."
    },
    {
        name: "Sinistea",
        imageUrl: "images/854Sinistea.png",
        number: "854",
        type: ["Ghost"],
        category: "Black Tea",
        region: "Galar",
        height: "0'04\"",
        weight: "0.4 lbs."
    },
    {
        name: "Polteageist",
        imageUrl: "images/855Polteageist.png",
        number: "855",
        type: ["Ghost"],
        category: "Black Tea",
        region: "Galar",
        height: "0'08\"",
        weight: "0.9 lbs."
    },
    {
        name: "Hatenna",
        imageUrl: "images/856Hatenna.png",
        number: "856",
        type: ["Psychic"],
        category: "Calm",
        region: "Galar",
        height: "1'04\"",
        weight: "7.5 lbs."
    },
    {
        name: "Hattrem",
        imageUrl: "images/857Hattrem.png",
        number: "857",
        type: ["Psychic"],
        category: "Serene",
        region: "Galar",
        height: "2'00\"",
        weight: "10.6 lbs."
    },
    {
        name: "Hatterene",
        imageUrl: "images/858Hatterene.png",
        number: "858",
        type: ["Psychic", "Fairy"],
        category: "Silent",
        region: "Galar",
        height: "6'11\"",
        weight: "11.2 lbs."
    },
    {
        name: "Gigantamax Hatterene",
        imageUrl: "forms/858Hatterene-Gigantamax.png",
        number: "858",
        type: ["Psychic", "Fairy"],
        category: "Silent",
        region: "Galar",
        height: "85'04\"+",
        weight: "??? lbs."
    },
    {
        name: "Impidimp",
        imageUrl: "images/859Impidimp.png",
        number: "859",
        type: ["Dark", "Fairy"],
        category: "Wily",
        region: "Galar",
        height: "1'04\"",
        weight: "12.1 lbs."
    },
    {
        name: "Morgrem",
        imageUrl: "images/860Morgrem.png",
        number: "860",
        type: ["Dark", "Fairy"],
        category: "Devious",
        region: "Galar",
        height: "2'07\"",
        weight: "27.6 lbs."
    },
    {
        name: "Grimmsnarl",
        imageUrl: "images/861Grimmsnarl.png",
        number: "861",
        type: ["Dark", "Fairy"],
        category: "Bulk Up",
        region: "Galar",
        height: "4'11\"",
        weight: "134.5 lbs."
    },
    {
        name: "Gigantamax Grimmsnarl",
        imageUrl: "forms/861Grimmsnarl-Gigantamax.png",
        number: "861",
        type: ["Dark", "Fairy"],
        category: "Bulk Up",
        region: "Galar",
        height: "105'00\"+",
        weight: "??? lbs."
    },
    {
        name: "Obstagoon",
        imageUrl: "images/862Obstagoon.png",
        number: "862",
        type: ["Dark", "Normal"],
        category: "Blocking",
        region: "Galar",
        height: "5'03\"",
        weight: "101.4 lbs."
    },
    {
        name: "Perrserker",
        imageUrl: "images/863Perrserker.png",
        number: "863",
        type: ["Steel"],
        category: "Viking",
        region: "Galar",
        height: "2'07\"",
        weight: "61.7 lbs."
    },
    {
        name: "Cursola",
        imageUrl: "images/864Cursola.png",
        number: "864",
        type: ["Ghost"],
        category: "Coral",
        region: "Galar",
        height: "3'03\"",
        weight: "0.9 lbs."
    },
    {
        name: "Sirfetch'd",
        imageUrl: "images/865Sirfetch'd.png",
        number: "865",
        type: ["Fighting"],
        category: "Wild Duck",
        region: "Galar",
        height: "2'07\"",
        weight: "257.9 lbs."
    },
    {
        name: "Mr. Rime",
        imageUrl: "images/866Mr._Rime.png",
        number: "866",
        type: ["Ice, Psychic"],
        category: "Comedian",
        region: "Galar",
        height: "4'11\"",
        weight: "128.3 lbs."
    },
    {
        name: "Runerigus",
        imageUrl: "images/867Runerigus.png",
        number: "867",
        type: ["Ground", "Ghost"],
        category: "Grudge",
        region: "Galar",
        height: "5'03\"",
        weight: "146.8 lbs."
    },
    {
        name: "Milcery",
        imageUrl: "images/868Milcery.png",
        number: "868",
        type: ["Fairy"],
        category: "Cream",
        region: "Galar",
        height: "0'08\"",
        weight: "0.7 lbs."
    },
    {
        name: "Alcremie",
        imageUrl: "images/869Alcremie.png",
        number: "869",
        type: ["Fairy"],
        category: "Cream",
        region: "Galar",
        height: "1'00\"",
        weight: "1.1 lbs."
    },
    {
        name: "Gigantamax Alcremie",
        imageUrl: "forms/869Alcremie-Gigantamax.png",
        number: "869",
        type: ["Fairy"],
        category: "Cream",
        region: "Galar",
        height: "98'05\"+",
        weight: "??? lbs."
    },
    {
        name: "Falinks",
        imageUrl: "images/870Falinks.png",
        number: "870",
        type: ["Fighting"],
        category: "Formation",
        region: "Galar",
        height: "9'10\"",
        weight: "136.7 lbs."
    },
    {
        name: "Pincurchin",
        imageUrl: "images/871Pincurchin.png",
        number: "871",
        type: ["Electric"],
        category: "Sea Urchin",
        region: "Galar",
        height: "1'00\"",
        weight: "2.2 lbs."
    },
    {
        name: "Snom",
        imageUrl: "images/872Snom.png",
        number: "872",
        type: ["Ice", "Bug"],
        category: "Worm",
        region: "Galar",
        height: "1'00\"",
        weight: "8.4 lbs."
    },
    {
        name: "Frosmoth",
        imageUrl: "images/873Frosmoth.png",
        number: "873",
        type: ["Ice", "Bug"],
        category: "Frost Moth",
        region: "Galar",
        height: "4'03\"",
        weight: "92.6 lbs."
    },
    {
        name: "Stonjourner",
        imageUrl: "images/874Stonjourner.png",
        number: "874",
        type: ["Rock"],
        category: "Big Rock",
        region: "Galar",
        height: "8'02\"",
        weight: "1146.4 lbs."
    },
    {
        name: "Eiscue (Ice Face)",
        imageUrl: "images/875Eiscue.png",
        number: "875",
        type: ["Ice"],
        category: "Penguin",
        region: "Galar",
        height: "4'07\"",
        weight: "196.2 lbs."
    },
    {
        name: "Eiscue (Noice Face)",
        imageUrl: "forms/875Eiscue-Noice.png",
        number: "875",
        type: ["Ice"],
        category: "Penguin",
        region: "Galar",
        height: "4'07\"",
        weight: "196.2 lbs."
    },
    {
        name: "Indeedee (Male)",
        imageUrl: "images/876Indeedee.png",
        number: "876",
        type: ["Psychic", "Normal"],
        category: "Emotion",
        region: "Galar",
        height: "2'11\"",
        weight: "61.7 lbs."
    },
    {
        name: "Indeedee (Female)",
        imageUrl: "forms/876Indeedee-Female.png",
        number: "876",
        type: ["Psychic", "Normal"],
        category: "Emotion",
        region: "Galar",
        height: "2'11\"",
        weight: "61.7 lbs."
    },
    {
        name: "Morpeko (Full Belly Mode)",
        imageUrl: "images/877Morpeko.png",
        number: "877",
        type: ["Electric", "Dark"],
        category: "Two-Sided",
        region: "Galar",
        height: "1'00\"",
        weight: "6.6 lbs."
    },
    {
        name: "Morpeko (Hangry Mode)",
        imageUrl: "forms/877Morpeko-Hangry.png",
        number: "877",
        type: ["Electric", "Dark"],
        category: "Two-Sided",
        region: "Galar",
        height: "1'00\"",
        weight: "6.6 lbs."
    },
    {
        name: "Cufant",
        imageUrl: "images/878Cufant.png",
        number: "878",
        type: ["Steel"],
        category: "Copperderm",
        region: "Galar",
        height: "3'11\"",
        weight: "220.5 lbs."
    },
    {
        name: "Copperajah",
        imageUrl: "images/879Copperajah.png",
        number: "879",
        type: ["Steel"],
        category: "Copperderm",
        region: "Galar",
        height: "9'10\"",
        weight: "1433.0 lbs."
    },
    {
        name: "Gigantamax Copperajah",
        imageUrl: "forms/879Copperajah-Gigantamax.png",
        number: "879",
        type: ["Steel"],
        category: "Copperderm",
        region: "Galar",
        height: "75'06\"+",
        weight: "??? lbs."
    },
    {
        name: "Dracozolt",
        imageUrl: "images/880Dracozolt.png",
        number: "880",
        type: ["Electric", "Dragon"],
        category: "Fossil",
        region: "Galar",
        height: "5'11\"",
        weight: "418.9 lbs."
    },
    {
        name: "Arctozolt",
        imageUrl: "images/881Arctozolt.png",
        number: "881",
        type: ["Electric", "Ice"],
        category: "Fossil",
        region: "Galar",
        height: "7'07\"",
        weight: "330.7 lbs."
    },
    {
        name: "Dracovish",
        imageUrl: "images/882Dracovish.png",
        number: "882",
        type: ["Water", "Dragon"],
        category: "Fossil",
        region: "Galar",
        height: "7'07\"",
        weight: "474.0 lbs."
    },
    {
        name: "Arctovish",
        imageUrl: "images/883Arctovish.png",
        number: "883",
        type: ["Water", "Ice"],
        category: "Fossil",
        region: "Galar",
        height: "6'07\"",
        weight: "385.8 lbs."
    },
    {
        name: "Duraludon",
        imageUrl: "images/884Duraludon.png",
        number: "884",
        type: ["Steel", "Dragon"],
        category: "Alloy",
        region: "Galar",
        height: "5'11\"",
        weight: "88.2 lbs."
    },
    {
        name: "Gigantamax Duraludon",
        imageUrl: "forms/884Duraludon-Gigantamax.png",
        number: "884",
        type: ["Steel", "Dragon"],
        category: "Alloy",
        region: "Galar",
        height: "141'01\"+",
        weight: "??? lbs."
    },
    {
        name: "Dreepy",
        imageUrl: "images/885Dreepy.png",
        number: "885",
        type: ["Dragon", "Ghost"],
        category: "Lingering",
        region: "Galar",
        height: "1'08\"",
        weight: "4.4 lbs."
    },
    {
        name: "Drakloak",
        imageUrl: "images/886Drakloak.png",
        number: "886",
        type: ["Dragon", "Ghost"],
        category: "Caretaker",
        region: "Galar",
        height: "4'07\"",
        weight: "24.3 lbs."
    },
    {
        name: "Dragapult",
        imageUrl: "images/887Dragapult.png",
        number: "887",
        type: ["Dragon", "Ghost"],
        category: "Stealth",
        region: "Galar",
        height: "9'10\"",
        weight: "110.2 lbs."
    },
    {
        name: "Zacian (Crowned Sword)",
        imageUrl: "images/888Zacian.png",
        number: "888",
        type: ["Fairy", "Steel"],
        category: "Warrior",
        region: "Galar",
        height: "9'02\"",
        weight: "782.6 lbs."
    },
    {
        name: "Zacian (Hero of Many Battles)",
        imageUrl: "forms/888Zacian-Hero.png",
        number: "888",
        type: ["Fairy"],
        category: "Warrior",
        region: "Galar",
        height: "9'02\"",
        weight: "242.5 lbs."
    },
    {
        name: "Zamazenta (Crowned Shield)",
        imageUrl: "images/889Zamazenta.png",
        number: "889",
        type: ["Fighting", "Steel"],
        category: "Warrior",
        region: "Galar",
        height: "9'06\"",
        weight: "1730.6 lbs."
    },
    {
        name: "Zamazenta (Hero of Many Battles)",
        imageUrl: "forms/889Zamazenta-Hero.png",
        number: "889",
        type: ["Fighting"],
        category: "Warrior",
        region: "Galar",
        height: "9'06\"",
        weight: "463.0 lbs."
    },
    {
        name: "Eternatus",
        imageUrl: "images/890Eternatus.png",
        number: "890",
        type: ["Poison", "Dragon"],
        category: "Gigantic",
        region: "Galar",
        height: "65'07\"",
        weight: "2094.4 lbs."
    },
    {
        name: "Eternamax Eternatus",
        imageUrl: "forms/890Eternatus-Eternamax.png",
        number: "890",
        type: ["Poison", "Dragon"],
        category: "Gigantic",
        region: "Galar",
        height: "328'01\"",
        weight: "??? lbs."
    },
    {
        name: "Kubfu",
        imageUrl: "images/891Kubfu.png",
        number: "891",
        type: ["Fighting"],
        category: "Wushu",
        region: "Galar",
        height: "2'00\"",
        weight: "26.5 lbs."
    },
    {
        name: "Urshifu (Single Strike Style)",
        imageUrl: "images/892Urshifu.png",
        number: "892",
        type: ["Fighting", "Dark"],
        category: "Wushu",
        region: "Galar",
        height: "6'03\"",
        weight: "231.5 lbs."
    },
    {
        name: "Gigantamax Urshifu (Single Strike Style)",
        imageUrl: "forms/892Urshifu-Gigantamax_Single_Strike.png",
        number: "892",
        type: ["Fighting", "Dark"],
        category: "Wushu",
        region: "Galar",
        height: "95'02\"+",
        weight: "??? lbs."
    },
    {
        name: "Urshifu (Rapid Strike Style)",
        imageUrl: "forms/892Urshifu-Rapid_Strike.png",
        number: "892",
        type: ["Fighting", "Water"],
        category: "Wushu",
        region: "Galar",
        height: "6'03\"",
        weight: "231.5 lbs."
    },
    {
        name: "Gigantamax Urshifu (Rapid Strike Style)",
        imageUrl: "forms/892Urshifu-Gigantamax_Rapid_Strike.png",
        number: "892",
        type: ["Fighting", "Water"],
        category: "Wushu",
        region: "Galar",
        height: "85'04\"+",
        weight: "??? lbs."
    },
    {
        name: "Zarude",
        imageUrl: "images/893Zarude.png",
        number: "893",
        type: ["Dark", "Grass"],
        category: "Rogue Monkey",
        region: "Galar",
        height: "5'11\"",
        weight: "154.3 lbs."
    },
    {
        name: "Regieleki",
        imageUrl: "images/894Regieleki.png",
        number: "894",
        type: ["Electric"],
        category: "Electron",
        region: "Galar",
        height: "3'11\"",
        weight: "319.7 lbs."
    },
    {
        name: "Regidrago",
        imageUrl: "images/895Regidrago.png",
        number: "895",
        type: ["Dragon"],
        category: "Dragon Orb",
        region: "Galar",
        height: "6'11\"",
        weight: "440.9 lbs."
    },
    {
        name: "Glastrier",
        imageUrl: "images/896Glastrier.png",
        number: "896",
        type: ["Ice"],
        category: "Wild Horse",
        region: "Galar",
        height: "7'03\"",
        weight: "1763.7 lbs."
    },
    {
        name: "Spectrier",
        imageUrl: "images/897Spectrier.png",
        number: "897",
        type: ["Ghost"],
        category: "Swift Horse",
        region: "Galar",
        height: "6'07\"",
        weight: "98.1 lbs."
    },
    {
        name: "Calyrex",
        imageUrl: "images/898Calyrex.png",
        number: "898",
        type: ["Psychic", "Grass"],
        category: "King",
        region: "Galar",
        height: "3'07\"",
        weight: "17.0 lbs."
    },
    {
        name: "Ice Rider Calyrex",
        imageUrl: "forms/898Calyrex-Ice_Rider.png",
        number: "898",
        type: ["Psychic", "Ice"],
        category: "High King",
        region: "Galar",
        height: "7'10\"",
        weight: "1783.8 lbs."
    },
    {
        name: "Shadow Rider Calyrex",
        imageUrl: "forms/898Calyrex-Shadow_Rider.png",
        number: "898",
        type: ["Psychic", "Ghost"],
        category: "High King",
        region: "Galar",
        height: "7'10\"",
        weight: "118.2 lbs."
    },
    {
        name: "Wyrdeer",
        imageUrl: "images/899Wyrdeer.png",
        number: "899",
        type: ["Normal", "Psychic"],
        category: "Big Horn",
        region: "Galar",
        height: "5'11\"",
        weight: "209.7 lbs."
    },
    {
        name: "Kleavor",
        imageUrl: "images/900Kleavor.png",
        number: "900",
        type: ["Bug", "Rock"],
        category: "Axe",
        region: "Galar",
        height: "5'11\"",
        weight: "129.2 lbs."
    },
    {
        name: "Ursaluna",
        imageUrl: "images/901Ursaluna.png",
        number: "901",
        type: ["Ground", "Normal"],
        category: "Peat",
        region: "Galar",
        height: "7'10\"",
        weight: "639.3 lbs."
    },
    {
        name: "Basculegion (Male)",
        imageUrl: "images/902Basculegion.png",
        number: "902",
        type: ["Water", "Ghost"],
        category: "Big Fish",
        region: "Galar",
        height: "9'10\"",
        weight: "242.5 lbs."
    },
    {
        name: "Basculegion (Female)",
        imageUrl: "forms/902Basculegion-Female.png",
        number: "902",
        type: ["Water", "Ghost"],
        category: "Big Fish",
        region: "Galar",
        height: "9'10\"",
        weight: "242.5 lbs."
    },
    {
        name: "Sneasler",
        imageUrl: "images/903Sneasler.png",
        number: "903",
        type: ["Fighting", "Poison"],
        category: "Free Climb",
        region: "Galar",
        height: "4'03\"",
        weight: "94.8 lbs."
    },
    {
        name: "Overqwil",
        imageUrl: "images/904Overqwil.png",
        number: "904",
        type: ["Dark", "Poison"],
        category: "Pin Cluster",
        region: "Galar",
        height: "8'02\"",
        weight: "133.4 lbs."
    },
    {
        name: "Enamorus (Incarnate Forme)",
        imageUrl: "images/905Enamorus.png",
        number: "905",
        type: ["Fairy", "Flying"],
        category: "Love-Hate",
        region: "Galar",
        height: "5'03\"",
        weight: "105.8 lbs."
    },
    {
        name: "Enamorus (Therian Forme)",
        imageUrl: "forms/905Enamorus-Therian.png",
        number: "905",
        type: ["Fairy", "Flying"],
        category: "Love-Hate",
        region: "Galar",
        height: "5'03\"",
        weight: "105.8 lbs."
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
        let pokemonHeight = document.createElement("p")
        pokemonHeight.append("Height: " , pocketMonster.height)
        let pokemonWeight = document.createElement("p")
        pokemonWeight.append("Weight: " , pocketMonster.weight)
        divVariable.append(pokemonName)
        divVariable.append(pokemonImage)
        divVariable.append(pokemonNumber)
        divVariable.append(pokemonType)
        divVariable.append(pokemonCategory)
        divVariable.append(pokemonRegion)
        divVariable.append(pokemonHeight)
        divVariable.append(pokemonWeight)
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
let heightId = document.getElementById("height_input").value
let weightId = document.getElementById("weight_input").value

let filterPokemon = nationalDex.filter(searching => searching.name.toLowerCase().indexOf(nameId.toLowerCase()) > -1 )
.filter(searching => searching.number.indexOf(numberId) > -1 )
.filter(searching => String(searching.type).toLowerCase().indexOf(typeId.toLowerCase()) > -1 )
.filter(searching => searching.category.toLowerCase().indexOf(categoryId.toLowerCase()) > -1 )
.filter(searching => searching.region.toLowerCase().indexOf(regionId.toLowerCase()) > -1 )
.filter(searching => searching.height.toLowerCase().indexOf(heightId.toLowerCase()) > -1 )
.filter(searching => searching.weight.toLowerCase().indexOf(weightId.toLowerCase()) > -1 )

function coloring(){
    let typeColor = document.getElementById("type_input").value

    if (typeColor === "Normal" || typeColor === "normal" || typeColor === "NORMAL") {
        document.body.style.backgroundColor = "#a8a878"
    }
    else if (typeColor === "Fire" || typeColor === "fire" || typeColor === "FIRE") {
        document.body.style.backgroundColor = "#f08030"
    }
    else if (typeColor === "Water" || typeColor === "water" || typeColor === "WATER") {
        document.body.style.backgroundColor = "#6890f0"
    }
    else if (typeColor === "Electric" || typeColor === "electric" || typeColor === "ELECTRIC") {
        document.body.style.backgroundColor = "#f8d030"
    }
    else if (typeColor === "Grass" || typeColor === "grass" || typeColor === "GRASS") {
        document.body.style.backgroundColor = "#78c850"
    }
    else if (typeColor === "Ice" || typeColor === "ice" || typeColor === "ICE") {
        document.body.style.backgroundColor = "#98d8d8"
    }
    else if (typeColor === "Fighting" || typeColor === "fighting" || typeColor === "FIGHTING") {
        document.body.style.backgroundColor = "#c03028"
    }
    else if (typeColor === "Poison" || typeColor === "poison" || typeColor === "POISON") {
        document.body.style.backgroundColor = "#a040a0"
    }
    else if (typeColor === "Ground" || typeColor === "ground" || typeColor === "GROUND") {
        document.body.style.backgroundColor = "#e0c068"
    }
    else if (typeColor === "Flying" || typeColor === "flying" || typeColor === "FLYING") {
        document.body.style.backgroundColor = "#a890f0"
    }
    else if (typeColor === "Psychic" || typeColor === "psychic" || typeColor === "PSYCHIC") {
        document.body.style.backgroundColor = "#f85888"
    }
    else if (typeColor === "Bug" || typeColor === "bug" || typeColor === "BUG") {
        document.body.style.backgroundColor = "#a8b820"
    }
    else if (typeColor === "Rock" || typeColor === "rock" || typeColor === "ROCK") {
        document.body.style.backgroundColor = "#b8a038"
    }
    else if (typeColor === "Ghost" || typeColor === "ghost" || typeColor === "GHOST") {
        document.body.style.backgroundColor = "#705898"
    }
    else if (typeColor === "Dragon" || typeColor === "dragon" || typeColor === "DRAGON") {
        document.body.style.backgroundColor = "#7038f8"
    }
    else if (typeColor === "Dark" || typeColor === "dark" || typeColor === "DARK") {
        document.body.style.backgroundColor = "#705848"
    }
    else if (typeColor === "Steel" || typeColor === "steel" || typeColor === "STEEL") {
        document.body.style.backgroundColor = "#b8b8d0"
    }
    else if (typeColor === "Fairy" || typeColor === "fairy" || typeColor === "FAIRY") {
        document.body.style.backgroundColor = "#ee99ac"
    }
    else {
        document.body.style.backgroundColor = "darkturquoise"
    }
}  

dexRender(filterPokemon)
coloring()
}