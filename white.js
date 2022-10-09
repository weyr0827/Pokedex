//White Search Code


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
            dexEntry: "It creates an unlimited supply of energy inside its body, which it shares with those who touch it.",
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
            dexEntry: "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.",
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
            dexEntry: "They avoid attacks by sinking into the shadows of thick foliage. They retaliate with masterful whipping techniques.",
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
            dexEntry: "They raise their heads to intimidate opponents but only give it their all when fighting a powerful opponent.",
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
            dexEntry: "It blows fire through its nose. When it catches a cold, the fire becomes pitch-black smoke instead.",
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
            dexEntry: "Whatever it eats becomes fuel for the flame in its stomach. When it is angered, the intensity of the flame increases.",
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
            dexEntry: "It has mastered fast and powerful fighting moves. It grows a beard of fire.",
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
            dexEntry: "The scalchop on its stomach is made from the same element as claws. It detaches the scalchop for use as a blade.",
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
            dexEntry: "Scalchop techniques differ from one Dewott to another. It never neglects maintaining its scalchops.",
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
            dexEntry: "Part of the armor on its anterior legs becomes a giant sword. Its cry alone is enough to intimidate most enemies.",
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
            dexEntry: "Extremely cautious, they take shifts to maintain a constant watch of their nest. They feel insecure without a lookout.",
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
            dexEntry: "They make the patterns on their bodies shine in order to threaten predators. Keen eyesight lets them see in the dark.",
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
            dexEntry: "The long hair around its face provides an amazing radar that lets it sense subtle changes in its surroundings.",
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
            dexEntry: "It loyally follows its Trainer's orders. For ages, they have helped Trainers raise Pokémon.",
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
            dexEntry: "This extremely wise Pokémon excels at rescuing people stranded at sea or in the mountains.",
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
            dexEntry: "Its cute act is a ruse. When victims let down their guard, they find their items taken. It attacks with sharp claws.",
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
            dexEntry: "Stealthily, it sneaks up on its target, striking from behind before its victim has a chance to react.",
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
            dexEntry: "It shares the leaf on its head with weary-looking Pokémon. These leaves are known to relieve stress.",
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
            dexEntry: "It attacks enemies with strikes of its thorn-covered tail. This Pokémon is wild tempered.",
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
            dexEntry: "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600°F.",
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
            dexEntry: "A flame burns inside its body. It scatters embers from its head and tail to sear its opponents.",
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
            dexEntry: "It does not thrive in dry environments. It keeps itself damp by shooting water stored in its head tuft from its tail.",
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
            dexEntry: "The high-pressure water expelled from its tail is so powerful, it can destroy a concrete wall.",
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
            dexEntry: "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist.",
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
            dexEntry: "With the mist from its forehead, it can create shapes of things from dreams it has eaten.",
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
            dexEntry: "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas.",
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
            dexEntry: "Many people believe that, deep in the forest where Tranquill live, there is a peaceful place where there is no war.",
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
            dexEntry: "Males have plumage on their heads. They will never let themselves feel close to anyone other than their Trainers.",
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
            dexEntry: "When thunderclouds cover the sky, it will appear. It can catch lightning with its mane and store the electricity.",
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
            dexEntry: "This ill-tempered Pokémon is dangerous because when it's angry, it shoots lightning from its mane in all directions.",
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
            dexEntry: "They were discovered a hundred years ago in an earthquake fissure. Inside each one is an energy core.",
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
            dexEntry: "Because its energy was too great to be contained, the energy leaked and formed orange crystals.",
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
            dexEntry: "The solar energy absorbed by its body's orange crystals is magnified internally and fired from its mouth.",
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
            dexEntry: "Suction from its nostrils enables it to stick to cave walls during sleep. It leaves a heart-shaped mark behind.",
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
            dexEntry: "Anyone who comes into contact with the ultrasonic waves emitted by a courting male experiences a positive mood shift.",
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
            dexEntry: "It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
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
            dexEntry: "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.",
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
            dexEntry: "Its auditory sense is astounding. It has a radar-like ability to understand its surrounding through slight sounds.",
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
            dexEntry: "These Pokémon appear at building sites and help out with construction. They always carry squared logs.",
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
            dexEntry: "They strengthen their bodies by carrying steel beams. They show off their big muscles to their friends.",
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
            dexEntry: "They use concrete pillars as walking canes. They know moves that enable them to swing the pillars freely in battle.",
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
            dexEntry: "By vibrating its cheeks, it emits sound waves imperceptible to humans. It uses the rhythm of these sounds to talk.",
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
            dexEntry: "It lives in the water and on land. It uses its long, sticky tongue to capture prey.",
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
            dexEntry: "It increases the power of its punches by vibrating the bumps on its fists. It can turn a boulder to rubble with one punch.",
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
            dexEntry: "When they encounter foes bigger than themselves, they try to throw them. They always travel in packs of five.",
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
            dexEntry: "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.",
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
            dexEntry: "This Pokémon makes clothes for itself. It chews up leaves and sews them with sticky thread extruded from its mouth.",
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
            dexEntry: "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests.",
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
            dexEntry: "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.",
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
            dexEntry: "It discovers what is going on around it by using the feelers on its head and tail. It is brutally aggressive.",
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
            dexEntry: "It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.",
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
            dexEntry: "Highly aggressive, it uses the claws near its neck to dig into its opponents and poison them.",
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
            dexEntry: "They go wherever the wind takes them. On rainy days, their bodies are heavier, so they take shelter beneath big trees.",
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
            dexEntry: "Riding whirlwinds, they appear. These Pokémon sneak through gaps into houses and cause all sorts of mischief.",
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
            dexEntry: "Since they prefer moist, nutrient-rich soil, the areas where Petilil live are known to be good for growing plants.",
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
            dexEntry: "The fragrance of the garland on its head has a relaxing effect. It withers if a Trainer does not take good care of it.",
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
            dexEntry: "Red and blue Basculin usually do not get along, but sometimes members of one school mingle with the other's school.",
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
            dexEntry: "It moves along below the sand's surface, except for its nose and eyes. A dark membrane shields its eyes from the sun.",
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
            dexEntry: "The special membrane covering its eyes can sense the heat of objects, so it can see its surroundings, even in darkness.",
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
            dexEntry: "It can expand the focus of its eyes, enabling it to see objects in the far distance as if it were using binoculars.",
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
            dexEntry: "Darumaka's droppings are hot, so people used to put them in their clothes to keep themselves warm.",
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
            dexEntry: "When weakened in battle, it transforms into a stone statue. Then it sharpens its mind and fights on mentally.",
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
            dexEntry: "Arid regions are their habitat. They move rhythmically, making a sound similar to maracas.",
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
            dexEntry: "It makes a hole in a suitable rock. If that rock breaks, the Pokémon remains agitated until it locates a replacement.",
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
            dexEntry: "It possesses legs of enormous strength, enabling it to carry heavy slabs for many days, even when crossing arid land.",
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
            dexEntry: "It immediately headbutts anyone that makes eye contact with it. Its skull is massively thick.",
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
            dexEntry: "It can smash concrete blocks with its kicking attacks. The one with the biggest crest is the group leader.",
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
            dexEntry: "The guardians of an ancient city, they use their psychic power to attack enemies that invade their territory.",
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
            dexEntry: "These Pokémon arose from the spirits of people interred in graves in past ages. Each retains memories of its former life.",
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
            dexEntry: "They pretend to be elaborate coffins to teach lessons to grave robbers. Their bodies are covered in pure gold.",
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
            dexEntry: "About 100 million years ago, these Pokémon swam in oceans. It is thought they also went on land to attack prey.",
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
            dexEntry: "Incredible jaw strength enables them to chew up steel beams and rocks along with their prey.",
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
            dexEntry: "Revived from a fossil, this Pokémon is thought to be the ancestor of all bird Pokémon.",
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
            dexEntry: "It runs better than it flies. It catches prey by running at speeds comparable to those of an automobile.",
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
            dexEntry: "The combination of garbage bags and industrial waste caused the chemical reaction that created this Pokémon.",
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
            dexEntry: "They absorb garbage and make it part of their bodies. They shoot a poisonous liquid from their right-hand fingertips.",
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
            dexEntry: "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon.",
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
            dexEntry: "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
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
            dexEntry: "These Pokémon prefer a tidy habitat. They are always sweeping and dusting, using their tails as brooms.",
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
            dexEntry: "Their white fur feels amazing to touch. Their fur repels dust and prevents static electricity from building up.",
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
            dexEntry: "They intently observe both Trainers and Pokémon. Apparently, they are looking at something that only Gothita can see.",
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
            dexEntry: "Starlight is the source of their power. At night, they mark star positions by using psychic power to float stones.",
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
            dexEntry: "They can predict the future from the placement and movement of the stars. They can see Trainers' life spans.",
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
            dexEntry: "Because their bodies are enveloped in a special liquid, they can survive in any environment.",
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
            dexEntry: "When their brains, now divided in two, are thinking the same thoughts, these Pokémon exhibit their maximum power.",
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
            dexEntry: "These remarkably intelligent Pokémon fight by controlling arms that can grip with rock-crushing power.",
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
            dexEntry: "When attacked, it uses its feathers to splash water, escaping under cover of the spray.",
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
            dexEntry: "It administers sharp, powerful pecks with its bill. It whips its long neck to deliver forceful repeated strikes.",
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
            dexEntry: "This Pokémon formed from icicles bathed in energy from the morning sun. It sleeps buried in snow.",
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
            dexEntry: "It conceals itself from enemy eyes by creating many small ice particles and hiding among them.",
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
            dexEntry: "If both heads get angry simultaneously, this Pokémon expels a blizzard, burying everything in snow.",
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
            dexEntry: "The turning of the seasons changes the color and scent of this Pokémon's fur. People use it to mark the seasons.",
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
            dexEntry: "The plants growing on its horns change according to the season. The leaders of the herd possess magnificent horns.",
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
            dexEntry: "They live on treetops and glide using the inside of a cape-like membrane while discharging electricity.",
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
            dexEntry: "When they feel threatened, they spit an acidic liquid to drive attackers away. This Pokémon targets Shelmet.",
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
            dexEntry: "These Pokémon evolve by wearing the shell covering of a Shelmet. The steel armor protects their whole body.",
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
            dexEntry: "For some reason, this Pokémon resembles a Poké Ball. They release poison spores to repel those who try to catch them.",
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
            dexEntry: "They show off their Poké Ball caps to lure prey, but very few Pokémon are fooled by this.",
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
            dexEntry: "They paralyze prey with poison, then drag them down to their lairs, five miles below the surface.",
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
            dexEntry: "They propel themselves by expelling absorbed seawater from their bodies. Their favorite food is life energy.",
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
            dexEntry: "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
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
            dexEntry: "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
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
            dexEntry: "They employ an electrically charged web to trap their prey. While it is immobilized by shock, they leisurely consume it.",
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
            dexEntry: "They stick their spikes into cave walls and absorb the minerals they find in the rock.",
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
            dexEntry: "They attach themselves to cave ceilings, firing steel spikes at targets passing beneath them.",
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
            dexEntry: "Interlocking two bodies and spinning around generates the energy they need to live.",
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
            dexEntry: "Spinning minigears are rotated at high speed and repeatedly fired away. It is dangerous if the gears don't return.",
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
            dexEntry: "The gear with the red core is rotated at high speed for a rapid energy charge.",
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
            dexEntry: "These Pokémon move in schools. They have an electricity-generating organ, so they discharge electricity if in danger.",
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
            dexEntry: "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.",
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
            dexEntry: "With their sucker mouths, they suck in prey. Then they use their fangs to shock the prey with electricity.",
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
            dexEntry: "This Pokémon had never been seen until it appeared from far in the desert 50 years ago.",
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
            dexEntry: "It uses psychic power to control an opponent's brain and tamper with its memories.",
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
            dexEntry: "While shining a light and pretending to be a guide, it leeches off the life force of any who follow it.",
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
            dexEntry: "It arrives near the moment of death and steals spirit from the body.",
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
            dexEntry: "Being consumed in Chandelure's flame burns up the spirit, leaving the body behind.",
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
            dexEntry: "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.",
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
            dexEntry: "Their tusks can shatter rocks. Territory battles between Fraxure can be intensely violent.",
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
            dexEntry: "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.",
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
            dexEntry: "Its nose is always running. It sniffs the snot back up because the mucus provides the raw material for its moves.",
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
            dexEntry: "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.",
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
            dexEntry: "They are born in snow clouds. They use chains made of ice crystals to capture prey.",
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
            dexEntry: "It evolves when bathed in an electric-like energy along with Karrablast. The reason is still unknown.",
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
            dexEntry: "Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
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
            dexEntry: "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.",
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
            dexEntry: "They have mastered elegant combos. As they concentrate, their battle moves become swifter and more precise.",
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
            dexEntry: "They use the long fur on their arms as a whip to strike their opponents.",
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
            dexEntry: "It races through narrow caves, using its sharp claws to catch prey. The skin on its face is harder than a rock",
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
            dexEntry: "These Pokémon are thought to have been created by the science of an ancient and mysterious civilization.",
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
            dexEntry: "It is said that Golurk were ordered to protect people and Pokémon by the ancient people who made them.",
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
            dexEntry: "They fight at Bisharp's command. They cling to their prey and inflict damage by sinking their blades into it.",
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
            dexEntry: "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.",
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
            dexEntry: "They charge wildly and headbutt everything. Their headbutts have enough destructive force to derail a train.",
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
            dexEntry: "They will challenge anything, even strong opponents, without fear. Their frequent fights help them become stronger.",
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
            dexEntry: "The more scars they have, the more respect these brave soldiers of the sky get from their peers.",
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
            dexEntry: "They tend to guard their posteriors with suitable bones they have found. They pursue weak Pokémon.",
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
            dexEntry: "Watching from the sky, they swoop to strike weakened Pokémon on the ground. They decorate themselves with bones.",
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
            dexEntry: "Using their very hot, flame-covered tongues, they burn through Durant's steel bodies and consume their insides.",
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
            dexEntry: "Durant dig nests in mountains. They build their complicated, interconnected tunnels in mazes.",
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
            dexEntry: "They cannot see, so they tackle and bite to learn about their surroundings. Their bodies are covered in wounds.",
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
            dexEntry: "Since their two heads do not get along and compete with each other for food, they always eat too much.",
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
            dexEntry: "The heads on their arms do not have brains. They use all three heads to consume and destroy everything.",
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
            dexEntry: "The base of volcanoes is where they make their homes. They shoot fire from their five horns to repel attacking enemies.",
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
            dexEntry: "A sea of fire engulfs the surroundings of their battles, since they use their six wings to scatter their ember scales.",
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
            dexEntry: "It has a body and heart of steel. Its glare is sufficient to make even an unruly Pokémon obey it.",
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
            dexEntry: "Its charge is strong enough to break through a giant castle wall in one blow. This Pokémon is spoken of in legends.",
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
            dexEntry: "Its head sprouts horns as sharp as blades. Using whirlwind-like movements, it confounds and swiftly cuts opponents.",
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
            dexEntry: "Tornadus expels massive energy from its tail, causing severe storms. Its power is great enough to blow houses away.",
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
            dexEntry: "The spikes on its tail discharge immense bolts of lightning. It flies around the Unova region firing off lightning bolts.",
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
            dexEntry: "When Reshiram's tail flares, the heat energy moves the atmosphere and changes the world's weather.",
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
            dexEntry: "This Pokémon appears in legends. In its tail, it has a giant generator that creates electricity.",
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
            dexEntry: "The energy that comes pouring from its tail increases the nutrition in the soil, making crops grow to great size.",
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
            dexEntry: "It can produce ultracold air. Its body is frozen.",
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
            dexEntry: "It crosses the world, running over the surfaces of oceans and rivers. It appears at scenic waterfronts.",
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
            dexEntry: "Many famous songs have been inspired by the melodies that Meloetta plays.",
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
            dexEntry: "This ancient bug Pokémon was altered by Team Plasma. They upgraded the cannon on its back.",
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