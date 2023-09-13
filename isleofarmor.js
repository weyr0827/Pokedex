//Isle of Armor Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Slowpoke",
            imageUrl: "forms/079Slowpoke-Galar.png",
            number: "001",
            type: ["Psychic"],
            category: "Dopey",
            region: "Kanto",
            generation: "01",
            height: "3'11\"",
            weight: "79.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 36.0,
            dexEntry: "Although this Pokémon is normally zoned out, its expression abruptly sharpens on occasion. The cause for this seems to lie in Slowpoke's diet.",
            cryUrl: "cries/formCries/079-Galar.mp3",
            japaneseName: "Yadon"
        },
        {
            name: "Slowbro",
            imageUrl: "forms/080Slowbro-Galar.png",
            number: "002",
            type: ["Poison", "Psychic"],
            category: "Hermit Crab",
            region: "Kanto",
            generation: "01",
            height: "5'03\"",
            weight: "155.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 70.5,
            dexEntry: "A Shellder bite set off a chemical reaction with the spices inside Slowbro's body, causing Slowbro to become a Poison-type Pokémon.",
            cryUrl: "cries/080.mp3",
            japaneseName: "Yadoran"
        },
        {
            name: "Slowking",
            imageUrl: "forms/199Slowking-Galar.png",
            number: "003",
            type: ["Poison", "Psychic"],
            category: "Hexpert",
            region: "Johto",
            generation: "02",
            height: "5'11\"",
            weight: "175.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 79.5,
            dexEntry: "A combination of toxins and the shock of evolving has increased Shellder's intelligence to the point that Shellder now controls Slowking.",
            cryUrl: "cries/199.mp3",
            japaneseName: "Yadoking"
        },
        {
            name: "Buneary",
            imageUrl: "images/427Buneary.png",
            number: "004",
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
            dexEntry: "If both of Buneary's ears are rolled up, something is wrong with its body or mind. It's a sure sign the Pokémon is in need of care.",
            cryUrl: "cries/427.mp3",
            japaneseName: "Mimirol"
        },
        {
            name: "Lopunny",
            imageUrl: "images/428Lopunny.png",
            number: "005",
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
            dexEntry: "Lopunny is constantly monitoring its surroundings. If dangers approaches, this Pokémon responds with superdestructive kicks.",
            cryUrl: "cries/428.mp3",
            japaneseName: "Mimilop"
        },
        {
            name: "Happiny",
            imageUrl: "images/440Happiny.png",
            number: "006",
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
            dexEntry: "Mimicking Chansey, Happiny will place an egg-shaped stone in its belly pouch. Happiny will treasure this stone.",
            cryUrl: "cries/440.mp3",
            japaneseName: "Pinpuku"
        },
        {
            name: "Chansey",
            imageUrl: "images/113Chansey.png",
            number: "007",
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
            dexEntry: "The egg Chansey carries is not only delicious but also packed with nutrition. It's used as a high-class cooking ingredient.",
            cryUrl: "cries/113.mp3",
            japaneseName: "Lucky"
        },
        {
            name: "Blissey",
            imageUrl: "images/242Blissey.png",
            number: "008",
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
            dexEntry: "Whenever a Blissey finds a weakened Pokémon, it will share its egg and offer its care until the other Pokémon is all better.",
            cryUrl: "cries/242.mp3",
            japaneseName: "Happinas"
        },
        {
            name: "Skwovet",
            imageUrl: "images/819Skwovet.png",
            number: "009",
            type: ["Normal"],
            category: "Cheeky",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.5,
            dexEntry: "Found throughout the Galar region, this Pokémon becomes uneasy if its cheeks are ever completely empty of berries.",
            cryUrl: "cries/819.mp3",
            japaneseName: "Hoshigarisu"
        },
        {
            name: "Greedent",
            imageUrl: "images/820Greedent.png",
            number: "010",
            type: ["Normal"],
            category: "Greedy",
            region: "Galar",
            generation: "08",
            height: "2'00\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 6.0,
            dexEntry: "It stashes berries in its tail—so many berries that they fall out constantly. But this Pokémon is a bit slow-witted, so it doesn't notice the loss.",
            cryUrl: "cries/820.mp3",
            japaneseName: "Yokubarisu"
        },
        {
            name: "Igglybuff",
            imageUrl: "images/174Igglybuff.png",
            number: "011",
            type: ["Normal", "Fairy"],
            category: "Balloon",
            region: "Johto",
            generation: "02",
            height: "1'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.0,
            dexEntry: "Igglybuff loves to sing. Its marshmallow-like body gives off a faint sweet smell.",
            cryUrl: "cries/174.mp3",
            japaneseName: "Pupurin"
        },
        {
            name: "Jigglypuff",
            imageUrl: "images/039Jigglypuff.png",
            number: "012",
            type: ["Normal", "Fairy"],
            category: "Balloon",
            region: "Kanto",
            generation: "01",
            height: "1'08\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.5,
            dexEntry: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It won't stop singing its lullabies until its foes fall asleep.",
            cryUrl: "cries/039.mp3",
            japaneseName: "Purin"
        },
        {
            name: "Wigglytuff",
            imageUrl: "images/040Wigglytuff.png",
            number: "013",
            type: ["Normal", "Fairy"],
            category: "Balloon",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 12.0,
            dexEntry: "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.",
            cryUrl: "cries/040.mp3",
            japaneseName: "Pukurin"
        },
        {
            name: "Blipbug",
            imageUrl: "images/824Blipbug.png",
            number: "014",
            type: ["Bug"],
            category: "Larva",
            region: "Galar",
            generation: "08",
            height: "1'04\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.0,
            dexEntry: "A constant collector of information, this Pokémon is very smart. Very strong is what it isn't.",
            cryUrl: "cries/824.mp3",
            japaneseName: "Sacchimushi"
        },
        {
            name: "Dottler",
            imageUrl: "images/825Dottler.png",
            number: "015",
            type: ["Bug", "Psychic"],
            category: "Radome",
            region: "Galar",
            generation: "08",
            height: "1'04\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 19.5,
            dexEntry: "It barely moves, but it's still alive. Hiding in its shell without food or water seems to have awakened its psychic powers.",
            cryUrl: "cries/825.mp3",
            japaneseName: "Redomushi"
        },
        {
            name: "Orbeetle",
            imageUrl: "images/826Orbeetle.png",
            number: "016",
            type: ["Bug", "Psychic"],
            category: "Seven Spot",
            region: "Galar",
            generation: "08",
            height: "1'04\"",
            weight: "89.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 40.8,
            dexEntry: "It's famous for its high level of intelligence, and the large size of its brain is proof that it also possesses immense psychic power.",
            cryUrl: "cries/826.mp3",
            japaneseName: "Eolb"
        },
        {
            name: "Fomantis",
            imageUrl: "images/753Fomantis.png",
            number: "017",
            type: ["Grass"],
            category: "Sickle Grass",
            region: "Alola",
            generation: "07",
            height: "1'00\"",
            weight: "3.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.5,
            dexEntry: "When bathed in sunlight, this Pokémon emits a pleasantly sweet scent, which causes bug Pokémon to gather around it.",
            cryUrl: "cries/753.mp3",
            japaneseName: "Karikiri"
        },
        {
            name: "Lurantis",
            imageUrl: "images/754Lurantis.png",
            number: "018",
            type: ["Grass"],
            category: "Bloom Sickle",
            region: "Alola",
            generation: "07",
            height: "2'11\"",
            weight: "40.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 18.5,
            dexEntry: "This Pokémon resembles a beautiful flower. A properly raised Lurantis will have gorgeous, brilliant colors.",
            cryUrl: "cries/754.mp3",
            japaneseName: "Lalantes"
        },
        {
            name: "Applin",
            imageUrl: "images/840Applin.png",
            number: "019",
            type: ["Grass", "Dragon"],
            category: "Apple Core",
            region: "Galar",
            generation: "08",
            height: "0'08\"",
            weight: "1.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.5,
            dexEntry: "It spends its entire life inside an apple. It hides from its natural enemies, bird Pokémon, by pretending it's just an apple and nothing more.",
            cryUrl: "cries/840.mp3",
            japaneseName: "Kajicchu"
        },
        {
            name: "Flapple",
            imageUrl: "images/841Flapple.png",
            number: "020",
            type: ["Grass", "Dragon"],
            category: "Apple Wing",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.0,
            dexEntry: "It ate a sour apple, and that induced its evolution. In its cheeks, it stores an acid capable of causing chemical burns.",
            cryUrl: "cries/841.mp3",
            japaneseName: "Appryu"
        },
        {
            name: "Appletun",
            imageUrl: "images/842Appletun.png",
            number: "021",
            type: ["Grass", "Dragon"],
            category: "Apple Nectar",
            region: "Galar",
            generation: "08",
            height: "1'04\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 13.0,
            dexEntry: "Eating a sweet apple caused its evolution. A nectarous scent wafts from its body, luring in the bug Pokémon it preys on.",
            cryUrl: "cries/842.mp3",
            japaneseName: "Tarupple"
        },
        {
            name: "Fletchling",
            imageUrl: "images/661Fletchling.png",
            number: "022",
            type: ["Normal", "Flying"],
            category: "Tiny Robin",
            region: "Kalos",
            generation: "06",
            height: "1'00\"",
            weight: "3.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.7,
            dexEntry: "Its melodious cries are actually warnings. Fletchling will mercilessly peck at anything that enters its territory.",
            cryUrl: "cries/661.mp3",
            japaneseName: "Yayakoma"
        },
        {
            name: "Fletchinder",
            imageUrl: "images/662Fletchinder.png",
            number: "023",
            type: ["Fire", "Flying"],
            category: "Ember",
            region: "Kalos",
            generation: "06",
            height: "2'04\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.0,
            dexEntry: "Fletchinder launches embers into the den of its prey. When the prey comes leaping out, Fletchinder's sharp talons finish it off.",
            cryUrl: "cries/662.mp3",
            japaneseName: "Hinoyakoma"
        },
        {
            name: "Talonflame",
            imageUrl: "images/663Talonflame.png",
            number: "024",
            type: ["Fire", "Flying"],
            category: "Scorching",
            region: "Kalos",
            generation: "06",
            height: "3'11\"",
            weight: "54.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 24.5,
            dexEntry: "Talonflame mainly preys upon other bird Pokémon. To intimidate opponents, it sends embers spewing from gaps between its feathers.",
            cryUrl: "cries/663.mp3",
            japaneseName: "Fiarrow"
        },
        {
            name: "Shinx",
            imageUrl: "images/403Shinx.png",
            number: "025",
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
            dexEntry: "This Pokémon generates electricity by contracting its muscles. Excited trembling is a sign that Shinx is generating a tremendous amount of electricity.",
            cryUrl: "cries/403.mp3",
            japaneseName: "Kolink"
        },
        {
            name: "Luxio",
            imageUrl: "images/404Luxio.png",
            number: "026",
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
            dexEntry: "By joining its tail with that of another Luxio, this Pokémon can receive some of the other Luxio's electricity and power up its own electric blasts.",
            cryUrl: "cries/404.mp3",
            japaneseName: "Luxio"
        },
        {
            name: "Luxray",
            imageUrl: "images/405Luxray.png",
            number: "027",
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
            dexEntry: "Luxray can see through solid objects. It will instantly spot prey trying to hide behind walls, even if the walls are thick.",
            cryUrl: "cries/405.mp3",
            japaneseName: "Rentorar"
        },
        {
            name: "Klefki",
            imageUrl: "images/707Klefki.png",
            number: "028",
            type: ["Steel", "Fairy"],
            category: "Key Ring",
            region: "Kalos",
            generation: "06",
            height: "0'08\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 3.0,
            dexEntry: "This Pokémon is constantly collecting keys. Entrust a Klefki with important keys, and the Pokémon will protect them no matter what.",
            cryUrl: "cries/707.mp3",
            japaneseName: "Cleffy"
        },
        {
            name: "Pawniard",
            imageUrl: "images/624Pawniard.png",
            number: "029",
            type: ["Dark", "Steel"],
            category: "Sharp Blade",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "22.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.2,
            dexEntry: "It uses river stones to maintain the cutting edges of the blades covering its body. These sharpened blades allow it to bring down opponents.",
            cryUrl: "cries/624.mp3",
            japaneseName: "Komatana"
        },
        {
            name: "Bisharp",
            imageUrl: "images/625Bisharp.png",
            number: "030",
            type: ["Dark", "Steel"],
            category: "Sword Blade",
            region: "Unova",
            generation: "05",
            height: "5'03\"",
            weight: "154.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 70.0,
            dexEntry: "It's accompanied by a large retinue of Pawniard. Bisharp keeps a keen eye on its minions, ensuring none of them even think of double-crossing it.",
            cryUrl: "cries/625.mp3",
            japaneseName: "Kirikizan"
        },
        {
            name: "Abra",
            imageUrl: "images/063Abra.png",
            number: "031",
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
            dexEntry: "This Pokémon uses its psychic powers while it sleeps. The contents of Abra's dreams affect the powers that the Pokémon wields.",
            cryUrl: "cries/063.mp3",
            japaneseName: "Casey"
        },
        {
            name: "Kadabra",
            imageUrl: "images/064Kadabra.png",
            number: "032",
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
            dexEntry: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
            cryUrl: "cries/064.mp3",
            japaneseName: "Yungerer"
        },
        {
            name: "Alakazam",
            imageUrl: "images/065Alakazam.png",
            number: "033",
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
            dexEntry: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
            cryUrl: "cries/065.mp3",
            japaneseName: "Foodin"
        },
        {
            name: "Ralts",
            imageUrl: "images/280Ralts.png",
            number: "034",
            type: ["Psychic", "Fairy"],
            category: "Feeling",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.6,
            dexEntry: "It is highly attuned to the emotions of people and Pokémon. It hides if it senses hostility.",
            cryUrl: "cries/280.mp3",
            japaneseName: "Ralts"
        },
        {
            name: "Kirlia",
            imageUrl: "images/281Kirlia.png",
            number: "035",
            type: ["Psychic", "Fairy"],
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
            number: "036",
            type: ["Psychic", "Fairy"],
            category: "Embrace",
            region: "Hoenn",
            generation: "03",
            height: "5'03\"",
            weight: "106.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 48.4,
            dexEntry: "It has the power to predict the future. Its power peaks when it is protecting its Trainer.",
            cryUrl: "cries/282.mp3",
            japaneseName: "Sirnight"
        },
        {
            name: "Gallade",
            imageUrl: "images/475Gallade.png",
            number: "037",
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
            dexEntry: "True to its honorable-warrior image, it uses the blades on its elbows only in defense of something or someone.",
            cryUrl: "cries/475.mp3",
            japaneseName: "Erureido"
        },
        {
            name: "Krabby",
            imageUrl: "images/098Krabby.png",
            number: "038",
            type: ["Water"],
            category: "River Crab",
            region: "Kanto",
            generation: "01",
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
            number: "039",
            type: ["Water"],
            category: "Pincer",
            region: "Kanto",
            generation: "01",
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
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "040",
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
            dexEntry: "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "041",
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
            dexEntry: "When the red orbs on Tentacruel's head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "042",
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
            dexEntry: "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "043",
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
            dexEntry: "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Remoraid",
            imageUrl: "images/223Remoraid.png",
            number: "044",
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
            dexEntry: "The water they shoot from their mouths can hit moving prey from more than 300 feet away.",
            cryUrl: "cries/223.mp3",
            japaneseName: "Teppouo"
        },
        {
            name: "Octillery",
            imageUrl: "images/224Octillery.png",
            number: "045",
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
            dexEntry: "It has a tendency to want to be in holes. It prefers rock crags or pots and sprays ink from them before attacking.",
            cryUrl: "cries/224.mp3",
            japaneseName: "Okutank"
        },
        {
            name: "Mantyke",
            imageUrl: "images/458Mantyke.png",
            number: "046",
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
            dexEntry: "Mantyke living in Galar seem to be somewhat sluggish. The colder waters of the seas in this region may be the cause.",
            cryUrl: "cries/458.mp3",
            japaneseName: "Tamanta"
        },
        {
            name: "Mantine",
            imageUrl: "images/226Mantine.png",
            number: "047",
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
            dexEntry: "If it builds up enough speed swimming, it can jump out above the waves and glide for over 300 feet.",
            cryUrl: "cries/226.mp3",
            japaneseName: "Mantain"
        },
        {
            name: "Wingull",
            imageUrl: "images/278Wingull.png",
            number: "048",
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
            dexEntry: "It makes its nest on sheer cliffs. Riding the sea breeze, it glides up into the expansive skies.",
            cryUrl: "cries/278.mp3",
            japaneseName: "Camome"
        },
        {
            name: "Pelipper",
            imageUrl: "images/279Pelipper.png",
            number: "049",
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
            name: "Skorupi",
            imageUrl: "images/451Skorupi.png",
            number: "050",
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
            dexEntry: "After burrowing into the sand, it waits patiently for prey to come near. This Pokémon and Sizzlipede share common descent.",
            cryUrl: "cries/451.mp3",
            japaneseName: "Scorupi"
        },
        {
            name: "Drapion",
            imageUrl: "images/452Drapion.png",
            number: "051",
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
            dexEntry: "Its poison is potent, but it rarely sees use. This Pokémon prefers to use physical force instead, going on rampages with its car-crushing strength.",
            cryUrl: "cries/452.mp3",
            japaneseName: "Dorapion"
        },
        {
            name: "Dunsparce",
            imageUrl: "images/206Dunsparce.png",
            number: "052",
            type: ["Normal"],
            category: "Land Snake",
            region: "Johto",
            generation: "02",
            height: "4'11\"",
            weight: "30.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 14.0,
            dexEntry: "This Pokémon's tiny wings have some scientists saying that Dunsparce used to fly through the sky in ancient times.",
            cryUrl: "cries/206.mp3",
            japaneseName: "Nokocchi"
        },
        {
            name: "Bouffalant",
            imageUrl: "images/626Bouffalant.png",
            number: "053",
            type: ["Normal"],
            category: "Bash Buffalo",
            region: "Unova",
            generation: "05",
            height: "5'03\"",
            weight: "208.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 94.5,
            dexEntry: "These Pokémon can crush a car with no more than a headbutt. Bouffalant with more hair on their heads hold higher positions within the herd.",
            cryUrl: "cries/626.mp3",
            japaneseName: "Buffron"
        },
        {
            name: "Lickitung",
            imageUrl: "images/108Lickitung.png",
            number: "054",
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
            dexEntry: "If this Pokémon's sticky saliva gets on you and you don't clean it off, an intense itch will set in. The itch won't go away, either.",
            cryUrl: "cries/108.mp3",
            japaneseName: "Beroringa"
        },
        {
            name: "Lickilicky",
            imageUrl: "images/463Lickilicky.png",
            number: "055",
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
            dexEntry: "Lickilicky's strange tongue can stretch to many times the length of its body. No one has figured out how Lickilicky's tongue can stretch so far.",
            cryUrl: "cries/463.mp3",
            japaneseName: "Berobelt"
        },
        {
            name: "Chewtle",
            imageUrl: "images/833Chewtle.png",
            number: "056",
            type: ["Water"],
            category: "Snapping",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 8.5,
            dexEntry: "Apparently the itch of its teething impels it to snap its jaws at anything in front of it.",
            cryUrl: "cries/833.mp3",
            japaneseName: "Kamukame"
        },
        {
            name: "Drednaw",
            imageUrl: "images/834Drednaw.png",
            number: "057",
            type: ["Water", "Rock"],
            category: "Bite",
            region: "Galar",
            generation: "08",
            height: "3'03\"",
            weight: "254.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 115.5,
            dexEntry: "With jaws that can shear through steel rods, this highly aggressive Pokémon chomps down on its unfortunate prey.",
            cryUrl: "cries/834.mp3",
            japaneseName: "Kajirigame"
        },
        {
            name: "Wooper",
            imageUrl: "images/194Wooper.png",
            number: "058",
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
            dexEntry: "This Pokémon lives in cold water. It will leave the water to search for food when it gets cold outside.",
            cryUrl: "cries/194.mp3",
            japaneseName: "Upah"
        },
        {
            name: "Quagsire",
            imageUrl: "images/195Quagsire.png",
            number: "059",
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
            dexEntry: "It has an easygoing nature. It doesn't care if it bumps its head on boats and boulders while swimming.",
            cryUrl: "cries/195.mp3",
            japaneseName: "Nuoh"
        },
        {
            name: "Goomy",
            imageUrl: "images/704Goomy.png",
            number: "060",
            type: ["Dragon"],
            category: "Soft Tissue",
            region: "Kalos",
            generation: "06",
            height: "1'00\"",
            weight: "6.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.8,
            dexEntry: "Because most of its body is water, it will dry up if the weather becomes too arid. It's considered the weakest dragon Pokémon.",
            cryUrl: "cries/704.mp3",
            japaneseName: "Numera"
        },
        {
            name: "Sliggoo",
            imageUrl: "images/705Sliggoo.png",
            number: "061",
            type: ["Dragon"],
            category: "Soft Tissue",
            region: "Kalos",
            generation: "06",
            height: "2'07\"",
            weight: "38.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 17.5,
            dexEntry: "Although this Pokémon isn't very strong, its body is coated in a caustic slime that can melt through anything, so predators steer clear of it.",
            cryUrl: "cries/705.mp3",
            japaneseName: "Numeil"
        },
        {
            name: "Goodra",
            imageUrl: "images/706Goodra.png",
            number: "062",
            type: ["Dragon"],
            category: "Dragon",
            region: "Kalos",
            generation: "06",
            height: "6'07\"",
            weight: "331.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 150.5,
            dexEntry: "Sometimes it misunderstands instructions and appears dazed or bewildered. Many Trainers don't mind, finding this behavior to be adorable.",
            cryUrl: "cries/706.mp3",
            japaneseName: "Numelgon"
        },
        {
            name: "Druddigon",
            imageUrl: "images/621Druddigon.png",
            number: "063",
            type: ["Dragon"],
            category: "Cave",
            region: "Unova",
            generation: "05",
            height: "5'03\"",
            weight: "306.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 139.0,
            dexEntry: "Druddigon lives in caves, but it never skips sunbathing—it won't be able to move if its body gets too cold.",
            cryUrl: "cries/621.mp3",
            japaneseName: "Crimgan"
        },
        {
            name: "Shelmet",
            imageUrl: "images/616Shelmet.png",
            number: "064",
            type: ["Bug"],
            category: "Snail",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "17.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.7,
            dexEntry: "When attacked, it tightly shuts the lid of its shell. This reaction fails to protect it from Karrablast, however, because they can still get into the shell.",
            cryUrl: "cries/616.mp3",
            japaneseName: "Chobomaki"
        },
        {
            name: "Accelgor",
            imageUrl: "images/617Accelgor.png",
            number: "065",
            type: ["Bug"],
            category: "Shell Out",
            region: "Unova",
            generation: "05",
            height: "2'07\"",
            weight: "55.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 25.3,
            dexEntry: "It moves with blinding speed and lobs poison at foes. Featuring Accelgor as a main character is a surefire way to make a movie or comic popular.",
            cryUrl: "cries/617.mp3",
            japaneseName: "Agilder"
        },
        {
            name: "Karrablast",
            imageUrl: "images/588Karrablast.png",
            number: "066",
            type: ["Bug"],
            category: "Clamping",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "13.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.9,
            dexEntry: "Its strange physiology reacts to electrical energy in interesting ways. The presence of a Shelmet will cause this Pokémon to evolve.",
            cryUrl: "cries/588.mp3",
            japaneseName: "Kaburumo"
        },
        {
            name: "Escavalier",
            imageUrl: "images/589Escavalier.png",
            number: "067",
            type: ["Bug", "Steel"],
            category: "Cavalry",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 33.0,
            dexEntry: "They use shells they've stolen from Shelmet to arm and protect themselves. They're very popular Pokémon in the Galar region.",
            cryUrl: "cries/589.mp3",
            japaneseName: "Chevargo"
        },
        {
            name: "Bulbasaur",
            imageUrl: "images/001Bulbasaur.png",
            number: "068",
            type: ["Grass", "Poison"],
            category: "Seed",
            region: "Kanto",
            generation: "01",
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
            number: "069",
            type: ["Grass", "Poison"],
            category: "Seed",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 13.0,
            dexEntry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
            cryUrl: "cries/002.mp3",
            japaneseName: "Fushigisou"
        },
        {
            name: "Venusaur",
            imageUrl: "images/003Venusaur.png",
            number: "070",
            type: ["Grass", "Poison"],
            category: "Seed",
            region: "Kanto",
            generation: "01",
            height: "6'07\"",
            weight: "220.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 100.0,
            dexEntry: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
            cryUrl: "cries/003.mp3",
            japaneseName: "Fushigibana"
        },
        {
            name: "Squirtle",
            imageUrl: "images/007Squirtle.png",
            number: "071",
            type: ["Water"],
            category: "Tiny Turtle",
            region: "Kanto",
            generation: "01",
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
            number: "072",
            type: ["Water"],
            category: "Turtle",
            region: "Kanto",
            generation: "01",
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
            number: "073",
            type: ["Water"],
            category: "Shellfish",
            region: "Kanto",
            generation: "01",
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
            name: "Venipede",
            imageUrl: "images/543Venipede.png",
            number: "074",
            type: ["Bug", "Poison"],
            category: "Centipede",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "11.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.3,
            dexEntry: "Venipede and Sizzlipede are similar species, but when the two meet, a huge fight ensues.",
            cryUrl: "cries/543.mp3",
            japaneseName: "Fushide"
        },
        {
            name: "Whirlipede",
            imageUrl: "images/544Whirlipede.png",
            number: "075",
            type: ["Bug", "Poison"],
            category: "Curlipede",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "129.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 58.5,
            dexEntry: "This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph.",
            cryUrl: "cries/544.mp3",
            japaneseName: "Wheega"
        },
        {
            name: "Scolipede",
            imageUrl: "images/545Scolipede.png",
            number: "076",
            type: ["Bug", "Poison"],
            category: "Megapede",
            region: "Unova",
            generation: "05",
            height: "8'02\"",
            weight: "442.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 200.5,
            dexEntry: "Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claw's toxic spikes.",
            cryUrl: "cries/545.mp3",
            japaneseName: "Pendror"
        },
        {
            name: "Foongus",
            imageUrl: "images/590Foongus.png",
            number: "077",
            type: ["Grass", "Poison"],
            category: "Mushroom",
            region: "Unova",
            generation: "05",
            height: "0'08\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 1.0,
            dexEntry: "No one knows what the Poké Ball-like pattern on Foongus means or why Foongus has it.",
            cryUrl: "cries/590.mp3",
            japaneseName: "Tamagetake"
        },
        {
            name: "Amoonguss",
            imageUrl: "images/591Amoonguss.png",
            number: "078",
            type: ["Grass", "Poison"],
            category: "Mushroom",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.5,
            dexEntry: "This Pokémon puffs poisonous spores at its foes. If the spores aren't washed off quickly, they'll grow into mushrooms wherever they land.",
            cryUrl: "cries/591.mp3",
            japaneseName: "Morobareru"
        },
        {
            name: "Comfey",
            imageUrl: "images/764Comfey.png",
            number: "079",
            type: ["Fairy"],
            category: "Posy Picker",
            region: "Alola",
            generation: "07",
            height: "0'04\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.1,
            metricWeight: 0.3,
            dexEntry: "Comfey picks flowers with its vine and decorates itself with them. For some reason, flowers won't wither once they're attached to a Comfey.",
            cryUrl: "cries/764.mp3",
            japaneseName: "Cuwawa"
        },
        {
            name: "Tangela",
            imageUrl: "images/114Tangela.png",
            number: "080",
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
            dexEntry: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
            cryUrl: "cries/114.mp3",
            japaneseName: "Monjara"
        },
        {
            name: "Tangrowth",
            imageUrl: "images/465Tangrowth.png",
            number: "081",
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
            dexEntry: "Tangrowth has two arms that it can extend as it pleases. Recent research has shown that these arms are, in fact, bundles of vines.",
            cryUrl: "cries/465.mp3",
            japaneseName: "Mojumbo"
        },
        {
            name: "Croagunk",
            imageUrl: "images/453Croagunk.png",
            number: "082",
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
            dexEntry: "It makes frightening noises with its poison-filled cheek sacs. When opponents flinch, Croagunk hits them with a poison jab.",
            cryUrl: "cries/453.mp3",
            japaneseName: "Gureggru"
        },
        {
            name: "Toxicroak",
            imageUrl: "images/454Toxicroak.png",
            number: "083",
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
            dexEntry: "It bounces toward opponents and gouges them with poisonous claws. No more than a scratch is needed to knock out its adversaries.",
            cryUrl: "cries/454.mp3",
            japaneseName: "Dokurog"
        },
        {
            name: "Pichu",
            imageUrl: "images/172Pichu.png",
            number: "084",
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
            dexEntry: "Despite its small size, it can zap even adult humans. However, if it does so, it also surprises itself.",
            cryUrl: "cries/172.mp3",
            japaneseName: "Pichu"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "085",
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
            dexEntry: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "086",
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
            dexEntry: "Its long tail serves as a ground to protect itself from its own high-voltage power.",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Zorua",
            imageUrl: "images/570Zorua.png",
            number: "087",
            type: ["Dark"],
            category: "Tricky Fox",
            region: "Unova",
            generation: "05",
            height: "2'04\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 12.5,
            dexEntry: "Zorua is a timid Pokémon. This disposition seems to be what led to the development of Zorua's ability to take on the forms of other creatures.",
            cryUrl: "cries/570.mp3",
            japaneseName: "Zorua"
        },
        {
            name: "Zoroark",
            imageUrl: "images/571Zoroark.png",
            number: "088",
            type: ["Dark"],
            category: "Illusion Fox",
            region: "Unova",
            generation: "05",
            height: "5'03\"",
            weight: "178.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 81.1,
            dexEntry: "This Pokémon cares deeply about others of its kind, and it will conjure terrifying illusions to keep its den and pack safe.",
            cryUrl: "cries/571.mp3",
            japaneseName: "Zoroark"
        },
        {
            name: "Oranguru",
            imageUrl: "images/765Oranguru.png",
            number: "089",
            type: ["Normal", "Psychic"],
            category: "Sage",
            region: "Alola",
            generation: "07",
            height: "4'11\"",
            weight: "167.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 76.0,
            dexEntry: "With waves of its fan—made from leaves and its own fur—Oranguru skillfully gives instructions to other Pokémon.",
            cryUrl: "cries/765.mp3",
            japaneseName: "Yareyuutan"
        },
        {
            name: "Passimian",
            imageUrl: "images/766Passimian.png",
            number: "090",
            type: ["Fighting"],
            category: "Teamwork",
            region: "Alola",
            generation: "07",
            height: "6'07\"",
            weight: "182.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 82.8,
            dexEntry: "Displaying amazing teamwork, they follow the orders of their boss as they all help out in the search for their favorite berries.",
            cryUrl: "cries/766.mp3",
            japaneseName: "Nagetukesaru"
        },
        {
            name: "Corphish",
            imageUrl: "images/341Corphish.png",
            number: "091",
            type: ["Water"],
            category: "Ruffian",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.5,
            dexEntry: "No matter how dirty the water in the river, it will adapt and thrive. It has a strong will to survive.",
            cryUrl: "cries/341.mp3",
            japaneseName: "Heigani"
        },
        {
            name: "Crawdaunt",
            imageUrl: "images/342Crawdaunt.png",
            number: "092",
            type: ["Water", "Dark"],
            category: "Rogue",
            region: "Hoenn",
            generation: "03",
            height: "3'07\"",
            weight: "72.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 32.8,
            dexEntry: "A rough customer that wildly flails its giant claws. It is said to be extremely hard to raise.",
            cryUrl: "cries/342.mp3",
            japaneseName: "Shizariger"
        },
        {
            name: "Cramorant",
            imageUrl: "images/845Cramorant.png",
            number: "093",
            type: ["Flying", "Water"],
            category: "Gulp",
            region: "Galar",
            generation: "08",
            height: "2'07\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 18.0,
            dexEntry: "It's so strong that it can knock out some opponents in a single hit, but it also may forget what it's battling midfight.",
            cryUrl: "cries/845.mp3",
            japaneseName: "Uu"
        },
        {
            name: "Goldeen",
            imageUrl: "images/118Goldeen.png",
            number: "094",
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
            dexEntry: "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
            cryUrl: "cries/118.mp3",
            japaneseName: "Tosakinto"
        },
        {
            name: "Seaking",
            imageUrl: "images/119Seaking.png",
            number: "095",
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
            name: "Arrokuda",
            imageUrl: "images/846Arrokuda.png",
            number: "096",
            type: ["Water"],
            category: "Rush",
            region: "Galar",
            generation: "08",
            height: "1'08\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 1.0,
            dexEntry: "If it sees any movement around it, this Pokémon charges for it straightaway, leading with its sharply pointed jaw. It's very proud of that jaw.",
            cryUrl: "cries/846.mp3",
            japaneseName: "Sasikamasu"
        },
        {
            name: "Barraskewda",
            imageUrl: "images/847Barraskewda.png",
            number: "097",
            type: ["Water"],
            category: "Skewer",
            region: "Galar",
            generation: "08",
            height: "4'03\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 30.0,
            dexEntry: "This Pokémon has a jaw that's as sharp as a spear and as strong as steel. Apparently Barraskewda's flesh is surprisingly tasty, too.",
            cryUrl: "cries/847.mp3",
            japaneseName: "Kamasujaw"
        },
        {
            name: "Staryu",
            imageUrl: "images/120Staryu.png",
            number: "098",
            type: ["Water"],
            category: "Star Shape",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "76.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 34.5,
            dexEntry: "If you visit a beach at the end of summer, you'll be able to see groups of Staryu lighting up in a steady rhythm.",
            cryUrl: "cries/120.mp3",
            japaneseName: "Hitodeman"
        },
        {
            name: "Starmie",
            imageUrl: "images/121Starmie.png",
            number: "099",
            type: ["Water", "Psychic"],
            category: "Mysterious",
            region: "Kanto",
            generation: "01",
            height: "3'07\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 80.0,
            dexEntry: "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.",
            cryUrl: "cries/121.mp3",
            japaneseName: "Starmie"
        },
        {
            name: "Kubfu",
            imageUrl: "images/891Kubfu.png",
            number: "100",
            type: ["Fighting"],
            category: "Wushu",
            region: "Galar",
            generation: "08",
            height: "2'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.0,
            dexEntry: "Kubfu trains hard to perfect its moves. The moves it masters will determine which form it takes when it evolves.",
            cryUrl: "cries/891.mp3",
            japaneseName: "Dakuma"
        },
        {
            name: "Urshifu",
            imageUrl: "images/892Urshifu.png",
            number: "101",
            type: ["Fighting", "Dark"],
            category: "Wushu",
            region: "Galar",
            generation: "08",
            height: "6'03\"",
            weight: "231.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 105.0,
            dexEntry: "This form of Urshifu is a strong believer in the one-hit KO. Its strategy is to leap in close to foes and land a devastating blow with a hardened fist.",
            cryUrl: "cries/892.mp3",
            japaneseName: "Wulaosu"
        },
        {
            name: "Emolga",
            imageUrl: "images/587Emolga.png",
            number: "102",
            type: ["Electric", "Flying"],
            category: "Sky Squirrel",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.0,
            dexEntry: "As Emolga flutters through the air, it crackles with electricity. This Pokémon is cute, but it can cause a lot of trouble.",
            cryUrl: "cries/587.mp3",
            japaneseName: "Emonga"
        },
        {
            name: "Dedenne",
            imageUrl: "images/702Dedenne.png",
            number: "103",
            type: ["Electric", "Fairy"],
            category: "Antenna",
            region: "Kalos",
            generation: "06",
            height: "0'08\"",
            weight: "4.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.2,
            dexEntry: "A Dedenne's whiskers pick up electrical waves other Dedenne send out. These Pokémon share locations of food or electricity with one another.",
            cryUrl: "cries/702.mp3",
            japaneseName: "Dedenne"
        },
        {
            name: "Morpeko",
            imageUrl: "images/877Morpeko.png",
            number: "104",
            type: ["Electric", "Dark"],
            category: "Two-Sided",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.0,
            dexEntry: "As it eats the seeds stored up in its pocket-like pouches, this Pokémon is not just satisfying its constant hunger. It's also generating electricity.",
            cryUrl: "cries/877.mp3",
            japaneseName: "Morpeko"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "105",
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
            dexEntry: "At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it'll start moving again.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "106",
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
            dexEntry: "This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Magnezone",
            imageUrl: "images/462Magnezone.png",
            number: "107",
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
            dexEntry: "Some say that Magnezone receives signals from space via the antenna on its head and that it's being controlled by some mysterious being.",
            cryUrl: "cries/462.mp3",
            japaneseName: "Jibacoil"
        },
        {
            name: "Inkay",
            imageUrl: "images/686Inkay.png",
            number: "108",
            type: ["Dark", "Psychic"],
            category: "Revolving",
            region: "Kalos",
            generation: "06",
            height: "1'04\"",
            weight: "7.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 3.5,
            dexEntry: "It spins while making its luminescent spots flash. These spots allow it to communicate with others by using different patterns of light.",
            cryUrl: "cries/686.mp3",
            japaneseName: "Maaiika"
        },
        {
            name: "Malamar",
            imageUrl: "images/687Malamar.png",
            number: "109",
            type: ["Dark", "Psychic"],
            category: "Overturning",
            region: "Kalos",
            generation: "06",
            height: "4'11\"",
            weight: "103.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 47.0,
            dexEntry: "Gazing at its luminescent spots will quickly induce a hypnotic state, putting the observer under Malamar's control.",
            cryUrl: "cries/687.mp3",
            japaneseName: "Calamanero"
        },
        {
            name: "Wishiwashi",
            imageUrl: "images/746Wishiwashi.png",
            number: "110",
            type: ["Water"],
            category: "Small Fry",
            region: "Alola",
            generation: "07",
            height: "0'08\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.3,
            dexEntry: "Individually, they're incredibly weak. It's by gathering up into schools that they're able to confront opponents.",
            cryUrl: "cries/746.mp3",
            japaneseName: "Yowashi"
        },
        {
            name: "Carvanha",
            imageUrl: "images/318Carvanha.png",
            number: "111",
            type: ["Water", "Dark"],
            category: "Savage",
            region: "Hoenn",
            generation: "03",
            height: "2'07\"",
            weight: "45.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.8,
            dexEntry: "It won't attack while it's alone—not even if it spots prey. Instead, it waits for other Carvanha to join it, and then the Pokémon attack as a group.",
            cryUrl: "cries/318.mp3",
            japaneseName: "Kibanha"
        },
        {
            name: "Sharpedo",
            imageUrl: "images/319Sharpedo.png",
            number: "112",
            type: ["Water", "Dark"],
            category: "Brutal",
            region: "Hoenn",
            generation: "03",
            height: "5'11\"",
            weight: "195.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 88.8,
            dexEntry: "As soon as it catches the scent of its prey, Sharpedo will jet seawater from its backside, hurtling toward the target to attack at 75 mph.",
            cryUrl: "cries/319.mp3",
            japaneseName: "Samehader"
        },
        {
            name: "Lillipup",
            imageUrl: "images/506Lillipup.png",
            number: "113",
            type: ["Normal"],
            category: "Puppy",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "9.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.1,
            dexEntry: "This Pokémon is courageous but also cautious. It uses the soft fur covering its face to collect information about it surroundings.",
            cryUrl: "cries/506.mp3",
            japaneseName: "Yorterrie"
        },
        {
            name: "Herdier",
            imageUrl: "images/507Herdier.png",
            number: "114",
            type: ["Normal"],
            category: "Loyal Dog",
            region: "Unova",
            generation: "05",
            height: "2'11\"",
            weight: "32.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 14.7,
            dexEntry: "Herdier is a very smart and friendly Pokémon. So much so that there's a theory that Herdier was the first Pokémon to partner with people.",
            cryUrl: "cries/507.mp3",
            japaneseName: "Herderrie"
        },
        {
            name: "Stoutland",
            imageUrl: "images/508Stoutland.png",
            number: "115",
            type: ["Normal"],
            category: "Big-Hearted",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "134.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 61.0,
            dexEntry: "These Pokémon seem to enjoy living with humans. Even a Stoutland caught in the wild will warm up to people in about three days.",
            cryUrl: "cries/508.mp3",
            japaneseName: "Mooland"
        },
        {
            name: "Tauros",
            imageUrl: "images/128Tauros.png",
            number: "116",
            type: ["Normal"],
            category: "Wild Bull",
            region: "Kanto",
            generation: "01",
            height: "4'07\"",
            weight: "194.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 88.4,
            dexEntry: "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed.",
            cryUrl: "cries/128.mp3",
            japaneseName: "Kentauros"
        },
        {
            name: "Miltank",
            imageUrl: "images/241Miltank.png",
            number: "117",
            type: ["Normal"],
            category: "Milk Cow",
            region: "Johto",
            generation: "02",
            height: "3'11\"",
            weight: "166.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 75.5,
            dexEntry: "Miltank produces highly nutritious milk, so it's been supporting the lives of people and other Pokémon since ancient times.",
            cryUrl: "cries/241.mp3",
            japaneseName: "Miltank"
        },
        {
            name: "Scyther",
            imageUrl: "images/123Scyther.png",
            number: "118",
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
            dexEntry: "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.",
            cryUrl: "cries/123.mp3",
            japaneseName: "Strike"
        },
        {
            name: "Scizor",
            imageUrl: "images/212Scizor.png",
            number: "119",
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
            dexEntry: "Bulky pincers account for one third of Scizor's body weight. A single swing of one of these pincers will crush a boulder completely.",
            cryUrl: "cries/212.mp3",
            japaneseName: "Hassam"
        },
        {
            name: "Pinsir",
            imageUrl: "images/127Pinsir.png",
            number: "120",
            type: ["Bug"],
            category: "Stag Beetle",
            region: "Kanto",
            generation: "01",
            height: "4'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 55.0,
            dexEntry: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
            cryUrl: "cries/127.mp3",
            japaneseName: "Kailios"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "121",
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
            dexEntry: "Heracross loves sweet sap and will go looking through forests for it. The Pokémon uses its two antennae to pick up scents as it searches.",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Dwebble",
            imageUrl: "images/557Dwebble.png",
            number: "122",
            type: ["Bug", "Rock"],
            category: "Rock Inn",
            region: "Unova",
            generation: "05",
            height: "1'00\"",
            weight: "32.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 14.5,
            dexEntry: "When it finds a stone appealing, it creates a hole inside it and uses it as its home. This Pokémon is the natural enemy of Roggenrola and Rolycoly.",
            cryUrl: "cries/557.mp3",
            japaneseName: "Ishizumai"
        },
        {
            name: "Crustle",
            imageUrl: "images/558Crustle.png",
            number: "123",
            type: ["Bug", "Rock"],
            category: "Stone Home",
            region: "Unova",
            generation: "05",
            height: "4'07\"",
            weight: "440.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 200.0,
            dexEntry: "This highly territorial Pokémon prefers dry climates. It won't come out of its boulder on rainy days.",
            cryUrl: "cries/558.mp3",
            japaneseName: "Iwapalace"
        },
        {
            name: "Wimpod",
            imageUrl: "images/767Wimpod.png",
            number: "124",
            type: ["Bug", "Water"],
            category: "Turn Tail",
            region: "Alola",
            generation: "07",
            height: "1'08\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 12.0,
            dexEntry: "It's nature's cleaner—it eats anything and everything, including garbage and rotten things. The ground near its nest is always clean.",
            cryUrl: "cries/767.mp3",
            japaneseName: "Kosokumushi"
        },
        {
            name: "Golisopod",
            imageUrl: "images/768Golisopod.png",
            number: "125",
            type: ["Bug", "Water"],
            category: "Hard Scale",
            region: "Alola",
            generation: "07",
            height: "6'07\"",
            weight: "238.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 108.0,
            dexEntry: "It will do anything to win, taking advantage of every opening and finishing opponents off with the small claws on its front legs.",
            cryUrl: "cries/768.mp3",
            japaneseName: "Gusokumusha"
        },
        {
            name: "Pincurchin",
            imageUrl: "images/871Pincurchin.png",
            number: "126",
            type: ["Electric"],
            category: "Sea Urchin",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.0,
            dexEntry: "It feeds on seaweed, using its teeth to scrape it off rocks. Electric current flows from the tips of its spines.",
            cryUrl: "cries/871.mp3",
            japaneseName: "Bachinuni"
        },
        {
            name: "Mareanie",
            imageUrl: "images/747Mareanie.png",
            number: "127",
            type: ["Poison", "Water"],
            category: "Brutal Star",
            region: "Alola",
            generation: "07",
            height: "1'04\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.0,
            dexEntry: "The first symptom of its sting is numbness. The next is an itching sensation so intense that it's impossible to resist the urge to claw at your skin.",
            cryUrl: "cries/747.mp3",
            japaneseName: "Hidoide"
        },
        {
            name: "Toxapex",
            imageUrl: "images/748Toxapex.png",
            number: "128",
            type: ["Poison", "Water"],
            category: "Brutal Star",
            region: "Alola",
            generation: "07",
            height: "2'04\"",
            weight: "32.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 14.5,
            dexEntry: "To survive in the cold waters of Galar, this Pokémon forms a dome with its legs, enclosing its body so it can capture its own body heat.",
            cryUrl: "cries/748.mp3",
            japaneseName: "Dohidoide"
        },
        {
            name: "Clobbopus",
            imageUrl: "images/852Clobbopus.png",
            number: "129",
            type: ["Fighting"],
            category: "Tantrum",
            region: "Galar",
            generation: "08",
            height: "2'00\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 4.0,
            dexEntry: "It's very curious, but its means of investigating things is to try to punch them with its tentacles. The search for food is what brings it onto land.",
            cryUrl: "cries/852.mp3",
            japaneseName: "Tatakko"
        },
        {
            name: "Grapploct",
            imageUrl: "images/853Grapploct.png",
            number: "130",
            type: ["Fighting"],
            category: "Jujitsu",
            region: "Galar",
            generation: "08",
            height: "5'03\"",
            weight: "86.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 39.0,
            dexEntry: "A body made up of nothing but muscle makes the grappling moves this Pokémon performs with its tentacles tremendously powerful.",
            cryUrl: "cries/853.mp3",
            japaneseName: "Otosupus"
        },
        {
            name: "Shellder",
            imageUrl: "images/090Shellder.png",
            number: "131",
            type: ["Water"],
            category: "Bivalve",
            region: "Kanto",
            generation: "01",
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
            number: "132",
            type: ["Water", "Ice"],
            category: "Bivalve",
            region: "Kanto",
            generation: "01",
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
            name: "Sandygast",
            imageUrl: "images/769Sandygast.png",
            number: "133",
            type: ["Ghost", "Ground"],
            category: "Sand Heap",
            region: "Alola",
            generation: "07",
            height: "1'08\"",
            weight: "154.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 70.0,
            dexEntry: "Grudges of the dead have possessed a mound of sand and become a Pokémon. Sandygast is fond of the shovel on its head.",
            cryUrl: "cries/760.mp3",
            japaneseName: "Sunaba"
        },
        {
            name: "Palossand",
            imageUrl: "images/770Palossand.png",
            number: "134",
            type: ["Ghost", "Ground"],
            category: "Sand Castle",
            region: "Alola",
            generation: "07",
            height: "4'03\"",
            weight: "551.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 250.0,
            dexEntry: "Palossand is known as the Beach Nightmare. It pulls its prey down into the sand by controlling the sand itself, and then it sucks out their souls.",
            cryUrl: "cries/770.mp3",
            japaneseName: "Sirodethna"
        },
        {
            name: "Drifloon",
            imageUrl: "images/425Drifloon.png",
            number: "135",
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
            dexEntry: "Perhaps seeking company, it approaches children. However, it often quickly runs away again when the children play too roughly with it.",
            cryUrl: "cries/425.mp3",
            japaneseName: "Fuwante"
        },
        {
            name: "Drifblim",
            imageUrl: "images/426Drifblim.png",
            number: "136",
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
            dexEntry: "Some say this Pokémon is a collection of souls burdened with regrets, silently drifting through the dusk.",
            cryUrl: "cries/426.mp3",
            japaneseName: "Fuwaride"
        },
        {
            name: "Barboach",
            imageUrl: "images/339Barboach.png",
            number: "137",
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
            number: "138",
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
            dexEntry: "It makes its nest at the bottom of swamps. It will eat anything—if it is alive, Whiscash will eat it.",
            cryUrl: "cries/340.mp3",
            japaneseName: "Namazun"
        },
        {
            name: "Azurill",
            imageUrl: "images/298Azurill.png",
            number: "139",
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
            dexEntry: "The ball on Azurill's tail bounces like a rubber ball, and it's full of the nutrients the Pokémon needs to grow.",
            cryUrl: "cries/298.mp3",
            japaneseName: "Ruriri"
        },
        {
            name: "Marill",
            imageUrl: "images/183Marill.png",
            number: "140",
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
            dexEntry: "This Pokémon uses its round tail as a float. The ball of Marill's tail is filled with nutrients that have been turned into an oil.",
            cryUrl: "cries/183.mp3",
            japaneseName: "Maril"
        },
        {
            name: "Azumarill",
            imageUrl: "images/184Azumarill.png",
            number: "141",
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
            dexEntry: "It spends most of its time in the water. On sunny days, Azumarill floats on the surface of the water and sunbathes.",
            cryUrl: "cries/184.mp3",
            japaneseName: "Marilli"
        },
        {
            name: "Poliwag",
            imageUrl: "images/060Poliwag.png",
            number: "142",
            type: ["Water"],
            category: "Tadpole",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "27.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.4,
            dexEntry: "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémon's innards showing through the skin.",
            cryUrl: "cries/060.mp3",
            japaneseName: "Nyoromo"
        },
        {
            name: "Poliwhirl",
            imageUrl: "images/061Poliwhirl.png",
            number: "143",
            type: ["Water"],
            category: "Tadpole",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 20.0,
            dexEntry: "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl's has been used in place of lullabies to get children to go to sleep.",
            cryUrl: "cries/061.mp3",
            japaneseName: "Nyorozo"
        },
        {
            name: "Poliwrath",
            imageUrl: "images/062Poliwrath.png",
            number: "144",
            type: ["Water", "Fighting"],
            category: "Tadpole",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 54.0,
            dexEntry: "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.",
            cryUrl: "cries/062.mp3",
            japaneseName: "Nyorobon"
        },
        {
            name: "Politoed",
            imageUrl: "images/186Politoed.png",
            number: "145",
            type: ["Water"],
            category: "Frog",
            region: "Johto",
            generation: "02",
            height: "3'07\"",
            weight: "74.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 33.9,
            dexEntry: "At nightfall, these Pokémon appear on the shores of lakes. They announce their territorial claims by letting out cries that sound like shouting.",
            cryUrl: "cries/186.mp3",
            japaneseName: "Nyorotono"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "146",
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
            dexEntry: "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "147",
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
            dexEntry: "This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Whismur",
            imageUrl: "images/293Whismur.png",
            number: "148",
            type: ["Normal"],
            category: "Whisper",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "35.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 16.3,
            dexEntry: "The cry of a Whismur is over 100 decibels. If you're close to a Whismur when it lets out a cry, you'll be stuck with an all-day headache.",
            cryUrl: "cries/293.mp3",
            japaneseName: "Gonyonyo"
        },
        {
            name: "Loudred",
            imageUrl: "images/294Loudred.png",
            number: "149",
            type: ["Normal"],
            category: "Big Voice",
            region: "Hoenn",
            generation: "03",
            height: "3'03\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 40.5,
            dexEntry: "Loudred's ears serve as speakers, and they can put out sound waves powerful enough to blow away a house.",
            cryUrl: "cries/294.mp3",
            japaneseName: "Dogohmb"
        },
        {
            name: "Exploud",
            imageUrl: "images/295Exploud.png",
            number: "150",
            type: ["Normal"],
            category: "Loud Noise",
            region: "Hoenn",
            generation: "03",
            height: "4'11\"",
            weight: "185.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 84.0,
            dexEntry: "In the past, people would use the loud voices of these Pokémon as a means of communication between distant cities.",
            cryUrl: "cries/295.mp3",
            japaneseName: "Bakuong"
        },
        {
            name: "Woobat",
            imageUrl: "images/527Woobat.png",
            number: "151",
            type: ["Psychic", "Flying"],
            category: "Bat",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "4.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.1,
            dexEntry: "While inside a cave, if you look up and see lots of heart-shaped marks lining the walls, it's evidence that Woobat live there.",
            cryUrl: "cries/527.mp3",
            japaneseName: "Koromori"
        },
        {
            name: "Swoobat",
            imageUrl: "images/528Swoobat.png",
            number: "152",
            type: ["Psychic", "Flying"],
            category: "Courting",
            region: "Unova",
            generation: "05",
            height: "2'11\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 10.5,
            dexEntry: "Emitting powerful sound waves tires it out. Afterward, it won't be able to fly for a little while.",
            cryUrl: "cries/528.mp3",
            japaneseName: "Kokoromori"
        },
        {
            name: "Skarmory",
            imageUrl: "images/227Skarmory.png",
            number: "153",
            type: ["Steel", "Flying"],
            category: "Armor Bird",
            region: "Johto",
            generation: "02",
            height: "5'07\"",
            weight: "111.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 50.5,
            dexEntry: "The pointed feathers of these Pokémon are sharper than swords. Skarmory and Corviknight fight viciously over territory.",
            cryUrl: "cries/227.mp3",
            japaneseName: "Airmd"
        },
        {
            name: "Roggenrola",
            imageUrl: "images/524Roggenrola.png",
            number: "154",
            type: ["Rock"],
            category: "Mantle",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 18.0,
            dexEntry: "It's as hard as steel, but apparently a long soak in water will cause it to soften a bit.",
            cryUrl: "cries/524.mp3",
            japaneseName: "Dangoro"
        },
        {
            name: "Boldore",
            imageUrl: "images/525Boldore.png",
            number: "155",
            type: ["Rock"],
            category: "Ore",
            region: "Unova",
            generation: "05",
            height: "2'11\"",
            weight: "224.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 102.0,
            dexEntry: "If you see its orange crystals start to glow, be wary. It's about to fire off bursts of energy.",
            cryUrl: "cries/525.mp3",
            japaneseName: "Gantle"
        },
        {
            name: "Gigalith",
            imageUrl: "images/526Gigalith.png",
            number: "156",
            type: ["Rock"],
            category: "Compressed",
            region: "Unova",
            generation: "05",
            height: "5'07\"",
            weight: "573.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 260.0,
            dexEntry: "This hardy Pokémon can often be found on construction sites and in mines, working alongside people and Copperajah.",
            cryUrl: "cries/526.mp3",
            japaneseName: "Gigaiath"
        },
        {
            name: "Rockruff",
            imageUrl: "images/744Rockruff.png",
            number: "157",
            type: ["Rock"],
            category: "Puppy",
            region: "Alola",
            generation: "07",
            height: "1'08\"",
            weight: "20.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.2,
            dexEntry: "This Pokémon can bond very strongly with its Trainer, but it also has a habit of biting. Raising a Rockruff for a long time can be challenging.",
            cryUrl: "cries/744.mp3",
            japaneseName: "Iwanko"
        },
        {
            name: "Lycanroc",
            imageUrl: "images/745Lycanroc.png",
            number: "158",
            type: ["Rock"],
            category: "Wolf",
            region: "Alola",
            generation: "07",
            height: "2'07\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 25.0,
            dexEntry: "This Lycanroc is calm and cautious. The rocks jutting from its mane are razor sharp.",
            cryUrl: "cries/745.mp3",
            japaneseName: "Lugarugan"
        },
        {
            name: "Salandit",
            imageUrl: "images/757Salandit.png",
            number: "159",
            type: ["Poison", "Fire"],
            category: "Toxic Lizard",
            region: "Alola",
            generation: "07",
            height: "2'00\"",
            weight: "10.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 4.8,
            dexEntry: "Its venom sacs produce a fluid that this Pokémon then heats up with the flame in its tail. This process creates Salandit's poisonous gas.",
            cryUrl: "cries/757.mp3",
            japaneseName: "Yatoumori"
        },
        {
            name: "Salazzle",
            imageUrl: "images/758Salazzle.png",
            number: "160",
            type: ["Poison", "FIre"],
            category: "Toxic Lizard",
            region: "Alola",
            generation: "07",
            height: "3'11\"",
            weight: "48.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 22.2,
            dexEntry: "Only female Salazzle exist. They emit a gas laden with pheromones to captivate male Salandit.",
            cryUrl: "cries/758.mp3",
            japaneseName: "Ennewt"
        },
        {
            name: "Scraggy",
            imageUrl: "images/559Scraggy.png",
            number: "161",
            type: ["Dark", "Fighting"],
            category: "Shedding",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "26.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.8,
            dexEntry: "If it locks eyes with you, watch out! Nothing and no one is safe from the reckless headbutts of this troublesome Pokémon.",
            cryUrl: "cries/559.mp3",
            japaneseName: "Zuruggu"
        },
        {
            name: "Scrafty",
            imageUrl: "images/560Scrafty.png",
            number: "162",
            type: ["Dark", "Fighting"],
            category: "Hoodlum",
            region: "Unova",
            generation: "05",
            height: "3'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 30.0,
            dexEntry: "As halfhearted as this Pokémon's kicks may seem, they pack enough power to shatter Conkeldurr's concrete pillars.",
            cryUrl: "cries/560.mp3",
            japaneseName: "Zuruzukin"
        },
        {
            name: "Mienfoo",
            imageUrl: "images/619Mienfoo.png",
            number: "163",
            type: ["Fighting"],
            category: "Martial Arts",
            region: "Unova",
            generation: "05",
            height: "2'11\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 20.0,
            dexEntry: "In one minute, a well-trained Mienfoo can chop with its arms more than 100 times.",
            cryUrl: "cries/619.mp3",
            japaneseName: "Kojofu"
        },
        {
            name: "Mienshao",
            imageUrl: "images/620Mienshao.png",
            number: "164",
            type: ["Fighting"],
            category: "Martial Arts",
            region: "Unova",
            generation: "05",
            height: "4'07\"",
            weight: "78.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 35.5,
            dexEntry: "When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.",
            cryUrl: "cries/620.mp3",
            japaneseName: "Kojondo"
        },
        {
            name: "Jangmo-o",
            imageUrl: "images/782Jangmo-o.png",
            number: "165",
            type: ["Dragon"],
            category: "Scaly",
            region: "Alola",
            generation: "07",
            height: "2'00\"",
            weight: "65.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 29.7,
            dexEntry: "They learn to fight by smashing their head scales together. The dueling strengthens both their skills and their spirits.",
            cryUrl: "cries/782.mp3",
            japaneseName: "Jyarako"
        },
        {
            name: "Hakamo-o",
            imageUrl: "images/783Hakamo-o.png",
            number: "166",
            type: ["Dragon", "Fighting"],
            category: "Scaly",
            region: "Alola",
            generation: "07",
            height: "3'11\"",
            weight: "103.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 47.0,
            dexEntry: "The scaleless, scarred parts of its body are signs of its strength. It shows them off to defeated opponents.",
            cryUrl: "cries/783.mp3",
            japaneseName: "Jyarango"
        },
        {
            name: "Kommo-o",
            imageUrl: "images/784Kommo-o.png",
            number: "167",
            type: ["Dragon", "Fighting"],
            category: "Scaly",
            region: "Alola",
            generation: "07",
            height: "5'03\"",
            weight: "172.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 78.2,
            dexEntry: "It clatters its tail scales to unnerve opponents. This Pokémon will battle only those who stand steadfast in the face of this display.",
            cryUrl: "cries/784.mp3",
            japaneseName: "Jyararanga"
        },
        {
            name: "Sandshrew",
            imageUrl: "images/027Sandshrew.png",
            number: "168",
            type: ["Ground"],
            category: "Mouse",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.0,
            dexEntry: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, this Pokémon rids itself of dirt and moisture clinging to its body.",
            cryUrl: "cries/027.mp3",
            japaneseName: "Sand"
        },
        {
            name: "Sandslash",
            imageUrl: "images/028Sandslash.png",
            number: "169",
            type: ["Ground"],
            category: "Mouse",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "65.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.5,
            dexEntry: "The drier the area Sandslash lives in, the harder and smoother the Pokémon's spikes feel when touched.",
            cryUrl: "cries/028.mp3",
            japaneseName: "Sandpan"
        },
        {
            name: "Cubone",
            imageUrl: "images/104Cubone.png",
            number: "170",
            type: ["Ground"],
            category: "Lonely",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "14.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.5,
            dexEntry: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
            cryUrl: "cries/104.mp3",
            japaneseName: "Karakara"
        },
        {
            name: "Marowak",
            imageUrl: "images/105Marowak.png",
            number: "171",
            type: ["Ground"],
            category: "Bone Keeper",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "99.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 45.0,
            dexEntry: "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
            cryUrl: "cries/105.mp3",
            japaneseName: "Garagara"
        },
        {
            name: "Kangaskhan",
            imageUrl: "images/115Kangaskhan.png",
            number: "172",
            type: ["Normal"],
            category: "Parent",
            region: "Kanto",
            generation: "01",
            height: "7'03\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 80.0,
            dexEntry: "Although it's carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
            cryUrl: "cries/115.mp3",
            japaneseName: "Garura"
        },
        {
            name: "Torkoal",
            imageUrl: "images/324Torkoal.png",
            number: "173",
            type: ["Fire"],
            category: "Coal",
            region: "Hoenn",
            generation: "03",
            height: "1'08\"",
            weight: "177.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 80.4,
            dexEntry: "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
            cryUrl: "cries/324.mp3",
            japaneseName: "Cotoise"
        },
        {
            name: "Silicobra",
            imageUrl: "images/843Silicobra.png",
            number: "174",
            type: ["Ground"],
            category: "Sand Snake",
            region: "Galar",
            generation: "08",
            height: "7'03\"",
            weight: "16.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 7.6,
            dexEntry: "As it digs, it swallows sand and stores it in its neck pouch. The pouch can hold more than 17 pounds of sand.",
            cryUrl: "cries/843.mp3",
            japaneseName: "Sunahebi"
        },
        {
            name: "Sandaconda",
            imageUrl: "images/844Sandaconda.png",
            number: "175",
            type: ["Ground"],
            category: "Sand Snake",
            region: "Galar",
            generation: "08",
            height: "12'06\"",
            weight: "144.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.8,
            metricWeight: 65.5,
            dexEntry: "When it contracts its body, over 220 pounds of sand sprays from its nose. If it ever runs out of sand, it becomes disheartened.",
            cryUrl: "cries/844.mp3",
            japaneseName: "Sadaija"
        },
        {
            name: "Sandile",
            imageUrl: "images/551Sandile.png",
            number: "176",
            type: ["Ground", "Dark"],
            category: "Desert Croc",
            region: "Unova",
            generation: "05",
            height: "2'04\"",
            weight: "33.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 15.2,
            dexEntry: "The desert gets cold at night, so when the sun sets, this Pokémon burrows deep into the sand and sleeps until sunrise.",
            cryUrl: "cries/551.mp3",
            japaneseName: "Meguroco"
        },
        {
            name: "Krokorok",
            imageUrl: "images/552Krokorok.png",
            number: "177",
            type: ["Ground", "Dark"],
            category: "Desert Croc",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "73.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 33.4,
            dexEntry: "Krokorok has specialized eyes that enable it to see in the dark. This ability lets Krokorok hunt in the dead of night without getting lost.",
            cryUrl: "cries/552.mp3",
            japaneseName: "Waruvile"
        },
        {
            name: "Krookodile",
            imageUrl: "images/553Krookodile.png",
            number: "178",
            type: ["Ground", "Dark"],
            category: "Intimidation",
            region: "Unova",
            generation: "05",
            height: "4'11\"",
            weight: "212.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 96.3,
            dexEntry: "This Pokémon is known as the Bully of the Sands. Krookodile's mighty jaws can bite through heavy plates of iron with almost no effort at all.",
            cryUrl: "cries/553.mp3",
            japaneseName: "Waruvial"
        },
        {
            name: "Rufflet",
            imageUrl: "images/627Rufflet.png",
            number: "179",
            type: ["Normal", "Flying"],
            category: "Eaglet",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.5,
            dexEntry: "If it spies a strong Pokémon, Rufflet can't resist challenging it to a battle. But if Rufflet loses, it starts bawling.",
            cryUrl: "cries/627.mp3",
            japaneseName: "Washibon"
        },
        {
            name: "Braviary",
            imageUrl: "images/628Braviary.png",
            number: "180",
            type: ["Normal", "Flying"],
            category: "Valiant",
            region: "Unova",
            generation: "05",
            height: "4'11\"",
            weight: "90.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 41.0,
            dexEntry: "Known for its bravery and pride, this majestic Pokémon is often seen as a motif for various kinds of emblems.",
            cryUrl: "cries/628.mp3",
            japaneseName: "Warrgle"
        },
        {
            name: "Vullaby",
            imageUrl: "images/629Vullaby.png",
            number: "181",
            type: ["Dark", "Flying"],
            category: "Diapered",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.0,
            dexEntry: "It wears a bone to protect its rear. It often squabbles with others of its kind over particularly comfy bones.",
            cryUrl: "cries/629.mp3",
            japaneseName: "Valchai"
        },
        {
            name: "Mandibuzz",
            imageUrl: "images/630Mandibuzz.png",
            number: "182",
            type: ["Dark", "Flying"],
            category: "Bone Vulture",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "87.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 39.5,
            dexEntry: "Although it's a bit of a ruffian, this Pokémon will take lost Vullaby under its wing and care for them till they're ready to leave the nest.",
            cryUrl: "cries/630.mp3",
            japaneseName: "Vulgina"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "183",
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
            dexEntry: "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "184",
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
            dexEntry: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Rhyperior",
            imageUrl: "images/464Rhyperior.png",
            number: "185",
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
            dexEntry: "It can load up to three projectiles per arm into the holes in its hands. What launches out of those holes could be either rocks or Roggenrola.",
            cryUrl: "cries/464.mp3",
            japaneseName: "Dosidon"
        },
        {
            name: "Larvesta",
            imageUrl: "images/636Larvesta.png",
            number: "186",
            type: ["Bug", "Fire"],
            category: "Torch",
            region: "Unova",
            generation: "05",
            height: "3'07\"",
            weight: "63.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 28.8,
            dexEntry: "The people of ancient times believed that Larvesta fell from the sun.",
            cryUrl: "cries/636.mp3",
            japaneseName: "Merlarva"
        },
        {
            name: "Volcarona",
            imageUrl: "images/637Volcarona.png",
            number: "187",
            type: ["Bug", "Fire"],
            category: "Sun",
            region: "Unova",
            generation: "05",
            height: "5'03\"",
            weight: "101.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 46.0,
            dexEntry: "Volcarona scatters burning scales. Some say it does this to start fires. Others say it's trying to rescue those that suffer in the cold.",
            cryUrl: "cries/637.mp3",
            japaneseName: "Ulgamoth"
        },
        {
            name: "Chinchou",
            imageUrl: "images/170Chinchou.png",
            number: "188",
            type: ["Water", "Electric"],
            category: "Angler",
            region: "Johto",
            generation: "02",
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
            number: "189",
            type: ["Water", "Electric"],
            category: "Light",
            region: "Johto",
            generation: "02",
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
            name: "Wailmer",
            imageUrl: "images/320Wailmer.png",
            number: "190",
            type: ["Water"],
            category: "Ball Whale",
            region: "Hoenn",
            generation: "03",
            height: "6'07\"",
            weight: "286.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 130.0,
            dexEntry: "It shows off by spraying jets of seawater from the nostrils above its eyes. It eats a solid ton of Wishiwashi every day.",
            cryUrl: "cries/320.mp3",
            japaneseName: "Hoeruko"
        },
        {
            name: "Wailord",
            imageUrl: "images/321Wailord.png",
            number: "191",
            type: ["Water"],
            category: "Float Whale",
            region: "Hoenn",
            generation: "03",
            height: "47'07\"",
            weight: "877.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 14.5,
            metricWeight: 398.0,
            dexEntry: "It can sometimes knock out opponents with the shock created by breaching and crashing its big body onto the water.",
            cryUrl: "cries/321.mp3",
            japaneseName: "Whaloh"
        },
        {
            name: "Frillish",
            imageUrl: "images/592Frillish.png",
            number: "192",
            type: ["Water", "Ghost"],
            category: "Floating",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 33.0,
            dexEntry: "It envelops its prey in its veillike arms and draws it down to the deeps, five miles below the ocean's surface.",
            cryUrl: "cries/592.mp3",
            japaneseName: "Pururill"
        },
        {
            name: "Jellicent",
            imageUrl: "images/593Jellicent.png",
            number: "193",
            type: ["Water", "Ghost"],
            category: "Floating",
            region: "Unova",
            generation: "05",
            height: "7'03\"",
            weight: "297.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 135.0,
            dexEntry: "Most of this Pokémon's body composition is identical to sea water. It makes sunken ships its lair.",
            cryUrl: "cries/593.mp3",
            japaneseName: "Burungel"
        },
        {
            name: "Skrelp",
            imageUrl: "images/690Skrelp.png",
            number: "194",
            type: ["Poison", "Water"],
            category: "Mock Kelp",
            region: "Kalos",
            generation: "06",
            height: "1'08\"",
            weight: "16.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 7.3,
            dexEntry: "It drifts in the ocean, blending in with floating seaweed. When other Pokémon come to feast on the seaweed, Skrelp feasts on them instead.",
            cryUrl: "cries/690.mp3",
            japaneseName: "Kuzumo"
        },
        {
            name: "Dragalge",
            imageUrl: "images/691Dragalge.png",
            number: "195",
            type: ["Poison", "Dragon"],
            category: "Mock Kelp",
            region: "Kalos",
            generation: "06",
            height: "5'11\"",
            weight: "179.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 81.5,
            dexEntry: "Dragalge uses a poisonous liquid capable of corroding metal to send tankers that enter its territory to the bottom of the sea.",
            cryUrl: "cries/691.mp3",
            japaneseName: "Dramidoro"
        },
        {
            name: "Clauncher",
            imageUrl: "images/692Clauncher.png",
            number: "196",
            type: ["Water"],
            category: "Water Gun",
            region: "Kalos",
            generation: "06",
            height: "1'08\"",
            weight: "18.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 8.3,
            dexEntry: "Clauncher's claws can fall off during battle, but they'll regenerate. The meat inside the claws is popular as a delicacy in Galar.",
            cryUrl: "cries/692.mp3",
            japaneseName: "Udeppou"
        },
        {
            name: "Clawitzer",
            imageUrl: "images/693Clawitzer.png",
            number: "197",
            type: ["Water"],
            category: "Howitzer",
            region: "Kalos",
            generation: "06",
            height: "4'03\"",
            weight: "77.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 35.3,
            dexEntry: "After using the feelers on its oversized claw to detect the location of prey, Clawitzer launches a cannonball of water at its target.",
            cryUrl: "cries/693.mp3",
            japaneseName: "Bloster"
        },
        {
            name: "Horsea",
            imageUrl: "images/116Horsea.png",
            number: "198",
            type: ["Water"],
            category: "Dragon",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.0,
            dexEntry: "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.",
            cryUrl: "cries/116.mp3",
            japaneseName: "Tattu"
        },
        {
            name: "Seadra",
            imageUrl: "images/117Seadra.png",
            number: "199",
            type: ["Water"],
            category: "Dragon",
            region: "Kanto",
            generation: "01",
            height: "3'11\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 25.0,
            dexEntry: "It's the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.",
            cryUrl: "cries/117.mp3",
            japaneseName: "Seadra"
        },
        {
            name: "Kingdra",
            imageUrl: "images/230Kingdra.png",
            number: "200",
            type: ["Water", "Dragon"],
            category: "Dragon",
            region: "Johto",
            generation: "02",
            height: "5'11\"",
            weight: "335.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 152.0,
            dexEntry: "With the arrival of a storm at sea, this Pokémon will show itself on the surface. When a Kingdra and a Dragonite meet, a fierce battle ensues.",
            cryUrl: "cries/230.mp3",
            japaneseName: "Kingdra"
        },
        {
            name: "Petilil",
            imageUrl: "images/548Petilil.png",
            number: "201",
            type: ["Grass"],
            category: "Bulb",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 6.6,
            dexEntry: "Petilil appears around sources of clean water. Boiling leaves from this Pokémon's head results in a liquid that's sometimes used as a bug repellent.",
            cryUrl: "cries/548.mp3",
            japaneseName: "Churine"
        },
        {
            name: "Lilligant",
            imageUrl: "images/549Lilligant.png",
            number: "202",
            type: ["Grass"],
            category: "Flowering",
            region: "Unova",
            generation: "05",
            height: "3'07\"",
            weight: "35.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 16.3,
            dexEntry: "It's believed that even first-rate gardeners have a hard time getting the flower on a Lilligant's head to bloom.",
            cryUrl: "cries/549.mp3",
            japaneseName: "Dredear"
        },
        {
            name: "Combee",
            imageUrl: "images/415Combee.png",
            number: "203",
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
            dexEntry: "The members of the trio spend all their time together. Each one has a slightly different taste in nectar.",
            cryUrl: "cries/415.mp3",
            japaneseName: "Mitsuhoney"
        },
        {
            name: "Vespiquen",
            imageUrl: "images/416Vespiquen.png",
            number: "204",
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
            dexEntry: "It skillfully commands its grubs in battles with its enemies. The grubs are willing to risk their lives to defend Vespiquen.",
            cryUrl: "cries/416.mp3",
            japaneseName: "Beequen"
        },
        {
            name: "Exeggcute",
            imageUrl: "images/102Exeggcute.png",
            number: "205",
            type: ["Grass", "Psychic"],
            category: "Egg",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.5,
            dexEntry: "Though it may look like it's just a bunch of eggs, it's a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
            cryUrl: "cries/102.mp3",
            japaneseName: "Tamatama"
        },
        {
            name: "Exeggutor",
            imageUrl: "images/103Exeggutor.png",
            number: "206",
            type: ["Grass", "Psychic"],
            category: "Coconut",
            region: "Kanto",
            generation: "01",
            height: "6'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 120.0,
            dexEntry: "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem to be very interested in one another.",
            cryUrl: "cries/103.mp3",
            japaneseName: "Nassy"
        },
        {
            name: "Ditto",
            imageUrl: "images/132Ditto.png",
            number: "207",
            type: ["Normal"],
            category: "Transform",
            region: "Kanto",
            generation: "01",
            height: "1'00\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 4.0,
            dexEntry: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
            cryUrl: "cries/132.mp3",
            japaneseName: "Metamon"
        },
        {
            name: "Porygon",
            imageUrl: "images/137Porygon.png",
            number: "208",
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
            dexEntry: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
            cryUrl: "cries/137.mp3",
            japaneseName: "Porygon"
        },
        {
            name: "Porygon2",
            imageUrl: "images/233Porygon2.png",
            number: "209",
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
            dexEntry: "This is a Porygon that was updated with special data. Porygon2 develops itself by learning about many different subjects all on its own.",
            cryUrl: "cries/233.mp3",
            japaneseName: "Porygon2"
        },
        {
            name: "Porygon-Z",
            imageUrl: "images/474Porygon-Z.png",
            number: "210",
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
            dexEntry: "Porygon-Z had a program installed to allow it to move between dimensions, but the program also caused instability in Porygon-Z's behavior.",
            cryUrl: "cries/474.mp3",
            japaneseName: "Porygon-Z"
        },
        {
            name: "Zarude",
            imageUrl: "images/893Zarude.png",
            number: "211",
            type: ["Dark", "Grass"],
            category: "Rogue Monkey",
            region: "Galar",
            generation: "08",
            height: "5'11\"",
            weight: "154.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 70.0,
            dexEntry: "Within dense forests, this Pokémon lives in a pack with others of its kind. It's incredibly aggressive, and the other Pokémon of the forest fear it.",
            cryUrl: "cries/893.mp3",
            japaneseName: "Zarude"
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