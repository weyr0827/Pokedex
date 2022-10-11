//Gold Search Code


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
            dexEntry: "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up the sun's rays.",
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
            dexEntry: "The scent of spices comes from around its neck. Somehow, sniffing it makes you want to fight.",
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
            dexEntry: "The aroma that rises from its petals contains a substance that calms aggressive feelings.",
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
            dexEntry: "It is timid, and always curls itself up in a ball. If attacked, it flares up its back for protection.",
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
            dexEntry: "Be careful if it turns its back during battle. It means that it will attack with the fire on its back.",
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
            dexEntry: "If its rage peaks, it becomes so hot that anything that touches it will instantly go up in flames.",
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
            dexEntry: "Its well-developed jaws are powerful and capable of crushing anything. Even its trainer must be careful.",
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
            dexEntry: "If it loses a fang, a new one grows back in its place. There are always 48 fangs lining its mouth.",
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
            dexEntry: "When it bites with its massive and powerful jaws, it shakes its head and savagely tears its victim up.",
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
            dexEntry: "It usually hides in tall grass. Because it dislikes fighting, it protects itself by kicking up sand.",
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
            dexEntry: "It has outstanding vision. However high it flies, it is able to distinguish the movements of its prey.",
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
            dexEntry: "Its well-developed chest muscles make it strong enough to whip up a gusty windstorm with just a few flaps.",
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
            dexEntry: "It flaps its short wings to flush out insects from tall grass. It then plucks them with its stubby beak.",
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
            dexEntry: "It shoots itself suddenly high into the sky, then plummets down in one fell swoop to strike its prey.",
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
            dexEntry: "It always stands on one foot. It changes feet so fast, the movement can rarely be seen.",
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
            dexEntry: "Its eyes are specially adapted. They concentrate even faint light and enable it to see in the dark.",
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
            dexEntry: "It eats everything. Wherever food is available, it will settle down and produce offspring continuously.",
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
            dexEntry: "Gnaws on anything with its tough fangs. It can even topple concrete buildings by gnawing on them.",
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
            dexEntry: "A very cautious Pokémon, it raises itself up using its tail to get a better view of its surroundings.",
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
            dexEntry: "It makes a nest to suit its long and skinny body. The nest is impossible for other Pokémon to enter.",
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
            dexEntry: "It is not yet skilled at storing electricity. It may send out a jolt if amused or startled.",
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
            dexEntry: "This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.",
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
            dexEntry: "When its electricity builds, its muscles are stimulated, and it becomes more aggressive than usual.",
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
            dexEntry: "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
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
            dexEntry: "Inside the shell, it is soft and weak as it prepares to evolve. It stays motionless in the shell.",
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
            dexEntry: "It collects honey every day. It rubs honey onto the hairs on its legs to carry it back to its nest.",
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
            dexEntry: "Its poison stinger is very powerful. Its bright-colored body is intended to warn off its enemies.",
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
            dexEntry: "Although it is a cocoon, it can move a little. It can extend its poison barb if it is attacked.",
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
            dexEntry: "It can take down any opponent with its powerful poison stingers. It sometimes attacks in swarms.",
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
            dexEntry: "It is very timid. It will be afraid to move if it is alone. But it will be active if it is in a group.",
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
            dexEntry: "When the stars flicker in the night sky, it flutters about, scattering a glowing powder.",
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
            dexEntry: "It lies still in the same pose for days in its web, waiting for its unsuspecting prey to wander close.",
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
            dexEntry: "It spins string not only from its rear but also from its mouth. It is hard to tell which end is which.",
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
            dexEntry: "Most people may not notice, but a closer look should reveal that there are many Geodude around.",
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
            dexEntry: "With a free and uncaring nature, it doesn't mind if pieces break off while it rolls down mountains.",
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
            dexEntry: "It sheds its skin once a year. The discarded shell immediately hardens and crumbles away.",
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
            dexEntry: "While flying, it constantly emits ultrasonic waves from its mouth to check its surroundings.",
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
            dexEntry: "However hard its victim's hide may be, it punctures with sharp fangs and gorges itself with blood.",
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
            dexEntry: "It flies so silently through the dark on its four wings that it may not be noticed even when nearby.",
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
            dexEntry: "Because of its unusual, star-like silhouette, people believe that it came here on a meteor.",
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
            dexEntry: "The moonlight that it stores in the wings on its back apparently gives it the ability to float in midair.",
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
            dexEntry: "With its acute hearing, it can pick up sounds from far away. It usually hides in quiet places.",
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
            dexEntry: "It has a very soft body. If it starts to roll, it will bounce all over and be impossible to stop.",
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
            dexEntry: "If it inflates to sing a lullaby, it can perform longer and cause sure drowsiness in its audience.",
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
            dexEntry: "Their fur feels so good that if two of them snuggle together, they won't want to be separated.",
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
            dexEntry: "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.",
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
            dexEntry: "They say that it will appear before kindhearted, caring people and shower them with happiness.",
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
            dexEntry: "If it fell from a great height, this Pokémon could save itself by rolling into a ball and bouncing.",
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
            dexEntry: "In an attempt to hide itself, it will run around at top speed to kick up a blinding dust storm.",
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
            dexEntry: "It can freely detach its jaw to swallow large prey whole. It can become too heavy to move, however.",
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
            dexEntry: "Transfixing prey with the face-like pattern on its belly, it binds and poisons the frightened victim.",
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
            dexEntry: "When spotted, this Pokémon escapes backward by furiously boring into the ground with its tail.",
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
            dexEntry: "If static electricity builds in its body, its fleece doubles in volume. Touching it will shock you.",
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
            dexEntry: "As a result of storing too much electricity, it developed patches where even downy wool won't grow.",
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
            dexEntry: "The tail's tip shines brightly and can be seen from far away. It acts as a beacon for lost people.",
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
            dexEntry: "This Pokémon lives in cold water. It will leave the water to search for food when it gets cold outside.",
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
            dexEntry: "This carefree Pokémon has an easy-going nature. While swimming, it always bumps into boat hulls.",
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
            dexEntry: "With its gas-like body, it can sneak into any place it desires. However, it can be blown away by wind.",
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
            dexEntry: "In total darkness, where nothing is visible, Haunter lurks, silently stalking its next victim.",
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
            dexEntry: "It steals heat from its surroundings. If you feel a sudden chill, it is certain that a Gengar appeared.",
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
            dexEntry: "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.",
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
            dexEntry: "It twists and squirms through the ground. The thunderous roar of its tunneling echoes a long way.",
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
            dexEntry: "Its body has been compressed deep under the ground. As a result, it is even harder than a diamond.",
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
            dexEntry: "Even though its body is extremely skinny, it is blindingly fast when catching its prey.",
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
            dexEntry: "Even though it is filled with acid, it does not melt because it also oozes a neutralizing fluid.",
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
            dexEntry: "Acid that has dissolved many prey becomes sweeter, making it even more effective at attracting prey.",
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
            dexEntry: "To keep from being blown away by the wind, they gather in clusters. They do enjoy gentle breezes, though.",
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
            dexEntry: "The bloom on top of its head opens and closes as the temperature fluctuates up and down.",
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
            dexEntry: "Once it catches the wind, it deftly controls its cotton-puff spores to float, even around the world.",
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
            dexEntry: "It is doused with mushroom spores when it is born. As its body grows, mushrooms sprout from its back.",
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
            dexEntry: "It stays mostly in dark, damp places, the preference not of the bug, but of the big mushrooms on its back.",
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
            dexEntry: "Because it is inept at walking on its newly grown legs, it always swims around in water.",
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
            dexEntry: "The swirl on its belly subtly undulates. Staring at it may gradually cause drowsiness.",
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
            dexEntry: "This strong and skilled swimmer is even capable of crossing the Pacific Ocean just by kicking.",
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
            dexEntry: "If Poliwag and Poliwhirl hear its echoing cry, they respond by gathering from far and wide.",
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
            dexEntry: "An underpowered, pathetic Pokémon. It may jump high on rare occasions, but never more than seven feet.",
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
            dexEntry: "They say that during past wars, Gyarados would appear and leave blazing ruins in its wake.",
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
            dexEntry: "Its dorsal, pectoral and tail fins wave elegantly in water. That is why it is known as the water dancer.",
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
            dexEntry: "During spawning season, Seaking gather from all over, coloring the rivers a brilliant red.",
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
            dexEntry: "It lazes vacantly near water. If something bites its tail, it won't even notice for a whole day.",
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
            dexEntry: "If the tail-biting Shellder is thrown off in a harsh battle, it reverts to being an ordinary Slowpoke.",
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
            dexEntry: "It has incredible intellect and intuition. Whatever the situation, it remains calm and collected.",
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
            dexEntry: "Awakened by moonlight, it roams actively at night. In the day it stays quietly underground.",
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
            dexEntry: "What appears to be drool is actually sweet honey. It is very sticky and clings stubbornly if touched.",
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
            dexEntry: "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
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
            dexEntry: "Bellossom gather at times and appear to dance. They say that the dance is a ritual to summon the sun.",
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
            dexEntry: "If you think that you had a good dream, but you can't remember it, a Drowzee has probably eaten it.",
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
            dexEntry: "When it is very hungry, it puts humans it meets to sleep, then it feasts on their dreams.",
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
            dexEntry: "It senses impending attacks and teleports away to safety before the actual attacks can strike.",
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
            dexEntry: "It possesses strong spiritual power. The more danger it faces, the stronger its psychic power.",
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
            dexEntry: "Closing both its eyes heightens all its other senses. This enables it to use its abilities to their extremes.",
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
            dexEntry: "It can transform into anything. When it sleeps, it changes into a stone to avoid being attacked.",
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
            dexEntry: "It likes to make its shell thicker by adding layers of tree bark. The additional weight doesn't bother it.",
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
            dexEntry: "Its entire body is shielded by a steel-hard shell. What lurks inside the armor is a total mystery.",
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
            dexEntry: "The poison hidden in its small horn is extremely potent. Even a tiny scratch can have fatal results.",
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
            dexEntry: "When feeding its young, it first chews and tenderizes the food, then spits it out for the offspring.",
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
            dexEntry: "Its body is covered with needle-like scales. It never shows signs of shrinking from any attack.",
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
            dexEntry: "It is small, but its horn is filled with poison. It charges then stabs with the horn to inject poison.",
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
            dexEntry: "It raises its big ears to check its surroundings. If it senses anything, it attacks immediately.",
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
            dexEntry: "It swings its big tail around during battle. If its foe flinches, it will charge with its sturdy body.",
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
            dexEntry: "If it flaps its wings really fast, it can generate shock waves that will shatter windows in the area.",
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
            dexEntry: "It may drop out of the sky suddenly. If attacked by a Spearow, it will violently shake its leaves.",
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
            dexEntry: "It converts sunlight into energy. In the darkness after sunset, it closes its petals and becomes still.",
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
            dexEntry: "The shell is very durable. Even if it cracks, it can survive without spilling the contents.",
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
            dexEntry: "Its three heads think independently. However, they are friendly and never appear to squabble.",
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
            dexEntry: "Although it always pretends to be a tree, its composition appears to be closer to a rock than a plant.",
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
            dexEntry: "It hates light and shock. If attacked, it inflates its body to pump up its counterstrike.",
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
            dexEntry: "Its eyes also function as radar units. It catches and eats small bugs that hide in darkness.",
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
            dexEntry: "When it attacks, it flaps its large wings violently to scatter its poisonous powder all around.",
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
            dexEntry: "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
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
            dexEntry: "It swings its eye-patterned pincers up to scare its foes. This makes it look like it has three heads.",
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
            dexEntry: "With its horns, it digs burrows to sleep in at night. In the morning, damp soil clings to its body.",
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
            dexEntry: "This powerful Pokémon thrusts its prized horn under its enemies' bellies then lifts and throws them.",
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
            dexEntry: "Its thin, flimsy body is filled with gases that cause constant sniffles, coughs and teary eyes.",
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
            dexEntry: "If one of the twin Koffing inflates, the other one deflates. It constantly mixes its poisonous gases.",
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
            dexEntry: "As it moves, it loses bits of its body from which new Grimer emerge. This worsens the stench around it.",
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
            dexEntry: "They love to gather in smelly areas where sludge accumulates, making the stench around them worse.",
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
            dexEntry: "It is attracted by electromagnetic waves. It may approach trainers if they are using their Pokégear.",
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
            dexEntry: "Three Magnemite are linked by a strong magnetic force. Earaches will occur if you get too close.",
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
            dexEntry: "It rolls to move. If the ground is uneven, a sudden jolt from hitting a bump can cause it to explode.",
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
            dexEntry: "It is dangerous. If it has too much electricity and has nothing to do, it amuses itself by exploding.",
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
            dexEntry: "Its tail is so powerful that it can use it to grab a tree branch and hold itself up in the air.",
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
            dexEntry: "Although it looks frightening, it is actually kind and affectionate. It is very popular among women.",
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
            dexEntry: "It is actually timid and easily spooked. If attacked, it flails about to fend off its attacker.",
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
            dexEntry: "As it develops, its single white tail gains color and splits into six. It is quite warm and cuddly.",
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
            dexEntry: "Some legends claim that each of its nine tails has its own unique type of special mystic power.",
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
            dexEntry: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
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
            dexEntry: "This legendary Chinese Pokémon is considered magnificent. Many people are enchanted by its grand mane.",
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
            dexEntry: "The curved antlers subtly change the flow of air to create a strange space where reality is distorted.",
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
            dexEntry: "The tip of its tail, which contains oil that is lighter than water, lets it swim without drowning.",
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
            dexEntry: "By keeping still and listening intently, it can tell what is in even wild, fast-moving rivers.",
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
            dexEntry: "Its skin is very thin. If it is exposed to light, its blood heats up, causing it to grow weak.",
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
            dexEntry: "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.",
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
            dexEntry: "It is extremely ill-tempered. Groups of them will attack any handy target for no reason.",
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
            dexEntry: "If approached while asleep, it may awaken and angrily give chase in a groggy state of semi-sleep.",
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
            dexEntry: "It is fascinated by round objects. It can't stop playing with them until it tires and falls asleep.",
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
            dexEntry: "Many adore it for its sophisticated air. However, it will lash out and scratch for little reason.",
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
            dexEntry: "It has mystical powers but doesn't recall that it has used them. That is why it always looks puzzled.",
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
            dexEntry: "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.",
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
            dexEntry: "Always brimming with power, it passes time by lifting boulders. Doing so makes it even stronger.",
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
            dexEntry: "It always goes at its full power, but this very tough and durable Pokémon never gets tired.",
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
            dexEntry: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
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
            dexEntry: "It is always bursting with energy. To make itself stronger, it keeps on fighting even if it loses.",
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
            dexEntry: "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
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
            dexEntry: "Its punches slice through the air. However, it seems to need a short break after fighting for three minutes.",
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
            dexEntry: "If you become enchanted by its smooth, elegant, dance-like kicks, you may get drilled hard.",
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
            dexEntry: "Its tail has a small brain of its own. Beware! If you get close, it may react to your scent and bite.",
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
            dexEntry: "They fight each other by locking horns. The herd's protector takes pride in its battle-scarred horns.",
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
            dexEntry: "Its milk is packed with nutrition, making it the ultimate beverage for the sick or weary.",
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
            dexEntry: "Each and every time it inhales and exhales, hot embers dribble out of its mouth and nostrils.",
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
            dexEntry: "It dislikes cold places, so it blows scorching flames to make the environment suitable for itself.",
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
            dexEntry: "Its lips are the most sensitive parts on its body. It always uses its lips first to examine things.",
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
            dexEntry: "It rocks its body rhythmically. It appears to alter the rhythm depending on how it is feeling.",
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
            dexEntry: "It rotates its arms to generate electricity, but it tires easily, so it charges up only a little bit.",
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
            dexEntry: "Electricity runs across the surface of its body. In darkness, its entire body glows a whitish-blue.",
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
            dexEntry: "A skilled mime from birth, it gains the ability to create invisible objects as it matures.",
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
            dexEntry: "A special fluid oozes from the tip of its tail. It paints the fluid everywhere to mark its territory.",
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
            dexEntry: "If anyone tries to disturb where the essential plant sticks grow, it uses its own stick to thwart them.",
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
            dexEntry: "Because its wings aren't yet fully grown, it has to hop to get around. It is always staring at something.",
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
            dexEntry: "They say that it stays still and quiet because it is seeing both the past and future at the same time.",
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
            dexEntry: "To fire its poison spikes, it must inflate its body by drinking over 2.6 gallons of water all at once.",
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
            dexEntry: "When the tide goes out, dehydrated Tentacool remains can be found washed up on the shore.",
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
            dexEntry: "Its 80 tentacles absorb water and stretch almost endlessly to constrict its prey and enemies.",
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
            dexEntry: "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
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
            dexEntry: "It can hardly lift its massive, overgrown pincer. The pincer's size makes it difficult to aim properly.",
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
            dexEntry: "The Berries it stores in its vase-like shell decompose and become a gooey liquid.",
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
            dexEntry: "At night, the center of its body slowly flickers with the same rhythm as a human heartbeat.",
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
            dexEntry: "The center section of its body is called the core. It glows in a different color each time it is seen.",
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
            dexEntry: "It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.",
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
            dexEntry: "Once it slams its shell shut, it is impossible to open, even by those with superior strength.",
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
            dexEntry: "It continuously sheds and grows. The tip of its head is prized as a treasure for its beauty.",
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
            dexEntry: "It has superb accuracy. The water it shoots out can strike even moving prey from more than 300 feet.",
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
            dexEntry: "It traps enemies with its suction-cupped tentacles then smashes them with its rock-hard head.",
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
            dexEntry: "It shoots positive and negative electricity between the tips of its two antennae and zaps its enemies.",
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
            dexEntry: "The light it emits is so bright that it can illuminate the sea's surface from a depth of over three miles.",
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
            dexEntry: "Although it can't walk well on land, it is a graceful swimmer. It especially loves being in frigid seas.",
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
            dexEntry: "Its streamlined body has little drag in water. The colder the temperature, the friskier it gets.",
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
            dexEntry: "Its tongue has well-developed nerves that run to the very tip, so it can be deftly manipulated.",
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
            dexEntry: "The vines that cloak its entire body are always jiggling. They effectively unnerve its foes.",
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
            dexEntry: "It has the ability to alter the composition of its body to suit its surrounding environment.",
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
            dexEntry: "When Vaporeon's fins begin to vibrate, it is a sign that rain will come within a few hours.",
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
            dexEntry: "It concentrates the weak electric charges emitted by its cells and launches wicked lightning bolts.",
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
            dexEntry: "It stores some of the air it inhales in its internal flame pouch, which heats it to over 3,000 degrees.",
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
            dexEntry: "It uses the fine hair that covers its body to sense air currents and predict its enemy's actions.",
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
            dexEntry: "When agitated, this Pokémon protects itself by spraying poisonous sweat from its pores.",
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
            dexEntry: "If attacked by a larger enemy, it quickly swims to safety by adeptly controlling its dorsal fin.",
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
            dexEntry: "An examination of its cells revealed the presence of a gene not found in Horsea. It became a hot topic.",
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
            dexEntry: "It is said that it usually hides in underwater caves. It can create whirlpools by yawning.",
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
            dexEntry: "It flies straight at its target's face then clamps down on the startled victim to inject poison.",
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
            dexEntry: "It carries food all day long. There are tales about lost people who were saved by the food it had.",
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
            dexEntry: "It rubs its snout on the ground to find and dig up food. It sometimes discovers hot springs.",
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
            dexEntry: "Because the long hair all over its body obscures its sight, it just keeps charging repeatedly.",
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
            dexEntry: "If it finds honey, its crescent mark glows. It always licks its paws because they are soaked with honey.",
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
            dexEntry: "Although it is a good climber, it prefers to snap trees with its forelegs and eat fallen Berries.",
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
            dexEntry: "It swings its long snout around playfully, but because it is so strong, that can be dangerous.",
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
            dexEntry: "It has sharp, hard tusks and a rugged hide. Its Tackle is strong enough to knock down a house.",
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
            dexEntry: "As it majestically swims, it doesn't care if Remoraid attach to it for scavenging its leftovers.",
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
            dexEntry: "Its sturdy wings look heavy, but they are actually hollow and light, allowing it to fly freely in the sky.",
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
            dexEntry: "By alternately raising and lowering its two heads, it balances itself to be more stable while running.",
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
            dexEntry: "It collects data and plans three times as wisely, but it may think too much and become immobilized.",
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
            dexEntry: "It is a weak runner immediately after birth. It gradually becomes faster by chasing after its parents.",
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
            dexEntry: "At full gallop, its four hooves barely touch the ground because it moves so incredibly fast.",
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
            dexEntry: "If it is sad or lonely, the skull it wears shakes, and emits a plaintive and mournful sound.",
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
            dexEntry: "It has been seen pounding boulders with the bone it carries in order to tap out messages to others.",
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
            dexEntry: "If it is safe, the young gets out of the belly pouch to play. The adult keeps a close eye on the youngster.",
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
            dexEntry: "It is inept at turning because of its four short legs. It can only charge and run in one direction.",
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
            dexEntry: "Its rugged hide protects it from even the heat of lava. However, the hide also makes it insensitive.",
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
            dexEntry: "Feared and loathed by many, it is believed to bring misfortune to all those who see it at night.",
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
            dexEntry: "It uses different kinds of cries for communicating with others of its kind and for pursuing its prey.",
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
            dexEntry: "If you are burned by the flames it shoots from its mouth, the pain will never go away.",
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
            dexEntry: "It never sleeps. It has to keep moving because if it stopped, its magma body would cool and harden.",
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
            dexEntry: "The shell on its back is just skin that has cooled and hardened. It breaks easily with a slight touch.",
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
            dexEntry: "Its paws conceal sharp claws. If attacked, it suddenly extends the claws and startles its enemy.",
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
            dexEntry: "It likes playing mischievous tricks such as screaming and wailing to startle people at night.",
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
            dexEntry: "It is a manmade Pokémon. Since it doesn't breathe, people are eager to try it in any environment.",
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
            dexEntry: "This upgraded version of Porygon is designed for space exploration. It can't fly, though.",
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
            dexEntry: "It walks carefully to prevent its egg from breaking. However, it is extremely fast at running away.",
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
            dexEntry: "Anyone who takes even one bite of Blissey's egg becomes unfailingly caring and pleasant to everyone.",
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
            dexEntry: "They have gentle hearts. Because they rarely fight, many have been caught. Their number has dwindled.",
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
            dexEntry: "Revived from an ancient fossil, this Pokémon uses air stored in its shell to sink and rise in water.",
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
            dexEntry: "Apparently, it cracked Shellder's shell with its sharp fangs and sucked out the insides.",
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
            dexEntry: "On rare occasions, some have been found as fossils which they became while hiding on the ocean floor.",
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
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.5,
            dexEntry: "In the water, it tucks in its limbs to become more compact, then it wiggles its shell to swim fast.",
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
            dexEntry: "A vicious Pokémon from the distant past, it appears to have flown by spreading its wings and gliding.",
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
            dexEntry: "What sounds like its cry may actually be its snores or the rumblings of its hungry belly.",
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
            dexEntry: "The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.",
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
            dexEntry: "Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.",
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
            dexEntry: "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.",
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
            dexEntry: "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.",
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
            dexEntry: "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.",
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
            dexEntry: "If Charizard becomes furious, the flame at the tip of its tail flares up into a whitish-blue color.",
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
            dexEntry: "The shell is soft when it is born. It soon becomes so resilient, prodding fingers will bounce off it.",
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
            dexEntry: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
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
            dexEntry: "It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.",
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
            dexEntry: "The magnificent, seemingly translucent wings of this legendary bird Pokémon are said to be made of ice.",
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
            dexEntry: "This legendary bird Pokémon causes savage thunderstorms by flapping its glittering wings.",
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
            dexEntry: "This legendary Pokémon scatters embers with every flap of its wings. It is a thrilling sight to behold.",
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
            dexEntry: "The rain clouds it carries let it fire thunderbolts at will. They say that it descended with lightning.",
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
            dexEntry: "Volcanoes erupt when it barks. Unable to restrain its extreme power, it races headlong around the land.",
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
            dexEntry: "Said to be the reincarnation of north winds, it can instantly purify filthy, murky water.",
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
            dexEntry: "It is born large to start with. It repeatedly sheds its skin as it steadily grows longer.",
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
            dexEntry: "They say that if it emits an aura from its whole body, the weather will begin to change instantly.",
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
            dexEntry: "It is said that this Pokémon constantly flies over the immense seas and rescues drowning people.",
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
            dexEntry: "It feeds on soil. After it has eaten a large mountain, it will fall asleep so it can grow.",
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
            dexEntry: "Its shell is as hard as sheet rock, and it is also very strong. Its Thrashing can topple a mountain.",
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
            dexEntry: "Its body can't be harmed by any sort of attack, so it is very eager to make challenges against enemies.",
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
            dexEntry: "It is said that it quietly spends its time deep at the bottom of the sea because its powers are too strong.",
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
            dexEntry: "Legends claim this Pokémon flies the world's skies continuously on its magnificent seven-colored wings.",
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
            dexEntry: "Because its battle abilities were raised to the ultimate level, it thinks only of defeating its foes.",
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
            dexEntry: "Apparently, it appears only to those people who are pure of heart and have a strong desire to see it.",
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
            dexEntry: "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared.",
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