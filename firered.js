//FireRed Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Bulbasaur",
            imageUrl: "images/001Bulbasaur.png",
            number: "001",
            type: ["Grass", "Poison"],
            category: "Seed",
            region: "Kanto",
            generation: "1",
            height: "2'04\"",
            weight: "15.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 6.9,
            dexEntry: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
            cryUrl: "cries/001.mp3",
            japaneseName: "Fushigidane"
        },
        {
            name: "Ivysaur",
            imageUrl: "images/002Ivysaur.png",
            number: "002",
            type: ["Grass", "Poison"],
            category: "Seed",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 13.0,
            dexEntry: "There is a plant bulb on its back. When it absorbs nutrients, the bulb is said to blossom into a large flower.",
            cryUrl: "cries/002.mp3",
            japaneseName: "Fushigisou"
        },
        {
            name: "Venusaur",
            imageUrl: "images/003Venusaur.png",
            number: "003",
            type: ["Grass", "Poison"],
            category: "Seed",
            region: "Kanto",
            generation: "1",
            height: "6'07\"",
            weight: "220.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 100.0,
            dexEntry: "A bewitching aroma wafts from its flower. The fragrance becalms those engaged in a battle.",
            cryUrl: "cries/003.mp3",
            japaneseName: "Fushigibana"
        },
        {
            name: "Charmander",
            imageUrl: "images/004Charmander.png",
            number: "004",
            type: ["Fire"],
            category: "Lizard",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.5,
            dexEntry: "From the time it is born, a flame burns at the tip of its tail. Its life would end if the flame were to go out.",
            cryUrl: "cries/004.mp3",
            japaneseName: "Hitokage"
        },
        {
            name: "Charmeleon",
            imageUrl: "images/005Charmeleon.png",
            number: "005",
            type: ["Fire"],
            category: "Flame",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "41.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 19.0,
            dexEntry: "It lashes about with its tail to knock down its foe. It then tears up the fallen opponent with sharp claws.",
            cryUrl: "cries/005.mp3",
            japaneseName: "Lizardo"
        },
        {
            name: "Charizard",
            imageUrl: "images/006Charizard.png",
            number: "006",
            type: ["Fire", "Flying"],
            category: "Flame",
            region: "Kanto",
            generation: "1",
            height: "5'07\"",
            weight: "199.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 90.5,
            dexEntry: "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
            cryUrl: "cries/006.mp3",
            japaneseName: "Lizardon"
        },
        {
            name: "Squirtle",
            imageUrl: "images/007Squirtle.png",
            number: "007",
            type: ["Water"],
            category: "Tiny Turtle",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.0,
            dexEntry: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
            cryUrl: "cries/007.mp3",
            japaneseName: "Zenigame"
        },
        {
            name: "Wartortle",
            imageUrl: "images/008Wartortle.png",
            number: "008",
            type: ["Water"],
            category: "Turtle",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "49.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 22.5,
            dexEntry: "This Pokémon is very popular as a pet. Its fur-covered tail is a symbol of its longevity.",
            cryUrl: "cries/008.mp3",
            japaneseName: "Kameil"
        },
        {
            name: "Blastoise",
            imageUrl: "images/009Blastoise.png",
            number: "009",
            type: ["Water"],
            category: "Shellfish",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "188.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 85.5,
            dexEntry: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
            cryUrl: "cries/009.mp3",
            japaneseName: "Kamex"
        },
        {
            name: "Caterpie",
            imageUrl: "images/010Caterpie.png",
            number: "010",
            type: ["Bug"],
            category: "Worm",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "6.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.9,
            dexEntry: "It is covered with a green skin. When it grows, it sheds the skin, covers itself with silk, and becomes a cocoon.",
            cryUrl: "cries/010.mp3",
            japaneseName: "Caterpie"
        },
        {
            name: "Metapod",
            imageUrl: "images/011Metapod.png",
            number: "011",
            type: ["Bug"],
            category: "Cocoon",
            region: "Kanto",
            generation: "1",
            height: "2'04\"",
            weight: "21.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 9.9,
            dexEntry: "Even though it is encased in a sturdy shell, the body inside is tender. It can't withstand a harsh attack.",
            cryUrl: "cries/011.mp3",
            japaneseName: "Transel"
        },
        {
            name: "Butterfree",
            imageUrl: "images/012Butterfree.png",
            number: "012",
            type: ["Bug", "Flying"],
            category: "Butterfly",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "70.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 32.0,
            dexEntry: "The wings are protected by a rain-repellent dust. As a result, this Pokémon can fly about even in rain.",
            cryUrl: "cries/012.mp3",
            japaneseName: "Butterfree"
        },
        {
            name: "Weedle",
            imageUrl: "images/013Weedle.png",
            number: "013",
            type: ["Bug", "Poison"],
            category: "Hairy Bug",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "7.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.2,
            dexEntry: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
            cryUrl: "cries/013.mp3",
            japaneseName: "Beedle"
        },
        {
            name: "Kakuna",
            imageUrl: "images/014Kakuna.png",
            number: "014",
            type: ["Bug", "Poison"],
            category: "Cocoon",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.0,
            dexEntry: "This Pokémon is in a temporary stage while making its body. It is almost completely unable to move on its own.",
            cryUrl: "cries/014.mp3",
            japaneseName: "Cocoon"
        },
        {
            name: "Beedrill",
            imageUrl: "images/015Beedrill.png",
            number: "015",
            type: ["Bug", "Poison"],
            category: "Poison Bee",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "65.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.5,
            dexEntry: "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear.",
            cryUrl: "cries/015.mp3",
            japaneseName: "Spear"
        },
        {
            name: "Pidgey",
            imageUrl: "images/016Pidgey.png",
            number: "016",
            type: ["Normal", "Flying"],
            category: "Tiny Bird",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "4.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.8,
            dexEntry: "Does not like to fight. It hides in tall grass and so on, foraging for food such as small bugs.",
            cryUrl: "cries/016.mp3",
            japaneseName: "Poppo"
        },
        {
            name: "Pidgeotto",
            imageUrl: "images/017Pidgeotto.png",
            number: "017",
            type: ["Normal", "Flying"],
            category: "Bird",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 30.0,
            dexEntry: "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.",
            cryUrl: "cries/017.mp3",
            japaneseName: "Pigeon"
        },
        {
            name: "Pidgeot",
            imageUrl: "images/018Pidgeot.png",
            number: "018",
            type: ["Normal", "Flying"],
            category: "Bird",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "87.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 39.5,
            dexEntry: "It spreads its gorgeous wings widely to intimidate enemies. It races through the skies at Mach-2 speed.",
            cryUrl: "cries/018.mp3",
            japaneseName: "Pigeot"
        },
        {
            name: "Rattata",
            imageUrl: "images/019Rattata.png",
            number: "019",
            type: ["Normal"],
            category: "Mouse",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "7.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.5,
            dexEntry: "Its fangs are long and very sharp. They grow continuously, so it gnaws on hard things to whittle them down.",
            cryUrl: "cries/019.mp3",
            japaneseName: "Koratta"
        },
        {
            name: "Raticate",
            imageUrl: "images/020Raticate.png",
            number: "020",
            type: ["Normal"],
            category: "Mouse",
            region: "Kanto",
            generation: "1",
            height: "2'04\"",
            weight: "40.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 18.5,
            dexEntry: "Its rear feet have three toes each. They are webbed, enabling it to swim across rivers.",
            cryUrl: "cries/020.mp3",
            japaneseName: "Ratta"
        },
        {
            name: "Spearow",
            imageUrl: "images/021Spearow.png",
            number: "021",
            type: ["Normal", "Flying"],
            category: "Tiny Bird",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "It busily flits around here and there. Even if it is frail, it can be a tough foe that uses Mirror Move.",
            cryUrl: "cries/021.mp3",
            japaneseName: "Onisuzume"
        },
        {
            name: "Fearow",
            imageUrl: "images/022Fearow.png",
            number: "022",
            type: ["Normal", "Flying"],
            category: "Beak",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.0,
            dexEntry: "Its huge and magnificent wings can keep it aloft in the sky. It can remain flying a whole day without landing.",
            cryUrl: "cries/022.mp3",
            japaneseName: "Onidrill"
        },
        {
            name: "Ekans",
            imageUrl: "images/023Ekans.png",
            number: "023",
            type: ["Poison"],
            category: "Snake",
            region: "Kanto",
            generation: "1",
            height: "6'07\"",
            weight: "15.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 6.9,
            dexEntry: "A very common sight in grassland, etc. It flicks its tongue in and out to sense danger in its surroundings.",
            cryUrl: "cries/023.mp3",
            japaneseName: "Arbo"
        },
        {
            name: "Arbok",
            imageUrl: "images/024Arbok.png",
            number: "024",
            type: ["Poison"],
            category: "Cobra",
            region: "Kanto",
            generation: "1",
            height: "11'06\"",
            weight: "143.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.5,
            metricWeight: 65.0,
            dexEntry: "The pattern on its belly appears to be a frightening face. Weak foes will flee just at the sight of the pattern.",
            cryUrl: "cries/024.mp3",
            japaneseName: "Arbok"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "025",
            type: ["Electric"],
            category: "Mouse",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.0,
            dexEntry: "It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "026",
            type: ["Electric"],
            category: "Mouse",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 30.0,
            dexEntry: "Its electric charges can reach even 100,000 volts. Careless contact can cause even an Indian elephant to faint.",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Sandshrew",
            imageUrl: "images/027Sandshrew.png",
            number: "027",
            type: ["Ground"],
            category: "Mouse",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.0,
            dexEntry: "It burrows and lives underground. If threatened, it curls itself up into a ball for protection.",
            cryUrl: "cries/027.mp3",
            japaneseName: "Sand"
        },
        {
            name: "Sandslash",
            imageUrl: "images/028Sandslash.png",
            number: "028",
            type: ["Ground"],
            category: "Mouse",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "65.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.5,
            dexEntry: "It is adept at attacking with the spines on its back and its sharp claws while quickly scurrying about.",
            cryUrl: "cries/028.mp3",
            japaneseName: "Sandpan"
        },
        {
            name: "Nidoran♀",
            imageUrl: "images/029NidoranF.png",
            number: "029",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "15.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.0,
            dexEntry: "Though small, it must be treated with caution because of its powerfully toxic barbs. The female has smaller horns.",
            cryUrl: "cries/029.mp3",
            japaneseName: "Nidoran♀"
        },
        {
            name: "Nidorina",
            imageUrl: "images/030Nidorina.png",
            number: "030",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.0,
            dexEntry: "The female has a gentle temperament. It emits ultrasonic cries that have the power to befuddle foes.",
            cryUrl: "cries/030.mp3",
            japaneseName: "Nidorina"
        },
        {
            name: "Nidoqueen",
            imageUrl: "images/031Nidoqueen.png",
            number: "031",
            type: ["Poison", "Ground"],
            category: "Drill",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 60.0,
            dexEntry: "The body is covered by stiff, needle-like scales. If it becomes excited, the needles bristle outwards.",
            cryUrl: "cries/031.mp3",
            japaneseName: "Nidoqueen"
        },
        {
            name: "Nidoran♂",
            imageUrl: "images/032NidoranM.png",
            number: "032",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.0,
            dexEntry: "Its large ears are flapped like wings when it is listening to distant sounds. It extends toxic barbs when angered.",
            cryUrl: "cries/032.mp3",
            japaneseName: "Nidoran♂"
        },
        {
            name: "Nidorino",
            imageUrl: "images/033Nidorino.png",
            number: "033",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "1",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "It is easily angered. By swinging its well-developed horn wildly, it can even punch through diamond.",
            cryUrl: "cries/033.mp3",
            japaneseName: "Nidorino"
        },
        {
            name: "Nidoking",
            imageUrl: "images/034Nidoking.png",
            number: "034",
            type: ["Poison", "Ground"],
            category: "Drill",
            region: "Kanto",
            generation: "1",
            height: "4'07\"",
            weight: "136.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 62.0,
            dexEntry: "It is recognized by its rock-hard hide and its extended horn. Be careful with the horn as it contains venom.",
            cryUrl: "cries/034.mp3",
            japaneseName: "Nidoking"
        },
        {
            name: "Clefairy",
            imageUrl: "images/035Clefairy.png",
            number: "035",
            type: ["Normal"],
            category: "Fairy",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.5,
            dexEntry: "Its adorable appearance makes it popular as a pet. However, it is rare and difficult to find.",
            cryUrl: "cries/035.mp3",
            japaneseName: "Pippi"
        },
        {
            name: "Clefable",
            imageUrl: "images/036Clefable.png",
            number: "036",
            type: ["Normal"],
            category: "Fairy",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.0,
            dexEntry: "It has an acute sense of hearing. It can easily hear a pin being dropped nearly 1,100 yards away.",
            cryUrl: "cries/036.mp3",
            japaneseName: "Pixy"
        },
        {
            name: "Vulpix",
            imageUrl: "images/037Vulpix.png",
            number: "037",
            type: ["Fire"],
            category: "Fox",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "21.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.9,
            dexEntry: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "images/038Ninetales.png",
            number: "038",
            type: ["Fire"],
            category: "Fox",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "43.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 19.9,
            dexEntry: "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Jigglypuff",
            imageUrl: "images/039Jigglypuff.png",
            number: "039",
            type: ["Normal"],
            category: "Balloon",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.5,
            dexEntry: "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody.",
            cryUrl: "cries/039.mp3",
            japaneseName: "Purin"
        },
        {
            name: "Wigglytuff",
            imageUrl: "images/040Wigglytuff.png",
            number: "040",
            type: ["Normal"],
            category: "Balloon",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 12.0,
            dexEntry: "Its fur is extremely fine, dense, and supple. The exquisitely pleasant fur conveys an image of luxury.",
            cryUrl: "cries/040.mp3",
            japaneseName: "Pukurin"
        },
        {
            name: "Zubat",
            imageUrl: "images/041Zubat.png",
            number: "041",
            type: ["Poison", "Flying"],
            category: "Bat",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 7.5,
            dexEntry: "It has no eyes. Instead, it relies on its ultrasonic cries for echo location to flit about in darkness.",
            cryUrl: "cries/041.mp3",
            japaneseName: "Zubat"
        },
        {
            name: "Golbat",
            imageUrl: "images/042Golbat.png",
            number: "042",
            type: ["Poison", "Flying"],
            category: "Bat",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "It clamps down on its prey with needle-sharp fangs and drains over 10 ounces of blood in one gulp.",
            cryUrl: "cries/042.mp3",
            japaneseName: "Golbat"
        },
        {
            name: "Oddish",
            imageUrl: "images/043Oddish.png",
            number: "043",
            type: ["Grass", "Poison"],
            category: "Weed",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "11.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.4,
            dexEntry: "Its scientific name is \"Oddium Wanderus.\" At night, it is said to walk nearly 1,000 feet on its two roots.",
            cryUrl: "cries/043.mp3",
            japaneseName: "Nazonokusa"
        },
        {
            name: "Gloom",
            imageUrl: "images/044Gloom.png",
            number: "044",
            type: ["Grass", "Poison"],
            category: "Weed",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "19.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 8.6,
            dexEntry: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
            cryUrl: "cries/044.mp3",
            japaneseName: "Kusaihana"
        },
        {
            name: "Vileplume",
            imageUrl: "images/045Vileplume.png",
            number: "045",
            type: ["Grass", "Poison"],
            category: "Flower",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "41.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 18.6,
            dexEntry: "Its petals are the largest in the world. It fiendishly scatters allergy-causing pollen from its petals.",
            cryUrl: "cries/045.mp3",
            japaneseName: "Ruffresia"
        },
        {
            name: "Paras",
            imageUrl: "images/046Paras.png",
            number: "046",
            type: ["Bug", "Grass"],
            category: "Mushroom",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "11.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 5.4,
            dexEntry: "Growing out of the bug's back are mushrooms called tochukaso. The mushrooms grow with the bug host.",
            cryUrl: "cries/046.mp3",
            japaneseName: "Paras"
        },
        {
            name: "Parasect",
            imageUrl: "images/047Parasect.png",
            number: "047",
            type: ["Bug", "Grass"],
            category: "Mushroom",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "65.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.5,
            dexEntry: "It scatters toxic spores from the mushroom cap. In China, the spores are used as herbal medicine.",
            cryUrl: "cries/047.mp3",
            japaneseName: "Parasect"
        },
        {
            name: "Venonat",
            imageUrl: "images/048Venonat.png",
            number: "048",
            type: ["Bug", "Poison"],
            category: "Insect",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 30.0,
            dexEntry: "Its eyes act as radar, enabling it to be active in darkness. The eyes can also shoot powerful beams.",
            cryUrl: "cries/048.mp3",
            japaneseName: "Kongpang"
        },
        {
            name: "Venomoth",
            imageUrl: "images/049Venomoth.png",
            number: "049",
            type: ["Bug", "Poison"],
            category: "Poison Moth",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 12.5,
            dexEntry: "The wings are covered with dustlike scales. Every time it flaps its wings, it looses highly toxic dust.",
            cryUrl: "cries/049.mp3",
            japaneseName: "Morphon"
        },
        {
            name: "Diglett",
            imageUrl: "images/050Diglett.png",
            number: "050",
            type: ["Ground"],
            category: "Mole",
            region: "Kanto",
            generation: "1",
            height: "0'08\"",
            weight: "1.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.8,
            dexEntry: "It burrows through the ground at a shallow depth. It leaves raised earth in its wake, making it easy to spot.",
            cryUrl: "cries/050.mp3",
            japaneseName: "Digda"
        },
        {
            name: "Dugtrio",
            imageUrl: "images/051Dugtrio.png",
            number: "051",
            type: ["Ground"],
            category: "Mole",
            region: "Kanto",
            generation: "1",
            height: "2'04\"",
            weight: "73.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 33.3,
            dexEntry: "In battle, it digs through the ground and strikes the unsuspecting foe from an unexpected direction.",
            cryUrl: "cries/051.mp3",
            japaneseName: "Dugtrio"
        },
        {
            name: "Meowth",
            imageUrl: "images/052Meowth.png",
            number: "052",
            type: ["Normal"],
            category: "Scratch Cat",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "9.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.2,
            dexEntry: "All it does is sleep during the daytime. At night, it patrols its territory with its eyes aglow.",
            cryUrl: "cries/052.mp3",
            japaneseName: "Nyarth"
        },
        {
            name: "Persian",
            imageUrl: "images/053Persian.png",
            number: "053",
            type: ["Normal"],
            category: "Classy Cat",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "70.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 32.0,
            dexEntry: "Has a vicious temperament. Beware if it raises its tail straight up. It is a signal that it is about to pounce and bite.",
            cryUrl: "cries/053.mp3",
            japaneseName: "Persian"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "054",
            type: ["Water"],
            category: "Duck",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "43.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.6,
            dexEntry: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "055",
            type: ["Water"],
            category: "Duck",
            region: "Kanto",
            generation: "1",
            height: "5'07\"",
            weight: "168.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 76.6,
            dexEntry: "The forelegs are webbed, helping to make it an adept swimmer. It can be seen swimming elegantly in lakes, etc.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Mankey",
            imageUrl: "images/056Mankey.png",
            number: "056",
            type: ["Fighting"],
            category: "Pig Monkey",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 28.0,
            dexEntry: "Light and agile on its feet, and ferocious in temperament. When angered, it flies into an uncontrollable frenzy.",
            cryUrl: "cries/056.mp3",
            japaneseName: "Mankey"
        },
        {
            name: "Primeape",
            imageUrl: "images/057Primeape.png",
            number: "057",
            type: ["Fighting"],
            category: "Pig Monkey",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "70.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 32.0,
            dexEntry: "It is always outrageously furious. If it gives chase, it will tenaciously track the target no matter how far.",
            cryUrl: "cries/057.mp3",
            japaneseName: "Okorizaru"
        },
        {
            name: "Growlithe",
            imageUrl: "images/058Growlithe.png",
            number: "058",
            type: ["Fire"],
            category: "Puppy",
            region: "Kanto",
            generation: "1",
            height: "2'04\"",
            weight: "41.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 19.0,
            dexEntry: "Very friendly and faithful to people. It will try to repel enemies by barking and biting.",
            cryUrl: "cries/058.mp3",
            japaneseName: "Gardie"
        },
        {
            name: "Arcanine",
            imageUrl: "images/059Arcanine.png",
            number: "059",
            type: ["Fire"],
            category: "Legendary",
            region: "Kanto",
            generation: "1",
            height: "6'03\"",
            weight: "341.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 155.0,
            dexEntry: "A Pokémon that is described in Chinese legends. It is said to race at an unbelievable speed.",
            cryUrl: "cries/059.mp3",
            japaneseName: "Windie"
        },
        {
            name: "Poliwag",
            imageUrl: "images/060Poliwag.png",
            number: "060",
            type: ["Water"],
            category: "Tadpole",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "27.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.4,
            dexEntry: "Its slick black skin is thin and damp. A part of its internal organs can be seen through the skin as a spiral pattern.",
            cryUrl: "cries/060.mp3",
            japaneseName: "Nyoromo"
        },
        {
            name: "Poliwhirl",
            imageUrl: "images/061Poliwhirl.png",
            number: "061",
            type: ["Water"],
            category: "Tadpole",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 20.0,
            dexEntry: "Its two legs are well developed. Even though it can live on the ground, it prefers living in water.",
            cryUrl: "cries/061.mp3",
            japaneseName: "Nyorozo"
        },
        {
            name: "Poliwrath",
            imageUrl: "images/062Poliwrath.png",
            number: "062",
            type: ["Water", "Fighting"],
            category: "Tadpole",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 54.0,
            dexEntry: "An adept swimmer, it knows the front crawl, butterfly, and more. It is faster than the best human swimmers.",
            cryUrl: "cries/062.mp3",
            japaneseName: "Nyorobon"
        },
        {
            name: "Abra",
            imageUrl: "images/063Abra.png",
            number: "063",
            type: ["Psychic"],
            category: "Psi",
            region: "Kanto",
            generation: "1",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "It sleeps for 18 hours a day. It uses a variety of extrasensory powers even while asleep.",
            cryUrl: "cries/063.mp3",
            japaneseName: "Casey"
        },
        {
            name: "Kadabra",
            imageUrl: "images/064Kadabra.png",
            number: "064",
            type: ["Psychic"],
            category: "Psi",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "124.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 56.5,
            dexEntry: "It happened one morning - a boy with extrasensory powers awoke in bed transformed into Kadabra.",
            cryUrl: "cries/064.mp3",
            japaneseName: "Yungerer"
        },
        {
            name: "Alakazam",
            imageUrl: "images/065Alakazam.png",
            number: "065",
            type: ["Psychic"],
            category: "Psi",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "105.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 48.0,
            dexEntry: "It does not like physical attacks very much. Instead, it freely uses extra-sensory powers to defeat foes.",
            cryUrl: "cries/065.mp3",
            japaneseName: "Foodin"
        },
        {
            name: "Machop",
            imageUrl: "images/066Machop.png",
            number: "066",
            type: ["Fighting"],
            category: "Superpower",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.5,
            dexEntry: "Its whole body is composed of muscles. Even though it's the size of a human child, it can hurl 100 grown-ups.",
            cryUrl: "cries/066.mp3",
            japaneseName: "Wanriky"
        },
        {
            name: "Machoke",
            imageUrl: "images/067Machoke.png",
            number: "067",
            type: ["Fighting"],
            category: "Superpower",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "155.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 70.5,
            dexEntry: "Its formidable body never gets tired. It helps people by doing work such as the moving of heavy goods.",
            cryUrl: "cries/067.mp3",
            japaneseName: "Goriky"
        },
        {
            name: "Machamp",
            imageUrl: "images/068Machamp.png",
            number: "068",
            type: ["Fighting"],
            category: "Superpower",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "286.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 130.0,
            dexEntry: "Its four ruggedly developed arms can launch a flurry of 1,000 punches in just two seconds.",
            cryUrl: "cries/068.mp3",
            japaneseName: "Kairiky"
        },
        {
            name: "Bellsprout",
            imageUrl: "images/069Bellsprout.png",
            number: "069",
            type: ["Grass", "Poison"],
            category: "Flower",
            region: "Kanto",
            generation: "1",
            height: "2'04\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 4.0,
            dexEntry: "Its bud looks like a human face. Because of the bud, it is rumored to be a type of legendary mandrake plant",
            cryUrl: "cries/069.mp3",
            japaneseName: "Madatsubomi"
        },
        {
            name: "Weepinbell",
            imageUrl: "images/070Weepinbell.png",
            number: "070",
            type: ["Grass", "Poison"],
            category: "Flycatcher",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "14.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 6.4,
            dexEntry: "The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.",
            cryUrl: "cries/070.mp3",
            japaneseName: "Utsudon"
        },
        {
            name: "Victreebel",
            imageUrl: "images/071Victreebel.png",
            number: "071",
            type: ["Grass", "Poison"],
            category: "Flycatcher",
            region: "Kanto",
            generation: "1",
            height: "5'07\"",
            weight: "34.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 15.5,
            dexEntry: "Lures prey into its mouth with a honeylike aroma. The helpless prey is melted with a dissolving fluid.",
            cryUrl: "cries/071.mp3",
            japaneseName: "Utsubot"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "072",
            type: ["Water", "Poison"],
            category: "Jellyfish",
            region: "Kanto",
            generation: "1",
            height: "2'11\"",
            weight: "100.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 45.5,
            dexEntry: "Its eyes are as transparent as crystals. From them, it shoots mysterious beams of light.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "073",
            type: ["Water", "Poison"],
            category: "Jellyfish",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "It has 80 tentacles that move about freely. They can sting, causing poisoning and sharp, stabbing pain.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Geodude",
            imageUrl: "images/074Geodude.png",
            number: "074",
            type: ["Rock", "Ground"],
            category: "Rock",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 20.0,
            dexEntry: "Its round form makes it easy to pick up. Some people have used them to hurl at each other in a snowball fight.",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "images/075Graveler.png",
            number: "075",
            type: ["Rock", "Ground"],
            category: "Rock",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "231.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 105.0,
            dexEntry: "Be careful while hiking on mountain trails. Graveler may come rolling down the path without slowing.",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "images/076Golem.png",
            number: "076",
            type: ["Rock", "Ground"],
            category: "Megaton",
            region: "Kanto",
            generation: "1",
            height: "4'07\"",
            weight: "661.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 300.0,
            dexEntry: "It is enclosed in a hard shell that is as rugged as slabs of rock. It sheds skin once a year to grow larger.",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Ponyta",
            imageUrl: "images/077Ponyta.png",
            number: "077",
            type: ["Fire"],
            category: "Fire Horse",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 30.0,
            dexEntry: "Its body is light, and its legs are incredibly powerful. It can clear Ayers Rock in one leap.",
            cryUrl: "cries/077.mp3",
            japaneseName: "Ponyta"
        },
        {
            name: "Rapidash",
            imageUrl: "images/078Rapidash.png",
            number: "078",
            type: ["Fire"],
            category: "Fire Horse",
            region: "Kanto",
            generation: "1",
            height: "5'07\"",
            weight: "209.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 95.0,
            dexEntry: "It can gallop at a top speed of 150 miles per hour. It can race as fast as a bullet train while ablaze.",
            cryUrl: "cries/078.mp3",
            japaneseName: "Gallop"
        },
        {
            name: "Slowpoke",
            imageUrl: "images/079Slowpoke.png",
            number: "079",
            type: ["Water", "Psychic"],
            category: "Dopey",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "79.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 36.0,
            dexEntry: "It is always vacantly lost in thought, but no one knows what it is thinking about. It is good at fishing with its tail.",
            cryUrl: "cries/079.mp3",
            japaneseName: "Yadon"
        },
        {
            name: "Slowbro",
            imageUrl: "images/080Slowbro.png",
            number: "080",
            type: ["Water", "Psychic"],
            category: "Hermit Crab",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "173.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 78.5,
            dexEntry: "When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.",
            cryUrl: "cries/080.mp3",
            japaneseName: "Yadoran"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "081",
            type: ["Electric", "Steel"],
            category: "Magnet",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.0,
            dexEntry: "It moves while constantly hovering. It discharges Thunder Wave and so on from the units at its sides.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "082",
            type: ["Electric", "Steel"],
            category: "Magnet",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 60.0,
            dexEntry: "A linked cluster formed of several Magnemite. It discharges powerful magnetic waves at high voltage.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Farfetch'd",
            imageUrl: "images/083Farfetch'd.png",
            number: "083",
            type: ["Normal", "Flying"],
            category: "Wild Duck",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 15.0,
            dexEntry: "It always walks about with a plant stalk clamped in its beak. The stalk is used for building its nest.",
            cryUrl: "cries/083.mp3",
            japaneseName: "Kamonegi"
        },
        {
            name: "Doduo",
            imageUrl: "images/084Doduo.png",
            number: "084",
            type: ["Normal", "Flying"],
            category: "Twin Bird",
            region: "Kanto",
            generation: "1",
            height: "4'07\"",
            weight: "86.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 39.2,
            dexEntry: "A two-headed Pokémon that was discovered as a sudden mutation. It runs at a pace of over 60 miles per hour.",
            cryUrl: "cries/084.mp3",
            japaneseName: "Dodo"
        },
        {
            name: "Dodrio",
            imageUrl: "images/085Dodrio.png",
            number: "085",
            type: ["Normal", "Flying"],
            category: "Triple Bird",
            region: "Kanto",
            generation: "1",
            height: "5'11\"",
            weight: "187.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 85.2,
            dexEntry: "An odd species that is rarely found. The three heads respectively represent joy, sadness, and anger.",
            cryUrl: "cries/085.mp3",
            japaneseName: "Dodorio"
        },
        {
            name: "Seel",
            imageUrl: "images/086Seel.png",
            number: "086",
            type: ["Water"],
            category: "Sea Lion",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "198.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 90.0,
            dexEntry: "Covered with light blue fur, its hide is thick and tough. It is active in bitter cold of minus 40 degrees Fahrenheit.",
            cryUrl: "cries/086.mp3",
            japaneseName: "Pawou"
        },
        {
            name: "Dewgong",
            imageUrl: "images/087Dewgong.png",
            number: "087",
            type: ["Water", "Ice"],
            category: "Sea Lion",
            region: "Kanto",
            generation: "1",
            height: "5'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 120.0,
            dexEntry: "Its body is covered with a pure white fur. The colder the weather, the more active it becomes.",
            cryUrl: "cries/087.mp3",
            japaneseName: "Jugon"
        },
        {
            name: "Grimer",
            imageUrl: "images/088Grimer.png",
            number: "088",
            type: ["Poison"],
            category: "Sludge",
            region: "Kanto",
            generation: "1",
            height: "2'11\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 30.0,
            dexEntry: "Sludge exposed to X rays from the moon transformed into Grimer. It loves feeding on filthy things.",
            cryUrl: "cries/088.mp3",
            japaneseName: "Betbeter"
        },
        {
            name: "Muk",
            imageUrl: "images/089Muk.png",
            number: "089",
            type: ["Poison"],
            category: "Sludge",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 30.0,
            dexEntry: "It is usually undetectable because it blends in with the ground. Touching it can cause terrible poisoning.",
            cryUrl: "cries/089.mp3",
            japaneseName: "Betbeton"
        },
        {
            name: "Shellder",
            imageUrl: "images/090Shellder.png",
            number: "090",
            type: ["Water"],
            category: "Bivalve",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 4.0,
            dexEntry: "It is encased in a shell that is harder than diamond. Inside, however, it is surprisingly tender.",
            cryUrl: "cries/090.mp3",
            japaneseName: "Shellder"
        },
        {
            name: "Cloyster",
            imageUrl: "images/091Cloyster.png",
            number: "091",
            type: ["Water", "Ice"],
            category: "Bivalve",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "292.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 132.5,
            dexEntry: "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.",
            cryUrl: "cries/091.mp3",
            japaneseName: "Parshen"
        },
        {
            name: "Gastly",
            imageUrl: "images/092Gastly.png",
            number: "092",
            type: ["Ghost", "Poison"],
            category: "Gas",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "0.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 0.1,
            dexEntry: "A being that exists as a thin gas. It can topple an Indian elephant by enveloping the prey in two seconds.",
            cryUrl: "cries/092.mp3",
            japaneseName: "Ghos"
        },
        {
            name: "Haunter",
            imageUrl: "images/093Haunter.png",
            number: "093",
            type: ["Ghost", "Poison"],
            category: "Gas",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "0.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 0.1,
            dexEntry: "If you get the feeling of being watched in darkness when nobody is around, Haunter is there.",
            cryUrl: "cries/093.mp3",
            japaneseName: "Ghost"
        },
        {
            name: "Gengar",
            imageUrl: "images/094Gengar.png",
            number: "094",
            type: ["Ghost", "Poison"],
            category: "Shadow",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 40.5,
            dexEntry: "It is said to emerge from darkness to steal the lives of those who become lost in mountains.",
            cryUrl: "cries/094.mp3",
            japaneseName: "Gangar"
        },
        {
            name: "Onix",
            imageUrl: "images/095Onix.png",
            number: "095",
            type: ["Rock", "Ground"],
            category: "Rock Snake",
            region: "Kanto",
            generation: "1",
            height: "28'10\"",
            weight: "463.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 8.8,
            metricWeight: 210.0,
            dexEntry: "It usually lives underground. It searches for food while boring its way through the ground at 50 miles per hour.",
            cryUrl: "cries/095.mp3",
            japaneseName: "Iwark"
        },
        {
            name: "Drowzee",
            imageUrl: "images/096Drowzee.png",
            number: "096",
            type: ["Psychic"],
            category: "Hypnosis",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "71.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 32.4,
            dexEntry: "A descendant of the legendary animal baku, which is said to eat dreams. It is skilled at hypnotism.",
            cryUrl: "cries/096.mp3",
            japaneseName: "Sleepe"
        },
        {
            name: "Hypno",
            imageUrl: "images/097Hypno.png",
            number: "097",
            type: ["Psychic"],
            category: "Hypnosis",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "71.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 75.6,
            dexEntry: "It carries a pendulum-like device. There once was an incident in which it took away a child it hypnotized.",
            cryUrl: "cries/097.mp3",
            japaneseName: "Sleeper"
        },
        {
            name: "Krabby",
            imageUrl: "images/098Krabby.png",
            number: "098",
            type: ["Water"],
            category: "River Crab",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.5,
            dexEntry: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
            cryUrl: "cries/098.mp3",
            japaneseName: "Crab"
        },
        {
            name: "Kingler",
            imageUrl: "images/099Kingler.png",
            number: "099",
            type: ["Water"],
            category: "Pincer",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 60.0,
            dexEntry: "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
            cryUrl: "cries/099.mp3",
            japaneseName: "Kingler"
        },
        {
            name: "Voltorb",
            imageUrl: "images/100Voltorb.png",
            number: "100",
            type: ["Electric"],
            category: "Ball",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "22.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.4,
            dexEntry: "A life-form whose identity is unknown. It is said to screech or suddenly selfdestruct.",
            cryUrl: "cries/100.mp3",
            japaneseName: "Biriridama"
        },
        {
            name: "Electrode",
            imageUrl: "images/101Electrode.png",
            number: "101",
            type: ["Electric"],
            category: "Ball",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "146.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 66.6,
            dexEntry: "It explodes in response to even minor stimuli. It is feared, with the nickname of \"The Bomb Ball.\"",
            cryUrl: "cries/101.mp3",
            japaneseName: "Marumine"
        },
        {
            name: "Exeggcute",
            imageUrl: "images/102Exeggcute.png",
            number: "102",
            type: ["Grass", "Psychic"],
            category: "Egg",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.5,
            dexEntry: "Even though it appears to be eggs of some sort, it was discovered to be a life-form more like plant seeds.",
            cryUrl: "cries/102.mp3",
            japaneseName: "Tamatama"
        },
        {
            name: "Exeggutor",
            imageUrl: "images/103Exeggutor.png",
            number: "103",
            type: ["Grass", "Psychic"],
            category: "Coconut",
            region: "Kanto",
            generation: "1",
            height: "6'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 120.0,
            dexEntry: "It is called \"The Walking Tropical Rainforest.\" Each of the nuts has a face and will of its own.",
            cryUrl: "cries/103.mp3",
            japaneseName: "Nassy"
        },
        {
            name: "Cubone",
            imageUrl: "images/104Cubone.png",
            number: "104",
            type: ["Ground"],
            category: "Lonely",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.5,
            dexEntry: "It wears the skull of its dead mother on its head. When it becomes lonesome, it is said to cry loudly.",
            cryUrl: "cries/104.mp3",
            japaneseName: "Karakara"
        },
        {
            name: "Marowak",
            imageUrl: "images/105Marowak.png",
            number: "105",
            type: ["Ground"],
            category: "Bone Keeper",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "99.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 45.0,
            dexEntry: "It is small and was originally very weak. Its temperament turned ferocious when it began using bones.",
            cryUrl: "cries/105.mp3",
            japaneseName: "Garagara"
        },
        {
            name: "Hitmonlee",
            imageUrl: "images/106Hitmonlee.png",
            number: "106",
            type: ["Fighting"],
            category: "Kicking",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "109.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 49.8,
            dexEntry: "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick.",
            cryUrl: "cries/106.mp3",
            japaneseName: "Sawamular"
        },
        {
            name: "Hitmonchan",
            imageUrl: "images/107Hitmonchan.png",
            number: "107",
            type: ["Fighting"],
            category: "Punching",
            region: "Kanto",
            generation: "1",
            height: "4'07\"",
            weight: "110.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 50.2,
            dexEntry: "The spirit of a pro boxer has infused this Pokémon. It throws punches that are faster than a bullet train.",
            cryUrl: "cries/107.mp3",
            japaneseName: "Ebiwalar"
        },
        {
            name: "Lickitung",
            imageUrl: "images/108Lickitung.png",
            number: "108",
            type: ["Normal"],
            category: "Licking",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "144.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 65.5,
            dexEntry: "Its tongue is twice the length of its body. It can be moved like an arm for grabbing food and attacking.",
            cryUrl: "cries/108.mp3",
            japaneseName: "Beroringa"
        },
        {
            name: "Koffing",
            imageUrl: "images/109Koffing.png",
            number: "109",
            type: ["Poison"],
            category: "Poison Gas",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 2.2,
            dexEntry: "Its thin, balloon-like body is inflated by horribly toxic gases. It reeks when it is nearby.",
            cryUrl: "cries/109.mp3",
            japaneseName: "Dogars"
        },
        {
            name: "Weezing",
            imageUrl: "images/110Weezing.png",
            number: "110",
            type: ["Poison"],
            category: "Poison Gas",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 9.5,
            dexEntry: "Very rarely, a sudden mutation can result in two small Koffing twins becoming conjoined as a Weezing.",
            cryUrl: "cries/110.mp3",
            japaneseName: "Matadogas"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "111",
            type: ["Ground", "Rock"],
            category: "Spikes",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "253.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 115.0,
            dexEntry: "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "112",
            type: ["Ground", "Rock"],
            category: "Drill",
            region: "Kanto",
            generation: "1",
            height: "6'03\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 120.0,
            dexEntry: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Chansey",
            imageUrl: "images/113Chansey.png",
            number: "113",
            type: ["Normal"],
            category: "Egg",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "76.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 34.6,
            dexEntry: "It lays several eggs a day. The eggs are apparently rich in nutrients and extremely delicious.",
            cryUrl: "cries/113.mp3",
            japaneseName: "Lucky"
        },
        {
            name: "Tangela",
            imageUrl: "images/114Tangela.png",
            number: "114",
            type: ["Grass"],
            category: "Vine",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 35.0,
            dexEntry: "Blue plant vines cloak the Pokémon's identity in a tangled mass. It entangles anything that gets close.",
            cryUrl: "cries/114.mp3",
            japaneseName: "Monjara"
        },
        {
            name: "Kangaskhan",
            imageUrl: "images/115Kangaskhan.png",
            number: "115",
            type: ["Normal"],
            category: "Parent",
            region: "Kanto",
            generation: "1",
            height: "7'03\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 80.0,
            dexEntry: "The female raises its offspring in a pouch on its belly. It is skilled at attacking using Comet Punch.",
            cryUrl: "cries/115.mp3",
            japaneseName: "Garura"
        },
        {
            name: "Horsea",
            imageUrl: "images/116Horsea.png",
            number: "116",
            type: ["Water"],
            category: "Dragon",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.0,
            dexEntry: "It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth.",
            cryUrl: "cries/116.mp3",
            japaneseName: "Tattu"
        },
        {
            name: "Seadra",
            imageUrl: "images/117Seadra.png",
            number: "117",
            type: ["Water"],
            category: "Dragon",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 25.0,
            dexEntry: "Its body bristles with sharp spikes. Carelessly trying to touch it could cause fainting from the spikes.",
            cryUrl: "cries/117.mp3",
            japaneseName: "Seadra"
        },
        {
            name: "Goldeen",
            imageUrl: "images/118Goldeen.png",
            number: "118",
            type: ["Water"],
            category: "Goldfish",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.0,
            dexEntry: "Its dorsal and pectoral fins are strongly developed like muscles. It can swim at a speed of five knots.",
            cryUrl: "cries/118.mp3",
            japaneseName: "Tosakinto"
        },
        {
            name: "Seaking",
            imageUrl: "images/119Seaking.png",
            number: "119",
            type: ["Water"],
            category: "Goldfish",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "86.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 39.0,
            dexEntry: "The horn on its head is sharp like a drill. It bores a hole in a boulder to make its nest.",
            cryUrl: "cries/119.mp3",
            japaneseName: "Azumao"
        },
        {
            name: "Staryu",
            imageUrl: "images/120Staryu.png",
            number: "120",
            type: ["Water"],
            category: "Star Shape",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "76.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 34.5,
            dexEntry: "It appears in large numbers by seashores. At night, its central core flashes with a red light.",
            cryUrl: "cries/120.mp3",
            japaneseName: "Hitodeman"
        },
        {
            name: "Starmie",
            imageUrl: "images/121Starmie.png",
            number: "121",
            type: ["Water", "Psychic"],
            category: "Mysterious",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 80.0,
            dexEntry: "This Pokémon has a geometric body. Because of its body, the locals suspect that it is an alien creature.",
            cryUrl: "cries/121.mp3",
            japaneseName: "Starmie"
        },
        {
            name: "Mr. Mime",
            imageUrl: "images/122Mr._Mime.png",
            number: "122",
            type: ["Psychic"],
            category: "Barrier",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "120.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 54.5,
            dexEntry: "It is adept at conning people. It is said to be able to create walls out of thin air by miming.",
            cryUrl: "cries/122.mp3",
            japaneseName: "Barrierd"
        },
        {
            name: "Scyther",
            imageUrl: "images/123Scyther.png",
            number: "123",
            type: ["Bug", "Flying"],
            category: "Mantis",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "123.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 56.0,
            dexEntry: "It tears and shreds prey with its wickedly sharp scythes. It very rarely spreads its wings to fly.",
            cryUrl: "cries/123.mp3",
            japaneseName: "Strike"
        },
        {
            name: "Jynx",
            imageUrl: "images/124Jynx.png",
            number: "124",
            type: ["Ice", "Psychic"],
            category: "Human Shape",
            region: "Kanto",
            generation: "1",
            height: "4'07\"",
            weight: "89.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 40.6,
            dexEntry: "It speaks using a language that sounds human. Research is under way to determine what is being said.",
            cryUrl: "cries/124.mp3",
            japaneseName: "Rougela"
        },
        {
            name: "Electabuzz",
            imageUrl: "images/125Electabuzz.png",
            number: "125",
            type: ["Electric"],
            category: "Electric",
            region: "Kanto",
            generation: "1",
            height: "3'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 30.0,
            dexEntry: "It loves to feed on strong electricity. It occasionally appears around large power plants and so on.",
            cryUrl: "cries/125.mp3",
            japaneseName: "Eleboo"
        },
        {
            name: "Magmar",
            imageUrl: "images/126Magmar.png",
            number: "126",
            type: ["Fire"],
            category: "Spitfire",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "98.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 44.5,
            dexEntry: "Found near the mouth of a volcano. This fire-breather's body temperature is nearly 2,200 degrees Fahrenheit.",
            cryUrl: "cries/126.mp3",
            japaneseName: "Boober"
        },
        {
            name: "Pinsir",
            imageUrl: "images/127Pinsir.png",
            number: "127",
            type: ["Bug"],
            category: "Stag Beetle",
            region: "Kanto",
            generation: "1",
            height: "4'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 55.0,
            dexEntry: "Its two long pincer horns are powerful. Once they grip an enemy, they won't release until the foe is torn.",
            cryUrl: "cries/127.mp3",
            japaneseName: "Kailios"
        },
        {
            name: "Tauros",
            imageUrl: "images/128Tauros.png",
            number: "128",
            type: ["Normal"],
            category: "Wild Bull",
            region: "Kanto",
            generation: "1",
            height: "4'07\"",
            weight: "194.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 88.4,
            dexEntry: "When it is about to Tackle, it whips its body repeatedly with its three long tails.",
            cryUrl: "cries/128.mp3",
            japaneseName: "Kentauros"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "129",
            type: ["Water"],
            category: "Fish",
            region: "Kanto",
            generation: "1",
            height: "2'11\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 10.0,
            dexEntry: "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "130",
            type: ["Water", "Flying"],
            category: "Atrocious",
            region: "Kanto",
            generation: "1",
            height: "21'04\"",
            weight: "518.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 6.5,
            metricWeight: 235.0,
            dexEntry: "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Lapras",
            imageUrl: "images/131Lapras.png",
            number: "131",
            type: ["Water", "Ice"],
            category: "Transport",
            region: "Kanto",
            generation: "1",
            height: "8'02\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 220.0,
            dexEntry: "Its high intelligence enables it to understand human speech. It likes to ferry people on its back.",
            cryUrl: "cries/131.mp3",
            japaneseName: "Laplace"
        },
        {
            name: "Ditto",
            imageUrl: "images/132Ditto.png",
            number: "132",
            type: ["Normal"],
            category: "Transform",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 4.0,
            dexEntry: "It can freely recombine its own cellular structure to transform into other life-forms.",
            cryUrl: "cries/132.mp3",
            japaneseName: "Metamon"
        },
        {
            name: "Eevee",
            imageUrl: "images/133Eevee.png",
            number: "133",
            type: ["Normal"],
            category: "Evolution",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.5,
            dexEntry: "An extremely rare Pokémon that may evolve in a number of different ways depending on stimuli.",
            cryUrl: "cries/133.mp3",
            japaneseName: "Eievui"
        },
        {
            name: "Vaporeon",
            imageUrl: "images/134Vaporeon.png",
            number: "134",
            type: ["Water"],
            category: "Bubble Jet",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "63.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.0,
            dexEntry: "Its body's cellular structure is similar to the molecular composition of water. It can melt invisibly in water.",
            cryUrl: "cries/134.mp3",
            japaneseName: "Showers"
        },
        {
            name: "Jolteon",
            imageUrl: "images/135Jolteon.png",
            number: "135",
            type: ["Electric"],
            category: "Lightning",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "54.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.5,
            dexEntry: "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.",
            cryUrl: "cries/135.mp3",
            japaneseName: "Thunders"
        },
        {
            name: "Flareon",
            imageUrl: "images/136Flareon.png",
            number: "136",
            type: ["Fire"],
            category: "Flame",
            region: "Kanto",
            generation: "1",
            height: "2'11\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 25.0,
            dexEntry: "It has a flame bag inside its body. After inhaling deeply, it blows out flames of nearly 3,100 degrees Fahrenheit.",
            cryUrl: "cries/136.mp3",
            japaneseName: "Booster"
        },
        {
            name: "Porygon",
            imageUrl: "images/137Porygon.png",
            number: "137",
            type: ["Normal"],
            category: "Virtual",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "80.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 36.5,
            dexEntry: "Using the most advanced technologies, scientists finally succeeded in making the first artificial Pokémon.",
            cryUrl: "cries/137.mp3",
            japaneseName: "Porygon"
        },
        {
            name: "Omanyte",
            imageUrl: "images/138Omanyte.png",
            number: "138",
            type: ["Rock", "Water"],
            category: "Spiral",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.5,
            dexEntry: "A prehistoric Pokémon that lived in the primordial sea, it swims by twisting its 10 tentacles about.",
            cryUrl: "cries/138.mp3",
            japaneseName: "Omnite"
        },
        {
            name: "Omastar",
            imageUrl: "images/139Omastar.png",
            number: "139",
            type: ["Rock", "Water"],
            category: "Spiral",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 35.0,
            dexEntry: "Its tentacles are highly developed as if they are hands and feet. As soon as it ensnares prey, it bites.",
            cryUrl: "cries/139.mp3",
            japaneseName: "Omstar"
        },
        {
            name: "Kabuto",
            imageUrl: "images/140Kabuto.png",
            number: "140",
            type: ["Rock", "Water"],
            category: "Shellfish",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 11.5,
            dexEntry: "This Pokémon was regenerated from the fossil of an ancient creature. It protects itself with a hard shell.",
            cryUrl: "cries/140.mp3",
            japaneseName: "Kabuto"
        },
        {
            name: "Kabutops",
            imageUrl: "images/141Kabutops.png",
            number: "141",
            type: ["Rock", "Water"],
            category: "Shellfish",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.5,
            dexEntry: "It swims freely through water. It catches prey with its scythe-like arms and drains the victim's fluids.",
            cryUrl: "cries/141.mp3",
            japaneseName: "Kabutops"
        },
        {
            name: "Aerodactyl",
            imageUrl: "images/142Aerodactyl.png",
            number: "142",
            type: ["Rock", "Flying"],
            category: "Fossil",
            region: "Kanto",
            generation: "1",
            height: "5'11\"",
            weight: "130.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 59.0,
            dexEntry: "It was regenerated from a dinosaur's genetic matter that was found in amber. It flies with high-pitched cries.",
            cryUrl: "cries/142.mp3",
            japaneseName: "Ptera"
        },
        {
            name: "Snorlax",
            imageUrl: "images/143Snorlax.png",
            number: "143",
            type: ["Normal"],
            category: "Sleeping",
            region: "Kanto",
            generation: "1",
            height: "6'11\"",
            weight: "1041.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 460.0,
            dexEntry: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
            cryUrl: "cries/143.mp3",
            japaneseName: "Kabigon"
        },
        {
            name: "Articuno",
            imageUrl: "images/144Articuno.png",
            number: "144",
            type: ["Ice", "Flying"],
            category: "Freeze",
            region: "Kanto",
            generation: "1",
            height: "5'07\"",
            weight: "122.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 55.4,
            dexEntry: "One of the legendary bird Pokémon. With its long tail trailing behind, its flying form is magnificent.",
            cryUrl: "cries/144.mp3",
            japaneseName: "Freezer"
        },
        {
            name: "Zapdos",
            imageUrl: "images/145Zapdos.png",
            number: "145",
            type: ["Electric", "Flying"],
            category: "Electric",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "116.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 52.6,
            dexEntry: "One of the legendary bird Pokémon. While it is flying, it makes crackling and snapping sounds.",
            cryUrl: "cries/145.mp3",
            japaneseName: "Thunder"
        },
        {
            name: "Moltres",
            imageUrl: "images/146Moltres.png",
            number: "146",
            type: ["Fire", "Flying"],
            category: "Flame",
            region: "Kanto",
            generation: "1",
            height: "6'07\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 60.0,
            dexEntry: "One of the legendary bird Pokémon. Those who see it are overwhelmed by its orange wings that seem to be on fire.",
            cryUrl: "cries/146.mp3",
            japaneseName: "Fire"
        },
        {
            name: "Dratini",
            imageUrl: "images/147Dratini.png",
            number: "147",
            type: ["Dragon"],
            category: "Dragon",
            region: "Kanto",
            generation: "1",
            height: "5'11\"",
            weight: "7.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 3.3,
            dexEntry: "Even the young can exceed 6.5 feet in length. It grows larger by repeatedly shedding skin.",
            cryUrl: "cries/147.mp3",
            japaneseName: "Miniryu"
        },
        {
            name: "Dragonair",
            imageUrl: "images/148Dragonair.png",
            number: "148",
            type: ["Dragon"],
            category: "Dragon",
            region: "Kanto",
            generation: "1",
            height: "13'01\"",
            weight: "36.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.0,
            metricWeight: 16.5,
            dexEntry: "It is said to live in seas and lakes. Even though it has no wings, it has been seen flying occasionally.",
            cryUrl: "cries/148.mp3",
            japaneseName: "Hakuryu"
        },
        {
            name: "Dragonite",
            imageUrl: "images/149Dragonite.png",
            number: "149",
            type: ["Dragon", "Flying"],
            category: "Dragon",
            region: "Kanto",
            generation: "1",
            height: "7'03\"",
            weight: "463.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 210.0,
            dexEntry: "It can fly in spite of its big and bulky physique. It circles the globe in just 16 hours",
            cryUrl: "cries/149.mp3",
            japaneseName: "Kairyu"
        },
        {
            name: "Mewtwo",
            imageUrl: "images/150Mewtwo.png",
            number: "150",
            type: ["Psychic"],
            category: "Genetic",
            region: "Kanto",
            generation: "1",
            height: "6'07\"",
            weight: "269.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 122.0,
            dexEntry: "A Pokémon whose genetic code was repeatedly recombined for research. It turned vicious as a result.",
            cryUrl: "cries/150.mp3",
            japaneseName: "Mewtwo"
        },
        {
            name: "Mew",
            imageUrl: "images/151Mew.png",
            number: "151",
            type: ["Psychic"],
            category: "New Species",
            region: "Kanto",
            generation: "1",
            height: "1'04\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.0,
            dexEntry: "A Pokémon of South America that was thought to have been extinct. It is very intelligent and learns any move.",
            cryUrl: "cries/151.mp3",
            japaneseName: "Mew"
        }
    ]
}

