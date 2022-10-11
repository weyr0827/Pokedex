//SoulSilver Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Chikorita",
            imageUrl: "images/152Chikorita.png",
            number: "001",
            type: ["Grass"],
            category: "Leaf",
            region: "Johto",
            generation: "2",
            height: "2'11\"",
            weight: "14.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 6.4,
            dexEntry: "Its pleasantly aromatic leaf has the ability to check humidity and temperature.",
            cryUrl: "cries/152.mp3",
            japaneseName: "Chicorita"
        },
        {
            name: "Bayleef",
            imageUrl: "images/153Bayleef.png",
            number: "002",
            type: ["Grass"],
            category: "Leaf",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "34.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 15.8,
            dexEntry: "A spicy aroma emanates from around its neck. The aroma acts as a stimulant to restore health.",
            cryUrl: "cries/153.mp3",
            japaneseName: "Bayleaf"
        },
        {
            name: "Meganium",
            imageUrl: "images/154Meganium.png",
            number: "003",
            type: ["Grass"],
            category: "Herb",
            region: "Johto",
            generation: "2",
            height: "5'11\"",
            weight: "221.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 100.5,
            dexEntry: "Meganium's breath has the power to revive dead grass and plants. It can make them healthy again.",
            cryUrl: "cries/154.mp3",
            japaneseName: "Meganium"
        },
        {
            name: "Cyndaquil",
            imageUrl: "images/155Cyndaquil.png",
            number: "004",
            type: ["Fire"],
            category: "Fire Mouse",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "17.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 7.9,
            dexEntry: "It usually stays hunched over. If it is angry or surprised, it shoots flames out of its back.",
            cryUrl: "cries/155.mp3",
            japaneseName: "Hinoarashi"
        },
        {
            name: "Quilava",
            imageUrl: "images/156Quilava.png",
            number: "005",
            type: ["Fire"],
            category: "Volcano",
            region: "Johto",
            generation: "2",
            height: "2'11\"",
            weight: "41.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.0,
            dexEntry: "This Pokémon is fully covered by nonflammable fur. It can withstand any kind of fire attack.",
            cryUrl: "cries/156.mp3",
            japaneseName: "Magmarashi"
        },
        {
            name: "Typhlosion",
            imageUrl: "images/157Typhlosion.png",
            number: "006",
            type: ["Fire"],
            category: "Volcano",
            region: "Johto",
            generation: "2",
            height: "5'07\"",
            weight: "175.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 79.5,
            dexEntry: "It has a secret, devastating move. It rubs its blazing fur together to cause huge explosions.",
            cryUrl: "cries/157.mp3",
            japaneseName: "Bakphoon"
        },
        {
            name: "Totodile",
            imageUrl: "images/158Totodile.png",
            number: "007",
            type: ["Water"],
            category: "Big Jaw",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.5,
            dexEntry: "It is small but rough and tough. It won't hesitate to take a bite out of anything that moves.",
            cryUrl: "cries/158.mp3",
            japaneseName: "Waninoko"
        },
        {
            name: "Croconaw",
            imageUrl: "images/159Croconaw.png",
            number: "008",
            type: ["Water"],
            category: "Big Jaw",
            region: "Johto",
            generation: "2",
            height: "3'07\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 25.0,
            dexEntry: "It opens its huge jaws wide when attacking. If it loses any fangs while biting, they grow back in.",
            cryUrl: "cries/159.mp3",
            japaneseName: "Alligates"
        },
        {
            name: "Feraligatr",
            imageUrl: "images/160Feraligatr.png",
            number: "009",
            type: ["Water"],
            category: "Big Jaw",
            region: "Johto",
            generation: "2",
            height: "7'07\"",
            weight: "195.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.3,
            metricWeight: 88.8,
            dexEntry: "It is hard for it to support its own weight out of water, so it sometimes gets down on all fours. But it moves fast.",
            cryUrl: "cries/160.mp3",
            japaneseName: "Ordile"
        },
        {
            name: "Pidgey",
            imageUrl: "images/016Pidgey.png",
            number: "010",
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
            dexEntry: "Common in grassy areas and forests, it is very docile and will chase off enemies by flapping up sand.",
            cryUrl: "cries/016.mp3",
            japaneseName: "Poppo"
        },
        {
            name: "Pidgeotto",
            imageUrl: "images/017Pidgeotto.png",
            number: "011",
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
            dexEntry: "It renders its prey immobile using well-developed claws, then carries the prey more than 60 miles to its nest.",
            cryUrl: "cries/017.mp3",
            japaneseName: "Pigeon"
        },
        {
            name: "Pidgeot",
            imageUrl: "images/018Pidgeot.png",
            number: "012",
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
            dexEntry: "It spreads its beautiful wings wide to frighten its enemies. It can fly at Mach 2 speed.",
            cryUrl: "cries/018.mp3",
            japaneseName: "Pigeot"
        },
        {
            name: "Spearow",
            imageUrl: "images/021Spearow.png",
            number: "013",
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
            dexEntry: "Very protective of its territory, it flaps its short wings busily to dart around at high speed.",
            cryUrl: "cries/021.mp3",
            japaneseName: "Onisuzume"
        },
        {
            name: "Fearow",
            imageUrl: "images/022Fearow.png",
            number: "014",
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
            dexEntry: "It cleverly uses its thin, long beak to pluck and eat small insects that hide under the ground.",
            cryUrl: "cries/022.mp3",
            japaneseName: "Onidrill"
        },
        {
            name: "Hoothoot",
            imageUrl: "images/163Hoothoot.png",
            number: "015",
            type: ["Normal", "Flying"],
            category: "Owl",
            region: "Johto",
            generation: "2",
            height: "2'04\"",
            weight: "46.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 21.2,
            dexEntry: "It has a perfect sense of time. Whatever happens, it keeps rhythm by precisely tilting its head in time.",
            cryUrl: "cries/163.mp3",
            japaneseName: "Hoho"
        },
        {
            name: "Noctowl",
            imageUrl: "images/164Noctowl.png",
            number: "016",
            type: ["Normal", "Flying"],
            category: "Owl",
            region: "Johto",
            generation: "2",
            height: "5'03\"",
            weight: "89.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 40.8,
            dexEntry: "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power.",
            cryUrl: "cries/164.mp3",
            japaneseName: "Yorunozuku"
        },
        {
            name: "Rattata",
            imageUrl: "images/019Rattata.png",
            number: "017",
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
            dexEntry: "Living wherever there is food available, it ceaselessly scavenges for edibles the entire day.",
            cryUrl: "cries/019.mp3",
            japaneseName: "Koratta"
        },
        {
            name: "Raticate",
            imageUrl: "images/020Raticate.png",
            number: "018",
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
            dexEntry: "Its whiskers help it to maintain balance. Its fangs never stop growing, so it gnaws to pare them down.",
            cryUrl: "cries/020.mp3",
            japaneseName: "Ratta"
        },
        {
            name: "Sentret",
            imageUrl: "images/161Sentret.png",
            number: "019",
            type: ["Normal"],
            category: "Scout",
            region: "Johto",
            generation: "2",
            height: "2'07\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 6.0,
            dexEntry: "It stands on its tail so it can see a long way. If it spots an enemy, it cries loudly to warn its kind.",
            cryUrl: "cries/161.mp3",
            japaneseName: "Otachi"
        },
        {
            name: "Furret",
            imageUrl: "images/162Furret.png",
            number: "020",
            type: ["Normal"],
            category: "Long Body",
            region: "Johto",
            generation: "2",
            height: "5'11\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 32.5,
            dexEntry: "There is no telling where the tail begins. Despite its short legs, it is quick and likes to chase Rattata.",
            cryUrl: "cries/162.mp3",
            japaneseName: "Ootachi"
        },
        {
            name: "Pichu",
            imageUrl: "images/172Pichu.png",
            number: "021",
            type: ["Electric"],
            category: "Tiny Mouse",
            region: "Johto",
            generation: "2",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "Despite its small size, it can zap even adult humans. However, if it does so, it also surprises itself.",
            cryUrl: "cries/172.mp3",
            japaneseName: "Pichu"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "022",
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
            dexEntry: "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose.",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "023",
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
            dexEntry: "If the electric pouches in its cheeks become fully charged, both ears will stand straight up.",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Caterpie",
            imageUrl: "images/010Caterpie.png",
            number: "024",
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
            dexEntry: "Its feet have suction cups designed to stick to any surface. It tenaciously climbs trees to forage.",
            cryUrl: "cries/010.mp3",
            japaneseName: "Caterpie"
        },
        {
            name: "Metapod",
            imageUrl: "images/011Metapod.png",
            number: "025",
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
            dexEntry: "It prepares for evolution by hardening its shell as much as possible to protect its soft body.",
            cryUrl: "cries/011.mp3",
            japaneseName: "Transel"
        },
        {
            name: "Butterfree",
            imageUrl: "images/012Butterfree.png",
            number: "026",
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
            dexEntry: "Water-repellent powder on its wings enables it to collect honey, even in the heaviest of rains.",
            cryUrl: "cries/012.mp3",
            japaneseName: "Butterfree"
        },
        {
            name: "Weedle",
            imageUrl: "images/013Weedle.png",
            number: "027",
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
            dexEntry: "It attacks using a two-inch poison barb on its head. It can usually be found under the leaves it eats.",
            cryUrl: "cries/013.mp3",
            japaneseName: "Beedle"
        },
        {
            name: "Kakuna",
            imageUrl: "images/014Kakuna.png",
            number: "028",
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
            dexEntry: "From this form, it will grow into an adult. As its body becomes softer, the external shell hardens.",
            cryUrl: "cries/014.mp3",
            japaneseName: "Cocoon"
        },
        {
            name: "Beedrill",
            imageUrl: "images/015Beedrill.png",
            number: "029",
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
            dexEntry: "It has three poison barbs. The barb on its tail secretes the most powerful poison.",
            cryUrl: "cries/015.mp3",
            japaneseName: "Spear"
        },
        {
            name: "Ledyba",
            imageUrl: "images/165Ledyba.png",
            number: "030",
            type: ["Bug", "Flying"],
            category: "Five Star",
            region: "Johto",
            generation: "2",
            height: "3'03\"",
            weight: "23.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 10.8,
            dexEntry: "When the weather turns cold, lots of Ledyba gather from everywhere to cluster and keep each other warm.",
            cryUrl: "cries/165.mp3",
            japaneseName: "Rediba"
        },
        {
            name: "Ledian",
            imageUrl: "images/166Ledian.png",
            number: "031",
            type: ["Bug", "Flying"],
            category: "Five Star",
            region: "Johto",
            generation: "2",
            height: "4'07\"",
            weight: "78.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 35.6,
            dexEntry: "The spot patterns on its back grow larger or smaller depending on the number of stars in the night sky.",
            cryUrl: "cries/166.mp3",
            japaneseName: "Redian"
        },
        {
            name: "Spinarak",
            imageUrl: "images/167Spinarak.png",
            number: "032",
            type: ["Bug", "Poison"],
            category: "String Spit",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 8.5,
            dexEntry: "It spins a web using fine--but durable--thread. It then waits patiently for prey to be trapped.",
            cryUrl: "cries/167.mp3",
            japaneseName: "Itomaru"
        },
        {
            name: "Ariados",
            imageUrl: "images/168Ariados.png",
            number: "033",
            type: ["Bug", "Poison"],
            category: "Long Leg",
            region: "Johto",
            generation: "2",
            height: "3'07\"",
            weight: "73.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 33.5,
            dexEntry: "A single strand of a special string is endlessly spun out of its rear. The string leads back to its nest.",
            cryUrl: "cries/168.mp3",
            japaneseName: "Ariados"
        },
        {
            name: "Geodude",
            imageUrl: "images/074Geodude.png",
            number: "034",
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
            dexEntry: "It uses its arms to steadily climb steep mountain paths. It swings its fists around if angered.",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "images/075Graveler.png",
            number: "035",
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
            dexEntry: "A slow walker, it rolls to move. It pays no attention to any object that happens to be in its path.",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "images/076Golem.png",
            number: "036",
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
            dexEntry: "It is capable of blowing itself up. It uses this explosive force to jump from mountain to mountain.",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Zubat",
            imageUrl: "images/041Zubat.png",
            number: "037",
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
            dexEntry: "Capable of flying safely in dark places, it emits ultrasonic cries to check for any obstacles.",
            cryUrl: "cries/041.mp3",
            japaneseName: "Zubat"
        },
        {
            name: "Golbat",
            imageUrl: "images/042Golbat.png",
            number: "038",
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
            dexEntry: "It can drink more than 10 ounces of blood at once. If it has too much, it gets heavy and flies clumsily.",
            cryUrl: "cries/042.mp3",
            japaneseName: "Golbat"
        },
        {
            name: "Crobat",
            imageUrl: "images/169Crobat.png",
            number: "039",
            type: ["Poison", "Flying"],
            category: "Bat",
            region: "Johto",
            generation: "2",
            height: "5'11\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 75.0,
            dexEntry: "The development of wings on its legs enables it to fly fast but also makes it tough to stop and rest.",
            cryUrl: "cries/169.mp3",
            japaneseName: "Crobat"
        },
        {
            name: "Cleffa",
            imageUrl: "images/173Cleffa.png",
            number: "040",
            type: ["Normal"],
            category: "Star Shape",
            region: "Johto",
            generation: "2",
            height: "1'00\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.0,
            dexEntry: "When numerous meteors illuminate the night sky, sightings of Cleffa strangely increase.",
            cryUrl: "cries/173.mp3",
            japaneseName: "Py"
        },
        {
            name: "Clefairy",
            imageUrl: "images/035Clefairy.png",
            number: "041",
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
            dexEntry: "Its adorable behavior and cry make it highly popular. However, this cute Pokémon is rarely found.",
            cryUrl: "cries/035.mp3",
            japaneseName: "Pippi"
        },
        {
            name: "Clefable",
            imageUrl: "images/036Clefable.png",
            number: "042",
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
            dexEntry: "Its very sensitive ears let it distinguish distant sounds. As a result, it prefers quiet places.",
            cryUrl: "cries/036.mp3",
            japaneseName: "Pixy"
        },
        {
            name: "Igglybuff",
            imageUrl: "images/174Igglybuff.png",
            number: "043",
            type: ["Normal"],
            category: "Balloon",
            region: "Johto",
            generation: "2",
            height: "1'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.0,
            dexEntry: "Its extremely flexible and elastic body makes it bounce continuously—anytime, anywhere.",
            cryUrl: "cries/174.mp3",
            japaneseName: "Pupurin"
        },
        {
            name: "Jigglypuff",
            imageUrl: "images/039Jigglypuff.png",
            number: "044",
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
            dexEntry: "Looking into its cute, round eyes causes it to sing a relaxing melody, inducing its enemies to sleep.",
            cryUrl: "cries/039.mp3",
            japaneseName: "Purin"
        },
        {
            name: "Wigglytuff",
            imageUrl: "images/040Wigglytuff.png",
            number: "045",
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
            dexEntry: "It has a very fine fur. Take care not to make it angry, or it may inflate steadily and hit with a body slam.",
            cryUrl: "cries/040.mp3",
            japaneseName: "Pukurin"
        },
        {
            name: "Togepi",
            imageUrl: "images/175Togepi.png",
            number: "046",
            type: ["Normal"],
            category: "Spike Ball",
            region: "Johto",
            generation: "2",
            height: "1'00\"",
            weight: "3.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.3,
            dexEntry: "A proverb claims that happiness will come to anyone who can make a sleeping Togepi stand up.",
            cryUrl: "cries/175.mp3",
            japaneseName: "Togepy"
        },
        {
            name: "Togetic",
            imageUrl: "images/176Togetic.png",
            number: "047",
            type: ["Normal", "Flying"],
            category: "Happiness",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "7.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 3.2,
            dexEntry: "It grows dispirited if it is not with kind people. It can float in midair without moving its wings.",
            cryUrl: "cries/176.mp3",
            japaneseName: "Togechick"
        },
        {
            name: "Sandshrew",
            imageUrl: "images/027Sandshrew.png",
            number: "048",
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
            dexEntry: "Disliking water, it lives in deep burrows in arid areas. It can roll itself instantly into a ball.",
            cryUrl: "cries/027.mp3",
            japaneseName: "Sand"
        },
        {
            name: "Sandslash",
            imageUrl: "images/028Sandslash.png",
            number: "049",
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
            dexEntry: "If it digs at an incredible pace, it may snap off its spike and claws. They grow back in a day.",
            cryUrl: "cries/028.mp3",
            japaneseName: "Sandpan"
        },
        {
            name: "Ekans",
            imageUrl: "images/023Ekans.png",
            number: "050",
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
            dexEntry: "It always hides in grass. When first born, it has no poison, so its bite is painful, but harmless.",
            cryUrl: "cries/023.mp3",
            japaneseName: "Arbo"
        },
        {
            name: "Arbok",
            imageUrl: "images/024Arbok.png",
            number: "051",
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
            dexEntry: "With a very vengeful nature, it won't give up the chase, no matter how far, once it targets its prey.",
            cryUrl: "cries/024.mp3",
            japaneseName: "Arbok"
        },
        {
            name: "Dunsparce",
            imageUrl: "images/206Dunsparce.png",
            number: "052",
            type: ["Normal"],
            category: "Land Snake",
            region: "Johto",
            generation: "2",
            height: "4'11\"",
            weight: "30.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 14.0,
            dexEntry: "If spotted, it escapes by burrowing with its tail. It can float just slightly using its wings.",
            cryUrl: "cries/206.mp3",
            japaneseName: "Nokocchi"
        },
        {
            name: "Mareep",
            imageUrl: "images/179Mareep.png",
            number: "053",
            type: ["Electric"],
            category: "Wool",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "17.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.8,
            dexEntry: "Its fleece grows continually. In the summer, the fleece is fully shed, but it grows back in a week.",
            cryUrl: "cries/179.mp3",
            japaneseName: "Merriep"
        },
        {
            name: "Flaaffy",
            imageUrl: "images/180Flaaffy.png",
            number: "054",
            type: ["Electric"],
            category: "Wool",
            region: "Johto",
            generation: "2",
            height: "2'07\"",
            weight: "29.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 13.3,
            dexEntry: "Its fluffy fleece easily stores electricity. Its rubbery hide keeps it from being electrocuted.",
            cryUrl: "cries/180.mp3",
            japaneseName: "Mokoko"
        },
        {
            name: "Ampharos",
            imageUrl: "images/181Ampharos.png",
            number: "055",
            type: ["Electric"],
            category: "Light",
            region: "Johto",
            generation: "2",
            height: "4'07\"",
            weight: "135.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 61.5,
            dexEntry: "The bright light on its tail can be seen far away. It has been treasured since ancient times as a beacon.",
            cryUrl: "cries/181.mp3",
            japaneseName: "Denryu"
        },
        {
            name: "Wooper",
            imageUrl: "images/194Wooper.png",
            number: "056",
            type: ["Water", "Ground"],
            category: "Water Fish",
            region: "Johto",
            generation: "2",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "When it walks around on the ground, it coats its body with a slimy, poisonous film.",
            cryUrl: "cries/194.mp3",
            japaneseName: "Upah"
        },
        {
            name: "Quagsire",
            imageUrl: "images/195Quagsire.png",
            number: "057",
            type: ["Water", "Ground"],
            category: "Water Fish",
            region: "Johto",
            generation: "2",
            height: "4'07\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 75.0,
            dexEntry: "Due to its relaxed and carefree attitude, it often bumps its head on boulders and boat hulls as it swims.",
            cryUrl: "cries/195.mp3",
            japaneseName: "Nuoh"
        },
        {
            name: "Gastly",
            imageUrl: "images/092Gastly.png",
            number: "058",
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
            dexEntry: "Its thin body is made of gas. Despite lacking substance, it can envelop an opponent of any size and cause suffocation.",
            cryUrl: "cries/092.mp3",
            japaneseName: "Ghos"
        },
        {
            name: "Haunter",
            imageUrl: "images/093Haunter.png",
            number: "059",
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
            dexEntry: "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.",
            cryUrl: "cries/093.mp3",
            japaneseName: "Ghost"
        },
        {
            name: "Gengar",
            imageUrl: "images/094Gengar.png",
            number: "060",
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
            dexEntry: "To steal the life of its target, it slips into the prey's shadow and silently waits for an opportunity.",
            cryUrl: "cries/094.mp3",
            japaneseName: "Gangar"
        },
        {
            name: "Unown",
            imageUrl: "images/201Unown.png",
            number: "061",
            type: ["Psychic"],
            category: "Symbol",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.0,
            dexEntry: "Its flat, thin body is always stuck on walls. Its shape appears to have some meaning.",
            cryUrl: "cries/201.mp3",
            japaneseName: "Unknown"
        },
        {
            name: "Onix",
            imageUrl: "images/095Onix.png",
            number: "062",
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
            dexEntry: "It rapidly bores through the ground at 50 mph by squirming and twisting its massive, rugged body.",
            cryUrl: "cries/095.mp3",
            japaneseName: "Iwark"
        },
        {
            name: "Steelix",
            imageUrl: "images/208Steelix.png",
            number: "063",
            type: ["Steel", "Ground"],
            category: "Iron Snake",
            region: "Johto",
            generation: "2",
            height: "30'02\"",
            weight: "881.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 9.2,
            metricWeight: 400.0,
            dexEntry: "It is said that if an Onix lives for 100 years, its composition becomes diamondlike as it evolves into a Steelix.",
            cryUrl: "cries/208.mp3",
            japaneseName: "Haganeil"
        },
        {
            name: "Bellsprout",
            imageUrl: "images/069Bellsprout.png",
            number: "064",
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
            dexEntry: "It plants its feet deep underground to replenish water. It can't escape its enemy while it's rooted.",
            cryUrl: "cries/069.mp3",
            japaneseName: "Madatsubomi"
        },
        {
            name: "Weepinbell",
            imageUrl: "images/070Weepinbell.png",
            number: "065",
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
            dexEntry: "If its prey is bigger than its mouth, it slices up the victim with sharp leaves, then eats every morsel.",
            cryUrl: "cries/070.mp3",
            japaneseName: "Utsudon"
        },
        {
            name: "Victreebel",
            imageUrl: "images/071Victreebel.png",
            number: "066",
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
            dexEntry: "This horrifying plant Pokémon attracts prey with aromatic honey, then melts them in its mouth.",
            cryUrl: "cries/071.mp3",
            japaneseName: "Utsubot"
        },
        {
            name: "Hoppip",
            imageUrl: "images/187Hoppip.png",
            number: "067",
            type: ["Grass", "Flying"],
            category: "Cottonweed",
            region: "Johto",
            generation: "2",
            height: "1'04\"",
            weight: "1.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 0.5,
            dexEntry: "Its body is so light, it must grip the ground firmly with its feet to keep from being blown away.",
            cryUrl: "cries/187.mp3",
            japaneseName: "Hanecco"
        },
        {
            name: "Skiploom",
            imageUrl: "images/188Skiploom.png",
            number: "068",
            type: ["Grass", "Flying"],
            category: "Cottonweed",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 1.0,
            dexEntry: "It spreads its petals to absorb sunlight. It also floats in the air to get closer to the sun.",
            cryUrl: "cries/188.mp3",
            japaneseName: "Popocco"
        },
        {
            name: "Jumpluff",
            imageUrl: "images/189Jumpluff.png",
            number: "069",
            type: ["Grass", "Flying"],
            category: "Cottonweed",
            region: "Johto",
            generation: "2",
            height: "2'07\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 3.0,
            dexEntry: "Drifts on seasonal winds and spreads its cotton-like spores all over the world to make more offspring.",
            cryUrl: "cries/189.mp3",
            japaneseName: "Watacco"
        },
        {
            name: "Paras",
            imageUrl: "images/046Paras.png",
            number: "070",
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
            dexEntry: "As its body grows, large mushrooms named tochukaso start sprouting out of its back.",
            cryUrl: "cries/046.mp3",
            japaneseName: "Paras"
        },
        {
            name: "Parasect",
            imageUrl: "images/047Parasect.png",
            number: "071",
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
            dexEntry: "The larger the mushroom on its back grows, the stronger the mushroom spores it scatters.",
            cryUrl: "cries/047.mp3",
            japaneseName: "Parasect"
        },
        {
            name: "Poliwag",
            imageUrl: "images/060Poliwag.png",
            number: "072",
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
            dexEntry: "The direction of its belly spiral differs by area. The equator is thought to have an effect on this.",
            cryUrl: "cries/060.mp3",
            japaneseName: "Nyoromo"
        },
        {
            name: "Poliwhirl",
            imageUrl: "images/061Poliwhirl.png",
            number: "073",
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
            dexEntry: "The skin on most of its body is moist. However, the skin on its belly spiral feels smooth.",
            cryUrl: "cries/061.mp3",
            japaneseName: "Nyorozo"
        },
        {
            name: "Poliwrath",
            imageUrl: "images/062Poliwrath.png",
            number: "074",
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
            dexEntry: "Although an energetic, skilled swimmer that uses all of its muscles, it lives on dry land.",
            cryUrl: "cries/062.mp3",
            japaneseName: "Nyorobon"
        },
        {
            name: "Politoed",
            imageUrl: "images/186Politoed.png",
            number: "075",
            type: ["Water"],
            category: "Frog",
            region: "Johto",
            generation: "2",
            height: "3'07\"",
            weight: "74.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 33.9,
            dexEntry: "Whenever three or more of these get together, they sing in a loud voice that sounds like bellowing.",
            cryUrl: "cries/186.mp3",
            japaneseName: "Nyorotono"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "076",
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
            dexEntry: "For no reason, it jumps and splashes about, making it easy for predators like Pidgeotto to catch it mid-jump.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "077",
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
            dexEntry: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Goldeen",
            imageUrl: "images/118Goldeen.png",
            number: "078",
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
            dexEntry: "A strong swimmer, it is capable of swimming nonstop up fast streams at a steady speed of five knots per hour.",
            cryUrl: "cries/118.mp3",
            japaneseName: "Tosakinto"
        },
        {
            name: "Seaking",
            imageUrl: "images/119Seaking.png",
            number: "079",
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
            dexEntry: "Using its horn, it bores holes in riverbed boulders, making nests to prevent its eggs from washing away.",
            cryUrl: "cries/119.mp3",
            japaneseName: "Azumao"
        },
        {
            name: "Slowpoke",
            imageUrl: "images/079Slowpoke.png",
            number: "080",
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
            dexEntry: "A sweet sap leaks from its tail's tip. Although not nutritious, the tail is pleasant to chew on.",
            cryUrl: "cries/079.mp3",
            japaneseName: "Yadon"
        },
        {
            name: "Slowbro",
            imageUrl: "images/080Slowbro.png",
            number: "081",
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
            dexEntry: "Naturally dull to begin with, it lost its ability to feel pain due to Shellder's seeping poison.",
            cryUrl: "cries/080.mp3",
            japaneseName: "Yadoran"
        },
        {
            name: "Slowking",
            imageUrl: "images/199Slowking.png",
            number: "082",
            type: ["Water", "Psychic"],
            category: "Royal",
            region: "Johto",
            generation: "2",
            height: "6'07\"",
            weight: "175.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 79.5,
            dexEntry: "When its head was bitten, toxins entered Slowpoke's head and unlocked an extraordinary power.",
            cryUrl: "cries/199.mp3",
            japaneseName: "Yadoking"
        },
        {
            name: "Oddish",
            imageUrl: "images/043Oddish.png",
            number: "083",
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
            dexEntry: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
            cryUrl: "cries/043.mp3",
            japaneseName: "Nazonokusa"
        },
        {
            name: "Gloom",
            imageUrl: "images/044Gloom.png",
            number: "084",
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
            dexEntry: "It secretes a sticky, drool-like honey. Although sweet, it smells too repulsive to get very close.",
            cryUrl: "cries/044.mp3",
            japaneseName: "Kusaihana"
        },
        {
            name: "Vileplume",
            imageUrl: "images/045Vileplume.png",
            number: "085",
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
            dexEntry: "The bud bursts into bloom with a bang. It then starts scattering allergenic, poisonous pollen.",
            cryUrl: "cries/045.mp3",
            japaneseName: "Ruffresia"
        },
        {
            name: "Bellossom",
            imageUrl: "images/182Bellossom.png",
            number: "086",
            type: ["Grass"],
            category: "Flower",
            region: "Johto",
            generation: "2",
            height: "1'04\"",
            weight: "12.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.8,
            dexEntry: "Plentiful in the tropics. When it dances, its petals rub together and make a pleasant ringing sound.",
            cryUrl: "cries/182.mp3",
            japaneseName: "Kireihana"
        },
        {
            name: "Drowzee",
            imageUrl: "images/096Drowzee.png",
            number: "087",
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
            dexEntry: "It remembers every dream it eats. It rarely eats the dreams of adults because children's are much tastier.",
            cryUrl: "cries/096.mp3",
            japaneseName: "Sleepe"
        },
        {
            name: "Hypno",
            imageUrl: "images/097Hypno.png",
            number: "088",
            type: ["Psychic"],
            category: "Hypnosis",
            region: "Kanto",
            generation: "1",
            height: "5'03\"",
            weight: "166.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 75.6,
            dexEntry: "Always holding a pendulum that it swings at a steady rhythm, it causes drowsiness in anyone nearby.",
            cryUrl: "cries/097.mp3",
            japaneseName: "Sleeper"
        },
        {
            name: "Abra",
            imageUrl: "images/063Abra.png",
            number: "089",
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
            dexEntry: "If it decides to teleport randomly, it evokes the illusion that it has created copies of itself.",
            cryUrl: "cries/063.mp3",
            japaneseName: "Casey"
        },
        {
            name: "Kadabra",
            imageUrl: "images/064Kadabra.png",
            number: "090",
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
            dexEntry: "If it uses its abilities, it emits special alpha waves that cause machines to malfunction.",
            cryUrl: "cries/064.mp3",
            japaneseName: "Yungerer"
        },
        {
            name: "Alakazam",
            imageUrl: "images/065Alakazam.png",
            number: "091",
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
            dexEntry: "Its brain cells multiply continually until it dies. As a result, it remembers everything.",
            cryUrl: "cries/065.mp3",
            japaneseName: "Foodin"
        },
        {
            name: "Ditto",
            imageUrl: "images/132Ditto.png",
            number: "092",
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
            dexEntry: "Its transformation ability is perfect. However, if made to laugh, it can't maintain its disguise.",
            cryUrl: "cries/132.mp3",
            japaneseName: "Metamon"
        },
        {
            name: "Pineco",
            imageUrl: "images/204Pineco.png",
            number: "093",
            type: ["Bug"],
            category: "Bagworm",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "15.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.2,
            dexEntry: "It hangs and waits for flying insect prey to come near. It does not move about much on its own.",
            cryUrl: "cries/204.mp3",
            japaneseName: "Kunugidama"
        },
        {
            name: "Forretress",
            imageUrl: "images/205Forretress.png",
            number: "094",
            type: ["Bug", "Steel"],
            category: "Bagworm",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "277.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 125.8,
            dexEntry: "It remains immovably rooted to its tree. It scatters pieces of its hard shell to drive its enemies away.",
            cryUrl: "cries/205.mp3",
            japaneseName: "Foretos"
        },
        {
            name: "Nidoran♀",
            imageUrl: "images/029NidoranF.png",
            number: "095",
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
            dexEntry: "Although not very combative, it will torment its foes with poison spikes if it is threatened in any way.",
            cryUrl: "cries/029.mp3",
            japaneseName: "Nidoran♀"
        },
        {
            name: "Nidorina",
            imageUrl: "images/030Nidorina.png",
            number: "096",
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
            dexEntry: "It has a calm and caring nature. Because its horn grows slowly, it prefers not to fight.",
            cryUrl: "cries/030.mp3",
            japaneseName: "Nidorina"
        },
        {
            name: "Nidoqueen",
            imageUrl: "images/031Nidoqueen.png",
            number: "097",
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
            dexEntry: "It uses its scaly rugged body to seal the entrance of its nest and protect its young from predators.",
            cryUrl: "cries/031.mp3",
            japaneseName: "Nidoqueen"
        },
        {
            name: "Nidoran♂",
            imageUrl: "images/032NidoranM.png",
            number: "098",
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
            dexEntry: "It raises its big ears to check its surroundings. It will strike first if it senses any danger.",
            cryUrl: "cries/032.mp3",
            japaneseName: "Nidoran♂"
        },
        {
            name: "Nidorino",
            imageUrl: "images/033Nidorino.png",
            number: "099",
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
            dexEntry: "Quick to anger, it stabs enemies with its horn to inject a powerful poison when it becomes agitated.",
            cryUrl: "cries/033.mp3",
            japaneseName: "Nidorino"
        },
        {
            name: "Nidoking",
            imageUrl: "images/034Nidoking.png",
            number: "100",
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
            dexEntry: "Its tail is thick and powerful. If it binds an enemy, it can render the victim helpless quite easily.",
            cryUrl: "cries/034.mp3",
            japaneseName: "Nidoking"
        },
        {
            name: "Yanma",
            imageUrl: "images/193Yanma.png",
            number: "101",
            type: ["Bug", "Flying"],
            category: "Clear Wing",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.0,
            dexEntry: "Its large eyes can scan 360 degrees. It looks in all directions to seek out insects as its prey.",
            cryUrl: "cries/193.mp3",
            japaneseName: "Yanyanma"
        },
        {
            name: "Yanmega",
            imageUrl: "images/469Yanmega.png",
            number: "102",
            type: ["Bug", "Flying"],
            category: "Ogre Darner",
            region: "Sinnoh",
            generation: "4",
            height: "6'03\"",
            weight: "113.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 51.5,
            dexEntry: "The beat of its wings is so powerful that it accidentally dislodges full-grown trees when it takes off in flight.",
            cryUrl: "cries/469.mp3",
            japaneseName: "Megayanma"
        },
        {
            name: "Sunkern",
            imageUrl: "images/191Sunkern.png",
            number: "103",
            type: ["Grass"],
            category: "Seed",
            region: "Johto",
            generation: "2",
            height: "1'00\"",
            weight: "4.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.8,
            dexEntry: "It lives by drinking only dewdrops from under the leaves of plants. It is said that it eats nothing else.",
            cryUrl: "cries/191.mp3",
            japaneseName: "Himanuts"
        },
        {
            name: "Sunflora",
            imageUrl: "images/192Sunflora.png",
            number: "104",
            type: ["Grass"],
            category: "Sun",
            region: "Johto",
            generation: "2",
            height: "2'07\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 8.5,
            dexEntry: "In the daytime, it rushes about in a hectic manner, but it comes to a complete stop when the sun sets.",
            cryUrl: "cries/192.mp3",
            japaneseName: "Kimawari"
        },
        {
            name: "Exeggcute",
            imageUrl: "images/102Exeggcute.png",
            number: "105",
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
            dexEntry: "Using telepathy only they can employ, they always form a cluster of six Exeggcute.",
            cryUrl: "cries/102.mp3",
            japaneseName: "Tamatama"
        },
        {
            name: "Exeggutor",
            imageUrl: "images/103Exeggutor.png",
            number: "106",
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
            dexEntry: "If a head drops off, it emits a telepathic call in search of others to form an Exeggcute cluster.",
            cryUrl: "cries/103.mp3",
            japaneseName: "Nassy"
        },
        {
            name: "Sudowoodo",
            imageUrl: "images/185Sudowoodo.png",
            number: "107",
            type: ["Rock"],
            category: "Imitation",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.0,
            dexEntry: "It disguises itself as a tree to avoid attack. It hates water, so it will disappear if it starts raining.",
            cryUrl: "cries/185.mp3",
            japaneseName: "Usokkie"
        },
        {
            name: "Wobbuffet",
            imageUrl: "images/202Wobbuffet.png",
            number: "108",
            type: ["Psychic"],
            category: "Patient",
            region: "Johto",
            generation: "2",
            height: "4'03\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 28.5,
            dexEntry: "To keep its pitch-black tail hidden, it lives quietly in the darkness. It is never first to attack.",
            cryUrl: "cries/202.mp3",
            japaneseName: "Sonans"
        },
        {
            name: "Venonat",
            imageUrl: "images/048Venonat.png",
            number: "109",
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
            dexEntry: "Poison oozes from all over its body. It catches and eats small bugs at night that are attracted by light.",
            cryUrl: "cries/048.mp3",
            japaneseName: "Kongpang"
        },
        {
            name: "Venomoth",
            imageUrl: "images/049Venomoth.png",
            number: "110",
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
            dexEntry: "The powder on its wings is poisonous if it is dark in hue. If it is light in hue, it causes paralysis.",
            cryUrl: "cries/049.mp3",
            japaneseName: "Morphon"
        },
        {
            name: "Scyther",
            imageUrl: "images/123Scyther.png",
            number: "111",
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
            dexEntry: "When it moves, it leaves only a blur. If it hides in grass, its protective coloration makes it invisible.",
            cryUrl: "cries/123.mp3",
            japaneseName: "Strike"
        },
        {
            name: "Scizor",
            imageUrl: "images/212Scizor.png",
            number: "112",
            type: ["Bug", "Steel"],
            category: "Pincer",
            region: "Johto",
            generation: "2",
            height: "5'11\"",
            weight: "260.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 118.0,
            dexEntry: "Its wings are not used for flying. They are flapped at high speed to adjust its body temperature.",
            cryUrl: "cries/212.mp3",
            japaneseName: "Hassam"
        },
        {
            name: "Pinsir",
            imageUrl: "images/127Pinsir.png",
            number: "113",
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
            dexEntry: "It swings its long pincer horns wildly to attack. During cold periods, it hides deep in forests.",
            cryUrl: "cries/127.mp3",
            japaneseName: "Kailios"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "114",
            type: ["Bug", "Fighting"],
            category: "Single Horn",
            region: "Johto",
            generation: "2",
            height: "4'11\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 54.0,
            dexEntry: "It is usually docile, but if it is disturbed while sipping honey, it chases off the intruder with its horn.",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Koffing",
            imageUrl: "images/109Koffing.png",
            number: "115",
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
            dexEntry: "The poisonous gases it contains are a little bit lighter than air, keeping it slightly airborne.",
            cryUrl: "cries/109.mp3",
            japaneseName: "Dogars"
        },
        {
            name: "Weezing",
            imageUrl: "images/110Weezing.png",
            number: "116",
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
            dexEntry: "Top-grade perfume is made using its internal poison gases by diluting them to the highest level.",
            cryUrl: "cries/110.mp3",
            japaneseName: "Matadogas"
        },
        {
            name: "Grimer",
            imageUrl: "images/088Grimer.png",
            number: "117",
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
            dexEntry: "Wherever Grimer has passed, so many germs are left behind that no plants will ever grow again.",
            cryUrl: "cries/088.mp3",
            japaneseName: "Betbeter"
        },
        {
            name: "Muk",
            imageUrl: "images/089Muk.png",
            number: "118",
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
            dexEntry: "Its body is made of a powerful poison. Touching it accidentally will cause a fever that requires bed rest.",
            cryUrl: "cries/089.mp3",
            japaneseName: "Betbeton"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "119",
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
            dexEntry: "The units at the sides of its body generate antigravity energy to keep it aloft in the air.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "120",
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
            dexEntry: "The Magnemite are united by a magnetism so powerful, it dries all moisture in its vicinity.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Voltorb",
            imageUrl: "images/100Voltorb.png",
            number: "121",
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
            dexEntry: "It was discovered when Poké Balls were introduced. It is said that there is some connection.",
            cryUrl: "cries/100.mp3",
            japaneseName: "Biriridama"
        },
        {
            name: "Electrode",
            imageUrl: "images/101Electrode.png",
            number: "122",
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
            dexEntry: "It stores an overflowing amount of electric energy inside its body. Even a small shock makes it explode.",
            cryUrl: "cries/101.mp3",
            japaneseName: "Marumine"
        },
        {
            name: "Aipom",
            imageUrl: "images/190Aipom.png",
            number: "123",
            type: ["Normal"],
            category: "Long Tail",
            region: "Johto",
            generation: "2",
            height: "2'07\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 11.5,
            dexEntry: "It lives atop tall trees. When leaping from branch to branch, it deftly uses its tail for balance.",
            cryUrl: "cries/190.mp3",
            japaneseName: "Eipom"
        },
        {
            name: "Ambipom",
            imageUrl: "images/424Ambipom.png",
            number: "124",
            type: ["Normal"],
            category: "Long Tail",
            region: "Sinnoh",
            generation: "4",
            height: "3'11\"",
            weight: "44.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 20.3,
            dexEntry: "It is very difficult to dodge the consecutive strikes of its two tails.",
            cryUrl: "cries/424.mp3",
            japaneseName: "Eteboth"
        },
        {
            name: "Snubbull",
            imageUrl: "images/209Snubbull.png",
            number: "125",
            type: ["Normal"],
            category: "Fairy",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "17.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.8,
            dexEntry: "It has an active, playful nature. Many women like to frolic with it because of its affectionate ways.",
            cryUrl: "cries/209.mp3",
            japaneseName: "Bulu"
        },
        {
            name: "Granbull",
            imageUrl: "images/210Granbull.png",
            number: "126",
            type: ["Normal"],
            category: "Fairy",
            region: "Johto",
            generation: "2",
            height: "4'07\"",
            weight: "107.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 48.7,
            dexEntry: "Because its fangs are too heavy, it always keeps its head tilted down. However, its bite is powerful.",
            cryUrl: "cries/210.mp3",
            japaneseName: "Granbulu"
        },
        {
            name: "Vulpix",
            imageUrl: "images/037Vulpix.png",
            number: "127",
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
            dexEntry: "If it is attacked by an enemy that is stronger than itself, it feigns injury to fool the enemy and escapes.",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "images/038Ninetales.png",
            number: "128",
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
            dexEntry: "Its nine beautiful tails are filled with a wondrous energy that could keep it alive for 1,000 years.",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Growlithe",
            imageUrl: "images/058Growlithe.png",
            number: "129",
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
            dexEntry: "Extremely loyal, it will fearlessly bark at any opponent to protect its own Trainer from harm.",
            cryUrl: "cries/058.mp3",
            japaneseName: "Gardie"
        },
        {
            name: "Arcanine",
            imageUrl: "images/059Arcanine.png",
            number: "130",
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
            dexEntry: "Its magnificent bark conveys a sense of majesty. Anyone hearing it can't help but grovel before it.",
            cryUrl: "cries/059.mp3",
            japaneseName: "Windie"
        },
        {
            name: "Stantler",
            imageUrl: "images/234Stantler.png",
            number: "131",
            type: ["Normal"],
            category: "Big Horn",
            region: "Johto",
            generation: "2",
            height: "4'07\"",
            weight: "157.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 71.2,
            dexEntry: "Those who stare at its antlers will gradually lose control of their senses and be unable to stand.",
            cryUrl: "cries/234.mp3",
            japaneseName: "Odoshishi"
        },
        {
            name: "Marill",
            imageUrl: "images/183Marill.png",
            number: "132",
            type: ["Water"],
            category: "Aqua Mouse",
            region: "Johto",
            generation: "2",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "The end of its tail serves as a buoy that keeps it from drowning, even in a vicious current.",
            cryUrl: "cries/183.mp3",
            japaneseName: "Maril"
        },
        {
            name: "Azumarill",
            imageUrl: "images/184Azumarill.png",
            number: "133",
            type: ["Water"],
            category: "Aqua Rabbit",
            region: "Johto",
            generation: "2",
            height: "2'07\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 28.5,
            dexEntry: "When it plays in water, it rolls up its elongated ears to prevent their insides from getting wet.",
            cryUrl: "cries/184.mp3",
            japaneseName: "Marilli"
        },
        {
            name: "Diglett",
            imageUrl: "images/050Diglett.png",
            number: "134",
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
            dexEntry: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
            cryUrl: "cries/050.mp3",
            japaneseName: "Digda"
        },
        {
            name: "Dugtrio",
            imageUrl: "images/051Dugtrio.png",
            number: "135",
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
            dexEntry: "Extremely powerful, they can dig through even the hardest ground to a depth of over 60 miles.",
            cryUrl: "cries/051.mp3",
            japaneseName: "Dugtrio"
        },
        {
            name: "Mankey",
            imageUrl: "images/056Mankey.png",
            number: "136",
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
            dexEntry: "It's unsafe to approach if it gets violently enraged for no reason and can't distinguish friends from foes.",
            cryUrl: "cries/056.mp3",
            japaneseName: "Mankey"
        },
        {
            name: "Primeape",
            imageUrl: "images/057Primeape.png",
            number: "137",
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
            dexEntry: "It becomes wildly furious if it even senses someone looking at it. It chases anyone that meets its glare.",
            cryUrl: "cries/057.mp3",
            japaneseName: "Okorizaru"
        },
        {
            name: "Meowth",
            imageUrl: "images/052Meowth.png",
            number: "138",
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
            dexEntry: "It loves anything that shines. It especially adores coins that it picks up and secretly hoards.",
            cryUrl: "cries/052.mp3",
            japaneseName: "Nyarth"
        },
        {
            name: "Persian",
            imageUrl: "images/053Persian.png",
            number: "139",
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
            dexEntry: "Its lithe muscles allow it to walk without making a sound. It attacks in an instant.",
            cryUrl: "cries/053.mp3",
            japaneseName: "Persian"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "140",
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
            dexEntry: "If its chronic headache peaks, it may exhibit odd powers. It seems unable to recall such an episode.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "141",
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
            dexEntry: "It appears by waterways at dusk. It may use telekinetic powers if its forehead glows mysteriously.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Machop",
            imageUrl: "images/066Machop.png",
            number: "142",
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
            dexEntry: "It loves to work out and build its muscles. It is never satisfied, even if it trains hard all day long.",
            cryUrl: "cries/066.mp3",
            japaneseName: "Wanriky"
        },
        {
            name: "Machoke",
            imageUrl: "images/067Machoke.png",
            number: "143",
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
            dexEntry: "The muscles covering its body teem with power. Even when still, it exudes an amazing sense of strength.",
            cryUrl: "cries/067.mp3",
            japaneseName: "Goriky"
        },
        {
            name: "Machamp",
            imageUrl: "images/068Machamp.png",
            number: "144",
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
            dexEntry: "It uses its four powerful arms to pin the limbs of its foe, then throws the victim over the horizon.",
            cryUrl: "cries/068.mp3",
            japaneseName: "Kairiky"
        },
        {
            name: "Tyrogue",
            imageUrl: "images/236Tyrogue.png",
            number: "145",
            type: ["Fighting"],
            category: "Scuffle",
            region: "Johto",
            generation: "2",
            height: "2'04\"",
            weight: "46.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 21.0,
            dexEntry: "Even though it is small, it can't be ignored because it will slug any handy target without warning.",
            cryUrl: "cries/236.mp3",
            japaneseName: "Balkie"
        },
        {
            name: "Hitmonlee",
            imageUrl: "images/106Hitmonlee.png",
            number: "146",
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
            dexEntry: "If it starts kicking repeatedly, both legs will stretch even longer to strike a fleeing foe.",
            cryUrl: "cries/106.mp3",
            japaneseName: "Sawamular"
        },
        {
            name: "Hitmonchan",
            imageUrl: "images/107Hitmonchan.png",
            number: "147",
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
            dexEntry: "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
            cryUrl: "cries/107.mp3",
            japaneseName: "Ebiwalar"
        },
        {
            name: "Hitmontop",
            imageUrl: "images/237Hitmontop.png",
            number: "148",
            type: ["Fighting"],
            category: "Handstand",
            region: "Johto",
            generation: "2",
            height: "4'07\"",
            weight: "105.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 48.0,
            dexEntry: "It launches kicks while spinning. If it spins at high speed, it may bore its way into the ground.",
            cryUrl: "cries/237.mp3",
            japaneseName: "Kapoerer"
        },
        {
            name: "Girafarig",
            imageUrl: "images/203Girafarig.png",
            number: "149",
            type: ["Normal", "Psychic"],
            category: "Long Neck",
            region: "Johto",
            generation: "2",
            height: "4'11\"",
            weight: "91.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 41.5,
            dexEntry: "Its tail, which also contains a small brain, may bite on its own if it notices an alluring smell.",
            cryUrl: "cries/203.mp3",
            japaneseName: "Kirinriki"
        },
        {
            name: "Tauros",
            imageUrl: "images/128Tauros.png",
            number: "150",
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
            dexEntry: "After heightening its will to fight by whipping itself with its three tails, it charges at full speed.",
            cryUrl: "cries/128.mp3",
            japaneseName: "Kentauros"
        },
        {
            name: "Miltank",
            imageUrl: "images/241Miltank.png",
            number: "151",
            type: ["Normal"],
            category: "Milk Cow",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "166.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 75.5,
            dexEntry: "If it is around babies, the milk it produces contains much more nutrition than usual.",
            cryUrl: "cries/241.mp3",
            japaneseName: "Miltank"
        },
        {
            name: "Magby",
            imageUrl: "images/240Magby.png",
            number: "152",
            type: ["Fire"],
            category: "Live Coal",
            region: "Johto",
            generation: "2",
            height: "2'04\"",
            weight: "47.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 21.4,
            dexEntry: "It is found in volcanic craters. Its body temperature is over 1,100 degrees Fahrenheit, so don't underestimate it.",
            cryUrl: "cries/240.mp3",
            japaneseName: "Buby"
        },
        {
            name: "Magmar",
            imageUrl: "images/126Magmar.png",
            number: "153",
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
            dexEntry: "The fiery surface of its body gives off a wavering, rippling glare that is similar to the sun.",
            cryUrl: "cries/126.mp3",
            japaneseName: "Boober"
        },
        {
            name: "Smoochum",
            imageUrl: "images/238Smoochum.png",
            number: "154",
            type: ["Ice", "Psychic"],
            category: "Kiss",
            region: "Johto",
            generation: "2",
            height: "1'04\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.0,
            dexEntry: "It always rocks its head slowly backwards and forwards as if it is trying to kiss someone.",
            cryUrl: "cries/238.mp3",
            japaneseName: "Muchul"
        },
        {
            name: "Jynx",
            imageUrl: "images/124Jynx.png",
            number: "155",
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
            dexEntry: "It speaks a language similar to that of humans. However, it seems to use dancing to communicate.",
            cryUrl: "cries/124.mp3",
            japaneseName: "Rougela"
        },
        {
            name: "Elekid",
            imageUrl: "images/239Elekid.png",
            number: "156",
            type: ["Electric"],
            category: "Electric",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "51.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 23.5,
            dexEntry: "Even in the most vicious storm, this Pokémon plays happily if thunder rumbles in the sky.",
            cryUrl: "cries/239.mp3",
            japaneseName: "Elekid"
        },
        {
            name: "Electabuzz",
            imageUrl: "images/125Electabuzz.png",
            number: "157",
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
            dexEntry: "Its body constantly discharges electricity. Getting close to it will make your hair stand on end.",
            cryUrl: "cries/125.mp3",
            japaneseName: "Eleboo"
        },
        {
            name: "Mr. Mime",
            imageUrl: "images/122Mr._Mime.png",
            number: "158",
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
            dexEntry: "Its fingertips emit a peculiar force field that hardens air to create an actual wall.",
            cryUrl: "cries/122.mp3",
            japaneseName: "Barrierd"
        },
        {
            name: "Smeargle",
            imageUrl: "images/235Smeargle.png",
            number: "159",
            type: ["Normal"],
            category: "Painter",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "127.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 58.0,
            dexEntry: "Once it becomes an adult, it has a tendency to let its comrades plant footprints on its back.",
            cryUrl: "cries/235.mp3",
            japaneseName: "Doble"
        },
        {
            name: "Farfetch'd",
            imageUrl: "images/083Farfetch'd.png",
            number: "160",
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
            dexEntry: "If it eats the plant stalk it carries as emergency rations, it runs off in search of a new stalk.",
            cryUrl: "cries/083.mp3",
            japaneseName: "Kamonegi"
        },
        {
            name: "Natu",
            imageUrl: "images/177Natu.png",
            number: "161",
            type: ["Psychic", "Flying"],
            category: "Tiny Bird",
            region: "Johto",
            generation: "2",
            height: "0'08\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.0,
            dexEntry: "It usually forages for food on the ground but may, on rare occasions, hop onto branches to peck at shoots.",
            cryUrl: "cries/177.mp3",
            japaneseName: "Naty"
        },
        {
            name: "Xatu",
            imageUrl: "images/178Xatu.png",
            number: "162",
            type: ["Psychic", "Flying"],
            category: "Mystic",
            region: "Johto",
            generation: "2",
            height: "4'11\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 15.0,
            dexEntry: "In South America, it is said that its right eye sees the future and its left eye views the past.",
            cryUrl: "cries/178.mp3",
            japaneseName: "Natio"
        },
        {
            name: "Qwilfish",
            imageUrl: "images/211Qwilfish.png",
            number: "163",
            type: ["Water", "Poison"],
            category: "Balloon",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "8.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 3.9,
            dexEntry: "The small spikes covering its body developed from scales. They inject a toxin that causes fainting.",
            cryUrl: "cries/211.mp3",
            japaneseName: "Harysen"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "164",
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
            dexEntry: "It drifts aimlessly in waves. Very difficult to see in water, it may not be noticed until it stings.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "165",
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
            dexEntry: "In battle, it extends all 80 of its tentacles to entrap its opponent inside a poisonous net.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Krabby",
            imageUrl: "images/098Krabby.png",
            number: "166",
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
            dexEntry: "The pincers break off easily. If it loses a pincer, it somehow becomes incapable of walking sideways.",
            cryUrl: "cries/098.mp3",
            japaneseName: "Crab"
        },
        {
            name: "Kingler",
            imageUrl: "images/099Kingler.png",
            number: "167",
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
            dexEntry: "Its pincers grow peculiarly large. If it lifts the pincers too fast, it loses its balance and staggers.",
            cryUrl: "cries/099.mp3",
            japaneseName: "Kingler"
        },
        {
            name: "Shuckle",
            imageUrl: "images/213Shuckle.png",
            number: "168",
            type: ["Bug", "Rock"],
            category: "Mold",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "45.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 20.5,
            dexEntry: "It stores Berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still.",
            cryUrl: "cries/213.mp3",
            japaneseName: "Tsubotsubo"
        },
        {
            name: "Staryu",
            imageUrl: "images/120Staryu.png",
            number: "169",
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
            dexEntry: "Even if its body is torn, it can regenerate as long as the glowing central core remains intact.",
            cryUrl: "cries/120.mp3",
            japaneseName: "Hitodeman"
        },
        {
            name: "Starmie",
            imageUrl: "images/121Starmie.png",
            number: "170",
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
            dexEntry: "Regardless of the environment it lives in, its body grows to form a symmetrical geometric shape.",
            cryUrl: "cries/121.mp3",
            japaneseName: "Starmie"
        },
        {
            name: "Shellder",
            imageUrl: "images/090Shellder.png",
            number: "171",
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
            dexEntry: "Grains of sand trapped in its shells mix with its body fluids to form beautiful pearls.",
            cryUrl: "cries/090.mp3",
            japaneseName: "Shellder"
        },
        {
            name: "Cloyster",
            imageUrl: "images/091Cloyster.png",
            number: "172",
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
            dexEntry: "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
            cryUrl: "cries/091.mp3",
            japaneseName: "Parshen"
        },
        {
            name: "Corsola",
            imageUrl: "images/222Corsola.png",
            number: "173",
            type: ["Water", "Rock"],
            category: "Coral",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 5.0,
            dexEntry: "In a south-sea nation, the people live in communities that are built on groups of these Pokémon.",
            cryUrl: "cries/222.mp3",
            japaneseName: "Sunnygo"
        },
        {
            name: "Remoraid",
            imageUrl: "images/223Remoraid.png",
            number: "174",
            type: ["Water"],
            category: "Jet",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.0,
            dexEntry: "Using its dorsal fin as a suction pad, it clings to a Mantine's underside to scavenge for leftovers.",
            cryUrl: "cries/223.mp3",
            japaneseName: "Teppouo"
        },
        {
            name: "Octillery",
            imageUrl: "images/224Octillery.png",
            number: "175",
            type: ["Water"],
            category: "Jet",
            region: "Johto",
            generation: "2",
            height: "2'11\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 28.5,
            dexEntry: "It instinctively sneaks into rocky holes. If it gets sleepy, it steals the nest of a fellow Octillery.",
            cryUrl: "cries/224.mp3",
            japaneseName: "Okutank"
        },
        {
            name: "Chinchou",
            imageUrl: "images/170Chinchou.png",
            number: "176",
            type: ["Water", "Electric"],
            category: "Angler",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 12.0,
            dexEntry: "On the dark ocean floor, its only means of communication is its constantly flashing lights.",
            cryUrl: "cries/170.mp3",
            japaneseName: "Chonchie"
        },
        {
            name: "Lanturn",
            imageUrl: "images/171Lanturn.png",
            number: "177",
            type: ["Water", "Electric"],
            category: "Light",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "49.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 22.5,
            dexEntry: "It blinds prey with an intense burst of light. With the prey incapacitated, the Pokémon swallows it in a single gulp.",
            cryUrl: "cries/171.mp3",
            japaneseName: "Lantern"
        },
        {
            name: "Seel",
            imageUrl: "images/086Seel.png",
            number: "178",
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
            dexEntry: "In daytime, it is often found asleep on the seabed in shallow waters. Its nostrils close while it swims.",
            cryUrl: "cries/086.mp3",
            japaneseName: "Pawou"
        },
        {
            name: "Dewgong",
            imageUrl: "images/087Dewgong.png",
            number: "179",
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
            dexEntry: "It loves frigid seas with ice floes. It uses its long tail to change swimming direction quickly.",
            cryUrl: "cries/087.mp3",
            japaneseName: "Jugon"
        },
        {
            name: "Lickitung",
            imageUrl: "images/108Lickitung.png",
            number: "180",
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
            dexEntry: "Its long tongue, slathered with a gooey saliva, sticks to anything, so it is very useful.",
            cryUrl: "cries/108.mp3",
            japaneseName: "Beroringa"
        },
        {
            name: "Lickilicky",
            imageUrl: "images/463Lickilicky.png",
            number: "181",
            type: ["Normal"],
            category: "Licking",
            region: "Sinnoh",
            generation: "4",
            height: "5'07\"",
            weight: "308.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 140.0,
            dexEntry: "It has space in its throat to store saliva. It can also roll up its tongue and store it in the same spot.",
            cryUrl: "cries/463.mp3",
            japaneseName: "Berobelt"
        },
        {
            name: "Tangela",
            imageUrl: "images/114Tangela.png",
            number: "182",
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
            dexEntry: "It tangles any moving thing with its vines. Their subtle shaking is ticklish if you get ensnared.",
            cryUrl: "cries/114.mp3",
            japaneseName: "Monjara"
        },
        {
            name: "Tangrowth",
            imageUrl: "images/465Tangrowth.png",
            number: "183",
            type: ["Grass"],
            category: "Vine",
            region: "Sinnoh",
            generation: "4",
            height: "6'07\"",
            weight: "283.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 128.6,
            dexEntry: "Its vines grow so profusely that, in the warm season, you can't even see its eyes.",
            cryUrl: "cries/465.mp3",
            japaneseName: "Mojumbo"
        },
        {
            name: "Eevee",
            imageUrl: "images/133Eevee.png",
            number: "184",
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
            dexEntry: "Its irregularly configured DNA is affected by its surroundings. It evolves if its environment changes.",
            cryUrl: "cries/133.mp3",
            japaneseName: "Eievui"
        },
        {
            name: "Vaporeon",
            imageUrl: "images/134Vaporeon.png",
            number: "185",
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
            dexEntry: "It prefers beautiful shores. With cells similar to water molecules, it could melt in water.",
            cryUrl: "cries/134.mp3",
            japaneseName: "Showers"
        },
        {
            name: "Jolteon",
            imageUrl: "images/135Jolteon.png",
            number: "186",
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
            dexEntry: "Every hair on its body starts to stand sharply on end if it becomes charged with electricity.",
            cryUrl: "cries/135.mp3",
            japaneseName: "Thunders"
        },
        {
            name: "Flareon",
            imageUrl: "images/136Flareon.png",
            number: "187",
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
            dexEntry: "It fluffs out its fur collar to cool down its body temperature, which can reach 1,650 degrees Fahrenheit.",
            cryUrl: "cries/136.mp3",
            japaneseName: "Booster"
        },
        {
            name: "Espeon",
            imageUrl: "images/196Espeon.png",
            number: "188",
            type: ["Psychic"],
            category: "Sun",
            region: "Johto",
            generation: "2",
            height: "2'11\"",
            weight: "58.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 26.5,
            dexEntry: "By reading air currents, it can predict things such as the weather or its foe's next move.",
            cryUrl: "cries/196.mp3",
            japaneseName: "Eifie"
        },
        {
            name: "Umbreon",
            imageUrl: "images/197Umbreon.png",
            number: "189",
            type: ["Dark"],
            category: "Moonlight",
            region: "Johto",
            generation: "2",
            height: "3'03\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 27.0,
            dexEntry: "When darkness falls, the rings on the body begin to glow, striking fear in the hearts of anyone nearby.",
            cryUrl: "cries/197.mp3",
            japaneseName: "Blacky"
        },
        {
            name: "Horsea",
            imageUrl: "images/116Horsea.png",
            number: "190",
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
            dexEntry: "Its big, developed fins move rapidly, allowing it to swim backward while still facing forward.",
            cryUrl: "cries/116.mp3",
            japaneseName: "Tattu"
        },
        {
            name: "Seadra",
            imageUrl: "images/117Seadra.png",
            number: "191",
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
            dexEntry: "Its fin tips leak poison. Its fins and bones are highly valued as ingredients in herbal medicine.",
            cryUrl: "cries/117.mp3",
            japaneseName: "Seadra"
        },
        {
            name: "Kingdra",
            imageUrl: "images/230Kingdra.png",
            number: "192",
            type: ["Water", "Dragon"],
            category: "Dragon",
            region: "Johto",
            generation: "2",
            height: "5'11\"",
            weight: "335.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 152.0,
            dexEntry: "It sleeps deep on the ocean floor to build its energy. It is said to cause tornadoes as it wakes.",
            cryUrl: "cries/230.mp3",
            japaneseName: "Kingdra"
        },
        {
            name: "Gligar",
            imageUrl: "images/207Gligar.png",
            number: "193",
            type: ["Ground", "Flying"],
            category: "Fly Scorpion",
            region: "Johto",
            generation: "2",
            height: "3'07\"",
            weight: "142.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 64.8,
            dexEntry: "It usually clings to cliffs. When it spots its prey, it spreads its wings and glides down to attack.",
            cryUrl: "cries/207.mp3",
            japaneseName: "Gliger"
        },
        {
            name: "Delibird",
            imageUrl: "images/225Delibird.png",
            number: "194",
            type: ["Ice", "Flying"],
            category: "Delivery",
            region: "Johto",
            generation: "2",
            height: "2'11\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 16.0,
            dexEntry: "It nests at the edge of sharp cliffs. It spends all day carrying food to its awaiting chicks.",
            cryUrl: "cries/225.mp3",
            japaneseName: "Delibird"
        },
        {
            name: "Swinub",
            imageUrl: "images/220Swinub.png",
            number: "195",
            type: ["Ice", "Ground"],
            category: "Pig",
            region: "Johto",
            generation: "2",
            height: "1'04\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.5,
            dexEntry: "If it smells something enticing, it dashes headlong off to find the source of the aroma.",
            cryUrl: "cries/220.mp3",
            japaneseName: "Urimoo"
        },
        {
            name: "Piloswine",
            imageUrl: "images/221Piloswine.png",
            number: "196",
            type: ["Ice", "Ground"],
            category: "Swine",
            region: "Johto",
            generation: "2",
            height: "3'07\"",
            weight: "123.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 55.8,
            dexEntry: "If it charges at an enemy, the hairs on its back stand up straight. It is very sensitive to sound.",
            cryUrl: "cries/221.mp3",
            japaneseName: "Inomoo"
        },
        {
            name: "Mamoswine",
            imageUrl: "images/473Mamoswine.png",
            number: "197",
            type: ["Ice", "Ground"],
            category: "Twin Tusk",
            region: "Sinnoh",
            generation: "4",
            height: "8'02\"",
            weight: "641.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 291.0,
            dexEntry: "It flourished worldwide during the ice age but its population declined when the masses of ice began to dwindle.",
            cryUrl: "cries/473.mp3",
            japaneseName: "Mammoo"
        },
        {
            name: "Teddiursa",
            imageUrl: "images/216Teddiursa.png",
            number: "198",
            type: ["Normal"],
            category: "Little Bear",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "19.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.8,
            dexEntry: "Before food becomes scarce in wintertime, its habit is to hoard food in many hidden locations.",
            cryUrl: "cries/216.mp3",
            japaneseName: "Himeguma"
        },
        {
            name: "Ursaring",
            imageUrl: "images/217Ursaring.png",
            number: "199",
            type: ["Normal"],
            category: "Hibernator",
            region: "Johto",
            generation: "2",
            height: "5'11\"",
            weight: "277.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 125.8,
            dexEntry: "With its ability to distinguish any aroma, it unfailingly finds all food buried deep underground.",
            cryUrl: "cries/217.mp3",
            japaneseName: "Ringuma"
        },
        {
            name: "Phanpy",
            imageUrl: "images/231Phanpy.png",
            number: "200",
            type: ["Ground"],
            category: "Long Nose",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "73.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 33.5,
            dexEntry: "As a sign of affection, it bumps with its snout. However, it is so strong, it may send you flying.",
            cryUrl: "cries/231.mp3",
            japaneseName: "Gomazou"
        },
        {
            name: "Donphan",
            imageUrl: "images/232Donphan.png",
            number: "201",
            type: ["Ground"],
            category: "Armor",
            region: "Johto",
            generation: "2",
            height: "3'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 120.0,
            dexEntry: "The longer and bigger its tusks, the higher its rank in its herd. The tusks take long to grow.",
            cryUrl: "cries/232.mp3",
            japaneseName: "Donfan"
        },
        {
            name: "Mantine",
            imageUrl: "images/226Mantine.png",
            number: "202",
            type: ["Water", "Flying"],
            category: "Kite",
            region: "Johto",
            generation: "2",
            height: "6'11\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 220.0,
            dexEntry: "Swimming freely in open seas, it may fly out of the water and over the waves if it builds up enough speed.",
            cryUrl: "cries/226.mp3",
            japaneseName: "Mantain"
        },
        {
            name: "Skarmory",
            imageUrl: "images/227Skarmory.png",
            number: "203",
            type: ["Steel", "Flying"],
            category: "Armor Bird",
            region: "Johto",
            generation: "2",
            height: "5'07\"",
            weight: "111.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 50.5,
            dexEntry: "After nesting in bramble bushes, the wings of its chicks grow hard from scratches by thorns.",
            cryUrl: "cries/227.mp3",
            japaneseName: "Airmd"
        },
        {
            name: "Doduo",
            imageUrl: "images/084Doduo.png",
            number: "204",
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
            dexEntry: "It races through grassy plains with powerful strides, leaving footprints up to four inches deep.",
            cryUrl: "cries/084.mp3",
            japaneseName: "Dodo"
        },
        {
            name: "Dodrio",
            imageUrl: "images/085Dodrio.png",
            number: "205",
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
            dexEntry: "If one of the heads gets to eat, the others will be satisfied, too, and they will stop squabbling.",
            cryUrl: "cries/085.mp3",
            japaneseName: "Dodorio"
        },
        {
            name: "Ponyta",
            imageUrl: "images/077Ponyta.png",
            number: "206",
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
            dexEntry: "Its hind legs, which have hooves that are harder than diamond, kick back at any presence it senses behind it.",
            cryUrl: "cries/077.mp3",
            japaneseName: "Ponyta"
        },
        {
            name: "Rapidash",
            imageUrl: "images/078Rapidash.png",
            number: "207",
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
            dexEntry: "With incredible acceleration, it reaches its top speed of 150 mph after running just 10 steps.",
            cryUrl: "cries/078.mp3",
            japaneseName: "Gallop"
        },
        {
            name: "Cubone",
            imageUrl: "images/104Cubone.png",
            number: "208",
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
            dexEntry: "It always wears the skull of its dead mother, so no one has any idea what its hidden face looks like.",
            cryUrl: "cries/104.mp3",
            japaneseName: "Karakara"
        },
        {
            name: "Marowak",
            imageUrl: "images/105Marowak.png",
            number: "209",
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
            dexEntry: "It collects bones from an unknown place. Some whisper that a Marowak graveyard exists somewhere in the world.",
            cryUrl: "cries/105.mp3",
            japaneseName: "Garagara"
        },
        {
            name: "Kangaskhan",
            imageUrl: "images/115Kangaskhan.png",
            number: "210",
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
            dexEntry: "To protect its young, it will never give up during battle, no matter how badly wounded it is.",
            cryUrl: "cries/115.mp3",
            japaneseName: "Garura"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "211",
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
            dexEntry: "It doesn't care if there is anything in its way. It just charges and destroys all obstacles.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "212",
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
            dexEntry: "Its brain developed when it began walking on hind legs. Its thick hide protects it even in magma.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Murkrow",
            imageUrl: "images/198Murkrow.png",
            number: "213",
            type: ["Dark", "Flying"],
            category: "Darkness",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "4.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.1,
            dexEntry: "It is said that when chased, it lures its attacker onto dark mountain trails where the foe will get lost.",
            cryUrl: "cries/198.mp3",
            japaneseName: "Yamikarasu"
        },
        {
            name: "Houndour",
            imageUrl: "images/228Houndour.png",
            number: "214",
            type: ["Dark", "Fire"],
            category: "Dark",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "23.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.8,
            dexEntry: "To corner prey, they check each other's location using barks that only they can understand.",
            cryUrl: "cries/228.mp3",
            japaneseName: "Delvil"
        },
        {
            name: "Houndoom",
            imageUrl: "images/229Houndoom.png",
            number: "215",
            type: ["Dark", "Fire"],
            category: "Dark",
            region: "Johto",
            generation: "2",
            height: "4'07\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 35.0,
            dexEntry: "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
            cryUrl: "cries/229.mp3",
            japaneseName: "Hellgar"
        },
        {
            name: "Slugma",
            imageUrl: "images/218Slugma.png",
            number: "216",
            type: ["Fire"],
            category: "Lava",
            region: "Johto",
            generation: "2",
            height: "2'04\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 35.0,
            dexEntry: "A common sight in volcanic areas, it slowly slithers around in a constant search for warm places.",
            cryUrl: "cries/218.mp3",
            japaneseName: "Magmag"
        },
        {
            name: "Magcargo",
            imageUrl: "images/219Magcargo.png",
            number: "217",
            type: ["Fire", "Rock"],
            category: "Lava",
            region: "Johto",
            generation: "2",
            height: "2'07\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 55.0,
            dexEntry: "Its brittle shell occasionally spouts intense flames that circulate throughout its body.",
            cryUrl: "cries/219.mp3",
            japaneseName: "Magcargot"
        },
        {
            name: "Sneasel",
            imageUrl: "images/215Sneasel.png",
            number: "218",
            type: ["Dark", "Ice"],
            category: "Sharp Claw",
            region: "Johto",
            generation: "2",
            height: "2'11\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 28.0,
            dexEntry: "Vicious in nature, it drives Pidgey from their nests and scavenges any leftovers it can find.",
            cryUrl: "cries/215.mp3",
            japaneseName: "Nyula"
        },
        {
            name: "Misdreavus",
            imageUrl: "images/200Misdreavus.png",
            number: "219",
            type: ["Ghost"],
            category: "Screech",
            region: "Johto",
            generation: "2",
            height: "2'04\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 1.0,
            dexEntry: "It loves to bite and yank people's hair from behind without warning, just to see their shocked reactions.",
            cryUrl: "cries/200.mp3",
            japaneseName: "Muma"
        },
        {
            name: "Porygon",
            imageUrl: "images/137Porygon.png",
            number: "220",
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
            dexEntry: "A manmade Pokémon that came about as a result of research. It is programmed with only basic motions.",
            cryUrl: "cries/137.mp3",
            japaneseName: "Porygon"
        },
        {
            name: "Porygon2",
            imageUrl: "images/233Porygon2.png",
            number: "221",
            type: ["Normal"],
            category: "Virtual",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 32.5,
            dexEntry: "Further research enhanced its abilities. Sometimes, it may exhibit motions that were not programmed.",
            cryUrl: "cries/233.mp3",
            japaneseName: "Porygon2"
        },
        {
            name: "Chansey",
            imageUrl: "images/113Chansey.png",
            number: "222",
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
            dexEntry: "Being few in number and difficult to capture, it is said to bring happiness to the Trainer who catches it.",
            cryUrl: "cries/113.mp3",
            japaneseName: "Lucky"
        },
        {
            name: "Blissey",
            imageUrl: "images/242Blissey.png",
            number: "223",
            type: ["Normal"],
            category: "Happiness",
            region: "Johto",
            generation: "2",
            height: "4'11\"",
            weight: "103.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 46.8,
            dexEntry: "It has a very compassionate nature. If it sees a sick Pokémon, it will nurse the sufferer back to health.",
            cryUrl: "cries/242.mp3",
            japaneseName: "Happinas"
        },
        {
            name: "Lapras",
            imageUrl: "images/131Lapras.png",
            number: "224",
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
            dexEntry: "It ferries people across the sea on its back. It may sing an enchanting cry if it is in a good mood.",
            cryUrl: "cries/131.mp3",
            japaneseName: "Laplace"
        },
        {
            name: "Omanyte",
            imageUrl: "images/138Omanyte.png",
            number: "225",
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
            dexEntry: "This Pokémon from ancient times is said to have navigated the sea by adeptly twisting its 10 tentacles.",
            cryUrl: "cries/138.mp3",
            japaneseName: "Omnite"
        },
        {
            name: "Omastar",
            imageUrl: "images/139Omastar.png",
            number: "226",
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
            dexEntry: "Once wrapped around its prey, it never lets go. It eats the prey by tearing at it with sharp fangs.",
            cryUrl: "cries/139.mp3",
            japaneseName: "Omstar"
        },
        {
            name: "Kabuto",
            imageUrl: "images/140Kabuto.png",
            number: "227",
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
            dexEntry: "This Pokémon lived in ancient times. On rare occasions, it has been discovered as a living fossil.",
            cryUrl: "cries/140.mp3",
            japaneseName: "Kabuto"
        },
        {
            name: "Kabutops",
            imageUrl: "images/141Kabutops.png",
            number: "228",
            type: ["Rock", "Water"],
            category: "Shellfish",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.5,
            dexEntry: "With sharp claws, this ferocious, ancient Pokémon rips apart prey and sucks their body fluids.",
            cryUrl: "cries/141.mp3",
            japaneseName: "Kabutops"
        },
        {
            name: "Aerodactyl",
            imageUrl: "images/142Aerodactyl.png",
            number: "229",
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
            dexEntry: "This vicious Pokémon is said to have flown in ancient skies while shrieking high-pitched cries.",
            cryUrl: "cries/142.mp3",
            japaneseName: "Ptera"
        },
        {
            name: "Snorlax",
            imageUrl: "images/143Snorlax.png",
            number: "230",
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
            dexEntry: "Its stomach's digestive juices can dissolve any kind of poison. It can even eat things off the ground.",
            cryUrl: "cries/143.mp3",
            japaneseName: "Kabigon"
        },
        {
            name: "Bulbasaur",
            imageUrl: "images/001Bulbasaur.png",
            number: "231",
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
            dexEntry: "It carries a seed on its back right from birth. As it grows older, the seed also grows larger.",
            cryUrl: "cries/001.mp3",
            japaneseName: "Fushigidane"
        },
        {
            name: "Ivysaur",
            imageUrl: "images/002Ivysaur.png",
            number: "232",
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
            dexEntry: "If the bud on its back starts to smell sweet, it is evidence that the large flower will soon bloom.",
            cryUrl: "cries/002.mp3",
            japaneseName: "Fushigisou"
        },
        {
            name: "Venusaur",
            imageUrl: "images/003Venusaur.png",
            number: "233",
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
            dexEntry: "It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.",
            cryUrl: "cries/003.mp3",
            japaneseName: "Fushigibana"
        },
        {
            name: "Charmander",
            imageUrl: "images/004Charmander.png",
            number: "234",
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
            dexEntry: "The flame on its tail indicates Charmander's life force. If it is healthy, the flame burns brightly.",
            cryUrl: "cries/004.mp3",
            japaneseName: "Hitokage"
        },
        {
            name: "Charmeleon",
            imageUrl: "images/005Charmeleon.png",
            number: "235",
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
            dexEntry: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
            cryUrl: "cries/005.mp3",
            japaneseName: "Lizardo"
        },
        {
            name: "Charizard",
            imageUrl: "images/006Charizard.png",
            number: "236",
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
            dexEntry: "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.",
            cryUrl: "cries/006.mp3",
            japaneseName: "Lizardon"
        },
        {
            name: "Squirtle",
            imageUrl: "images/007Squirtle.png",
            number: "237",
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
            dexEntry: "The shell, which hardens soon after it is born, is resilient. If you poke it, it will bounce back out.",
            cryUrl: "cries/007.mp3",
            japaneseName: "Zenigame"
        },
        {
            name: "Wartortle",
            imageUrl: "images/008Wartortle.png",
            number: "238",
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
            dexEntry: "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
            cryUrl: "cries/008.mp3",
            japaneseName: "Kameil"
        },
        {
            name: "Blastoise",
            imageUrl: "images/009Blastoise.png",
            number: "239",
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
            dexEntry: "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
            cryUrl: "cries/009.mp3",
            japaneseName: "Kamex"
        },
        {
            name: "Articuno",
            imageUrl: "images/144Articuno.png",
            number: "240",
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
            dexEntry: "One of the legendary bird Pokémon, it chills moisture in the atmosphere to create snow while flying.",
            cryUrl: "cries/144.mp3",
            japaneseName: "Freezer"
        },
        {
            name: "Zapdos",
            imageUrl: "images/145Zapdos.png",
            number: "241",
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
            dexEntry: "This legendary bird Pokémon is said to appear only when a thundercloud parts into two halves.",
            cryUrl: "cries/145.mp3",
            japaneseName: "Thunder"
        },
        {
            name: "Moltres",
            imageUrl: "images/146Moltres.png",
            number: "242",
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
            dexEntry: "This legendary bird Pokémon is said to bring early spring to the wintry lands it visits.",
            cryUrl: "cries/146.mp3",
            japaneseName: "Fire"
        },
        {
            name: "Raikou",
            imageUrl: "images/243Raikou.png",
            number: "243",
            type: ["Electric"],
            category: "Thunder",
            region: "Johto",
            generation: "2",
            height: "6'03\"",
            weight: "392.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 178.0,
            dexEntry: "A Pokémon that races across the land while barking a cry that sounds like crashing thunder.",
            cryUrl: "cries/243.mp3",
            japaneseName: "Raikou"
        },
        {
            name: "Entei",
            imageUrl: "images/244Entei.png",
            number: "244",
            type: ["Fire"],
            category: "Volcano",
            region: "Johto",
            generation: "2",
            height: "6'11\"",
            weight: "436.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 198.0,
            dexEntry: "A Pokémon that races across the land. It is said that one is born every time a new volcano appears.",
            cryUrl: "cries/244.mp3",
            japaneseName: "Entei"
        },
        {
            name: "Suicune",
            imageUrl: "images/245Suicune.png",
            number: "245",
            type: ["Water"],
            category: "Aurora",
            region: "Johto",
            generation: "2",
            height: "6'07\"",
            weight: "412.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 187.0,
            dexEntry: "This Pokémon races across the land. It is said that north winds will somehow blow whenever it appears.",
            cryUrl: "cries/245.mp3",
            japaneseName: "Suicune"
        },
        {
            name: "Dratini",
            imageUrl: "images/147Dratini.png",
            number: "246",
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
            dexEntry: "This Pokémon is full of life energy. It continually sheds its skin and grows steadily larger.",
            cryUrl: "cries/147.mp3",
            japaneseName: "Miniryu"
        },
        {
            name: "Dragonair",
            imageUrl: "images/148Dragonair.png",
            number: "247",
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
            dexEntry: "Its crystalline orbs appear to give this Pokémon the power to freely control the weather.",
            cryUrl: "cries/148.mp3",
            japaneseName: "Hakuryu"
        },
        {
            name: "Dragonite",
            imageUrl: "images/149Dragonite.png",
            number: "248",
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
            dexEntry: "This marine Pokémon has an impressive build that lets it freely fly over raging seas without trouble.",
            cryUrl: "cries/149.mp3",
            japaneseName: "Kairyu"
        },
        {
            name: "Larvitar",
            imageUrl: "images/246Larvitar.png",
            number: "249",
            type: ["Rock", "Ground"],
            category: "Rock Skin",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "158.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 72.0,
            dexEntry: "It is born deep underground. It can't emerge until it has entirely consumed the soil around it.",
            cryUrl: "cries/246.mp3",
            japaneseName: "Yogiras"
        },
        {
            name: "Pupitar",
            imageUrl: "images/247Pupitar.png",
            number: "250",
            type: ["Rock", "Ground"],
            category: "Hard Shell",
            region: "Johto",
            generation: "2",
            height: "3'11\"",
            weight: "335.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 152.0,
            dexEntry: "Even sealed in its shell, it can move freely. Hard and fast, it has outstanding destructive power.",
            cryUrl: "cries/247.mp3",
            japaneseName: "Sanagiras"
        },
        {
            name: "Tyranitar",
            imageUrl: "images/248Tyranitar.png",
            number: "251",
            type: ["Rock", "Dark"],
            category: "Armor",
            region: "Johto",
            generation: "2",
            height: "6'07\"",
            weight: "445.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 202.0,
            dexEntry: "Extremely strong, it can change the landscape. It has an insolent nature that makes it not care about others.",
            cryUrl: "cries/248.mp3",
            japaneseName: "Bangiras"
        },
        {
            name: "Lugia",
            imageUrl: "images/249Lugia.png",
            number: "252",
            type: ["Psychic", "Flying"],
            category: "Diving",
            region: "Johto",
            generation: "2",
            height: "17'01\"",
            weight: "476.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 5.2,
            metricWeight: 216.0,
            dexEntry: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm.",
            cryUrl: "cries/249.mp3",
            japaneseName: "Lugia"
        },
        {
            name: "Ho-Oh",
            imageUrl: "images/250Ho-Oh.png",
            number: "253",
            type: ["Fire", "Flying"],
            category: "Rainbow",
            region: "Johto",
            generation: "2",
            height: "12'06\"",
            weight: "438.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.8,
            metricWeight: 199.0,
            dexEntry: "A legend says that its body glows in seven colors. A rainbow is said to form behind it when it flies",
            cryUrl: "cries/250.mp3",
            japaneseName: "Houou"
        },
        {
            name: "Mewtwo",
            imageUrl: "images/150Mewtwo.png",
            number: "254",
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
            dexEntry: "It usually remains motionless to conserve energy, so that it may unleash its full power in battle.",
            cryUrl: "cries/150.mp3",
            japaneseName: "Mewtwo"
        },
        {
            name: "Mew",
            imageUrl: "images/151Mew.png",
            number: "255",
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
            dexEntry: "Its DNA is said to contain the genetic codes of all Pokémon, so it can use all kinds of techniques.",
            cryUrl: "cries/151.mp3",
            japaneseName: "Mew"
        },
        {
            name: "Celebi",
            imageUrl: "images/251Celebi.png",
            number: "256",
            type: ["Psychic", "Grass"],
            category: "Time Travel",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 5.0,
            dexEntry: "When Celebi disappears deep in the forest, it is said to leave behind an egg it brought from the future.",
            cryUrl: "cries/251.mp3",
            japaneseName: "Celebi"
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