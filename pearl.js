//Pearl Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Turtwig",
            imageUrl: "images/387Turtwig.png",
            number: "001",
            type: ["Grass"],
            category: "Tiny Leaf",
            region: "Sinnoh",
            generation: "4",
            height: "1'04\"",
            weight: "22.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 10.2,
            dexEntry: "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.",
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
            generation: "4",
            height: "3'07\"",
            weight: "213.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 97.0,
            dexEntry: "The shell is hardened soil. Some Pokémon come to peck the berries growing on the trees on its back.",
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
            generation: "4",
            height: "7'03\"",
            weight: "683.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 310.0,
            dexEntry: "Groups of this Pokémon migrating in search of water have been mistaken for \"moving forests.\"",
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
            generation: "4",
            height: "1'08\"",
            weight: "13.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 6.2,
            dexEntry: "Its fiery rear end is fueled by gas made in its belly. Even rain can't extinguish the fire.",
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
            generation: "4",
            height: "2'11\"",
            weight: "48.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 22.0,
            dexEntry: "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.",
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
            generation: "4",
            height: "3'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 55.0,
            dexEntry: "Its crown of fire is indicative of its fiery nature. It is beaten by none in terms of quickness.",
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
            generation: "4",
            height: "1'04\"",
            weight: "11.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.2,
            dexEntry: "It lives along shores in northern countries. A skilled swimmer, it dives for over 10 minutes to hunt.",
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
            generation: "4",
            height: "2'07\"",
            weight: "50.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 23.0,
            dexEntry: "Its wings deliver wicked blows that snap even the thickest of trees. It searches for prey in icy seas.",
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
            generation: "4",
            height: "5'07\"",
            weight: "186.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 84.5,
            dexEntry: "It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.",
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
            generation: "4",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "Usually with a large flock, it is barely noticeable when alone. Its cries are very strident.",
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
            generation: "4",
            height: "2'00\"",
            weight: "34.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.5,
            dexEntry: "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
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
            generation: "4",
            height: "3'11\"",
            weight: "54.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 24.9,
            dexEntry: "The muscles in its wings and legs are strong. It can easily fly while gripping a small Pokémon.",
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
            generation: "4",
            height: "1'08\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 20.0,
            dexEntry: "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.",
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
            generation: "4",
            height: "3'03\"",
            weight: "69.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 31.5,
            dexEntry: "While its movements out of water are sluggish, it can swim as fast as any Feebas.",
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
            generation: "4",
            height: "1'00\"",
            weight: "4.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.2,
            dexEntry: "It chats with others using the sounds of its colliding antennae. These sounds are fall hallmarks.",
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
            generation: "4",
            height: "3'03\"",
            weight: "56.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 25.5,
            dexEntry: "It signals its emotions with its melodies. Scientists are studying these melodic patterns.",
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
            generation: "4",
            height: "1'08\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.5,
            dexEntry: "Its forelegs have a muscle-based system of generating electricity. Its body shines if endangered.",
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
            generation: "4",
            height: "2'11\"",
            weight: "67.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 30.5,
            dexEntry: "It rests its forelegs on others to communicate with rhythmic electric pulses from its claws.",
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
            generation: "4",
            height: "4'07\"",
            weight: "92.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 42.0,
            dexEntry: "When its eyes gleam gold, it can spot hiding prey--even those taking shelter behind a wall.",
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
            generation: "1",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "Even while asleep, it maintains a telepathic radar. It teleports when it is threatened.",
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
            generation: "1",
            height: "4'03\"",
            weight: "124.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 56.5,
            dexEntry: "When it uses its psychic power, it emits strong alpha waves that can ruin precision devices.",
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
            generation: "1",
            height: "4'11\"",
            weight: "105.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 48.0,
            dexEntry: "Its highly developed brain is on par with a supercomputer. It can use all forms of psychic abilities.",
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
            generation: "1",
            height: "2'11\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 10.0,
            dexEntry: "It is unable to swim against even slow-moving currents. It always splashes about for some reason.",
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
            generation: "1",
            height: "21'04\"",
            weight: "518.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 6.5,
            metricWeight: 235.0,
            dexEntry: "In ancient literature, there is a record of a Gyarados that razed a village when violence flared.",
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
            generation: "4",
            height: "0'08\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 1.2,
            dexEntry: "It lives alongside clear ponds. It scatters pollen that induces harsh sneezing and runny noses.",
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
            generation: "3",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "The beautiful flowers on its arms have toxic thorns. Don't even think about picking those flowers.",
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
            generation: "4",
            height: "2'11\"",
            weight: "32.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 14.5,
            dexEntry: "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.",
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
            generation: "1",
            height: "2'07\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 7.5,
            dexEntry: "Disliking sunlight, it sleeps deep in forests and caves until sundown.",
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
            generation: "1",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "Once it starts sucking blood, it does not stop until it is full. It flies at night in search of prey.",
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
            generation: "2",
            height: "5'11\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 75.0,
            dexEntry: "A Pokémon that gained vastly enhanced flying performance by having its legs turn into wings.",
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
            generation: "1",
            height: "1'04\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 20.0,
            dexEntry: "It is impossible to distinguish from rocks. It slams against others in contests of hardness.",
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
            generation: "1",
            height: "3'03\"",
            weight: "231.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 105.0,
            dexEntry: "It tumbles down slopes, heedless of any body parts chipping off. It eats a ton of rocks daily.",
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
            generation: "1",
            height: "4'07\"",
            weight: "661.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 300.0,
            dexEntry: "It tumbles down mountains, leaving grooves from peak to base. Stay clear of these grooves.",
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
            generation: "1",
            height: "28'10\"",
            weight: "463.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 8.8,
            metricWeight: 210.0,
            dexEntry: "It squirms through the ground using its long and rugged body. It always eats while burrowing.",
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
            generation: "2",
            height: "30'02\"",
            weight: "881.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 9.2,
            metricWeight: 400.0,
            dexEntry: "It chews its way through boulders with its sturdy jaws. Its eyes can see in the dark underground.",
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
            generation: "4",
            height: "2'11\"",
            weight: "69.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 31.5,
            dexEntry: "It was resurrected from an iron ball-like fossil. It downs prey with its headbutts.",
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
            generation: "4",
            height: "5'03\"",
            weight: "226.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 102.5,
            dexEntry: "Its skull is as hard as iron. It is a brute that tears down jungle trees while catching prey.",
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
            generation: "4",
            height: "1'08\"",
            weight: "125.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 57.0,
            dexEntry: "It habitually polishes its face by rubbing it against tree trunks. It is weak to attacks from behind.",
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
            generation: "4",
            height: "4'03\"",
            weight: "329.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 149.5,
            dexEntry: "When attacked, they form a wall with their shield like faces to protect their young.",
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
            generation: "1",
            height: "2'07\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.5,
            dexEntry: "Its muscles never cramp however much it trains. It lives in the mountains away from humans.",
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
            generation: "1",
            height: "4'11\"",
            weight: "155.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 70.5,
            dexEntry: "It can lift a dump truck with one hand. Using that power, it helps people with heavy jobs.",
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
            generation: "1",
            height: "5'03\"",
            weight: "286.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 130.0,
            dexEntry: "It can knock a train flying with a punch. However, it is terrible at delicate work using its fingers.",
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
            generation: "1",
            height: "2'07\"",
            weight: "43.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.6,
            dexEntry: "It never remembers using its odd powers, so it always tilts its head in puzzlement.",
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
            generation: "1",
            height: "5'07\"",
            weight: "168.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 76.6,
            dexEntry: "The flippers of its well-developed limbs give it shocking speed. It is the best swimmer among Pokémon.",
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
            generation: "4",
            height: "0'08\"",
            weight: "7.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 3.4,
            dexEntry: "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.",
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
            generation: "4",
            height: "1'08\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 6.5,
            dexEntry: "Its appearance changes depending on where it evolved. The materials on hand become a part of its body.",
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
            generation: "4",
            height: "2'11\"",
            weight: "51.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 23.3,
            dexEntry: "It does not keep a nest. It flies over fields and mountains in constant search of floral honey.",
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
            generation: "3",
            height: "1'00\"",
            weight: "7.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.6,
            dexEntry: "It spits a white silk that turns sticky when it contacts air. It is used to immobilize foes.",
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
            generation: "3",
            height: "2'00\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.0,
            dexEntry: "It drinks dew that collects on its silk and waits for evolution. Its hard cocoon repels attacks.",
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
            generation: "3",
            height: "3'03\"",
            weight: "62.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.4,
            dexEntry: "When flower fields bloom, it flits around, collecting pollen. Despite its appearance, it is savage.",
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
            generation: "3",
            height: "2'04\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 11.5,
            dexEntry: "Encased within its tough cocoon, it endures attacks. It never forgets the appearance of its foes.",
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
            generation: "3",
            height: "3'11\"",
            weight: "69.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 31.6,
            dexEntry: "It violently flutters its wings to scatter toxic dust when attacked. It becomes active after sunset.",
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
            generation: "4",
            height: "1'00\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 5.5,
            dexEntry: "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.",
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
            generation: "4",
            height: "3'11\"",
            weight: "84.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.5,
            dexEntry: "When endangered, grubs from its six-cell honeycomb strike back. There is only one in a colony.",
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
            generation: "4",
            height: "1'04\"",
            weight: "8.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 3.9,
            dexEntry: "It makes electricity with pouches in its cheeks and shoots charges from its tail. It lives atop trees.",
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
            generation: "4",
            height: "2'04\"",
            weight: "65.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 29.5,
            dexEntry: "It swims by rotating its two tails like a screw. When it dives, its flotation sac collapses.",
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
            generation: "4",
            height: "3'07\"",
            weight: "73.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 33.5,
            dexEntry: "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft.",
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
            generation: "4",
            height: "1'04\"",
            weight: "7.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 3.3,
            dexEntry: "Sunlight colors it red. When the small ball is drained of nutrients, it shrivels to herald evolution.",
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
            generation: "4",
            height: "1'08\"",
            weight: "20.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.3,
            dexEntry: "It is docile as a bud, but turns cheerful when it blooms. It folds back into a bud if sunlight wanes.",
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
            generation: "4",
            height: "1'00\"",
            weight: "13.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.3,
            dexEntry: "It lives along bodies of water. Its body shape has changed to suit its habitat.",
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
            generation: "4",
            height: "2'11\"",
            weight: "65.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 29.9,
            dexEntry: "It apparently had a huge shell for protection in ancient times. It lives in shallow tidal pools.",
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
            generation: "2",
            height: "4'11\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 54.0,
            dexEntry: "With powerful legs and claws, it generates enough power to hurl foes over great distances.",
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
            generation: "2",
            height: "2'07\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 11.5,
            dexEntry: "It lives atop giant trees. It wraps its tail around a branch so it won't fall off while asleep.",
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
            generation: "4",
            height: "3'11\"",
            weight: "44.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 20.3,
            dexEntry: "They work in large colonies and make rings by linking their tails, apparently in friendship.",
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
            generation: "4",
            height: "1'04\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.2,
            dexEntry: "It tugs on the hands of children to steal them away. However, it gets pulled around instead.",
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
            generation: "4",
            height: "3'11\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 15.0,
            dexEntry: "It carries people and Pokémon when it flies. But since it only drifts, it can end up anywhere.",
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
            generation: "4",
            height: "1'04\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.5,
            dexEntry: "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur.",
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
            generation: "4",
            height: "3'11\"",
            weight: "73.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 33.3,
            dexEntry: "It is very conscious of its looks and never fails to groom its ears. It runs with sprightly jumps.",
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
            generation: "1",
            height: "4'03\"",
            weight: "0.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 0.1,
            dexEntry: "A Pokémon born from poison gases. It defeats even the largest foes by enveloping them in gas.",
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
            generation: "1",
            height: "5'03\"",
            weight: "0.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 0.1,
            dexEntry: "It licks with its gaseous tongue to steal the victim's life force. It lurks in darkness for prey.",
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
            generation: "1",
            height: "4'11\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 40.5,
            dexEntry: "Lurking in the shadowy corners of rooms, it awaits chances to steal its prey's life force.",
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
            generation: "2",
            height: "2'04\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 1.0,
            dexEntry: "It gets nourishment from fear that it absorbs into its red orbs. In daytime, it sleeps in darkness.",
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
            generation: "4",
            height: "2'11\"",
            weight: "9.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 4.4,
            dexEntry: "It chants incantations. While they usually torment targets, some chants bring happiness.",
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
            generation: "2",
            height: "1'08\"",
            weight: "4.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.1,
            dexEntry: "It appears near travelers to lure them into deep forests. It is said to carry misfortune.",
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
            generation: "4",
            height: "2'11\"",
            weight: "60.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 27.3,
            dexEntry: "It makes its Murkrow cronies bring it food. It idles its time away, grooming itself in its nest.",
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
            generation: "4",
            height: "1'08\"",
            weight: "8.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 3.9,
            dexEntry: "With its sharp glare, it puts foes in a mild hypnotic state. It is a very fickle Pokémon.",
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
            generation: "4",
            height: "3'03\"",
            weight: "96.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 43.8,
            dexEntry: "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.",
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
            generation: "1",
            height: "2'00\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.0,
            dexEntry: "It swims at a steady 5 knots. If it senses danger, it will strike back with its sharp horn.",
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
            dexEntry: "To protect its family, it will fight with its drill-sharp horn. It lives in hollowed rocks in streams.",
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
            generation: "3",
            height: "1'04\"",
            weight: "4.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.9,
            dexEntry: "Its whiskers make a superb radar. They are used to locate prey, even in the murkiest of water.",
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
            generation: "3",
            height: "2'11\"",
            weight: "52.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 23.6,
            dexEntry: "As a result of causing tremors by thrashing about, it developed the ability to foretell real earthquakes.",
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
            generation: "4",
            height: "0'08\"",
            weight: "1.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.6,
            dexEntry: "Each time it hops, it makes a ringing sound. It deafens foes by emitting high-frequency cries.",
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
            generation: "3",
            height: "2'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 1.0,
            dexEntry: "Emitting ultrasonic cries, it floats on winds to travel great distances.",
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
            generation: "4",
            height: "1'04\"",
            weight: "42.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 19.2,
            dexEntry: "It sprays a nose-curling, stinky fluid from its rear to repel attackers.",
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
            generation: "4",
            height: "3'03\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 38.0,
            dexEntry: "It sprays a stinky fluid from its tail. The fluid smells worse the longer it is allowed to fester.",
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
            generation: "3",
            height: "2'00\"",
            weight: "24.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.2,
            dexEntry: "It never misses its daily yoga workouts, and it heightens its spiritual power through meditation.",
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
            generation: "3",
            height: "4'03\"",
            weight: "69.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 31.5,
            dexEntry: "Through daily meditation, it hones its spiritual power. It can sense what others are thinking.",
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
            generation: "4",
            height: "1'08\"",
            weight: "133.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 60.5,
            dexEntry: "X-ray photos were taken to check its body structure. Nothing appeared, however.",
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
            generation: "4",
            height: "4'03\"",
            weight: "412.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 187.0,
            dexEntry: "It can summon rain clouds. People long ago revered it as the bringer of plentiful harvests.",
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
            generation: "1",
            height: "3'03\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 30.0,
            dexEntry: "Its legs grow strong while it chases after its parent. It runs in fields and mountains all day.",
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
            generation: "1",
            height: "5'07\"",
            weight: "209.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 95.0,
            dexEntry: "It has astounding acceleration. From a standstill, it can reach top speed within 10 steps.",
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
            generation: "4",
            height: "1'08\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 15.0,
            dexEntry: "It prefers arid environments. It leaks water from its eyes to adjust its body's fluid levels.",
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
            generation: "2",
            height: "3'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 38.0,
            dexEntry: "It stands along paths pretending to be a tree. If it starts raining, it seems to disappear.",
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
            generation: "4",
            height: "2'00\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.0,
            dexEntry: "It likes places where people gather. It mimics foes to confuse them, then makes its getaway.",
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
            generation: "1",
            height: "4'03\"",
            weight: "120.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 54.5,
            dexEntry: "Emanations from its fingertips solidify the air into invisible walls that repel even harsh attacks.",
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
            generation: "4",
            height: "2'00\"",
            weight: "53.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 24.4,
            dexEntry: "It carries a round, egg-shaped rock in its belly pouch and gives the rock to its friends.",
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
            generation: "1",
            height: "3'07\"",
            weight: "76.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 34.6,
            dexEntry: "It lays several eggs a day and won't share them with those who have evil in their hearts.",
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
            generation: "2",
            height: "4'11\"",
            weight: "103.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 46.8,
            dexEntry: "It is a Pokémon that delivers happiness. Eating its egg is said to make one kind to everyone.",
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
            generation: "2",
            height: "1'00\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.0,
            dexEntry: "Many appear when the night skies are filled with shooting stars. They disappear with sunrise.",
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
            generation: "1",
            height: "2'00\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.5,
            dexEntry: "It flies using the wings on its back to collect moonlight. This Pokémon is difficult to find.",
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
            generation: "1",
            height: "4'03\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.0,
            dexEntry: "Its hearing is so acute it can hear a pin drop over a half a mile. It lives on quiet mountains.",
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
            generation: "4",
            height: "1'08\"",
            weight: "4.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 1.9,
            dexEntry: "It keeps rhythm by flicking its tail feathers like a metronome. It imitates human speech.",
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
            generation: "2",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "It plays with others by touching tails and setting off sparks. This appears to be a test of courage.",
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
            generation: "1",
            height: "1'04\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.0,
            dexEntry: "If it looses crackling power from the electrical pouches on its cheeks, it is being wary.",
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
            generation: "1",
            height: "2'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 30.0,
            dexEntry: "It can loose 100,000-volt bursts of electricity, instantly downing foes several times its size.",
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
            generation: "2",
            height: "2'04\"",
            weight: "46.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 21.2,
            dexEntry: "It switches its standing foot so quickly, it can't be seen. It cries at the same time every day.",
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
            generation: "2",
            height: "5'03\"",
            weight: "89.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 40.8,
            dexEntry: "If it flips its head upside down, it's a sign that it is engaged in very complex thinking.",
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
            generation: "4",
            height: "3'03\"",
            weight: "238.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 108.0,
            dexEntry: "It was bound to a fissure in an Odd Keystone as punishment for misdeeds 500 years ago.",
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
            generation: "4",
            height: "2'04\"",
            weight: "45.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 20.5,
            dexEntry: "It once lived in the tropics. To avoid the cold, it lives in caves warmed by geothermal heat.",
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
            generation: "4",
            height: "4'07\"",
            weight: "123.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 56.0,
            dexEntry: "It habitually digs up and hoards gems in its nest. Its loot is constantly targeted by thieves.",
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
            generation: "4",
            height: "6'03\"",
            weight: "209.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 95.0,
            dexEntry: "It flies at speeds equal to a jet fighter plane. It never allows its prey to escape.",
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
            generation: "4",
            height: "2'00\"",
            weight: "231.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 105.0,
            dexEntry: "It hides food under its long body hair. However, it forgets it has hidden the food.",
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
            generation: "1",
            height: "6'11\"",
            weight: "1041.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 460.0,
            dexEntry: "It stops eating only to sleep. It doesn't feel full unless it eats nearly 900 pounds a day.",
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
            generation: "2",
            height: "1'08\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.0,
            dexEntry: "They seem to communicate among each other telepathically. They are always found stuck on walls.",
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
            generation: "4",
            height: "2'04\"",
            weight: "44.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 20.2,
            dexEntry: "Its body is little yet powerful. It can crest three mountains and cross two canyons in one night.",
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
            generation: "4",
            height: "3'11\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 54.0,
            dexEntry: "By catching the Aura emanating from others, it can read their thoughts and movements.",
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
            generation: "2",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "When the temperature cools in the evening, they emerge from water to seek food along the shore.",
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
            generation: "2",
            height: "4'07\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 75.0,
            dexEntry: "A dim-witted Pokémon. It doesn't care if it bumps its head into boats or rocks while swimming.",
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
            generation: "3",
            height: "2'00\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.5,
            dexEntry: "Catching sea winds with its long wings, it soars as if it were a glider. It folds its wings to rest.",
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
            generation: "3",
            height: "3'11\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 28.0,
            dexEntry: "It acts as a delivery service by carrying small Pokémon in its bill. It bobs on the waves to rest.",
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
            generation: "2",
            height: "4'11\"",
            weight: "91.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 41.5,
            dexEntry: "While it sleeps, the head on its tail keeps watch. The tail doesn't need to sleep.",
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
            generation: "4",
            height: "2'07\"",
            weight: "109.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 49.5,
            dexEntry: "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.",
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
            generation: "4",
            height: "6'07\"",
            weight: "661.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 300.0,
            dexEntry: "Its huge mouth is almost seven feet across. It has enough power to completely crush a car.",
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
            generation: "3",
            height: "0'08\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.0,
            dexEntry: "Its tail is filled with nutrients necessary for growth. It plays by bouncing on its tail.",
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
            generation: "2",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "The tip of its tail is filled with oil that is lighter than water, so it acts as a float.",
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
            generation: "2",
            height: "2'07\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 28.5,
            dexEntry: "Its long ears are superb sensors. It can distinguish the movements of living things on riverbeds.",
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
            generation: "4",
            height: "2'07\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 12.0,
            dexEntry: "It lives in arid lands. It buries itself in sand and lies in wait for unsuspecting prey.",
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
            generation: "4",
            height: "4'03\"",
            weight: "135.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 61.5,
            dexEntry: "Its body is encased in a sturdy shell. Its head rotates 180 degrees, eliminating blind spots.",
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
            generation: "4",
            height: "2'04\"",
            weight: "50.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 23.0,
            dexEntry: "Inflating its poison sacs, it makes an eerie blubbering sound for intimidation.",
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
            generation: "4",
            height: "4'03\"",
            weight: "97.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 44.4,
            dexEntry: "The toxin made in its poison sacs is pumped to the knuckle claws through tubes down its arms.",
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
            generation: "4",
            height: "4'07\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 27.0,
            dexEntry: "Hanging from branches using its tentacles, it looks like a plant. It awaits prey, mouth wide open.",
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
            generation: "2",
            height: "2'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.0,
            dexEntry: "It clings to Mantine to feed on the big Pokémon's scraps. This is an adaptation to avoid foes.",
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
            generation: "2",
            height: "2'11\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 28.5,
            dexEntry: "It obscures its foe's vision by spitting a cloud of murky ink. It makes its nest among boulders.",
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
            generation: "4",
            height: "1'04\"",
            weight: "15.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.0,
            dexEntry: "The way its two tail fins flutter while it swims has earned it the nickname \"Beautifly of the Sea.\"",
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
            generation: "4",
            height: "3'11\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 24.0,
            dexEntry: "To avoid detection by predators, it crawls along the seafloor using the two fins on its chest.",
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
            generation: "1",
            height: "2'11\"",
            weight: "100.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 45.5,
            dexEntry: "It drifts in sea currents. Countless fishermen are hurt by its poison stingers.",
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
            generation: "1",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "It alerts others to danger by stridently flashing the red orbs on its head.",
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
            generation: "3",
            height: "2'00\"",
            weight: "16.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.4,
            dexEntry: "It eats anything, so it can even live in polluted streams and lakes. No one pays any attention to it.",
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
            generation: "3",
            height: "20'04\"",
            weight: "357.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 6.2,
            metricWeight: 162.0,
            dexEntry: "It is the world's most beautiful Pokémon. There are many works of art featuring Milotic.",
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
            generation: "4",
            height: "3'03\"",
            weight: "143.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 65.0,
            dexEntry: "Scientists discovered that the distinctive patterns on its back differ by region.",
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
            generation: "2",
            height: "6'11\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 220.0,
            dexEntry: "It swims elegantly, mindless of Remoraid hitching on to its broad fins. It has a docile nature.",
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
            generation: "4",
            height: "3'03\"",
            weight: "111.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 50.5,
            dexEntry: "In the spring, it grows berries with the texture of frozen treats around its belly.",
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
            generation: "4",
            height: "7'03\"",
            weight: "298.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 135.5,
            dexEntry: "It blankets wide areas in snow by whipping up blizzards. It is also known as \"The Ice Monster.\"",
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
            generation: "2",
            height: "2'11\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 28.0,
            dexEntry: "It is extremely vicious and will not stop attacking until its foe is incapable of moving.",
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
            generation: "4",
            height: "3'07\"",
            weight: "75.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 34.0,
            dexEntry: "It sends signals to others by carving odd patterns in frost-covered trees and ice.",
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
            generation: "4",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "It is said that its emergence gave humans the intelligence to improve their quality of life.",
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
            generation: "4",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "Although it slumbers at the bottom of the lake, its spirit is said to leave its body and flitter on the water surface.",
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
            generation: "4",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "It is thought that Uxie, Mesprit and Azelf all came from the same egg.",
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
            generation: "4",
            height: "17'09\"",
            weight: "1505.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 5.4,
            metricWeight: 683.0,
            dexEntry: "A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.",
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
            generation: "4",
            height: "13'09\"",
            weight: "740.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.2,
            metricWeight: 336.0,
            dexEntry: "It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology.",
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
            generation: "4",
            height: "1'00\"",
            weight: "3.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.4,
            dexEntry: "Water makes up 80% of its body. This Pokémon is easily affected by its environment.",
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
            else if (pocketMonster.generation === "9"){
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