let sortOrder = "default";

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

        let romanGen = function romanNumerals(){
            if (pocketMonster.generation === "1"){
                return "I"
            }
            else if (pocketMonster.generation === "2"){
                return "II"
            }
            else if (pocketMonster.generation === "3"){
                return "III"
            }
            else if (pocketMonster.generation === "4"){
                return "IV"
            }
            else if (pocketMonster.generation === "5"){
                return "V"
            }
            else if (pocketMonster.generation === "6"){
                return "VI"
            }
            else if (pocketMonster.generation === "7"){
                return "VII"
            }
            else if (pocketMonster.generation === "8"){
                return "VIII"
            }
        }
        let romanNumeral = romanGen()
        
        let pokemonGeneration = document.createElement("p")
        pokemonGeneration.append("Gen " , romanNumeral)
        let pokemonHeight = document.createElement("p")
        pokemonHeight.append("Height: " , pocketMonster.height)
        let pokemonWeight = document.createElement("p")
        pokemonWeight.append("Weight: " , pocketMonster.weight)
        let showDexEntry = document.createElement("button")
        showDexEntry.append("Pokédex Entry")
        let playCry = document.createElement("button")
        playCry.append("Cry")
        let favoritePokemon = document.createElement("button")
        favoritePokemon.append("Favorite")
        let pokemonFavorite = document.createElement("img")
        pokemonFavorite.src = "pokeball.png"
        pokemonFavorite.style = "height:20px"
        let caughtPokemon = document.createElement("button")
        caughtPokemon.append("Gotcha!")
        let pokemonCaught = document.createElement("img")
        pokemonCaught.src = "pokeball.png"
        pokemonCaught.style = "height:20px"

        function favoriteIcon(faved) {
            if (faved.favorites == true) {
                pokemonFavorite.src = "masterball.png"
                pokemonFavorite.style = "height:20px"
            }
            else if (faved.favorites == false) {
                pokemonFavorite.src = "pokeball.png"
                pokemonFavorite.style = "height:20px"
            }
        }
        favoriteIcon(pocketMonster)
