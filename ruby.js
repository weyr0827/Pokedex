//Ruby Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Treecko",
            imageUrl: "images/252Treecko.png",
            number: "001",
            type: ["Grass"],
            category: "Wood Gecko",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.0,
            dexEntry: "Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls. This Pokémon attacks by slamming foes with its thick tail.",
            cryUrl: "cries/252.mp3",
            japaneseName: "Kimori"
        },
        {
            name: "Grovyle",
            imageUrl: "images/253Grovyle.png",
            number: "002",
            type: ["Grass"],
            category: "Wood Gecko",
            region: "Hoenn",
            generation: "3",
            height: "2'11\"",
            weight: "47.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 21.6,
            dexEntry: "The leaves growing out of Grovyle's body are convenient for camouflaging it from enemies in the forest. This Pokémon is a master at climbing trees in jungles.",
            cryUrl: "cries/253.mp3",
            japaneseName: "Juptile"
        },
        {
            name: "Sceptile",
            imageUrl: "images/254Sceptile.png",
            number: "003",
            type: ["Grass"],
            category: "Forest",
            region: "Hoenn",
            generation: "3",
            height: "5'07\"",
            weight: "115.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 52.2,
            dexEntry: "The leaves growing on Sceptile's body are very sharp edged. This Pokémon is very agile - it leaps all over the branches of trees and jumps on its foe from above or behind.",
            cryUrl: "cries/254.mp3",
            japaneseName: "Jukain"
        },
        {
            name: "Torchic",
            imageUrl: "images/255Torchic.png",
            number: "004",
            type: ["Fire"],
            category: "Chick",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.5,
            dexEntry: "Torchic sticks with its Trainer, following behind with unsteady steps. This Pokémon breathes fire of over 1,800 degrees F, including fireballs that leave the foe scorched black.",
            cryUrl: "cries/255.mp3",
            japaneseName: "Achamo"
        },
        {
            name: "Combusken",
            imageUrl: "images/256Combusken.png",
            number: "005",
            type: ["Fire", "Fighting"],
            category: "Young Fowl",
            region: "Hoenn",
            generation: "3",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "Combusken toughens up its legs and thighs by running through fields and mountains. This Pokémon's legs possess both speed and power, enabling it to dole out ten kicks in one second.",
            cryUrl: "cries/256.mp3",
            japaneseName: "Wakasyamo"
        },
        {
            name: "Blaziken",
            imageUrl: "images/257Blaziken.png",
            number: "006",
            type: ["Fire", "Fighting"],
            category: "Blaze",
            region: "Hoenn",
            generation: "3",
            height: "6'03\"",
            weight: "114.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 52.0,
            dexEntry: "In battle, Blaziken blows out intense flames from its wrists and attacks the foe courageously. The stronger the foes, the more intensely this Pokémon's wrists burn.",
            cryUrl: "cries/257.mp3",
            japaneseName: "Bursyamo"
        },
        {
            name: "Mudkip",
            imageUrl: "images/258Mudkip.png",
            number: "007",
            type: ["Water"],
            category: "Mud Fish",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "16.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.6,
            dexEntry: "The fin on Mudkip's head acts as highly sensitive radar. Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.",
            cryUrl: "cries/258.mp3",
            japaneseName: "Mizugorou"
        },
        {
            name: "Marshtomp",
            imageUrl: "images/259Marshtomp.png",
            number: "008",
            type: ["Water", "Ground"],
            category: "Mud Fish",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 28.0,
            dexEntry: "The surface of Marshtomp's body is enveloped by a thin, sticky film that enables it to live on land. This Pokémon plays in mud on beaches when the ocean tide is low.",
            cryUrl: "cries/259.mp3",
            japaneseName: "Numacraw"
        },
        {
            name: "Swampert",
            imageUrl: "images/260Swampert.png",
            number: "009",
            type: ["Water", "Ground"],
            category: "Mud Fish",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "180.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 81.9,
            dexEntry: "Swampert is very strong. It has enough power to easily drag a boulder weighing more than a ton. This Pokémon also has powerful vision that lets it see even in murky water.",
            cryUrl: "cries/260.mp3",
            japaneseName: "Laglarge"
        },
        {
            name: "Poochyena",
            imageUrl: "images/261Poochyena.png",
            number: "010",
            type: ["Dark"],
            category: "Bite",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "30.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 13.6,
            dexEntry: "At first sight, Poochyena takes a bite at anything that moves. This Pokémon chases after prey until the victim becomes exhausted. However, it may turn tail if the prey strikes back.",
            cryUrl: "cries/261.mp3",
            japaneseName: "Pochiena"
        },
        {
            name: "Mightyena",
            imageUrl: "images/262Mightyena.png",
            number: "011",
            type: ["Dark"],
            category: "Bite",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "81.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 37.0,
            dexEntry: "Mightyena gives obvious signals when it is preparing to attack. It starts to growl deeply and then flattens its body. This Pokémon will bite savagely with its sharply pointed fangs.",
            cryUrl: "cries/262.mp3",
            japaneseName: "Graena"
        },
        {
            name: "Zigzagoon",
            imageUrl: "images/263Zigzagoon.png",
            number: "012",
            type: ["Normal"],
            category: "Tiny Raccoon",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "38.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 17.5,
            dexEntry: "Zigzagoon restlessly wanders everywhere at all times. This Pokémon does so because it is very curious. It becomes interested in anything that it happens to see.",
            cryUrl: "cries/263.mp3",
            japaneseName: "Jiguzaguma"
        },
        {
            name: "Linoone",
            imageUrl: "images/264Linoone.png",
            number: "013",
            type: ["Normal"],
            category: "Rushing",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 32.5,
            dexEntry: "Linoone always runs full speed and only in straight lines. If facing an obstacle, it makes a right-angle turn to evade it. This Pokémon is very challenged by gently curving roads.",
            cryUrl: "cries/264.mp3",
            japaneseName: "Massuguma"
        },
        {
            name: "Wurmple",
            imageUrl: "images/265Wurmple.png",
            number: "014",
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
            dexEntry: "Using the spikes on its rear end, Wurmple peels the bark off trees and feeds on the sap that oozes out. This Pokémon's feet are tipped with suction pads that allow it to cling to glass without slipping.",
            cryUrl: "cries/265.mp3",
            japaneseName: "Kemusso"
        },
        {
            name: "Silcoon",
            imageUrl: "images/266Silcoon.png",
            number: "015",
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
            dexEntry: "Silcoon tethers itself to a tree branch using silk to keep from falling. There, this Pokémon hangs quietly while it awaits evolution. It peers out of the silk cocoon through a small hole.",
            cryUrl: "cries/266.mp3",
            japaneseName: "Karasalis"
        },
        {
            name: "Beautifly",
            imageUrl: "images/267Beautifly.png",
            number: "016",
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
            dexEntry: "Beautifly's favorite food is the sweet pollen of flowers. If you want to see this Pokémon, just leave a potted flower by an open window. Beautifly is sure to come looking for pollen.",
            cryUrl: "cries/267.mp3",
            japaneseName: "Agehunt"
        },
        {
            name: "Cascoon",
            imageUrl: "images/268Cascoon.png",
            number: "017",
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
            dexEntry: "Cascoon makes its protective cocoon by wrapping its body entirely with a fine silk from its mouth. Once the silk goes around its body, it hardens. This Pokémon prepares for its evolution inside the cocoon.",
            cryUrl: "cries/268.mp3",
            japaneseName: "Mayuld"
        },
        {
            name: "Dustox",
            imageUrl: "images/269Dustox.png",
            number: "018",
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
            dexEntry: "Dustox is instinctively drawn to light. Swarms of this Pokémon are attracted by the bright light of cities, where they wreak havoc by stripping the leaves off roadside trees for food.",
            cryUrl: "cries/269.mp3",
            japaneseName: "Dokucale"
        },
        {
            name: "Lotad",
            imageUrl: "images/270Lotad.png",
            number: "019",
            type: ["Water", "Grass"],
            category: "Water Weed",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "5.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.6,
            dexEntry: "Lotad live in ponds and lakes, where they float on the surface. It grows weak if its broad leaf dies. On rare occasions, this Pokémon travels on land in search of clean water.",
            cryUrl: "cries/270.mp3",
            japaneseName: "Hassboh"
        },
        {
            name: "Lombre",
            imageUrl: "images/271Lombre.png",
            number: "020",
            type: ["Water", "Grass"],
            category: "Jolly",
            region: "Hoenn",
            generation: "3",
            height: "3'11\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 32.5,
            dexEntry: "Lombre is nocturnal - it will get active after dusk. It is also a mischief-maker. When this Pokémon spots anglers, it tugs on their fishing lines from beneath the surface and enjoys their consternation.",
            cryUrl: "cries/271.mp3",
            japaneseName: "Hasubrero"
        },
        {
            name: "Ludicolo",
            imageUrl: "images/272Ludicolo.png",
            number: "021",
            type: ["Water", "Grass"],
            category: "Carefree",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 55.0,
            dexEntry: "Ludicolo begins dancing as soon as it hears cheerful, festive music. This Pokémon is said to appear when it hears the singing of children on hiking outings.",
            cryUrl: "cries/272.mp3",
            japaneseName: "Runpappa"
        },
        {
            name: "Seedot",
            imageUrl: "images/273Seedot.png",
            number: "022",
            type: ["Grass"],
            category: "Acorn",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 4.0,
            dexEntry: "Seedot attaches itself to a tree branch using the top of its head. It sucks moisture from the tree while hanging off the branch. The more water it drinks, the glossier this Pokémon's body becomes.",
            cryUrl: "cries/273.mp3",
            japaneseName: "Taneboh"
        },
        {
            name: "Nuzleaf",
            imageUrl: "images/274Nuzleaf.png",
            number: "023",
            type: ["Grass", "Dark"],
            category: "Wily",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.0,
            dexEntry: "Nuzleaf live in densely overgrown forests. They occasionally venture out of the forest to scare people. This Pokémon dislikes having its long nose pinched.",
            cryUrl: "cries/274.mp3",
            japaneseName: "Konohana"
        },
        {
            name: "Shiftry",
            imageUrl: "images/275Shiftry.png",
            number: "024",
            type: ["Grass", "Dark"],
            category: "Wicked",
            region: "Hoenn",
            generation: "3",
            height: "4'03\"",
            weight: "131.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 59.6,
            dexEntry: "Shiftry is a mysterious Pokémon that is said to live atop towering trees dating back over a thousand years. It creates terrific windstorms with the fans it holds.",
            cryUrl: "cries/275.mp3",
            japaneseName: "Dirteng"
        },
        {
            name: "Taillow",
            imageUrl: "images/276Taillow.png",
            number: "025",
            type: ["Normal", "Flying"],
            category: "Tiny Swallow",
            region: "Hoenn",
            generation: "3",
            height: "1'00\"",
            weight: "5.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.3,
            dexEntry: "Taillow courageously stands its ground against foes, however strong they may be. This gutsy Pokémon will remain defiant even after a loss. On the other hand, it cries loudly if it becomes hungry.",
            cryUrl: "cries/276.mp3",
            japaneseName: "Subame"
        },
        {
            name: "Swellow",
            imageUrl: "images/277Swellow.png",
            number: "026",
            type: ["Normal", "Flying"],
            category: "Swallow",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "43.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 19.8,
            dexEntry: "Swellow flies high above our heads, making graceful arcs in the sky. This Pokémon dives at a steep angle as soon as it spots its prey. The hapless prey is tightly grasped by Swellow's clawed feet, preventing escape.",
            cryUrl: "cries/277.mp3",
            japaneseName: "Ohsubame"
        },
        {
            name: "Wingull",
            imageUrl: "images/278Wingull.png",
            number: "027",
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
            dexEntry: "Wingull has the habit of carrying prey and valuables in its beak and hiding them in all sorts of locations. This Pokémon rides the winds and flies as if it were skating across the sky.",
            cryUrl: "cries/278.mp3",
            japaneseName: "Camome"
        },
        {
            name: "Pelipper",
            imageUrl: "images/279Pelipper.png",
            number: "028",
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
            dexEntry: "Pelipper is a flying transporter that carries small Pokémon and Eggs inside its massive bill. This Pokémon builds its nest on steep cliffs facing the sea.",
            cryUrl: "cries/279.mp3",
            japaneseName: "Pelipper"
        },
        {
            name: "Ralts",
            imageUrl: "images/280Ralts.png",
            number: "029",
            type: ["Psychic"],
            category: "Feeling",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.6,
            dexEntry: "Ralts senses the emotions of people using the horns on its head. This Pokémon rarely appears before people. But when it does, it draws closer if it senses that the person has a positive disposition.",
            cryUrl: "cries/280.mp3",
            japaneseName: "Ralts"
        },
        {
            name: "Kirlia",
            imageUrl: "images/281Kirlia.png",
            number: "030",
            type: ["Psychic"],
            category: "Emotion",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "44.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.2,
            dexEntry: "It is said that a Kirlia that is exposed to the positive emotions of its Trainer grows beautiful. This Pokémon controls psychokinetic powers with its highly developed brain.",
            cryUrl: "cries/281.mp3",
            japaneseName: "Kirlia"
        },
        {
            name: "Gardevoir",
            imageUrl: "images/282Gardevoir.png",
            number: "031",
            type: ["Psychic"],
            category: "Embrace",
            region: "Hoenn",
            generation: "3",
            height: "5'03\"",
            weight: "106.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 48.4,
            dexEntry: "Gardevoir has the ability to read the future. If it senses impending danger to its Trainer, this Pokémon is said to unleash its psychokinetic energy at full power.",
            cryUrl: "cries/282.mp3",
            japaneseName: "Sirnight"
        },
        {
            name: "Surskit",
            imageUrl: "images/283Surskit.png",
            number: "032",
            type: ["Bug", "Water"],
            category: "Pond Skater",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "3.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 1.7,
            dexEntry: "From the tips of its feet, Surskit secretes an oil that enables it to walk on water as if it were skating. This Pokémon feeds on microscopic organisms in ponds and lakes.",
            cryUrl: "cries/283.mp3",
            japaneseName: "Ametama"
        },
        {
            name: "Masquerain",
            imageUrl: "images/284Masquerain.png",
            number: "033",
            type: ["Bug", "Flying"],
            category: "Eyeball",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "7.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 3.6,
            dexEntry: "Masquerain intimidates enemies with the eyelike patterns on its antennas. This Pokémon flaps its four wings to freely fly in any direction - even sideways and backwards - as if it were a helicopter.",
            cryUrl: "cries/284.mp3",
            japaneseName: "Amemoth"
        },
        {
            name: "Shroomish",
            imageUrl: "images/285Shroomish.png",
            number: "034",
            type: ["Grass"],
            category: "Mushroom",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "9.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.5,
            dexEntry: "Shroomish live in damp soil in the dark depths of forests. They are often found keeping still under fallen leaves. This Pokémon feeds on compost that is made up of fallen, rotted leaves.",
            cryUrl: "cries/285.mp3",
            japaneseName: "Kinococo"
        },
        {
            name: "Breloom",
            imageUrl: "images/286Breloom.png",
            number: "035",
            type: ["Grass", "Fighting"],
            category: "Mushroom",
            region: "Hoenn",
            generation: "3",
            height: "3'11\"",
            weight: "86.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 39.2,
            dexEntry: "Breloom closes in on its foe with light and sprightly footwork, then throws punches with its stretchy arms. This Pokémon's fighting technique puts boxers to shame.",
            cryUrl: "cries/286.mp3",
            japaneseName: "Kinogassa"
        },
        {
            name: "Slakoth",
            imageUrl: "images/287Slakoth.png",
            number: "036",
            type: ["Normal"],
            category: "Slacker",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.0,
            dexEntry: "Slakoth lolls around for over twenty hours every day. Because it moves so little, it does not need much food. This Pokémon's sole daily meal consists of just three leaves.",
            cryUrl: "cries/287.mp3",
            japaneseName: "Namakero"
        },
        {
            name: "Vigoroth",
            imageUrl: "images/288Vigoroth.png",
            number: "037",
            type: ["Normal"],
            category: "Wild Monkey",
            region: "Hoenn",
            generation: "3",
            height: "4'07\"",
            weight: "102.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 46.5,
            dexEntry: "Vigoroth is always itching and agitated to go on a wild rampage. It simply can't tolerate sitting still for even a minute. This Pokémon's stress level rises if it can't be moving constantly.",
            cryUrl: "cries/288.mp3",
            japaneseName: "Yarukimono"
        },
        {
            name: "Slaking",
            imageUrl: "images/289Slaking.png",
            number: "038",
            type: ["Normal"],
            category: "Lazy",
            region: "Hoenn",
            generation: "3",
            height: "6'07\"",
            weight: "287.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 130.5,
            dexEntry: "Slaking spends all day lying down and lolling about. It eats grass growing within its reach. If it eats all the grass it can reach, this Pokémon reluctantly moves to another spot.",
            cryUrl: "cries/289.mp3",
            japaneseName: "Kekking"
        },
        {
            name: "Abra",
            imageUrl: "images/063Abra.png",
            number: "039",
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
            dexEntry: "Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.",
            cryUrl: "cries/063.mp3",
            japaneseName: "Casey"
        },
        {
            name: "Kadabra",
            imageUrl: "images/064Kadabra.png",
            number: "040",
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
            dexEntry: "Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon.",
            cryUrl: "cries/064.mp3",
            japaneseName: "Yungerer"
        },
        {
            name: "Alakazam",
            imageUrl: "images/065Alakazam.png",
            number: "041",
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
            dexEntry: "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.",
            cryUrl: "cries/065.mp3",
            japaneseName: "Foodin"
        },
        {
            name: "Nincada",
            imageUrl: "images/290Nincada.png",
            number: "042",
            type: ["Bug", "Ground"],
            category: "Trainee",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.5,
            dexEntry: "Nincada lives underground for many years in complete darkness. This Pokémon absorbs nutrients from the roots of trees. It stays motionless as it waits for evolution.",
            cryUrl: "cries/290.mp3",
            japaneseName: "Tutinin"
        },
        {
            name: "Ninjask",
            imageUrl: "images/291Ninjask.png",
            number: "043",
            type: ["Bug", "Flying"],
            category: "Ninja",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 12.0,
            dexEntry: "Ninjask moves around at such a high speed that it cannot be seen, even while its crying can be clearly heard. For that reason, this Pokémon was long believed to be invisible.",
            cryUrl: "cries/291.mp3",
            japaneseName: "Tekkanin"
        },
        {
            name: "Shedinja",
            imageUrl: "images/292Shedinja.png",
            number: "044",
            type: ["Bug", "Ghost"],
            category: "Shed",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 1.2,
            dexEntry: "Shedinja's hard body doesn't move - not even a twitch. In fact, its body appears to be merely a hollow shell. It is believed that this Pokémon will steal the spirit of anyone peering into its hollow body from its back.",
            cryUrl: "cries/292.mp3",
            japaneseName: "Nukenin"
        },
        {
            name: "Whismur",
            imageUrl: "images/293Whismur.png",
            number: "045",
            type: ["Normal"],
            category: "Whisper",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "35.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 16.3,
            dexEntry: "Normally, Whismur's voice is very quiet - it is barely audible even if one is paying close attention. However, if this Pokémon senses danger, it starts crying at an earsplitting volume.",
            cryUrl: "cries/293.mp3",
            japaneseName: "Gonyonyo"
        },
        {
            name: "Loudred",
            imageUrl: "images/294Loudred.png",
            number: "046",
            type: ["Normal"],
            category: "Big Voice",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 40.5,
            dexEntry: "Loudred's bellowing can completely decimate a wood-frame house. It uses its voice to punish its foes. This Pokémon's round ears serve as loudspeakers.",
            cryUrl: "cries/294.mp3",
            japaneseName: "Dogohmb"
        },
        {
            name: "Exploud",
            imageUrl: "images/295Exploud.png",
            number: "047",
            type: ["Normal"],
            category: "Loud Noise",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "185.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 84.0,
            dexEntry: "Exploud triggers earthquakes with the tremors it creates by bellowing. If this Pokémon violently inhales from the ports on its body, it's a sign that it is preparing to let loose a huge bellow.",
            cryUrl: "cries/295.mp3",
            japaneseName: "Bakuong"
        },
        {
            name: "Makuhita",
            imageUrl: "images/296Makuhita.png",
            number: "048",
            type: ["Fighting"],
            category: "Guts",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "190.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 86.4,
            dexEntry: "Makuhita is tenacious - it will keep getting up and attacking its foe however many times it is knocked down. Every time it gets back up, this Pokémon stores more energy in its body for evolving.",
            cryUrl: "cries/296.mp3",
            japaneseName: "Makunoshita"
        },
        {
            name: "Hariyama",
            imageUrl: "images/297Hariyama.png",
            number: "049",
            type: ["Fighting"],
            category: "Arm Thrust",
            region: "Hoenn",
            generation: "3",
            height: "7'07\"",
            weight: "559.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.3,
            metricWeight: 253.8,
            dexEntry: "Hariyama practices its straight-arm slaps in any number of locations. One hit of this Pokémon's powerful, openhanded, straight-arm punches could snap a telephone pole in two.",
            cryUrl: "cries/297.mp3",
            japaneseName: "Hariteyama"
        },
        {
            name: "Goldeen",
            imageUrl: "images/118Goldeen.png",
            number: "050",
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
            dexEntry: "Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon - it could ram you powerfully with its horn.",
            cryUrl: "cries/118.mp3",
            japaneseName: "Tosakinto"
        },
        {
            name: "Seaking",
            imageUrl: "images/119Seaking.png",
            number: "051",
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
            dexEntry: "In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.",
            cryUrl: "cries/119.mp3",
            japaneseName: "Azumao"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "052",
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
            dexEntry: "Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "053",
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
            dexEntry: "When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Azurill",
            imageUrl: "images/298Azurill.png",
            number: "054",
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
            dexEntry: "Azurill spins its tail as if it were a lasso, then hurls it far. The momentum of the throw sends its body flying, too. Using this unique action, one of these Pokémon managed to hurl itself a record 33 feet.",
            cryUrl: "cries/298.mp3",
            japaneseName: "Ruriri"
        },
        {
            name: "Marill",
            imageUrl: "images/183Marill.png",
            number: "055",
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
            dexEntry: "Marill's oil-filled tail acts much like a life preserver. If you see just its tail bobbing on the water's surface, it's a sure indication that this Pokémon is diving beneath the water to feed on aquatic plants.",
            cryUrl: "cries/183.mp3",
            japaneseName: "Maril"
        },
        {
            name: "Azumarill",
            imageUrl: "images/184Azumarill.png",
            number: "056",
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
            dexEntry: "Azumarill's long ears are indispensable sensors. By focusing its hearing, this Pokémon can identify what kinds of prey are around, even in rough and fast-running rivers.",
            cryUrl: "cries/184.mp3",
            japaneseName: "Marilli"
        },
        {
            name: "Geodude",
            imageUrl: "images/074Geodude.png",
            number: "057",
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
            dexEntry: "The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "images/075Graveler.png",
            number: "058",
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
            dexEntry: "Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats it way through a ton of rocks on a daily basis.",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "images/076Golem.png",
            number: "059",
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
            dexEntry: "Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Nosepass",
            imageUrl: "images/299Nosepass.png",
            number: "060",
            type: ["Rock"],
            category: "Compass",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "213.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 97.0,
            dexEntry: "Nosepass's magnetic nose is always pointed to the north. If two of these Pokémon meet, they cannot turn their faces to each other when they are close because their magnetic noses repel one another.",
            cryUrl: "cries/299.mp3",
            japaneseName: "Nosepass"
        },
        {
            name: "Skitty",
            imageUrl: "images/300Skitty.png",
            number: "061",
            type: ["Normal"],
            category: "Kitten",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "24.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.0,
            dexEntry: "Skitty has the habit of becoming fascinated by moving objects and chasing them around. This Pokémon is known to chase after its own tail and become dizzy.",
            cryUrl: "cries/300.mp3",
            japaneseName: "Eneco"
        },
        {
            name: "Delcatty",
            imageUrl: "images/301Delcatty.png",
            number: "062",
            type: ["Normal"],
            category: "Prim",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "71.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 32.6,
            dexEntry: "Delcatty prefers to live an unfettered existence in which it can do as it pleases at its own pace. Because this Pokémon eats and sleeps whenever it decides, its daily routines are completely random.",
            cryUrl: "cries/301.mp3",
            japaneseName: "Enekororo"
        },
        {
            name: "Zubat",
            imageUrl: "images/041Zubat.png",
            number: "063",
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
            dexEntry: "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
            cryUrl: "cries/041.mp3",
            japaneseName: "Zubat"
        },
        {
            name: "Golbat",
            imageUrl: "images/042Golbat.png",
            number: "064",
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
            dexEntry: "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
            cryUrl: "cries/042.mp3",
            japaneseName: "Golbat"
        },
        {
            name: "Crobat",
            imageUrl: "images/169Crobat.png",
            number: "065",
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
            dexEntry: "If this Pokémon is flying by fluttering only a pair of wings on either the forelegs or hind legs, it's proof that Crobat has been flying a long distance. It switches the wings it uses if it is tired.",
            cryUrl: "cries/169.mp3",
            japaneseName: "Crobat"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "066",
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
            dexEntry: "Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "067",
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
            dexEntry: "Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst causes rough waves around it.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Sableye",
            imageUrl: "images/302Sableye.png",
            number: "068",
            type: ["Dark", "Ghost"],
            category: "Darkness",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "24.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 11.0,
            dexEntry: "Sableye lead quiet lives deep inside caverns. They are feared, however, because these Pokémon are thought to steal the spirits of people when their eyes burn with a sinister glow in the darkness.",
            cryUrl: "cries/302.mp3",
            japaneseName: "Yamirami"
        },
        {
            name: "Mawile",
            imageUrl: "images/303Mawile.png",
            number: "069",
            type: ["Steel"],
            category: "Deceiver",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.5,
            dexEntry: "Mawile's huge jaws are actually steel horns that have been transformed. Its docile-looking face serves to lull its foe into letting down its guard. When the foe least expects it, Mawile chomps it with its gaping jaws.",
            cryUrl: "cries/303.mp3",
            japaneseName: "Kucheat"
        },
        {
            name: "Aron",
            imageUrl: "images/304Aron.png",
            number: "070",
            type: ["Steel", "Rock"],
            category: "Iron Armor",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 60.0,
            dexEntry: "This Pokémon has a body of steel. To make its body, Aron feeds on iron ore that it digs from mountains. Occasionally, it causes major trouble by eating bridges and rails.",
            cryUrl: "cries/304.mp3",
            japaneseName: "Cokodora"
        },
        {
            name: "Lairon",
            imageUrl: "images/305Lairon.png",
            number: "071",
            type: ["Steel", "Rock"],
            category: "Iron Armor",
            region: "Hoenn",
            generation: "3",
            height: "2'11\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 120.0,
            dexEntry: "Lairon tempers its steel body by drinking highly nutritious mineral springwater until it is bloated. This Pokémon makes its nest close to springs of delicious water.",
            cryUrl: "cries/305.mp3",
            japaneseName: "Kodora"
        },
        {
            name: "Aggron",
            imageUrl: "images/306Aggron.png",
            number: "072",
            type: ["Steel", "Rock"],
            category: "Iron Armor",
            region: "Hoenn",
            generation: "3",
            height: "6'11\"",
            weight: "793.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 360.0,
            dexEntry: "Aggron claims an entire mountain as its own territory. It mercilessly beats up anything that violates its environment. This Pokémon vigilantly patrols its territory at all times.",
            cryUrl: "cries/306.mp3",
            japaneseName: "Bossgodora"
        },
        {
            name: "Machop",
            imageUrl: "images/066Machop.png",
            number: "073",
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
            dexEntry: "Machop's muscles are special - they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.",
            cryUrl: "cries/066.mp3",
            japaneseName: "Wanriky"
        },
        {
            name: "Machoke",
            imageUrl: "images/067Machoke.png",
            number: "074",
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
            dexEntry: "Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.",
            cryUrl: "cries/067.mp3",
            japaneseName: "Goriky"
        },
        {
            name: "Machamp",
            imageUrl: "images/068Machamp.png",
            number: "075",
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
            dexEntry: "Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.",
            cryUrl: "cries/068.mp3",
            japaneseName: "Kairiky"
        },
        {
            name: "Meditite",
            imageUrl: "images/307Meditite.png",
            number: "076",
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
            dexEntry: "Meditite undertakes rigorous mental training deep in the mountains. However, whenever it meditates, this Pokémon always loses its concentration and focus. As a result, its training never ends.",
            cryUrl: "cries/307.mp3",
            japaneseName: "Asanan"
        },
        {
            name: "Medicham",
            imageUrl: "images/308Medicham.png",
            number: "077",
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
            dexEntry: "It is said that through meditation, Medicham heightens energy inside its body and sharpens its sixth sense. This Pokémon hides its presence by merging itself with fields and mountains.",
            cryUrl: "cries/308.mp3",
            japaneseName: "Charem"
        },
        {
            name: "Electrike",
            imageUrl: "images/309Electrike.png",
            number: "078",
            type: ["Electric"],
            category: "Lightning",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "33.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.2,
            dexEntry: "Electrike stores electricity in its long body hair. This Pokémon stimulates its leg muscles with electric charges. These jolts of power give its legs explosive acceleration performance.",
            cryUrl: "cries/309.mp3",
            japaneseName: "Rakurai"
        },
        {
            name: "Manectric",
            imageUrl: "images/310Manectric.png",
            number: "079",
            type: ["Electric"],
            category: "Discharge",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "88.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 40.2,
            dexEntry: "Manectric is constantly discharging electricity from its mane. The sparks sometimes ignite forest fires. When it enters a battle, this Pokémon creates thunderclouds.",
            cryUrl: "cries/310.mp3",
            japaneseName: "Livolt"
        },
        {
            name: "Plusle",
            imageUrl: "images/311Plusle.png",
            number: "080",
            type: ["Electric"],
            category: "Cheering",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "9.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.2,
            dexEntry: "Plusle always acts as a cheerleader for its partners. Whenever a teammate puts out a good effort in battle, this Pokémon shorts out its body to create the crackling noises of sparks to show its joy.",
            cryUrl: "cries/311.mp3",
            japaneseName: "Prasle"
        },
        {
            name: "Minun",
            imageUrl: "images/312Minun.png",
            number: "081",
            type: ["Electric"],
            category: "Cheering",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "9.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.2,
            dexEntry: "Minun is more concerned about cheering on its partners than its own safety. It shorts out the electricity in its body to create brilliant showers of sparks to cheer on its teammates.",
            cryUrl: "cries/312.mp3",
            japaneseName: "Minun"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "082",
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
            dexEntry: "Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "083",
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
            dexEntry: "Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Voltorb",
            imageUrl: "images/100Voltorb.png",
            number: "084",
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
            dexEntry: "Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.",
            cryUrl: "cries/100.mp3",
            japaneseName: "Biriridama"
        },
        {
            name: "Electrode",
            imageUrl: "images/101Electrode.png",
            number: "085",
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
            dexEntry: "Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity.",
            cryUrl: "cries/101.mp3",
            japaneseName: "Marumine"
        },
        {
            name: "Volbeat",
            imageUrl: "images/313Volbeat.png",
            number: "086",
            type: ["Bug"],
            category: "Firefly",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "39.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 17.7,
            dexEntry: "With the arrival of night, Volbeat emits light from its tail. It communicates with others by adjusting the intensity and flashing of its light. This Pokémon is attracted by the sweet aroma of Illumise.",
            cryUrl: "cries/313.mp3",
            japaneseName: "Barubeat"
        },
        {
            name: "Illumise",
            imageUrl: "images/314Illumise.png",
            number: "087",
            type: ["Bug"],
            category: "Firefly",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "39.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 17.7,
            dexEntry: "Illumise attracts a swarm of Volbeat using a sweet fragrance. Once the Volbeat have gathered, this Pokémon leads the lit-up swarm in drawing geometric designs on the canvas of the night sky.",
            cryUrl: "cries/314.mp3",
            japaneseName: "Illumise"
        },
        {
            name: "Oddish",
            imageUrl: "images/043Oddish.png",
            number: "088",
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
            dexEntry: "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
            cryUrl: "cries/043.mp3",
            japaneseName: "Nazonokusa"
        },
        {
            name: "Gloom",
            imageUrl: "images/044Gloom.png",
            number: "089",
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
            dexEntry: "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
            cryUrl: "cries/044.mp3",
            japaneseName: "Kusaihana"
        },
        {
            name: "Vileplume",
            imageUrl: "images/045Vileplume.png",
            number: "090",
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
            dexEntry: "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
            cryUrl: "cries/045.mp3",
            japaneseName: "Ruffresia"
        },
        {
            name: "Bellossom",
            imageUrl: "images/182Bellossom.png",
            number: "091",
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
            dexEntry: "When Bellossom get exposed to plenty of sunlight, the leaves ringing its body begin to spin around. This Pokémon's dancing is renowned in southern lands.",
            cryUrl: "cries/182.mp3",
            japaneseName: "Kireihana"
        },
        {
            name: "Doduo",
            imageUrl: "images/084Doduo.png",
            number: "092",
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
            dexEntry: "Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.",
            cryUrl: "cries/084.mp3",
            japaneseName: "Dodo"
        },
        {
            name: "Dodrio",
            imageUrl: "images/085Dodrio.png",
            number: "093",
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
            dexEntry: "Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary - it may decide to peck you.",
            cryUrl: "cries/085.mp3",
            japaneseName: "Dodorio"
        },
        {
            name: "Roselia",
            imageUrl: "images/315Roselia.png",
            number: "094",
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
            dexEntry: "Roselia shoots sharp thorns as projectiles at any opponent that tries to steal the flowers on its arms. The aroma of this Pokémon brings serenity to living things.",
            cryUrl: "cries/315.mp3",
            japaneseName: "Roselia"
        },
        {
            name: "Gulpin",
            imageUrl: "images/316Gulpin.png",
            number: "095",
            type: ["Poison"],
            category: "Stomach",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "22.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 10.3,
            dexEntry: "Virtually all of Gulpin's body is its stomach. As a result, it can swallow something its own size. This Pokémon's stomach contains a special fluid that digests anything.",
            cryUrl: "cries/316.mp3",
            japaneseName: "Gokulin"
        },
        {
            name: "Swalot",
            imageUrl: "images/317Swalot.png",
            number: "096",
            type: ["Poison"],
            category: "Poison Bag",
            region: "Hoenn",
            generation: "3",
            height: "5'07\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 80.0,
            dexEntry: "When Swalot spots prey, it spurts out a hideously toxic fluid from its pores and sprays the target. Once the prey has weakened, this Pokémon gulps it down whole with its cavernous mouth.",
            cryUrl: "cries/317.mp3",
            japaneseName: "Marunoom"
        },
        {
            name: "Carvanha",
            imageUrl: "images/318Carvanha.png",
            number: "097",
            type: ["Water", "Dark"],
            category: "Savage",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "45.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.8,
            dexEntry: "Carvanha's strongly developed jaws and its sharply pointed fangs pack the destructive power to rip out boat hulls. Many boats have been attacked and sunk by this Pokémon.",
            cryUrl: "cries/318.mp3",
            japaneseName: "Kibanha"
        },
        {
            name: "Sharpedo",
            imageUrl: "images/319Sharpedo.png",
            number: "098",
            type: ["Water", "Dark"],
            category: "Brutal",
            region: "Hoenn",
            generation: "3",
            height: "5'11\"",
            weight: "195.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 88.8,
            dexEntry: "Nicknamed \"the bully of the sea,\" Sharpedo is widely feared. Its cruel fangs grow back immediately if they snap off. Just one of these Pokémon can thoroughly tear apart a supertanker.",
            cryUrl: "cries/319.mp3",
            japaneseName: "Samehader"
        },
        {
            name: "Wailmer",
            imageUrl: "images/320Wailmer.png",
            number: "099",
            type: ["Water"],
            category: "Ball Whale",
            region: "Hoenn",
            generation: "3",
            height: "6'07\"",
            weight: "286.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 130.0,
            dexEntry: "Wailmer's nostrils are located above its eyes. This playful Pokémon loves to startle people by forcefully snorting out seawater it stores inside its body out of its nostrils.",
            cryUrl: "cries/320.mp3",
            japaneseName: "Hoeruko"
        },
        {
            name: "Wailord",
            imageUrl: "images/321Wailord.png",
            number: "100",
            type: ["Water"],
            category: "Float Whale",
            region: "Hoenn",
            generation: "3",
            height: "47'07\"",
            weight: "877.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 14.5,
            metricWeight: 398.0,
            dexEntry: "Wailord is the largest of all identified Pokémon up to now. This giant Pokémon swims languorously in the vast open sea, eating massive amounts of food at once with its enormous mouth.",
            cryUrl: "cries/321.mp3",
            japaneseName: "Whaloh"
        },
        {
            name: "Numel",
            imageUrl: "images/322Numel.png",
            number: "101",
            type: ["Fire", "Ground"],
            category: "Numb",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 24.0,
            dexEntry: "Numel is extremely dull witted - it doesn't notice being hit. However, it can't stand hunger for even a second. This Pokémon's body is a seething cauldron of boiling magma.",
            cryUrl: "cries/322.mp3",
            japaneseName: "Donmel"
        },
        {
            name: "Camerupt",
            imageUrl: "images/323Camerupt.png",
            number: "102",
            type: ["Fire", "Ground"],
            category: "Eruption",
            region: "Hoenn",
            generation: "3",
            height: "6'03\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 220.0,
            dexEntry: "Camerupt has a volcano inside its body. Magma of 18,000 degrees F courses through its body. Occasionally, the humps on this Pokémon's back erupt, spewing the superheated magma.",
            cryUrl: "cries/323.mp3",
            japaneseName: "Bakuuda"
        },
        {
            name: "Slugma",
            imageUrl: "images/218Slugma.png",
            number: "103",
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
            dexEntry: "Molten magma courses throughout Slugma's circulatory system. If this Pokémon is chilled, the magma cools and hardens. Its body turns brittle and chunks fall off, reducing its size.",
            cryUrl: "cries/218.mp3",
            japaneseName: "Magmag"
        },
        {
            name: "Magcargo",
            imageUrl: "images/219Magcargo.png",
            number: "104",
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
            dexEntry: "Magcargo's shell is actually its skin that hardened as a result of cooling. Its shell is very brittle and fragile - just touching it causes it to crumble apart. This Pokémon returns to its original size by dipping itself in magma.",
            cryUrl: "cries/219.mp3",
            japaneseName: "Magcargot"
        },
        {
            name: "Torkoal",
            imageUrl: "images/324Torkoal.png",
            number: "105",
            type: ["Fire"],
            category: "Coal",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "177.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 80.4,
            dexEntry: "Torkoal digs through mountains in search of coal. If it finds some, it fills hollow spaces on its shell with the coal and burns it. If it is attacked, this Pokémon spouts thick black smoke to beat a retreat.",
            cryUrl: "cries/324.mp3",
            japaneseName: "Cotoise"
        },
        {
            name: "Grimer",
            imageUrl: "images/088Grimer.png",
            number: "106",
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
            dexEntry: "Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.",
            cryUrl: "cries/088.mp3",
            japaneseName: "Betbeter"
        },
        {
            name: "Muk",
            imageUrl: "images/089Muk.png",
            number: "107",
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
            dexEntry: "From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.",
            cryUrl: "cries/089.mp3",
            japaneseName: "Betbeton"
        },
        {
            name: "Koffing",
            imageUrl: "images/109Koffing.png",
            number: "108",
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
            dexEntry: "If Koffing becomes agitated, it raises the toxicity of its internal gases and then jets them out from all over its body. This Pokémon may overinflate its round body, then explode.",
            cryUrl: "cries/109.mp3",
            japaneseName: "Dogars"
        },
        {
            name: "Weezing",
            imageUrl: "images/110Weezing.png",
            number: "109",
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
            dexEntry: "Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
            cryUrl: "cries/110.mp3",
            japaneseName: "Matadogas"
        },
        {
            name: "Spoink",
            imageUrl: "images/325Spoink.png",
            number: "110",
            type: ["Psychic"],
            category: "Bounce",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "67.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 30.6,
            dexEntry: "Spoink bounces around on its tail. The shock of its bouncing makes its heart pump. As a result, this Pokémon cannot afford to stop bouncing - if it stops, its heart will stop.",
            cryUrl: "cries/325.mp3",
            japaneseName: "Baneboo"
        },
        {
            name: "Grumpig",
            imageUrl: "images/326Grumpig.png",
            number: "111",
            type: ["Psychic"],
            category: "Manipulate",
            region: "Hoenn",
            generation: "3",
            height: "2'11\"",
            weight: "157.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 71.5,
            dexEntry: "Grumpig uses the black pearls on its body to amplify its psychic power waves for gaining total control over its foe. When this Pokémon uses its special power, its snorting breath grows labored.",
            cryUrl: "cries/326.mp3",
            japaneseName: "Boopig"
        },
        {
            name: "Sandshrew",
            imageUrl: "images/027Sandshrew.png",
            number: "112",
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
            dexEntry: "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
            cryUrl: "cries/027.mp3",
            japaneseName: "Sand"
        },
        {
            name: "Sandslash",
            imageUrl: "images/028Sandslash.png",
            number: "113",
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
            dexEntry: "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
            cryUrl: "cries/028.mp3",
            japaneseName: "Sandpan"
        },
        {
            name: "Spinda",
            imageUrl: "images/327Spinda.png",
            number: "114",
            type: ["Normal"],
            category: "Spot Panda",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 5.0,
            dexEntry: "All the Spinda that exist in the world are said to have utterly unique spot patterns. The shaky, tottering steps of this Pokémon give it the appearance of dancing.",
            cryUrl: "cries/327.mp3",
            japaneseName: "Patcheel"
        },
        {
            name: "Skarmory",
            imageUrl: "images/227Skarmory.png",
            number: "115",
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
            dexEntry: "Skarmory is entirely encased in hard, protective armor. This Pokémon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.",
            cryUrl: "cries/227.mp3",
            japaneseName: "Airmd"
        },
        {
            name: "Trapinch",
            imageUrl: "images/328Trapinch.png",
            number: "116",
            type: ["Ground"],
            category: "Ant Pit",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 15.0,
            dexEntry: "Trapinch's nest is a sloped, bowl-like pit dug in sand. This Pokémon patiently waits for prey to tumble down the pit. Its giant jaws have enough strength to crush even boulders.",
            cryUrl: "cries/328.mp3",
            japaneseName: "Nuckrar"
        },
        {
            name: "Vibrava",
            imageUrl: "images/329Vibrava.png",
            number: "117",
            type: ["Ground", "Dragon"],
            category: "Vibration",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "33.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 15.3,
            dexEntry: "To make prey faint, Vibrava generates ultrasonic waves by vigorously making its two wings vibrate. This Pokémon's ultrasonic waves are so powerful, they can bring on headaches in people.",
            cryUrl: "cries/329.mp3",
            japaneseName: "Vibrava"
        },
        {
            name: "Flygon",
            imageUrl: "images/330Flygon.png",
            number: "118",
            type: ["Ground", "Dragon"],
            category: "Mystic",
            region: "Hoenn",
            generation: "3",
            height: "6'07\"",
            weight: "180.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 82.0,
            dexEntry: "Flygon is nicknamed \"the elemental spirit of the desert.\" Because its flapping wings whip up a cloud of sand, this Pokémon is always enveloped in a sandstorm while flying.",
            cryUrl: "cries/330.mp3",
            japaneseName: "Flygon"
        },
        {
            name: "Cacnea",
            imageUrl: "images/331Cacnea.png",
            number: "119",
            type: ["Grass"],
            category: "Cactus",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "113.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 51.3,
            dexEntry: "Cacnea lives in arid locations such as deserts. It releases a strong aroma from its flower to attract prey. When prey comes near, this Pokémon shoots sharp thorns from its body to bring the victim down.",
            cryUrl: "cries/331.mp3",
            japaneseName: "Sabonea"
        },
        {
            name: "Cacturne",
            imageUrl: "images/332Cacturne.png",
            number: "120",
            type: ["Grass", "Dark"],
            category: "Scarecrow",
            region: "Hoenn",
            generation: "3",
            height: "4'03\"",
            weight: "170.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 77.4,
            dexEntry: "During the daytime, Cacturne remains unmoving so that it does not lose any moisture to the harsh desert sun. This Pokémon becomes active at night when the temperature drops.",
            cryUrl: "cries/332.mp3",
            japaneseName: "Noctus"
        },
        {
            name: "Swablu",
            imageUrl: "images/333Swablu.png",
            number: "121",
            type: ["Normal", "Flying"],
            category: "Cotton Bird",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.2,
            dexEntry: "Swablu has light and fluffy wings that are like cottony clouds. This Pokémon is not frightened of people. It lands on the heads of people and sits there like a cotton-fluff hat.",
            cryUrl: "cries/333.mp3",
            japaneseName: "Tyltto"
        },
        {
            name: "Altaria",
            imageUrl: "images/334Altaria.png",
            number: "122",
            type: ["Dragon", "Flying"],
            category: "Humming",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "45.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 20.6,
            dexEntry: "Altaria dances and wheels through the sky among billowing, cotton-like clouds. By singing melodies in its crystal-clear voice, this Pokémon makes its listeners experience dreamy wonderment.",
            cryUrl: "cries/334.mp3",
            japaneseName: "Tyltalis"
        },
        {
            name: "Zangoose",
            imageUrl: "images/335Zangoose.png",
            number: "123",
            type: ["Normal"],
            category: "Cat Ferret",
            region: "Hoenn",
            generation: "3",
            height: "4'03\"",
            weight: "88.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.3,
            dexEntry: "Memories of battling its arch-rival Seviper are etched into every cell of Zangoose's body. This Pokémon adroitly dodges attacks with incredible agility.",
            cryUrl: "cries/335.mp3",
            japaneseName: "Zangoose"
        },
        {
            name: "Seviper",
            imageUrl: "images/336Seviper.png",
            number: "124",
            type: ["Poison"],
            category: "Fang Snake",
            region: "Hoenn",
            generation: "3",
            height: "8'10\"",
            weight: "115.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.7,
            metricWeight: 52.5,
            dexEntry: "Seviper shares a generations-long feud with Zangoose. The scars on its body are evidence of vicious battles. This Pokémon attacks using its sword-edged tail.",
            cryUrl: "cries/336.mp3",
            japaneseName: "Habunake"
        },
        {
            name: "Lunatone",
            imageUrl: "images/337Lunatone.png",
            number: "125",
            type: ["Rock", "Psychic"],
            category: "Meteorite",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "370.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 168.0,
            dexEntry: "Lunatone was discovered at a location where a meteorite fell. As a result, some people theorize that this Pokémon came from space. However, no one has been able to prove this theory so far.",
            cryUrl: "cries/337.mp3",
            japaneseName: "Lunatone"
        },
        {
            name: "Solrock",
            imageUrl: "images/338Solrock.png",
            number: "126",
            type: ["Rock", "Psychic"],
            category: "Meteorite",
            region: "Hoenn",
            generation: "3",
            height: "3'11\"",
            weight: "339.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 154.0,
            dexEntry: "Solrock is a new species of Pokémon that is said to have fallen from space. It floats in the air and moves silently. In battle, this Pokémon releases intensely bright light.",
            cryUrl: "cries/338.mp3",
            japaneseName: "Solrock"
        },
        {
            name: "Barboach",
            imageUrl: "images/339Barboach.png",
            number: "127",
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
            dexEntry: "Barboach's sensitive whiskers serve as a superb radar system. This Pokémon hides in mud, leaving only its two whiskers exposed while it waits for prey to come along.",
            cryUrl: "cries/339.mp3",
            japaneseName: "Dojoach"
        },
        {
            name: "Whiscash",
            imageUrl: "images/340Whiscash.png",
            number: "128",
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
            dexEntry: "Whiscash is extremely territorial. Just one of these Pokémon will claim a large pond as its exclusive territory. If a foe approaches it, it thrashes about and triggers a massive earthquake.",
            cryUrl: "cries/340.mp3",
            japaneseName: "Namazun"
        },
        {
            name: "Corphish",
            imageUrl: "images/341Corphish.png",
            number: "129",
            type: ["Water"],
            category: "Ruffian",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.5,
            dexEntry: "Corphish were originally foreign Pokémon that were imported as pets. They eventually turned up in the wild. This Pokémon is very hardy and has greatly increased its population.",
            cryUrl: "cries/341.mp3",
            japaneseName: "Heigani"
        },
        {
            name: "Crawdaunt",
            imageUrl: "images/342Crawdaunt.png",
            number: "130",
            type: ["Water", "Dark"],
            category: "Rogue",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "72.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 32.8,
            dexEntry: "Crawdaunt has an extremely violent nature that compels it to challenge other living things to battle. Other life-forms refuse to live in ponds inhabited by this Pokémon, making them desolate places.",
            cryUrl: "cries/342.mp3",
            japaneseName: "Shizariger"
        },
        {
            name: "Baltoy",
            imageUrl: "images/343Baltoy.png",
            number: "131",
            type: ["Ground", "Psychic"],
            category: "Clay Doll",
            region: "Hoenn",
            generation: "3",
            height: "1'08\"",
            weight: "47.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 21.5,
            dexEntry: "Baltoy moves while spinning around on its one foot. Primitive wall paintings depicting this Pokémon living among people were discovered in some ancient ruins.",
            cryUrl: "cries/343.mp3",
            japaneseName: "Yajilon"
        },
        {
            name: "Claydol",
            imageUrl: "images/344Claydol.png",
            number: "132",
            type: ["Ground", "Psychic"],
            category: "Clay Doll",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "238.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 108.0,
            dexEntry: "Claydol are said to be dolls of mud made by primitive humans and brought to life by exposure to a mysterious ray. This Pokémon moves about while levitating.",
            cryUrl: "cries/344.mp3",
            japaneseName: "Nendoll"
        },
        {
            name: "Lileep",
            imageUrl: "images/345Lileep.png",
            number: "133",
            type: ["Rock", "Grass"],
            category: "Sea Lily",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "52.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 23.8,
            dexEntry: "Lileep became extinct approximately a hundred million years ago. This ancient Pokémon attaches itself to a rock on the seafloor and catches approaching prey using tentacles shaped like flower petals.",
            cryUrl: "cries/345.mp3",
            japaneseName: "Lilyla"
        },
        {
            name: "Cradily",
            imageUrl: "images/346Cradily.png",
            number: "134",
            type: ["Rock", "Grass"],
            category: "Barnacle",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "133.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 60.4,
            dexEntry: "Cradily roams around the ocean floor in search of food. This Pokémon freely extends its tree trunk-like neck and captures unwary prey using its eight tentacles.",
            cryUrl: "cries/346.mp3",
            japaneseName: "Yuradle"
        },
        {
            name: "Anorith",
            imageUrl: "images/347Anorith.png",
            number: "135",
            type: ["Rock", "Bug"],
            category: "Old Shrimp",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 12.5,
            dexEntry: "Anorith was regenerated from a prehistoric fossil. This primitive Pokémon once lived in warm seas. It grips its prey firmly between its two large claws.",
            cryUrl: "cries/347.mp3",
            japaneseName: "Anopth"
        },
        {
            name: "Armaldo",
            imageUrl: "images/348Armaldo.png",
            number: "136",
            type: ["Rock", "Bug"],
            category: "Plate",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "150.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 68.2,
            dexEntry: "Armaldo's tough armor makes all attacks bounce off. This Pokémon's two enormous claws can be freely extended or contracted. They have the power to punch right through a steel slab.",
            cryUrl: "cries/348.mp3",
            japaneseName: "Armaldo"
        },
        {
            name: "Igglybuff",
            imageUrl: "images/174Igglybuff.png",
            number: "137",
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
            dexEntry: "Igglybuff's vocal chords are not sufficiently developed. It would hurt its throat if it were to sing too much. This Pokémon gargles with freshwater from a clean stream.",
            cryUrl: "cries/174.mp3",
            japaneseName: "Pupurin"
        },
        {
            name: "Jigglypuff",
            imageUrl: "images/039Jigglypuff.png",
            number: "138",
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
            dexEntry: "Jigglypuff's vocal chords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
            cryUrl: "cries/039.mp3",
            japaneseName: "Purin"
        },
        {
            name: "Wigglytuff",
            imageUrl: "images/040Wigglytuff.png",
            number: "139",
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
            dexEntry: "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
            cryUrl: "cries/040.mp3",
            japaneseName: "Pukurin"
        },
        {
            name: "Feebas",
            imageUrl: "images/349Feebas.png",
            number: "140",
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
            dexEntry: "Feebas's fins are ragged and tattered from the start of its life. Because of its shoddy appearance, this Pokémon is largely ignored. It is capable of living in both the sea and in rivers.",
            cryUrl: "cries/349.mp3",
            japaneseName: "Hinbass"
        },
        {
            name: "Milotic",
            imageUrl: "images/350Milotic.png",
            number: "141",
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
            dexEntry: "Milotic is said to be the most beautiful of all the Pokémon. It has the power to becalm such emotions as anger and hostility to quell bitter feuding.",
            cryUrl: "cries/350.mp3",
            japaneseName: "Milokaross"
        },
        {
            name: "Castform",
            imageUrl: "images/351Castform.png",
            number: "142",
            type: ["Normal"],
            category: "Weather",
            region: "Hoenn",
            generation: "3",
            height: "1'00\"",
            weight: "1.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.8,
            dexEntry: "Castform's appearance changes with the weather. This Pokémon gained the ability to use the vast power of nature to protect its tiny body.",
            cryUrl: "cries/351.mp3",
            japaneseName: "Powalen"
        },
        {
            name: "Staryu",
            imageUrl: "images/120Staryu.png",
            number: "143",
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
            dexEntry: "Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.",
            cryUrl: "cries/120.mp3",
            japaneseName: "Hitodeman"
        },
        {
            name: "Starmie",
            imageUrl: "images/121Starmie.png",
            number: "144",
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
            dexEntry: "Starmie's center section - the core - glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname \"the gem of the sea.\"",
            cryUrl: "cries/121.mp3",
            japaneseName: "Starmie"
        },
        {
            name: "Kecleon",
            imageUrl: "images/352Kecleon.png",
            number: "145",
            type: ["Normal"],
            category: "Color Swap",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "48.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 22.0,
            dexEntry: "Kecleon is capable of changing its body colors at will to blend in with its surroundings. There is one exception - this Pokémon can't change the zigzag pattern on its belly.",
            cryUrl: "cries/352.mp3",
            japaneseName: "Kakureon"
        },
        {
            name: "Shuppet",
            imageUrl: "images/353Shuppet.png",
            number: "146",
            type: ["Ghost"],
            category: "Puppet",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "5.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 2.3,
            dexEntry: "Shuppet is attracted by feelings of jealousy and vindictiveness. If someone develops strong feelings of vengeance, this Pokémon will appear in a swarm and line up beneath the eaves of that person's home.",
            cryUrl: "cries/353.mp3",
            japaneseName: "Kagebouzu"
        },
        {
            name: "Banette",
            imageUrl: "images/354Banette.png",
            number: "147",
            type: ["Ghost"],
            category: "Marionette",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 12.5,
            dexEntry: "Banette generates energy for laying strong curses by sticking pins into its own body. This Pokémon was originally a pitiful plush doll that was thrown away.",
            cryUrl: "cries/354.mp3",
            japaneseName: "Juppeta"
        },
        {
            name: "Duskull",
            imageUrl: "images/355Duskull.png",
            number: "148",
            type: ["Ghost"],
            category: "Requiem",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 15.0,
            dexEntry: "Duskull can pass through any wall no matter how thick it may be. Once this Pokémon chooses a target, it will doggedly pursue the intended victim until the break of dawn.",
            cryUrl: "cries/355.mp3",
            japaneseName: "Yomawaru"
        },
        {
            name: "Dusclops",
            imageUrl: "images/356Dusclops.png",
            number: "149",
            type: ["Ghost"],
            category: "Beckon",
            region: "Hoenn",
            generation: "3",
            height: "5'03\"",
            weight: "67.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 30.6,
            dexEntry: "Dusclops's body is completely hollow - there is nothing at all inside. It is said that its body is like a black hole. This Pokémon will absorb anything into its body, but nothing will ever come back out.",
            cryUrl: "cries/356.mp3",
            japaneseName: "Samayouru"
        },
        {
            name: "Tropius",
            imageUrl: "images/357Tropius.png",
            number: "150",
            type: ["Grass", "Flying"],
            category: "Fruit",
            region: "Hoenn",
            generation: "3",
            height: "6'07\"",
            weight: "220.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 100.0,
            dexEntry: "The bunches of fruit around Tropius's neck are very popular with children. This Pokémon loves fruit, and eats it continuously. Apparently, its love for fruit resulted in its own outgrowth of fruit.",
            cryUrl: "cries/357.mp3",
            japaneseName: "Tropius"
        },
        {
            name: "Chimecho",
            imageUrl: "images/358Chimecho.png",
            number: "151",
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
            dexEntry: "Chimecho makes its cries echo inside its hollow body. When this Pokémon becomes enraged, its cries result in ultrasonic waves that have the power to knock foes flying.",
            cryUrl: "cries/358.mp3",
            japaneseName: "Chirean"
        },
        {
            name: "Absol",
            imageUrl: "images/359Absol.png",
            number: "152",
            type: ["Dark"],
            category: "Disaster",
            region: "Hoenn",
            generation: "3",
            height: "3'11\"",
            weight: "103.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 47.0,
            dexEntry: "Every time Absol appears before people, it is followed by a disaster such as an earthquake or a tidal wave. As a result, it came to be known as the disaster Pokémon.",
            cryUrl: "cries/359.mp3",
            japaneseName: "Absol"
        },
        {
            name: "Vulpix",
            imageUrl: "images/037Vulpix.png",
            number: "153",
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
            dexEntry: "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "images/038Ninetales.png",
            number: "154",
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
            dexEntry: "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Pichu",
            imageUrl: "images/172Pichu.png",
            number: "155",
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
            dexEntry: "Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry. You can hear the crackling of static electricity coming off this Pokémon.",
            cryUrl: "cries/172.mp3",
            japaneseName: "Pichu"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "156",
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
            dexEntry: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "157",
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
            dexEntry: "If the electrical sacks become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "158",
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
            dexEntry: "Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "159",
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
            dexEntry: "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Wynaut",
            imageUrl: "images/360Wynaut.png",
            number: "160",
            type: ["Psychic"],
            category: "Bright",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "30.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 14.0,
            dexEntry: "Wynaut can always be seen with a big, happy smile on its face. Look at its tail to determine if it is angry. When angered, this Pokémon will be slapping the ground with its tail.",
            cryUrl: "cries/360.mp3",
            japaneseName: "Sohnano"
        },
        {
            name: "Wobbuffet",
            imageUrl: "images/202Wobbuffet.png",
            number: "161",
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
            dexEntry: "If two or more Wobbuffet meet, they will turn competitive and try to outdo the other's endurance. However, they may try to see which one can endure the longest without food. Trainers need to beware of this habit.",
            cryUrl: "cries/202.mp3",
            japaneseName: "Sonans"
        },
        {
            name: "Natu",
            imageUrl: "images/177Natu.png",
            number: "162",
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
            dexEntry: "Natu cannot fly because its wings are not yet fully grown. If your eyes meet with this Pokémon's eyes, it will stare back intently at you. But if you move even slightly, it will hop away to safety.",
            cryUrl: "cries/177.mp3",
            japaneseName: "Naty"
        },
        {
            name: "Xatu",
            imageUrl: "images/178Xatu.png",
            number: "163",
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
            dexEntry: "Xatu stands rooted and still in one spot all day long. People believe that this Pokémon does so out of fear of the terrible things it has foreseen in the future.",
            cryUrl: "cries/178.mp3",
            japaneseName: "Natio"
        },
        {
            name: "Girafarig",
            imageUrl: "images/203Girafarig.png",
            number: "164",
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
            dexEntry: "Girafarig's rear head also has a brain, but it is small. The rear head attacks in response to smells and sounds. Approaching this Pokémon from behind can cause the rear head to suddenly lash out and bite.",
            cryUrl: "cries/203.mp3",
            japaneseName: "Kirinriki"
        },
        {
            name: "Phanpy",
            imageUrl: "images/231Phanpy.png",
            number: "165",
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
            dexEntry: "For its nest, Phanpy digs a vertical pit in the ground at the edge of a river. It marks the area around its nest with its trunk to let the others know that the area has been claimed.",
            cryUrl: "cries/231.mp3",
            japaneseName: "Gomazou"
        },
        {
            name: "Donphan",
            imageUrl: "images/232Donphan.png",
            number: "166",
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
            dexEntry: "Donphan's favorite attack is curling its body into a ball, then charging at its foe while rolling at high speed. Once it starts rolling, this Pokémon can't stop very easily.",
            cryUrl: "cries/232.mp3",
            japaneseName: "Donfan"
        },
        {
            name: "Pinsir",
            imageUrl: "images/127Pinsir.png",
            number: "167",
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
            dexEntry: "Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.",
            cryUrl: "cries/127.mp3",
            japaneseName: "Kailios"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "168",
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
            dexEntry: "Heracross charges in a straight line at its foe, slips beneath the foe's grasp, and then scoops up and hurls the opponent with its mighty horn. This Pokémon even has enough power to topple a massive tree.",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "169",
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
            dexEntry: "Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "170",
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
            dexEntry: "Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Snorunt",
            imageUrl: "images/361Snorunt.png",
            number: "171",
            type: ["Ice"],
            category: "Snow Hat",
            region: "Hoenn",
            generation: "3",
            height: "2'04\"",
            weight: "37.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.8,
            dexEntry: "Snorunt live in regions with heavy snowfall. In seasons without snow, such as spring and summer, this Pokémon steals away to live quietly among stalactites and stalagmites deep in caverns.",
            cryUrl: "cries/361.mp3",
            japaneseName: "Yukiwarashi"
        },
        {
            name: "Glalie",
            imageUrl: "images/362Glalie.png",
            number: "172",
            type: ["Ice"],
            category: "Face",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "565.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 256.5,
            dexEntry: "Glalie has a body made of rock, which it hardens with an armor of ice. This Pokémon has the ability to freeze moisture in the atmosphere into any shape it desires.",
            cryUrl: "cries/362.mp3",
            japaneseName: "Onigohri"
        },
        {
            name: "Spheal",
            imageUrl: "images/363Spheal.png",
            number: "173",
            type: ["Ice", "Water"],
            category: "Clap",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "87.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 39.5,
            dexEntry: "Spheal is much faster rolling than walking to get around. When groups of this Pokémon eat, they all clap at once to show their pleasure. Because of this, their mealtimes are noisy.",
            cryUrl: "cries/363.mp3",
            japaneseName: "Tamazarashi"
        },
        {
            name: "Sealeo",
            imageUrl: "images/364Sealeo.png",
            number: "174",
            type: ["Ice", "Water"],
            category: "Ball Roll",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "193.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 87.6,
            dexEntry: "Sealeo has the habit of always juggling on the tip of its nose anything it sees for the first time. This Pokémon occasionally entertains itself by balancing and rolling a Spheal on its nose.",
            cryUrl: "cries/364.mp3",
            japaneseName: "Todoggler"
        },
        {
            name: "Walrein",
            imageUrl: "images/365Walrein.png",
            number: "175",
            type: ["Ice", "Water"],
            category: "Ice Break",
            region: "Hoenn",
            generation: "3",
            height: "4'07\"",
            weight: "332.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 150.6,
            dexEntry: "Walrein's two massively developed tusks can totally shatter blocks of ice weighing ten tons with one blow. This Pokémon's thick coat of blubber insulates it from subzero temperatures.",
            cryUrl: "cries/365.mp3",
            japaneseName: "Todoseruga"
        },
        {
            name: "Clamperl",
            imageUrl: "images/366Clamperl.png",
            number: "176",
            type: ["Water"],
            category: "Bivalve",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "115.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 52.5,
            dexEntry: "Clamperl's sturdy shell is not only good for protection - it is also used for clamping and catching prey. A fully grown Clamperl's shell will be scored with nicks and scratches all over.",
            cryUrl: "cries/366.mp3",
            japaneseName: "Pearlulu"
        },
        {
            name: "Huntail",
            imageUrl: "images/367Huntail.png",
            number: "177",
            type: ["Water"],
            category: "Deep Sea",
            region: "Hoenn",
            generation: "3",
            height: "5'07\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 27.0,
            dexEntry: "Huntail's presence went unnoticed by people for a long time because it lives at extreme depths in the sea. This Pokémon's eyes can see clearly even in the murky dark depths of the ocean.",
            cryUrl: "cries/367.mp3",
            japaneseName: "Huntail"
        },
        {
            name: "Gorebyss",
            imageUrl: "images/368Gorebyss.png",
            number: "178",
            type: ["Water"],
            category: "South Sea",
            region: "Hoenn",
            generation: "3",
            height: "5'11\"",
            weight: "49.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 22.6,
            dexEntry: "Gorebyss lives in the southern seas at extreme depths. Its body is built to withstand the enormous pressure of water at incredible depths. Because of this, this Pokémon's body is unharmed by ordinary attacks.",
            cryUrl: "cries/368.mp3",
            japaneseName: "Sakurabyss"
        },
        {
            name: "Relicanth",
            imageUrl: "images/369Relicanth.png",
            number: "179",
            type: ["Water", "Rock"],
            category: "Longevity",
            region: "Hoenn",
            generation: "3",
            height: "3'03\"",
            weight: "51.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 23.4,
            dexEntry: "Relicanth is a Pokémon species that existed for a hundred million years without ever changing its form. This ancient Pokémon feeds on microscopic organisms with its toothless mouth.",
            cryUrl: "cries/369.mp3",
            japaneseName: "Glanth"
        },
        {
            name: "Corsola",
            imageUrl: "images/222Corsola.png",
            number: "180",
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
            dexEntry: "Corsola's branches glitter very beautifully in seven colors when they catch sunlight. If any branch breaks off, this Pokémon grows it back in just one night.",
            cryUrl: "cries/222.mp3",
            japaneseName: "Sunnygo"
        },
        {
            name: "Chinchou",
            imageUrl: "images/170Chinchou.png",
            number: "181",
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
            dexEntry: "Chinchou lets loose positive and negative electrical charges from its two antennas to make its prey faint. This Pokémon flashes its electric lights to exchange signals with others.",
            cryUrl: "cries/170.mp3",
            japaneseName: "Chonchie"
        },
        {
            name: "Lanturn",
            imageUrl: "images/171Lanturn.png",
            number: "182",
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
            dexEntry: "Lanturn is nicknamed \"the deep-sea star\" for its illuminated antenna. This Pokémon produces light by causing a chemical reaction between bacteria and its bodily fluids inside the antenna.",
            cryUrl: "cries/171.mp3",
            japaneseName: "Lantern"
        },
        {
            name: "Luvdisc",
            imageUrl: "images/370Luvdisc.png",
            number: "183",
            type: ["Water"],
            category: "Rendezvous",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "19.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.7,
            dexEntry: "Luvdisc live in shallow seas in the tropics. This heart-shaped Pokémon earned its name by swimming after loving couples it spotted in the ocean's waves.",
            cryUrl: "cries/370.mp3",
            japaneseName: "Lovecus"
        },
        {
            name: "Horsea",
            imageUrl: "images/116Horsea.png",
            number: "184",
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
            dexEntry: "Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.",
            cryUrl: "cries/116.mp3",
            japaneseName: "Tattu"
        },
        {
            name: "Seadra",
            imageUrl: "images/117Seadra.png",
            number: "185",
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
            dexEntry: "Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.",
            cryUrl: "cries/117.mp3",
            japaneseName: "Seadra"
        },
        {
            name: "Kingdra",
            imageUrl: "images/230Kingdra.png",
            number: "186",
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
            dexEntry: "Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.",
            cryUrl: "cries/230.mp3",
            japaneseName: "Kingdra"
        },
        {
            name: "Bagon",
            imageUrl: "images/371Bagon.png",
            number: "187",
            type: ["Dragon"],
            category: "Rock Head",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "92.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 42.1,
            dexEntry: "Bagon has a dream of one day soaring in the sky. In doomed efforts to fly, this Pokémon hurls itself off cliffs. As a result of its dives, its head has grown tough and as hard as tempered steel.",
            cryUrl: "cries/371.mp3",
            japaneseName: "Tatsubay"
        },
        {
            name: "Shelgon",
            imageUrl: "images/372Shelgon.png",
            number: "188",
            type: ["Dragon"],
            category: "Endurance",
            region: "Hoenn",
            generation: "3",
            height: "3'07\"",
            weight: "243.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 110.5,
            dexEntry: "Inside Shelgon's armor-like shell, cells are in the midst of transformation to create an entirely new body. This Pokémon's shell is extremely heavy, making its movements sluggish.",
            cryUrl: "cries/372.mp3",
            japaneseName: "Komoruu"
        },
        {
            name: "Salamence",
            imageUrl: "images/373Salamence.png",
            number: "189",
            type: ["Dragon", "Flying"],
            category: "Dragon",
            region: "Hoenn",
            generation: "3",
            height: "4'11\"",
            weight: "226.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 102.6,
            dexEntry: "Salamence came about as a result of a strong, long-held dream of growing wings. It is said that this powerful desire triggered a sudden mutation in this Pokémon's cells, causing it to sprout its magnificent wings.",
            cryUrl: "cries/373.mp3",
            japaneseName: "Bohmander"
        },
        {
            name: "Beldum",
            imageUrl: "images/374Beldum.png",
            number: "190",
            type: ["Steel", "Psychic"],
            category: "Iron Ball",
            region: "Hoenn",
            generation: "3",
            height: "2'00\"",
            weight: "209.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 95.2,
            dexEntry: "Instead of blood, a powerful magnetic force courses throughout Beldum's body. This Pokémon communicates with others by sending controlled pulses of magnetism.",
            cryUrl: "cries/374.mp3",
            japaneseName: "Dumbber"
        },
        {
            name: "Metang",
            imageUrl: "images/375Metang.png",
            number: "191",
            type: ["Steel", "Psychic"],
            category: "Iron Claw",
            region: "Hoenn",
            generation: "3",
            height: "3'11\"",
            weight: "446.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 202.5,
            dexEntry: "When two Beldum fuse together, Metang is formed. The brains of the Beldum are joined by a magnetic nervous system. By linking its brains magnetically, this Pokémon generates strong psychokinetic power.",
            cryUrl: "cries/375.mp3",
            japaneseName: "Metang"
        },
        {
            name: "Metagross",
            imageUrl: "images/376Metagross.png",
            number: "192",
            type: ["Steel", "Psychic"],
            category: "Iron Leg",
            region: "Hoenn",
            generation: "3",
            height: "5'03\"",
            weight: "1212.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 550.0,
            dexEntry: "Metagross has four brains in total. Combined, the four brains can breeze through difficult calculations faster than a supercomputer. This Pokémon can float in the air by tucking in its four legs.",
            cryUrl: "cries/376.mp3",
            japaneseName: "Metagross"
        },
        {
            name: "Regirock",
            imageUrl: "images/377Regirock.png",
            number: "193",
            type: ["Rock"],
            category: "Rock Peak",
            region: "Hoenn",
            generation: "3",
            height: "5'07\"",
            weight: "507.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 230.0,
            dexEntry: "Regirock was sealed away by people long ago. If this Pokémon's body is damaged in battle, it is said to seek out suitable rocks on its own to repair itself.",
            cryUrl: "cries/377.mp3",
            japaneseName: "Regirock"
        },
        {
            name: "Regice",
            imageUrl: "images/378Regice.png",
            number: "194",
            type: ["Ice"],
            category: "Iceberg",
            region: "Hoenn",
            generation: "3",
            height: "5'11\"",
            weight: "385.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 175.0,
            dexEntry: "Regice's body was made during an ice age. The deep-frozen body can't be melted, even by fire. This Pokémon controls frigid air of minus 328 degrees F.",
            cryUrl: "cries/378.mp3",
            japaneseName: "Regice"
        },
        {
            name: "Registeel",
            imageUrl: "images/379Registeel.png",
            number: "195",
            type: ["Steel"],
            category: "Iron",
            region: "Hoenn",
            generation: "3",
            height: "6'03\"",
            weight: "451.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 205.0,
            dexEntry: "Registeel has a body that is harder than any kind of metal. Its body is apparently hollow. No one has any idea what this Pokémon eats.",
            cryUrl: "cries/379.mp3",
            japaneseName: "Registeel"
        },
        {
            name: "Latias",
            imageUrl: "images/380Latias.png",
            number: "196",
            type: ["Dragon", "Psychic"],
            category: "Eon",
            region: "Hoenn",
            generation: "3",
            height: "4'07\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 40.0,
            dexEntry: "Latias is highly sensitive to the emotions of people. If it senses any hostility, this Pokémon ruffles the feathers all over its body and cries shrilly to intimidate the foe.",
            cryUrl: "cries/380.mp3",
            japaneseName: "Latias"
        },
        {
            name: "Latios",
            imageUrl: "images/381Latios.png",
            number: "197",
            type: ["Dragon", "Psychic"],
            category: "Eon",
            region: "Hoenn",
            generation: "3",
            height: "6'07\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 60.0,
            dexEntry: "Latios has the ability to make its foe see an image of what it has seen or imagines in its head. This Pokémon is intelligent and understands human speech.",
            cryUrl: "cries/381.mp3",
            japaneseName: "Latios"
        },
        {
            name: "Kyogre",
            imageUrl: "images/382Kyogre.png",
            number: "198",
            type: ["Water"],
            category: "Sea Basin",
            region: "Hoenn",
            generation: "3",
            height: "14'09\"",
            weight: "776.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.5,
            metricWeight: 352.0,
            dexEntry: "Kyogre has the power to create massive rain clouds that cover the entire sky and bring about torrential downpours. This Pokémon saved people who were suffering from droughts.",
            cryUrl: "cries/382.mp3",
            japaneseName: "Kyogre"
        },
        {
            name: "Groudon",
            imageUrl: "images/383Groudon.png",
            number: "199",
            type: ["Ground"],
            category: "Continent",
            region: "Hoenn",
            generation: "3",
            height: "11'06\"",
            weight: "2094.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.5,
            metricWeight: 950.0,
            dexEntry: "Groudon has long been described in mythology as the Pokémon that raised lands and expanded continents. This Pokémon took to sleep after a cataclysmic battle with Kyogre.",
            cryUrl: "cries/383.mp3",
            japaneseName: "Groudon"
        },
        {
            name: "Rayquaza",
            imageUrl: "images/384Rayquaza.png",
            number: "200",
            type: ["Dragon", "Flying"],
            category: "Sky High",
            region: "Hoenn",
            generation: "3",
            height: "23'00\"",
            weight: "455.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 7.0,
            metricWeight: 206.5,
            dexEntry: "Rayquaza lived for hundreds of millions of years in the earth's ozone layer, never descending to the ground. This Pokémon appears to feed on water and particles in the atmosphere.",
            cryUrl: "cries/384.mp3",
            japaneseName: "Rayquaza"
        },
        {
            name: "Jirachi",
            imageUrl: "images/385Jirachi.png",
            number: "201",
            type: ["Steel", "Psychic"],
            category: "Wish",
            region: "Hoenn",
            generation: "3",
            height: "1'00\"",
            weight: "2.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.1,
            dexEntry: "A legend states that Jirachi will make true any wish that is written on the notes attached to head when it awakens. If this Pokémon senses danger, it will fight without awakening.",
            cryUrl: "cries/385.mp3",
            japaneseName: "Jirachi"
        },
        {
            name: "Deoxys",
            imageUrl: "images/386Deoxys.png",
            number: "202",
            type: ["Psychic"],
            category: "DNA",
            region: "Hoenn",
            generation: "3",
            height: "5'07\"",
            weight: "134.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 60.8,
            dexEntry: "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon's chest appears to be its brain.",
            cryUrl: "cries/386.mp3",
            japaneseName: "Deoxys"
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