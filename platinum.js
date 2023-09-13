//Platinum Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Turtwig",
            imageUrl: "images/387Turtwig.png",
            number: "001",
            type: ["Grass"],
            category: "Tiny Leaf",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "22.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 10.2,
            dexEntry: "The shell on its back is made of soil. On a very healthy Turtwig, the shell should feel moist.",
            cryUrl: "cries/387.mp3",
            japaneseName: "Naetle"
        },
        {
            name: "Grotle",
            imageUrl: "images/388Grotle.png",
            number: "002",
            type: ["Grass"],
            category: "Grove",
            region: "Sinnoh",
            generation: "04",
            height: "3'07\"",
            weight: "213.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 97.0,
            dexEntry: "It knows where pure water wells up. It carries fellow Pokémon there on its back.",
            cryUrl: "cries/388.mp3",
            japaneseName: "Hayashigame"
        },
        {
            name: "Torterra",
            imageUrl: "images/389Torterra.png",
            number: "003",
            type: ["Grass", "Ground"],
            category: "Continent",
            region: "Sinnoh",
            generation: "04",
            height: "7'03\"",
            weight: "683.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 310.0,
            dexEntry: "Some Pokémon are born on a Torterra's back and spend their entire life there.",
            cryUrl: "cries/389.mp3",
            japaneseName: "Dodaitose"
        },
        {
            name: "Chimchar",
            imageUrl: "images/390Chimchar.png",
            number: "004",
            type: ["Fire"],
            category: "Chimp",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "13.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 6.2,
            dexEntry: "It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires.",
            cryUrl: "cries/390.mp3",
            japaneseName: "Hikozaru"
        },
        {
            name: "Monferno",
            imageUrl: "images/391Monferno.png",
            number: "005",
            type: ["Fire", "Fighting"],
            category: "Playful",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "48.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 22.0,
            dexEntry: "It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.",
            cryUrl: "cries/391.mp3",
            japaneseName: "Moukazaru"
        },
        {
            name: "Infernape",
            imageUrl: "images/392Infernape.png",
            number: "006",
            type: ["Fire", "Fighting"],
            category: "Flame",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 55.0,
            dexEntry: "It uses unique fighting moves with fire on its hands and feet. It will take on any opponent.",
            cryUrl: "cries/392.mp3",
            japaneseName: "Goukazaru"
        },
        {
            name: "Piplup",
            imageUrl: "images/393Piplup.png",
            number: "007",
            type: ["Water"],
            category: "Penguin",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "11.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.2,
            dexEntry: "A poor walker, it often falls down. However, its strong pride makes it puff up its chest without a care.",
            cryUrl: "cries/393.mp3",
            japaneseName: "Pochama"
        },
        {
            name: "Prinplup",
            imageUrl: "images/394Prinplup.png",
            number: "008",
            type: ["Water"],
            category: "Penguin",
            region: "Sinnoh",
            generation: "04",
            height: "2'07\"",
            weight: "50.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 23.0,
            dexEntry: "Because every Prinplup considers itself to be the most important, they can never form a group.",
            cryUrl: "cries/394.mp3",
            japaneseName: "Pottaishi"
        },
        {
            name: "Empoleon",
            imageUrl: "images/395Empoleon.png",
            number: "009",
            type: ["Water", "Steel"],
            category: "Emperor",
            region: "Sinnoh",
            generation: "04",
            height: "5'07\"",
            weight: "186.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 84.5,
            dexEntry: "If anyone were to hurt its pride, it would slash them with wings that can cleave through an ice floe.",
            cryUrl: "cries/395.mp3",
            japaneseName: "Emperte"
        },
        {
            name: "Starly",
            imageUrl: "images/396Starly.png",
            number: "010",
            type: ["Normal", "Flying"],
            category: "Starling",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "Because they are weak individually, they form groups. However, they bicker if the group grows too big.",
            cryUrl: "cries/396.mp3",
            japaneseName: "Mukkuru"
        },
        {
            name: "Staravia",
            imageUrl: "images/397Staravia.png",
            number: "011",
            type: ["Normal", "Flying"],
            category: "Starling",
            region: "Sinnoh",
            generation: "04",
            height: "2'00\"",
            weight: "34.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.5,
            dexEntry: "Recognizing their own weakness, they always live in a group. When alone, a Staravia cries noisily.",
            cryUrl: "cries/397.mp3",
            japaneseName: "Mukubird"
        },
        {
            name: "Staraptor",
            imageUrl: "images/398Staraptor.png",
            number: "012",
            type: ["Normal", "Flying"],
            category: "Predator",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "54.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 24.9,
            dexEntry: "It never stops attacking even if it is injured. It fusses over the shape of its comb.",
            cryUrl: "cries/398.mp3",
            japaneseName: "Mukuhawk"
        },
        {
            name: "Bidoof",
            imageUrl: "images/399Bidoof.png",
            number: "013",
            type: ["Normal"],
            category: "Plump Mouse",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 20.0,
            dexEntry: "A comparison revealed that Bidoof's front teeth grow at the same rate as Rattata's.",
            cryUrl: "cries/399.mp3",
            japaneseName: "Bippa"
        },
        {
            name: "Bibarel",
            imageUrl: "images/400Bibarel.png",
            number: "014",
            type: ["Normal", "Water"],
            category: "Beaver",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "69.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 31.5,
            dexEntry: "A river dammed by Bibarel will never overflow its banks, which is appreciated by people nearby.",
            cryUrl: "cries/400.mp3",
            japaneseName: "Beadaru"
        },
        {
            name: "Kricketot",
            imageUrl: "images/401Kricketot.png",
            number: "015",
            type: ["Bug"],
            category: "Cricket",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "4.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.2,
            dexEntry: "Its legs are short. Whenever it stumbles, its stiff antennae clack with a xylophone-like sound.",
            cryUrl: "cries/401.mp3",
            japaneseName: "Korobohshi"
        },
        {
            name: "Kricketune",
            imageUrl: "images/402Kricketune.png",
            number: "016",
            type: ["Bug"],
            category: "Cricket",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "56.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 25.5,
            dexEntry: "There is a village that hosts a contest based on the amazingly variable cries of this Pokémon.",
            cryUrl: "cries/402.mp3",
            japaneseName: "Korotock"
        },
        {
            name: "Shinx",
            imageUrl: "images/403Shinx.png",
            number: "017",
            type: ["Electric"],
            category: "Flash",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.5,
            dexEntry: "The extension and contraction of its muscles generates electricity. It glows when in trouble.",
            cryUrl: "cries/403.mp3",
            japaneseName: "Kolink"
        },
        {
            name: "Luxio",
            imageUrl: "images/404Luxio.png",
            number: "018",
            type: ["Electric"],
            category: "Spark",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "67.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 30.5,
            dexEntry: "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.",
            cryUrl: "cries/404.mp3",
            japaneseName: "Luxio"
        },
        {
            name: "Luxray",
            imageUrl: "images/405Luxray.png",
            number: "019",
            type: ["Electric"],
            category: "Gleam Eyes",
            region: "Sinnoh",
            generation: "04",
            height: "4'07\"",
            weight: "92.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 42.0,
            dexEntry: "It can see clearly through walls to track down its prey and seek its lost young.",
            cryUrl: "cries/405.mp3",
            japaneseName: "Rentorar"
        },
        {
            name: "Abra",
            imageUrl: "images/063Abra.png",
            number: "020",
            type: ["Psychic"],
            category: "Psi",
            region: "Kanto",
            generation: "01",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "Using its psychic power is such a strain on its brain that it needs to sleep for 18 hours a day.",
            cryUrl: "cries/063.mp3",
            japaneseName: "Casey"
        },
        {
            name: "Kadabra",
            imageUrl: "images/064Kadabra.png",
            number: "021",
            type: ["Psychic"],
            category: "Psi",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "124.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 56.5,
            dexEntry: "It stares at its silver spoon to focus its mind. It emits more alpha waves while doing so.",
            cryUrl: "cries/064.mp3",
            japaneseName: "Yungerer"
        },
        {
            name: "Alakazam",
            imageUrl: "images/065Alakazam.png",
            number: "022",
            type: ["Psychic"],
            category: "Psi",
            region: "Kanto",
            generation: "01",
            height: "4'11\"",
            weight: "105.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 48.0,
            dexEntry: "The spoons clutched in its hands are said to have been created by its psychic powers.",
            cryUrl: "cries/065.mp3",
            japaneseName: "Foodin"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "023",
            type: ["Water"],
            category: "Fish",
            region: "Kanto",
            generation: "01",
            height: "2'11\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 10.0,
            dexEntry: "A Magikarp living for many years can leap a mountain using Splash. The move remains useless, though.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "024",
            type: ["Water", "Flying"],
            category: "Atrocious",
            region: "Kanto",
            generation: "01",
            height: "21'04\"",
            weight: "518.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 6.5,
            metricWeight: 235.0,
            dexEntry: "Once it begins to rampage, a Gyarados will burn everything down, even in a harsh storm.",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Budew",
            imageUrl: "images/406Budew.png",
            number: "025",
            type: ["Grass", "Poison"],
            category: "Bud",
            region: "Sinnoh",
            generation: "04",
            height: "0'08\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 1.2,
            dexEntry: "Sensitive to changing temperature, the bud is said to bloom when it feels the sun's warm touch.",
            cryUrl: "cries/406.mp3",
            japaneseName: "Subomie"
        },
        {
            name: "Roselia",
            imageUrl: "images/315Roselia.png",
            number: "026",
            type: ["Grass", "Poison"],
            category: "Thorn",
            region: "Hoenn",
            generation: "03",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "The more healthy the Roselia, the more pleasant its flowers' aroma. Its scent deeply relaxes people.",
            cryUrl: "cries/315.mp3",
            japaneseName: "Roselia"
        },
        {
            name: "Roserade",
            imageUrl: "images/407Roserade.png",
            number: "027",
            type: ["Grass", "Poison"],
            category: "Bouquet",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "32.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 14.5,
            dexEntry: "Each of its hands contains different toxins, but both hands can jab with near-fatal power.",
            cryUrl: "cries/407.mp3",
            japaneseName: "Roserade"
        },
        {
            name: "Zubat",
            imageUrl: "images/041Zubat.png",
            number: "028",
            type: ["Poison", "Flying"],
            category: "Bat",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 7.5,
            dexEntry: "It checks its surroundings and location using reflections of the ultrasonic waves from its mouth.",
            cryUrl: "cries/041.mp3",
            japaneseName: "Zubat"
        },
        {
            name: "Golbat",
            imageUrl: "images/042Golbat.png",
            number: "029",
            type: ["Poison", "Flying"],
            category: "Bat",
            region: "Kanto",
            generation: "01",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "Its sharp fangs puncture the toughest of hides and have small holes for greedily sucking blood.",
            cryUrl: "cries/042.mp3",
            japaneseName: "Golbat"
        },
        {
            name: "Crobat",
            imageUrl: "images/169Crobat.png",
            number: "030",
            type: ["Poison", "Flying"],
            category: "Bat",
            region: "Johto",
            generation: "02",
            height: "5'11\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 75.0,
            dexEntry: "The transformation of its legs into wings made it better at flying, but more clumsy at walking.",
            cryUrl: "cries/169.mp3",
            japaneseName: "Crobat"
        },
        {
            name: "Geodude",
            imageUrl: "images/074Geodude.png",
            number: "031",
            type: ["Rock", "Ground"],
            category: "Rock",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 20.0,
            dexEntry: "At rest, it looks just like a rock. Carelessly stepping on it will make it swing its fists angrily.",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "images/075Graveler.png",
            number: "032",
            type: ["Rock", "Ground"],
            category: "Rock",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "231.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 105.0,
            dexEntry: "It rolls on mountain paths to move. Once it builds momentum, no Pokémon can stop it without difficulty.",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "images/076Golem.png",
            number: "033",
            type: ["Rock", "Ground"],
            category: "Megaton",
            region: "Kanto",
            generation: "01",
            height: "4'07\"",
            weight: "661.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 300.0,
            dexEntry: "Even dynamite can't harm its hard, boulderlike body. It sheds its hide just once a year.",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Onix",
            imageUrl: "images/095Onix.png",
            number: "034",
            type: ["Rock", "Ground"],
            category: "Rock Snake",
            region: "Kanto",
            generation: "01",
            height: "28'10\"",
            weight: "463.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 8.8,
            metricWeight: 210.0,
            dexEntry: "It burrows through the ground at a speed of 50 mph while feeding on large boulders.",
            cryUrl: "cries/095.mp3",
            japaneseName: "Iwark"
        },
        {
            name: "Steelix",
            imageUrl: "images/208Steelix.png",
            number: "035",
            type: ["Steel", "Ground"],
            category: "Iron Snake",
            region: "Johto",
            generation: "02",
            height: "30'02\"",
            weight: "881.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 9.2,
            metricWeight: 400.0,
            dexEntry: "It is thought its body transformed as a result of iron accumulating internally from swallowing soil.",
            cryUrl: "cries/208.mp3",
            japaneseName: "Haganeil"
        },
        {
            name: "Cranidos",
            imageUrl: "images/408Cranidos.png",
            number: "036",
            type: ["Rock"],
            category: "Head Butt",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "69.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 31.5,
            dexEntry: "A lifelong jungle dweller from 100 million years ago, it would snap obstructing trees with headbutts.",
            cryUrl: "cries/408.mp3",
            japaneseName: "Zugaidos"
        },
        {
            name: "Rampardos",
            imageUrl: "images/409Rampardos.png",
            number: "037",
            type: ["Rock"],
            category: "Head Butt",
            region: "Sinnoh",
            generation: "04",
            height: "5'03\"",
            weight: "226.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 102.5,
            dexEntry: "If two were to smash their heads together, their foot-thick skulls would keep them from fainting.",
            cryUrl: "cries/409.mp3",
            japaneseName: "Rampald"
        },
        {
            name: "Shieldon",
            imageUrl: "images/410Shieldon.png",
            number: "038",
            type: ["Rock", "Steel"],
            category: "Shield",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "125.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 57.0,
            dexEntry: "It is outstandingly armored. As a result, it can eat grass and berries without having to fight.",
            cryUrl: "cries/410.mp3",
            japaneseName: "Tatetops"
        },
        {
            name: "Bastiodon",
            imageUrl: "images/411Bastiodon.png",
            number: "039",
            type: ["Rock", "Steel"],
            category: "Shield",
            region: "Sinnoh",
            generation: "04",
            height: "4'03\"",
            weight: "329.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 149.5,
            dexEntry: "When they lined up side by side, no foe could break through. They shielded their young in that way.",
            cryUrl: "cries/411.mp3",
            japaneseName: "Torideps"
        },
        {
            name: "Machop",
            imageUrl: "images/066Machop.png",
            number: "040",
            type: ["Fighting"],
            category: "Superpower",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.5,
            dexEntry: "Though small in stature, it is powerful enough to easily heft and throw a number of Geodude at once.",
            cryUrl: "cries/066.mp3",
            japaneseName: "Wanriky"
        },
        {
            name: "Machoke",
            imageUrl: "images/067Machoke.png",
            number: "041",
            type: ["Fighting"],
            category: "Superpower",
            region: "Kanto",
            generation: "01",
            height: "4'11\"",
            weight: "155.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 70.5,
            dexEntry: "It happily carries heavy cargo to toughen up. It willingly does hard work for people.",
            cryUrl: "cries/067.mp3",
            japaneseName: "Goriky"
        },
        {
            name: "Machamp",
            imageUrl: "images/068Machamp.png",
            number: "042",
            type: ["Fighting"],
            category: "Superpower",
            region: "Kanto",
            generation: "01",
            height: "5'03\"",
            weight: "286.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 130.0,
            dexEntry: "Its four muscled arms slam foes with powerful punches and chops at blinding speed.",
            cryUrl: "cries/068.mp3",
            japaneseName: "Kairiky"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "043",
            type: ["Water"],
            category: "Duck",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "43.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.6,
            dexEntry: "Overwhelmed by enigmatic abilities, it suffers a constant headache. It sometimes uses mysterious powers.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "044",
            type: ["Water"],
            category: "Duck",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "168.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 76.6,
            dexEntry: "It is seen swimming dynamically and elegantly using its well-developed limbs and flippers.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Burmy",
            imageUrl: "images/412Burmy.png",
            number: "045",
            type: ["Bug"],
            category: "Bagworm",
            region: "Sinnoh",
            generation: "04",
            height: "0'08\"",
            weight: "7.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 3.4,
            dexEntry: "Even if it is born where there are no cocooning materials, it somehow always ends up with a cloak.",
            cryUrl: "cries/412.mp3",
            japaneseName: "Minomucchi"
        },
        {
            name: "Wormadam",
            imageUrl: "images/413Wormadam.png",
            number: "046",
            type: ["Bug", "Grass"],
            category: "Bagworm",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 6.5,
            dexEntry: "When evolving, its body takes in surrounding materials. As a result, there are many body variations.",
            cryUrl: "cries/413.mp3",
            japaneseName: "Minomadam"
        },
        {
            name: "Mothim",
            imageUrl: "images/414Mothim.png",
            number: "047",
            type: ["Bug", "Flying"],
            category: "Moth",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "51.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 23.3,
            dexEntry: "While it loves floral honey, it won't gather any itself. Instead, it plots to steal some from Combee.",
            cryUrl: "cries/414.mp3",
            japaneseName: "Gamale"
        },
        {
            name: "Wurmple",
            imageUrl: "images/265Wurmple.png",
            number: "048",
            type: ["Bug"],
            category: "Worm",
            region: "Hoenn",
            generation: "03",
            height: "1'00\"",
            weight: "7.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.6,
            dexEntry: "Often targeted by bird Pokémon, it desperately resists by releasing poison from its tail spikes.",
            cryUrl: "cries/265.mp3",
            japaneseName: "Kemusso"
        },
        {
            name: "Silcoon",
            imageUrl: "images/266Silcoon.png",
            number: "049",
            type: ["Bug"],
            category: "Cocoon",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.0,
            dexEntry: "It wraps silk around the branches of a tree. It drinks rainwater on its silk while awaiting evolution.",
            cryUrl: "cries/266.mp3",
            japaneseName: "Karasalis"
        },
        {
            name: "Beautifly",
            imageUrl: "images/267Beautifly.png",
            number: "050",
            type: ["Bug", "Flying"],
            category: "Butterfly",
            region: "Hoenn",
            generation: "03",
            height: "3'03\"",
            weight: "62.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.4,
            dexEntry: "Despite its looks, it is aggressive. It jabs with its long, thin mouth if disturbed while collecting pollen.",
            cryUrl: "cries/267.mp3",
            japaneseName: "Agehunt"
        },
        {
            name: "Cascoon",
            imageUrl: "images/268Cascoon.png",
            number: "051",
            type: ["Bug"],
            category: "Cocoon",
            region: "Hoenn",
            generation: "03",
            height: "2'04\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 11.5,
            dexEntry: "It never forgets any attack it endured while in the cocoon. After evolution, it seeks payback.",
            cryUrl: "cries/268.mp3",
            japaneseName: "Mayuld"
        },
        {
            name: "Dustox",
            imageUrl: "images/269Dustox.png",
            number: "052",
            type: ["Bug", "Poison"],
            category: "Poison Moth",
            region: "Hoenn",
            generation: "03",
            height: "3'11\"",
            weight: "69.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 31.6,
            dexEntry: "Toxic powder is scattered with each flap. At night, it is known to strip leaves off trees lining boulevards.",
            cryUrl: "cries/269.mp3",
            japaneseName: "Dokucale"
        },
        {
            name: "Combee",
            imageUrl: "images/415Combee.png",
            number: "053",
            type: ["Bug", "Flying"],
            category: "Tiny Bee",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 5.5,
            dexEntry: "The trio is together from birth. It constantly gathers honey from flowers to please Vespiquen.",
            cryUrl: "cries/415.mp3",
            japaneseName: "Mitsuhoney"
        },
        {
            name: "Vespiquen",
            imageUrl: "images/416Vespiquen.png",
            number: "054",
            type: ["Bug", "Flying"],
            category: "Beehive",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "84.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.5,
            dexEntry: "It releases various pheromones to make the grubs in its body do its bidding while fighting foes.",
            cryUrl: "cries/416.mp3",
            japaneseName: "Beequen"
        },
        {
            name: "Pachirisu",
            imageUrl: "images/417Pachirisu.png",
            number: "055",
            type: ["Electric"],
            category: "EleSquirrel",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "8.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 3.9,
            dexEntry: "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.",
            cryUrl: "cries/417.mp3",
            japaneseName: "Pachirisu"
        },
        {
            name: "Buizel",
            imageUrl: "images/418Buizel.png",
            number: "056",
            type: ["Water"],
            category: "Sea Weasel",
            region: "Sinnoh",
            generation: "04",
            height: "2'04\"",
            weight: "65.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 29.5,
            dexEntry: "It spins its two tails like a screw to propel itself through water. The tails also slice clinging seaweed.",
            cryUrl: "cries/418.mp3",
            japaneseName: "Buoysel"
        },
        {
            name: "Floatzel",
            imageUrl: "images/419Floatzel.png",
            number: "057",
            type: ["Water"],
            category: "Sea Weasel",
            region: "Sinnoh",
            generation: "04",
            height: "3'07\"",
            weight: "73.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 33.5,
            dexEntry: "It is a common sight around fishing ports. It is known to rescue people and carry off prey.",
            cryUrl: "cries/419.mp3",
            japaneseName: "Floazel"
        },
        {
            name: "Cherubi",
            imageUrl: "images/420Cherubi.png",
            number: "058",
            type: ["Grass"],
            category: "Cherry",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "7.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 3.3,
            dexEntry: "The small ball is not only full of nutrients, it is also tasty. Starly try to peck it off.",
            cryUrl: "cries/420.mp3",
            japaneseName: "Cherinbo"
        },
        {
            name: "Cherrim",
            imageUrl: "images/421Cherrim.png",
            number: "059",
            type: ["Grass"],
            category: "Blossom",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "20.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.3,
            dexEntry: "If it senses strong sunlight, it opens its folded petals to absorb the sun's rays with its whole body.",
            cryUrl: "cries/421.mp3",
            japaneseName: "Cherrim"
        },
        {
            name: "Shellos",
            imageUrl: "forms/422Shellos-West.png",
            number: "060",
            type: ["Water"],
            category: "Sea Slug",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "13.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.3,
            dexEntry: "Beware of pushing strongly on its squishy body, as it makes a mysterious purple fluid ooze out.",
            cryUrl: "cries/422.mp3",
            japaneseName: "Karanakushi"
        },
        {
            name: "Gastrodon",
            imageUrl: "forms/423Gastrodon-West.png",
            number: "061",
            type: ["Water", "Ground"],
            category: "Sea Slug",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "65.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 29.9,
            dexEntry: "Long ago, its entire back was shielded with a sturdy shell. There are traces of it left in its cells.",
            cryUrl: "cries/423.mp3",
            japaneseName: "Tritodon"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "062",
            type: ["Bug", "Fighting"],
            category: "Single Horn",
            region: "Johto",
            generation: "02",
            height: "4'11\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 54.0,
            dexEntry: "It loves sweet honey. To keep all the honey to itself, it hurls rivals away with its prized horn.",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Aipom",
            imageUrl: "images/190Aipom.png",
            number: "063",
            type: ["Normal"],
            category: "Long Tail",
            region: "Johto",
            generation: "02",
            height: "2'07\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 11.5,
            dexEntry: "It lives high among the treetops. It can use its tail as freely and cleverly as its hands.",
            cryUrl: "cries/190.mp3",
            japaneseName: "Eipom"
        },
        {
            name: "Ambipom",
            imageUrl: "images/424Ambipom.png",
            number: "064",
            type: ["Normal"],
            category: "Long Tail",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "44.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 20.3,
            dexEntry: "Split into two, the tails are so adept at handling and doing things, Ambipom rarely uses its hands.",
            cryUrl: "cries/424.mp3",
            japaneseName: "Eteboth"
        },
        {
            name: "Drifloon",
            imageUrl: "images/425Drifloon.png",
            number: "065",
            type: ["Ghost", "Flying"],
            category: "Balloon",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.2,
            dexEntry: "Because of the way it floats aimlessly, an old folktale calls it a \"Signpost for Wandering Spirits.\"",
            cryUrl: "cries/425.mp3",
            japaneseName: "Fuwante"
        },
        {
            name: "Drifblim",
            imageUrl: "images/426Drifblim.png",
            number: "066",
            type: ["Ghost", "Flying"],
            category: "Blimp",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 15.0,
            dexEntry: "At dusk, swarms of them are carried aloft on winds. When noticed, they suddenly vanish.",
            cryUrl: "cries/426.mp3",
            japaneseName: "Fuwaride"
        },
        {
            name: "Buneary",
            imageUrl: "images/427Buneary.png",
            number: "067",
            type: ["Normal"],
            category: "Rabbit",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.5,
            dexEntry: "Its ears are always rolled up. They can be forcefully extended to shatter even a large boulder.",
            cryUrl: "cries/427.mp3",
            japaneseName: "Mimirol"
        },
        {
            name: "Lopunny",
            imageUrl: "images/428Lopunny.png",
            number: "068",
            type: ["Normal"],
            category: "Rabbit",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "73.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 33.3,
            dexEntry: "The ears appear to be delicate. If they are touched roughly, it kicks with its graceful legs.",
            cryUrl: "cries/428.mp3",
            japaneseName: "Mimilop"
        },
        {
            name: "Gastly",
            imageUrl: "images/092Gastly.png",
            number: "069",
            type: ["Ghost", "Poison"],
            category: "Gas",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "0.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 0.1,
            dexEntry: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
            cryUrl: "cries/092.mp3",
            japaneseName: "Ghos"
        },
        {
            name: "Haunter",
            imageUrl: "images/093Haunter.png",
            number: "070",
            type: ["Ghost", "Poison"],
            category: "Gas",
            region: "Kanto",
            generation: "01",
            height: "5'03\"",
            weight: "0.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 0.1,
            dexEntry: "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
            cryUrl: "cries/093.mp3",
            japaneseName: "Ghost"
        },
        {
            name: "Gengar",
            imageUrl: "images/094Gengar.png",
            number: "071",
            type: ["Ghost", "Poison"],
            category: "Shadow",
            region: "Kanto",
            generation: "01",
            height: "4'11\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 40.5,
            dexEntry: "The leer that floats in darkness belongs to a Gengar delighting in casting curses on people.",
            cryUrl: "cries/094.mp3",
            japaneseName: "Gangar"
        },
        {
            name: "Misdreavus",
            imageUrl: "images/200Misdreavus.png",
            number: "072",
            type: ["Ghost"],
            category: "Screech",
            region: "Johto",
            generation: "02",
            height: "2'04\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 1.0,
            dexEntry: "A Pokémon that startles people in the middle of the night. It gathers fear as its energy.",
            cryUrl: "cries/200.mp3",
            japaneseName: "Muma"
        },
        {
            name: "Mismagius",
            imageUrl: "images/429Mismagius.png",
            number: "073",
            type: ["Ghost"],
            category: "Magical",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "9.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 4.4,
            dexEntry: "Its cry sounds like incantation. It is said that the cry may rarely be imbued with happiness-giving power.",
            cryUrl: "cries/429.mp3",
            japaneseName: "Mumargi"
        },
        {
            name: "Murkrow",
            imageUrl: "images/198Murkrow.png",
            number: "074",
            type: ["Dark", "Flying"],
            category: "Darkness",
            region: "Johto",
            generation: "02",
            height: "1'08\"",
            weight: "4.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.1,
            dexEntry: "If spotted, it will lure an unwary person into chasing it, then lose the pursuer on mountain trails.",
            cryUrl: "cries/198.mp3",
            japaneseName: "Yamikarasu"
        },
        {
            name: "Honchkrow",
            imageUrl: "images/430Honchkrow.png",
            number: "075",
            type: ["Dark", "Flying"],
            category: "Big Boss",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "60.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 27.3,
            dexEntry: "If one utters a deep cry, many Murkrow gather quickly. For this, it is called \"Summoner of Night.\"",
            cryUrl: "cries/430.mp3",
            japaneseName: "Dongkarasu"
        },
        {
            name: "Glameow",
            imageUrl: "images/431Glameow.png",
            number: "076",
            type: ["Normal"],
            category: "Catty",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "8.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 3.9,
            dexEntry: "It hides its spiteful tendency of hooking its claws into the nose of its Trainer if it isn't fed.",
            cryUrl: "cries/431.mp3",
            japaneseName: "Nyarmar"
        },
        {
            name: "Purugly",
            imageUrl: "images/432Purugly.png",
            number: "077",
            type: ["Normal"],
            category: "Tiger Cat",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "96.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 43.8,
            dexEntry: "It binds its body with its tails to make itself look bigger. If it locks eyes, it will glare ceaselessly.",
            cryUrl: "cries/432.mp3",
            japaneseName: "Bunyatto"
        },
        {
            name: "Goldeen",
            imageUrl: "images/118Goldeen.png",
            number: "078",
            type: ["Water"],
            category: "Goldfish",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.0,
            dexEntry: "Though it appears very elegant when swimming with fins unfurled, it can jab powerfully with its horn.",
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
            generation: "01",
            height: "4'03\"",
            weight: "86.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 39.0,
            dexEntry: "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
            cryUrl: "cries/119.mp3",
            japaneseName: "Azumao"
        },
        {
            name: "Barboach",
            imageUrl: "images/339Barboach.png",
            number: "080",
            type: ["Water", "Ground"],
            category: "Whiskers",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "4.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.9,
            dexEntry: "Its slimy body is hard to grasp. In one region, it is said to have been born from hardened mud.",
            cryUrl: "cries/339.mp3",
            japaneseName: "Dojoach"
        },
        {
            name: "Whiscash",
            imageUrl: "images/340Whiscash.png",
            number: "081",
            type: ["Water", "Ground"],
            category: "Whiskers",
            region: "Hoenn",
            generation: "03",
            height: "2'11\"",
            weight: "52.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 23.6,
            dexEntry: "It is extremely protective of its territory. If any foe approaches, it attacks using vicious tremors.",
            cryUrl: "cries/340.mp3",
            japaneseName: "Namazun"
        },
        {
            name: "Chingling",
            imageUrl: "images/433Chingling.png",
            number: "082",
            type: ["Psychic"],
            category: "Bell",
            region: "Sinnoh",
            generation: "04",
            height: "0'08\"",
            weight: "1.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.6,
            dexEntry: "There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.",
            cryUrl: "cries/433.mp3",
            japaneseName: "Lisyan"
        },
        {
            name: "Chimecho",
            imageUrl: "images/358Chimecho.png",
            number: "083",
            type: ["Psychic"],
            category: "Wind Chime",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 1.0,
            dexEntry: "Its cries echo inside its hollow body to emerge as beautiful notes for startling and repelling foes.",
            cryUrl: "cries/358.mp3",
            japaneseName: "Chirean"
        },
        {
            name: "Stunky",
            imageUrl: "images/434Stunky.png",
            number: "084",
            type: ["Poison", "Dark"],
            category: "Skunk",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "42.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 19.2,
            dexEntry: "It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.",
            cryUrl: "cries/434.mp3",
            japaneseName: "Skunpuu"
        },
        {
            name: "Skuntank",
            imageUrl: "images/435Skuntank.png",
            number: "085",
            type: ["Poison", "Dark"],
            category: "Skunk",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 38.0,
            dexEntry: "It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it.",
            cryUrl: "cries/435.mp3",
            japaneseName: "Skutank"
        },
        {
            name: "Meditite",
            imageUrl: "images/307Meditite.png",
            number: "086",
            type: ["Fighting", "Psychic"],
            category: "Meditate",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "24.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.2,
            dexEntry: "It always trains deep in mountains. It levitates when it heightens its spiritual power through meditation.",
            cryUrl: "cries/307.mp3",
            japaneseName: "Asanan"
        },
        {
            name: "Medicham",
            imageUrl: "images/308Medicham.png",
            number: "087",
            type: ["Fighting", "Psychic"],
            category: "Meditate",
            region: "Hoenn",
            generation: "03",
            height: "4'03\"",
            weight: "69.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 31.5,
            dexEntry: "It gains the ability to see the aura of its opponents by honing its mind through starvation.",
            cryUrl: "cries/308.mp3",
            japaneseName: "Charem"
        },
        {
            name: "Bronzor",
            imageUrl: "images/436Bronzor.png",
            number: "088",
            type: ["Steel", "Psychic"],
            category: "Bronze",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "133.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 60.5,
            dexEntry: "There are researchers who believe this Pokémon reflected like a mirror in the distant past.",
            cryUrl: "cries/436.mp3",
            japaneseName: "Dohmirror"
        },
        {
            name: "Bronzong",
            imageUrl: "images/437Bronzong.png",
            number: "089",
            type: ["Steel", "Psychic"],
            category: "Bronze Bell",
            region: "Sinnoh",
            generation: "04",
            height: "4'03\"",
            weight: "412.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 187.0,
            dexEntry: "It brought rains by opening portals to another world. It was revered as a bringer of plentiful harvests.",
            cryUrl: "cries/437.mp3",
            japaneseName: "Dohtakun"
        },
        {
            name: "Ponyta",
            imageUrl: "images/077Ponyta.png",
            number: "090",
            type: ["Fire"],
            category: "Fire Horse",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 30.0,
            dexEntry: "As a newborn, it can barely stand. However, through galloping, its legs are made tougher and faster.",
            cryUrl: "cries/077.mp3",
            japaneseName: "Ponyta"
        },
        {
            name: "Rapidash",
            imageUrl: "images/078Rapidash.png",
            number: "091",
            type: ["Fire"],
            category: "Fire Horse",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "209.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 95.0,
            dexEntry: "When at an all-out gallop, its blazing mane sparkles, enhancing its beautiful appearance.",
            cryUrl: "cries/078.mp3",
            japaneseName: "Gallop"
        },
        {
            name: "Bonsly",
            imageUrl: "images/438Bonsly.png",
            number: "092",
            type: ["Rock"],
            category: "Bonsai",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 15.0,
            dexEntry: "It prefers an arid atmosphere. It leaks water that looks like tears when adjusting its moisture level.",
            cryUrl: "cries/438.mp3",
            japaneseName: "Usohachi"
        },
        {
            name: "Sudowoodo",
            imageUrl: "images/185Sudowoodo.png",
            number: "093",
            type: ["Rock"],
            category: "Imitation",
            region: "Johto",
            generation: "02",
            height: "3'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.0,
            dexEntry: "To avoid being attacked, it does nothing but mimic a tree. It hates water and flees from rain.",
            cryUrl: "cries/185.mp3",
            japaneseName: "Usokkie"
        },
        {
            name: "Mime Jr.",
            imageUrl: "images/439Mime_Jr.png",
            number: "094",
            type: ["Psychic"],
            category: "Mime",
            region: "Sinnoh",
            generation: "04",
            height: "2'00\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.0,
            dexEntry: "It mimics the expressions and motions of those it sees to understand the feelings of others.",
            cryUrl: "cries/439.mp3",
            japaneseName: "Manene"
        },
        {
            name: "Mr. Mime",
            imageUrl: "images/122Mr._Mime.png",
            number: "095",
            type: ["Psychic"],
            category: "Barrier",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "120.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 54.5,
            dexEntry: "It shapes an invisible wall in midair by minutely vibrating its fingertips to stop molecules in the air.",
            cryUrl: "cries/122.mp3",
            japaneseName: "Barrierd"
        },
        {
            name: "Happiny",
            imageUrl: "images/440Happiny.png",
            number: "096",
            type: ["Normal"],
            category: "Playhouse",
            region: "Sinnoh",
            generation: "04",
            height: "2'00\"",
            weight: "53.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 24.4,
            dexEntry: "It likes to carry around a small rock. It may wander around others' feet and cause them to stumble.",
            cryUrl: "cries/440.mp3",
            japaneseName: "Pinpuku"
        },
        {
            name: "Chansey",
            imageUrl: "images/113Chansey.png",
            number: "097",
            type: ["Normal"],
            category: "Egg",
            region: "Kanto",
            generation: "01",
            height: "3'07\"",
            weight: "76.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 34.6,
            dexEntry: "A kindly Pokémon that lays highly nutritious eggs and shares them with injured Pokémon or people.",
            cryUrl: "cries/113.mp3",
            japaneseName: "Lucky"
        },
        {
            name: "Blissey",
            imageUrl: "images/242Blissey.png",
            number: "098",
            type: ["Normal"],
            category: "Happiness",
            region: "Johto",
            generation: "02",
            height: "4'11\"",
            weight: "103.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 46.8,
            dexEntry: "The eggs it lays are filled with happiness. Eating even one bite will bring a smile to anyone.",
            cryUrl: "cries/242.mp3",
            japaneseName: "Happinas"
        },
        {
            name: "Cleffa",
            imageUrl: "images/173Cleffa.png",
            number: "099",
            type: ["Normal"],
            category: "Star Shape",
            region: "Johto",
            generation: "02",
            height: "1'00\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.0,
            dexEntry: "It is often seen when shooting stars fill the night skies. It's said to arrive riding on a shooting star.",
            cryUrl: "cries/173.mp3",
            japaneseName: "Py"
        },
        {
            name: "Clefairy",
            imageUrl: "images/035Clefairy.png",
            number: "100",
            type: ["Normal"],
            category: "Fairy",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.5,
            dexEntry: "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
            cryUrl: "cries/035.mp3",
            japaneseName: "Pippi"
        },
        {
            name: "Clefable",
            imageUrl: "images/036Clefable.png",
            number: "101",
            type: ["Normal"],
            category: "Fairy",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.0,
            dexEntry: "It is very wary and rarely shows itself to people. Its ears can hear a pin drop over half a mile away.",
            cryUrl: "cries/036.mp3",
            japaneseName: "Pixy"
        },
        {
            name: "Chatot",
            imageUrl: "images/441Chatot.png",
            number: "102",
            type: ["Normal", "Flying"],
            category: "Music Note",
            region: "Sinnoh",
            generation: "04",
            height: "1'08\"",
            weight: "4.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 1.9,
            dexEntry: "Its tongue is just like a human's. As a result, it can cleverly mimic human speech.",
            cryUrl: "cries/441.mp3",
            japaneseName: "Perap"
        },
        {
            name: "Pichu",
            imageUrl: "images/172Pichu.png",
            number: "103",
            type: ["Electric"],
            category: "Tiny Mouse",
            region: "Johto",
            generation: "02",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "The electric sacs in its cheeks are small. If even a little electricity leaks, it becomes shocked.",
            cryUrl: "cries/172.mp3",
            japaneseName: "Pichu"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "104",
            type: ["Electric"],
            category: "Mouse",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.0,
            dexEntry: "It occasionally uses an electric shock to recharge a fellow Pikachu that is in a weakened state.",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "105",
            type: ["Electric"],
            category: "Mouse",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 30.0,
            dexEntry: "Its tail discharges electricity into the ground, protecting it from getting shocked.",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Hoothoot",
            imageUrl: "images/163Hoothoot.png",
            number: "106",
            type: ["Normal", "Flying"],
            category: "Owl",
            region: "Johto",
            generation: "02",
            height: "2'04\"",
            weight: "46.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 21.2,
            dexEntry: "It marks time precisely. Some countries consider it to be a wise friend, versed in the world's ways.",
            cryUrl: "cries/163.mp3",
            japaneseName: "Hoho"
        },
        {
            name: "Noctowl",
            imageUrl: "images/164Noctowl.png",
            number: "107",
            type: ["Normal", "Flying"],
            category: "Owl",
            region: "Johto",
            generation: "02",
            height: "5'03\"",
            weight: "89.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 40.8,
            dexEntry: "Its eyes are specially developed to enable it to see clearly even in murky darkness and minimal light.",
            cryUrl: "cries/164.mp3",
            japaneseName: "Yorunozuku"
        },
        {
            name: "Spiritomb",
            imageUrl: "images/442Spiritomb.png",
            number: "108",
            type: ["Ghost", "Dark"],
            category: "Forbidden",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "238.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 108.0,
            dexEntry: "Its constant mischief and misdeeds resulted in it being bound to an Odd Keystone by a mysterious spell.",
            cryUrl: "cries/442.mp3",
            japaneseName: "Mikaruge"
        },
        {
            name: "Gible",
            imageUrl: "images/443Gible.png",
            number: "109",
            type: ["Dragon", "Ground"],
            category: "Land Shark",
            region: "Sinnoh",
            generation: "04",
            height: "2'04\"",
            weight: "45.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 20.5,
            dexEntry: "It attacks using its huge mouth. While its attacks are powerful, it hurts itself out of clumsiness, too.",
            cryUrl: "cries/443.mp3",
            japaneseName: "Fukamaru"
        },
        {
            name: "Gabite",
            imageUrl: "images/444Gabite.png",
            number: "110",
            type: ["Dragon", "Ground"],
            category: "Cave",
            region: "Sinnoh",
            generation: "04",
            height: "4'07\"",
            weight: "123.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 56.0,
            dexEntry: "It loves sparkly things. It seeks treasures in caves and hoards the loot into its nest.",
            cryUrl: "cries/444.mp3",
            japaneseName: "Gabite"
        },
        {
            name: "Garchomp",
            imageUrl: "images/445Garchomp.png",
            number: "111",
            type: ["Dragon", "Ground"],
            category: "Mach",
            region: "Sinnoh",
            generation: "04",
            height: "6'03\"",
            weight: "209.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 95.0,
            dexEntry: "It is said that when one runs at high speed, its wings create blades of wind that can fell nearby trees.",
            cryUrl: "cries/445.mp3",
            japaneseName: "Gaburias"
        },
        {
            name: "Munchlax",
            imageUrl: "images/446Munchlax.png",
            number: "112",
            type: ["Normal"],
            category: "Big Eater",
            region: "Sinnoh",
            generation: "04",
            height: "2'00\"",
            weight: "231.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 105.0,
            dexEntry: "In its desperation to gulp down food, it forgets about the food it has hidden under its fur.",
            cryUrl: "cries/446.mp3",
            japaneseName: "Gonbe"
        },
        {
            name: "Snorlax",
            imageUrl: "images/143Snorlax.png",
            number: "113",
            type: ["Normal"],
            category: "Sleeping",
            region: "Kanto",
            generation: "01",
            height: "6'11\"",
            weight: "1041.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 460.0,
            dexEntry: "When its belly is full, it becomes too lethargic to even lift a finger, so it is safe to bounce on its belly.",
            cryUrl: "cries/143.mp3",
            japaneseName: "Kabigon"
        },
        {
            name: "Unown",
            imageUrl: "images/201Unown.png",
            number: "114",
            type: ["Psychic"],
            category: "Symbol",
            region: "Johto",
            generation: "02",
            height: "1'08\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.0,
            dexEntry: "When alone, nothing happens. However, if there are two or more, an odd power is said to emerge.",
            cryUrl: "cries/201.mp3",
            japaneseName: "Unknown"
        },
        {
            name: "Riolu",
            imageUrl: "images/447Riolu.png",
            number: "115",
            type: ["Fighting"],
            category: "Emanation",
            region: "Sinnoh",
            generation: "04",
            height: "2'04\"",
            weight: "44.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 20.2,
            dexEntry: "It has the peculiar power of being able to see emotions such as joy and rage in the form of waves.",
            cryUrl: "cries/447.mp3",
            japaneseName: "Riolu"
        },
        {
            name: "Lucario",
            imageUrl: "images/448Lucario.png",
            number: "116",
            type: ["Fighting", "Steel"],
            category: "Aura",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 54.0,
            dexEntry: "A well-trained one can sense auras to identify and take in the feelings of creatures over half a mile away.",
            cryUrl: "cries/448.mp3",
            japaneseName: "Lucario"
        },
        {
            name: "Wooper",
            imageUrl: "images/194Wooper.png",
            number: "117",
            type: ["Water", "Ground"],
            category: "Water Fish",
            region: "Johto",
            generation: "02",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "When walking on land, it covers its body with a poisonous film that keeps its skin from dehydrating.",
            cryUrl: "cries/194.mp3",
            japaneseName: "Upah"
        },
        {
            name: "Quagsire",
            imageUrl: "images/195Quagsire.png",
            number: "118",
            type: ["Water", "Ground"],
            category: "Water Fish",
            region: "Johto",
            generation: "02",
            height: "4'07\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 75.0,
            dexEntry: "It has an easygoing nature. It doesn't care if it bumps its head on boats and rocks while swimming.",
            cryUrl: "cries/195.mp3",
            japaneseName: "Nuoh"
        },
        {
            name: "Wingull",
            imageUrl: "images/278Wingull.png",
            number: "119",
            type: ["Water", "Flying"],
            category: "Seagull",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.5,
            dexEntry: "It soars high in the sky, riding on updrafts like a glider. It carries food tucked in its bill.",
            cryUrl: "cries/278.mp3",
            japaneseName: "Camome"
        },
        {
            name: "Pelipper",
            imageUrl: "images/279Pelipper.png",
            number: "120",
            type: ["Water", "Flying"],
            category: "Water Bird",
            region: "Hoenn",
            generation: "03",
            height: "3'11\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 28.0,
            dexEntry: "It is a messenger of the skies, carrying small Pokémon and eggs to safety in its bill.",
            cryUrl: "cries/279.mp3",
            japaneseName: "Pelipper"
        },
        {
            name: "Girafarig",
            imageUrl: "images/203Girafarig.png",
            number: "121",
            type: ["Normal", "Psychic"],
            category: "Long Neck",
            region: "Johto",
            generation: "02",
            height: "4'11\"",
            weight: "91.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 41.5,
            dexEntry: "The head on its tail contains a small brain. It can instinctively fight even while facing backward.",
            cryUrl: "cries/203.mp3",
            japaneseName: "Kirinriki"
        },
        {
            name: "Hippopotas",
            imageUrl: "images/449Hippopotas.png",
            number: "122",
            type: ["Ground"],
            category: "Hippo",
            region: "Sinnoh",
            generation: "04",
            height: "2'07\"",
            weight: "109.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 49.5,
            dexEntry: "It shuts its nostrils tight then travels through the sand as if walking. They form colonies of around ten.",
            cryUrl: "cries/449.mp3",
            japaneseName: "Hippopotas"
        },
        {
            name: "Hippowdon",
            imageUrl: "images/450Hippowdon.png",
            number: "123",
            type: ["Ground"],
            category: "Heavyweight",
            region: "Sinnoh",
            generation: "04",
            height: "6'07\"",
            weight: "661.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 300.0,
            dexEntry: "Surprisingly quick to anger. It holds its mouth agape as a display of strength.",
            cryUrl: "cries/450.mp3",
            japaneseName: "Kabaldon"
        },
        {
            name: "Azurill",
            imageUrl: "images/298Azurill.png",
            number: "124",
            type: ["Normal"],
            category: "Polka Dot",
            region: "Hoenn",
            generation: "03",
            height: "0'08\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.0,
            dexEntry: "Its tail bounces like a rubber ball. It flings that tail around to fight opponents bigger than itself.",
            cryUrl: "cries/298.mp3",
            japaneseName: "Ruriri"
        },
        {
            name: "Marill",
            imageUrl: "images/183Marill.png",
            number: "125",
            type: ["Water"],
            category: "Aqua Mouse",
            region: "Johto",
            generation: "02",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "The oil-filled end of its tail floats on water. It keeps Marill from drowning even in a strong current.",
            cryUrl: "cries/183.mp3",
            japaneseName: "Maril"
        },
        {
            name: "Azumarill",
            imageUrl: "images/184Azumarill.png",
            number: "126",
            type: ["Water"],
            category: "Aqua Rabbit",
            region: "Johto",
            generation: "02",
            height: "2'07\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 28.5,
            dexEntry: "It can spend all day in water, since it can inhale and store a large volume of air.",
            cryUrl: "cries/184.mp3",
            japaneseName: "Marilli"
        },
        {
            name: "Skorupi",
            imageUrl: "images/451Skorupi.png",
            number: "127",
            type: ["Poison", "Bug"],
            category: "Scorpion",
            region: "Sinnoh",
            generation: "04",
            height: "2'07\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 12.0,
            dexEntry: "As soon as the tail claws close, its needle tips secrete poison. It can survive a year without food.",
            cryUrl: "cries/451.mp3",
            japaneseName: "Scorupi"
        },
        {
            name: "Drapion",
            imageUrl: "images/452Drapion.png",
            number: "128",
            type: ["Poison", "Dark"],
            category: "Ogre Scorpion",
            region: "Sinnoh",
            generation: "04",
            height: "4'03\"",
            weight: "135.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 61.5,
            dexEntry: "Possessing a sturdy build, it takes pride in its strength, taking down foes without using toxins.",
            cryUrl: "cries/452.mp3",
            japaneseName: "Dorapion"
        },
        {
            name: "Croagunk",
            imageUrl: "images/453Croagunk.png",
            number: "129",
            type: ["Poison", "Fighting"],
            category: "Toxic Mouth",
            region: "Sinnoh",
            generation: "04",
            height: "2'04\"",
            weight: "50.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 23.0,
            dexEntry: "It rarely fights fairly, but that is strictly to ensure survival. It is popular as a mascot.",
            cryUrl: "cries/453.mp3",
            japaneseName: "Gureggru"
        },
        {
            name: "Toxicroak",
            imageUrl: "images/454Toxicroak.png",
            number: "130",
            type: ["Poison", "Fighting"],
            category: "Toxic Mouth",
            region: "Sinnoh",
            generation: "04",
            height: "4'03\"",
            weight: "97.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 44.4,
            dexEntry: "It has a poison sac at its throat. When it croaks, the stored poison is churned for more potency.",
            cryUrl: "cries/454.mp3",
            japaneseName: "Dokurog"
        },
        {
            name: "Carnivine",
            imageUrl: "images/455Carnivine.png",
            number: "131",
            type: ["Grass"],
            category: "Bug Catcher",
            region: "Sinnoh",
            generation: "04",
            height: "4'07\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 27.0,
            dexEntry: "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.",
            cryUrl: "cries/455.mp3",
            japaneseName: "Muskippa"
        },
        {
            name: "Remoraid",
            imageUrl: "images/223Remoraid.png",
            number: "132",
            type: ["Water"],
            category: "Jet",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.0,
            dexEntry: "It forcefully squirts water. The water jet never misses prey even if the Remoraid is deep in the sea.",
            cryUrl: "cries/223.mp3",
            japaneseName: "Teppouo"
        },
        {
            name: "Octillery",
            imageUrl: "images/224Octillery.png",
            number: "133",
            type: ["Water"],
            category: "Jet",
            region: "Johto",
            generation: "02",
            height: "2'11\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 28.5,
            dexEntry: "It loves to lurk inside holes in rocks. It sometimes sprays ink on prey by sticking out only its mouth.",
            cryUrl: "cries/224.mp3",
            japaneseName: "Okutank"
        },
        {
            name: "Finneon",
            imageUrl: "images/456Finneon.png",
            number: "134",
            type: ["Water"],
            category: "Wing Fish",
            region: "Sinnoh",
            generation: "04",
            height: "1'04\"",
            weight: "15.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.0,
            dexEntry: "The line running down its side can store sunlight. It shines vividly at night.",
            cryUrl: "cries/456.mp3",
            japaneseName: "Keikouo"
        },
        {
            name: "Lumineon",
            imageUrl: "images/457Lumineon.png",
            number: "135",
            type: ["Water"],
            category: "Neon",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 24.0,
            dexEntry: "It crawls along the seafloor using its long front fins like legs. It competes for food with Lanturn.",
            cryUrl: "cries/457.mp3",
            japaneseName: "Neolant"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "136",
            type: ["Water", "Poison"],
            category: "Jellyfish",
            region: "Kanto",
            generation: "01",
            height: "2'11\"",
            weight: "100.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 45.5,
            dexEntry: "Because its body is almost entirely composed of water, it shrivels up if it is washed ashore.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "137",
            type: ["Water", "Poison"],
            category: "Jellyfish",
            region: "Kanto",
            generation: "01",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "It extends its 80 tentacles to form an encircling poisonous net that is difficult to escape.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Feebas",
            imageUrl: "images/349Feebas.png",
            number: "138",
            type: ["Water"],
            category: "Fish",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "16.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.4,
            dexEntry: "It is a shabby and ugly Pokémon. However, it is very hardy and can survive on little water.",
            cryUrl: "cries/349.mp3",
            japaneseName: "Hinbass"
        },
        {
            name: "Milotic",
            imageUrl: "images/350Milotic.png",
            number: "139",
            type: ["Water"],
            category: "Tender",
            region: "Hoenn",
            generation: "03",
            height: "20'04\"",
            weight: "357.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 6.2,
            metricWeight: 162.0,
            dexEntry: "Its lovely scales are described as rainbow colored. They change color depending on the viewing angle.",
            cryUrl: "cries/350.mp3",
            japaneseName: "Milokaross"
        },
        {
            name: "Mantyke",
            imageUrl: "images/458Mantyke.png",
            number: "140",
            type: ["Water", "Flying"],
            category: "Kite",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "143.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 65.0,
            dexEntry: "People organize tours to see this Pokémon frolic and skim the tops of the waves with Remoraid.",
            cryUrl: "cries/458.mp3",
            japaneseName: "Tamanta"
        },
        {
            name: "Mantine",
            imageUrl: "images/226Mantine.png",
            number: "141",
            type: ["Water", "Flying"],
            category: "Kite",
            region: "Johto",
            generation: "02",
            height: "6'11\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 220.0,
            dexEntry: "While elegantly swimming in the sea, it ignores Remoraid that cling to its fins seeking food scraps.",
            cryUrl: "cries/226.mp3",
            japaneseName: "Mantain"
        },
        {
            name: "Snover",
            imageUrl: "images/459Snover.png",
            number: "142",
            type: ["Grass", "Ice"],
            category: "Frost Tree",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "111.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 50.5,
            dexEntry: "Seemingly curious about people, they gather around footsteps they find on snowy mountains.",
            cryUrl: "cries/459.mp3",
            japaneseName: "Yukikaburi"
        },
        {
            name: "Abomasnow",
            imageUrl: "images/460Abomasnow.png",
            number: "143",
            type: ["Grass", "Ice"],
            category: "Frost Tree",
            region: "Sinnoh",
            generation: "04",
            height: "7'03\"",
            weight: "298.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 135.5,
            dexEntry: "They appear when the snow flowers bloom. When the petals fall, they retreat to places unknown again.",
            cryUrl: "cries/460.mp3",
            japaneseName: "Yukinooh"
        },
        {
            name: "Sneasel",
            imageUrl: "images/215Sneasel.png",
            number: "144",
            type: ["Dark", "Ice"],
            category: "Sharp Claw",
            region: "Johto",
            generation: "02",
            height: "2'11\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 28.0,
            dexEntry: "A smart and sneaky Pokémon. A pair may work together to steal Eggs by having one lure the parents away.",
            cryUrl: "cries/215.mp3",
            japaneseName: "Nyula"
        },
        {
            name: "Weavile",
            imageUrl: "images/461Weavile.png",
            number: "145",
            type: ["Dark", "Ice"],
            category: "Sharp Claw",
            region: "Sinnoh",
            generation: "04",
            height: "3'07\"",
            weight: "75.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 34.0,
            dexEntry: "Evolution made it even more devious. It communicates by clawing signs in boulders.",
            cryUrl: "cries/461.mp3",
            japaneseName: "Manyula"
        },
        {
            name: "Uxie",
            imageUrl: "images/480Uxie.png",
            number: "146",
            type: ["Psychic"],
            category: "Knowledge",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "When Uxie flew, people gained the ability to solve problems. It was the birth of knowledge.",
            cryUrl: "cries/480.mp3",
            japaneseName: "Yuxie"
        },
        {
            name: "Mesprit",
            imageUrl: "images/481Mesprit.png",
            number: "147",
            type: ["Psychic"],
            category: "Emotion",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "When Mesprit flew, people learned the joy and sadness of living. It was the birth of emotions.",
            cryUrl: "cries/481.mp3",
            japaneseName: "Emrit"
        },
        {
            name: "Azelf",
            imageUrl: "images/482Azelf.png",
            number: "148",
            type: ["Psychic"],
            category: "Willpower",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "When Azelf flew, people gained the determination to do things. It was the birth of willpower.",
            cryUrl: "cries/482.mp3",
            japaneseName: "Agnome"
        },
        {
            name: "Dialga",
            imageUrl: "images/483Dialga.png",
            number: "149",
            type: ["Steel", "Dragon"],
            category: "Temporal",
            region: "Sinnoh",
            generation: "04",
            height: "17'09\"",
            weight: "1505.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 5.4,
            metricWeight: 683.0,
            dexEntry: "A legendary Pokémon of Sinnoh. It is said that time flows when Dialga's heart beats.",
            cryUrl: "cries/483.mp3",
            japaneseName: "Dialga"
        },
        {
            name: "Palkia",
            imageUrl: "images/484Palkia.png",
            number: "150",
            type: ["Water", "Dragon"],
            category: "Spatial",
            region: "Sinnoh",
            generation: "04",
            height: "13'09\"",
            weight: "740.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.2,
            metricWeight: 336.0,
            dexEntry: "A legendary Pokémon of Sinnoh. It is said that space becomes more stable with Palkia's every breath.",
            cryUrl: "cries/484.mp3",
            japaneseName: "Palkia"
        },
        {
            name: "Manaphy",
            imageUrl: "images/490Manaphy.png",
            number: "151",
            type: ["Water"],
            category: "Seafaring",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "3.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.4,
            dexEntry: "It is born with a wondrous power that lets it bond with any kind of Pokémon.",
            cryUrl: "cries/490.mp3",
            japaneseName: "Manaphy"
        },
        {
            name: "Rotom",
            imageUrl: "images/479Rotom.png",
            number: "152",
            type: ["Electric", "Ghost"],
            category: "Plasma",
            region: "Sinnoh",
            generation: "04",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "Its electric-like body can enter some kinds of machines and take control in order to make mischief.",
            cryUrl: "cries/479.mp3",
            japaneseName: "Rotom"
        },
        {
            name: "Gligar",
            imageUrl: "images/207Gligar.png",
            number: "153",
            type: ["Ground", "Flying"],
            category: "Fly Scorpion",
            region: "Johto",
            generation: "02",
            height: "3'07\"",
            weight: "142.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 64.8,
            dexEntry: "It glides as if sliding. It startles foes by clamping on their faces, then jabs with its poison stinger.",
            cryUrl: "cries/207.mp3",
            japaneseName: "Gliger"
        },
        {
            name: "Gliscor",
            imageUrl: "images/472Gliscor.png",
            number: "154",
            type: ["Ground", "Flying"],
            category: "Fang Scorpion",
            region: "Sinnoh",
            generation: "04",
            height: "6'07\"",
            weight: "93.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 42.5,
            dexEntry: "If it succeeds in catching even a faint breeze properly, it can circle the globe without flapping once.",
            cryUrl: "cries/472.mp3",
            japaneseName: "Glion"
        },
        {
            name: "Nosepass",
            imageUrl: "images/299Nosepass.png",
            number: "155",
            type: ["Rock"],
            category: "Compass",
            region: "Hoenn",
            generation: "03",
            height: "3'03\"",
            weight: "213.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 97.0,
            dexEntry: "When endangered, it may protect itself by raising its magnetism and drawing iron objects to its body.",
            cryUrl: "cries/299.mp3",
            japaneseName: "Nosepass"
        },
        {
            name: "Probopass",
            imageUrl: "images/476Probopass.png",
            number: "156",
            type: ["Rock", "Steel"],
            category: "Compass",
            region: "Sinnoh",
            generation: "04",
            height: "4'07\"",
            weight: "749.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 340.0,
            dexEntry: "It freely controls three small units called Mini-Noses using magnetic force.",
            cryUrl: "cries/476.mp3",
            japaneseName: "Dainose"
        },
        {
            name: "Ralts",
            imageUrl: "images/280Ralts.png",
            number: "157",
            type: ["Psychic"],
            category: "Feeling",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.6,
            dexEntry: "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly.",
            cryUrl: "cries/280.mp3",
            japaneseName: "Ralts"
        },
        {
            name: "Kirlia",
            imageUrl: "images/281Kirlia.png",
            number: "158",
            type: ["Psychic"],
            category: "Emotion",
            region: "Hoenn",
            generation: "03",
            height: "2'07\"",
            weight: "44.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.2,
            dexEntry: "If its Trainer becomes happy, it overflows with energy, dancing joyously while spinning about.",
            cryUrl: "cries/281.mp3",
            japaneseName: "Kirlia"
        },
        {
            name: "Gardevoir",
            imageUrl: "images/282Gardevoir.png",
            number: "159",
            type: ["Psychic"],
            category: "Embrace",
            region: "Hoenn",
            generation: "03",
            height: "5'03\"",
            weight: "106.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 48.4,
            dexEntry: "To protect its Trainer, it will expend all its psychic power to create a small black hole.",
            cryUrl: "cries/282.mp3",
            japaneseName: "Sirnight"
        },
        {
            name: "Gallade",
            imageUrl: "images/475Gallade.png",
            number: "160",
            type: ["Psychic", "Fighting"],
            category: "Blade",
            region: "Sinnoh",
            generation: "04",
            height: "5'03\"",
            weight: "114.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 52.0,
            dexEntry: "When protecting someone, it extends its elbows as if they were swords and fights savagely.",
            cryUrl: "cries/475.mp3",
            japaneseName: "Erureido"
        },
        {
            name: "Lickitung",
            imageUrl: "images/108Lickitung.png",
            number: "161",
            type: ["Normal"],
            category: "Licking",
            region: "Kanto",
            generation: "01",
            height: "3'11\"",
            weight: "144.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 65.5,
            dexEntry: "When it extends its over-six-foot-long tongue, its tail quivers. There is a possibility they are connected.",
            cryUrl: "cries/108.mp3",
            japaneseName: "Beroringa"
        },
        {
            name: "Lickilicky",
            imageUrl: "images/463Lickilicky.png",
            number: "162",
            type: ["Normal"],
            category: "Licking",
            region: "Sinnoh",
            generation: "04",
            height: "5'07\"",
            weight: "308.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 140.0,
            dexEntry: "The long tongue is always soggy with slobber. The saliva contains a solvent that causes numbness.",
            cryUrl: "cries/463.mp3",
            japaneseName: "Berobelt"
        },
        {
            name: "Eevee",
            imageUrl: "images/133Eevee.png",
            number: "163",
            type: ["Normal"],
            category: "Evolution",
            region: "Kanto",
            generation: "01",
            height: "1'00\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.5,
            dexEntry: "Because its genetic makeup is irregular, it quickly changes its form due to a variety of causes.",
            cryUrl: "cries/133.mp3",
            japaneseName: "Eievui"
        },
        {
            name: "Vaporeon",
            imageUrl: "images/134Vaporeon.png",
            number: "164",
            type: ["Water"],
            category: "Bubble Jet",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "63.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.0,
            dexEntry: "Its cell composition is similar to water molecules. As a result, it can melt away into water.",
            cryUrl: "cries/134.mp3",
            japaneseName: "Showers"
        },
        {
            name: "Jolteon",
            imageUrl: "images/135Jolteon.png",
            number: "165",
            type: ["Electric"],
            category: "Lightning",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "54.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.5,
            dexEntry: "If agitated, it uses electricity to straighten out its fur and launch it in small bunches.",
            cryUrl: "cries/135.mp3",
            japaneseName: "Thunders"
        },
        {
            name: "Flareon",
            imageUrl: "images/136Flareon.png",
            number: "166",
            type: ["Fire"],
            category: "Flame",
            region: "Kanto",
            generation: "01",
            height: "2'11\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 25.0,
            dexEntry: "Inhaled air is heated in the flame sac in its body to an intense fire over 3,000 degrees Fahrenheit.",
            cryUrl: "cries/136.mp3",
            japaneseName: "Booster"
        },
        {
            name: "Espeon",
            imageUrl: "images/196Espeon.png",
            number: "167",
            type: ["Psychic"],
            category: "Sun",
            region: "Johto",
            generation: "02",
            height: "2'11\"",
            weight: "58.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 26.5,
            dexEntry: "Its fur is so sensitive, it can sense minute shifts in the air and predict the weather.",
            cryUrl: "cries/196.mp3",
            japaneseName: "Eifie"
        },
        {
            name: "Umbreon",
            imageUrl: "images/197Umbreon.png",
            number: "168",
            type: ["Dark"],
            category: "Moonlight",
            region: "Johto",
            generation: "02",
            height: "3'03\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 27.0,
            dexEntry: "When exposed to the moon's aura, the rings on its body glow faintly and it gains a mysterious power.",
            cryUrl: "cries/197.mp3",
            japaneseName: "Blacky"
        },
        {
            name: "Leafeon",
            imageUrl: "images/470Leafeon.png",
            number: "169",
            type: ["Grass"],
            category: "Verdant",
            region: "Sinnoh",
            generation: "04",
            height: "3'03\"",
            weight: "56.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 25.5,
            dexEntry: "It basically does not fight. With cells similar to those of plants, it can perform photosynthesis.",
            cryUrl: "cries/470.mp3",
            japaneseName: "Leafia"
        },
        {
            name: "Glaceon",
            imageUrl: "images/471Glaceon.png",
            number: "170",
            type: ["Ice"],
            category: "Fresh Snow",
            region: "Sinnoh",
            generation: "04",
            height: "2'07\"",
            weight: "57.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 25.9,
            dexEntry: "By controlling its body heat, it can freeze the atmosphere around it to make a diamond-dust flurry.",
            cryUrl: "cries/471.mp3",
            japaneseName: "Glacia"
        },
        {
            name: "Swablu",
            imageUrl: "images/333Swablu.png",
            number: "171",
            type: ["Normal", "Flying"],
            category: "Cotton Bird",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.2,
            dexEntry: "It can't relax if it or its surroundings are not clean. It wipes off dirt with its wings.",
            cryUrl: "cries/333.mp3",
            japaneseName: "Tyltto"
        },
        {
            name: "Altaria",
            imageUrl: "images/334Altaria.png",
            number: "172",
            type: ["Dragon", "Flying"],
            category: "Humming",
            region: "Hoenn",
            generation: "03",
            height: "3'07\"",
            weight: "45.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 20.6,
            dexEntry: "If it bonds with a person, it will gently envelop the friend with its soft wings, then hum.",
            cryUrl: "cries/334.mp3",
            japaneseName: "Tyltalis"
        },
        {
            name: "Togepi",
            imageUrl: "images/175Togepi.png",
            number: "173",
            type: ["Normal"],
            category: "Spike Ball",
            region: "Johto",
            generation: "02",
            height: "1'00\"",
            weight: "3.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.3,
            dexEntry: "It transforms the kindness and joy of others into happiness, which it stores in its shell.",
            cryUrl: "cries/175.mp3",
            japaneseName: "Togepy"
        },
        {
            name: "Togetic",
            imageUrl: "images/176Togetic.png",
            number: "174",
            type: ["Normal", "Flying"],
            category: "Happiness",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "7.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 3.2,
            dexEntry: "To share its happiness, it flies around the world seeking kind-hearted people.",
            cryUrl: "cries/176.mp3",
            japaneseName: "Togechick"
        },
        {
            name: "Togekiss",
            imageUrl: "images/468Togekiss.png",
            number: "175",
            type: ["Normal", "Flying"],
            category: "Jubilee",
            region: "Sinnoh",
            generation: "04",
            height: "4'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 38.0,
            dexEntry: "It shares many blessings with people who respect one another's rights and avoid needless strife.",
            cryUrl: "cries/468.mp3",
            japaneseName: "Togekiss"
        },
        {
            name: "Houndour",
            imageUrl: "images/228Houndour.png",
            number: "176",
            type: ["Dark", "Fire"],
            category: "Dark",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "23.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.8,
            dexEntry: "It is smart enough to hunt in packs. It uses a variety of cries for communicating with others.",
            cryUrl: "cries/228.mp3",
            japaneseName: "Delvil"
        },
        {
            name: "Houndoom",
            imageUrl: "images/229Houndoom.png",
            number: "177",
            type: ["Dark", "Fire"],
            category: "Dark",
            region: "Johto",
            generation: "02",
            height: "4'07\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 35.0,
            dexEntry: "The flames it breathes when angry contain toxins. If they cause a burn, it will hurt forever.",
            cryUrl: "cries/229.mp3",
            japaneseName: "Hellgar"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "178",
            type: ["Electric", "Steel"],
            category: "Magnet",
            region: "Kanto",
            generation: "01",
            height: "1'00\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.0,
            dexEntry: "The faster the units at its sides rotate, the greater the magnetic force they generate.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "179",
            type: ["Electric", "Steel"],
            category: "Magnet",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 60.0,
            dexEntry: "Many mysteriously appear when more sunspots dot the sun. They stop TV sets from displaying properly.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Magnezone",
            imageUrl: "images/462Magnezone.png",
            number: "180",
            type: ["Electric", "Steel"],
            category: "Magnet Area",
            region: "Sinnoh",
            generation: "04",
            height: "3'11\"",
            weight: "396.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 180.0,
            dexEntry: "A group tried to use scientific means to make Magnezone evolve, but their efforts ended in failure.",
            cryUrl: "cries/462.mp3",
            japaneseName: "Jibacoil"
        },
        {
            name: "Tangela",
            imageUrl: "images/114Tangela.png",
            number: "181",
            type: ["Grass"],
            category: "Vine",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 35.0,
            dexEntry: "The blue vines shrouding its body are covered in a growth of fine hair. It is known to be ticklish.",
            cryUrl: "cries/114.mp3",
            japaneseName: "Monjara"
        },
        {
            name: "Tangrowth",
            imageUrl: "images/465Tangrowth.png",
            number: "182",
            type: ["Grass"],
            category: "Vine",
            region: "Sinnoh",
            generation: "04",
            height: "6'07\"",
            weight: "283.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 128.6,
            dexEntry: "Its arms are made of plants that bind themselves to things. They grow back right away if cut.",
            cryUrl: "cries/465.mp3",
            japaneseName: "Mojumbo"
        },
        {
            name: "Yanma",
            imageUrl: "images/193Yanma.png",
            number: "183",
            type: ["Bug", "Flying"],
            category: "Clear Wing",
            region: "Johto",
            generation: "02",
            height: "3'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.0,
            dexEntry: "It can hover in one spot by flapping its wings at high speed. It flits about to guard its territory.",
            cryUrl: "cries/193.mp3",
            japaneseName: "Yanyanma"
        },
        {
            name: "Yanmega",
            imageUrl: "images/469Yanmega.png",
            number: "184",
            type: ["Bug", "Flying"],
            category: "Ogre Darner",
            region: "Sinnoh",
            generation: "04",
            height: "6'03\"",
            weight: "113.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 51.5,
            dexEntry: "Its jaw power is incredible. It is adept at biting apart foes while flying by at high speed.",
            cryUrl: "cries/469.mp3",
            japaneseName: "Megayanma"
        },
        {
            name: "Tropius",
            imageUrl: "images/357Tropius.png",
            number: "185",
            type: ["Grass", "Flying"],
            category: "Fruit",
            region: "Hoenn",
            generation: "03",
            height: "6'07\"",
            weight: "220.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 100.0,
            dexEntry: "Delicious fruits grew out from around its neck because it always ate the same kind of fruit.",
            cryUrl: "cries/357.mp3",
            japaneseName: "Tropius"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "186",
            type: ["Ground", "Rock"],
            category: "Spikes",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "253.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 115.0,
            dexEntry: "Its powerful tackles can destroy anything. However, it is too slow witted to help people work.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "187",
            type: ["Ground", "Rock"],
            category: "Drill",
            region: "Kanto",
            generation: "01",
            height: "6'03\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 120.0,
            dexEntry: "Standing on its hind legs freed its forelegs and made it smarter. It is very forgetful, however.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Rhyperior",
            imageUrl: "images/464Rhyperior.png",
            number: "188",
            type: ["Ground", "Rock"],
            category: "Drill",
            region: "Sinnoh",
            generation: "04",
            height: "7'10\"",
            weight: "623.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.4,
            metricWeight: 282.8,
            dexEntry: "It can launch a rock held in its hand like a missile by tightening then expanding its muscles instantly.",
            cryUrl: "cries/464.mp3",
            japaneseName: "Dosidon"
        },
        {
            name: "Duskull",
            imageUrl: "images/355Duskull.png",
            number: "189",
            type: ["Ghost"],
            category: "Requiem",
            region: "Hoenn",
            generation: "03",
            height: "2'07\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 15.0,
            dexEntry: "It loves the crying of children. It startles bad kids by passing through walls and making them cry.",
            cryUrl: "cries/355.mp3",
            japaneseName: "Yomawaru"
        },
        {
            name: "Dusclops",
            imageUrl: "images/356Dusclops.png",
            number: "190",
            type: ["Ghost"],
            category: "Beckon",
            region: "Hoenn",
            generation: "03",
            height: "5'03\"",
            weight: "67.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 30.6,
            dexEntry: "It seeks drifting will-o'-the-wisps and sucks them into its empty body. What happens inside is a mystery.",
            cryUrl: "cries/356.mp3",
            japaneseName: "Samayouru"
        },
        {
            name: "Dusknoir",
            imageUrl: "images/477Dusknoir.png",
            number: "191",
            type: ["Ghost"],
            category: "Gripper",
            region: "Sinnoh",
            generation: "04",
            height: "7'03\"",
            weight: "235.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 106.6,
            dexEntry: "It is said to take lost spirits into its pliant body and guide them home.",
            cryUrl: "cries/477.mp3",
            japaneseName: "Yonoir"
        },
        {
            name: "Porygon",
            imageUrl: "images/137Porygon.png",
            number: "192",
            type: ["Normal"],
            category: "Virtual",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "80.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 36.5,
            dexEntry: "A man-made Pokémon created using advanced scientific means. It can move freely in cyberspace.",
            cryUrl: "cries/137.mp3",
            japaneseName: "Porygon"
        },
        {
            name: "Porygon2",
            imageUrl: "images/233Porygon2.png",
            number: "193",
            type: ["Normal"],
            category: "Virtual",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 32.5,
            dexEntry: "It was upgraded to enable the exploration of other planets. However, it failed to measure up.",
            cryUrl: "cries/233.mp3",
            japaneseName: "Porygon2"
        },
        {
            name: "Porygon-Z",
            imageUrl: "images/474Porygon-Z.png",
            number: "194",
            type: ["Normal"],
            category: "Virtual",
            region: "Sinnoh",
            generation: "04",
            height: "2'11\"",
            weight: "75.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 34.0,
            dexEntry: "Its programming was modified to enable work in alien dimensions. It did not work as planned.",
            cryUrl: "cries/474.mp3",
            japaneseName: "Porygon-Z"
        },
        {
            name: "Scyther",
            imageUrl: "images/123Scyther.png",
            number: "195",
            type: ["Bug", "Flying"],
            category: "Mantis",
            region: "Kanto",
            generation: "01",
            height: "4'11\"",
            weight: "123.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 56.0,
            dexEntry: "The sharp scythes on its forearms become increasingly sharp by cutting through hard objects.",
            cryUrl: "cries/123.mp3",
            japaneseName: "Strike"
        },
        {
            name: "Scizor",
            imageUrl: "images/212Scizor.png",
            number: "196",
            type: ["Bug", "Steel"],
            category: "Pincer",
            region: "Johto",
            generation: "02",
            height: "5'11\"",
            weight: "260.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 118.0,
            dexEntry: "It raises its pincers with eyelike markings for intimidation. It also swings them down dangerously.",
            cryUrl: "cries/212.mp3",
            japaneseName: "Hassam"
        },
        {
            name: "Elekid",
            imageUrl: "images/239Elekid.png",
            number: "197",
            type: ["Electric"],
            category: "Electric",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "51.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 23.5,
            dexEntry: "A weak electric current flows between its horns. Sticking a hand there shocks the unwary.",
            cryUrl: "cries/239.mp3",
            japaneseName: "Elekid"
        },
        {
            name: "Electabuzz",
            imageUrl: "images/125Electabuzz.png",
            number: "198",
            type: ["Electric"],
            category: "Electric",
            region: "Kanto",
            generation: "01",
            height: "3'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 30.0,
            dexEntry: "It windmills its arms to slightly boost its punches. Foes have been known to escape in the meantime.",
            cryUrl: "cries/125.mp3",
            japaneseName: "Eleboo"
        },
        {
            name: "Electivire",
            imageUrl: "images/466Electivire.png",
            number: "199",
            type: ["Electric"],
            category: "Thunderbolt",
            region: "Sinnoh",
            generation: "04",
            height: "5'11\"",
            weight: "305.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 138.6,
            dexEntry: "Heedless of enemy attacks, it closes in, shoves its tails onto the foe, then looses high voltage.",
            cryUrl: "cries/466.mp3",
            japaneseName: "Elekible"
        },
        {
            name: "Magby",
            imageUrl: "images/240Magby.png",
            number: "200",
            type: ["Fire"],
            category: "Live Coal",
            region: "Johto",
            generation: "02",
            height: "2'04\"",
            weight: "47.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 21.4,
            dexEntry: "Its magma-like blood circulates throughout its body. Its body's heat can top 1,100 degrees F.",
            cryUrl: "cries/240.mp3",
            japaneseName: "Buby"
        },
        {
            name: "Magmar",
            imageUrl: "images/126Magmar.png",
            number: "201",
            type: ["Fire"],
            category: "Spitfire",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "98.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 44.5,
            dexEntry: "When it breathes deeply, heat waves form around its body, making it hard to see clearly.",
            cryUrl: "cries/126.mp3",
            japaneseName: "Boober"
        },
        {
            name: "Magmortar",
            imageUrl: "images/467Magmortar.png",
            number: "202",
            type: ["Fire"],
            category: "Blast",
            region: "Sinnoh",
            generation: "04",
            height: "5'03\"",
            weight: "149.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 68.0,
            dexEntry: "When launching 3,600 degrees F fireballs, its body takes on a whitish hue from the intense heat.",
            cryUrl: "cries/467.mp3",
            japaneseName: "Booburn"
        },
        {
            name: "Swinub",
            imageUrl: "images/220Swinub.png",
            number: "203",
            type: ["Ice", "Ground"],
            category: "Pig",
            region: "Johto",
            generation: "02",
            height: "1'04\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.5,
            dexEntry: "It has a very sensitive nose. It can locate mushrooms, berries, and even hot springs buried under ice.",
            cryUrl: "cries/220.mp3",
            japaneseName: "Urimoo"
        },
        {
            name: "Piloswine",
            imageUrl: "images/221Piloswine.png",
            number: "204",
            type: ["Ice", "Ground"],
            category: "Swine",
            region: "Johto",
            generation: "02",
            height: "3'07\"",
            weight: "123.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 55.8,
            dexEntry: "Covered by a shaggy coat, it is strong against the cold. Its tusks of ice thicken when it snows.",
            cryUrl: "cries/221.mp3",
            japaneseName: "Inomoo"
        },
        {
            name: "Mamoswine",
            imageUrl: "images/473Mamoswine.png",
            number: "205",
            type: ["Ice", "Ground"],
            category: "Twin Tusk",
            region: "Sinnoh",
            generation: "04",
            height: "8'02\"",
            weight: "641.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 291.0,
            dexEntry: "A frozen one was dug up from soil dating back 10,000 years. It woke up to much amazement.",
            cryUrl: "cries/473.mp3",
            japaneseName: "Mammoo"
        },
        {
            name: "Snorunt",
            imageUrl: "images/361Snorunt.png",
            number: "206",
            type: ["Ice"],
            category: "Snow Hat",
            region: "Hoenn",
            generation: "03",
            height: "2'04\"",
            weight: "37.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.8,
            dexEntry: "It is said that several Snorunt gather under giant leaves and live together in harmony.",
            cryUrl: "cries/361.mp3",
            japaneseName: "Yukiwarashi"
        },
        {
            name: "Glalie",
            imageUrl: "images/362Glalie.png",
            number: "207",
            type: ["Ice"],
            category: "Face",
            region: "Hoenn",
            generation: "03",
            height: "4'11\"",
            weight: "565.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 256.5,
            dexEntry: "It prevents prey from escaping by instantaneously freezing moisture in the air.",
            cryUrl: "cries/362.mp3",
            japaneseName: "Onigohri"
        },
        {
            name: "Froslass",
            imageUrl: "images/478Froslass.png",
            number: "208",
            type: ["Ice", "Ghost"],
            category: "Snow Land",
            region: "Sinnoh",
            generation: "04",
            height: "4'03\"",
            weight: "58.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 26.6,
            dexEntry: "It freezes prey by blowing its -58 degree F breath. It is said to then secretly display its prey.",
            cryUrl: "cries/478.mp3",
            japaneseName: "Yukimenoko"
        },
        {
            name: "Absol",
            imageUrl: "images/359Absol.png",
            number: "209",
            type: ["Dark"],
            category: "Disaster",
            region: "Hoenn",
            generation: "03",
            height: "3'11\"",
            weight: "103.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 47.0,
            dexEntry: "Rumored to sense danger with its horn, it became a target. It fled deep into the mountains.",
            cryUrl: "cries/359.mp3",
            japaneseName: "Absol"
        },
        {
            name: "Giratina",
            imageUrl: "images/487Giratina.png",
            number: "210",
            type: ["Ghost", "Dragon"],
            category: "Renegade",
            region: "Sinnoh",
            generation: "04",
            height: "14'09\"",
            weight: "1653.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.5,
            metricWeight: 750.0,
            dexEntry: "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
            cryUrl: "cries/487.mp3",
            japaneseName: "Giratina"
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
            if (pocketMonster.generation === "01"){
                return "I"
            }
            else if (pocketMonster.generation === "02"){
                return "II"
            }
            else if (pocketMonster.generation === "03"){
                return "III"
            }
            else if (pocketMonster.generation === "04"){
                return "IV"
            }
            else if (pocketMonster.generation === "05"){
                return "V"
            }
            else if (pocketMonster.generation === "06"){
                return "VI"
            }
            else if (pocketMonster.generation === "07"){
                return "VII"
            }
            else if (pocketMonster.generation === "08"){
                return "VIII"
            }
            else if (pocketMonster.generation === "09"){
                return "IX"
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