favoritePokemon.addEventListener("click", favorite)
    function favorite(event){
        event.preventDefault()
        let index = nationalDex.nationalPokedex.indexOf(pocketMonster)
            nationalDex.nationalPokedex[index].favorites = !nationalDex.nationalPokedex[index].favorites
            favoriteIcon(pocketMonster)
    }

    function capturedIcon(captured) {
        if (captured.caught == true) {
            pokemonCaught.src = "masterball.png"
            pokemonCaught.style = "height:20px"
        }
        else if (captured.caught == false) {
            pokemonCaught.src = "pokeball.png"
            pokemonCaught.style = "height:20px"
        }
    }
    capturedIcon(pocketMonster)
    caughtPokemon.addEventListener("click", gotcha)
    function gotcha(event){
        event.preventDefault()
        let index = nationalDex.nationalPokedex.indexOf(pocketMonster)
            nationalDex.nationalPokedex[index].caught = !nationalDex.nationalPokedex[index].caught
            capturedIcon(pocketMonster)
    }

    showDexEntry.addEventListener("click", showInfo)
    function showInfo(event){
        event.preventDefault()
        let indexEntry = nationalDex.nationalPokedex.indexOf(pocketMonster)
            alert(nationalDex.nationalPokedex[indexEntry].name + ": " + nationalDex.nationalPokedex[indexEntry].dexEntry)
    }


    let isEnglish = true;

    pokemonName.addEventListener("click", japan)
    function japan(event){
        event.preventDefault()
        if (isEnglish === true) {
            pokemonName.removeChild(pokemonName.firstChild)
            pokemonName.append(pocketMonster.japaneseName)
            pokemonName.style.color = "white"
            isEnglish = false;
        }
        else if (isEnglish === false) {
            pokemonName.removeChild(pokemonName.firstChild)
            pokemonName.append(pocketMonster.name)
            pokemonName.style.color = "black"
            isEnglish = true;
        }
    }

    playCry.addEventListener("click", playAudio)
    function playAudio(event){
        event.preventDefault()
        let cryIndex = nationalDex.nationalPokedex.indexOf(pocketMonster)
        let cryAudio = new Audio(nationalDex.nationalPokedex[cryIndex].cryUrl)
        cryAudio.play()
        
    }

        divVariable.append(pokemonName)
        divVariable.append(pokemonImage)
        divVariable.append(pokemonNumber)
        divVariable.append(pokemonType)
        divVariable.append(pokemonCategory)
        divVariable.append(pokemonRegion)
        divVariable.append(pokemonGeneration)
        divVariable.append(pokemonHeight)
        divVariable.append(pokemonWeight)
        divVariable.append(pokemonFavorite)
        divVariable.append(favoritePokemon)
        divVariable.append(caughtPokemon)
        divVariable.append(pokemonCaught)
        divVariable.append(showDexEntry)
        divVariable.append(playCry)
        pokeball.append(divVariable)
    })
}

