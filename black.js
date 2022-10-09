//Black Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Victini",
            imageUrl: "images/494Victini.png",
            number: "000",
            type: ["Psychic", "Fire"],
            category: "Victory",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.0,
            dexEntry: "This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
            cryUrl: "cries/494.mp3",
            japaneseName: "Victini"
        },
        {
            name: "Snivy",
            imageUrl: "images/495Snivy.png",
            number: "001",
            type: ["Grass"],
            category: "Grass Snake",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "17.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.1,
            dexEntry: "It is very intelligent and calm. Being exposed to lots of sunlight makes its movements swifter.",
            cryUrl: "cries/495.mp3",
            japaneseName: "Tsutarja"
        },
        {
            name: "Servine",
            imageUrl: "images/496Servine.png",
            number: "002",
            type: ["Grass"],
            category: "Grass Snake",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 16.0,
            dexEntry: "It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.",
            cryUrl: "cries/496.mp3",
            japaneseName: "Janovy"
        },
        {
            name: "Serperior",
            imageUrl: "images/497Serperior.png",
            number: "003",
            type: ["Grass"],
            category: "Regal",
            region: "Unova",
            generation: "5",
            height: "10'10\"",
            weight: "138.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.3,
            metricWeight: 63.0,
            dexEntry: "It can stop its opponents' movements with just a glare. It takes in solar energy and boosts it internally.",
            cryUrl: "cries/497.mp3",
            japaneseName: "Jalorda"
        },
        {
            name: "Tepig",
            imageUrl: "images/498Tepig.png",
            number: "004",
            type: ["Fire"],
            category: "Fire Pig",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "21.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.9,
            dexEntry: "It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
            cryUrl: "cries/498.mp3",
            japaneseName: "Pokabu"
        },
        {
            name: "Pignite",
            imageUrl: "images/499Pignite.png",
            number: "005",
            type: ["Fire", "Fighting"],
            category: "Fire Pig",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "122.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 55.5,
            dexEntry: "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
            cryUrl: "cries/499.mp3",
            japaneseName: "Chaoboo"
        },
        {
            name: "Emboar",
            imageUrl: "images/500Emboar.png",
            number: "006",
            type: ["Fire", "Fighting"],
            category: "Mega Fire Pig",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "330.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 150.0,
            dexEntry: "It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
            cryUrl: "cries/500.mp3",
            japaneseName: "Enbuoh"
        },
        {
            name: "Oshawott",
            imageUrl: "images/501Oshawott.png",
            number: "007",
            type: ["Water"],
            category: "Sea Otter",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "13.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.9,
            dexEntry: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.",
            cryUrl: "cries/501.mp3",
            japaneseName: "Mijumaru"
        },
        {
            name: "Dewott",
            imageUrl: "images/502Dewott.png",
            number: "008",
            type: ["Water"],
            category: "Discipline",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "54.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.5,
            dexEntry: "Strict training is how it learns its flowing double-scalchop technique.",
            cryUrl: "cries/502.mp3",
            japaneseName: "Futachimaru"
        },
        {
            name: "Samurott",
            imageUrl: "images/503Samurott.png",
            number: "009",
            type: ["Water"],
            category: "Formidable",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "208.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 94.6,
            dexEntry: "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.",
            cryUrl: "cries/503.mp3",
            japaneseName: "Daikenki"
        },
        {
            name: "Patrat",
            imageUrl: "images/504Patrat.png",
            number: "010",
            type: ["Normal"],
            category: "Scout",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "25.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 11.6,
            dexEntry: "Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
            cryUrl: "cries/504.mp3",
            japaneseName: "Minezumi"
        },
        {
            name: "Watchog",
            imageUrl: "images/505Watchog.png",
            number: "011",
            type: ["Normal"],
            category: "Lookout",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 27.0,
            dexEntry: "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.",
            cryUrl: "cries/505.mp3",
            japaneseName: "Miruhog"
        },
        {
            name: "Lillipup",
            imageUrl: "images/506Lillipup.png",
            number: "012",
            type: ["Normal"],
            category: "Puppy",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "9.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.1,
            dexEntry: "It faces strong opponents with great courage. But, when at a disadvantage in a fight, this intelligent Pokémon flees.",
            cryUrl: "cries/506.mp3",
            japaneseName: "Yorterrie"
        },
        {
            name: "Herdier",
            imageUrl: "images/507Herdier.png",
            number: "013",
            type: ["Normal"],
            category: "Loyal Dog",
            region: "Unova",
            generation: "5",
            height: "2'11\"",
            weight: "32.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 14.7,
            dexEntry: "It has black, cape-like fur that is very hard and decreases the amount of damage it receives.",
            cryUrl: "cries/507.mp3",
            japaneseName: "Herderrie"
        },
        {
            name: "Stoutland",
            imageUrl: "images/508Stoutland.png",
            number: "014",
            type: ["Normal"],
            category: "Big-Hearted",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "134.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 61.0,
            dexEntry: "It rescues people stranded by blizzards in the mountains. Its shaggy fur shields it from the cold.",
            cryUrl: "cries/508.mp3",
            japaneseName: "Mooland"
        },
        {
            name: "Purrloin",
            imageUrl: "images/509Purrloin.png",
            number: "015",
            type: ["Dark"],
            category: "Devious",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "22.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 10.1,
            dexEntry: "They steal from people for fun, but their victims can't help but forgive them. Their deceptively cute act is perfect.",
            cryUrl: "cries/509.mp3",
            japaneseName: "Choroneko"
        },
        {
            name: "Liepard",
            imageUrl: "images/510Liepard.png",
            number: "016",
            type: ["Dark"],
            category: "Cruel",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "82.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 37.5,
            dexEntry: "These Pokémon vanish and appear unexpectedly. Many Trainers are drawn to their beautiful form and fur.",
            cryUrl: "cries/510.mp3",
            japaneseName: "Lepardas"
        },
        {
            name: "Pansage",
            imageUrl: "images/511Pansage.png",
            number: "017",
            type: ["Grass"],
            category: "Grass Monkey",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.5,
            dexEntry: "This Pokémon dwells deep in the forest. Eating a leaf from its head whisks weariness away as if by magic.",
            cryUrl: "cries/511.mp3",
            japaneseName: "Yanappu"
        },
        {
            name: "Simisage",
            imageUrl: "images/512Simisage.png",
            number: "018",
            type: ["Grass"],
            category: "Thorn Monkey",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "67.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 30.5,
            dexEntry: "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.",
            cryUrl: "cries/512.mp3",
            japaneseName: "Yanakkie"
        },
        {
            name: "Pansear",
            imageUrl: "images/513Pansear.png",
            number: "019",
            type: ["Fire"],
            category: "High Temp",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "24.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.0,
            dexEntry: "When it is angered, the temperature of its head tuft reaches 600°F. It uses its tuft to roast berries.",
            cryUrl: "cries/513.mp3",
            japaneseName: "Baoppu"
        },
        {
            name: "Simisear",
            imageUrl: "images/514Simisear.png",
            number: "020",
            type: ["Fire"],
            category: "Ember",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.0,
            dexEntry: "It loves sweets because they become energy for the fire burning inside its body.",
            cryUrl: "cries/514.mp3",
            japaneseName: "Baokkie"
        },
        {
            name: "Panpour",
            imageUrl: "images/515Panpour.png",
            number: "021",
            type: ["Water"],
            category: "Spray",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "29.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.5,
            dexEntry: "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.",
            cryUrl: "cries/515.mp3",
            japaneseName: "Hiyappu"
        },
        {
            name: "Simipour",
            imageUrl: "images/516Simipour.png",
            number: "022",
            type: ["Water"],
            category: "Geyser",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "63.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.0,
            dexEntry: "The tuft on its head holds water. When the level runs low, it replenishes the tuft by siphoning up water with its tail.",
            cryUrl: "cries/516.mp3",
            japaneseName: "Hiyakkie"
        },
        {
            name: "Munna",
            imageUrl: "images/517Munna.png",
            number: "023",
            type: ["Psychic"],
            category: "Dream Eater",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "51.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 23.3,
            dexEntry: "Munna always float in the air. People whose dreams are eaten by them forget what the dreams had been about.",
            cryUrl: "cries/517.mp3",
            japaneseName: "Munna"
        },
        {
            name: "Musharna",
            imageUrl: "images/518Musharna.png",
            number: "024",
            type: ["Psychic"],
            category: "Drowsing",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "133.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 60.5,
            dexEntry: "The mist emanating from their foreheads is packed with the dreams of people and Pokémon.",
            cryUrl: "cries/518.mp3",
            japaneseName: "Musharna"
        },
        {
            name: "Pidove",
            imageUrl: "images/519Pidove.png",
            number: "025",
            type: ["Normal", "Flying"],
            category: "Tiny Pigeon",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "4.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.1,
            dexEntry: "Each follows its Trainer's orders as best it can, but they sometimes fail to understand complicated commands.",
            cryUrl: "cries/519.mp3",
            japaneseName: "Mamepato"
        },
        {
            name: "Tranquill",
            imageUrl: "images/520Tranquill.png",
            number: "026",
            type: ["Normal", "Flying"],
            category: "Wild Pigeon",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.0,
            dexEntry: "It can return to its Trainer's location regardless of the distance separating them.",
            cryUrl: "cries/520.mp3",
            japaneseName: "Hatoboh"
        },
        {
            name: "Unfezant",
            imageUrl: "images/521Unfezant.png",
            number: "027",
            type: ["Normal", "Flying"],
            category: "Proud",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "63.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 29.0,
            dexEntry: "Males swing their head plumage to threaten opponents. The females' flying abilities surpass those of the males.",
            cryUrl: "cries/521.mp3",
            japaneseName: "Kenhallow"
        },
        {
            name: "Blitzle",
            imageUrl: "images/522Blitzle.png",
            number: "028",
            type: ["Electric"],
            category: "Electrified",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "65.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 29.8,
            dexEntry: "Its mane shines when it discharges electricity. They use their flashing manes to communicate with one another.",
            cryUrl: "cries/522.mp3",
            japaneseName: "Shimama"
        },
        {
            name: "Zebstrika",
            imageUrl: "images/523Zebstrika.png",
            number: "029",
            type: ["Electric"],
            category: "Thunderbolt",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "175.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 79.5,
            dexEntry: "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
            cryUrl: "cries/523.mp3",
            japaneseName: "Zebraika"
        },
        {
            name: "Roggenrola",
            imageUrl: "images/524Roggenrola.png",
            number: "030",
            type: ["Rock"],
            category: "Mantle",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 18.0,
            dexEntry: "Its ear is hexagonal in shape. Compressed underground, its body is as hard as steel.",
            cryUrl: "cries/524.mp3",
            japaneseName: "Dangoro"
        },
        {
            name: "Boldore",
            imageUrl: "images/525Boldore.png",
            number: "031",
            type: ["Rock"],
            category: "Ore",
            region: "Unova",
            generation: "5",
            height: "2'11\"",
            weight: "224.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 102.0,
            dexEntry: "When it overflows with power, the orange crystal on its body glows. It looks for underground water in caves.",
            cryUrl: "cries/525.mp3",
            japaneseName: "Gantle"
        },
        {
            name: "Gigalith",
            imageUrl: "images/526Gigalith.png",
            number: "032",
            type: ["Rock"],
            category: "Compressed",
            region: "Unova",
            generation: "5",
            height: "5'07\"",
            weight: "573.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 260.0,
            dexEntry: "Compressing the energy from its internal core lets it fire off an attack capable of blowing away a mountain.",
            cryUrl: "cries/526.mp3",
            japaneseName: "Gigaiath"
        },
        {
            name: "Woobat",
            imageUrl: "images/527Woobat.png",
            number: "033",
            type: ["Psychic", "Flying"],
            category: "Bat",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "4.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.1,
            dexEntry: "Its habitat is dark forests and caves. It emits ultrasonic waves from its nose to learn about its surroundings.",
            cryUrl: "cries/527.mp3",
            japaneseName: "Koromori"
        },
        {
            name: "Swoobat",
            imageUrl: "images/528Swoobat.png",
            number: "034",
            type: ["Psychic", "Flying"],
            category: "Courting",
            region: "Unova",
            generation: "5",
            height: "2'11\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 10.5,
            dexEntry: "It emits sound waves of various frequencies from its nose including some powerful enough to destroy rocks.",
            cryUrl: "cries/528.mp3",
            japaneseName: "Kokoromori"
        },
        {
            name: "Drilbur",
            imageUrl: "images/529Drilbur.png",
            number: "035",
            type: ["Ground"],
            category: "Mole",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 8.5,
            dexEntry: "It can dig through the ground at a speed of 30 mph. It could give a car running aboveground a good race.",
            cryUrl: "cries/529.mp3",
            japaneseName: "Mogurew"
        },
        {
            name: "Excadrill",
            imageUrl: "images/530Excadrill.png",
            number: "036",
            type: ["Ground", "Steel"],
            category: "Subterrene",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "89.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 40.4,
            dexEntry: "It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates.",
            cryUrl: "cries/530.mp3",
            japaneseName: "Doryuzu"
        },
        {
            name: "Audino",
            imageUrl: "images/531Audino.png",
            number: "037",
            type: ["Normal"],
            category: "Hearing",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "68.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 31.0,
            dexEntry: "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
            cryUrl: "cries/531.mp3",
            japaneseName: "Tabunne"
        },
        {
            name: "Timburr",
            imageUrl: "images/532Timburr.png",
            number: "038",
            type: ["Fighting"],
            category: "Muscular",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.5,
            dexEntry: "It fights by swinging a piece of lumber around. It is close to evolving when it can handle the lumber without difficulty.",
            cryUrl: "cries/532.mp3",
            japaneseName: "Dokkorer"
        },
        {
            name: "Gurdurr",
            imageUrl: "images/533Gurdurr.png",
            number: "039",
            type: ["Fighting"],
            category: "Muscular",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 40.0,
            dexEntry: "This Pokémon is so muscular and strongly built that even a group of wrestlers could not make it budge an inch.",
            cryUrl: "cries/533.mp3",
            japaneseName: "Dotekkotsu"
        },
        {
            name: "Conkeldurr",
            imageUrl: "images/534Conkeldurr.png",
            number: "040",
            type: ["Fighting"],
            category: "Muscular",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "191.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 87.0,
            dexEntry: "It is thought that Conkeldurr taught humans how to make concrete more than 2,000 years ago.",
            cryUrl: "cries/534.mp3",
            japaneseName: "Roubushin"
        },
        {
            name: "Tympole",
            imageUrl: "images/535Tympole.png",
            number: "041",
            type: ["Water"],
            category: "Tadpole",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "9.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 4.5,
            dexEntry: "They warn others of danger by vibrating their cheeks to create a high-pitched sound.",
            cryUrl: "cries/535.mp3",
            japaneseName: "Otamaro"
        },
        {
            name: "Palpitoad",
            imageUrl: "images/536Palpitoad.png",
            number: "042",
            type: ["Water", "Ground"],
            category: "Vibration",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "37.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 17.0,
            dexEntry: "When they vibrate the bumps on their heads, they can make waves in water or earthquake-like vibrations on land.",
            cryUrl: "cries/536.mp3",
            japaneseName: "Gamagaru"
        },
        {
            name: "Seismitoad",
            imageUrl: "images/537Seismitoad.png",
            number: "043",
            type: ["Water", "Ground"],
            category: "Vibration",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "136.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 62.0,
            dexEntry: "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.",
            cryUrl: "cries/537.mp3",
            japaneseName: "Gamageroge"
        },
        {
            name: "Throh",
            imageUrl: "images/538Throh.png",
            number: "044",
            type: ["Fighting"],
            category: "Judo",
            region: "Unova",
            generation: "5",
            height: "4'03\"",
            weight: "122.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 55.5,
            dexEntry: "When it tightens its belt, it becomes stronger. Wild Throh use vines to weave their own belts.",
            cryUrl: "cries/538.mp3",
            japaneseName: "Nageki"
        },
        {
            name: "Sawk",
            imageUrl: "images/539Sawk.png",
            number: "045",
            type: ["Fighting"],
            category: "Karate",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "112.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 51.0,
            dexEntry: "The sound of Sawk punching boulders and trees can be heard all the way from the mountains where they train.",
            cryUrl: "cries/539.mp3",
            japaneseName: "Dageki"
        },
        {
            name: "Sewaddle",
            imageUrl: "images/540Sewaddle.png",
            number: "046",
            type: ["Bug", "Grass"],
            category: "Sewing",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.5,
            dexEntry: "Leavanny dress it in clothes they made for it when it hatched. It hides its head in its hood while it is sleeping.",
            cryUrl: "cries/540.mp3",
            japaneseName: "Kurumiru"
        },
        {
            name: "Swadloon",
            imageUrl: "images/541Swadloon.png",
            number: "047",
            type: ["Bug", "Grass"],
            category: "Leaf-Wrapped",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "16.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 7.3,
            dexEntry: "Forests where Swadloon live have superb foliage because the nutrients they make from fallen leaves nourish the plant life.",
            cryUrl: "cries/541.mp3",
            japaneseName: "Kurumayu"
        },
        {
            name: "Leavanny",
            imageUrl: "images/542Leavanny.png",
            number: "048",
            type: ["Bug", "Grass"],
            category: "Nurturing",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "45.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 20.5,
            dexEntry: "Upon finding a small Pokémon, it weaves clothing for it from leaves, using the cutters on its arms and sticky silk.",
            cryUrl: "cries/542.mp3",
            japaneseName: "Hahakomori"
        },
        {
            name: "Venipede",
            imageUrl: "images/543Venipede.png",
            number: "049",
            type: ["Bug", "Poison"],
            category: "Centipede",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "11.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.3,
            dexEntry: "Its bite injects a potent poison, enough to paralyze large bird Pokémon that try to prey on it.",
            cryUrl: "cries/543.mp3",
            japaneseName: "Fushide"
        },
        {
            name: "Whirlipede",
            imageUrl: "images/544Whirlipede.png",
            number: "050",
            type: ["Bug", "Poison"],
            category: "Curlipede",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "129.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 58.5,
            dexEntry: "Protected by a hard shell, it spins its body like a wheel and crashes furiously into its enemies.",
            cryUrl: "cries/544.mp3",
            japaneseName: "Wheega"
        },
        {
            name: "Scolipede",
            imageUrl: "images/545Scolipede.png",
            number: "051",
            type: ["Bug", "Poison"],
            category: "Megapede",
            region: "Unova",
            generation: "5",
            height: "8'02\"",
            weight: "442.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 200.5,
            dexEntry: "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails.",
            cryUrl: "cries/545.mp3",
            japaneseName: "Pendror"
        },
        {
            name: "Cottonee",
            imageUrl: "images/546Cottonee.png",
            number: "052",
            type: ["Grass"],
            category: "Cotton Puff",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "1.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.6,
            dexEntry: "When attacked, it escapes by shooting cotton from its body. The cotton serves as a decoy to distract the attacker.",
            cryUrl: "cries/546.mp3",
            japaneseName: "Monmen"
        },
        {
            name: "Whimsicott",
            imageUrl: "images/547Whimsicott.png",
            number: "053",
            type: ["Grass"],
            category: "Windveiled",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 6.6,
            dexEntry: "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.",
            cryUrl: "cries/547.mp3",
            japaneseName: "Elfuun"
        },
        {
            name: "Petilil",
            imageUrl: "images/548Petilil.png",
            number: "054",
            type: ["Grass"],
            category: "Bulb",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 6.6,
            dexEntry: "The leaves on its head are very bitter. Eating one of these leaves is known to refresh a tired body.",
            cryUrl: "cries/548.mp3",
            japaneseName: "Churine"
        },
        {
            name: "Lilligant",
            imageUrl: "images/549Lilligant.png",
            number: "055",
            type: ["Grass"],
            category: "Flowering",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "35.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 16.3,
            dexEntry: "Even veteran Trainers face a challenge in getting its beautiful flower to bloom. This Pokémon is popular with celebrities.",
            cryUrl: "cries/549.mp3",
            japaneseName: "Dredear"
        },
        {
            name: "Basculin",
            imageUrl: "images/550Basculin.png",
            number: "056",
            type: ["Water"],
            category: "Hostile",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 18.0,
            dexEntry: "Red and blue Basculin get along so poorly, they'll start fighting instantly. These Pokémon are very hostile.",
            cryUrl: "cries/550.mp3",
            japaneseName: "Bassrao"
        },
        {
            name: "Sandile",
            imageUrl: "images/551Sandile.png",
            number: "057",
            type: ["Ground", "Dark"],
            category: "Desert Croc",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "33.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 15.2,
            dexEntry: "They live buried in the sands of the desert. The sun-warmed sands prevent their body temperature from dropping.",
            cryUrl: "cries/551.mp3",
            japaneseName: "Meguroco"
        },
        {
            name: "Krokorok",
            imageUrl: "images/552Krokorok.png",
            number: "058",
            type: ["Ground", "Dark"],
            category: "Desert Croc",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "73.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 33.4,
            dexEntry: "They live in groups of a few individuals. Protective membranes shield their eyes from sandstorms.",
            cryUrl: "cries/552.mp3",
            japaneseName: "Waruvile"
        },
        {
            name: "Krookodile",
            imageUrl: "images/553Krookodile.png",
            number: "059",
            type: ["Ground", "Dark"],
            category: "Intimidation",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "212.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 96.3,
            dexEntry: "They never allow prey to escape. Their jaws are so powerful, they can crush the body of an automobile.",
            cryUrl: "cries/553.mp3",
            japaneseName: "Waruvial"
        },
        {
            name: "Darumaka",
            imageUrl: "images/554Darumaka.png",
            number: "060",
            type: ["Fire"],
            category: "Zen Charm",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "82.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 37.5,
            dexEntry: "When its internal fire is burning, it cannot calm down and it runs around. When the fire diminishes, it falls asleep.",
            cryUrl: "cries/554.mp3",
            japaneseName: "Darumakka"
        },
        {
            name: "Darmanitan",
            imageUrl: "images/555Darmanitan.png",
            number: "061",
            type: ["Fire"],
            category: "Blazing",
            region: "Unova",
            generation: "5",
            height: "4'03\"",
            weight: "204.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 92.9,
            dexEntry: "Its internal fire burns at 2,500° F, making enough power that it can destroy a dump truck with one punch.",
            cryUrl: "cries/555.mp3",
            japaneseName: "Hihidaruma"
        },
        {
            name: "Maractus",
            imageUrl: "images/556Maractus.png",
            number: "062",
            type: ["Grass"],
            category: "Cactus",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.0,
            dexEntry: "It uses an up-tempo song and dance to drive away the bird Pokémon that prey on its flower seeds.",
            cryUrl: "cries/556.mp3",
            japaneseName: "Maracacchi"
        },
        {
            name: "Dwebble",
            imageUrl: "images/557Dwebble.png",
            number: "063",
            type: ["Bug", "Rock"],
            category: "Rock Inn",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "32.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 14.5,
            dexEntry: "This Pokémon can easily melt holes in hard rocks with a liquid secreted from its mouth.",
            cryUrl: "cries/557.mp3",
            japaneseName: "Ishizumai"
        },
        {
            name: "Crustle",
            imageUrl: "images/558Crustle.png",
            number: "064",
            type: ["Bug", "Rock"],
            category: "Stone Home",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "440.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 200.0,
            dexEntry: "Competing for territory, Crustle fight viciously. The one whose boulder is broken is the loser of the battle.",
            cryUrl: "cries/558.mp3",
            japaneseName: "Iwapalace"
        },
        {
            name: "Scraggy",
            imageUrl: "images/559Scraggy.png",
            number: "065",
            type: ["Dark", "Fighting"],
            category: "Shedding",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "26.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.8,
            dexEntry: "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck.",
            cryUrl: "cries/559.mp3",
            japaneseName: "Zuruggu"
        },
        {
            name: "Scrafty",
            imageUrl: "images/560Scrafty.png",
            number: "066",
            type: ["Dark", "Fighting"],
            category: "Hoodlum",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 30.0,
            dexEntry: "Groups of them beat up anything that enter their territory. Each can spit acidic liquid from its mouth.",
            cryUrl: "cries/560.mp3",
            japaneseName: "Zuruzukin"
        },
        {
            name: "Sigilyph",
            imageUrl: "images/561Sigilyph.png",
            number: "067",
            type: ["Psychic", "Flying"],
            category: "Avianoid",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "30.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 14.0,
            dexEntry: "They never vary the route they fly, because their memories of guarding an ancient city remain steadfast.",
            cryUrl: "cries/561.mp3",
            japaneseName: "Symboler"
        },
        {
            name: "Yamask",
            imageUrl: "images/562Yamask.png",
            number: "068",
            type: ["Ghost"],
            category: "Spirit",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "3.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 1.5,
            dexEntry: "Each of them carries a mask that used to be its face when it was human. Sometimes they look at it and cry.",
            cryUrl: "cries/562.mp3",
            japaneseName: "Desumasu"
        },
        {
            name: "Cofagrigus",
            imageUrl: "images/563Cofagrigus.png",
            number: "069",
            type: ["Ghost"],
            category: "Coffin",
            region: "Unova",
            generation: "5",
            height: "5'07\"",
            weight: "168.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 76.5,
            dexEntry: "It has been said that they swallow those who get too close and turn them into mummies. They like to eat gold nuggets.",
            cryUrl: "cries/563.mp3",
            japaneseName: "Desukarn"
        },
        {
            name: "Tirtouga",
            imageUrl: "images/564Tirtouga.png",
            number: "070",
            type: ["Water", "Rock"],
            category: "Prototurtle",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "36.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.5,
            dexEntry: "Restored from a fossil, this Pokémon can dive to depths beyond half a mile.",
            cryUrl: "cries/564.mp3",
            japaneseName: "Protoga"
        },
        {
            name: "Carracosta",
            imageUrl: "images/565Carracosta.png",
            number: "071",
            type: ["Water", "Rock"],
            category: "Prototurtle",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "178.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 81.0,
            dexEntry: "They can live both in the ocean and on land. A slap from one of them is enough to open a hole in the bottom of a tanker.",
            cryUrl: "cries/565.mp3",
            japaneseName: "Abagoura"
        },
        {
            name: "Archen",
            imageUrl: "images/566Archen.png",
            number: "072",
            type: ["Rock", "Flying"],
            category: "First Bird",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.5,
            dexEntry: "Said to be an ancestor of bird Pokémon, they were unable to fly and moved about by hopping from one branch to another.",
            cryUrl: "cries/566.mp3",
            japaneseName: "Archen"
        },
        {
            name: "Archeops",
            imageUrl: "images/567Archeops.png",
            number: "073",
            type: ["Rock", "Flying"],
            category: "First Bird",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "70.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 32.0,
            dexEntry: "They are intelligent and will cooperate to catch prey. From the ground, they use a running start to take flight.",
            cryUrl: "cries/567.mp3",
            japaneseName: "Archeos"
        },
        {
            name: "Trubbish",
            imageUrl: "images/568Trubbish.png",
            number: "074",
            type: ["Poison"],
            category: "Trash Bag",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "68.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 31.0,
            dexEntry: "Inhaling the gas they belch will make you sleep for a week. They prefer unsanitary places.",
            cryUrl: "cries/568.mp3",
            japaneseName: "Yabukuron"
        },
        {
            name: "Garbodor",
            imageUrl: "images/569Garbodor.png",
            number: "075",
            type: ["Poison"],
            category: "Trash Heap",
            region: "Unova",
            generation: "5",
            height: "6'03\"",
            weight: "236.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 107.3,
            dexEntry: "It clenches opponents with its left arm and finishes them off with foul-smelling poison gas belched from its mouth.",
            cryUrl: "cries/569.mp3",
            japaneseName: "Dustdas"
        },
        {
            name: "Zorua",
            imageUrl: "images/570Zorua.png",
            number: "076",
            type: ["Dark"],
            category: "Tricky Fox",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 12.5,
            dexEntry: "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child.",
            cryUrl: "cries/570.mp3",
            japaneseName: "Zorua"
        },
        {
            name: "Zoroark",
            imageUrl: "images/571Zoroark.png",
            number: "077",
            type: ["Dark"],
            category: "Illusion Fox",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "178.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 81.1,
            dexEntry: "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents.",
            cryUrl: "cries/571.mp3",
            japaneseName: "Zoroark"
        },
        {
            name: "Minccino",
            imageUrl: "images/572Minccino.png",
            number: "078",
            type: ["Normal"],
            category: "Chinchilla",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "12.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.8,
            dexEntry: "They greet one another by rubbing each other with their tails, which are always kept well groomed and clean.",
            cryUrl: "cries/572.mp3",
            japaneseName: "Chillarmy"
        },
        {
            name: "Cinccino",
            imageUrl: "images/573Cinccino.png",
            number: "079",
            type: ["Normal"],
            category: "Scarf",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 7.5,
            dexEntry: "Their white fur is coated in a special oil that makes it easy for them to deflect attacks.",
            cryUrl: "cries/573.mp3",
            japaneseName: "Chillaccino"
        },
        {
            name: "Gothita",
            imageUrl: "images/574Gothita.png",
            number: "080",
            type: ["Psychic"],
            category: "Fixation",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "12.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.8,
            dexEntry: "Their ribbonlike feelers increase their psychic power. They are always staring at something.",
            cryUrl: "cries/574.mp3",
            japaneseName: "Gothimu"
        },
        {
            name: "Gothorita",
            imageUrl: "images/575Gothorita.png",
            number: "081",
            type: ["Psychic"],
            category: "Manipulate",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 18.0,
            dexEntry: "They use hypnosis to control people and Pokémon. Tales of Gothorita leading people astray are told in every corner.",
            cryUrl: "cries/575.mp3",
            japaneseName: "Gothimiru"
        },
        {
            name: "Gothitelle",
            imageUrl: "images/576Gothitelle.png",
            number: "082",
            type: ["Psychic"],
            category: "Astral Body",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "97.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 44.0,
            dexEntry: "Starry skies thousands of light-years away are visible in the space distorted by their intense psychic power.",
            cryUrl: "cries/576.mp3",
            japaneseName: "Gothiruselle"
        },
        {
            name: "Solosis",
            imageUrl: "images/577Solosis.png",
            number: "083",
            type: ["Psychic"],
            category: "Cell",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.0,
            dexEntry: "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others.",
            cryUrl: "cries/577.mp3",
            japaneseName: "Uniran"
        },
        {
            name: "Duosion",
            imageUrl: "images/578Duosion.png",
            number: "084",
            type: ["Psychic"],
            category: "Mitosis",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.0,
            dexEntry: "Since they have two divided brains, at times they suddenly try to take two different actions at once.",
            cryUrl: "cries/578.mp3",
            japaneseName: "Doublan"
        },
        {
            name: "Reuniclus",
            imageUrl: "images/579Reuniclus.png",
            number: "085",
            type: ["Psychic"],
            category: "Multiplying",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "44.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 20.1,
            dexEntry: "When Reuniclus shake hands, a network forms between their brains, increasing their psychic power.",
            cryUrl: "cries/579.mp3",
            japaneseName: "Lanculus"
        },
        {
            name: "Ducklett",
            imageUrl: "images/580Ducklett.png",
            number: "086",
            type: ["Water", "Flying"],
            category: "Water Bird",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.5,
            dexEntry: "These bird Pokémon are excellent divers. They swim around in the water eating their favorite food--peat moss.",
            cryUrl: "cries/580.mp3",
            japaneseName: "Koaruhie"
        },
        {
            name: "Swanna",
            imageUrl: "images/581Swanna.png",
            number: "087",
            type: ["Water", "Flying"],
            category: "White Bird",
            region: "Unova",
            generation: "5",
            height: "4'03\"",
            weight: "53.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 24.2,
            dexEntry: "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
            cryUrl: "cries/581.mp3",
            japaneseName: "Swanna"
        },
        {
            name: "Vanillite",
            imageUrl: "images/582Vanillite.png",
            number: "088",
            type: ["Ice"],
            category: "Fresh Snow",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "12.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.7,
            dexEntry: "The temperature of their breath is -58° F. They create snow crystals and make snow fall in the areas around them.",
            cryUrl: "cries/582.mp3",
            japaneseName: "Vanipeti"
        },
        {
            name: "Vanillish",
            imageUrl: "images/583Vanillish.png",
            number: "089",
            type: ["Ice"],
            category: "Icy Snow",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "90.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 41.0,
            dexEntry: "Snowy mountains are this Pokémon's habitat. During an ancient ice age, they moved to southern areas.",
            cryUrl: "cries/583.mp3",
            japaneseName: "Vanirich"
        },
        {
            name: "Vanilluxe",
            imageUrl: "images/584Vanilluxe.png",
            number: "090",
            type: ["Ice"],
            category: "Snowstorm",
            region: "Unova",
            generation: "5",
            height: "4'03\"",
            weight: "126.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 57.5,
            dexEntry: "Swallowing large amounts of water, they make snow clouds inside their bodies and attack their foes with violent blizzards.",
            cryUrl: "cries/584.mp3",
            japaneseName: "Baivanilla"
        },
        {
            name: "Deerling",
            imageUrl: "images/585Deerling.png",
            number: "091",
            type: ["Normal", "Grass"],
            category: "Season",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 19.5,
            dexEntry: "The color and scent of their fur changes to match the mountain grass. When they sense hostility, they hide in the grass.",
            cryUrl: "cries/585.mp3",
            japaneseName: "Shikijika"
        },
        {
            name: "Sawsbuck",
            imageUrl: "images/586Sawsbuck.png",
            number: "092",
            type: ["Normal", "Grass"],
            category: "Season",
            region: "Unova",
            generation: "5",
            height: "6'03\"",
            weight: "203.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 92.5,
            dexEntry: "They migrate according to the seasons. People can tell the season by looking at Sawsbuck's horns.",
            cryUrl: "cries/586.mp3",
            japaneseName: "Mebukijika"
        },
        {
            name: "Emolga",
            imageUrl: "images/587Emolga.png",
            number: "093",
            type: ["Electric", "Flying"],
            category: "Sky Squirrel",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.0,
            dexEntry: "The energy made in its cheeks' electric pouches is stored inside its membranes and released while it is gliding.",
            cryUrl: "cries/587.mp3",
            japaneseName: "Emonga"
        },
        {
            name: "Karrablast",
            imageUrl: "images/588Karrablast.png",
            number: "094",
            type: ["Bug"],
            category: "Clamping",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "13.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.9,
            dexEntry: "These mysterious Pokémon evolve when they receive electrical stimulation while they are in the same place as Shelmet.",
            cryUrl: "cries/588.mp3",
            japaneseName: "Kaburumo"
        },
        {
            name: "Escavalier",
            imageUrl: "images/589Escavalier.png",
            number: "095",
            type: ["Bug", "Steel"],
            category: "Cavalry",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 33.0,
            dexEntry: "They fly around at high speed, striking with their pointed spears. Even when in trouble, they face opponents bravely.",
            cryUrl: "cries/589.mp3",
            japaneseName: "Chevargo"
        },
        {
            name: "Foongus",
            imageUrl: "images/590Foongus.png",
            number: "096",
            type: ["Grass", "Poison"],
            category: "Mushroom",
            region: "Unova",
            generation: "5",
            height: "0'08\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 1.0,
            dexEntry: "It lures people in with its Poké Ball pattern, then releases poison spores. Why it resembles a Poké Ball is unknown.",
            cryUrl: "cries/590.mp3",
            japaneseName: "Tamagetake"
        },
        {
            name: "Amoonguss",
            imageUrl: "images/591Amoonguss.png",
            number: "097",
            type: ["Grass", "Poison"],
            category: "Mushroom",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.5,
            dexEntry: "It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.",
            cryUrl: "cries/591.mp3",
            japaneseName: "Morobareru"
        },
        {
            name: "Frillish",
            imageUrl: "images/592Frillish.png",
            number: "098",
            type: ["Water", "Ghost"],
            category: "Floating",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 33.0,
            dexEntry: "With its thin, veil-like arms wrapped around the body of its opponent, it sinks to the ocean floor.",
            cryUrl: "cries/592.mp3",
            japaneseName: "Pururill"
        },
        {
            name: "Jellicent",
            imageUrl: "images/593Jellicent.png",
            number: "099",
            type: ["Water", "Ghost"],
            category: "Floating",
            region: "Unova",
            generation: "5",
            height: "7'03\"",
            weight: "297.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 135.0,
            dexEntry: "The fate of the ships and crew that wander into Jellicent's habitat: all sunken, all lost, all vanished.",
            cryUrl: "cries/593.mp3",
            japaneseName: "Burungel"
        },
        {
            name: "Alomomola",
            imageUrl: "images/594Alomomola.png",
            number: "100",
            type: ["Water"],
            category: "Floating",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "69.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 31.6,
            dexEntry: "The special membrane enveloping Alomomola has the ability to heal wounds.",
            cryUrl: "cries/594.mp3",
            japaneseName: "Mamanbou"
        },
        {
            name: "Joltik",
            imageUrl: "images/595Joltik.png",
            number: "101",
            type: ["Bug", "Electric"],
            category: "Attaching",
            region: "Unova",
            generation: "5",
            height: "0'04\"",
            weight: "1.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.1,
            metricWeight: 0.6,
            dexEntry: "Joltik that live in cities have learned a technique for sucking electricity from the outlets in houses.",
            cryUrl: "cries/595.mp3",
            japaneseName: "Bachuru"
        },
        {
            name: "Galvantula",
            imageUrl: "images/596Galvantula.png",
            number: "102",
            type: ["Bug", "Electric"],
            category: "EleSpider",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "31.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 14.3,
            dexEntry: "When attacked, they create an electric barrier by spitting out many electrically charged threads.",
            cryUrl: "cries/596.mp3",
            japaneseName: "Dentula"
        },
        {
            name: "Ferroseed",
            imageUrl: "images/597Ferroseed.png",
            number: "103",
            type: ["Grass", "Steel"],
            category: "Thorn Seed",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "41.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 18.8,
            dexEntry: "When threatened, it attacks by shooting a barrage of spikes, which gives it a chance to escape by rolling away.",
            cryUrl: "cries/597.mp3",
            japaneseName: "Tesseed"
        },
        {
            name: "Ferrothorn",
            imageUrl: "images/598Ferrothorn.png",
            number: "104",
            type: ["Grass", "Steel"],
            category: "Thorn Pod",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "242.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 110.0,
            dexEntry: "It fights by swinging around its three spiky feelers. A hit from these steel spikes can reduce a boulder to rubble.",
            cryUrl: "cries/598.mp3",
            japaneseName: "Nutrey"
        },
        {
            name: "Klink",
            imageUrl: "images/599Klink.png",
            number: "105",
            type: ["Steel"],
            category: "Gear",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "46.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 21.0,
            dexEntry: "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing.",
            cryUrl: "cries/599.mp3",
            japaneseName: "Giaru"
        },
        {
            name: "Klang",
            imageUrl: "images/600Klang.png",
            number: "106",
            type: ["Steel"],
            category: "Gear",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "112.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 51.0,
            dexEntry: "By changing the direction in which it rotates, it communicates its feelings to others. When angry, it rotates faster.",
            cryUrl: "cries/600.mp3",
            japaneseName: "Gigiaru"
        },
        {
            name: "Klinklang",
            imageUrl: "images/601Klinklang.png",
            number: "107",
            type: ["Steel"],
            category: "Gear",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "178.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 81.0,
            dexEntry: "Its red core functions as an energy tank. It fires the charged energy through its spikes into an area.",
            cryUrl: "cries/601.mp3",
            japaneseName: "Gigigiaru"
        },
        {
            name: "Tynamo",
            imageUrl: "images/602Tynamo.png",
            number: "108",
            type: ["Electric"],
            category: "EleFish",
            region: "Unova",
            generation: "5",
            height: "0'08\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.3,
            dexEntry: "While one alone doesn't have much power, a chain of many Tynamo can be as powerful as lightning.",
            cryUrl: "cries/602.mp3",
            japaneseName: "Shibishirasu"
        },
        {
            name: "Eelektrik",
            imageUrl: "images/603Eelektrik.png",
            number: "109",
            type: ["Electric"],
            category: "EleFish",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "48.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 22.0,
            dexEntry: "They coil around foes and shock them with electricity-generating organs that seem simply to be circular patterns.",
            cryUrl: "cries/603.mp3",
            japaneseName: "Shibibeel"
        },
        {
            name: "Eelektross",
            imageUrl: "images/604Eelektross.png",
            number: "110",
            type: ["Electric"],
            category: "EleFish",
            region: "Unova",
            generation: "5",
            height: "6'11\"",
            weight: "177.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 80.5,
            dexEntry: "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
            cryUrl: "cries/604.mp3",
            japaneseName: "Shibirudon"
        },
        {
            name: "Elgyem",
            imageUrl: "images/605Elgyem.png",
            number: "111",
            type: ["Psychic"],
            category: "Cerebral",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.0,
            dexEntry: "It uses its strong psychic power to squeeze its opponent's brain, causing unendurable headaches.",
            cryUrl: "cries/605.mp3",
            japaneseName: "Ligray"
        },
        {
            name: "Beheeyem",
            imageUrl: "images/606Beheeyem.png",
            number: "112",
            type: ["Psychic"],
            category: "Cerebral",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "76.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 34.5,
            dexEntry: "It can manipulate an opponent's memory. Apparently, it communicates by flashing its three different-colored fingers.",
            cryUrl: "cries/606.mp3",
            japaneseName: "Ohbem"
        },
        {
            name: "Litwick",
            imageUrl: "images/607Litwick.png",
            number: "113",
            type: ["Ghost", "Fire"],
            category: "Candle",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "6.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.1,
            dexEntry: "Litwick shines a light that absorbs the life energy of people and Pokémon, which becomes the fuel that it burns.",
            cryUrl: "cries/607.mp3",
            japaneseName: "Hitomoshi"
        },
        {
            name: "Lampent",
            imageUrl: "images/608Lampent.png",
            number: "114",
            type: ["Ghost", "Fire"],
            category: "Lamp",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.0,
            dexEntry: "This ominous Pokémon is feared. Through cities it wanders, searching for the spirits of the fallen.",
            cryUrl: "cries/608.mp3",
            japaneseName: "Lampler"
        },
        {
            name: "Chandelure",
            imageUrl: "images/609Chandelure.png",
            number: "115",
            type: ["Ghost", "Fire"],
            category: "Luring",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "75.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 34.3,
            dexEntry: "It absorbs a spirit, which it then burns. By waving the flames on its arms, it puts its foes into a hypnotic trance.",
            cryUrl: "cries/609.mp3",
            japaneseName: "Chandela"
        },
        {
            name: "Axew",
            imageUrl: "images/610Axew.png",
            number: "116",
            type: ["Dragon"],
            category: "Tusk",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 18.0,
            dexEntry: "They use their tusks to crush the berries they eat. Repeated regrowth makes their tusks strong and sharp.",
            cryUrl: "cries/610.mp3",
            japaneseName: "Kibago"
        },
        {
            name: "Fraxure",
            imageUrl: "images/611Fraxure.png",
            number: "117",
            type: ["Dragon"],
            category: "Axe Jaw",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "79.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 36.0,
            dexEntry: "Since a broken tusk will not grow back, they diligently sharpen their tusks on river rocks after they've been fighting.",
            cryUrl: "cries/611.mp3",
            japaneseName: "Onondo"
        },
        {
            name: "Haxorus",
            imageUrl: "images/612Haxorus.png",
            number: "118",
            type: ["Dragon"],
            category: "Axe Jaw",
            region: "Unova",
            generation: "5",
            height: "5'11\"",
            weight: "232.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 105.5,
            dexEntry: "They are kind but can be relentless when defending territory. They challenge foes with tusks that can cut steel.",
            cryUrl: "cries/612.mp3",
            japaneseName: "Ononokus"
        },
        {
            name: "Cubchoo",
            imageUrl: "images/613Cubchoo.png",
            number: "119",
            type: ["Ice"],
            category: "Chill",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 8.5,
            dexEntry: "When it is not feeling well, its mucus gets watery and the power of its Ice-type moves decreases.",
            cryUrl: "cries/613.mp3",
            japaneseName: "Kumasyun"
        },
        {
            name: "Beartic",
            imageUrl: "images/614Beartic.png",
            number: "120",
            type: ["Ice"],
            category: "Freezing",
            region: "Unova",
            generation: "5",
            height: "8'06\"",
            weight: "573.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.6,
            metricWeight: 260.0,
            dexEntry: "It can make its breath freeze at will. Very able in the water, it swims around in northern seas and catches prey.",
            cryUrl: "cries/614.mp3",
            japaneseName: "Tunbear"
        },
        {
            name: "Cryogonal",
            imageUrl: "images/615Cryogonal.png",
            number: "121",
            type: ["Ice"],
            category: "Crystallizing",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "326.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 148.0,
            dexEntry: "When its body temperature goes up, it turns into steam and vanishes. When its temperature lowers, it returns to ice.",
            cryUrl: "cries/615.mp3",
            japaneseName: "Freegeo"
        },
        {
            name: "Shelmet",
            imageUrl: "images/616Shelmet.png",
            number: "122",
            type: ["Bug"],
            category: "Snail",
            region: "Unova",
            generation: "5",
            height: "1'04\"",
            weight: "17.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.7,
            dexEntry: "When attacked, it defends itself by closing the lid of its shell. It can spit a sticky, poisonous liquid.",
            cryUrl: "cries/616.mp3",
            japaneseName: "Chobomaki"
        },
        {
            name: "Accelgor",
            imageUrl: "images/617Accelgor.png",
            number: "123",
            type: ["Bug"],
            category: "Shell Out",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "55.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 25.3,
            dexEntry: "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.",
            cryUrl: "cries/617.mp3",
            japaneseName: "Agilder"
        },
        {
            name: "Stunfisk",
            imageUrl: "images/618Stunfisk.png",
            number: "124",
            type: ["Ground", "Electric"],
            category: "Trap",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "24.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 11.0,
            dexEntry: "Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.",
            cryUrl: "cries/618.mp3",
            japaneseName: "Maggyo"
        },
        {
            name: "Mienfoo",
            imageUrl: "images/619Mienfoo.png",
            number: "125",
            type: ["Fighting"],
            category: "Martial Arts",
            region: "Unova",
            generation: "5",
            height: "2'11\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 20.0,
            dexEntry: "In fights, they dominate with onslaughts of flowing, continuous attacks. With their sharp claws, they cut enemies.",
            cryUrl: "cries/619.mp3",
            japaneseName: "Kojofu"
        },
        {
            name: "Mienshao",
            imageUrl: "images/620Mienshao.png",
            number: "126",
            type: ["Fighting"],
            category: "Martial Arts",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "78.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 35.5,
            dexEntry: "It wields the fur on its arms like a whip. Its arm attacks come with such rapidity that they cannot even be seen.",
            cryUrl: "cries/620.mp3",
            japaneseName: "Kojondo"
        },
        {
            name: "Druddigon",
            imageUrl: "images/621Druddigon.png",
            number: "127",
            type: ["Dragon"],
            category: "Cave",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "306.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 139.0,
            dexEntry: "It warms its body by absorbing sunlight with its wings. When its body temperature falls, it can no longer move.",
            cryUrl: "cries/621.mp3",
            japaneseName: "Crimgan"
        },
        {
            name: "Golett",
            imageUrl: "images/622Golett.png",
            number: "128",
            type: ["Ground", "Ghost"],
            category: "Automaton",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "202.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 92.0,
            dexEntry: "The energy that burns inside it enables it to move, but no one has yet been able to identify this energy.",
            cryUrl: "cries/622.mp3",
            japaneseName: "Gobit"
        },
        {
            name: "Golurk",
            imageUrl: "images/623Golurk.png",
            number: "129",
            type: ["Ground", "Ghost"],
            category: "Automaton",
            region: "Unova",
            generation: "5",
            height: "9'02\"",
            weight: "727.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.8,
            metricWeight: 330.0,
            dexEntry: "It flies across the sky at Mach speeds. Removing the seal on its chest makes its internal energy go out of control.",
            cryUrl: "cries/623.mp3",
            japaneseName: "Goloog"
        },
        {
            name: "Pawniard",
            imageUrl: "images/624Pawniard.png",
            number: "130",
            type: ["Dark", "Steel"],
            category: "Sharp Blade",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "22.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.2,
            dexEntry: "Blades comprise this Pokémon's entire body. If battling dulls the blades, it sharpens them on stones by the river.",
            cryUrl: "cries/624.mp3",
            japaneseName: "Komatana"
        },
        {
            name: "Bisharp",
            imageUrl: "images/625Bisharp.png",
            number: "131",
            type: ["Dark", "Steel"],
            category: "Sword Blade",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "154.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 70.0,
            dexEntry: "It leads a group of Pawniard. It battles to become the boss, but will be driven from the group if it loses.",
            cryUrl: "cries/625.mp3",
            japaneseName: "Kirikizan"
        },
        {
            name: "Bouffalant",
            imageUrl: "images/626Bouffalant.png",
            number: "132",
            type: ["Normal"],
            category: "Bash Buffalo",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "208.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 94.5,
            dexEntry: "Their fluffy fur absorbs damage, even if they strike foes with a fierce headbutt.",
            cryUrl: "cries/626.mp3",
            japaneseName: "Buffron"
        },
        {
            name: "Rufflet",
            imageUrl: "images/627Rufflet.png",
            number: "133",
            type: ["Normal", "Flying"],
            category: "Eaglet",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.5,
            dexEntry: "They crush berries with their talons. They bravely stand up to any opponent, no matter how strong it is.",
            cryUrl: "cries/627.mp3",
            japaneseName: "Washibon"
        },
        {
            name: "Braviary",
            imageUrl: "images/628Braviary.png",
            number: "134",
            type: ["Normal", "Flying"],
            category: "Valiant",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "90.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 41.0,
            dexEntry: "They fight for their friends without any thought about danger to themselves. One can carry a car while flying.",
            cryUrl: "cries/628.mp3",
            japaneseName: "Warrgle"
        },
        {
            name: "Vullaby",
            imageUrl: "images/629Vullaby.png",
            number: "135",
            type: ["Dark", "Flying"],
            category: "Diapered",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.0,
            dexEntry: "Its wings are too tiny to allow it to fly. As the time approaches for it to evolve, it discards the bones it was wearing.",
            cryUrl: "cries/629.mp3",
            japaneseName: "Valchai"
        },
        {
            name: "Mandibuzz",
            imageUrl: "images/630Mandibuzz.png",
            number: "136",
            type: ["Dark", "Flying"],
            category: "Bone Vulture",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "87.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 39.5,
            dexEntry: "It makes a nest out of the bones it finds. It grabs weakened prey in its talons and hauls it to its nest of bones.",
            cryUrl: "cries/630.mp3",
            japaneseName: "Vulgina"
        },
        {
            name: "Heatmor",
            imageUrl: "images/631Heatmor.png",
            number: "137",
            type: ["Fire"],
            category: "Anteater",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "127.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 58.0,
            dexEntry: "It breathes through a hole in its tail while it burns with an internal fire. Durant is its prey.",
            cryUrl: "cries/631.mp3",
            japaneseName: "Kuitaran"
        },
        {
            name: "Durant",
            imageUrl: "images/632Durant.png",
            number: "138",
            type: ["Bug", "Steel"],
            category: "Iron Ant",
            region: "Unova",
            generation: "5",
            height: "1'00\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 33.0,
            dexEntry: "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.",
            cryUrl: "cries/632.mp3",
            japaneseName: "Aiant"
        },
        {
            name: "Deino",
            imageUrl: "images/633Deino.png",
            number: "139",
            type: ["Dark", "Dragon"],
            category: "Irate",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "38.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 17.3,
            dexEntry: "It tends to bite everything, and it is not a picky eater. Approaching it carelessly is dangerous.",
            cryUrl: "cries/633.mp3",
            japaneseName: "Monozu"
        },
        {
            name: "Zweilous",
            imageUrl: "images/634Zweilous.png",
            number: "140",
            type: ["Dark", "Dragon"],
            category: "Hostile",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "110.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 50.0,
            dexEntry: "After it has eaten up all the food in its territory, it moves to another area. Its two heads do not get along.",
            cryUrl: "cries/634.mp3",
            japaneseName: "Dihead"
        },
        {
            name: "Hydreigon",
            imageUrl: "images/635Hydreigon.png",
            number: "141",
            type: ["Dark", "Dragon"],
            category: "Brutal",
            region: "Unova",
            generation: "5",
            height: "5'11\"",
            weight: "352.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 160.0,
            dexEntry: "This brutal Pokémon travels the skies on its six wings. Anything that moves seems like a foe to it, triggering its attack.",
            cryUrl: "cries/635.mp3",
            japaneseName: "Sazandora"
        },
        {
            name: "Larvesta",
            imageUrl: "images/636Larvesta.png",
            number: "142",
            type: ["Bug", "Fire"],
            category: "Torch",
            region: "Unova",
            generation: "5",
            height: "3'07\"",
            weight: "63.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 28.8,
            dexEntry: "This Pokémon was believed to have been born from the sun. When it evolves, its entire body is engulfed in flames.",
            cryUrl: "cries/636.mp3",
            japaneseName: "Merlarva"
        },
        {
            name: "Volcarona",
            imageUrl: "images/637Volcarona.png",
            number: "143",
            type: ["Bug", "Fire"],
            category: "Sun",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "101.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 46.0,
            dexEntry: "When volcanic ash darkened the atmosphere, it is said that Volcarona's fire provided a replacement for the sun.",
            cryUrl: "cries/637.mp3",
            japaneseName: "Ulgamoth"
        },
        {
            name: "Cobalion",
            imageUrl: "images/638Cobalion.png",
            number: "144",
            type: ["Steel", "Fighting"],
            category: "Iron Will",
            region: "Unova",
            generation: "5",
            height: "6'11\"",
            weight: "551.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 250.0,
            dexEntry: "This legendary Pokémon battled against humans to protect Pokémon. Its personality is calm and composed.",
            cryUrl: "cries/638.mp3",
            japaneseName: "Cobalon"
        },
        {
            name: "Terrakion",
            imageUrl: "images/639Terrakion.png",
            number: "145",
            type: ["Rock", "Fighting"],
            category: "Cavern",
            region: "Unova",
            generation: "5",
            height: "6'03\"",
            weight: "573.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 260.0,
            dexEntry: "This Pokémon came to the defense of Pokémon that had lost their homes in a war among humans.",
            cryUrl: "cries/639.mp3",
            japaneseName: "Terrakion"
        },
        {
            name: "Virizion",
            imageUrl: "images/640Virizion.png",
            number: "146",
            type: ["Grass", "Fighting"],
            category: "Grassland",
            region: "Unova",
            generation: "5",
            height: "6'07\"",
            weight: "440.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 200.0,
            dexEntry: "This Pokémon fought humans in order to protect its friends. Legends about it continue to be passed down.",
            cryUrl: "cries/640.mp3",
            japaneseName: "Virizion"
        },
        {
            name: "Tornadus",
            imageUrl: "images/641Tornadus.png",
            number: "147",
            type: ["Flying"],
            category: "Cyclone",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "138.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 63.0,
            dexEntry: "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
            cryUrl: "cries/641.mp3",
            japaneseName: "Tornelos"
        },
        {
            name: "Thundurus",
            imageUrl: "images/642Thundurus.png",
            number: "148",
            type: ["Electric", "Flying"],
            category: "Bolt Strike",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "134.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 61.0,
            dexEntry: "Countless charred remains mar the landscape of places through which Thundurus has passed.",
            cryUrl: "cries/642.mp3",
            japaneseName: "Voltolos"
        },
        {
            name: "Reshiram",
            imageUrl: "images/643Reshiram.png",
            number: "149",
            type: ["Dragon", "Fire"],
            category: "Vast White",
            region: "Unova",
            generation: "5",
            height: "10'06\"",
            weight: "727.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.2,
            metricWeight: 330.0,
            dexEntry: "This Pokémon appears in legends. It sends flames into the air from its tail, burning up everything around it.",
            cryUrl: "cries/643.mp3",
            japaneseName: "Reshiram"
        },
        {
            name: "Zekrom",
            imageUrl: "images/644Zekrom.png",
            number: "150",
            type: ["Dragon", "Electric"],
            category: "Deep Black",
            region: "Unova",
            generation: "5",
            height: "9'06\"",
            weight: "760.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.9,
            metricWeight: 345.0,
            dexEntry: "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail.",
            cryUrl: "cries/644.mp3",
            japaneseName: "Zekrom"
        },
        {
            name: "Landorus",
            imageUrl: "images/645Landorus.png",
            number: "151",
            type: ["Ground", "Flying"],
            category: "Abundance",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "149.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 68.0,
            dexEntry: "Lands visited by Landorus grant such bountiful crops that it has been hailed as \"The Guardian of the Fields.\"",
            cryUrl: "cries/645.mp3",
            japaneseName: "Landlos"
        },
        {
            name: "Kyurem",
            imageUrl: "images/646Kyurem.png",
            number: "152",
            type: ["Dragon", "Ice"],
            category: "Boundary",
            region: "Unova",
            generation: "5",
            height: "9'10\"",
            weight: "716.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.0,
            metricWeight: 325.0,
            dexEntry: "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
            cryUrl: "cries/646.mp3",
            japaneseName: "Kyurem"
        },
        {
            name: "Keldeo",
            imageUrl: "images/647Keldeo.png",
            number: "153",
            type: ["Water", "Fighting"],
            category: "Colt",
            region: "Unova",
            generation: "5",
            height: "4'07\"",
            weight: "106.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 48.5,
            dexEntry: "By blasting water from its hooves, it can glide across water. It excels at using leg moves while battling.",
            cryUrl: "cries/647.mp3",
            japaneseName: "Keldeo"
        },
        {
            name: "Meloetta",
            imageUrl: "images/648Meloetta.png",
            number: "154",
            type: ["Normal", "Psychic"],
            category: "Melody",
            region: "Unova",
            generation: "5",
            height: "2'00\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 6.5,
            dexEntry: "Its melodies are sung with a special vocalization method that can control the feelings of those who hear it.",
            cryUrl: "cries/648.mp3",
            japaneseName: "Meloetta"
        },
        {
            name: "Genesect",
            imageUrl: "images/649Genesect.png",
            number: "155",
            type: ["Bug", "Steel"],
            category: "Paleozoic",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "181.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 82.5,
            dexEntry: "Over 300 million years ago, it was feared as the strongest of hunters. It has been modified by Team Plasma.",
            cryUrl: "cries/649.mp3",
            japaneseName: "Genesect"
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