//Yellow Search Code


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
            dexEntry: "It can go for days without eating a single morsel. In the bulb on its back, it stores energy.",
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
            dexEntry: "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.",
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
            dexEntry: "The flower on its back catches the sun's rays. The sunlight is then absorbed and used for energy.",
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
            dexEntry: "The flame at the tip of its tail makes a sound as it burns. You can only hear it in quiet places.",
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
            dexEntry: "Tough fights could excite this Pokémon. When excited, it may blow out bluish-white flames.",
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
            dexEntry: "When expelling a blast of super hot fire, the red flame at the tip of its tail burns more intensely.",
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
            dexEntry: "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
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
            dexEntry: "When tapped, this Pokémon will pull in its head, but its tail will still stick out a little bit.",
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
            dexEntry: "Once it takes aim at its enemy, it blasts out water with even more force than a fire hose.",
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
            dexEntry: "If you touch the feeler on top of its head, it will release a horrible stink to protect itself.",
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
            dexEntry: "Hardens its shell to protect itself. However, a large impact may cause it to pop out of its shell.",
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
            dexEntry: "Its wings, covered with poisonous powders, repel water. This allows it to fly in the rain.",
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
            dexEntry: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
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
            dexEntry: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
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
            dexEntry: "It has 3 poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
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
            dexEntry: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
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
            dexEntry: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
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
            dexEntry: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
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
            dexEntry: "Will chew on anything with its fangs. If you see one, it is certain that 40 more live in the area.",
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
            dexEntry: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
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
            dexEntry: "Inept at flying high. However, it can fly around very fast to protect its territory.",
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
            dexEntry: "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
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
            dexEntry: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest.",
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
            dexEntry: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
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
            dexEntry: "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.",
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
            dexEntry: "When electricity builds up inside its body, it becomes feisty. It also glows in the dark.",
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
            dexEntry: "Its body is dry. When it gets cold at night, its hide is said to become coated with a fine dew.",
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
            dexEntry: "It is skilled at slashing enemies with its claws. If broken, they start to grow back in a day.",
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
            dexEntry: "A mild-mannered Pokémon that does not like to fight. Beware, its small horns secrete venom.",
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
            dexEntry: "When resting deep in its burrow, its thorns always retract. This is proof that it is relaxed.",
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
            dexEntry: "Tough scales cover the sturdy body of this Pokémon. It appears that the scales grow in cycles.",
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
            dexEntry: "Its large ears are always kept upright. If it senses danger, it will attack with a poisonous sting.",
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
            dexEntry: "Its horns contain venom. If they are stabbed into an enemy, the impact makes the poison leak out.",
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
            dexEntry: "Its steel-like hide adds to its powerful tackle. Its horns are so hard, they can pierce a diamond.",
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
            dexEntry: "Adored for their cute looks and playfulness. They are thought to be rare, as they do not appear often.",
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
            dexEntry: "They appear to be very protective of their own world. It is a kind of fairy, rarely seen by people.",
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
            dexEntry: "Both its fur and its tails are beautiful. As it grows, the tails split and form more tails.",
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
            dexEntry: "According to an enduring legend, 9 noble saints were united and reincarnated as this Pokémon.",
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
            dexEntry: "Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep.",
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
            dexEntry: "Its body is full of elasticity. By inhaling deeply, it can continue to inflate itself without limit.",
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
            dexEntry: "Emits ultrasonic cries while it flies. They act as a sonar used to check for objects in its way.",
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
            dexEntry: "It attacks in a stealthy manner, without warning. Its sharp fangs are used to bite and suck blood.",
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
            dexEntry: "It may be mistaken for a clump of weeds. If you try to yank it out of the ground, it shrieks horribly.",
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
            dexEntry: "Smells incredibly foul! However, around 1 out of 1,000 people enjoy sniffing its nose-bending stink.",
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
            dexEntry: "Flaps its broad flower petals to scatter its poisonous pollen. The flapping sound is very loud.",
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
            dexEntry: "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
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
            dexEntry: "The bug host is drained of energy by the mushrooms on its back. They appear to do all the thinking.",
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
            dexEntry: "Its large eyes act as radars. In a bright place, you can see that they are clusters of many tiny eyes.",
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
            dexEntry: "The powdery scales on its wings are hard to remove. They also contain poison that leaks out on contact.",
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
            dexEntry: "It prefers dark places. It spends most of its time underground, though it may pop up in caves.",
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
            dexEntry: "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.",
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
            dexEntry: "Appears to be more active at night. It loves round and shiny things. It can't stop from picking them up.",
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
            dexEntry: "The gem in its forehead glows on its own! It walks with all the grace and elegance of a proud queen.",
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
            dexEntry: "Always tormented by headaches. It uses psychic powers, but it is not known if it intends to do so.",
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
            dexEntry: "Its slim and long limbs end in broad flippers. They are used for swimming gracefully in lakes.",
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
            dexEntry: "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.",
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
            dexEntry: "It stops being angry only when nobody else is around. To view this moment is very difficult.",
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
            dexEntry: "A Pokémon with a friendly nature. However, it will bark fiercely at anything invading its territory.",
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
            dexEntry: "A legendary Pokémon in China. Many people are charmed by its grace and beauty while running.",
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
            dexEntry: "The direction of the spiral on the belly differs by area. It is more adept at swimming than walking.",
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
            dexEntry: "Under attack, it uses its belly spiral to put the foe to sleep. It then makes its escape.",
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
            dexEntry: "Swims powerfully using all the muscles in its body. It can even overtake champion swimmers.",
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
            dexEntry: "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps.",
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
            dexEntry: "Many odd things happen if this Pokémon is close by. For example, it makes clocks run backwards.",
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
            dexEntry: "A Pokémon that can memorize anything. It never forgets what it learns—that's why this Pokémon is smart.",
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
            dexEntry: "Very powerful in spite of its small size. Its mastery of many types of martial arts makes it very tough.",
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
            dexEntry: "The belt around its waist holds back its energy. Without it, this Pokémon would be unstoppable.",
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
            dexEntry: "One arm alone can move mountains. Using all four arms, this Pokémon fires off awesome punches.",
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
            dexEntry: "Prefers hot and humid places. It ensnares tiny insects with its vines and devours them.",
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
            dexEntry: "When hungry, it swallows anything that moves. Its hapless prey is melted inside by strong acids.",
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
            dexEntry: "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is melted in a day, bones and all.",
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
            dexEntry: "It can sometimes be found all dry and shriveled up on a beach. Toss it back into the sea to revive it.",
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
            dexEntry: "Its 80 tentacles can stretch and contract freely. They wrap around prey and weaken it with poison.",
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
            dexEntry: "Commonly found near mountain trails, etc. If you step on one by accident, it gets angry.",
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
            dexEntry: "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.",
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
            dexEntry: "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when it's exposed to air.",
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
            dexEntry: "Capable of jumping incredibly high. Its hooves and sturdy legs absorb the impact of a hard landing.",
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
            dexEntry: "Just loves to run. If it sees something faster than itself, it will give chase at top speed.",
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
            dexEntry: "Incredibly slow and sluggish. It is quite content to loll about without worrying about the time.",
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
            dexEntry: "Lives lazily by the sea. If the Shellder on its tail comes off, it becomes a Slowpoke again.",
            cryUrl: "cries/080.mp3",
            japaneseName: "Yadoran"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "081",
            type: ["Electric"],
            category: "Magnet",
            region: "Kanto",
            generation: "1",
            height: "1'00\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.0,
            dexEntry: "It is born with the ability to defy gravity. It floats in air on powerful electromagnetic waves.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "082",
            type: ["Electric"],
            category: "Magnet",
            region: "Kanto",
            generation: "1",
            height: "3'03\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 60.0,
            dexEntry: "Generates strange radio signals. It raises the temperature by 3.6F degrees within 3,300 feet.",
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
            dexEntry: "Lives where reedy plants grow. They are rarely seen, so it's thought their numbers are decreasing.",
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
            dexEntry: "Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.",
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
            dexEntry: "One of Doduo's 2 heads splits to form a unique species. It runs close to 40 MPH in prairies.",
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
            dexEntry: "Loves freezing cold conditions. Relishes swimming in a frigid climate of around 14F degrees.",
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
            dexEntry: "Its entire body is a snowy-white. Unharmed by even intense cold, it swims powerfully in icy waters.",
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
            dexEntry: "Made of hardened sludge. It smells too putrid to touch. Even weeds won't grow in its path.",
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
            dexEntry: "Smells so awful, it can cause fainting. Through degeneration, it lost its sense of smell.",
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
            dexEntry: "The shell can withstand any attack. However, when it is open, the tender body is exposed.",
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
            dexEntry: "For protection, it uses its harder-than-diamonds shell. It also shoots spikes from the shell.",
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
            dexEntry: "Said to appear in decrepit, deserted buildings. It has no real shape as it appears to be made of a gas.",
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
            dexEntry: "By licking, it saps the victim's life. It causes shaking that won't stop until the victim's demise.",
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
            dexEntry: "A Gengar is close by if you feel a sudden chill. It may be trying to lay a curse on you.",
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
            dexEntry: "Burrows at high speed in search of food. The tunnels it leaves are used as homes by Diglett.",
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
            dexEntry: "If you sleep by it all the time, it will sometimes show you dreams it has eaten in the past.",
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
            dexEntry: "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
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
            dexEntry: "Its pincers are superb weapons. They sometimes break off during battle, but they grow back fast.",
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
            dexEntry: "One claw grew massively and as hard as steel. It has 10,000-HP strength. However, it is too heavy.",
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
            dexEntry: "It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.",
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
            dexEntry: "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.",
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
            dexEntry: "The heads attract each other and spin around. There must be 6 heads for it to maintain balance.",
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
            dexEntry: "Its cries are very noisy. This is because each of the three heads thinks about whatever it likes.",
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
            dexEntry: "Wears the skull of its deceased mother. Its cries echo inside the skull and come out as a sad melody.",
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
            dexEntry: "Small and weak, this Pokémon is adept with its Bone Club. It has grown more vicious over the ages.",
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
            dexEntry: "When kicking, the sole of its foot turns as hard as a diamond on impact and destroys its enemy.",
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
            dexEntry: "Punches in corkscrew fashion. It can punch its way through a concrete wall in the same way as a drill.",
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
            dexEntry: "Its tongue spans almost 7 feet and moves more freely than its forelegs. Its licks can cause paralysis.",
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
            dexEntry: "In hot places, its internal gases could expand and explode without any warning. Be very careful!",
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
            dexEntry: "It lives and grows by absorbing dust, germs, and poison gases that are contained in toxic waste and garbage.",
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
            dexEntry: "A Pokémon with a one-track mind. Once it charges, it won't stop running until it falls asleep.",
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
            dexEntry: "Walks on its hind legs. Shows signs of intelligence. Its armor-like hide even repels molten lava.",
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
            dexEntry: "A gentle and kind-hearted Pokémon that shares its nutritious eggs if it sees an injured Pokémon.",
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
            dexEntry: "Its identity is obscured by masses of thick, blue vines. The vines are said to never stop growing.",
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
            dexEntry: "Raises its young in its belly pouch. Won't run from any fight to keep its young protected.",
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
            dexEntry: "If it senses any danger, it will vigorously spray water or a special type of ink from its mouth.",
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
            dexEntry: "Touching the back fin causes numbness. It hooks its tail to coral to stay in place while sleeping.",
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
            dexEntry: "When it is time for them to lay eggs, they can be seen swimming up rivers and falls in large groups.",
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
            dexEntry: "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits.",
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
            dexEntry: "As long as the center section is unharmed, it can grow back fully even if it is chopped to bits.",
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
            dexEntry: "The center section is named the core. People think it is communicating when it glows in 7 colors.",
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
            dexEntry: "Always practices its pantomime act. It makes enemies believe something exists that really doesn't.",
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
            dexEntry: "Leaps out of tall grass and slices prey with its scythes. The movement looks like that of a ninja.",
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
            dexEntry: "Appears to move to a rhythm of its own, as if it were dancing. It wiggles its hips as it walks.",
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
            dexEntry: "If a major power outage occurs, it is certain that this Pokémon has eaten electricity at a power plant.",
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
            dexEntry: "Born in an active volcano. Its body is always cloaked in flames, so it looks like a big ball of fire.",
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
            dexEntry: "Grips its prey in its pincers and squeezes hard! It can't move if it's cold, so it lives in warm places.",
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
            dexEntry: "A rowdy Pokémon with a lot of stamina. Once running, it won't stop until it hits something.",
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
            dexEntry: "Famous for being very unreliable. It can be found swimming in seas, lakes, rivers and shallow puddles.",
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
            dexEntry: "Brutally vicious and enormously destructive. Known for totally destroying cities in ancient times.",
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
            dexEntry: "A gentle soul that can read the minds of people. It can ferry people across the sea on its back.",
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
            dexEntry: "When it spots an enemy, its body transforms into an almost perfect copy of its opponent.",
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
            dexEntry: "Its genetic code is unstable, so it could evolve in a variety of ways. There are only a few alive.",
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
            dexEntry: "Its cell structure is similar to water molecules. It will melt away and become invisible in water.",
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
            dexEntry: "A sensitive Pokémon that easily becomes sad or angry. Every time its mood changes, it charges power.",
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
            dexEntry: "It has a flame chamber inside its body. It inhales, then blows out fire that is over 3,000F degrees.",
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
            dexEntry: "The only Pokémon people anticipate can fly into space. None has managed the feat yet, however.",
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
            dexEntry: "An ancient Pokémon that was recovered from a fossil. It swims by cleverly twisting its 10 tentacles about.",
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
            dexEntry: "Sharp beaks ring its mouth. Its shell was too big for it to move freely, so it became extinct.",
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
            dexEntry: "A Pokémon that was recovered from a fossil. It uses the eyes on its back while hiding on the sea floor.",
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
            dexEntry: "A slim and fast swimmer. It slices its prey with its sharp sickles and drinks the body fluids.",
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
            dexEntry: "A savage Pokémon that died out in ancient times. It was resurrected using DNA taken from amber.",
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
            dexEntry: "Will eat anything, even if the food happens to be a little moldy. It never gets an upset stomach.",
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
            dexEntry: "A legendary bird Pokémon. It freezes water that is contained in winter air and makes it snow.",
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
            dexEntry: "This legendary bird Pokémon is said to appear when the sky turns dark and lightning showers down.",
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
            dexEntry: "A legendary bird Pokémon. As it flaps its blazing wings, even the night sky will turn red.",
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
            dexEntry: "The existence of this mythical Pokémon was only recently confirmed by a fisherman who caught one.",
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
            dexEntry: "According to a witness, its body was surrounded by a strange aura that gave it a mystical look.",
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
            dexEntry: "It is said that this Pokémon lives somewhere in the sea and that it flies. However, it is only a rumor.",
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
            dexEntry: "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
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
            dexEntry: "When viewed through a microscope, this Pokémon's short, fine, delicate hair can be seen.",
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