let returns = 50;
let section = 0;

let partialDex = {
    partialPokedex: []
}
let dexLoading = function loadMin(){
    for (let indexSpot = section; indexSpot < nationalDex.nationalPokedex.length; indexSpot++){
        if (nationalDex.nationalPokedex.indexOf(nationalDex.nationalPokedex[indexSpot]) < (returns + section)){
            partialDex.partialPokedex.push(nationalDex.nationalPokedex[indexSpot])
        }
    }
}
dexLoading()
dexRender(partialDex.partialPokedex)

let partialNames = []
let nameLoading = function loadMinName(){
    for (let indexSpot = section; indexSpot < nationalDex.nationalPokedex.length; indexSpot++){
        if (nationalDex.nationalPokedex.indexOf(nationalDex.nationalPokedex[indexSpot]) < (returns + section)){
            partialNames.push(nationalDex.nationalPokedex[indexSpot])
        }
    }
}
let partialNumbers = []
let numberLoading = function loadMinNumber(){
    for (let indexSpot = section; indexSpot < nationalDex.nationalPokedex.length; indexSpot++){
        if (nationalDex.nationalPokedex.indexOf(nationalDex.nationalPokedex[indexSpot]) < (returns + section)){
            partialNumbers.push(nationalDex.nationalPokedex[indexSpot])
        }
    }
}
let partialHeights = []
let heightLoading = function loadMinHeight(){
    for (let indexSpot = section; indexSpot < nationalDex.nationalPokedex.length; indexSpot++){
        if (nationalDex.nationalPokedex.indexOf(nationalDex.nationalPokedex[indexSpot]) < (returns + section)){
            partialHeights.push(nationalDex.nationalPokedex[indexSpot])
        }
    }
}
let partialWeights = []
let weightLoading = function loadMinWeight(){
    for (let indexSpot = section; indexSpot < nationalDex.nationalPokedex.length; indexSpot++){
        if (nationalDex.nationalPokedex.indexOf(nationalDex.nationalPokedex[indexSpot]) < (returns + section)){
            partialWeights.push(nationalDex.nationalPokedex[indexSpot])
        }
    }
}

