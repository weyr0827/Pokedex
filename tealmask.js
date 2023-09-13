//Teal Mask Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Spinarak",
            imageUrl: "images/167Spinarak.png",
            number: "001",
            type: ["Bug", "Poison"],
            category: "String Spit",
            region: "Johto",
            generation: "02",
            height: "1'08\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 8.5,
            dexEntry: "",
            cryUrl: "cries/167.mp3",
            japaneseName: "Itomaru"
        },
        {
            name: "Ariados",
            imageUrl: "images/168Ariados.png",
            number: "002",
            type: ["Bug", "Poison"],
            category: "Long Leg",
            region: "Johto",
            generation: "02",
            height: "3'07\"",
            weight: "73.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 33.5,
            dexEntry: "",
            cryUrl: "cries/168.mp3",
            japaneseName: "Ariados"
        },
        {
            name: "Yanma",
            imageUrl: "images/193Yanma.png",
            number: "003",
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
            dexEntry: "",
            cryUrl: "cries/193.mp3",
            japaneseName: "Yanyanma"
        },
        {
            name: "Yanmega",
            imageUrl: "images/469Yanmega.png",
            number: "004",
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
            dexEntry: "",
            cryUrl: "cries/469.mp3",
            japaneseName: "Megayanma"
        },
        {
            name: "Wooper",
            imageUrl: "images/194Wooper.png",
            number: "005",
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
            dexEntry: "",
            cryUrl: "cries/194.mp3",
            japaneseName: "Upah"
        },
        {
            name: "Quagsire",
            imageUrl: "images/195Quagsire.png",
            number: "006",
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
            dexEntry: "",
            cryUrl: "cries/195.mp3",
            japaneseName: "Nuoh"
        },
        {
            name: "Poochyena",
            imageUrl: "images/261Poochyena.png",
            number: "007",
            type: ["Dark"],
            category: "Bite",
            region: "Hoenn",
            generation: "03",
            height: "1'08\"",
            weight: "30.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 13.6,
            dexEntry: "",
            cryUrl: "cries/261.mp3",
            japaneseName: "Pochiena"
        },
        {
            name: "Mightyena",
            imageUrl: "images/262Mightyena.png",
            number: "008",
            type: ["Dark"],
            category: "Bite",
            region: "Hoenn",
            generation: "03",
            height: "3'03\"",
            weight: "81.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 37.0,
            dexEntry: "",
            cryUrl: "cries/262.mp3",
            japaneseName: "Graena"
        },
        {
            name: "Volbeat",
            imageUrl: "images/313Volbeat.png",
            number: "009",
            type: ["Bug"],
            category: "Firefly",
            region: "Hoenn",
            generation: "03",
            height: "2'04\"",
            weight: "39.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 17.7,
            dexEntry: "",
            cryUrl: "cries/313.mp3",
            japaneseName: "Barubeat"
        },
        {
            name: "Illumise",
            imageUrl: "images/314Illumise.png",
            number: "010",
            type: ["Bug"],
            category: "Firefly",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "39.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 17.7,
            dexEntry: "",
            cryUrl: "cries/314.mp3",
            japaneseName: "Illumise"
        },
        {
            name: "Corphish",
            imageUrl: "images/341Corphish.png",
            number: "011",
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
            dexEntry: "",
            cryUrl: "cries/341.mp3",
            japaneseName: "Heigani"
        },
        {
            name: "Crawdaunt",
            imageUrl: "images/342Crawdaunt.png",
            number: "012",
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
            dexEntry: "",
            cryUrl: "cries/342.mp3",
            japaneseName: "Shizariger"
        },
        {
            name: "Sewaddle",
            imageUrl: "images/540Sewaddle.png",
            number: "013",
            type: ["Bug", "Grass"],
            category: "Sewing",
            region: "Unova",
            generation: "05",
            height: "1'00\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.5,
            dexEntry: "",
            cryUrl: "cries/540.mp3",
            japaneseName: "Kurumiru"
        },
        {
            name: "Swadloon",
            imageUrl: "images/541Swadloon.png",
            number: "014",
            type: ["Bug", "Grass"],
            category: "Leaf-Wrapped",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "16.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 7.3,
            dexEntry: "",
            cryUrl: "cries/541.mp3",
            japaneseName: "Kurumayu"
        },
        {
            name: "Leavanny",
            imageUrl: "images/542Leavanny.png",
            number: "015",
            type: ["Bug", "Grass"],
            category: "Nurturing",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "45.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 20.5,
            dexEntry: "",
            cryUrl: "cries/542.mp3",
            japaneseName: "Hahakomori"
        },
        {
            name: "Cutiefly",
            imageUrl: "images/742Cutiefly.png",
            number: "016",
            type: ["Bug", "Fairy"],
            category: "Bee Fly",
            region: "Alola",
            generation: "07",
            height: "0'04\"",
            weight: "0.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.1,
            metricWeight: 0.2,
            dexEntry: "",
            cryUrl: "cries/742.mp3",
            japaneseName: "Abuly"
        },
        {
            name: "Ribombee",
            imageUrl: "images/743Ribombee.png",
            number: "017",
            type: ["Bug", "Fairy"],
            category: "Bee Fly",
            region: "Alola",
            generation: "07",
            height: "0'08\"",
            weight: "1.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.5,
            dexEntry: "",
            cryUrl: "cries/743.mp3",
            japaneseName: "Aburibbon"
        },
        {
            name: "Ekans",
            imageUrl: "images/023Ekans.png",
            number: "018",
            type: ["Poison"],
            category: "Snake",
            region: "Kanto",
            generation: "01",
            height: "6'07\"",
            weight: "15.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 6.9,
            dexEntry: "",
            cryUrl: "cries/023.mp3",
            japaneseName: "Arbo"
        },
        {
            name: "Arbok",
            imageUrl: "images/024Arbok.png",
            number: "019",
            type: ["Poison"],
            category: "Cobra",
            region: "Kanto",
            generation: "01",
            height: "11'06\"",
            weight: "143.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.5,
            metricWeight: 65.0,
            dexEntry: "",
            cryUrl: "cries/024.mp3",
            japaneseName: "Arbok"
        },
        {
            name: "Pichu",
            imageUrl: "images/172Pichu.png",
            number: "020",
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
            dexEntry: "",
            cryUrl: "cries/172.mp3",
            japaneseName: "Pichu"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "021",
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
            dexEntry: "",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "022",
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
            dexEntry: "",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Bellsprout",
            imageUrl: "images/069Bellsprout.png",
            number: "023",
            type: ["Grass", "Poison"],
            category: "Flower",
            region: "Kanto",
            generation: "01",
            height: "2'04\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 4.0,
            dexEntry: "",
            cryUrl: "cries/069.mp3",
            japaneseName: "Madatsubomi"
        },
        {
            name: "Weepinbell",
            imageUrl: "images/070Weepinbell.png",
            number: "024",
            type: ["Grass", "Poison"],
            category: "Flycatcher",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "14.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 6.4,
            dexEntry: "",
            cryUrl: "cries/070.mp3",
            japaneseName: "Utsudon"
        },
        {
            name: "Victreebel",
            imageUrl: "images/071Victreebel.png",
            number: "025",
            type: ["Grass", "Poison"],
            category: "Flycatcher",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "34.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 15.5,
            dexEntry: "",
            cryUrl: "cries/071.mp3",
            japaneseName: "Utsubot"
        },
        {
            name: "Sentret",
            imageUrl: "images/161Sentret.png",
            number: "026",
            type: ["Normal"],
            category: "Scout",
            region: "Johto",
            generation: "02",
            height: "2'07\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 6.0,
            dexEntry: "",
            cryUrl: "cries/161.mp3",
            japaneseName: "Otachi"
        },
        {
            name: "Furret",
            imageUrl: "images/162Furret.png",
            number: "027",
            type: ["Normal"],
            category: "Long Body",
            region: "Johto",
            generation: "02",
            height: "5'11\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 32.5,
            dexEntry: "",
            cryUrl: "cries/162.mp3",
            japaneseName: "Ootachi"
        },
        {
            name: "Starly",
            imageUrl: "images/396Starly.png",
            number: "028",
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
            dexEntry: "",
            cryUrl: "cries/396.mp3",
            japaneseName: "Mukkuru"
        },
        {
            name: "Staravia",
            imageUrl: "images/397Staravia.png",
            number: "029",
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
            dexEntry: "",
            cryUrl: "cries/397.mp3",
            japaneseName: "Mukubird"
        },
        {
            name: "Staraptor",
            imageUrl: "images/398Staraptor.png",
            number: "030",
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
            dexEntry: "",
            cryUrl: "cries/398.mp3",
            japaneseName: "Mukuhawk"
        },
        {
            name: "Fomantis",
            imageUrl: "images/753Fomantis.png",
            number: "031",
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
            dexEntry: "",
            cryUrl: "cries/753.mp3",
            japaneseName: "Karikiri"
        },
        {
            name: "Lurantis",
            imageUrl: "images/754Lurantis.png",
            number: "032",
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
            dexEntry: "",
            cryUrl: "cries/754.mp3",
            japaneseName: "Lalantes"
        },
        {
            name: "Applin",
            imageUrl: "images/840Applin.png",
            number: "033",
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
            dexEntry: "",
            cryUrl: "cries/840.mp3",
            japaneseName: "Kajicchu"
        },
        {
            name: "Flapple",
            imageUrl: "images/841Flapple.png",
            number: "034",
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
            dexEntry: "",
            cryUrl: "cries/841.mp3",
            japaneseName: "Appryu"
        },
        {
            name: "Appletun",
            imageUrl: "images/842Appletun.png",
            number: "035",
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
            dexEntry: "",
            cryUrl: "cries/842.mp3",
            japaneseName: "Tarupple"
        },
        {
            name: "Dipplin",
            imageUrl: "images/1011Dipplin.png",
            number: "036",
            type: ["Grass", "Dragon"],
            category: "Candy Apple",
            region: "Paldea",
            generation: "09",
            height: "1'04\"",
            weight: "9.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.4,
            dexEntry: "",
            cryUrl: "cries/1011.mp3",
            japaneseName: "Kamicchu"
        },
        {
            name: "Vulpix",
            imageUrl: "images/037Vulpix.png",
            number: "037",
            type: ["Fire"],
            category: "Fox",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "21.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.9,
            dexEntry: "",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "images/038Ninetales.png",
            number: "038",
            type: ["Fire"],
            category: "Fox",
            region: "Kanto",
            generation: "01",
            height: "3'07\"",
            weight: "43.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 19.9,
            dexEntry: "",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Poliwag",
            imageUrl: "images/060Poliwag.png",
            number: "039",
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
            dexEntry: "",
            cryUrl: "cries/060.mp3",
            japaneseName: "Nyoromo"
        },
        {
            name: "Poliwhirl",
            imageUrl: "images/061Poliwhirl.png",
            number: "040",
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
            dexEntry: "",
            cryUrl: "cries/061.mp3",
            japaneseName: "Nyorozo"
        },
        {
            name: "Poliwrath",
            imageUrl: "images/062Poliwrath.png",
            number: "041",
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
            dexEntry: "",
            cryUrl: "cries/062.mp3",
            japaneseName: "Nyorobon"
        },
        {
            name: "Politoed",
            imageUrl: "images/186Politoed.png",
            number: "042",
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
            dexEntry: "",
            cryUrl: "cries/186.mp3",
            japaneseName: "Nyorotono"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "043",
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
            dexEntry: "",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "044",
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
            dexEntry: "",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Hoothoot",
            imageUrl: "images/163Hoothoot.png",
            number: "045",
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
            dexEntry: "",
            cryUrl: "cries/163.mp3",
            japaneseName: "Hoho"
        },
        {
            name: "Noctowl",
            imageUrl: "images/164Noctowl.png",
            number: "046",
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
            dexEntry: "",
            cryUrl: "cries/164.mp3",
            japaneseName: "Yorunozuku"
        },
        {
            name: "Aipom",
            imageUrl: "images/190Aipom.png",
            number: "047",
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
            dexEntry: "",
            cryUrl: "cries/190.mp3",
            japaneseName: "Eipom"
        },
        {
            name: "Ambipom",
            imageUrl: "images/424Ambipom.png",
            number: "048",
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
            dexEntry: "",
            cryUrl: "cries/424.mp3",
            japaneseName: "Eteboth"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "049",
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
            dexEntry: "",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Swinub",
            imageUrl: "images/220Swinub.png",
            number: "050",
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
            dexEntry: "",
            cryUrl: "cries/220.mp3",
            japaneseName: "Urimoo"
        },
        {
            name: "Piloswine",
            imageUrl: "images/221Piloswine.png",
            number: "051",
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
            dexEntry: "",
            cryUrl: "cries/221.mp3",
            japaneseName: "Inomoo"
        },
        {
            name: "Mamoswine",
            imageUrl: "images/473Mamoswine.png",
            number: "052",
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
            dexEntry: "",
            cryUrl: "cries/473.mp3",
            japaneseName: "Mammoo"
        },
        {
            name: "Stantler",
            imageUrl: "images/234Stantler.png",
            number: "053",
            type: ["Normal"],
            category: "Big Horn",
            region: "Johto",
            generation: "02",
            height: "4'07\"",
            weight: "157.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 71.2,
            dexEntry: "",
            cryUrl: "cries/234.mp3",
            japaneseName: "Odoshishi"
        },
        {
            name: "Seedot",
            imageUrl: "images/273Seedot.png",
            number: "054",
            type: ["Grass"],
            category: "Acorn",
            region: "Hoenn",
            generation: "03",
            height: "1'08\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 4.0,
            dexEntry: "",
            cryUrl: "cries/273.mp3",
            japaneseName: "Taneboh"
        },
        {
            name: "Nuzleaf",
            imageUrl: "images/274Nuzleaf.png",
            number: "055",
            type: ["Grass", "Dark"],
            category: "Wily",
            region: "Hoenn",
            generation: "03",
            height: "3'03\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.0,
            dexEntry: "",
            cryUrl: "cries/274.mp3",
            japaneseName: "Konohana"
        },
        {
            name: "Shiftry",
            imageUrl: "images/275Shiftry.png",
            number: "056",
            type: ["Grass", "Dark"],
            category: "Wicked",
            region: "Hoenn",
            generation: "03",
            height: "4'03\"",
            weight: "131.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 59.6,
            dexEntry: "",
            cryUrl: "cries/275.mp3",
            japaneseName: "Dirteng"
        },
        {
            name: "Ralts",
            imageUrl: "images/280Ralts.png",
            number: "057",
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
            dexEntry: "",
            cryUrl: "cries/280.mp3",
            japaneseName: "Ralts"
        },
        {
            name: "Kirlia",
            imageUrl: "images/281Kirlia.png",
            number: "058",
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
            dexEntry: "",
            cryUrl: "cries/281.mp3",
            japaneseName: "Kirlia"
        },
        {
            name: "Gardevoir",
            imageUrl: "images/282Gardevoir.png",
            number: "059",
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
            dexEntry: "",
            cryUrl: "cries/282.mp3",
            japaneseName: "Sirnight"
        },
        {
            name: "Gallade",
            imageUrl: "images/475Gallade.png",
            number: "060",
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
            dexEntry: "",
            cryUrl: "cries/475.mp3",
            japaneseName: "Erureido"
        },
        {
            name: "Kricketot",
            imageUrl: "images/401Kricketot.png",
            number: "061",
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
            dexEntry: "",
            cryUrl: "cries/401.mp3",
            japaneseName: "Korobohshi"
        },
        {
            name: "Kricketune",
            imageUrl: "images/402Kricketune.png",
            number: "062",
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
            dexEntry: "",
            cryUrl: "cries/402.mp3",
            japaneseName: "Korotock"
        },
        {
            name: "Pachirisu",
            imageUrl: "images/417Pachirisu.png",
            number: "063",
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
            dexEntry: "",
            cryUrl: "cries/417.mp3",
            japaneseName: "Pachirisu"
        },
        {
            name: "Riolu",
            imageUrl: "images/447Riolu.png",
            number: "064",
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
            dexEntry: "",
            cryUrl: "cries/447.mp3",
            japaneseName: "Riolu"
        },
        {
            name: "Lucario",
            imageUrl: "images/448Lucario.png",
            number: "065",
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
            dexEntry: "",
            cryUrl: "cries/448.mp3",
            japaneseName: "Lucario"
        },
        {
            name: "Petilil",
            imageUrl: "images/548Petilil.png",
            number: "066",
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
            dexEntry: "",
            cryUrl: "cries/548.mp3",
            japaneseName: "Churine"
        },
        {
            name: "Lilligant",
            imageUrl: "images/549Lilligant.png",
            number: "067",
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
            dexEntry: "",
            cryUrl: "cries/549.mp3",
            japaneseName: "Dredear"
        },
        {
            name: "Phantump",
            imageUrl: "images/708Phantump.png",
            number: "068",
            type: ["Ghost", "Grass"],
            category: "Stump",
            region: "Kalos",
            generation: "06",
            height: "1'04\"",
            weight: "15.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.0,
            dexEntry: "",
            cryUrl: "cries/708.mp3",
            japaneseName: "Bokurei"
        },
        {
            name: "Trevenant",
            imageUrl: "images/709Trevenant.png",
            number: "069",
            type: ["Ghost", "Grass"],
            category: "Elder Tree",
            region: "Kalos",
            generation: "06",
            height: "4'11\"",
            weight: "156.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 71.0,
            dexEntry: "",
            cryUrl: "cries/709.mp3",
            japaneseName: "Ohrot"
        },
        {
            name: "Rockruff",
            imageUrl: "images/744Rockruff.png",
            number: "070",
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
            dexEntry: "",
            cryUrl: "cries/744.mp3",
            japaneseName: "Iwanko"
        },
        {
            name: "Lycanroc",
            imageUrl: "images/745Lycanroc.png",
            number: "071",
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
            dexEntry: "",
            cryUrl: "cries/745.mp3",
            japaneseName: "Lugarugan"
        },
        {
            name: "Skwovet",
            imageUrl: "images/819Skwovet.png",
            number: "072",
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
            dexEntry: "",
            cryUrl: "cries/819.mp3",
            japaneseName: "Hoshigarisu"
        },
        {
            name: "Greedent",
            imageUrl: "images/820Greedent.png",
            number: "073",
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
            dexEntry: "",
            cryUrl: "cries/820.mp3",
            japaneseName: "Yokubarisu"
        },
        {
            name: "Toedscool",
            imageUrl: "images/948Toedscool.png",
            number: "074",
            type: ["Ground", "Grass"],
            category: "Woodear",
            region: "Paldea",
            generation: "09",
            height: "2'11\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 33.0,
            dexEntry: "",
            cryUrl: "cries/948.mp3",
            japaneseName: "Nonokurage"
        },
        {
            name: "Toedscruel",
            imageUrl: "images/949Toedscruel.png",
            number: "075",
            type: ["Ground", "Grass"],
            category: "Woodear",
            region: "Paldea",
            generation: "09",
            height: "6'03\"",
            weight: "127.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 58.0,
            dexEntry: "",
            cryUrl: "cries/949.mp3",
            japaneseName: "Rikukurage"
        },
        {
            name: "Poltchageist",
            imageUrl: "images/1012Poltchageist.png",
            number: "076",
            type: ["Grass", "Ghost"],
            category: "Matcha",
            region: "Paldea",
            generation: "09",
            height: "0'04\"",
            weight: "2.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.1,
            metricWeight: 1.1,
            dexEntry: "",
            cryUrl: "cries/1012.mp3",
            japaneseName: "Chadesu"
        },
        {
            name: "Sinistcha",
            imageUrl: "images/1013Sinistcha.png",
            number: "077",
            type: ["Grass", "Ghost"],
            category: "Matcha",
            region: "Paldea",
            generation: "09",
            height: "0'08\"",
            weight: "4.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.2,
            dexEntry: "",
            cryUrl: "cries/1013.mp3",
            japaneseName: "Yabasocha"
        },
        {
            name: "Growlithe",
            imageUrl: "images/058Growlithe.png",
            number: "078",
            type: ["Fire"],
            category: "Puppy",
            region: "Kanto",
            generation: "01",
            height: "2'04\"",
            weight: "41.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 19.0,
            dexEntry: "",
            cryUrl: "cries/058.mp3",
            japaneseName: "Gardie"
        },
        {
            name: "Arcanine",
            imageUrl: "images/059Arcanine.png",
            number: "079",
            type: ["Fire"],
            category: "Legendary",
            region: "Kanto",
            generation: "01",
            height: "6'03\"",
            weight: "341.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 155.0,
            dexEntry: "",
            cryUrl: "cries/059.mp3",
            japaneseName: "Windie"
        },
        {
            name: "Geodude",
            imageUrl: "images/074Geodude.png",
            number: "080",
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
            dexEntry: "",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "images/075Graveler.png",
            number: "081",
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
            dexEntry: "",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "images/076Golem.png",
            number: "082",
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
            dexEntry: "",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Bonsly",
            imageUrl: "images/438Bonsly.png",
            number: "083",
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
            dexEntry: "",
            cryUrl: "cries/438.mp3",
            japaneseName: "Usohachi"
        },
        {
            name: "Sudowoodo",
            imageUrl: "images/185Sudowoodo.png",
            number: "084",
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
            dexEntry: "",
            cryUrl: "cries/185.mp3",
            japaneseName: "Usokkie"
        },
        {
            name: "Timburr",
            imageUrl: "images/532Timburr.png",
            number: "085",
            type: ["Fighting"],
            category: "Muscular",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.5,
            dexEntry: "",
            cryUrl: "cries/532.mp3",
            japaneseName: "Dokkorer"
        },
        {
            name: "Gurdurr",
            imageUrl: "images/533Gurdurr.png",
            number: "086",
            type: ["Fighting"],
            category: "Muscular",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 40.0,
            dexEntry: "",
            cryUrl: "cries/533.mp3",
            japaneseName: "Dotekkotsu"
        },
        {
            name: "Conkeldurr",
            imageUrl: "images/534Conkeldurr.png",
            number: "087",
            type: ["Fighting"],
            category: "Muscular",
            region: "Unova",
            generation: "05",
            height: "4'07\"",
            weight: "191.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 87.0,
            dexEntry: "",
            cryUrl: "cries/534.mp3",
            japaneseName: "Roubushin"
        },
        {
            name: "Noibat",
            imageUrl: "images/714Noibat.png",
            number: "088",
            type: ["Flying", "Dragon"],
            category: "Sound Wave",
            region: "Kalos",
            generation: "06",
            height: "1'08\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 8.0,
            dexEntry: "",
            cryUrl: "cries/714.mp3",
            japaneseName: "Onbat"
        },
        {
            name: "Noivern",
            imageUrl: "images/715Noivern.png",
            number: "089",
            type: ["Flying", "Dragon"],
            category: "Sound Wave",
            region: "Kalos",
            generation: "06",
            height: "4'11\"",
            weight: "187.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 85.0,
            dexEntry: "",
            cryUrl: "cries/715.mp3",
            japaneseName: "Onvern"
        },
        {
            name: "Arrokuda",
            imageUrl: "images/846Arrokuda.png",
            number: "090",
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
            dexEntry: "",
            cryUrl: "cries/846.mp3",
            japaneseName: "Sasikamasu"
        },
        {
            name: "Barraskewda",
            imageUrl: "images/847Barraskewda.png",
            number: "091",
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
            dexEntry: "",
            cryUrl: "cries/847.mp3",
            japaneseName: "Kamasujaw"
        },
        {
            name: "Hatenna",
            imageUrl: "images/856Hatenna.png",
            number: "092",
            type: ["Psychic"],
            category: "Calm",
            region: "Galar",
            generation: "08",
            height: "1'04\"",
            weight: "7.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 3.4,
            dexEntry: "",
            cryUrl: "cries/856.mp3",
            japaneseName: "Mibrim"
        },
        {
            name: "Hattrem",
            imageUrl: "images/857Hattrem.png",
            number: "093",
            type: ["Psychic"],
            category: "Serene",
            region: "Galar",
            generation: "08",
            height: "2'00\"",
            weight: "10.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 4.8,
            dexEntry: "",
            cryUrl: "cries/857.mp3",
            japaneseName: "Tebrim"
        },
        {
            name: "Hatterene",
            imageUrl: "images/858Hatterene.png",
            number: "094",
            type: ["Psychic", "Fairy"],
            category: "Silent",
            region: "Galar",
            generation: "08",
            height: "6'11\"",
            weight: "11.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 5.1,
            dexEntry: "",
            cryUrl: "cries/858.mp3",
            japaneseName: "Brimuon"
        },
        {
            name: "Morpeko",
            imageUrl: "images/877Morpeko.png",
            number: "095",
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
            dexEntry: "",
            cryUrl: "cries/877.mp3",
            japaneseName: "Morpeko"
        },
        {
            name: "Orthworm",
            imageUrl: "images/968Orthworm.png",
            number: "096",
            type: ["Steel"],
            category: "Earthworm",
            region: "Paldea",
            generation: "09",
            height: "8'02\"",
            weight: "683.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 310.0,
            dexEntry: "",
            cryUrl: "cries/968.mp3",
            japaneseName: "Mimizuzu"
        },
        {
            name: "Tandemaus",
            imageUrl: "images/924Tandemaus.png",
            number: "097",
            type: ["Normal"],
            category: "Couple",
            region: "Paldea",
            generation: "09",
            height: "1'00\"",
            weight: "4.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.8,
            dexEntry: "",
            cryUrl: "cries/924.mp3",
            japaneseName: "Wakkanezumi"
        },
        {
            name: "Maushold",
            imageUrl: "images/925Maushold.png",
            number: "098",
            type: ["Normal"],
            category: "Family",
            region: "Paldea",
            generation: "09",
            height: "1'00\"",
            weight: "6.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.8,
            dexEntry: "",
            cryUrl: "cries/925.mp3",
            japaneseName: "Ikkanezumi"
        },
        {
            name: "Mankey",
            imageUrl: "images/056Mankey.png",
            number: "099",
            type: ["Fighting"],
            category: "Pig Monkey",
            region: "Kanto",
            generation: "01",
            height: "1'08\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 28.0,
            dexEntry: "",
            cryUrl: "cries/056.mp3",
            japaneseName: "Mankey"
        },
        {
            name: "Primeape",
            imageUrl: "images/057Primeape.png",
            number: "100",
            type: ["Fighting"],
            category: "Pig Monkey",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "70.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 32.0,
            dexEntry: "",
            cryUrl: "cries/057.mp3",
            japaneseName: "Okorizaru"
        },
        {
            name: "Annihilape",
            imageUrl: "images/979Annihilape.png",
            number: "101",
            type: ["Fighting", "Ghost"],
            category: "Rage Monkey",
            region: "Paldea",
            generation: "09",
            height: "3'11\"",
            weight: "123.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 56.0,
            dexEntry: "",
            cryUrl: "cries/979.mp3",
            japaneseName: "Konoyozaru"
        },
        {
            name: "Munchlax",
            imageUrl: "images/446Munchlax.png",
            number: "102",
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
            dexEntry: "",
            cryUrl: "cries/446.mp3",
            japaneseName: "Gonbe"
        },
        {
            name: "Snorlax",
            imageUrl: "images/143Snorlax.png",
            number: "103",
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
            dexEntry: "",
            cryUrl: "cries/143.mp3",
            japaneseName: "Kabigon"
        },
        {
            name: "Lotad",
            imageUrl: "images/270Lotad.png",
            number: "104",
            type: ["Water", "Grass"],
            category: "Water Weed",
            region: "Hoenn",
            generation: "03",
            height: "1'08\"",
            weight: "5.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.6,
            dexEntry: "",
            cryUrl: "cries/270.mp3",
            japaneseName: "Hassboh"
        },
        {
            name: "Lombre",
            imageUrl: "images/271Lombre.png",
            number: "105",
            type: ["Water", "Grass"],
            category: "Jolly",
            region: "Hoenn",
            generation: "03",
            height: "3'11\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 32.5,
            dexEntry: "",
            cryUrl: "cries/271.mp3",
            japaneseName: "Hasubrero"
        },
        {
            name: "Ludicolo",
            imageUrl: "images/272Ludicolo.png",
            number: "106",
            type: ["Water", "Grass"],
            category: "Carefree",
            region: "Hoenn",
            generation: "03",
            height: "4'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 55.0,
            dexEntry: "",
            cryUrl: "cries/272.mp3",
            japaneseName: "Runpappa"
        },
        {
            name: "Nosepass",
            imageUrl: "images/299Nosepass.png",
            number: "107",
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
            dexEntry: "",
            cryUrl: "cries/299.mp3",
            japaneseName: "Nosepass"
        },
        {
            name: "Probopass",
            imageUrl: "images/476Probopass.png",
            number: "108",
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
            dexEntry: "",
            cryUrl: "cries/476.mp3",
            japaneseName: "Dainose"
        },
        {
            name: "Shinx",
            imageUrl: "images/403Shinx.png",
            number: "109",
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
            dexEntry: "",
            cryUrl: "cries/403.mp3",
            japaneseName: "Kolink"
        },
        {
            name: "Luxio",
            imageUrl: "images/404Luxio.png",
            number: "110",
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
            dexEntry: "",
            cryUrl: "cries/404.mp3",
            japaneseName: "Luxio"
        },
        {
            name: "Luxray",
            imageUrl: "images/405Luxray.png",
            number: "111",
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
            dexEntry: "",
            cryUrl: "cries/405.mp3",
            japaneseName: "Rentorar"
        },
        {
            name: "Grubbin",
            imageUrl: "images/736Grubbin.png",
            number: "112",
            type: ["Bug"],
            category: "Larva",
            region: "Alola",
            generation: "07",
            height: "1'04\"",
            weight: "9.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.4,
            dexEntry: "",
            cryUrl: "cries/736.mp3",
            japaneseName: "Agojimushi"
        },
        {
            name: "Charjabug",
            imageUrl: "images/737Charjabug.png",
            number: "113",
            type: ["Bug", "Electric"],
            category: "Battery",
            region: "Alola",
            generation: "07",
            height: "1'08\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.5,
            dexEntry: "",
            cryUrl: "cries/737.mp3",
            japaneseName: "Dendimushi"
        },
        {
            name: "Vikavolt",
            imageUrl: "images/738Vikavolt.png",
            number: "114",
            type: ["Bug", "Electric"],
            category: "Stag Beetle",
            region: "Alola",
            generation: "07",
            height: "4'11\"",
            weight: "99.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 45.0,
            dexEntry: "",
            cryUrl: "cries/738.mp3",
            japaneseName: "Kuwagannon"
        },
        {
            name: "Oricorio",
            imageUrl: "forms/741Oricorio-Sensu.png",
            number: "115",
            type: ["Ghost", "Flying"],
            category: "Dancing",
            region: "Alola",
            generation: "07",
            height: "2'00\"",
            weight: "7.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 3.4,
            dexEntry: "",
            cryUrl: "cries/formCries/741-Sensu.mp3",
            japaneseName: "Odoridori",
        },
        {
            name: "Sandshrew",
            imageUrl: "images/027Sandshrew.png",
            number: "116",
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
            dexEntry: "",
            cryUrl: "cries/027.mp3",
            japaneseName: "Sand"
        },
        {
            name: "Sandslash",
            imageUrl: "images/028Sandslash.png",
            number: "117",
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
            dexEntry: "",
            cryUrl: "cries/028.mp3",
            japaneseName: "Sandpan"
        },
        {
            name: "Gastly",
            imageUrl: "images/092Gastly.png",
            number: "118",
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
            dexEntry: "",
            cryUrl: "cries/092.mp3",
            japaneseName: "Ghos"
        },
        {
            name: "Haunter",
            imageUrl: "images/093Haunter.png",
            number: "119",
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
            dexEntry: "",
            cryUrl: "cries/093.mp3",
            japaneseName: "Ghost"
        },
        {
            name: "Gengar",
            imageUrl: "images/094Gengar.png",
            number: "120",
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
            dexEntry: "",
            cryUrl: "cries/094.mp3",
            japaneseName: "Gangar"
        },
        {
            name: "Gligar",
            imageUrl: "images/207Gligar.png",
            number: "121",
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
            dexEntry: "",
            cryUrl: "cries/207.mp3",
            japaneseName: "Gliger"
        },
        {
            name: "Gliscor",
            imageUrl: "images/472Gliscor.png",
            number: "122",
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
            dexEntry: "",
            cryUrl: "cries/472.mp3",
            japaneseName: "Glion"
        },
        {
            name: "Houndour",
            imageUrl: "images/228Houndour.png",
            number: "123",
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
            dexEntry: "",
            cryUrl: "cries/228.mp3",
            japaneseName: "Delvil"
        },
        {
            name: "Houndoom",
            imageUrl: "images/229Houndoom.png",
            number: "124",
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
            dexEntry: "",
            cryUrl: "cries/229.mp3",
            japaneseName: "Hellgar"
        },
        {
            name: "Spoink",
            imageUrl: "images/325Spoink.png",
            number: "125",
            type: ["Psychic"],
            category: "Bounce",
            region: "Hoenn",
            generation: "03",
            height: "2'04\"",
            weight: "67.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 30.6,
            dexEntry: "",
            cryUrl: "cries/325.mp3",
            japaneseName: "Baneboo"
        },
        {
            name: "Grumpig",
            imageUrl: "images/326Grumpig.png",
            number: "126",
            type: ["Psychic"],
            category: "Manipulate",
            region: "Hoenn",
            generation: "03",
            height: "2'11\"",
            weight: "157.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 71.5,
            dexEntry: "",
            cryUrl: "cries/326.mp3",
            japaneseName: "Boopig"
        },
        {
            name: "Vullaby",
            imageUrl: "images/629Vullaby.png",
            number: "127",
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
            dexEntry: "",
            cryUrl: "cries/629.mp3",
            japaneseName: "Valchai"
        },
        {
            name: "Mandibuzz",
            imageUrl: "images/630Mandibuzz.png",
            number: "128",
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
            dexEntry: "",
            cryUrl: "cries/630.mp3",
            japaneseName: "Vulgina"
        },
        {
            name: "Mudbray",
            imageUrl: "images/749Mudbray.png",
            number: "129",
            type: ["Ground"],
            category: "Donkey",
            region: "Alola",
            generation: "07",
            height: "3'03\"",
            weight: "242.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 110.0,
            dexEntry: "",
            cryUrl: "cries/749.mp3",
            japaneseName: "Dorobanko"
        },
        {
            name: "Mudsdale",
            imageUrl: "images/750Mudsdale.png",
            number: "130",
            type: ["Ground"],
            category: "Draft Horse",
            region: "Alola",
            generation: "07",
            height: "8'02\"",
            weight: "2028.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 920.0,
            dexEntry: "",
            cryUrl: "cries/750.mp3",
            japaneseName: "Banbadoro"
        },
        {
            name: "Jangmo-o",
            imageUrl: "images/782Jangmo-o.png",
            number: "131",
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
            dexEntry: "",
            cryUrl: "cries/782.mp3",
            japaneseName: "Jyarako"
        },
        {
            name: "Hakamo-o",
            imageUrl: "images/783Hakamo-o.png",
            number: "132",
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
            dexEntry: "",
            cryUrl: "cries/783.mp3",
            japaneseName: "Jyarango"
        },
        {
            name: "Kommo-o",
            imageUrl: "images/784Kommo-o.png",
            number: "133",
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
            dexEntry: "",
            cryUrl: "cries/784.mp3",
            japaneseName: "Jyararanga"
        },
        {
            name: "Bombirdier",
            imageUrl: "images/962Bombirdier.png",
            number: "134",
            type: ["Flying", "Dark"],
            category: "Item Drop",
            region: "Paldea",
            generation: "09",
            height: "4'11\"",
            weight: "94.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 42.9,
            dexEntry: "",
            cryUrl: "cries/962.mp3",
            japaneseName: "Otoshidori"
        },
        {
            name: "Koffing",
            imageUrl: "images/109Koffing.png",
            number: "135",
            type: ["Poison"],
            category: "Poison Gas",
            region: "Kanto",
            generation: "01",
            height: "2'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 2.2,
            dexEntry: "",
            cryUrl: "cries/109.mp3",
            japaneseName: "Dogars"
        },
        {
            name: "Weezing",
            imageUrl: "images/110Weezing.png",
            number: "136",
            type: ["Poison"],
            category: "Poison Gas",
            region: "Kanto",
            generation: "01",
            height: "3'11\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 9.5,
            dexEntry: "",
            cryUrl: "cries/110.mp3",
            japaneseName: "Matadogas"
        },
        {
            name: "Mienfoo",
            imageUrl: "images/619Mienfoo.png",
            number: "137",
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
            dexEntry: "",
            cryUrl: "cries/619.mp3",
            japaneseName: "Kojofu"
        },
        {
            name: "Mienshao",
            imageUrl: "images/620Mienshao.png",
            number: "138",
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
            dexEntry: "",
            cryUrl: "cries/620.mp3",
            japaneseName: "Kojondo"
        },
        {
            name: "Duskull",
            imageUrl: "images/355Duskull.png",
            number: "139",
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
            dexEntry: "",
            cryUrl: "cries/355.mp3",
            japaneseName: "Yomawaru"
        },
        {
            name: "Dusclops",
            imageUrl: "images/356Dusclops.png",
            number: "140",
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
            dexEntry: "",
            cryUrl: "cries/356.mp3",
            japaneseName: "Samayouru"
        },
        {
            name: "Dusknoir",
            imageUrl: "images/477Dusknoir.png",
            number: "141",
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
            dexEntry: "",
            cryUrl: "cries/477.mp3",
            japaneseName: "Yonoir"
        },
        {
            name: "Chingling",
            imageUrl: "images/433Chingling.png",
            number: "142",
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
            dexEntry: "",
            cryUrl: "cries/433.mp3",
            japaneseName: "Lisyan",
        },
        {
            name: "Chimecho",
            imageUrl: "images/358Chimecho.png",
            number: "143",
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
            dexEntry: "",
            cryUrl: "cries/358.mp3",
            japaneseName: "Chirean"
        },
        {
            name: "Slugma",
            imageUrl: "images/218Slugma.png",
            number: "144",
            type: ["Fire"],
            category: "Lava",
            region: "Johto",
            generation: "02",
            height: "2'04\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 35.0,
            dexEntry: "",
            cryUrl: "cries/218.mp3",
            japaneseName: "Magmag"
        },
        {
            name: "Magcargo",
            imageUrl: "images/219Magcargo.png",
            number: "145",
            type: ["Fire", "Rock"],
            category: "Lava",
            region: "Johto",
            generation: "02",
            height: "2'07\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 55.0,
            dexEntry: "",
            cryUrl: "cries/219.mp3",
            japaneseName: "Magcargot"
        },
        {
            name: "Litwick",
            imageUrl: "images/607Litwick.png",
            number: "146",
            type: ["Ghost", "Fire"],
            category: "Candle",
            region: "Unova",
            generation: "05",
            height: "1'00\"",
            weight: "6.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.1,
            dexEntry: "",
            cryUrl: "cries/607.mp3",
            japaneseName: "Hitomoshi"
        },
        {
            name: "Lampent",
            imageUrl: "images/608Lampent.png",
            number: "147",
            type: ["Ghost", "Fire"],
            category: "Lamp",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.0,
            dexEntry: "",
            cryUrl: "cries/608.mp3",
            japaneseName: "Lampler"
        },
        {
            name: "Chandelure",
            imageUrl: "images/609Chandelure.png",
            number: "148",
            type: ["Ghost", "Fire"],
            category: "Luring",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "75.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 34.3,
            dexEntry: "",
            cryUrl: "cries/609.mp3",
            japaneseName: "Chandela"
        },
        {
            name: "Surskit",
            imageUrl: "images/283Surskit.png",
            number: "149",
            type: ["Bug", "Water"],
            category: "Pond Skater",
            region: "Hoenn",
            generation: "03",
            height: "1'08\"",
            weight: "3.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 1.7,
            dexEntry: "",
            cryUrl: "cries/283.mp3",
            japaneseName: "Ametama"
        },
        {
            name: "Masquerain",
            imageUrl: "images/284Masquerain.png",
            number: "150",
            type: ["Bug", "Flying"],
            category: "Eyeball",
            region: "Hoenn",
            generation: "03",
            height: "2'07\"",
            weight: "7.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 3.6,
            dexEntry: "",
            cryUrl: "cries/284.mp3",
            japaneseName: "Amemoth"
        },
        {
            name: "Cleffa",
            imageUrl: "images/173Cleffa.png",
            number: "151",
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
            dexEntry: "",
            cryUrl: "cries/173.mp3",
            japaneseName: "Py"
        },
        {
            name: "Clefairy",
            imageUrl: "images/035Clefairy.png",
            number: "152",
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
            dexEntry: "",
            cryUrl: "cries/035.mp3",
            japaneseName: "Pippi"
        },
        {
            name: "Clefable",
            imageUrl: "images/036Clefable.png",
            number: "153",
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
            dexEntry: "",
            cryUrl: "cries/036.mp3",
            japaneseName: "Pixy"
        },
        {
            name: "Bronzor",
            imageUrl: "images/436Bronzor.png",
            number: "154",
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
            dexEntry: "",
            cryUrl: "cries/436.mp3",
            japaneseName: "Dohmirror"
        },
        {
            name: "Bronzong",
            imageUrl: "images/437Bronzong.png",
            number: "155",
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
            dexEntry: "",
            cryUrl: "cries/437.mp3",
            japaneseName: "Dohtakun"
        },
        {
            name: "Glimmet",
            imageUrl: "images/969Glimmet.png",
            number: "156",
            type: ["Rock", "Poison"],
            category: "Ore",
            region: "Paldea",
            generation: "09",
            height: "2'04\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 8.0,
            dexEntry: "",
            cryUrl: "cries/969.mp3",
            japaneseName: "Kirame"
        },
        {
            name: "Glimmora",
            imageUrl: "images/970Glimmora.png",
            number: "157",
            type: ["Rock", "Poison"],
            category: "Ore",
            region: "Paldea",
            generation: "09",
            height: "4'11\"",
            weight: "99.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 45.0,
            dexEntry: "",
            cryUrl: "cries/970.mp3",
            japaneseName: "Kiraflor"
        },
        {
            name: "Feebas",
            imageUrl: "images/349Feebas.png",
            number: "158",
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
            dexEntry: "",
            cryUrl: "cries/349.mp3",
            japaneseName: "Hinbass"
        },
        {
            name: "Milotic",
            imageUrl: "images/350Milotic.png",
            number: "159",
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
            dexEntry: "",
            cryUrl: "cries/350.mp3",
            japaneseName: "Milokaross"
        },
        {
            name: "Dunsparce",
            imageUrl: "images/206Dunsparce.png",
            number: "160",
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
            dexEntry: "",
            cryUrl: "cries/206.mp3",
            japaneseName: "Nokocchi"
        },
        {
            name: "Dudunsparce",
            imageUrl: "images/982Dudunsparce.png",
            number: "161",
            type: ["Normal"],
            category: "Land Snake",
            region: "Paldea",
            generation: "09",
            height: "11'10\"",
            weight: "86.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.6,
            metricWeight: 39.2,
            dexEntry: "",
            cryUrl: "cries/982.mp3",
            japaneseName: "Nokokocchi"
        },
        {
            name: "Barboach",
            imageUrl: "images/339Barboach.png",
            number: "162",
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
            dexEntry: "",
            cryUrl: "cries/339.mp3",
            japaneseName: "Dojoach"
        },
        {
            name: "Whiscash",
            imageUrl: "images/340Whiscash.png",
            number: "163",
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
            dexEntry: "",
            cryUrl: "cries/340.mp3",
            japaneseName: "Namazun"
        },
        {
            name: "Gible",
            imageUrl: "images/443Gible.png",
            number: "164",
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
            dexEntry: "",
            cryUrl: "cries/443.mp3",
            japaneseName: "Fukamaru"
        },
        {
            name: "Gabite",
            imageUrl: "images/444Gabite.png",
            number: "165",
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
            dexEntry: "",
            cryUrl: "cries/444.mp3",
            japaneseName: "Gabite"
        },
        {
            name: "Garchomp",
            imageUrl: "images/445Garchomp.png",
            number: "166",
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
            dexEntry: "",
            cryUrl: "cries/445.mp3",
            japaneseName: "Gaburias"
        },
        {
            name: "Carbink",
            imageUrl: "images/703Carbink.png",
            number: "167",
            type: ["Rock", "Fairy"],
            category: "Jewel",
            region: "Kalos",
            generation: "06",
            height: "1'00\"",
            weight: "12.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 5.7,
            dexEntry: "",
            cryUrl: "cries/703.mp3",
            japaneseName: "Melecie"
        },
        {
            name: "Salandit",
            imageUrl: "images/757Salandit.png",
            number: "168",
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
            dexEntry: "",
            cryUrl: "cries/757.mp3",
            japaneseName: "Yatoumori"
        },
        {
            name: "Salazzle",
            imageUrl: "images/758Salazzle.png",
            number: "169",
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
            dexEntry: "",
            cryUrl: "cries/758.mp3",
            japaneseName: "Ennewt"
        },
        {
            name: "Sneasel",
            imageUrl: "images/215Sneasel.png",
            number: "170",
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
            dexEntry: "",
            cryUrl: "cries/215.mp3",
            japaneseName: "Nyula"
        },
        {
            name: "Weavile",
            imageUrl: "images/461Weavile.png",
            number: "171",
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
            dexEntry: "",
            cryUrl: "cries/461.mp3",
            japaneseName: "Manyula"
        },
        {
            name: "Snorunt",
            imageUrl: "images/361Snorunt.png",
            number: "172",
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
            dexEntry: "",
            cryUrl: "cries/361.mp3",
            japaneseName: "Yukiwarashi"
        },
        {
            name: "Glalie",
            imageUrl: "images/362Glalie.png",
            number: "173",
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
            dexEntry: "",
            cryUrl: "cries/362.mp3",
            japaneseName: "Onigohri"
        },
        {
            name: "Froslass",
            imageUrl: "images/478Froslass.png",
            number: "174",
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
            dexEntry: "",
            cryUrl: "cries/478.mp3",
            japaneseName: "Yukimenoko"
        },
        {
            name: "Tynamo",
            imageUrl: "images/602Tynamo.png",
            number: "175",
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
            dexEntry: "",
            cryUrl: "cries/602.mp3",
            japaneseName: "Shibishirasu"
        },
        {
            name: "Eelektrik",
            imageUrl: "images/603Eelektrik.png",
            number: "176",
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
            dexEntry: "",
            cryUrl: "cries/603.mp3",
            japaneseName: "Shibibeel"
        },
        {
            name: "Eelektross",
            imageUrl: "images/604Eelektross.png",
            number: "177",
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
            dexEntry: "",
            cryUrl: "cries/604.mp3",
            japaneseName: "Shibirudon"
        },
        {
            name: "Goomy",
            imageUrl: "images/704Goomy.png",
            number: "178",
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
            dexEntry: "",
            cryUrl: "cries/704.mp3",
            japaneseName: "Numera"
        },
        {
            name: "Sliggoo",
            imageUrl: "images/705Sliggoo.png",
            number: "179",
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
            dexEntry: "",
            cryUrl: "cries/705.mp3",
            japaneseName: "Numeil"
        },
        {
            name: "Goodra",
            imageUrl: "images/706Goodra.png",
            number: "180",
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
            dexEntry: "",
            cryUrl: "cries/706.mp3",
            japaneseName: "Numelgon"
        },
        {
            name: "Ducklett",
            imageUrl: "images/580Ducklett.png",
            number: "181",
            type: ["Water", "Flying"],
            category: "Water Bird",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.5,
            dexEntry: "",
            cryUrl: "cries/580.mp3",
            japaneseName: "Koaruhie"
        },
        {
            name: "Swanna",
            imageUrl: "images/581Swanna.png",
            number: "182",
            type: ["Water", "Flying"],
            category: "White Bird",
            region: "Unova",
            generation: "05",
            height: "4'03\"",
            weight: "53.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 24.2,
            dexEntry: "",
            cryUrl: "cries/581.mp3",
            japaneseName: "Swanna"
        },
        {
            name: "Chewtle",
            imageUrl: "images/833Chewtle.png",
            number: "183",
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
            dexEntry: "",
            cryUrl: "cries/833.mp3",
            japaneseName: "Kamukame"
        },
        {
            name: "Drednaw",
            imageUrl: "images/834Drednaw.png",
            number: "184",
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
            dexEntry: "",
            cryUrl: "cries/834.mp3",
            japaneseName: "Kajirigame"
        },
        {
            name: "Cramorant",
            imageUrl: "images/845Cramorant.png",
            number: "185",
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
            dexEntry: "",
            cryUrl: "cries/845.mp3",
            japaneseName: "Uu"
        },
        {
            name: "Pawniard",
            imageUrl: "images/624Pawniard.png",
            number: "186",
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
            dexEntry: "",
            cryUrl: "cries/624.mp3",
            japaneseName: "Komatana"
        },
        {
            name: "Bisharp",
            imageUrl: "images/625Bisharp.png",
            number: "187",
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
            dexEntry: "",
            cryUrl: "cries/625.mp3",
            japaneseName: "Kirikizan"
        },
        {
            name: "Kingambit",
            imageUrl: "images/983Kingambit.png",
            number: "188",
            type: ["Dark", "Steel"],
            category: "Big Blade",
            region: "Paldea",
            generation: "09",
            height: "6'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 120.0,
            dexEntry: "",
            cryUrl: "cries/983.mp3",
            japaneseName: "Dodogezan"
        },
        {
            name: "Mimikyu",
            imageUrl: "images/778Mimikyu.png",
            number: "189",
            type: ["Ghost", "Fairy"],
            category: "Disguise",
            region: "Alola",
            generation: "07",
            height: "0'08\"",
            weight: "1.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 0.7,
            dexEntry: "",
            cryUrl: "cries/778.mp3",
            japaneseName: "Mimikkyu"
        },
        {
            name: "Impidimp",
            imageUrl: "images/859Impidimp.png",
            number: "190",
            type: ["Dark", "Fairy"],
            category: "Wily",
            region: "Galar",
            generation: "08",
            height: "1'04\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.5,
            dexEntry: "",
            cryUrl: "cries/859.mp3",
            japaneseName: "Beroba"
        },
        {
            name: "Morgrem",
            imageUrl: "images/860Morgrem.png",
            number: "191",
            type: ["Dark", "Fairy"],
            category: "Devious",
            region: "Galar",
            generation: "08",
            height: "2'07\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 12.5,
            dexEntry: "",
            cryUrl: "cries/860.mp3",
            japaneseName: "Gimoh"
        },
        {
            name: "Grimmsnarl",
            imageUrl: "images/861Grimmsnarl.png",
            number: "192",
            type: ["Dark", "Fairy"],
            category: "Bulk Up",
            region: "Galar",
            generation: "08",
            height: "4'11\"",
            weight: "134.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 61.0,
            dexEntry: "",
            cryUrl: "cries/861.mp3",
            japaneseName: "Ohlonge"
        },
        {
            name: "Indeedee",
            imageUrl: "images/876Indeedee.png",
            number: "193",
            type: ["Psychic", "Normal"],
            category: "Emotion",
            region: "Galar",
            generation: "08",
            height: "2'11\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 28.0,
            dexEntry: "",
            cryUrl: "cries/876.mp3",
            japaneseName: "Yessan"
        },
        {
            name: "Basculin",
            imageUrl: "forms/550Basculin-White.png",
            number: "194",
            type: ["Water"],
            category: "Mellow",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 18.0,
            dexEntry: "",
            cryUrl: "cries/550.mp3",
            japaneseName: "Bassrao",
        },
        {
            name: "Basculegion",
            imageUrl: "images/902Basculegion.png",
            number: "195",
            type: ["Water", "Ghost"],
            category: "Big Fish",
            region: "Hisui",
            generation: "08",
            height: "9'10\"",
            weight: "242.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.0,
            metricWeight: 110.0,
            dexEntry: "",
            cryUrl: "cries/902.mp3",
            japaneseName: "Idaitou"
        },
        {
            name: "Ursaluna",
            imageUrl: "forms/901Ursaluna-BloodMoon.png",
            number: "196",
            type: ["Ground", "Normal"],
            category: "Peat",
            region: "Hisui",
            generation: "08",
            height: "8'10\"",
            weight: "727.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.7,
            metricWeight: 333.0,
            dexEntry: "",
            cryUrl: "cries/901.mp3",
            japaneseName: "Gachiguma"
        },
        {
            name: "Okidogi",
            imageUrl: "images/1014Okidogi.png",
            number: "197",
            type: ["Poison", "Fighting"],
            category: "Retainer",
            region: "Paldea",
            generation: "09",
            height: "5'11\"",
            weight: "202.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 92.0,
            dexEntry: "",
            cryUrl: "cries/1014.mp3",
            japaneseName: "Iineinu"
        },
        {
            name: "Munkidori",
            imageUrl: "images/1015Munkidori.png",
            number: "198",
            type: ["Poison", "Psychic"],
            category: "Retainer",
            region: "Paldea",
            generation: "09",
            height: "3'11\"",
            weight: "26.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 12.2,
            dexEntry: "",
            cryUrl: "cries/1015.mp3",
            japaneseName: "Mashimashira"
        },
        {
            name: "Fezandipiti",
            imageUrl: "images/1016Fezandipiti.png",
            number: "199",
            type: ["Poison", "Fairy"],
            category: "Retainer",
            region: "Paldea",
            generation: "09",
            height: "4'07\"",
            weight: "66.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 30.1,
            dexEntry: "",
            cryUrl: "cries/1016.mp3",
            japaneseName: "Kichikigisu"
        },
        {
            name: "Ogerpon",
            imageUrl: "images/1017Ogerpon.png",
            number: "200",
            type: ["Grass"],
            category: "Mask",
            region: "Paldea",
            generation: "09",
            height: "3'11\"",
            weight: "87.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 39.8,
            dexEntry: "",
            cryUrl: "cries/1017.mp3",
            japaneseName: "Ogerpon"
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