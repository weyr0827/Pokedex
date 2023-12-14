//Indigo Disk Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Doduo",
            imageUrl: "images/084Doduo.png",
            number: "001",
            type: ["Normal", "Flying"],
            category: "Twin Bird",
            region: "Kanto",
            generation: "01",
            height: "4'07\"",
            weight: "86.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 39.2,
            dexEntry: "Its heads never sleep at the same time—each one takes a turn keeping watch while the other sleeps, switching every hour or so.",
            cryUrl: "cries/084.mp3",
            japaneseName: "Dodo"
        },
        {
            name: "Dodrio",
            imageUrl: "images/085Dodrio.png",
            number: "002",
            type: ["Normal", "Flying"],
            category: "Triple Bird",
            region: "Kanto",
            generation: "01",
            height: "5'11\"",
            weight: "187.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 85.2,
            dexEntry: "The strongest head with the thickest neck becomes the leader and gains primary control of the body.",
            cryUrl: "cries/085.mp3",
            japaneseName: "Dodorio"
        },
        {
            name: "Exeggcute",
            imageUrl: "images/102Exeggcute.png",
            number: "003",
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
            dexEntry: "Using telepathy only fellow Exeggcute can pick up on, they always form a cluster of six.",
            cryUrl: "cries/102.mp3",
            japaneseName: "Tamatama"
        },
        {
            name: "Exeggutor",
            imageUrl: "forms/103Exeggutor-Alola.png",
            number: "004",
            type: ["Grass", "Dragon"],
            category: "Coconut",
            region: "Kanto",
            generation: "01",
            height: "35'09\"",
            weight: "912.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 10.9,
            metricWeight: 415.6,
            dexEntry: "As it grew taller and taller, it outgrew its reliance on psychic powers, while within it awakened the power of the sleeping dragon.",
            cryUrl: "cries/103.mp3",
            japaneseName: "Nassy"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "005",
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
            dexEntry: "Once it starts running, it won’t stop—even if it crashes through boulders. This disposition is what’s caused its habitat to expand.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "006",
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
            dexEntry: "It evolved to walk using only its hind legs, which has allowed it to expand its habitat even onto steep mountains.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Rhyperior",
            imageUrl: "images/464Rhyperior.png",
            number: "007",
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
            dexEntry: "A Rhyperior’s brain is smaller than a Rhydon’s, but the Rhyperior is stronger because it spends more energy on battling and less on brainpower.",
            cryUrl: "cries/464.mp3",
            japaneseName: "Dosidon"
        },
        {
            name: "Venonat",
            imageUrl: "images/048Venonat.png",
            number: "008",
            type: ["Bug", "Poison"],
            category: "Insect",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 30.0,
            dexEntry: "Its eyes act as radar, enabling it to be active in darkness. The eyes can also shoot powerful beams.",
            cryUrl: "cries/048.mp3",
            japaneseName: "Kongpang"
        },
        {
            name: "Venomoth",
            imageUrl: "images/049Venomoth.png",
            number: "009",
            type: ["Bug", "Poison"],
            category: "Poison Moth",
            region: "Kanto",
            generation: "01",
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
            name: "Elekid",
            imageUrl: "images/239Elekid.png",
            number: "010",
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
            dexEntry: "It rotates its arms to generate electricity, but it tires easily, so it only charges up a little bit.",
            cryUrl: "cries/239.mp3",
            japaneseName: "Elekid"
        },
        {
            name: "Electabuzz",
            imageUrl: "images/125Electabuzz.png",
            number: "011",
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
            dexEntry: "Research is progressing on storing lightning in Electabuzz so this energy can be used at any time.",
            cryUrl: "cries/125.mp3",
            japaneseName: "Eleboo"
        },
        {
            name: "Electivire",
            imageUrl: "images/466Electivire.png",
            number: "012",
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
            dexEntry: "This Pokémon presses the tips of its tails onto an opponent and instantly sends over 20,000 volts of high-voltage electricity through them.",
            cryUrl: "cries/466.mp3",
            japaneseName: "Elekible"
        },
        {
            name: "Magby",
            imageUrl: "images/240Magby.png",
            number: "013",
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
            dexEntry: "Magma-like blood circulates throughout this Pokémon’s body, raising its body temperature as high as 1,100 degrees Fahrenheit.",
            cryUrl: "cries/240.mp3",
            japaneseName: "Buby"
        },
        {
            name: "Magmar",
            imageUrl: "images/126Magmar.png",
            number: "014",
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
            dexEntry: "Wavering flames similar to those of the sun appear on the surface of this Pokémon’s body.",
            cryUrl: "cries/126.mp3",
            japaneseName: "Boober"
        },
        {
            name: "Magmortar",
            imageUrl: "images/467Magmortar.png",
            number: "015",
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
            dexEntry: "They dwell in volcanic craters. It’s said that only a single pair of Magmortar will inhabit any given volcano.",
            cryUrl: "cries/467.mp3",
            japaneseName: "Booburn"
        },
        {
            name: "Happiny",
            imageUrl: "images/440Happiny.png",
            number: "016",
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
            dexEntry: "It carefully carries a round, white rock that it thinks is an egg. It’s bothered by how curly its hair looks.",
            cryUrl: "cries/440.mp3",
            japaneseName: "Pinpuku"
        },
        {
            name: "Chansey",
            imageUrl: "images/113Chansey.png",
            number: "017",
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
            dexEntry: "It walks carefully to prevent its egg from breaking. However, it is extremely fast at running away.",
            cryUrl: "cries/113.mp3",
            japaneseName: "Lucky"
        },
        {
            name: "Blissey",
            imageUrl: "images/242Blissey.png",
            number: "018",
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
            name: "Scyther",
            imageUrl: "images/123Scyther.png",
            number: "019",
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
            number: "020",
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
            dexEntry: "It swings its eye-patterned pincers up to scare its foes. This makes it look like it has three heads.",
            cryUrl: "cries/212.mp3",
            japaneseName: "Hassam"
        },
        {
            name: "Kleavor",
            imageUrl: "images/900Kleavor.png",
            number: "021",
            type: ["Bug", "Rock"],
            category: "Axe",
            region: "Hisui",
            generation: "08",
            height: "5'11\"",
            weight: "129.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 89.0,
            dexEntry: "This Pokémon is a rough, crude, and violent sort. It swings around its large, heavy stone axes to finish off its prey.",
            cryUrl: "cries/900.mp3",
            japaneseName: "Basagiri"
        },
        {
            name: "Tauros",
            imageUrl: "images/128Tauros.png",
            number: "022",
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
            dexEntry: "They fight each other by locking horns. The herd’s protectors take pride in their battle-scarred horns.",
            cryUrl: "cries/128.mp3",
            japaneseName: "Kentauros"
        },
        {
            name: "Blitzle",
            imageUrl: "images/522Blitzle.png",
            number: "023",
            type: ["Electric"],
            category: "Electrified",
            region: "Unova",
            generation: "05",
            height: "2'07\"",
            weight: "65.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 29.8,
            dexEntry: "This Pokémon prefers places with lots of lightning strikes. It catches lightning with its mane and stores the electricity within its body.",
            cryUrl: "cries/522.mp3",
            japaneseName: "Shimama"
        },
        {
            name: "Zebstrika",
            imageUrl: "images/523Zebstrika.png",
            number: "024",
            type: ["Electric"],
            category: "Thunderbolt",
            region: "Unova",
            generation: "05",
            height: "5'03\"",
            weight: "175.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 79.5,
            dexEntry: "Once the herd hears thunder, it chases after the storm clouds so that the Blitzle in the group can use the lightning to charge up.",
            cryUrl: "cries/523.mp3",
            japaneseName: "Zebraika"
        },
        {
            name: "Girafarig",
            imageUrl: "images/203Girafarig.png",
            number: "025",
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
            dexEntry: "Girafarig’s tail has a small head. It instinctively bites at any foe that approaches the Pokémon from behind.",
            cryUrl: "cries/203.mp3",
            japaneseName: "Kirinriki"
        },
        {
            name: "Farigiraf",
            imageUrl: "images/981Farigiraf.png",
            number: "026",
            type: ["Normal", "Psychic"],
            category: "Long Neck",
            region: "Paldea",
            generation: "09",
            height: "10'06\"",
            weight: "352.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.2,
            metricWeight: 160.0,
            dexEntry: "The hardened head from the tail protects the head of the main body as Farigiraf whips its long neck around to headbutt enemies.",
            cryUrl: "cries/981.mp3",
            japaneseName: "Rikikirin"
        },
        {
            name: "Sandile",
            imageUrl: "images/551Sandile.png",
            number: "027",
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
            dexEntry: "They live hidden under hot desert sands in order to keep their body temperature from dropping.",
            cryUrl: "cries/551.mp3",
            japaneseName: "Meguroco"
        },
        {
            name: "Krokorok",
            imageUrl: "images/552Krokorok.png",
            number: "028",
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
            dexEntry: "Thanks to the special membrane covering its eyes, it can see its surroundings clearly, even in the middle of the night.",
            cryUrl: "cries/552.mp3",
            japaneseName: "Waruvile"
        },
        {
            name: "Krookodile",
            imageUrl: "images/553Krookodile.png",
            number: "029",
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
            dexEntry: "Its unique faculty of sight can detect small prey more than 30 miles away, even in the midst of a sandstorm.",
            cryUrl: "cries/553.mp3",
            japaneseName: "Waruvial"
        },
        {
            name: "Rellor",
            imageUrl: "images/953Rellor.png",
            number: "030",
            type: ["Bug"],
            category: "Rolling",
            region: "Paldea",
            generation: "09",
            height: "0'08\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 1.0,
            dexEntry: "It rolls its mud ball around while the energy it needs for evolution matures. Eventually the time comes for it to evolve.",
            cryUrl: "cries/953.mp3",
            japaneseName: "Shigaroko"
        },
        {
            name: "Rabsca",
            imageUrl: "images/954Rabsca.png",
            number: "031",
            type: ["Bug", "Psychic"],
            category: "Rolling",
            region: "Paldea",
            generation: "09",
            height: "1'00\"",
            weight: "7.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.5,
            dexEntry: "An infant sleeps inside the ball. Rabsca rolls the ball soothingly with its legs to ensure the infant sleeps comfortably.",
            cryUrl: "cries/954.mp3",
            japaneseName: "Beracas"
        },
        {
            name: "Rufflet",
            imageUrl: "images/627Rufflet.png",
            number: "032",
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
            dexEntry: "With its sharp claws, this Pokémon pierces its prey, and then it pecks at them. Although it also consumes berries, it’s a carnivore at heart.",
            cryUrl: "cries/627.mp3",
            japaneseName: "Washibon"
        },
        {
            name: "Braviary",
            imageUrl: "images/628Braviary.png",
            number: "033",
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
            dexEntry: "For the sake of its friends, this brave warrior of the sky will not stop battling, even if injured.",
            cryUrl: "cries/628.mp3",
            japaneseName: "Warrgle"
        },
        {
            name: "Vullaby",
            imageUrl: "images/629Vullaby.png",
            number: "034",
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
            dexEntry: "Its healthy appetite leads to visible growth spurts. It often has to replace the bones it wears as its size increases.",
            cryUrl: "cries/629.mp3",
            japaneseName: "Valchai"
        },
        {
            name: "Mandibuzz",
            imageUrl: "images/630Mandibuzz.png",
            number: "035",
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
            dexEntry: "Watching from the sky, they attack weakened prey on the ground. They have a habit of decorating themselves with bones.",
            cryUrl: "cries/630.mp3",
            japaneseName: "Vulgina"
        },
        {
            name: "Litleo",
            imageUrl: "images/667Litleo.png",
            number: "036",
            type: ["Fire", "Normal"],
            category: "Lion Cub",
            region: "Kalos",
            generation: "06",
            height: "2'00\"",
            weight: "29.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.5,
            dexEntry: "The more a Litleo trains its body and spirit by battling mighty enemies, the hotter its mane will grow.",
            cryUrl: "cries/667.mp3",
            japaneseName: "Shishiko"
        },
        {
            name: "Pyroar",
            imageUrl: "images/668Pyroar.png",
            number: "037",
            type: ["Fire", "Normal"],
            category: "Royal",
            region: "Kalos",
            generation: "06",
            height: "4'11\"",
            weight: "179.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 81.5,
            dexEntry: "The mane of a male Pyroar heats up to over 3,600 degrees Fahrenheit during battle. Merely approaching it will cause severe burns.",
            cryUrl: "cries/668.mp3",
            japaneseName: "Kaenjishi"
        },
        {
            name: "Deerling",
            imageUrl: "images/585Deerling.png",
            number: "038",
            type: ["Normal", "Grass"],
            category: "Season",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 19.5,
            dexEntry: "Despite Deerling’s adorable appearance, farmers consider it a nuisance since it loves plant shoots and will eat them all up.",
            cryUrl: "cries/585.mp3",
            japaneseName: "Shikijika"
        },
        {
            name: "Sawsbuck",
            imageUrl: "images/586Sawsbuck.png",
            number: "039",
            type: ["Normal", "Grass"],
            category: "Season",
            region: "Unova",
            generation: "05",
            height: "6'03\"",
            weight: "203.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 92.5,
            dexEntry: "There are many Sawsbuck enthusiasts. The paler the pink flowers that bloom on its antlers, the more beautiful the Sawsbuck is considered to be.",
            cryUrl: "cries/586.mp3",
            japaneseName: "Mebukijika"
        },
        {
            name: "Smeargle",
            imageUrl: "images/235Smeargle.png",
            number: "040",
            type: ["Normal"],
            category: "Painter",
            region: "Johto",
            generation: "02",
            height: "3'11\"",
            weight: "127.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 58.0,
            dexEntry: "The color of the mysterious fluid secreted from the tip of the tail is predetermined for each Smeargle.",
            cryUrl: "cries/235.mp3",
            japaneseName: "Doble"
        },
        {
            name: "Rotom",
            imageUrl: "images/479Rotom.png",
            number: "041",
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
            dexEntry: "Research continues on this Pokémon, which could be the power source of a unique motor.",
            cryUrl: "cries/479.mp3",
            japaneseName: "Rotom"
        },
        {
            name: "Milcery",
            imageUrl: "images/868Milcery.png",
            number: "042",
            type: ["Fairy"],
            category: "Cream",
            region: "Galar",
            generation: "08",
            height: "0'08\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.3,
            dexEntry: "When attacked, it tackles its foe and covers them in cream. With its foe either blinded or astonished by deliciousness, Milcery flees.",
            cryUrl: "cries/868.mp3",
            japaneseName: "Mahomil"
        },
        {
            name: "Alcremie",
            imageUrl: "images/869Alcremie.png",
            number: "043",
            type: ["Fairy"],
            category: "Cream",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "1.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.5,
            dexEntry: "Alcremie that have been cherished produce exquisite cream, so Trainers always raise them lovingly.",
            cryUrl: "cries/869.mp3",
            japaneseName: "Mawhip"
        },
        {
            name: "Trapinch",
            imageUrl: "images/328Trapinch.png",
            number: "044",
            type: ["Ground"],
            category: "Ant Pit",
            region: "Hoenn",
            generation: "03",
            height: "2'04\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 15.0,
            dexEntry: "As it digs through the sand, its giant jaws crush any rocks that obstruct its path. It builds a funnel-shaped nest.",
            cryUrl: "cries/328.mp3",
            japaneseName: "Nuckrar"
        },
        {
            name: "Vibrava",
            imageUrl: "images/329Vibrava.png",
            number: "045",
            type: ["Ground", "Dragon"],
            category: "Vibration",
            region: "Hoenn",
            generation: "03",
            height: "3'07\"",
            weight: "33.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 15.3,
            dexEntry: "It generates ultrasonic waves by vigorously vibrating its wings. After making its prey faint, it dissolves the prey with its digestive juices.",
            cryUrl: "cries/329.mp3",
            japaneseName: "Vibrava"
        },
        {
            name: "Flygon",
            imageUrl: "images/330Flygon.png",
            number: "046",
            type: ["Ground", "Dragon"],
            category: "Mystic",
            region: "Hoenn",
            generation: "03",
            height: "6'07\"",
            weight: "180.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 82.0,
            dexEntry: "The sound of its wings flapping resembles singing. Those entranced by this sound get lured into a sandstorm and become Flygon’s prey.",
            cryUrl: "cries/330.mp3",
            japaneseName: "Flygon"
        },
        {
            name: "Pikipek",
            imageUrl: "images/731Pikipek.png",
            number: "047",
            type: ["Normal", "Flying"],
            category: "Woodpecker",
            region: "Alola",
            generation: "07",
            height: "1'00\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.2,
            dexEntry: "Pikipek has strong muscles in its neck, so it won’t hurt itself even if it violently shakes its head.",
            cryUrl: "cries/731.mp3",
            japaneseName: "Tsutsukera"
        },
        {
            name: "Trumbeak",
            imageUrl: "images/732Trumbeak.png",
            number: "048",
            type: ["Normal", "Flying"],
            category: "Bugle Beak",
            region: "Alola",
            generation: "07",
            height: "2'00\"",
            weight: "32.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 14.8,
            dexEntry: "When it encounters foes, it launches the many seeds stored in its beak in a radial burst.",
            cryUrl: "cries/732.mp3",
            japaneseName: "Kerarappa"
        },
        {
            name: "Toucannon",
            imageUrl: "images/733Toucannon.png",
            number: "049",
            type: ["Normal", "Flying"],
            category: "Cannon",
            region: "Alola",
            generation: "07",
            height: "3'07\"",
            weight: "57.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 26.0,
            dexEntry: "Pairs of Toucannon are considered symbols of companionship, as these Pokémon will raise the temperature of their beaks to warm each other.",
            cryUrl: "cries/733.mp3",
            japaneseName: "Dodekabashi"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "050",
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
            dexEntry: "Its eyes are as transparent as crystals. From them, it shoots mysterious beams of light.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "051",
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
            dexEntry: "In battle, it extends all 80 of its tentacles to entrap its opponent inside a poisonous net.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Horsea",
            imageUrl: "images/116Horsea.png",
            number: "052",
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
            dexEntry: "It maintains balance using its tail, which is wound up like a coil. It may spray ink from its mouth.",
            cryUrl: "cries/116.mp3",
            japaneseName: "Tattu"
        },
        {
            name: "Seadra",
            imageUrl: "images/117Seadra.png",
            number: "053",
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
            dexEntry: "Its fin tips leak poison. Its fins and bones are highly valued as ingredients in herbal medicine.",
            cryUrl: "cries/117.mp3",
            japaneseName: "Seadra"
        },
        {
            name: "Kingdra",
            imageUrl: "images/230Kingdra.png",
            number: "054",
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
            dexEntry: "This Pokémon is said to sleep at the bottom of the sea—deeper than any other life-form can descend—building its energy.",
            cryUrl: "cries/230.mp3",
            japaneseName: "Kingdra"
        },
        {
            name: "Bruxish",
            imageUrl: "images/779Bruxish.png",
            number: "055",
            type: ["Water", "Psychic"],
            category: "Gnash Teeth",
            region: "Alola",
            generation: "07",
            height: "2'11\"",
            weight: "41.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.0,
            dexEntry: "When sunlight reflects on the ripples created by a Bruxish grinding its teeth, the water all around sparkles brilliantly.",
            cryUrl: "cries/779.mp3",
            japaneseName: "Hagigishiri"
        },
        {
            name: "Cottonee",
            imageUrl: "images/546Cottonee.png",
            number: "056",
            type: ["Grass", "Fairy"],
            category: "Cotton Puff",
            region: "Unova",
            generation: "05",
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
            number: "057",
            type: ["Grass", "Fairy"],
            category: "Windveiled",
            region: "Unova",
            generation: "05",
            height: "2'04\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 6.6,
            dexEntry: "It rides on the wind and slips into people’s homes. After it has turned a room into a cotton- filled mess, it giggles to itself and takes off.",
            cryUrl: "cries/547.mp3",
            japaneseName: "Elfuun"
        },
        {
            name: "Comfey",
            imageUrl: "images/764Comfey.png",
            number: "058",
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
            dexEntry: "It prefers areas with lots of flowers. A Comfey adorned with flowers is a happy Comfey, and the flowers gain healing effects.",
            cryUrl: "cries/764.mp3",
            japaneseName: "Cuwawa"
        },
        {
            name: "Slakoth",
            imageUrl: "images/287Slakoth.png",
            number: "059",
            type: ["Normal"],
            category: "Slacker",
            region: "Hoenn",
            generation: "03",
            height: "2'07\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.0,
            dexEntry: "The way Slakoth lolls around makes anyone who watches it feel like doing the same.",
            cryUrl: "cries/287.mp3",
            japaneseName: "Namakero"
        },
        {
            name: "Vigoroth",
            imageUrl: "images/288Vigoroth.png",
            number: "060",
            type: ["Normal"],
            category: "Wild Monkey",
            region: "Hoenn",
            generation: "03",
            height: "4'07\"",
            weight: "102.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 46.5,
            dexEntry: "It is always hungry because it won’t stop rampaging. Even while it is eating, it can’t keep still.",
            cryUrl: "cries/288.mp3",
            japaneseName: "Yarukimono"
        },
        {
            name: "Slaking",
            imageUrl: "images/289Slaking.png",
            number: "061",
            type: ["Normal"],
            category: "Lazy",
            region: "Hoenn",
            generation: "03",
            height: "6'07\"",
            weight: "287.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 130.5,
            dexEntry: "This Pokémon lives lying on its side. It only rolls over and moves when there is no more grass to eat.",
            cryUrl: "cries/289.mp3",
            japaneseName: "Kekking"
        },
        {
            name: "Oddish",
            imageUrl: "images/043Oddish.png",
            number: "062",
            type: ["Grass", "Poison"],
            category: "Weed",
            region: "Kanto",
            generation: "01",
            height: "1'08\"",
            weight: "11.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.4,
            dexEntry: "When it is woken by moonlight, it wanders about. But during the day, it stays still underground.",
            cryUrl: "cries/043.mp3",
            japaneseName: "Nazonokusa"
        },
        {
            name: "Gloom",
            imageUrl: "images/044Gloom.png",
            number: "063",
            type: ["Grass", "Poison"],
            category: "Weed",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "19.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 8.6,
            dexEntry: "It secretes a sticky, drool-like nectar. Though sweet, it smells too repulsive to get very close.",
            cryUrl: "cries/044.mp3",
            japaneseName: "Kusaihana"
        },
        {
            name: "Vileplume",
            imageUrl: "images/045Vileplume.png",
            number: "064",
            type: ["Grass", "Poison"],
            category: "Flower",
            region: "Kanto",
            generation: "01",
            height: "3'11\"",
            weight: "41.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 18.6,
            dexEntry: "It fiendishly scatters allergenic pollen from its petals, which are the largest in the world.",
            cryUrl: "cries/045.mp3",
            japaneseName: "Ruffresia"
        },
        {
            name: "Bellossom",
            imageUrl: "images/182Bellossom.png",
            number: "065",
            type: ["Grass"],
            category: "Flower",
            region: "Johto",
            generation: "02",
            height: "1'04\"",
            weight: "12.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.8,
            dexEntry: "After it grows up, it leaves the forest it was born in to form groups with other Bellossom. It breaks into dance when it gets excited.",
            cryUrl: "cries/182.mp3",
            japaneseName: "Kireihana"
        },
        {
            name: "Diglett",
            imageUrl: "forms/050Diglett-Alola.png",
            number: "066",
            type: ["Ground", "Steel"],
            category: "Mole",
            region: "Kanto",
            generation: "01",
            height: "0'08\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 1.0,
            dexEntry: "Its golden whiskers function as sensors. It pokes them out of its burrow to monitor its surroundings.",
            cryUrl: "cries/050.mp3",
            japaneseName: "Digda"
        },
        {
            name: "Dugtrio",
            imageUrl: "forms/051Dugtrio-Alola.png",
            number: "067",
            type: ["Ground", "Steel"],
            category: "Mole",
            region: "Kanto",
            generation: "01",
            height: "2'04\"",
            weight: "146.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 66.6,
            dexEntry: "Its metallic whiskers are heavy, so it’s not very fast, but it has the power to dig through even the hardest bedrock.",
            cryUrl: "cries/051.mp3",
            japaneseName: "Dugtrio"
        },
        {
            name: "Grimer",
            imageUrl: "forms/088Grimer-Alola.png",
            number: "068",
            type: ["Poison", "Dark"],
            category: "Sludge",
            region: "Kanto",
            generation: "01",
            height: "2'04\"",
            weight: "92.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 42.0,
            dexEntry: "Alolan Grimer will gladly gobble up any kind of trash, making it a widely used and popular Pokémon at garbage disposal facilities.",
            cryUrl: "cries/088.mp3",
            japaneseName: "Betbeter"
        },
        {
            name: "Muk",
            imageUrl: "forms/089Muk-Alola.png",
            number: "069",
            type: ["Poison", "Dark"],
            category: "Sludge",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "114.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 52.0,
            dexEntry: "What look like fangs and claws are actually crystallized poison that will afflict you at a mere touch, so don’t get too close.",
            cryUrl: "cries/089.mp3",
            japaneseName: "Betbeton"
        },
        {
            name: "Zangoose",
            imageUrl: "images/335Zangoose.png",
            number: "070",
            type: ["Normal"],
            category: "Cat Ferret",
            region: "Hoenn",
            generation: "03",
            height: "4'03\"",
            weight: "88.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.3,
            dexEntry: "If it comes across a Seviper, its fur bristles and it assumes its battle pose. Its sharp claws are its best weapon.",
            cryUrl: "cries/335.mp3",
            japaneseName: "Zangoose"
        },
        {
            name: "Seviper",
            imageUrl: "images/336Seviper.png",
            number: "071",
            type: ["Poison"],
            category: "Fang Snake",
            region: "Hoenn",
            generation: "03",
            height: "8'10\"",
            weight: "115.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.7,
            metricWeight: 52.5,
            dexEntry: "Constant polishing makes the edge of the blade on its tail extremely sharp. It’s Zangoose’s archrival.",
            cryUrl: "cries/336.mp3",
            japaneseName: "Habunake"
        },
        {
            name: "Crabrawler",
            imageUrl: "images/739Crabrawler.png",
            number: "072",
            type: ["Fighting"],
            category: "Boxing",
            region: "Alola",
            generation: "07",
            height: "2'00\"",
            weight: "15.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.0,
            dexEntry: "If it loses its pincers, they’ll quickly regrow. The pincers are popular ingredients in paella since their shells produce a tasty soup stock.",
            cryUrl: "cries/739.mp3",
            japaneseName: "Makenkani"
        },
        {
            name: "Crabominable",
            imageUrl: "images/740Crabominable.png",
            number: "073",
            type: ["Fighting", "Ice"],
            category: "Woolly Crab",
            region: "Alola",
            generation: "07",
            height: "5'07\"",
            weight: "396.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 180.0,
            dexEntry: "Though its punches are powerful, this Pokémon’s movements are sluggish. It blows icy bubbles from its mouth to immobilize its opponents.",
            cryUrl: "cries/740.mp3",
            japaneseName: "Kekenkani"
        },
        {
            name: "Oricorio",
            imageUrl: "forms/741Oricorio-Pa'u.png",
            number: "074",
            type: ["Psychic", "Flying"],
            category: "Dancing",
            region: "Alola",
            generation: "07",
            height: "2'00\"",
            weight: "7.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 3.4,
            dexEntry: "This form of Oricorio has sipped pink nectar. It elevates its mind with the gentle steps of its dance, then unleashes its psychic energy.",
            cryUrl: "cries/formCries/741-Pau.mp3",
            japaneseName: "Odoridori"
        },
        {
            name: "Slowpoke",
            imageUrl: "forms/079Slowpoke-Galar.png",
            number: "075",
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
            dexEntry: "It uses its tail to fish, but the scent of the spice emanating from its tail ensures its catches are always lacking.",
            cryUrl: "cries/formCries/079-Galar.mp3",
            japaneseName: "Yadon"
        },
        {
            name: "Slowbro",
            imageUrl: "forms/080Slowbro-Galar.png",
            number: "076",
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
            dexEntry: "Shellder bites down hard on Slowbro’s arm to suck out more poison. This seems to cause itching, so Slowbro occasionally lashes out.",
            cryUrl: "cries/080.mp3",
            japaneseName: "Yadoran"
        },
        {
            name: "Slowking",
            imageUrl: "forms/199Slowking-Galar.png",
            number: "077",
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
            dexEntry: "It creates potions by mixing toxins with the food it’s eaten. Not even Slowking itself knows what effects the potions will have.",
            cryUrl: "cries/199.mp3",
            japaneseName: "Yadoking"
        },
        {
            name: "Chinchou",
            imageUrl: "images/170Chinchou.png",
            number: "078",
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
            dexEntry: "It shoots positively and negatively charged electricity from the tips of its two antennae and stuns its opponents.",
            cryUrl: "cries/170.mp3",
            japaneseName: "Chonchie"
        },
        {
            name: "Lanturn",
            imageUrl: "images/171Lanturn.png",
            number: "079",
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
            dexEntry: "It blinds prey with an intense burst of light. With the prey incapacitated, the Pokémon swallows it in a single gulp.",
            cryUrl: "cries/171.mp3",
            japaneseName: "Lantern"
        },
        {
            name: "Inkay",
            imageUrl: "images/686Inkay.png",
            number: "080",
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
            dexEntry: "Being upside-down improves its blood flow and clears its mind, causing the power of its psychic moves to increase dramatically.",
            cryUrl: "cries/686.mp3",
            japaneseName: "Maaiika"
        },
        {
            name: "Malamar",
            imageUrl: "images/687Malamar.png",
            number: "081",
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
            dexEntry: "It flashes the luminescent spots on its body to hypnotize its opponents, gaining total control over them.",
            cryUrl: "cries/687.mp3",
            japaneseName: "Calamanero"
        },
        {
            name: "Luvdisc",
            imageUrl: "images/370Luvdisc.png",
            number: "082",
            type: ["Water"],
            category: "Rendezvous",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "19.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.7,
            dexEntry: "During the spawning season, countless Luvdisc congregate at coral reefs, turning the waters pink.",
            cryUrl: "cries/370.mp3",
            japaneseName: "Lovecus"
        },
        {
            name: "Finneon",
            imageUrl: "images/456Finneon.png",
            number: "083",
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
            dexEntry: "It absorbs sunlight with the pink areas of its skin, which then shine. This appears to be a form of camouflage.",
            cryUrl: "cries/456.mp3",
            japaneseName: "Keikouo"
        },
        {
            name: "Lumineon",
            imageUrl: "images/457Lumineon.png",
            number: "084",
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
            dexEntry: "Lumineon swimming in the darkness of the deep sea look like stars shining in the night sky.",
            cryUrl: "cries/457.mp3",
            japaneseName: "Neolant"
        },
        {
            name: "Alomomola",
            imageUrl: "images/594Alomomola.png",
            number: "085",
            type: ["Water"],
            category: "Caring",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "69.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 31.6,
            dexEntry: "They float upon the open sea. Many water Pokémon gather in the area around Alomomola.",
            cryUrl: "cries/594.mp3",
            japaneseName: "Mamanbou"
        },
        {
            name: "Torkoal",
            imageUrl: "images/324Torkoal.png",
            number: "086",
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
            dexEntry: "Coal is the source of Torkoal’s energy. Large amounts of coal can be found in the mountains where they live.",
            cryUrl: "cries/324.mp3",
            japaneseName: "Cotoise"
        },
        {
            name: "Fletchling",
            imageUrl: "images/661Fletchling.png",
            number: "087",
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
            dexEntry: "Fletchling can be found in both rural and urban areas. They once had a huge territorial dispute with Squawkabilly. Fights broke out all over town.",
            cryUrl: "cries/661.mp3",
            japaneseName: "Yayakoma"
        },
        {
            name: "Fletchinder",
            imageUrl: "images/662Fletchinder.png",
            number: "088",
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
            dexEntry: "Its territory has a radius of just over a mile. If any bird Pokémon should enter, it will show them no mercy.",
            cryUrl: "cries/662.mp3",
            japaneseName: "Hinoyakoma"
        },
        {
            name: "Talonflame",
            imageUrl: "images/663Talonflame.png",
            number: "089",
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
            dexEntry: "When it gets excited, it vents sparks from the gaps between its feathers. These unburnable feathers are used as a fireproof material.",
            cryUrl: "cries/663.mp3",
            japaneseName: "Fiarrow"
        },
        {
            name: "Dewpider",
            imageUrl: "images/751Dewpider.png",
            number: "090",
            type: ["Water", "Bug"],
            category: "Water Bubble",
            region: "Alola",
            generation: "07",
            height: "1'00\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 4.0,
            dexEntry: "It supports the water bubble that envelops its head with three of its legs. Sometimes it secretly swaps which legs are holding up the bubble.",
            cryUrl: "cries/751.mp3",
            japaneseName: "Shizukumo"
        },
        {
            name: "Araquanid",
            imageUrl: "images/752Araquanid.png",
            number: "091",
            type: ["Water", "Bug"],
            category: "Water Bubble",
            region: "Alola",
            generation: "07",
            height: "5'11\"",
            weight: "180.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 82.0,
            dexEntry: "It launches sticky water bubbles. Foes who lose consciousness while trapped inside these bubbles will get torn apart by Araquanid’s gnashing jaws.",
            cryUrl: "cries/752.mp3",
            japaneseName: "Onishizukumo"
        },
        {
            name: "Tyrogue",
            imageUrl: "images/236Tyrogue.png",
            number: "092",
            type: ["Fighting"],
            category: "Scuffle",
            region: "Johto",
            generation: "02",
            height: "2'04\"",
            weight: "46.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 21.0,
            dexEntry: "Its intense desire to become stronger and stronger drives it to recklessly train its body and challenge any opponent it can find to battle.",
            cryUrl: "cries/236.mp3",
            japaneseName: "Balkie"
        },
        {
            name: "Hitmonlee",
            imageUrl: "images/106Hitmonlee.png",
            number: "093",
            type: ["Fighting"],
            category: "Kicking",
            region: "Kanto",
            generation: "01",
            height: "4'11\"",
            weight: "109.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 49.8,
            dexEntry: "It has complete control over the ligaments in its legs, expanding and contracting them to double the reach of its kicks.",
            cryUrl: "cries/106.mp3",
            japaneseName: "Sawamular"
        },
        {
            name: "Hitmonchan",
            imageUrl: "images/107Hitmonchan.png",
            number: "094",
            type: ["Fighting"],
            category: "Punching",
            region: "Kanto",
            generation: "01",
            height: "4'07\"",
            weight: "110.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 50.2,
            dexEntry: "Its fists are masses of muscle. It takes a break every three minutes to steady its breath and mood.",
            cryUrl: "cries/107.mp3",
            japaneseName: "Ebiwalar"
        },
        {
            name: "Hitmontop",
            imageUrl: "images/237Hitmontop.png",
            number: "095",
            type: ["Fighting"],
            category: "Handstand",
            region: "Johto",
            generation: "02",
            height: "4'07\"",
            weight: "105.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 48.0,
            dexEntry: "It spins on its horn while dealing out elegant kicks. Its horn grows continuously through its lifetime.",
            cryUrl: "cries/237.mp3",
            japaneseName: "Kapoerer"
        },
        {
            name: "Geodude",
            imageUrl: "forms/074Geodude-Alola.png",
            number: "096",
            type: ["Rock", "Electric"],
            category: "Rock",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "44.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 20.3,
            dexEntry: "If you step on a Geodude sleeping on the ground, you’ll hear a zapping sound and feel a tingling shock throughout your entire body.",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "forms/075Graveler-Alola.png",
            number: "097",
            type: ["Rock", "Electric"],
            category: "Rock",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "242.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 110.0,
            dexEntry: "Graveler’s entire body is electrically charged due to the stones it likes to eat. It is a very quick-tempered Pokémon.",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "forms/076Golem-Alola.png",
            number: "098",
            type: ["Rock", "Electric"],
            category: "Megaton",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "696.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 316.0,
            dexEntry: "It fires rocks charged with electricity. Even if the rock isn’t fired that accurately, just grazing an opponent will cause numbness and fainting.",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Drilbur",
            imageUrl: "images/529Drilbur.png",
            number: "099",
            type: ["Ground"],
            category: "Mole",
            region: "Unova",
            generation: "05",
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
            number: "100",
            type: ["Ground", "Steel"],
            category: "Subterrene",
            region: "Unova",
            generation: "05",
            height: "2'04\"",
            weight: "89.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 40.4,
            dexEntry: "Its drill, which has evolved into steel, is strong enough to bore through iron plates. This Pokémon is a great help in tunnel construction.",
            cryUrl: "cries/530.mp3",
            japaneseName: "Doryuzu"
        },
        {
            name: "Gothita",
            imageUrl: "images/574Gothita.png",
            number: "101",
            type: ["Psychic"],
            category: "Fixation",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "12.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.8,
            dexEntry: "Beware of touching the ribbon-shaped feelers that control its psychic power. Gothita will begin bawling if you do.",
            cryUrl: "cries/574.mp3",
            japaneseName: "Gothimu"
        },
        {
            name: "Gothorita",
            imageUrl: "images/575Gothorita.png",
            number: "102",
            type: ["Psychic"],
            category: "Manipulate",
            region: "Unova",
            generation: "05",
            height: "2'04\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 18.0,
            dexEntry: "Using its psychic power, it arranges pebbles to form the shapes of constellations. Some people believe this Pokémon came from outer space.",
            cryUrl: "cries/575.mp3",
            japaneseName: "Gothimiru"
        },
        {
            name: "Gothitelle",
            imageUrl: "images/576Gothitelle.png",
            number: "103",
            type: ["Psychic"],
            category: "Astral Body",
            region: "Unova",
            generation: "05",
            height: "4'11\"",
            weight: "97.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 44.0,
            dexEntry: "It gazes at the stars to predict the future. It acts somewhat detached because it has seen the end of all existence.",
            cryUrl: "cries/576.mp3",
            japaneseName: "Gothiruselle"
        },
        {
            name: "Espurr",
            imageUrl: "images/677Espurr.png",
            number: "104",
            type: ["Psychic"],
            category: "Restraint",
            region: "Kalos",
            generation: "06",
            height: "1'00\"",
            weight: "7.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.5,
            dexEntry: "Behind an Espurr’s expressionless face is a frantic struggle to contain psychic power.",
            cryUrl: "cries/677.mp3",
            japaneseName: "Nyasper"
        },
        {
            name: "Meowstic",
            imageUrl: "images/678Meowstic.png",
            number: "105",
            type: ["Psychic"],
            category: "Constraint",
            region: "Kalos",
            generation: "06",
            height: "2'00\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.5,
            dexEntry: "If Meowstic continuously emits its powerful psychic energy, it will damage its own body.",
            cryUrl: "cries/678.mp3",
            japaneseName: "Nyaonix"
        },
        {
            name: "Minior",
            imageUrl: "images/774Minior.png",
            number: "106",
            type: ["Rock", "Flying"],
            category: "Meteor",
            region: "Alola",
            generation: "07",
            height: "1'00\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 40.0,
            dexEntry: "It will react when touched or called to, but it’s unknown whether such responses indicate consciousness.",
            cryUrl: "cries/774.mp3",
            japaneseName: "Meteno"
        },
        {
            name: "Cranidos",
            imageUrl: "images/408Cranidos.png",
            number: "107",
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
            dexEntry: "Cranidos toughen up their already sturdy heads by headbutting one another.",
            cryUrl: "cries/408.mp3",
            japaneseName: "Zugaidos"
        },
        {
            name: "Rampardos",
            imageUrl: "images/409Rampardos.png",
            number: "108",
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
            number: "109",
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
            dexEntry: "This Pokémon lived in primeval jungles. It’s thought that Shieldon had few enemies thanks to its sturdy face.",
            cryUrl: "cries/410.mp3",
            japaneseName: "Tatetops"
        },
        {
            name: "Bastiodon",
            imageUrl: "images/411Bastiodon.png",
            number: "110",
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
            dexEntry: "Bastiodon live in herds. When assaulted by enemies, they line up side by side and use their hard faces to block attacks.",
            cryUrl: "cries/411.mp3",
            japaneseName: "Torideps"
        },
        {
            name: "Minccino",
            imageUrl: "images/572Minccino.png",
            number: "111",
            type: ["Normal"],
            category: "Chinchilla",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "12.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.8,
            dexEntry: "These Pokémon like things neat and tidy. They are always sweeping and dusting their habitat, using their tails as brooms.",
            cryUrl: "cries/572.mp3",
            japaneseName: "Chillarmy"
        },
        {
            name: "Cinccino",
            imageUrl: "images/573Cinccino.png",
            number: "112",
            type: ["Normal"],
            category: "Scarf",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 7.5,
            dexEntry: "The oil that seeps from its body is really smooth. For people troubled by bad skin, this oil is an effective treatment.",
            cryUrl: "cries/573.mp3",
            japaneseName: "Chillaccino"
        },
        {
            name: "Skarmory",
            imageUrl: "images/227Skarmory.png",
            number: "113",
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
            dexEntry: "Since the feathers that it sheds are thin and sharp, people apparently once used them as swords.",
            cryUrl: "cries/227.mp3",
            japaneseName: "Airmd"
        },
        {
            name: "Swablu",
            imageUrl: "images/333Swablu.png",
            number: "114",
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
            dexEntry: "It can’t relax if it or its surroundings are not clean. It wipes off dirt with its wings.",
            cryUrl: "cries/333.mp3",
            japaneseName: "Tyltto"
        },
        {
            name: "Altaria",
            imageUrl: "images/334Altaria.png",
            number: "115",
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
            dexEntry: "On sunny days, it flies freely through the sky and blends into the clouds. It sings in a beautiful soprano.",
            cryUrl: "cries/334.mp3",
            japaneseName: "Tyltalis"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "116",
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
            dexEntry: "It moves while constantly hovering. It discharges electromagnetic waves and so on from the units at its sides.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "117",
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
            dexEntry: "They’re formed by several Magnemite linked together. They frequently appear when sunspots flare up.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Magnezone",
            imageUrl: "images/462Magnezone.png",
            number: "118",
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
            dexEntry: "Exposure to a special magnetic field changed Magneton’s molecular structure, turning it into Magnezone.",
            cryUrl: "cries/462.mp3",
            japaneseName: "Jibacoil"
        },
        {
            name: "Plusle",
            imageUrl: "images/311Plusle.png",
            number: "119",
            type: ["Electric"],
            category: "Cheering",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "9.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.2,
            dexEntry: "This Pokémon absorbs electricity from telephone poles. It shorts out the electricity stored inside its body to create noises.",
            cryUrl: "cries/311.mp3",
            japaneseName: "Prasle"
        },
        {
            name: "Minun",
            imageUrl: "images/312Minun.png",
            number: "120",
            type: ["Electric"],
            category: "Cheering",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "9.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.2,
            dexEntry: "Its dislike of water makes it take shelter under the eaves of houses in rain. It uses pom-poms made of sparks for cheering.",
            cryUrl: "cries/312.mp3",
            japaneseName: "Minun"
        },
        {
            name: "Scraggy",
            imageUrl: "images/559Scraggy.png",
            number: "121",
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
            dexEntry: "It will abruptly headbutt anyone that makes eye contact with it. Its skull is extremely hard.",
            cryUrl: "cries/559.mp3",
            japaneseName: "Zuruggu"
        },
        {
            name: "Scrafty",
            imageUrl: "images/560Scrafty.png",
            number: "122",
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
            dexEntry: "This Pokémon may be rude, but it takes very good care of its family, its friends, and its turf.",
            cryUrl: "cries/560.mp3",
            japaneseName: "Zuruzukin"
        },
        {
            name: "Golett",
            imageUrl: "images/622Golett.png",
            number: "123",
            type: ["Ground", "Ghost"],
            category: "Automaton",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "202.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 92.0,
            dexEntry: "Its movements are powered by a mysterious energy. It has continued to move since ancient times, so its power may soon run out.",
            cryUrl: "cries/622.mp3",
            japaneseName: "Gobit"
        },
        {
            name: "Golurk",
            imageUrl: "images/623Golurk.png",
            number: "124",
            type: ["Ground", "Ghost"],
            category: "Automaton",
            region: "Unova",
            generation: "05",
            height: "9'02\"",
            weight: "727.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.8,
            metricWeight: 330.0,
            dexEntry: "Golurk were created by ancient people to protect both people and Pokémon. They run on a mysterious energy.",
            cryUrl: "cries/623.mp3",
            japaneseName: "Goloog"
        },
        {
            name: "Numel",
            imageUrl: "images/322Numel.png",
            number: "125",
            type: ["Fire", "Ground"],
            category: "Numb",
            region: "Hoenn",
            generation: "03",
            height: "2'04\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 24.0,
            dexEntry: "The flaming magma it stores in the hump on its back is the source of its tremendous power.",
            cryUrl: "cries/322.mp3",
            japaneseName: "Donmel"
        },
        {
            name: "Camerupt",
            imageUrl: "images/323Camerupt.png",
            number: "126",
            type: ["Fire", "Ground"],
            category: "Eruption",
            region: "Hoenn",
            generation: "03",
            height: "6'03\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 220.0,
            dexEntry: "If angered, the humps on its back erupt in a shower of molten lava. It lives in the craters of volcanoes.",
            cryUrl: "cries/323.mp3",
            japaneseName: "Bakuuda"
        },
        {
            name: "Sinistea",
            imageUrl: "images/854Sinistea.png",
            number: "127",
            type: ["Ghost"],
            category: "Black Tea",
            region: "Galar",
            generation: "08",
            height: "0'04\"",
            weight: "0.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.1,
            metricWeight: 0.2,
            dexEntry: "Sinistea gets into your body when you drink it, and then it steals your vitality from within. It also tastes awful.",
            cryUrl: "cries/854.mp3",
            japaneseName: "Yabacha"
        },
        {
            name: "Polteageist",
            imageUrl: "images/855Polteageist.png",
            number: "128",
            type: ["Ghost"],
            category: "Black Tea",
            region: "Galar",
            generation: "08",
            height: "0'08\"",
            weight: "0.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.4,
            dexEntry: "These Pokémon multiply by creeping into teapots and pouring themselves into leftover tea.",
            cryUrl: "cries/855.mp3",
            japaneseName: "Potdeath"
        },
        {
            name: "Porygon",
            imageUrl: "images/137Porygon.png",
            number: "129",
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
            dexEntry: "Porygon is an artificial Pokémon created using advanced scientific means. It can move freely through cyberspace.",
            cryUrl: "cries/137.mp3",
            japaneseName: "Porygon"
        },
        {
            name: "Porygon2",
            imageUrl: "images/233Porygon2.png",
            number: "130",
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
            dexEntry: "Porygon was upgraded to become capable of planetary development. However, this upgraded version cannot even fly yet.",
            cryUrl: "cries/233.mp3",
            japaneseName: "Porygon2"
        },
        {
            name: "Porygon-Z",
            imageUrl: "images/474Porygon-Z.png",
            number: "131",
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
            dexEntry: "Its programming was modified to enable it to operate in other dimensions. This did not work as planned.",
            cryUrl: "cries/474.mp3",
            japaneseName: "Porygon-Z"
        },
        {
            name: "Joltik",
            imageUrl: "images/595Joltik.png",
            number: "132",
            type: ["Bug", "Electric"],
            category: "Attaching",
            region: "Unova",
            generation: "05",
            height: "0'04\"",
            weight: "1.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.1,
            metricWeight: 0.6,
            dexEntry: "Since it can’t generate its own electricity, it sticks onto large-bodied Pokémon and absorbs static electricity.",
            cryUrl: "cries/595.mp3",
            japaneseName: "Bachuru"
        },
        {
            name: "Galvantula",
            imageUrl: "images/596Galvantula.png",
            number: "133",
            type: ["Bug", "Electric"],
            category: "EleSpider",
            region: "Unova",
            generation: "05",
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
            name: "Tynamo",
            imageUrl: "images/602Tynamo.png",
            number: "134",
            type: ["Electric"],
            category: "EleFish",
            region: "Unova",
            generation: "05",
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
            number: "135",
            type: ["Electric"],
            category: "EleFish",
            region: "Unova",
            generation: "05",
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
            number: "136",
            type: ["Electric"],
            category: "EleFish",
            region: "Unova",
            generation: "05",
            height: "6'11\"",
            weight: "177.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 80.5,
            dexEntry: "It latches on to prey with its sucker mouth, sinking in its fangs and shocking the prey with powerful electricity.",
            cryUrl: "cries/604.mp3",
            japaneseName: "Shibirudon"
        },
        {
            name: "Beldum",
            imageUrl: "images/374Beldum.png",
            number: "137",
            type: ["Steel", "Psychic"],
            category: "Iron Ball",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "209.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 95.2,
            dexEntry: "All its cells are magnets. It communicates with others of its kind by transmitting magnetic forces from its body.",
            cryUrl: "cries/374.mp3",
            japaneseName: "Dumbber"
        },
        {
            name: "Metang",
            imageUrl: "images/375Metang.png",
            number: "138",
            type: ["Steel", "Psychic"],
            category: "Iron Claw",
            region: "Hoenn",
            generation: "03",
            height: "3'11\"",
            weight: "446.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 202.5,
            dexEntry: "It adores magnetic minerals, so it pursues Nosepass at speeds exceeding 60 mph.",
            cryUrl: "cries/375.mp3",
            japaneseName: "Metang",
        },
        {
            name: "Metagross",
            imageUrl: "images/376Metagross.png",
            number: "139",
            type: ["Steel", "Psychic"],
            category: "Iron Leg",
            region: "Hoenn",
            generation: "03",
            height: "5'03\"",
            weight: "1212.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 550.0,
            dexEntry: "It firmly pins its prey using its four claws and large body. Then Metagross uses the mouth on its stomach to chew its prey to bits.",
            cryUrl: "cries/376.mp3",
            japaneseName: "Metagross"
        },
        {
            name: "Axew",
            imageUrl: "images/610Axew.png",
            number: "140",
            type: ["Dragon"],
            category: "Tusk",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 18.0,
            dexEntry: "If you see peculiar teeth marks on boulders or trees, it means an Axew is likely living nearby.",
            cryUrl: "cries/610.mp3",
            japaneseName: "Kibago"
        },
        {
            name: "Fraxure",
            imageUrl: "images/611Fraxure.png",
            number: "141",
            type: ["Dragon"],
            category: "Axe Jaw",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "79.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 36.0,
            dexEntry: "Fraxure uses its thick tusks to neatly cut prey into two portions—one to eat now and one to save for later.",
            cryUrl: "cries/611.mp3",
            japaneseName: "Onondo"
        },
        {
            name: "Haxorus",
            imageUrl: "images/612Haxorus.png",
            number: "142",
            type: ["Dragon"],
            category: "Axe Jaw",
            region: "Unova",
            generation: "05",
            height: "5'11\"",
            weight: "232.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 105.5,
            dexEntry: "It overwhelms enemies with its prized tusks, which are sharp enough to cut through a metal transmission tower in one strike.",
            cryUrl: "cries/612.mp3",
            japaneseName: "Ononokus"
        },
        {
            name: "Seel",
            imageUrl: "images/086Seel.png",
            number: "143",
            type: ["Water"],
            category: "Sea Lion",
            region: "Kanto",
            generation: "01",
            height: "3'07\"",
            weight: "198.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 90.0,
            dexEntry: "The colder it gets, the better it feels. It joyfully swims around oceans so cold that they are filled with floating ice.",
            cryUrl: "cries/086.mp3",
            japaneseName: "Pawou"
        },
        {
            name: "Dewgong",
            imageUrl: "images/087Dewgong.png",
            number: "144",
            type: ["Water", "Ice"],
            category: "Sea Lion",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 120.0,
            dexEntry: "It stores thermal energy in its body to fend off the cold. It swims at eight knots even in frigid waters.",
            cryUrl: "cries/087.mp3",
            japaneseName: "Jugon"
        },
        {
            name: "Lapras",
            imageUrl: "images/131Lapras.png",
            number: "145",
            type: ["Water", "Ice"],
            category: "Transport",
            region: "Kanto",
            generation: "01",
            height: "8'02\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 220.0,
            dexEntry: "Able to understand human speech and very intelligent, it loves to swim in the sea with people on its back.",
            cryUrl: "cries/131.mp3",
            japaneseName: "Laplace"
        },
        {
            name: "Qwilfish",
            imageUrl: "forms/211Qwilfish-Hisui.png",
            number: "146",
            type: ["Dark", "Poison"],
            category: "Balloon",
            region: "Johto",
            generation: "02",
            height: "1'08\"",
            weight: "8.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 3.9,
            dexEntry: "It absorbs toxins from the food it eats. The distinct purple spikes on its body are evidence of its potent poison.",
            cryUrl: "cries/211.mp3",
            japaneseName: "Harysen"
        },
        {
            name: "Overqwil",
            imageUrl: "images/904Overqwil.png",
            number: "147",
            type: ["Dark", "Poison"],
            category: "Pin Cluster",
            region: "Hisui",
            generation: "08",
            height: "8'02\"",
            weight: "133.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 60.5,
            dexEntry: "It’s ferocious and has a short temper. The ends of its spikes are barbed, and they can’t be easily removed once they’ve punctured something.",
            cryUrl: "cries/904.mp3",
            japaneseName: "Haryman"
        },
        {
            name: "Solosis",
            imageUrl: "images/577Solosis.png",
            number: "148",
            type: ["Psychic"],
            category: "Cell",
            region: "Unova",
            generation: "05",
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
            number: "149",
            type: ["Psychic"],
            category: "Mitosis",
            region: "Unova",
            generation: "05",
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
            number: "150",
            type: ["Psychic"],
            category: "Multiplying",
            region: "Unova",
            generation: "05",
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
            name: "Snubbull",
            imageUrl: "images/209Snubbull.png",
            number: "151",
            type: ["Fairy"],
            category: "Fairy",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "17.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.8,
            dexEntry: "Its growls make its opponents uneasy. This laid-back Pokémon tends to sleep half the day.",
            cryUrl: "cries/209.mp3",
            japaneseName: "Bulu"
        },
        {
            name: "Granbull",
            imageUrl: "images/210Granbull.png",
            number: "152",
            type: ["Fairy"],
            category: "Fairy",
            region: "Johto",
            generation: "02",
            height: "4'07\"",
            weight: "107.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 48.7,
            dexEntry: "It can make most any Pokémon run away by opening its big mouth to reveal its thick fangs.",
            cryUrl: "cries/210.mp3",
            japaneseName: "Granbulu"
        },
        {
            name: "Cubchoo",
            imageUrl: "images/613Cubchoo.png",
            number: "153",
            type: ["Ice"],
            category: "Chill",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 8.5,
            dexEntry: "When Cubchoo starts sneezing, watch out! If it spatters you with its frosty snot, you’ll get frostbite.",
            cryUrl: "cries/613.mp3",
            japaneseName: "Kumasyun"
        },
        {
            name: "Beartic",
            imageUrl: "images/614Beartic.png",
            number: "154",
            type: ["Ice"],
            category: "Freezing",
            region: "Unova",
            generation: "05",
            height: "8'06\"",
            weight: "573.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.6,
            metricWeight: 260.0,
            dexEntry: "Feared as the Snow-White Demon in northern lands, Beartic uses its frosty claws and fangs to attack prey.",
            cryUrl: "cries/614.mp3",
            japaneseName: "Tunbear"
        },
        {
            name: "Sandshrew",
            imageUrl: "forms/027Sandshrew-Alola.png",
            number: "155",
            type: ["Ice", "Steel"],
            category: "Mouse",
            region: "Kanto",
            generation: "01",
            height: "2'04\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 40.0,
            dexEntry: "An ancient tradition of Alolan festivals, still carried on to this day, is a competition to slide Sandshrew across ice as far as one can.",
            cryUrl: "cries/027.mp3",
            japaneseName: "Sand"
        },
        {
            name: "Sandslash",
            imageUrl: "forms/028Sandslash-Alola.png",
            number: "156",
            type: ["Ice", "Steel"],
            category: "Mouse",
            region: "Kanto",
            generation: "01",
            height: "3'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 55.0,
            dexEntry: "A long, long time ago, it lived in the desert. With its sharp claws fully extended, it can run right up an iceberg without slipping.",
            cryUrl: "cries/028.mp3",
            japaneseName: "Sandpan"
        },
        {
            name: "Vulpix",
            imageUrl: "forms/037Vulpix-Alola.png",
            number: "157",
            type: ["Ice"],
            category: "Fox",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "21.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.9,
            dexEntry: "In hot weather, this Pokémon makes ice shards with its six tails and sprays them around to cool itself off.",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "forms/038Ninetales-Alola.png",
            number: "158",
            type: ["Ice", "Fairy"],
            category: "Fox",
            region: "Kanto",
            generation: "01",
            height: "3'07\"",
            weight: "43.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 19.9,
            dexEntry: "It creates drops of ice in its coat and showers them over its enemies. Anyone who angers it will be frozen stiff in an instant.",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Snover",
            imageUrl: "images/459Snover.png",
            number: "159",
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
            number: "160",
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
            name: "Duraludon",
            imageUrl: "images/884Duraludon.png",
            number: "161",
            type: ["Steel", "Dragon"],
            category: "Alloy",
            region: "Galar",
            generation: "08",
            height: "5'11\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 40.0,
            dexEntry: "Its metal body is durable but prone to retaining heat. It vents this heat from the slits in its tail.",
            cryUrl: "cries/884.mp3",
            japaneseName: "Duraludon"
        },
        {
            name: "Archaludon",
            imageUrl: "images/1018Archaludon.png",
            number: "162",
            type: ["Steel", "Dragon"],
            category: "Alloy",
            region: "Paldea",
            generation: "09",
            height: "6'07\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 60.0,
            dexEntry: "It digs holes on mountains, searching for food. It’s so durable that being caught in a cave-in won’t faze it.",
            cryUrl: "cries/1018.mp3",
            japaneseName: "Briduras"
        },
        {
            name: "Hydrapple",
            imageUrl: "images/1019Hydrapple.png",
            number: "163",
            type: ["Grass", "Dragon"],
            category: "Apple Hydra",
            region: "Paldea",
            generation: "09",
            height: "5'11\"",
            weight: "205.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 93.0,
            dexEntry: "These capricious syrpents have banded together. On the rare occasion that their moods align, their true power is unleashed.",
            cryUrl: "cries/1019.mp3",
            japaneseName: "Kamitsuorochi"
        },
        {
            name: "Bulbasaur",
            imageUrl: "images/001Bulbasaur.png",
            number: "164",
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
            dexEntry: "It carries a seed on its back right from birth. As its body grows larger, the seed does too.",
            cryUrl: "cries/001.mp3",
            japaneseName: "Fushigidane"
        },
        {
            name: "Ivysaur",
            imageUrl: "images/002Ivysaur.png",
            number: "165",
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
            dexEntry: "The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.",
            cryUrl: "cries/002.mp3",
            japaneseName: "Fushigisou"
        },
        {
            name: "Venusaur",
            imageUrl: "images/003Venusaur.png",
            number: "166",
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
            dexEntry: "By spreading the broad petals of its flower and catching the sun’s rays, it fills its body with power.",
            cryUrl: "cries/003.mp3",
            japaneseName: "Fushigibana"
        },
        {
            name: "Charmander",
            imageUrl: "images/004Charmander.png",
            number: "167",
            type: ["Fire"],
            category: "Lizard",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.5,
            dexEntry: "If Charmander is healthy, the flame on the tip of its tail will burn vigorously and won’t go out even if it gets a bit wet.",
            cryUrl: "cries/004.mp3",
            japaneseName: "Hitokage"
        },
        {
            name: "Charmeleon",
            imageUrl: "images/005Charmeleon.png",
            number: "168",
            type: ["Fire"],
            category: "Flame",
            region: "Kanto",
            generation: "01",
            height: "3'07\"",
            weight: "41.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 19.0,
            dexEntry: "It is very hotheaded by nature, so it constantly seeks opponents to battle against. Its aggression will not be quelled if it doesn’t win.",
            cryUrl: "cries/005.mp3",
            japaneseName: "Lizardo"
        },
        {
            name: "Charizard",
            imageUrl: "images/006Charizard.png",
            number: "169",
            type: ["Fire", "Flying"],
            category: "Flame",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "199.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 90.5,
            dexEntry: "It uses its wings to fly sky-high. The more experience it gains in battle, the greater the temperature at which its flames burn.",
            cryUrl: "cries/006.mp3",
            japaneseName: "Lizardon"
        },
        {
            name: "Squirtle",
            imageUrl: "images/007Squirtle.png",
            number: "170",
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
            dexEntry: "Its shell is soft immediately after it is born. In no time at all, the shell becomes so resilient that a prodding finger will bounce right off it.",
            cryUrl: "cries/007.mp3",
            japaneseName: "Zenigame"
        },
        {
            name: "Wartortle",
            imageUrl: "images/008Wartortle.png",
            number: "171",
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
            dexEntry: "It often hides in water to stalk unwary prey. While swimming quickly, it moves its ears to maintain balance.",
            cryUrl: "cries/008.mp3",
            japaneseName: "Kameil"
        },
        {
            name: "Blastoise",
            imageUrl: "images/009Blastoise.png",
            number: "172",
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
            dexEntry: "It has jet nozzles on its shell. This impressive Pokémon uses these jets to charge toward foes with all the force of a rocket.",
            cryUrl: "cries/009.mp3",
            japaneseName: "Kamex"
        },
        {
            name: "Chikorita",
            imageUrl: "images/152Chikorita.png",
            number: "173",
            type: ["Grass"],
            category: "Leaf",
            region: "Johto",
            generation: "02",
            height: "2'11\"",
            weight: "14.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 6.4,
            dexEntry: "Its pleasantly aromatic leaf has the ability to check the humidity and temperature of the area around it.",
            cryUrl: "cries/152.mp3",
            japaneseName: "Chicorita"
        },
        {
            name: "Bayleef",
            imageUrl: "images/153Bayleef.png",
            number: "174",
            type: ["Grass"],
            category: "Leaf",
            region: "Johto",
            generation: "02",
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
            number: "175",
            type: ["Grass"],
            category: "Herb",
            region: "Johto",
            generation: "02",
            height: "5'11\"",
            weight: "221.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 100.5,
            dexEntry: "Meganium’s breath holds within it the power to revive grasses and plants that have withered.",
            cryUrl: "cries/154.mp3",
            japaneseName: "Meganium"
        },
        {
            name: "Cyndaquil",
            imageUrl: "images/155Cyndaquil.png",
            number: "176",
            type: ["Fire"],
            category: "Fire Mouse",
            region: "Johto",
            generation: "02",
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
            number: "177",
            type: ["Fire"],
            category: "Volcano",
            region: "Johto",
            generation: "02",
            height: "2'11\"",
            weight: "41.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.0,
            dexEntry: "The fur covering this Pokémon’s body never burns, no matter what. It can shrug off any kind of fire attack.",
            cryUrl: "cries/156.mp3",
            japaneseName: "Magmarashi"
        },
        {
            name: "Typhlosion",
            imageUrl: "images/157Typhlosion.png",
            number: "178",
            type: ["Fire"],
            category: "Volcano",
            region: "Johto",
            generation: "02",
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
            number: "179",
            type: ["Water"],
            category: "Big Jaw",
            region: "Johto",
            generation: "02",
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
            number: "180",
            type: ["Water"],
            category: "Big Jaw",
            region: "Johto",
            generation: "02",
            height: "3'07\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 25.0,
            dexEntry: "It opens its huge jaws wide to attack. If it loses fangs while biting, they’ll just keep on growing back, one after another.",
            cryUrl: "cries/159.mp3",
            japaneseName: "Alligates"
        },
        {
            name: "Feraligatr",
            imageUrl: "images/160Feraligatr.png",
            number: "181",
            type: ["Water"],
            category: "Big Jaw",
            region: "Johto",
            generation: "02",
            height: "7'07\"",
            weight: "195.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.3,
            metricWeight: 88.8,
            dexEntry: "Although it has a massive body, its powerful hind legs enable it to move quickly, even on land.",
            cryUrl: "cries/160.mp3",
            japaneseName: "Ordile"
        },
        {
            name: "Treecko",
            imageUrl: "images/252Treecko.png",
            number: "182",
            type: ["Grass"],
            category: "Wood Gecko",
            region: "Hoenn",
            generation: "03",
            height: "1'08\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.0,
            dexEntry: "Treecko can quickly scale even vertical surfaces. It senses humidity with its tail to predict the next day’s weather.",
            cryUrl: "cries/252.mp3",
            japaneseName: "Kimori"
        },
        {
            name: "Grovyle",
            imageUrl: "images/253Grovyle.png",
            number: "183",
            type: ["Grass"],
            category: "Wood Gecko",
            region: "Hoenn",
            generation: "03",
            height: "2'11\"",
            weight: "47.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 21.6,
            dexEntry: "Grovyle leaps from branch to branch in large trees, moving with ease. It propels itself with astounding speed and force.",
            cryUrl: "cries/253.mp3",
            japaneseName: "Juptile"
        },
        {
            name: "Sceptile",
            imageUrl: "images/254Sceptile.png",
            number: "184",
            type: ["Grass"],
            category: "Forest",
            region: "Hoenn",
            generation: "03",
            height: "5'07\"",
            weight: "115.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 52.2,
            dexEntry: "The leaves on its arms are as sharp as swords. It agilely leaps about the branches of trees to strike its enemies.",
            cryUrl: "cries/254.mp3",
            japaneseName: "Jukain"
        },
        {
            name: "Torchic",
            imageUrl: "images/255Torchic.png",
            number: "185",
            type: ["Fire"],
            category: "Chick",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.5,
            dexEntry: "In its belly, it has a sac filled with burning fire, meaning that Torchic feels as warm as a hot-water bottle if you hug it.",
            cryUrl: "cries/255.mp3",
            japaneseName: "Achamo"
        },
        {
            name: "Combusken",
            imageUrl: "images/256Combusken.png",
            number: "186",
            type: ["Fire", "Fighting"],
            category: "Young Fowl",
            region: "Hoenn",
            generation: "03",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "When it enters battle, the flame inside its body burns stronger. Its kicks have outstanding destructive power.",
            cryUrl: "cries/256.mp3",
            japaneseName: "Wakasyamo"
        },
        {
            name: "Blaziken",
            imageUrl: "images/257Blaziken.png",
            number: "187",
            type: ["Fire", "Fighting"],
            category: "Blaze",
            region: "Hoenn",
            generation: "03",
            height: "6'03\"",
            weight: "114.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 52.0,
            dexEntry: "It can jump powerfully, clearing a 30-story building in a single leap. Its flaming punches scorch its opponents.",
            cryUrl: "cries/257.mp3",
            japaneseName: "Bursyamo"
        },
        {
            name: "Mudkip",
            imageUrl: "images/258Mudkip.png",
            number: "188",
            type: ["Water"],
            category: "Mud Fish",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "16.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.6,
            dexEntry: "When it uses its large tail fin, it picks up speed rapidly in the water. It is strong in spite of its small size.",
            cryUrl: "cries/258.mp3",
            japaneseName: "Mizugorou"
        },
        {
            name: "Marshtomp",
            imageUrl: "images/259Marshtomp.png",
            number: "189",
            type: ["Water", "Ground"],
            category: "Mud Fish",
            region: "Hoenn",
            generation: "03",
            height: "2'04\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 28.0,
            dexEntry: "It is at its best when on muddy ground that offers poor footing. It quickly overwhelms opponents that are bogged down and unable to move.",
            cryUrl: "cries/259.mp3",
            japaneseName: "Numacraw"
        },
        {
            name: "Swampert",
            imageUrl: "images/260Swampert.png",
            number: "190",
            type: ["Water", "Ground"],
            category: "Mud Fish",
            region: "Hoenn",
            generation: "03",
            height: "4'11\"",
            weight: "180.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 81.9,
            dexEntry: "Swampert’s arms are rock-hard. With one swing, they can batter down Swampert’s foes. This Pokémon makes its nest on beautiful beaches.",
            cryUrl: "cries/260.mp3",
            japaneseName: "Laglarge"
        },
        {
            name: "Turtwig",
            imageUrl: "images/387Turtwig.png",
            number: "191",
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
            dexEntry: "It uses its whole body to photosynthesize when exposed to sunlight. Its shell is made from hardened soil.",
            cryUrl: "cries/387.mp3",
            japaneseName: "Naetle"
        },
        {
            name: "Grotle",
            imageUrl: "images/388Grotle.png",
            number: "192",
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
            number: "193",
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
            dexEntry: "Some Pokémon are born on a Torterra’s back and spend their entire life there.",
            cryUrl: "cries/389.mp3",
            japaneseName: "Dodaitose"
        },
        {
            name: "Chimchar",
            imageUrl: "images/390Chimchar.png",
            number: "194",
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
            dexEntry: "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.",
            cryUrl: "cries/390.mp3",
            japaneseName: "Hikozaru"
        },
        {
            name: "Monferno",
            imageUrl: "images/391Monferno.png",
            number: "195",
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
            dexEntry: "A bigger fire on its tail and a brighter blue pattern on its face means it holds a higher rank in its troop.",
            cryUrl: "cries/391.mp3",
            japaneseName: "Moukazaru"
        },
        {
            name: "Infernape",
            imageUrl: "images/392Infernape.png",
            number: "196",
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
            number: "197",
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
            dexEntry: "It doesn’t like to be taken care of. It’s difficult to bond with since it won’t listen to its Trainer.",
            cryUrl: "cries/393.mp3",
            japaneseName: "Pochama"
        },
        {
            name: "Prinplup",
            imageUrl: "images/394Prinplup.png",
            number: "198",
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
            number: "199",
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
            dexEntry: "It avoids unnecessary disputes, but it will mercilessly decimate anything that threatens the safety of its colony.",
            cryUrl: "cries/395.mp3",
            japaneseName: "Emperte"
        },
        {
            name: "Snivy",
            imageUrl: "images/495Snivy.png",
            number: "200",
            type: ["Grass"],
            category: "Grass Snake",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "17.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.1,
            dexEntry: "It prefers to avoid groups. In its day-to-day life, it dexterously controls its vines to compensate for its short arms.",
            cryUrl: "cries/495.mp3",
            japaneseName: "Tsutarja"
        },
        {
            name: "Servine",
            imageUrl: "images/496Servine.png",
            number: "201",
            type: ["Grass"],
            category: "Grass Snake",
            region: "Unova",
            generation: "05",
            height: "2'07\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 16.0,
            dexEntry: "Servine’s one weakness is its inflated sense of pride. It takes a while for Servine to be able to cooperate with other Pokémon.",
            cryUrl: "cries/496.mp3",
            japaneseName: "Janovy"
        },
        {
            name: "Serperior",
            imageUrl: "images/497Serperior.png",
            number: "202",
            type: ["Grass"],
            category: "Regal",
            region: "Unova",
            generation: "05",
            height: "10'10\"",
            weight: "138.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.3,
            metricWeight: 63.0,
            dexEntry: "An intimidating gaze and majestic appearance have caused this Pokémon to be known as the Lord of the Forest.",
            cryUrl: "cries/497.mp3",
            japaneseName: "Jalorda"
        },
        {
            name: "Tepig",
            imageUrl: "images/498Tepig.png",
            number: "203",
            type: ["Fire"],
            category: "Fire Pig",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "21.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.9,
            dexEntry: "This Pokémon is a ravenous glutton. It uses its excellent sense of smell to find food, then cooks it to a crisp before eating.",
            cryUrl: "cries/498.mp3",
            japaneseName: "Pokabu"
        },
        {
            name: "Pignite",
            imageUrl: "images/499Pignite.png",
            number: "204",
            type: ["Fire", "Fighting"],
            category: "Fire Pig",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "122.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 55.5,
            dexEntry: "When defending its friends, Pignite will stand up to any opponent, no matter how strong. But it’s powerless when faced with an empty stomach.",
            cryUrl: "cries/499.mp3",
            japaneseName: "Chaoboo"
        },
        {
            name: "Emboar",
            imageUrl: "images/500Emboar.png",
            number: "205",
            type: ["Fire", "Fighting"],
            category: "Mega Fire Pig",
            region: "Unova",
            generation: "05",
            height: "5'03\"",
            weight: "330.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 150.0,
            dexEntry: "The direr the situation, the more it seems to enjoy itself. The flames around its neck intensify, too, increasing Emboar’s power and speed.",
            cryUrl: "cries/500.mp3",
            japaneseName: "Enbuoh"
        },
        {
            name: "Oshawott",
            imageUrl: "images/501Oshawott.png",
            number: "206",
            type: ["Water"],
            category: "Sea Otter",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "13.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.9,
            dexEntry: "It’s said that Oshawott learned to maintain its scalchop with riverbed stones by mimicking humans it saw using whetstones.",
            cryUrl: "cries/501.mp3",
            japaneseName: "Mijumaru"
        },
        {
            name: "Dewott",
            imageUrl: "images/502Dewott.png",
            number: "207",
            type: ["Water"],
            category: "Discipline",
            region: "Unova",
            generation: "05",
            height: "2'07\"",
            weight: "54.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.5,
            dexEntry: "Dewott has a studious and stern personality. It masters the use of its scalchops through dedicated, repeated training.",
            cryUrl: "cries/502.mp3",
            japaneseName: "Futachimaru"
        },
        {
            name: "Samurott",
            imageUrl: "images/503Samurott.png",
            number: "208",
            type: ["Water"],
            category: "Formidable",
            region: "Unova",
            generation: "05",
            height: "4'11\"",
            weight: "208.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 94.6,
            dexEntry: "Samurott leads its group strictly. Those who do not follow its rules receive a merciless thrashing.",
            cryUrl: "cries/503.mp3",
            japaneseName: "Daikenki"
        },
        {
            name: "Chespin",
            imageUrl: "images/650Chespin.png",
            number: "209",
            type: ["Grass"],
            category: "Spiny Nut",
            region: "Kalos",
            generation: "06",
            height: "1'04\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 9.0,
            dexEntry: "Eating lots of berries makes the bark shell that covers Chespin’s head and body grow sturdier.",
            cryUrl: "cries/650.mp3",
            japaneseName: "Harimaron"
        },
        {
            name: "Quilladin",
            imageUrl: "images/651Quilladin.png",
            number: "210",
            type: ["Grass"],
            category: "Spiny Armor",
            region: "Kalos",
            generation: "06",
            height: "2'04\"",
            weight: "63.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 29.0,
            dexEntry: "It can send a trailer flying with a tackle. It’s numb to pain, so even violent collisions don’t faze it.",
            cryUrl: "cries/651.mp3",
            japaneseName: "Hariborg"
        },
        {
            name: "Chesnaught",
            imageUrl: "images/652Chesnaught.png",
            number: "211",
            type: ["Grass", "Fighting"],
            category: "Spiny Armor",
            region: "Kalos",
            generation: "06",
            height: "5'03\"",
            weight: "198.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 90.0,
            dexEntry: "Its gentle disposition would have it avoid conflict, but it gives opponents a thrashing with its thorned fists when the situation calls for it.",
            cryUrl: "cries/652.mp3",
            japaneseName: "Brigarron"
        },
        {
            name: "Fennekin",
            imageUrl: "images/653Fennekin.png",
            number: "212",
            type: ["Fire"],
            category: "Fox",
            region: "Kalos",
            generation: "06",
            height: "1'04\"",
            weight: "20.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 9.4,
            dexEntry: "Twigs make for Fennekin’s snacks. When it nibbles on twigs, it finds the courage to face strong foes.",
            cryUrl: "cries/653.mp3",
            japaneseName: "Fokko"
        },
        {
            name: "Braixen",
            imageUrl: "images/654Braixen.png",
            number: "213",
            type: ["Fire"],
            category: "Fox",
            region: "Kalos",
            generation: "06",
            height: "3'03\"",
            weight: "32.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 14.5,
            dexEntry: "Braixen’s branch ignites as it’s pulled from the Pokémon’s tail. Braixen then uses the flame to spark powerful attacks.",
            cryUrl: "cries/654.mp3",
            japaneseName: "Tairenar"
        },
        {
            name: "Delphox",
            imageUrl: "images/655Delphox.png",
            number: "214",
            type: ["Fire", "Psychic"],
            category: "Fox",
            region: "Kalos",
            generation: "06",
            height: "4'11\"",
            weight: "86.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 39.0,
            dexEntry: "It controls flames telekinetically, trapping its foes in a fiery vortex surpassing 5,400 degrees Fahrenheit and burning them to a crisp.",
            cryUrl: "cries/655.mp3",
            japaneseName: "Mahoxy"
        },
        {
            name: "Froakie",
            imageUrl: "images/656Froakie.png",
            number: "215",
            type: ["Water"],
            category: "Bubble Frog",
            region: "Kalos",
            generation: "06",
            height: "1'00\"",
            weight: "15.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 7.0,
            dexEntry: "It utilizes its extraordinary jumping abilities to flummox its foes, throwing springy bubbles at them from above their heads.",
            cryUrl: "cries/656.mp3",
            japaneseName: "Keromatsu"
        },
        {
            name: "Frogadier",
            imageUrl: "images/657Frogadier.png",
            number: "216",
            type: ["Water"],
            category: "Bubble Frog",
            region: "Kalos",
            generation: "06",
            height: "2'00\"",
            weight: "24.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.9,
            dexEntry: "The tips of its fingers and toes stick firmly to vertical surfaces. Frogadier can scale skyscrapers with ease.",
            cryUrl: "cries/657.mp3",
            japaneseName: "Gekogashira"
        },
        {
            name: "Greninja",
            imageUrl: "images/658Greninja.png",
            number: "217",
            type: ["Water", "Dark"],
            category: "Ninja",
            region: "Kalos",
            generation: "06",
            height: "4'11\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 40.0,
            dexEntry: "It makes shuriken out of mucus excreted from its thighs. These shuriken can cut cleanly through steel cables.",
            cryUrl: "cries/658.mp3",
            japaneseName: "Gekkouga"
        },
        {
            name: "Rowlet",
            imageUrl: "images/722Rowlet.png",
            number: "218",
            type: ["Grass", "Flying"],
            category: "Grass Quill",
            region: "Alola",
            generation: "07",
            height: "1'00\"",
            weight: "3.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.5,
            dexEntry: "It feels relaxed in tight, dark places and has been known to nestle into its Trainer’s bag or the front of their jacket.",
            cryUrl: "cries/722.mp3",
            japaneseName: "Mokuroh"
        },
        {
            name: "Dartrix",
            imageUrl: "images/723Dartrix.png",
            number: "219",
            type: ["Grass", "Flying"],
            category: "Blade Quill",
            region: "Alola",
            generation: "07",
            height: "2'04\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.0,
            dexEntry: "It throws sharp feathers called blade quills at enemies or prey. It seldom misses.",
            cryUrl: "cries/723.mp3",
            japaneseName: "Fukuthrow"
        },
        {
            name: "Decidueye",
            imageUrl: "images/724Decidueye.png",
            number: "220",
            type: ["Grass", "Ghost"],
            category: "Arrow Quill",
            region: "Alola",
            generation: "07",
            height: "5'03\"",
            weight: "80.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 36.6,
            dexEntry: "It nocks its arrow quills and looses them at opponents. When it needs to hit, it pulls the vines on its hood to narrow its view and focus.",
            cryUrl: "cries/724.mp3",
            japaneseName: "Junaiper"
        },
        {
            name: "Litten",
            imageUrl: "images/725Litten.png",
            number: "221",
            type: ["Fire"],
            category: "Fire Cat",
            region: "Alola",
            generation: "07",
            height: "1'04\"",
            weight: "9.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.3,
            dexEntry: "While grooming itself, it builds up fur inside its stomach. It sets the fur alight and spews fiery attacks, which change based on how it coughs.",
            cryUrl: "cries/725.mp3",
            japaneseName: "Nyabby"
        },
        {
            name: "Torracat",
            imageUrl: "images/726Torracat.png",
            number: "222",
            type: ["Fire"],
            category: "Fire Cat",
            region: "Alola",
            generation: "07",
            height: "2'04\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 25.0,
            dexEntry: "Torracat will let its Trainer coddle it once they’ve grown close, but it’s a powerful, sharp-clawed Pokémon, so its Trainer gets covered in scratches.",
            cryUrl: "cries/726.mp3",
            japaneseName: "Nyaheat"
        },
        {
            name: "Incineroar",
            imageUrl: "images/727Incineroar.png",
            number: "223",
            type: ["Fire", "Dark"],
            category: "Heel",
            region: "Alola",
            generation: "07",
            height: "5'11\"",
            weight: "183.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 83.0,
            dexEntry: "After hurling ferocious punches and flinging furious kicks, it finishes opponents off by spewing fire from around its navel.",
            cryUrl: "cries/727.mp3",
            japaneseName: "Gaogaen"
        },
        {
            name: "Popplio",
            imageUrl: "images/728Popplio.png",
            number: "224",
            type: ["Water"],
            category: "Sea Lion",
            region: "Alola",
            generation: "07",
            height: "1'04\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.5,
            dexEntry: "The balloons it inflates with its nose grow larger and larger as it practices day by day.",
            cryUrl: "cries/728.mp3",
            japaneseName: "Ashimari"
        },
        {
            name: "Brionne",
            imageUrl: "images/729Brionne.png",
            number: "225",
            type: ["Water"],
            category: "Pop Star",
            region: "Alola",
            generation: "07",
            height: "2'00\"",
            weight: "38.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 17.5,
            dexEntry: "It cares deeply for its companions. When its Trainer is feeling down, it performs a cheery dance to try to help.",
            cryUrl: "cries/729.mp3",
            japaneseName: "Osyamari"
        },
        {
            name: "Primarina",
            imageUrl: "images/730Primarina.png",
            number: "226",
            type: ["Water", "Fairy"],
            category: "Soloist",
            region: "Alola",
            generation: "07",
            height: "5'11\"",
            weight: "97.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 44.0,
            dexEntry: "Also known as a songstress, it is a sight to behold on moonlit nights when it sings in front of the colony it leads.",
            cryUrl: "cries/730.mp3",
            japaneseName: "Ashirene"
        },
        {
            name: "Grookey",
            imageUrl: "images/810Grookey.png",
            number: "227",
            type: ["Grass"],
            category: "Chimp",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 5.0,
            dexEntry: "As Grookey strikes everything in sight with its stick, it has more and more fun, and its rhythm becomes livelier.",
            cryUrl: "cries/810.mp3",
            japaneseName: "Sarunori"
        },
        {
            name: "Thwackey",
            imageUrl: "images/811Thwackey.png",
            number: "228",
            type: ["Grass"],
            category: "Beat",
            region: "Galar",
            generation: "08",
            height: "2'04\"",
            weight: "30.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 14.0,
            dexEntry: "It becomes intensely focused while it drums out vigorous beats—so much so that sometimes it won’t listen to its Trainer’s commands.",
            cryUrl: "cries/811.mp3",
            japaneseName: "Bachinkey"
        },
        {
            name: "Rillaboom",
            imageUrl: "images/812Rillaboom.png",
            number: "229",
            type: ["Grass"],
            category: "Drummer",
            region: "Galar",
            generation: "08",
            height: "5'11\"",
            weight: "198.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 90.0,
            dexEntry: "When one Rillaboom challenges another who leads a troop, a drumming battle commences. The victor becomes the troop’s new boss.",
            cryUrl: "cries/812.mp3",
            japaneseName: "Gorirander"
        },
        {
            name: "Scorbunny",
            imageUrl: "images/813Scorbunny.png",
            number: "230",
            type: ["Fire"],
            category: "Rabbit",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "9.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 4.5,
            dexEntry: "Fire energy gathers in the pads of its feet, raising their temperature. Once hot, Scorbunny’s footpads can deal heavy damage to opponents.",
            cryUrl: "cries/813.mp3",
            japaneseName: "Hibanny"
        },
        {
            name: "Raboot",
            imageUrl: "images/814Raboot.png",
            number: "231",
            type: ["Fire"],
            category: "Rabbit",
            region: "Galar",
            generation: "08",
            height: "2'00\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.0,
            dexEntry: "While it prides itself on its varied kicking moves, it can also deliver powerful headbutts once its flames have heated up its forehead.",
            cryUrl: "cries/814.mp3",
            japaneseName: "Rabbifuto"
        },
        {
            name: "Cinderace",
            imageUrl: "images/815Cinderace.png",
            number: "232",
            type: ["Fire"],
            category: "Striker",
            region: "Galar",
            generation: "08",
            height: "4'07\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 33.0,
            dexEntry: "Using a ball that it made out of flames, Cinderace blinds its opponents and keeps them at bay.",
            cryUrl: "cries/815.mp3",
            japaneseName: "Aceburn"
        },
        {
            name: "Sobble",
            imageUrl: "images/816Sobble.png",
            number: "233",
            type: ["Water"],
            category: "Water Lizard",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 4.0,
            dexEntry: "It’s a very cautious Pokémon. When it has no choice but to battle, it hides itself before attacking.",
            cryUrl: "cries/816.mp3",
            japaneseName: "Messon"
        },
        {
            name: "Drizzile",
            imageUrl: "images/817Drizzile.png",
            number: "234",
            type: ["Water"],
            category: "Water Lizard",
            region: "Galar",
            generation: "08",
            height: "2'04\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 11.5,
            dexEntry: "Highly intelligent but also very lazy, it defends its home by laying traps.",
            cryUrl: "cries/817.mp3",
            japaneseName: "Jimereon"
        },
        {
            name: "Inteleon",
            imageUrl: "images/818Inteleon.png",
            number: "235",
            type: ["Water"],
            category: "Secret Agent",
            region: "Galar",
            generation: "08",
            height: "6'03\"",
            weight: "99.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 45.2,
            dexEntry: "It may present itself as being well-mannered, but deep down, it still has a lazy side. It will slack off when its Trainer isn’t looking.",
            cryUrl: "cries/818.mp3",
            japaneseName: "Intereon"
        },
        {
            name: "Gouging Fire",
            imageUrl: "images/1020Gouging_Fire.png",
            number: "236",
            type: ["Fire", "Dragon"],
            category: "Paradox",
            region: "Paldea",
            generation: "09",
            height: "11'06\"",
            weight: "1300.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.5,
            metricWeight: 590.0,
            dexEntry: "It resembles an eerie Pokémon once shown in a paranormal magazine. That Pokémon was said to be an Entei regenerated from a fossil.",
            cryUrl: "cries/1020.mp3",
            japaneseName: "Ugatsuhomura"
        },
        {
            name: "Raging Bolt",
            imageUrl: "images/1021Raging_Bolt.png",
            number: "237",
            type: ["Electric", "Dragon"],
            category: "Paradox",
            region: "Paldea",
            generation: "09",
            height: "17'01\"",
            weight: "1058.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 5.2,
            metricWeight: 480.0,
            dexEntry: "It bears resemblance to a Pokémon that became a hot topic for a short while after a paranormal magazine touted it as Raikou’s ancestor.",
            cryUrl: "cries/1021.mp3",
            japaneseName: "Takeruraiko"
        },
        {
            name: "Iron Crown",
            imageUrl: "images/1023Iron_Crown.png",
            number: "238",
            type: ["Steel", "Psychic"],
            category: "Paradox",
            region: "Paldea",
            generation: "09",
            height: "5'03\"",
            weight: "343.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 156.0,
            dexEntry: "There was supposedly an incident in which it launched shining blades to cut everything around it to pieces. Little else is known about it.",
            cryUrl: "cries/1023.mp3",
            japaneseName: "Tetsunokashira"
        },
        {
            name: "Iron Boulder",
            imageUrl: "images/1022Iron_Boulder.png",
            number: "239",
            type: ["Rock", "Psychic"],
            category: "Paradox",
            region: "Paldea",
            generation: "09",
            height: "4'11\"",
            weight: "358.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 162.5,
            dexEntry: "It was named after a mysterious object recorded in an old book. Its body seems to be metallic.",
            cryUrl: "cries/1022.mp3",
            japaneseName: "Tetsunoiwao"
        },
        {
            name: "Terapagos",
            imageUrl: "images/1024Terapagos.png",
            number: "240",
            type: ["Normal"],
            category: "Tera",
            region: "Paldea",
            generation: "09",
            height: "1'00\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 16.0,
            dexEntry: "The shell is made of crystallized Terastal energy. When struck by a move, this shell absorbs the move’s energy and transfers it to Terapagos.",
            cryUrl: "cries/1024.mp3",
            japaneseName: "Terapagos"
        },
        {
            name: "Walking Wake",
            imageUrl: "images/1009Walking_Wake.png",
            number: "241",
            type: ["Water", "Dragon"],
            category: "Paradox",
            region: "Paldea",
            generation: "09",
            height: "11'06\"",
            weight: "617.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.5,
            metricWeight: 280.0,
            dexEntry: "It resembles an illustration published in a paranormal magazine, said to be a depiction of a super-ancient Suicune.",
            cryUrl: "cries/1009.mp3",
            japaneseName: "Uneruminamo"
        },
        {
            name: "Iron Leaves",
            imageUrl: "images/1010Iron_Leaves.png",
            number: "242",
            type: ["Grass", "Psychic"],
            category: "Paradox",
            region: "Paldea",
            generation: "09",
            height: "4'11\"",
            weight: "275.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 125.0,
            dexEntry: "According to the few eyewitness accounts that exist, it used its shining blades to julienne large trees and boulders.",
            cryUrl: "cries/1010.mp3",
            japaneseName: "Tetsunoisaha"
        },
        {
            name: "Pecharunt",
            imageUrl: "images/1025Pecharunt.png",
            number: "243",
            type: ["Poison", "Ghost"],
            category: "Subjugation",
            region: "Paldea",
            generation: "09",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "Its peach-shaped shell serves as storage for a potent poison. It makes poisonous mochi and serves them to people and Pokémon.",
            cryUrl: "cries/1025.mp3",
            japaneseName: "Momowarou"
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