let isFiltering = false;

function hideButton(){
    if (((returns + section) >= nationalDex.nationalPokedex.length) || (isFiltering === true)){
        document.getElementById("morePkmn").style.display = 'none';
    }
    else {
        document.getElementById("morePkmn").style.display = 'initial';
    }
}

let addMore = document.getElementById("morePkmn")
addMore.addEventListener("click", morePokemon)
function morePokemon(event){
    event.preventDefault()
    section = (section + 50)
    if (sortOrder === "default"){
        dexLoading()
        dexRender(partialDex.partialPokedex)
    }
    else if (sortOrder === "name"){
        nameLoading()
        dexRender(partialNames)
    }
    else if (sortOrder === "number"){
        numberLoading()
        dexRender(partialNumbers)
    }
    else if (sortOrder === "height"){
        heightLoading()
        dexRender(partialHeights)
    }
    else if (sortOrder === "weight"){
        weightLoading()
        dexRender(partialWeights)
    }
    hideButton();
}

let sortAbc = document.getElementById("sortAlpha")
sortAbc.addEventListener("click", sortAlphabet)
function sortAlphabet(event){
    event.preventDefault()

let sortedName = nationalDex.nationalPokedex.sort((a, b) => {
    let pma = a.name.toLowerCase(),
        pmb = b.name.toLowerCase();

    if (pma < pmb) {
        return -1;
    }
    if (pma > pmb) {
        return 1;
    }
    return 0;
});
nationalDex.nationalPokedex.forEach((pocketMonster) => {
    console.log(`${pocketMonster.name}`);
    
});
section = 0;
sortOrder = "name";
hideButton()
nameLoading()
dexRender(partialNames)
}

