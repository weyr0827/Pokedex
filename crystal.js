//Crystal Search Code


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
            dexEntry: "It loves to bask in the sunlight. It uses the leaf on its head to seek out warm places.",
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
            dexEntry: "The scent that wafts from the leaves on its neck causes anyone who smells it to become energetic.",
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
            dexEntry: "Anyone who stands beside it becomes refreshed, just as if they were relaxing in a sunny forest.",
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
            dexEntry: "The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes.",
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
            dexEntry: "Before battle, it turns its back on its opponent to demonstrate how ferociously its fire blazes.",
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
            dexEntry: "When heat from its body causes the air around it to shimmer, this is a sign that it is ready to battle.",
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
            dexEntry: "This rough critter chomps at any moving object it sees. Turning your back on it is not recommended.",
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
            dexEntry: "The tips of its fangs are slanted backward. Once those fangs clamp down, the prey has no hope of escape.",
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
            dexEntry: "Although it has a massive body, its powerful hind legs enable it to move quickly, even on the ground.",
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
            dexEntry: "It rapidly flaps its wings in the grass, stirring up a dust cloud that drives insect prey out into the open.",
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
            dexEntry: "It slowly flies in a circular pattern, all the while keeping a sharp lookout for prey.",
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
            dexEntry: "Its outstanding vision allows it to spot splashing Magikarp, even while flying at 3,300 feet.",
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
            dexEntry: "To protect its territory, it flies around ceaselessly, making high-pitched cries.",
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
            dexEntry: "It uses its long beak to attack. It has a surprisingly long reach, so it must be treated with caution.",
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
            dexEntry: "It begins to hoot at the same time every day. Some trainers use them in place of clocks.",
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
            dexEntry: "Its extremely soft feathers make no sound in flight. It silently sneaks up on prey without being detected.",
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
            dexEntry: "This Pokémon's impressive vitality allows it to live anywhere. It also multiplies very quickly.",
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
            dexEntry: "The webs on its hind legs enable it to cross rivers. It searches wide areas for food.",
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
            dexEntry: "When acting as a lookout, it warns others of danger by screeching and hitting the ground with its tail.",
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
            dexEntry: "It lives in narrow burrows that fit its slim body. The deeper the nests go, the more maze-like they become.",
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
            dexEntry: "It is unskilled at storing electric power. Any kind of shock causes it to discharge energy spontaneously.",
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
            dexEntry: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
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
            dexEntry: "If its electric pouches run empty, it raises its tail to gather electricity from the atmosphere.",
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
            dexEntry: "It crawls into foliage where it camouflages itself among leaves that are the same color as its body.",
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
            dexEntry: "This is its preevolved form. At this stage, it can only harden, so it remains motionless to avoid attack.",
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
            dexEntry: "It flits from flower to flower, collecting honey. It can even identify distant flowers in bloom.",
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
            dexEntry: "The barb on top of its head secretes a strong poison. It uses this toxic barb to protect itself.",
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
            dexEntry: "Nearly incapable of movement, it leans against stout trees while waiting for its evolution.",
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
            dexEntry: "It uses sharp, poisonous stings to defeat prey, then takes the victim back to its nest for food.",
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
            dexEntry: "It is timid and clusters together with others. The fluid secreted by its feet indicates its location.",
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
            dexEntry: "In the daytime when it gets warm, it curls up inside a big leaf and drifts off into a deep slumber.",
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
            dexEntry: "If prey becomes ensnared in its nest of spun string, it waits motionlessly until it becomes dark.",
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
            dexEntry: "Rather than making a nest in one specific spot, it wanders in search of food after darkness falls.",
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
            dexEntry: "Proud of their sturdy bodies, they bash against each other in a contest to prove whose is harder.",
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
            dexEntry: "It travels by rolling on mountain paths. If it gains too much speed, it stops by running into huge rocks.",
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
            dexEntry: "Its rock-like body is so durable, even high-powered dynamite blasts fail to scratch its rugged hide.",
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
            dexEntry: "During the day, it gathers with others and hangs from the ceilings of old buildings and caves.",
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
            dexEntry: "When it plunges its fangs into its prey, it instantly draws and gulps down more than ten ounces of blood.",
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
            dexEntry: "As a result of its pursuit of faster, yet more silent flight, a new set of wings grew on its hind legs.",
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
            dexEntry: "If the impact site of a meteorite is found, this Pokémon is certain to be within the immediate area.",
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
            dexEntry: "Though rarely seen, it becomes easier to spot, for some reason, on the night of a full moon.",
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
            dexEntry: "Said to live in quiet, remote mountains, this type of fairy has a strong aversion to being seen.",
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
            dexEntry: "Instead of walking with its short legs, it moves around by bouncing on its soft, tender body.",
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
            dexEntry: "It rolls its cute eyes as it sings a soothing lullaby. Its gentle song puts anyone who hears it to sleep.",
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
            dexEntry: "The rich, fluffy fur that covers its body feels so good that anyone who feels it can't stop touching it.",
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
            dexEntry: "It is considered to be a symbol of good luck. Its shell is said to be filled with happiness.",
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
            dexEntry: "Although it does not flap its wings very much, it can stay up in the air as it tags along after its trainer.",
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
            dexEntry: "It prefers dry, sandy places because it uses the sand to protect itself when threatened.",
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
            dexEntry: "Adept at climbing trees, it rolls into a spiny ball, then attacks its enemies from above.",
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
            dexEntry: "It flutters the tip of its tongue to seek out the scent of prey, then swallows the prey whole.",
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
            dexEntry: "To intimidate foes, it spreads its chest wide and makes eerie sounds by expelling air from its mouth.",
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
            dexEntry: "It hides deep inside caves where no light ever reaches it and remains virtually motionless there.",
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
            dexEntry: "It stores lots of air in its soft fur, allowing it to stay cool in summer and warm in winter.",
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
            dexEntry: "Because of its rubbery, electricity-resistant skin, it can store lots of electricity in its fur.",
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
            dexEntry: "When it gets dark, the light from its bright, shiny tail can be seen from far away on the ocean's surface.",
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
            dexEntry: "A mucous membrane covers its body. Touching it barehanded will cause a shooting pain.",
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
            dexEntry: "Its body is always slimy. It often bangs its head on the river bottom as it swims but seems not to care.",
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
            dexEntry: "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
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
            dexEntry: "It hides in the dark, planning to take the life of the next living thing that wanders close by.",
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
            dexEntry: "Hiding in people's shadows at night, it absorbs their heat. The chill it causes makes the victims shake.",
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
            dexEntry: "Because different types of Unown exist, it is said that they must have a variety of abilities.",
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
            dexEntry: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
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
            dexEntry: "The many small metal particles that cover this Pokémon's body reflect bright light well.",
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
            dexEntry: "If it notices anything that moves, it immediately flings its vine at the object.",
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
            dexEntry: "When its hungry, it swings its razor-sharp leaves, slicing up any unlucky object nearby for food.",
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
            dexEntry: "Once ingested into this Pokémon's body, even the hardest object will melt into nothing.",
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
            dexEntry: "It can be carried away on even the gentlest breeze. It may even float all the way to the next town.",
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
            dexEntry: "As soon as it rains, it closes its flower and hides in the shade of a tree to avoid getting wet.",
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
            dexEntry: "Even in the fiercest wind, it can control its fluff to make its way to any place in the world it wants.",
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
            dexEntry: "The tochukaso growing on this Pokémon's back orders it to extract juice from tree trunks.",
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
            dexEntry: "When nothing's left to extract from the bug, the mushrooms on its back leave spores on the bug's egg.",
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
            dexEntry: "The swirl on its belly is its insides showing through the skin. It looks clearer after it eats.",
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
            dexEntry: "Though it is skilled at walking, it prefers to live underwater where there is less danger.",
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
            dexEntry: "It can use its well-developed arms and legs to run on the surface of the water for a split second.",
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
            dexEntry: "When it expands its throat to croak out a tune, nearby Poliwag and Poliwhirl gather immediately.",
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
            dexEntry: "This weak and pathetic Pokémon gets easily pushed along rivers when there are strong currents.",
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
            dexEntry: "It appears whenever there is world conflict, burning down any place it travels through.",
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
            dexEntry: "During spawning season, they swim gracefully in the water, searching for their perfect mate.",
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
            dexEntry: "When autumn comes, the males patrol the area around their nests in order to protect their offspring.",
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
            dexEntry: "It is always so absent-minded that it won't react, even if its flavorful tail is bitten.",
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
            dexEntry: "An attached Shellder won't let go because of the tasty flavor that oozes out of its tail.",
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
            dexEntry: "Every time it yawns, Shellder injects more poison into it. The poison makes it more intelligent.",
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
            dexEntry: "During the day, it stays in the cold underground to avoid the sun. It grows by bathing in moonlight.",
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
            dexEntry: "The smell from its drool-like syrup and the pollen on its petals is so bad, it may make opponents faint.",
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
            dexEntry: "By shaking its big petals, it scatters toxic pollen into the air, turning the air yellow.",
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
            dexEntry: "When these dance together, their petals rub against each other, making pretty, relaxing sounds.",
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
            dexEntry: "When it twitches its nose, it can tell where someone is sleeping and what that person is dreaming about.",
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
            dexEntry: "The longer it swings its pendulum, the longer the effects of its hypnosis last.",
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
            dexEntry: "It hypnotizes itself so that it can teleport away when it senses danger, even if it is asleep.",
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
            dexEntry: "When it closes its eyes, twice as many alpha particles come out of the surface of its body.",
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
            dexEntry: "It has an IQ of 5000. It calculates many things in order to gain the edge in every battle.",
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
            dexEntry: "When it encounters another Ditto, it will move faster than normal to duplicate that opponent exactly.",
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
            dexEntry: "It spits out a fluid that it uses to glue tree bark to its body. The fluid hardens when it touches air.",
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
            dexEntry: "Usually found hanging on to a fat tree trunk. It shoots out bits of its shell when it sees action.",
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
            dexEntry: "Small and very docile, it protects itself with its small, poisonous horn when attacked.",
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
            dexEntry: "It has a docile nature. If it is threatened with attack, it raises the barbs that are all over its body.",
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
            dexEntry: "The hard scales that cover its strong body serve as excellent protection from any attack.",
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
            dexEntry: "It constantly moves its large ears in many directions in order to detect danger right away.",
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
            dexEntry: "It is easily agitated and uses its horn for offense as soon as it notices an attacker.",
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
            dexEntry: "It uses its thick arms, legs and tail to attack forcefully. Melee combat is its specialty.",
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
            dexEntry: "It can see in all directions without moving its big eyes, helping it spot attackers and food right away.",
            cryUrl: "cries/193.mp3",
            japaneseName: "Yanyanma"
        },
        {
            name: "Sunkern",
            imageUrl: "images/191Sunkern.png",
            number: "102",
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
            dexEntry: "It is very weak. Its only means of defense is to shake its leaves desperately at its attacker.",
            cryUrl: "cries/191.mp3",
            japaneseName: "Himanuts"
        },
        {
            name: "Sunflora",
            imageUrl: "images/192Sunflora.png",
            number: "103",
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
            dexEntry: "As the hot season approaches, the petals on this Pokémon's face become more vivid and lively.",
            cryUrl: "cries/192.mp3",
            japaneseName: "Kimawari"
        },
        {
            name: "Exeggcute",
            imageUrl: "images/102Exeggcute.png",
            number: "104",
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
            dexEntry: "If even one is separated from the group, the energy bond between the six will make them rejoin instantly.",
            cryUrl: "cries/102.mp3",
            japaneseName: "Tamatama"
        },
        {
            name: "Exeggutor",
            imageUrl: "images/103Exeggutor.png",
            number: "105",
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
            dexEntry: "Living in a good environment makes it grow lots of heads. A head that drops off becomes an Exeggcute.",
            cryUrl: "cries/103.mp3",
            japaneseName: "Nassy"
        },
        {
            name: "Sudowoodo",
            imageUrl: "images/185Sudowoodo.png",
            number: "106",
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
            dexEntry: "If a tree branch shakes when there is no wind, it's a Sudowoodo, not a tree. It hides from the rain.",
            cryUrl: "cries/185.mp3",
            japaneseName: "Usokkie"
        },
        {
            name: "Wobbuffet",
            imageUrl: "images/202Wobbuffet.png",
            number: "107",
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
            dexEntry: "In order to conceal its black tail, it lives in a dark cave and only moves about at night.",
            cryUrl: "cries/202.mp3",
            japaneseName: "Sonans"
        },
        {
            name: "Venonat",
            imageUrl: "images/048Venonat.png",
            number: "108",
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
            dexEntry: "The small bugs it eats appear only at night, so it sleeps in a hole in a tree until night falls.",
            cryUrl: "cries/048.mp3",
            japaneseName: "Kongpang"
        },
        {
            name: "Venomoth",
            imageUrl: "images/049Venomoth.png",
            number: "109",
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
            dexEntry: "The scales it scatters will paralyze anyone who touches them, making that person unable to stand.",
            cryUrl: "cries/049.mp3",
            japaneseName: "Morphon"
        },
        {
            name: "Scyther",
            imageUrl: "images/123Scyther.png",
            number: "110",
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
            dexEntry: "It's very proud of its speed. It moves so fast that its opponent does not even know what knocked it down.",
            cryUrl: "cries/123.mp3",
            japaneseName: "Strike"
        },
        {
            name: "Scizor",
            imageUrl: "images/212Scizor.png",
            number: "111",
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
            dexEntry: "This Pokémon's pincers, which contain steel, can crush any hard object it gets a hold of into bits.",
            cryUrl: "cries/212.mp3",
            japaneseName: "Hassam"
        },
        {
            name: "Pinsir",
            imageUrl: "images/127Pinsir.png",
            number: "112",
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
            dexEntry: "When the temperature drops at night, it sleeps on treetops or among roots where it is well hidden.",
            cryUrl: "cries/127.mp3",
            japaneseName: "Kailios"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "113",
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
            dexEntry: "With its Herculean powers, it can easily throw around an object that is 100 times its own weight.",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Koffing",
            imageUrl: "images/109Koffing.png",
            number: "114",
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
            dexEntry: "If one gets close enough to it when it expels poisonous gas, the gas swirling inside it can be seen.",
            cryUrl: "cries/109.mp3",
            japaneseName: "Dogars"
        },
        {
            name: "Weezing",
            imageUrl: "images/110Weezing.png",
            number: "115",
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
            dexEntry: "When it inhales poisonous gases from garbage, its body expands, and its insides smell much worse.",
            cryUrl: "cries/110.mp3",
            japaneseName: "Matadogas"
        },
        {
            name: "Grimer",
            imageUrl: "images/088Grimer.png",
            number: "116",
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
            dexEntry: "When two of these Pokémon's bodies are combined together, new poisons are created.",
            cryUrl: "cries/088.mp3",
            japaneseName: "Betbeter"
        },
        {
            name: "Muk",
            imageUrl: "images/089Muk.png",
            number: "117",
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
            dexEntry: "As it moves, a very strong poison leaks from it, making the ground there barren for three years.",
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
            dexEntry: "The electricity emitted by the units on each side of its body cause it to become a strong magnet.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "119",
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
            dexEntry: "When many Magneton gather together, the resulting magnetic storm disrupts radio waves.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Voltorb",
            imageUrl: "images/100Voltorb.png",
            number: "120",
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
            dexEntry: "During the study of this Pokémon, it was discovered that its components are not found in nature.",
            cryUrl: "cries/100.mp3",
            japaneseName: "Biriridama"
        },
        {
            name: "Electrode",
            imageUrl: "images/101Electrode.png",
            number: "121",
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
            dexEntry: "The more energy it charges up, the faster it gets. But this also makes it more likely to explode.",
            cryUrl: "cries/101.mp3",
            japaneseName: "Marumine"
        },
        {
            name: "Aipom",
            imageUrl: "images/190Aipom.png",
            number: "122",
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
            dexEntry: "It uses its tail to hang on to tree branches. It uses its momentum to swing from one branch to another.",
            cryUrl: "cries/190.mp3",
            japaneseName: "Eipom"
        },
        {
            name: "Snubbull",
            imageUrl: "images/209Snubbull.png",
            number: "123",
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
            dexEntry: "In truth, it is a cowardly Pokémon. It growls eagerly in order to hide its fear from its opponent.",
            cryUrl: "cries/209.mp3",
            japaneseName: "Bulu"
        },
        {
            name: "Granbull",
            imageUrl: "images/210Granbull.png",
            number: "124",
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
            dexEntry: "It can make most any Pokémon run away simply by opening its mouth wide to reveal its big fangs.",
            cryUrl: "cries/210.mp3",
            japaneseName: "Granbulu"
        },
        {
            name: "Vulpix",
            imageUrl: "images/037Vulpix.png",
            number: "125",
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
            dexEntry: "As its body grows larger, its six warm tails become more beautiful, with a more luxurious coat of fur.",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "images/038Ninetales.png",
            number: "126",
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
            dexEntry: "It is said to live a thousand years, and each of its tails is loaded with supernatural powers.",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Growlithe",
            imageUrl: "images/058Growlithe.png",
            number: "127",
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
            dexEntry: "It controls a big territory. If it detects an unknown smell, it roars loudly to force out the intruder.",
            cryUrl: "cries/058.mp3",
            japaneseName: "Gardie"
        },
        {
            name: "Arcanine",
            imageUrl: "images/059Arcanine.png",
            number: "128",
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
            dexEntry: "An ancient picture scroll shows that people were attracted to its movement as it ran through prairies.",
            cryUrl: "cries/059.mp3",
            japaneseName: "Windie"
        },
        {
            name: "Stantler",
            imageUrl: "images/234Stantler.png",
            number: "129",
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
            dexEntry: "The round balls found on the fallen antlers can be ground into a powder that aids in sleeping.",
            cryUrl: "cries/234.mp3",
            japaneseName: "Odoshishi"
        },
        {
            name: "Marill",
            imageUrl: "images/183Marill.png",
            number: "130",
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
            dexEntry: "The fur on its body naturally repels water. It can stay dry, even when it plays in the water.",
            cryUrl: "cries/183.mp3",
            japaneseName: "Maril"
        },
        {
            name: "Azumarill",
            imageUrl: "images/184Azumarill.png",
            number: "131",
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
            dexEntry: "The bubble-like pattern on its stomach helps it camouflage itself when it's in the water.",
            cryUrl: "cries/184.mp3",
            japaneseName: "Marilli"
        },
        {
            name: "Diglett",
            imageUrl: "images/050Diglett.png",
            number: "132",
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
            dexEntry: "It digs underground and chews on tree roots, sticking its head out only when the sun isn't bright.",
            cryUrl: "cries/050.mp3",
            japaneseName: "Digda"
        },
        {
            name: "Dugtrio",
            imageUrl: "images/051Dugtrio.png",
            number: "133",
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
            dexEntry: "These Diglett triplets dig over 60 miles below sea level. No one knows what it's like underground.",
            cryUrl: "cries/051.mp3",
            japaneseName: "Dugtrio"
        },
        {
            name: "Mankey",
            imageUrl: "images/056Mankey.png",
            number: "134",
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
            dexEntry: "It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.",
            cryUrl: "cries/056.mp3",
            japaneseName: "Mankey"
        },
        {
            name: "Primeape",
            imageUrl: "images/057Primeape.png",
            number: "135",
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
            dexEntry: "It will beat up anyone who makes it mad, even if it has to chase them until the end of the world.",
            cryUrl: "cries/057.mp3",
            japaneseName: "Okorizaru"
        },
        {
            name: "Meowth",
            imageUrl: "images/052Meowth.png",
            number: "136",
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
            dexEntry: "It loves things that sparkle. When it sees a shiny object, the gold coin on its head shines too.",
            cryUrl: "cries/052.mp3",
            japaneseName: "Nyarth"
        },
        {
            name: "Persian",
            imageUrl: "images/053Persian.png",
            number: "137",
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
            dexEntry: "Behind its lithe, elegant appearance lies a barbaric side. It will tear apart its prey on a mere whim.",
            cryUrl: "cries/053.mp3",
            japaneseName: "Persian"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "138",
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
            dexEntry: "The only time it can use its psychic power is when its sleeping brain cells happen to wake.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "139",
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
            dexEntry: "It swims gracefully along on the quiet, slow-moving rivers and lakes of which it is so fond.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Machop",
            imageUrl: "images/066Machop.png",
            number: "140",
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
            dexEntry: "It trains by lifting rocks in the mountains. It can even pick up a Graveler with ease.",
            cryUrl: "cries/066.mp3",
            japaneseName: "Wanriky"
        },
        {
            name: "Machoke",
            imageUrl: "images/067Machoke.png",
            number: "141",
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
            dexEntry: "This tough Pokémon always stays in the zone. Its muscles become thicker after every battle.",
            cryUrl: "cries/067.mp3",
            japaneseName: "Goriky"
        },
        {
            name: "Machamp",
            imageUrl: "images/068Machamp.png",
            number: "142",
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
            dexEntry: "With four arms that react more quickly than it can think, it can execute many punches at once.",
            cryUrl: "cries/068.mp3",
            japaneseName: "Kairiky"
        },
        {
            name: "Tyrogue",
            imageUrl: "images/236Tyrogue.png",
            number: "143",
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
            dexEntry: "To brush up on its fighting skills, it will challenge anyone. It has a very strong competitive spirit.",
            cryUrl: "cries/236.mp3",
            japaneseName: "Balkie"
        },
        {
            name: "Hitmonlee",
            imageUrl: "images/106Hitmonlee.png",
            number: "144",
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
            dexEntry: "It is also called the Kick Master. It uses its elastic legs to execute every known kick.",
            cryUrl: "cries/106.mp3",
            japaneseName: "Sawamular"
        },
        {
            name: "Hitmonchan",
            imageUrl: "images/107Hitmonchan.png",
            number: "145",
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
            dexEntry: "To increase the strength of all its punch moves, it spins its arms just before making contact.",
            cryUrl: "cries/107.mp3",
            japaneseName: "Ebiwalar"
        },
        {
            name: "Hitmontop",
            imageUrl: "images/237Hitmontop.png",
            number: "146",
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
            dexEntry: "After doing a handstand to throw off the opponent's timing, it presents its fancy kick moves.",
            cryUrl: "cries/237.mp3",
            japaneseName: "Kapoerer"
        },
        {
            name: "Girafarig",
            imageUrl: "images/203Girafarig.png",
            number: "147",
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
            dexEntry: "When it is in danger, its tail uses some sort of mysterious powers to drive away the enemy.",
            cryUrl: "cries/203.mp3",
            japaneseName: "Kirinriki"
        },
        {
            name: "Tauros",
            imageUrl: "images/128Tauros.png",
            number: "148",
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
            dexEntry: "These violent Pokémon fight with other members of their herd in order to prove their strength.",
            cryUrl: "cries/128.mp3",
            japaneseName: "Kentauros"
        },
        {
            name: "Miltank",
            imageUrl: "images/241Miltank.png",
            number: "149",
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
            dexEntry: "In order to milk a Miltank, one must have a knack for rhythmically pulling up and down on its udders.",
            cryUrl: "cries/241.mp3",
            japaneseName: "Miltank"
        },
        {
            name: "Magby",
            imageUrl: "images/240Magby.png",
            number: "150",
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
            dexEntry: "It naturally spits an 1100-degree flame. It is said when many appear, it heralds a volcanic eruption.",
            cryUrl: "cries/240.mp3",
            japaneseName: "Buby"
        },
        {
            name: "Magmar",
            imageUrl: "images/126Magmar.png",
            number: "151",
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
            dexEntry: "It moves more frequently in hot areas. It can heal itself by dipping its wound into lava.",
            cryUrl: "cries/126.mp3",
            japaneseName: "Boober"
        },
        {
            name: "Smoochum",
            imageUrl: "images/238Smoochum.png",
            number: "152",
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
            dexEntry: "The sensitivity of its lips develops most quickly. It uses them to try to identify unknown objects.",
            cryUrl: "cries/238.mp3",
            japaneseName: "Muchul"
        },
        {
            name: "Jynx",
            imageUrl: "images/124Jynx.png",
            number: "153",
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
            dexEntry: "It has several different cry patterns, each of which seems to have its own meaning.",
            cryUrl: "cries/124.mp3",
            japaneseName: "Rougela"
        },
        {
            name: "Elekid",
            imageUrl: "images/239Elekid.png",
            number: "154",
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
            dexEntry: "It loves violent thunder. The space between its horns flickers bluish-white when it is charging energy.",
            cryUrl: "cries/239.mp3",
            japaneseName: "Elekid"
        },
        {
            name: "Electabuzz",
            imageUrl: "images/125Electabuzz.png",
            number: "155",
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
            dexEntry: "When two Electabuzz touch, they control the electric currents to communicate their feelings.",
            cryUrl: "cries/125.mp3",
            japaneseName: "Eleboo"
        },
        {
            name: "Mr. Mime",
            imageUrl: "images/122Mr._Mime.png",
            number: "156",
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
            dexEntry: "It uses the mysterious power it has in its fingers to solidify air into an invisible wall.",
            cryUrl: "cries/122.mp3",
            japaneseName: "Barrierd"
        },
        {
            name: "Smeargle",
            imageUrl: "images/235Smeargle.png",
            number: "157",
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
            dexEntry: "The color of the mysterious fluid secreted from its tail is predetermined for each Smeargle.",
            cryUrl: "cries/235.mp3",
            japaneseName: "Doble"
        },
        {
            name: "Farfetch'd",
            imageUrl: "images/083Farfetch'd.png",
            number: "158",
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
            dexEntry: "In order to prevent their extinction, more people have made an effort to breed these Pokémon.",
            cryUrl: "cries/083.mp3",
            japaneseName: "Kamonegi"
        },
        {
            name: "Natu",
            imageUrl: "images/177Natu.png",
            number: "159",
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
            dexEntry: "It is extremely good at climbing tree trunks and likes to eat the new sprouts on the trees.",
            cryUrl: "cries/177.mp3",
            japaneseName: "Naty"
        },
        {
            name: "Xatu",
            imageUrl: "images/178Xatu.png",
            number: "160",
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
            dexEntry: "Once it begins to meditate at sunrise, the entire day will pass before it will move again.",
            cryUrl: "cries/178.mp3",
            japaneseName: "Natio"
        },
        {
            name: "Qwilfish",
            imageUrl: "images/211Qwilfish.png",
            number: "161",
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
            dexEntry: "When faced with a larger opponent, it swallows as much water as it can to match the opponent's size.",
            cryUrl: "cries/211.mp3",
            japaneseName: "Harysen"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "162",
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
            dexEntry: "As it floats along on the waves, it uses its toxic feelers to stab anything it touches.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "163",
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
            dexEntry: "When its 80 feelers absorb water, it stretches to become like a net to entangle its prey.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Krabby",
            imageUrl: "images/098Krabby.png",
            number: "164",
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
            dexEntry: "If it is unable to find food, it will absorb nutrients by swallowing a mouthful of sand.",
            cryUrl: "cries/098.mp3",
            japaneseName: "Crab"
        },
        {
            name: "Kingler",
            imageUrl: "images/099Kingler.png",
            number: "165",
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
            dexEntry: "Its over sized claw is very powerful, but when it's not in battle, the claw just gets in the way.",
            cryUrl: "cries/099.mp3",
            japaneseName: "Kingler"
        },
        {
            name: "Shuckle",
            imageUrl: "images/213Shuckle.png",
            number: "166",
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
            dexEntry: "The fluid secreted by its toes carves holes in rocks for nesting and can be mixed with Berries to make a drink.",
            cryUrl: "cries/213.mp3",
            japaneseName: "Tsubotsubo"
        },
        {
            name: "Staryu",
            imageUrl: "images/120Staryu.png",
            number: "167",
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
            dexEntry: "When the stars twinkle at night, it floats up from the sea floor, and its body's center core flickers.",
            cryUrl: "cries/120.mp3",
            japaneseName: "Hitodeman"
        },
        {
            name: "Starmie",
            imageUrl: "images/121Starmie.png",
            number: "168",
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
            dexEntry: "It is said that it uses the seven colored core of its body to send electric waves into outer space.",
            cryUrl: "cries/121.mp3",
            japaneseName: "Starmie"
        },
        {
            name: "Shellder",
            imageUrl: "images/090Shellder.png",
            number: "169",
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
            dexEntry: "Clamping on to an opponent reveals its vulnerable parts, so it uses this move only as a last resort.",
            cryUrl: "cries/090.mp3",
            japaneseName: "Shellder"
        },
        {
            name: "Cloyster",
            imageUrl: "images/091Cloyster.png",
            number: "170",
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
            dexEntry: "Even a missile can't break the spikes it uses to stab opponents. They're even harder than its shell.",
            cryUrl: "cries/091.mp3",
            japaneseName: "Parshen"
        },
        {
            name: "Corsola",
            imageUrl: "images/222Corsola.png",
            number: "171",
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
            dexEntry: "The points on its head absorb nutrients from clear water. They cannot survive in polluted water.",
            cryUrl: "cries/222.mp3",
            japaneseName: "Sunnygo"
        },
        {
            name: "Remoraid",
            imageUrl: "images/223Remoraid.png",
            number: "172",
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
            dexEntry: "To escape from an attacker, it may shoot water out of its mouth, then use that force to swim backward.",
            cryUrl: "cries/223.mp3",
            japaneseName: "Teppouo"
        },
        {
            name: "Octillery",
            imageUrl: "images/224Octillery.png",
            number: "173",
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
            dexEntry: "Its instinct is to bury itself in holes. It often steals the nesting holes of others to sleep in them.",
            cryUrl: "cries/224.mp3",
            japaneseName: "Okutank"
        },
        {
            name: "Chinchou",
            imageUrl: "images/170Chinchou.png",
            number: "174",
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
            dexEntry: "Its antennae, which evolved from a fin, have both positive and negative charges flowing through them.",
            cryUrl: "cries/170.mp3",
            japaneseName: "Chonchie"
        },
        {
            name: "Lanturn",
            imageUrl: "images/171Lanturn.png",
            number: "175",
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
            dexEntry: "This Pokémon uses the bright part of its body, which changed from a dorsal fin, to lure prey.",
            cryUrl: "cries/171.mp3",
            japaneseName: "Lantern"
        },
        {
            name: "Seel",
            imageUrl: "images/086Seel.png",
            number: "176",
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
            dexEntry: "The light blue fur that covers it keeps it protected against the cold. It loves iceberg filled oceans.",
            cryUrl: "cries/086.mp3",
            japaneseName: "Pawou"
        },
        {
            name: "Dewgong",
            imageUrl: "images/087Dewgong.png",
            number: "177",
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
            dexEntry: "It sleeps under shallow ocean waters during the day, then looks for food at night when it's cold.",
            cryUrl: "cries/087.mp3",
            japaneseName: "Jugon"
        },
        {
            name: "Lickitung",
            imageUrl: "images/108Lickitung.png",
            number: "178",
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
            dexEntry: "It has a tongue that is over 6'6\" long. It uses this long tongue to lick its body clean.",
            cryUrl: "cries/108.mp3",
            japaneseName: "Beroringa"
        },
        {
            name: "Tangela",
            imageUrl: "images/114Tangela.png",
            number: "179",
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
            dexEntry: "During battle, it constantly moves the vines that cover its body in order to annoy its opponent.",
            cryUrl: "cries/114.mp3",
            japaneseName: "Monjara"
        },
        {
            name: "Eevee",
            imageUrl: "images/133Eevee.png",
            number: "180",
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
            dexEntry: "Its ability to evolve into many forms allows it to adapt smoothly and perfectly to any environment.",
            cryUrl: "cries/133.mp3",
            japaneseName: "Eievui"
        },
        {
            name: "Vaporeon",
            imageUrl: "images/134Vaporeon.png",
            number: "181",
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
            dexEntry: "As it uses the fins on the tip of its tail to swim, it blends with the water perfectly.",
            cryUrl: "cries/134.mp3",
            japaneseName: "Showers"
        },
        {
            name: "Jolteon",
            imageUrl: "images/135Jolteon.png",
            number: "182",
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
            dexEntry: "The negatively charged ions generated in its fur create a constant sparking noise.",
            cryUrl: "cries/135.mp3",
            japaneseName: "Thunders"
        },
        {
            name: "Flareon",
            imageUrl: "images/136Flareon.png",
            number: "183",
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
            dexEntry: "Once it has stored up enough heat, this Pokémon's body temperature can reach up to 1700 degrees.",
            cryUrl: "cries/136.mp3",
            japaneseName: "Booster"
        },
        {
            name: "Espeon",
            imageUrl: "images/196Espeon.png",
            number: "184",
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
            dexEntry: "The tip of its forked tail quivers when it is predicting its opponent's next move.",
            cryUrl: "cries/196.mp3",
            japaneseName: "Eifie"
        },
        {
            name: "Umbreon",
            imageUrl: "images/197Umbreon.png",
            number: "185",
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
            dexEntry: "On the night of a full moon, or when it gets excited, the ring patterns on its body glow yellow.",
            cryUrl: "cries/197.mp3",
            japaneseName: "Blacky"
        },
        {
            name: "Horsea",
            imageUrl: "images/116Horsea.png",
            number: "186",
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
            dexEntry: "When they're in a safe location, they can be seen playfully tangling their tails together.",
            cryUrl: "cries/116.mp3",
            japaneseName: "Tattu"
        },
        {
            name: "Seadra",
            imageUrl: "images/117Seadra.png",
            number: "187",
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
            dexEntry: "The male raises the young. If it is approached, it uses its toxic spikes to fend off the intruder.",
            cryUrl: "cries/117.mp3",
            japaneseName: "Seadra"
        },
        {
            name: "Kingdra",
            imageUrl: "images/230Kingdra.png",
            number: "188",
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
            dexEntry: "It stores energy by sleeping at underwater depths at which no other life forms can survive.",
            cryUrl: "cries/230.mp3",
            japaneseName: "Kingdra"
        },
        {
            name: "Gligar",
            imageUrl: "images/207Gligar.png",
            number: "189",
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
            dexEntry: "It builds its nest on a steep cliff. When it is done gliding, it hops along the ground back to its nest.",
            cryUrl: "cries/207.mp3",
            japaneseName: "Gliger"
        },
        {
            name: "Delibird",
            imageUrl: "images/225Delibird.png",
            number: "190",
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
            dexEntry: "It always carries its food with it, wherever it goes. If attacked, it throws its food at the opponent.",
            cryUrl: "cries/225.mp3",
            japaneseName: "Delibird"
        },
        {
            name: "Swinub",
            imageUrl: "images/220Swinub.png",
            number: "191",
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
            dexEntry: "It uses the tip of its nose to dig for food. Its nose is so tough that even frozen ground poses no problem.",
            cryUrl: "cries/220.mp3",
            japaneseName: "Urimoo"
        },
        {
            name: "Piloswine",
            imageUrl: "images/221Piloswine.png",
            number: "192",
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
            dexEntry: "Although its legs are short, its rugged hooves prevent it from slipping, even on icy ground.",
            cryUrl: "cries/221.mp3",
            japaneseName: "Inomoo"
        },
        {
            name: "Teddiursa",
            imageUrl: "images/216Teddiursa.png",
            number: "193",
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
            dexEntry: "It always licks honey. Its palm tastes sweet because of all the honey it has absorbed.",
            cryUrl: "cries/216.mp3",
            japaneseName: "Himeguma"
        },
        {
            name: "Ursaring",
            imageUrl: "images/217Ursaring.png",
            number: "194",
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
            dexEntry: "Although it has a large body, it is quite skilled at climbing trees. It eats and sleeps in the treetops.",
            cryUrl: "cries/217.mp3",
            japaneseName: "Ringuma"
        },
        {
            name: "Phanpy",
            imageUrl: "images/231Phanpy.png",
            number: "195",
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
            dexEntry: "During the deserted morning hours, it comes ashore where it deftly uses its trunk to take a shower.",
            cryUrl: "cries/231.mp3",
            japaneseName: "Gomazou"
        },
        {
            name: "Donphan",
            imageUrl: "images/232Donphan.png",
            number: "196",
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
            dexEntry: "Because this Pokémon's skin is so tough, a normal attack won't even leave a scratch on it.",
            cryUrl: "cries/232.mp3",
            japaneseName: "Donfan"
        },
        {
            name: "Mantine",
            imageUrl: "images/226Mantine.png",
            number: "197",
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
            dexEntry: "It swims along freely, eating things that swim into its mouth. Its whole body is very coarse.",
            cryUrl: "cries/226.mp3",
            japaneseName: "Mantain"
        },
        {
            name: "Skarmory",
            imageUrl: "images/227Skarmory.png",
            number: "198",
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
            dexEntry: "The feathers that it sheds are very sharp. It is said that people once used the feathers as swords.",
            cryUrl: "cries/227.mp3",
            japaneseName: "Airmd"
        },
        {
            name: "Doduo",
            imageUrl: "images/084Doduo.png",
            number: "199",
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
            dexEntry: "It lives on a grassy plain where it can see a long way. If it sees an enemy, it runs away at 60 mph.",
            cryUrl: "cries/084.mp3",
            japaneseName: "Dodo"
        },
        {
            name: "Dodrio",
            imageUrl: "images/085Dodrio.png",
            number: "200",
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
            dexEntry: "An enemy that takes its eyes off any of the three heads—even for a second—will get pecked severely.",
            cryUrl: "cries/085.mp3",
            japaneseName: "Dodorio"
        },
        {
            name: "Ponyta",
            imageUrl: "images/077Ponyta.png",
            number: "201",
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
            dexEntry: "Training by jumping over grass that grows longer every day has made it a world-class jumper.",
            cryUrl: "cries/077.mp3",
            japaneseName: "Ponyta"
        },
        {
            name: "Rapidash",
            imageUrl: "images/078Rapidash.png",
            number: "202",
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
            dexEntry: "It just loves to gallop. The faster it goes, the longer the swaying flames of its mane will become.",
            cryUrl: "cries/078.mp3",
            japaneseName: "Gallop"
        },
        {
            name: "Cubone",
            imageUrl: "images/104Cubone.png",
            number: "203",
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
            dexEntry: "It lost its mother after its birth. It wears its mother's skull, never revealing its true face.",
            cryUrl: "cries/104.mp3",
            japaneseName: "Karakara"
        },
        {
            name: "Marowak",
            imageUrl: "images/105Marowak.png",
            number: "204",
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
            dexEntry: "Somewhere in the world is a cemetery just for Marowak. It gets its bones from those graves.",
            cryUrl: "cries/105.mp3",
            japaneseName: "Garagara"
        },
        {
            name: "Kangaskhan",
            imageUrl: "images/115Kangaskhan.png",
            number: "205",
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
            dexEntry: "To avoid crushing the baby it carries in its pouch, it always sleeps standing up.",
            cryUrl: "cries/115.mp3",
            japaneseName: "Garura"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "206",
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
            dexEntry: "It can remember only one thing at a time. Once it starts rushing, it forgets why it started.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "207",
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
            dexEntry: "By lightly spinning its drill-like horn, it can easily shatter even a diamond in the rough.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Murkrow",
            imageUrl: "images/198Murkrow.png",
            number: "208",
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
            dexEntry: "It hides any shiny object it finds in a secret location. Murkrow and Meowth loot one another's stashes.",
            cryUrl: "cries/198.mp3",
            japaneseName: "Yamikarasu"
        },
        {
            name: "Houndour",
            imageUrl: "images/228Houndour.png",
            number: "209",
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
            dexEntry: "Around dawn, its ominous howl echoes through the area to announce that this is its territory.",
            cryUrl: "cries/228.mp3",
            japaneseName: "Delvil"
        },
        {
            name: "Houndoom",
            imageUrl: "images/229Houndoom.png",
            number: "210",
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
            dexEntry: "The pungent-smelling flame that shoots from its mouth results from toxins burning in its body.",
            cryUrl: "cries/229.mp3",
            japaneseName: "Hellgar"
        },
        {
            name: "Slugma",
            imageUrl: "images/218Slugma.png",
            number: "211",
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
            dexEntry: "These group together in areas that are hotter than normal. If it cools off, its skin hardens.",
            cryUrl: "cries/218.mp3",
            japaneseName: "Magmag"
        },
        {
            name: "Magcargo",
            imageUrl: "images/219Magcargo.png",
            number: "212",
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
            dexEntry: "Its body is as hot as lava and is always billowing. Flames will occasionally burst from its shell.",
            cryUrl: "cries/219.mp3",
            japaneseName: "Magcargot"
        },
        {
            name: "Sneasel",
            imageUrl: "images/215Sneasel.png",
            number: "213",
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
            dexEntry: "This cunning Pokémon hides in the cover of darkness, waiting to attack its prey.",
            cryUrl: "cries/215.mp3",
            japaneseName: "Nyula"
        },
        {
            name: "Misdreavus",
            imageUrl: "images/200Misdreavus.png",
            number: "214",
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
            dexEntry: "It loves to watch people it's scared. It frightens them by screaming loudly or appearing suddenly.",
            cryUrl: "cries/200.mp3",
            japaneseName: "Muma"
        },
        {
            name: "Porygon",
            imageUrl: "images/137Porygon.png",
            number: "215",
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
            dexEntry: "An artificial Pokémon created due to extensive research, it can perform only what is in its program.",
            cryUrl: "cries/137.mp3",
            japaneseName: "Porygon"
        },
        {
            name: "Porygon2",
            imageUrl: "images/233Porygon2.png",
            number: "216",
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
            dexEntry: "This manmade Pokémon evolved from the latest technology. It may have unprogrammed reactions.",
            cryUrl: "cries/233.mp3",
            japaneseName: "Porygon2"
        },
        {
            name: "Chansey",
            imageUrl: "images/113Chansey.png",
            number: "217",
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
            dexEntry: "People try to catch it for its extremely nutritious eggs, but it rarely can be found.",
            cryUrl: "cries/113.mp3",
            japaneseName: "Lucky"
        },
        {
            name: "Blissey",
            imageUrl: "images/242Blissey.png",
            number: "218",
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
            dexEntry: "Biting into one of the delicious eggs that Blissey provides will make everyone around smile with joy.",
            cryUrl: "cries/242.mp3",
            japaneseName: "Happinas"
        },
        {
            name: "Lapras",
            imageUrl: "images/131Lapras.png",
            number: "219",
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
            dexEntry: "This gentle Pokémon loves to give people rides and provides a very comfortable way to get around.",
            cryUrl: "cries/131.mp3",
            japaneseName: "Laplace"
        },
        {
            name: "Omanyte",
            imageUrl: "images/138Omanyte.png",
            number: "220",
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
            dexEntry: "In prehistoric times, it swam on the sea floor, eating plankton. Its fossils are sometimes found.",
            cryUrl: "cries/138.mp3",
            japaneseName: "Omnite"
        },
        {
            name: "Omastar",
            imageUrl: "images/139Omastar.png",
            number: "221",
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
            dexEntry: "Its heavy shell allowed it to reach only nearby food. This could be the reason it is extinct.",
            cryUrl: "cries/139.mp3",
            japaneseName: "Omstar"
        },
        {
            name: "Kabuto",
            imageUrl: "images/140Kabuto.png",
            number: "222",
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
            dexEntry: "Three hundred million years ago, it hid on the sea floor. It also has eyes on its back that glow.",
            cryUrl: "cries/140.mp3",
            japaneseName: "Kabuto"
        },
        {
            name: "Kabutops",
            imageUrl: "images/141Kabutops.png",
            number: "223",
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
            dexEntry: "It was able to swim quickly through the water by compactly folding up its razor-sharp sickles.",
            cryUrl: "cries/141.mp3",
            japaneseName: "Kabutops"
        },
        {
            name: "Aerodactyl",
            imageUrl: "images/142Aerodactyl.png",
            number: "224",
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
            dexEntry: "In prehistoric times, this Pokémon flew freely and fearlessly through the skies.",
            cryUrl: "cries/142.mp3",
            japaneseName: "Ptera"
        },
        {
            name: "Snorlax",
            imageUrl: "images/143Snorlax.png",
            number: "225",
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
            dexEntry: "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it.",
            cryUrl: "cries/143.mp3",
            japaneseName: "Kabigon"
        },
        {
            name: "Bulbasaur",
            imageUrl: "images/001Bulbasaur.png",
            number: "226",
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
            dexEntry: "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow.",
            cryUrl: "cries/001.mp3",
            japaneseName: "Fushigidane"
        },
        {
            name: "Ivysaur",
            imageUrl: "images/002Ivysaur.png",
            number: "227",
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
            dexEntry: "The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.",
            cryUrl: "cries/002.mp3",
            japaneseName: "Fushigisou"
        },
        {
            name: "Venusaur",
            imageUrl: "images/003Venusaur.png",
            number: "228",
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
            dexEntry: "As it warms itself and absorbs the sunlight, its flower petals release a pleasant fragrance.",
            cryUrl: "cries/003.mp3",
            japaneseName: "Fushigibana"
        },
        {
            name: "Charmander",
            imageUrl: "images/004Charmander.png",
            number: "229",
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
            dexEntry: "If it's healthy, the flame on the tip of its tail will burn vigorously, even if it gets a bit wet.",
            cryUrl: "cries/004.mp3",
            japaneseName: "Hitokage"
        },
        {
            name: "Charmeleon",
            imageUrl: "images/005Charmeleon.png",
            number: "230",
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
            dexEntry: "If it becomes agitated during battle, it spouts intense flames, incinerating its surroundings.",
            cryUrl: "cries/005.mp3",
            japaneseName: "Lizardo"
        },
        {
            name: "Charizard",
            imageUrl: "images/006Charizard.png",
            number: "231",
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
            dexEntry: "It uses its wings to fly high. The temperature of its fire increases as it gains experience in battle.",
            cryUrl: "cries/006.mp3",
            japaneseName: "Lizardon"
        },
        {
            name: "Squirtle",
            imageUrl: "images/007Squirtle.png",
            number: "232",
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
            dexEntry: "When it feels threatened, it draws its legs inside its shell and sprays water from its mouth.",
            cryUrl: "cries/007.mp3",
            japaneseName: "Zenigame"
        },
        {
            name: "Wartortle",
            imageUrl: "images/008Wartortle.png",
            number: "233",
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
            dexEntry: "Its long, furry tail is a symbol of longevity, making it quite popular among older people.",
            cryUrl: "cries/008.mp3",
            japaneseName: "Kameil"
        },
        {
            name: "Blastoise",
            imageUrl: "images/009Blastoise.png",
            number: "234",
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
            dexEntry: "It firmly plants its feet on the ground before shooting water from the jets on its back.",
            cryUrl: "cries/009.mp3",
            japaneseName: "Kamex"
        },
        {
            name: "Articuno",
            imageUrl: "images/144Articuno.png",
            number: "235",
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
            dexEntry: "Legendary bird Pokémon. As it flies through the sky, it cools the air, causing snow to fall.",
            cryUrl: "cries/144.mp3",
            japaneseName: "Freezer"
        },
        {
            name: "Zapdos",
            imageUrl: "images/145Zapdos.png",
            number: "236",
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
            dexEntry: "Legendary bird Pokémon. They say lightning caused by the flapping of its wings causes summer storms.",
            cryUrl: "cries/145.mp3",
            japaneseName: "Thunder"
        },
        {
            name: "Moltres",
            imageUrl: "images/146Moltres.png",
            number: "237",
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
            dexEntry: "Legendary bird Pokémon. It is said to migrate from the south along with the spring.",
            cryUrl: "cries/146.mp3",
            japaneseName: "Fire"
        },
        {
            name: "Raikou",
            imageUrl: "images/243Raikou.png",
            number: "238",
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
            dexEntry: "This rough Pokémon stores energy in its body, then sweeps across the land, shooting off electricity.",
            cryUrl: "cries/243.mp3",
            japaneseName: "Raikou"
        },
        {
            name: "Entei",
            imageUrl: "images/244Entei.png",
            number: "239",
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
            dexEntry: "This brawny Pokémon courses around the earth, spouting flames hotter than a volcano's magma.",
            cryUrl: "cries/244.mp3",
            japaneseName: "Entei"
        },
        {
            name: "Suicune",
            imageUrl: "images/245Suicune.png",
            number: "240",
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
            dexEntry: "This divine Pokémon blows around the world, always in search of a pure reservoir.",
            cryUrl: "cries/245.mp3",
            japaneseName: "Suicune"
        },
        {
            name: "Dratini",
            imageUrl: "images/147Dratini.png",
            number: "241",
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
            dexEntry: "It sheds many layers of skin as it grows larger. During this process, it is protected by a rapid waterfall.",
            cryUrl: "cries/147.mp3",
            japaneseName: "Miniryu"
        },
        {
            name: "Dragonair",
            imageUrl: "images/148Dragonair.png",
            number: "242",
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
            dexEntry: "It is called the divine Pokémon. When its entire body brightens slightly, the weather changes.",
            cryUrl: "cries/148.mp3",
            japaneseName: "Hakuryu"
        },
        {
            name: "Dragonite",
            imageUrl: "images/149Dragonite.png",
            number: "243",
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
            dexEntry: "It is said that somewhere in the ocean lies an island where these gather. Only they live there.",
            cryUrl: "cries/149.mp3",
            japaneseName: "Kairyu"
        },
        {
            name: "Larvitar",
            imageUrl: "images/246Larvitar.png",
            number: "244",
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
            dexEntry: "Born deep underground, this Pokémon becomes a pupa after eating enough dirt to make a mountain.",
            cryUrl: "cries/246.mp3",
            japaneseName: "Yogiras"
        },
        {
            name: "Pupitar",
            imageUrl: "images/247Pupitar.png",
            number: "245",
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
            dexEntry: "It will not stay still, even while it's a pupa. It already has arms and legs under its solid shell.",
            cryUrl: "cries/247.mp3",
            japaneseName: "Sanagiras"
        },
        {
            name: "Tyranitar",
            imageUrl: "images/248Tyranitar.png",
            number: "246",
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
            dexEntry: "In just one of its mighty hands, it has the power to make the ground shake and mountains crumble.",
            cryUrl: "cries/248.mp3",
            japaneseName: "Bangiras"
        },
        {
            name: "Lugia",
            imageUrl: "images/249Lugia.png",
            number: "247",
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
            dexEntry: "It has an incredible ability to calm raging storms. It is said that Lugia appears when storms start.",
            cryUrl: "cries/249.mp3",
            japaneseName: "Lugia"
        },
        {
            name: "Ho-Oh",
            imageUrl: "images/250Ho-Oh.png",
            number: "248",
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
            dexEntry: "It will reveal itself before a pure-hearted trainer by shining its bright rainbow-colored wings.",
            cryUrl: "cries/250.mp3",
            japaneseName: "Houou"
        },
        {
            name: "Mewtwo",
            imageUrl: "images/150Mewtwo.png",
            number: "249",
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
            dexEntry: "Said to rest quietly in an undiscovered cave, this Pokémon was created solely for battling.",
            cryUrl: "cries/150.mp3",
            japaneseName: "Mewtwo"
        },
        {
            name: "Mew",
            imageUrl: "images/151Mew.png",
            number: "250",
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
            dexEntry: "Because it can learn any move, some people began research to see if it is the ancestor of all Pokémon.",
            cryUrl: "cries/151.mp3",
            japaneseName: "Mew"
        },
        {
            name: "Celebi",
            imageUrl: "images/251Celebi.png",
            number: "251",
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
            dexEntry: "Revered as a guardian of the forest, Celebi appears wherever beautiful forests exist.",
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