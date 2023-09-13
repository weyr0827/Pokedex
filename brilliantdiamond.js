//Brilliant Diamond Search Code


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
            dexEntry: "Made from soil, the shell on its back hardens when it drinks water. It lives along lakes.",
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
            dexEntry: "It lives along water in forests. In the daytime, it leaves the forest to sunbathe the trees on its shell.",
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
            dexEntry: "Small Pokémon occasionally gather on its unmoving back to begin building their nests.",
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
            dexEntry: "It agilely scales sheer cliffs to live atop craggy mountains. Its fire is put out when it sleeps.",
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
            dexEntry: "To intimidate attackers, it expands the fire on its tail to make itself appear bigger.",
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
            dexEntry: "It uses a special kind of martial arts involving all its limbs. Its fire never goes out.",
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
            dexEntry: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.",
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
            dexEntry: "It lives alone, away from others. Apparently, every one of them believes it is the most important.",
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
            dexEntry: "The three horns that extend from its beak attest to its power. The leader has the biggest horns.",
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
            dexEntry: "They flock in great numbers. Though small, they flap their wings with great power.",
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
            dexEntry: "They fly around forests and fields in search of bug Pokémon, moving together in huge flocks.",
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
            dexEntry: "It has a savage nature. It will courageously challenge foes that are much larger than itself.",
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
            dexEntry: "With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
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
            dexEntry: "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.",
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
            dexEntry: "It shakes its head back to front, causing its antennae to hit each other and sound like a xylophone.",
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
            dexEntry: "It crosses its knifelike arms in front of its chest when it cries. It can compose melodies ad lib.",
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
            dexEntry: "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
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
            dexEntry: "Its claws loose electricity with enough amperage to cause opponents to faint. It lives in small groups.",
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
            dexEntry: "It has eyes that can see through anything. It spots and captures prey hiding behind objects.",
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
            dexEntry: "It sleeps for 18 hours a day. Even when awake, it teleports itself while remaining seated.",
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
            dexEntry: "If one is nearby, an eerie shadow appears on TV screens. Seeing the shadow is said to bring bad luck.",
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
            dexEntry: "Its superb memory lets it recall everything it has experienced from birth. Its IQ exceeds 5,000.",
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
            dexEntry: "It is said to be the world's weakest Pokémon. No one knows why it has managed to survive.",
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
            dexEntry: "Once Gyarados appears, its rage never settles until the Pokémon has razed the fields and mountains around it.",
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
            dexEntry: "Over the winter, it closes its bud and endures the cold. In spring, the bud opens and releases pollen.",
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
            dexEntry: "Roselia raised on clean drinking water are known to grow vividly colored flowers.",
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
            dexEntry: "It attracts prey with a sweet aroma, then downs it with thorny whips hidden in its arms.",
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
            dexEntry: "Even though it has no eyes, it can sense obstacles using ultrasonic waves it emits from it mouth.",
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
            dexEntry: "It loves the blood of humans and Pokémon. It flies around at night in search of neck veins.",
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
            dexEntry: "Having four wings enables it to fly faster and more quietly. It turns active when the night comes.",
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
            dexEntry: "Many live on mountain trails and remain half buried while keeping an eye on climbers.",
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
            dexEntry: "Graveler make their homes on sheer cliff faces that have numerous holes in them.",
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
            dexEntry: "It sheds its hide once a year. Its boulderlike body is so tough, even dynamite can't harm it.",
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
            dexEntry: "When it travels underground, it causes rumbling and tremors. It can move at 50 mph.",
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
            dexEntry: "Tempered underground under high pressure and heat, its body is harder than any metal.",
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
            dexEntry: "It lived in jungles around 100 million years ago. Its skull is as hard as iron.",
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
            dexEntry: "Its powerful headbutt has enough power to shatter even the most durable things upon impact.",
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
            dexEntry: "A Pokémon that lived in jungles around 100 million years ago. Its facial hide is extremely hard.",
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
            dexEntry: "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.",
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
            dexEntry: "It hefts a Graveler repeatedly to strengthen its entire body. It uses every type of martial arts.",
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
            dexEntry: "Machoke's boundless power is very dangerous, so it wears a belt that suppresses its energy.",
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
            dexEntry: "It punches with its four arms at blinding speed. It can launch 1,000 punches in two seconds.",
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
            dexEntry: "If its usual headache worsens, it starts exhibiting odd powers. It can't remember doing so, however.",
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
            dexEntry: "This Pokémon lives in lakes. It swims faster than any world-class swimmer.",
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
            dexEntry: "To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.",
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
            dexEntry: "When Burmy evolves, its cloak becomes a part of its body. Wormadam's cloak is never shed.",
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
            dexEntry: "It loves the honey of flowers and steals honey collected by Combee.",
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
            dexEntry: "It loves to eat leaves. If it is attacked by a Starly, it will defend itself with its spiked rear.",
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
            dexEntry: "It anchors itself by wrapping twigs with the silk from its body. It motionlessly awaits evolution.",
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
            dexEntry: "It has an aggressive nature. It stabs prey with its long, narrow mouth to drain the prey's fluids.",
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
            dexEntry: "It is hot inside its cocoon. All the cells in its body create the energy for it to evolve.",
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
            dexEntry: "Dustox are nocturnal Pokémon. Drawn by streetlights, they messily eat the leaves of trees lining boulevards.",
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
            dexEntry: "Three Pokémon joined to become one. It busily carries sweet nectar to Vespiquen.",
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
            dexEntry: "Its abdomen is a honeycomb for grubs. It raises its grubs on nectar collected by Combee.",
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
            dexEntry: "It stores its own fur balls that crackle with static electricity together with its favorite berries in tree hollows.",
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
            dexEntry: "When air fills the flotation sac on its neck, the sac balloons like an inner tube. This Pokémon floats with its head out of the water.",
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
            dexEntry: "It floats using its well-developed flotation sac. It assists in the rescues of drowning people.",
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
            dexEntry: "The small ball holds the nutrients needed for evolution. Apparently, it is very sweet and tasty.",
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
            dexEntry: "It blooms during times of strong sunlight. The Pokémon tries to make up for everything it endured as a bud.",
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
            dexEntry: "Its color and shapes differ from region to region. In the Sinnoh region, two types are confirmed.",
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
            dexEntry: "It has a pliable body without any bones. If any part of its body is torn off, it grows right back.",
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
            dexEntry: "It gathers in forests to search for tree sap, its favorite food. It's strong enough to hurl foes.",
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
            dexEntry: "It uses its tail to pluck fruits that are out of reach. Its tail is more adept than its real hands.",
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
            dexEntry: "To eat, it deftly shucks nuts with its two tails. It rarely uses its arms now.",
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
            dexEntry: "A Pokémon formed by the spirits of people and Pokémon. It loves damp, humid seasons.",
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
            dexEntry: "It's drowzy in daytime, but flies off in the evening in big groups. No one knows where they go.",
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
            dexEntry: "It slams foes by sharply uncoiling its rolled ears. It stings enough to make a grown-up cry in pain.",
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
            dexEntry: "An extremely cautious Pokémon that cloaks its body with its fluffy ear fur when it senses danger.",
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
            dexEntry: "This Pokémon's body is 95 percent made up of gases. The Pokémon can be blown away by strong gusts of wind.",
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
            dexEntry: "It can slip through any obstacle. It lurks inside walls to keep an eye on its foes.",
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
            dexEntry: "It hides in shadows. It is said that in rooms where Gengar is hiding, the temperature drops by nearly 10 degrees Fahrenheit.",
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
            dexEntry: "It loves to sneak up on people late at night, then startle them with its shrieklike cry.",
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
            dexEntry: "Its cries sound like incantations. Those who hear it are tormented by headaches and hallucinations.",
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
            dexEntry: "It is believed that seeing this Pokémon at night will bring about ominous occurrences.",
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
            dexEntry: "Becoming active at night, it is known to form flocks with numerous Murkrow in tow.",
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
            dexEntry: "It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.",
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
            dexEntry: "It is a brazen brute that barges its way into another Pokémon's nest and claims it as its own.",
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
            dexEntry: "It swims elegantly by flittering its tail fin as if it were a dress. It has the look of a queen.",
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
            dexEntry: "It makes its nest by hollowing out boulders in streams with its horn. The Pokémon defends its eggs with its life.",
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
            dexEntry: "It coats its entire body with a slimy fluid so it can squirm and slip away if grabbed.",
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
            dexEntry: "It is very territorial. It repels foes by setting off tremors that extend over a three-mile radius.",
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
            dexEntry: "It emits cries by agitating an orb at the back of its throat. It moves with flouncing hops.",
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
            dexEntry: "To knock foes flying, it makes the air shudder with its cries. It converses using seven cries.",
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
            dexEntry: "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.",
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
            dexEntry: "It sprays a vile-smelling fluid from the tip of its tail to attack. It can fire this spray more than 160 feet.",
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
            dexEntry: "It meditates in order to build up its mental energy. It's said to eat just one Berry a day.",
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
            dexEntry: "Through yoga training, it has honed its sixth sense. Its movements are elegant.",
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
            dexEntry: "Implements shaped like Bronzor were discovered in ancient tombs. It is unknown whether they are related.",
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
            dexEntry: "One caused a media storm when it was dug up at a construction site after a 2,000-year sleep.",
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
            dexEntry: "About an hour after birth, Ponyta's fiery mane and tail grow out, giving the Pokémon an impressive appearance.",
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
            dexEntry: "It gallops at nearly 150 mph. With its mane blazing ferociously, it races as if it were an arrow.",
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
            dexEntry: "It looks as if it is always crying. It is actually adjusting its body's fluid levels by eliminating excess.",
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
            dexEntry: "Though it looks like a tree, its body is actually more like rock or stone. The Pokémon is very weak to water.",
            cryUrl: "cries/185.mp3",
            japaneseName: "Usokkie"
        },
        {
            name: "Mime Jr.",
            imageUrl: "images/439Mime_Jr.png",
            number: "094",
            type: ["Psychic", "Fairy"],
            category: "Mime",
            region: "Sinnoh",
            generation: "04",
            height: "2'00\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.0,
            dexEntry: "It habitually mimics foes. The mimicked foe is said to be unable to look away from Mime Jr.",
            cryUrl: "cries/439.mp3",
            japaneseName: "Manene"
        },
        {
            name: "Mr. Mime",
            imageUrl: "images/122Mr._Mime.png",
            number: "095",
            type: ["Psychic", "Fairy"],
            category: "Barrier",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "120.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 54.5,
            dexEntry: "It is a pantomime expert that can create invisible but solid walls using miming gestures.",
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
            dexEntry: "It loves round white things. It carries an egg-shaped rock in imitation of Chansey.",
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
            dexEntry: "It is said to deliver happiness. Being compassionate, it shares its eggs with injured people.",
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
            dexEntry: "This kindhearted Pokémon nurses sick Pokémon to health. It senses feelings of sadness.",
            cryUrl: "cries/242.mp3",
            japaneseName: "Happinas"
        },
        {
            name: "Cleffa",
            imageUrl: "images/173Cleffa.png",
            number: "099",
            type: ["Fairy"],
            category: "Star Shape",
            region: "Johto",
            generation: "02",
            height: "1'00\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.0,
            dexEntry: "Its silhouette is like a star. It is believed to arrive riding on shooting stars.",
            cryUrl: "cries/173.mp3",
            japaneseName: "Py"
        },
        {
            name: "Clefairy",
            imageUrl: "images/035Clefairy.png",
            number: "100",
            type: ["Fairy"],
            category: "Fairy",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.5,
            dexEntry: "Thought to live with others on quiet mountains, it is popular for its adorable nature.",
            cryUrl: "cries/035.mp3",
            japaneseName: "Pippi"
        },
        {
            name: "Clefable",
            imageUrl: "images/036Clefable.png",
            number: "101",
            type: ["Fairy"],
            category: "Fairy",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.0,
            dexEntry: "Rarely seen by people, it is said to be drawn by the full moon to play at deserted lakes.",
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
            dexEntry: "They can learn and speak human words. If they gather, they all learn the same saying.",
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
            dexEntry: "The electric sacs on its cheeks are still small. They cannot store much electricity yet.",
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
            dexEntry: "It lives in forests with others. It stores electricity in the electric sacs on its cheeks.",
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
            dexEntry: "It turns aggressive if it has too much electricity in its body. It discharges power through its tail.",
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
            dexEntry: "It always stands on one foot. Even when attacked, it does not brace itself using both feet.",
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
            dexEntry: "Its eyes are special. They can pick out objects as long as there is the tiniest amount of light.",
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
            dexEntry: "It is a Pokémon that was formed by 108 spirits. It is bound to a fissure in an odd keystone.",
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
            dexEntry: "It nests in small, horizontal holes in cave walls. It pounces to catch prey that stray too close.",
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
            dexEntry: "There is a long-held belief that medicine made from its scales will heal incurable illnesses.",
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
            dexEntry: "When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed.",
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
            dexEntry: "It wolfs down its weight in food once a day, swallowing it whole with almost no chewing.",
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
            dexEntry: "Its stomach can digest any kind of food, even if it happens to be moldy or rotten.",
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
            dexEntry: "Because the Pokémon is shaped like ancient writing, it is a huge mystery whether written language or Unown came first.",
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
            dexEntry: "The aura that emanates from its body intensifies to alert others if it is afraid or sad.",
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
            dexEntry: "It has the ability to sense the Auras of all things. It understands human speech.",
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
            dexEntry: "It lives in cold water, half burying itself in mud at the bottom to sleep.",
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
            dexEntry: "It has a sluggish nature. It lies at the river's bottom, waiting for prey to stray into its mouth.",
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
            dexEntry: "It makes its nest on steep sea cliffs. Riding updrafts, it soars to great heights.",
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
            dexEntry: "It dips its large bill in the sea, then scoops up numerous prey along with water.",
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
            dexEntry: "Its tail has a separate small brain. The tail bites to repel any foe trying to sneak up on the Pokémon from behind.",
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
            dexEntry: "It lives in arid places. Instead of perspiration, it expels grainy sand from its body.",
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
            dexEntry: "It blasts internally stored sand from ports on its body to create a towering twister for attack.",
            cryUrl: "cries/450.mp3",
            japaneseName: "Kabaldon"
        },
        {
            name: "Azurill",
            imageUrl: "images/298Azurill.png",
            number: "124",
            type: ["Normal", "Fairy"],
            category: "Polka Dot",
            region: "Hoenn",
            generation: "03",
            height: "0'08\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.0,
            dexEntry: "A Pokémon that lives by water. It moves quickly on land by bouncing on its big tail.",
            cryUrl: "cries/298.mp3",
            japaneseName: "Ruriri"
        },
        {
            name: "Marill",
            imageUrl: "images/183Marill.png",
            number: "125",
            type: ["Water", "Fairy"],
            category: "Aqua Mouse",
            region: "Johto",
            generation: "02",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "Using its tail as a float, it dives underwater. It likes eating plants that grow in riverbeds.",
            cryUrl: "cries/183.mp3",
            japaneseName: "Maril"
        },
        {
            name: "Azumarill",
            imageUrl: "images/184Azumarill.png",
            number: "126",
            type: ["Water", "Fairy"],
            category: "Aqua Rabbit",
            region: "Johto",
            generation: "02",
            height: "2'07\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 28.5,
            dexEntry: "It lives in rivers and lakes. In water, its coloring and patterns trick the vision of foes.",
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
            dexEntry: "It grips prey with its tail claws and injects poison. It tenaciously hangs on until the poison takes.",
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
            dexEntry: "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.",
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
            dexEntry: "Its cheeks hold poison sacs. It tries to catch foes off guard to jab them with toxic fingers.",
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
            dexEntry: "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.",
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
            dexEntry: "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat its prey.",
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
            dexEntry: "It squirts water forcefully from its mouth to shoot down flying prey.",
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
            dexEntry: "It lives in the gaps of boulders and in holes on the seafloor. Its suction cups grip prey tightly.",
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
            dexEntry: "After long exposure to sunlight, the patterns on its tail fins shine vividly when darkness arrives.",
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
            dexEntry: "It lives on the deep-sea floor. It attracts prey by flashing patterns on its four fins.",
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
            dexEntry: "Its body is virtually composed of water. It shoots strange beams from its crystal-like eyes.",
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
            dexEntry: "With 80 tentacles for ensnaring victims, it prevents escape until the prey is weakened by poison.",
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
            dexEntry: "They are famous for their shabby appearance. Although populous, they tend to cluster in set locations.",
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
            dexEntry: "When people bicker, it is said to arise from the depths of lakes to becalm violent hearts.",
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
            dexEntry: "A friendly Pokémon that captures the subtle flows of seawater using its two antennae.",
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
            dexEntry: "When the waves are calm, one may encounter a swarm of Mantine swimming as if they are in flight.",
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
            dexEntry: "It lives on snowy mountains. Having had little contact with humans, it is boldly inquisitive.",
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
            dexEntry: "It whips up blizzards in mountains that are always buried in snow. It is the abominable snowman.",
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
            dexEntry: "It feeds on Eggs stolen from nests. Its sharply hooked claws rip vulnerable spots on prey.",
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
            dexEntry: "They live in cold regions, forming groups of four or five that hunt prey with impressive coordination.",
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
            dexEntry: "Known as the Being of Knowledge, it is said that it can wipe out the memory of those who see its eyes.",
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
            dexEntry: "It is known as the Being of Emotion. It taught humans the nobility of sorrow, pain, and joy.",
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
            dexEntry: "It is known as the Being of Willpower. It sleeps at the bottom of a lake to keep the world in balance.",
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
            dexEntry: "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.",
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
            dexEntry: "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.",
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
            dexEntry: "Born on a cold seafloor, it will swim great distances to return to its birthplace.",
            cryUrl: "cries/490.mp3",
            japaneseName: "Manaphy"
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