let sort123 = document.getElementById("sortNum")
sort123.addEventListener("click", sortNumber)
function sortNumber(event){
    event.preventDefault()

let sortedNumber = nationalDex.nationalPokedex.sort((a, b) => {
    return a.number - b.number;
});
nationalDex.nationalPokedex.forEach((pocketMonster) => {
    console.log(`${pocketMonster.number}`);
    
});
section = 0;
sortOrder = "number";
hideButton()
numberLoading()
dexRender(partialNumbers)
}

let sortHeight = document.getElementById("sortHeight")
sortHeight.addEventListener("click", sortTall)
function sortTall(event){
    event.preventDefault()

let sortedHeight = nationalDex.nationalPokedex.sort((a, b) => {
    return a.metricHeight - b.metricHeight;
});
nationalDex.nationalPokedex.forEach((pocketMonster) => {
    console.log(`${pocketMonster.height}`);
    
});
section = 0;
sortOrder = "height";
hideButton()
heightLoading()
dexRender(partialHeights)
}

let sortWeight = document.getElementById("sortWeight")
sortWeight.addEventListener("click", sortHeavy)
function sortHeavy(event){
    event.preventDefault()

let sortedWeight = nationalDex.nationalPokedex.sort((a, b) => {
    return a.metricWeight - b.metricWeight;
});
nationalDex.nationalPokedex.forEach((pocketMonster) => {
    console.log(`${pocketMonster.weight}`);
    
});
section = 0;
sortOrder = "weight";
hideButton()
weightLoading()
dexRender(partialWeights)
}

let search = document.getElementById("searchButton")
search.addEventListener("click", searchFilter)
function searchFilter(event){
    event.preventDefault()

let nameId = document.getElementById("name_input").value
let numberId = document.getElementById("number_input").value
let typeId = document.getElementById("type_input").value
let categoryId = document.getElementById("category_input").value
let regionId = document.getElementById("region_input").value
let genId = document.getElementById("gen_input").value
let heightId = document.getElementById("height_input").value
let weightId = document.getElementById("weight_input").value
let favoritesId = document.getElementById("favorites_input").value
let caughtId = document.getElementById("caught_input").value

let filterPokemon = nationalDex.nationalPokedex.filter(searching => searching.name.toLowerCase().indexOf(nameId.toLowerCase()) > -1 )
.filter(searching => searching.number.indexOf(numberId) > -1 )
.filter(searching => String(searching.type).toLowerCase().indexOf(typeId.toLowerCase()) > -1 )
.filter(searching => searching.category.toLowerCase().indexOf(categoryId.toLowerCase()) > -1 )
.filter(searching => searching.region.toLowerCase().indexOf(regionId.toLowerCase()) > -1 )
.filter(searching => searching.generation.toLowerCase().indexOf(genId.toLowerCase()) > -1 )
.filter(searching => searching.height.toLowerCase().indexOf(heightId.toLowerCase()) > -1 )
.filter(searching => searching.weight.toLowerCase().indexOf(weightId.toLowerCase()) > -1 )
.filter(searching => String(searching.favorites).toLowerCase().indexOf(favoritesId.toLowerCase()) > -1 )
.filter(searching => String(searching.caught).toLowerCase().indexOf(caughtId.toLowerCase()) > -1 )

function coloring(){
    let typeColor = document.getElementById("type_input").value

    if (typeColor.toLowerCase() === "normal") {
        document.body.style.backgroundColor = "#a8a878"
    }
    else if (typeColor.toLowerCase() === "fire") {
        document.body.style.backgroundColor = "#f08030"
    }
    else if (typeColor.toLowerCase() === "water") {
        document.body.style.backgroundColor = "#6890f0"
    }
    else if (typeColor.toLowerCase() === "electric") {
        document.body.style.backgroundColor = "#f8d030"
    }
    else if (typeColor.toLowerCase() === "grass") {
        document.body.style.backgroundColor = "#78c850"
    }
    else if (typeColor.toLowerCase() === "ice") {
        document.body.style.backgroundColor = "#98d8d8"
    }
    else if (typeColor.toLowerCase() === "fighting") {
        document.body.style.backgroundColor = "#c03028"
    }
    else if (typeColor.toLowerCase() === "poison") {
        document.body.style.backgroundColor = "#a040a0"
    }
    else if (typeColor.toLowerCase() === "ground") {
        document.body.style.backgroundColor = "#e0c068"
    }
    else if (typeColor.toLowerCase() === "flying") {
        document.body.style.backgroundColor = "#a890f0"
    }
    else if (typeColor.toLowerCase() === "psychic") {
        document.body.style.backgroundColor = "#f85888"
    }
    else if (typeColor.toLowerCase() === "bug") {
        document.body.style.backgroundColor = "#a8b820"
    }
    else if (typeColor.toLowerCase() === "rock") {
        document.body.style.backgroundColor = "#b8a038"
    }
    else if (typeColor.toLowerCase() === "ghost") {
        document.body.style.backgroundColor = "#705898"
    }
    else if (typeColor.toLowerCase() === "dragon") {
        document.body.style.backgroundColor = "#7038f8"
    }
    else if (typeColor.toLowerCase() === "dark") {
        document.body.style.backgroundColor = "#705848"
    }
    else if (typeColor.toLowerCase() === "steel") {
        document.body.style.backgroundColor = "#b8b8d0"
    }
    else if (typeColor.toLowerCase() === "fairy") {
        document.body.style.backgroundColor = "#ee99ac"
    }
    else {
        document.body.style.backgroundColor = "darkturquoise"
    }
}  

function isSearching() {
    if ((nameId === "") && (numberId === "") && (typeId === "") && (categoryId === "") && (regionId === "") && (genId === "")
    && (heightId === "") && (weightId === "") && (favoritesId === "") && (caughtId === "")) {
        isFiltering = false;
    }
    else {
        isFiltering = true;
    }
}


isSearching()
hideButton()
dexRender(filterPokemon)
coloring()
}

function percent(){
    let total = 0;
    for (let i = 0; i < nationalDex.nationalPokedex.length; i++) {
        if (nationalDex.nationalPokedex[i].caught === true) {
            total += 1;
        }
    }
    return (total / nationalDex.nationalPokedex.length)
}

let savorite = document.getElementById("saveFaves")
savorite.addEventListener("click", saving)
function saving(event){
    event.preventDefault()
    let saveFavorites = (newPokedex) => {
        localStorage.setItem("favoriteDex", JSON.stringify(newPokedex));
    }
    saveFavorites(nationalDex.nationalPokedex)
    alert("Your data has been saved.")
}

let loadGame = document.getElementById("loadFaves")
loadGame.addEventListener("click", loading)
function loading(event){
    event.preventDefault()
    let retrieval = localStorage.getItem("favoriteDex");
    let newestPokedex = JSON.parse(retrieval)
    console.log(JSON.parse(retrieval))
    if (newestPokedex != null){
        nationalDex.nationalPokedex = newestPokedex
        dexRender(nationalDex.nationalPokedex)
        alert("Your data has been loaded.")
    }
    else (
        dexRender(nationalDex.nationalPokedex)
    )
}

let percentage = document.getElementById("percentCaught")
percentage.addEventListener("click", percentComplete)
function percentComplete(event){
    event.preventDefault()
    let completion = Math.round(percent() * 10000) / 100;
    function caughtAmount() {
        let totalCaught = 0;
        for (let i = 0; i < nationalDex.nationalPokedex.length; i++) {
            if (nationalDex.nationalPokedex[i].caught === true) {
                totalCaught += 1;
            }
        }
        return totalCaught
    }
    let numberCaught = caughtAmount();
    let numberTotal = nationalDex.nationalPokedex.length;
    alert(completion + "%\r\n" + numberCaught + "/" + numberTotal)
}