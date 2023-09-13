//Emerald Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Treecko",
            imageUrl: "images/252Treecko.png",
            number: "001",
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
            dexEntry: "It makes its nest in a giant tree in the forest. It ferociously guards against anything nearing its territory. It is said to be the protector of the forest's trees.",
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
            generation: "03",
            height: "2'11\"",
            weight: "47.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 21.6,
            dexEntry: "Leaves grow out of this Pokémon's body. They help obscure a Grovyle from the eyes of its enemies while it is in a thickly overgrown forest.",
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
            generation: "03",
            height: "5'07\"",
            weight: "115.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 52.2,
            dexEntry: "In the jungle, its power is without equal. This Pokémon carefully grows trees and plants. It regulates its body temperature by basking in sunlight.",
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
            generation: "03",
            height: "1'04\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.5,
            dexEntry: "If attacked, it strikes back by spitting balls of fire it forms in its stomach. A Torchic dislikes darkness because it can't see its surroundings.",
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
            generation: "03",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "It lashes out with 10 kicks per second. Its strong fighting instinct compels it to keep up its offensive until the opponent gives up.",
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
            generation: "03",
            height: "6'03\"",
            weight: "114.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 52.0,
            dexEntry: "It learns martial arts that use punches and kicks. Every several years, its old feathers burn off, and new, supple feathers grow back in their place.",
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
            generation: "03",
            height: "1'04\"",
            weight: "16.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.6,
            dexEntry: "On land, it can powerfully lift large boulders by planting its four feet and heaving. It sleeps by burying itself in soil at the water's edge.",
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
            generation: "03",
            height: "2'04\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 28.0,
            dexEntry: "Its toughened hind legs enable it to stand upright. Because it weakens if its skin dries out, it replenishes fluids by playing in mud.",
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
            generation: "03",
            height: "4'11\"",
            weight: "180.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 81.9,
            dexEntry: "If it senses the approach of a storm and a tidal wave, it protects its seaside nest by piling up boulders. It swims as fast as a jet ski.",
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
            generation: "03",
            height: "1'08\"",
            weight: "30.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 13.6,
            dexEntry: "It savagely threatens foes with bared fangs. It chases after fleeing targets tenaciously. It turns tail and runs, however, if the foe strikes back.",
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
            generation: "03",
            height: "3'03\"",
            weight: "81.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 37.0,
            dexEntry: "In the wild, Mightyena live in a pack. They never defy their leader's orders. They defeat foes with perfectly coordinated teamwork.",
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
            generation: "03",
            height: "1'04\"",
            weight: "38.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 17.5,
            dexEntry: "Rubbing its nose against the ground, it always wanders about back and forth in search of something. It is distinguished by the zigzag footprints it leaves.",
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
            generation: "03",
            height: "1'08\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 32.5,
            dexEntry: "It is exceedingly fast if it only has to run in a straight line. When it spots pond-dwelling ",
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
            generation: "03",
            height: "1'00\"",
            weight: "7.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.6,
            dexEntry: "It sticks to tree branches and eats leaves. The thread it spits from its mouth, which becomes gooey when it touches air, slows the movement of its foes.",
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
            generation: "03",
            height: "2'00\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 10.0,
            dexEntry: "It prepares for evolution using the energy it stored while it was a Wurmple. It keeps watch over the surroundings with its two eyes.",
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
            generation: "03",
            height: "3'03\"",
            weight: "62.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.4,
            dexEntry: "Its colorfully patterned wings are its most prominent feature. It flies through flower-covered fields collecting pollen. It attacks ferociously when angered.",
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
            generation: "03",
            height: "2'04\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 11.5,
            dexEntry: "To avoid detection by its enemies, it hides motionlessly beneath large leaves and in the gaps of branches. It also attaches dead leaves to its body for camouflage.",
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
            generation: "03",
            height: "3'11\"",
            weight: "69.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 31.6,
            dexEntry: "It is a nocturnal Pokémon that flies from fields and mountains to the attraction of streetlights at night. It looses highly toxic powder from its wings.",
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
            generation: "03",
            height: "1'08\"",
            weight: "5.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.6,
            dexEntry: "This Pokémon lives in ponds with clean water. It is known to ferry small Pokémon across ponds by carrying them on the broad leaf on its head.",
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
            generation: "03",
            height: "3'11\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 32.5,
            dexEntry: "In the evening, it takes great delight in popping out of rivers and startling people. It feeds on aquatic moss that grows on rocks in the riverbed.",
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
            generation: "03",
            height: "4'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 55.0,
            dexEntry: "When it hears festive music, all the cells in its body become stimulated, and it begins moving in rhythm. It does not quail even when it faces a tough opponent.",
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
            generation: "03",
            height: "1'08\"",
            weight: "8.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 4.0,
            dexEntry: "It hangs off branches and absorbs nutrients. When it finishes eating, its body becomes so heavy that it drops to the ground with a thump.",
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
            generation: "03",
            height: "3'03\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 28.0,
            dexEntry: "A forest-dwelling Pokémon that is skilled at climbing trees. Its long and pointed nose is its weak point. It loses power if the nose is gripped.",
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
            generation: "03",
            height: "4'03\"",
            weight: "131.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 59.6,
            dexEntry: "It is said to arrive on chilly, wintry winds. Feared from long ago as the guardian of forests, this Pokémon lives in a deep forest where people do not venture.",
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
            generation: "03",
            height: "1'00\"",
            weight: "5.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.3,
            dexEntry: "Although it is small, it is very courageous. It will take on a larger Skarmory on an equal footing. However, its will weakens if it becomes hungry.",
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
            generation: "03",
            height: "2'04\"",
            weight: "43.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 19.8,
            dexEntry: "A Swellow dives upon prey from far above. It never misses its targets. It takes to the skies in search of lands with a warm climate.",
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
            generation: "03",
            height: "2'00\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.5,
            dexEntry: "It makes its nest on a sheer cliff at the edge of the sea. It has trouble keeping its wings flapping in flight. Instead, it soars on updrafts.",
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
            generation: "03",
            height: "3'11\"",
            weight: "61.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 28.0,
            dexEntry: "It skims the tops of waves as it flies. When it spots prey, it uses its large beak to scoop up the victim with water. It protects its eggs in its beak.",
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
            generation: "03",
            height: "1'04\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.6,
            dexEntry: "A Ralts has the power to sense the emotions of people and Pokémon with the horns on its head. It takes cover if it senses any hostility",
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
            generation: "03",
            height: "2'07\"",
            weight: "44.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.2,
            dexEntry: "A Kirlia has the psychic power to create a rip in the dimensions and see into the future. It is said to dance with pleasure on sunny mornings.",
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
            generation: "03",
            height: "5'03\"",
            weight: "106.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 48.4,
            dexEntry: "It apparently does not feel the pull of gravity because it supports itself with psychic power. It will give its life to protect its Trainer.",
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
            generation: "03",
            height: "1'08\"",
            weight: "3.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 1.7,
            dexEntry: "They gather on puddles after evening downpours, gliding across the surface of water as if sliding. It secretes honey with a sweet aroma from its head.",
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
            generation: "03",
            height: "2'07\"",
            weight: "7.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 3.6,
            dexEntry: "It intimidates foes with the large eyelike patterns on its antennae. Because it can't fly if its wings get wet, it shelters itself from rain under large trees and eaves.",
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
            generation: "03",
            height: "1'04\"",
            weight: "9.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.5,
            dexEntry: "It loves to eat damp, composted soil in forests. If you enter a forest after a long rain, you can see many Shroomish feasting on composted soil.",
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
            generation: "03",
            height: "3'11\"",
            weight: "86.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 39.2,
            dexEntry: "It scatters spores from holes in the cap on its head. It loves warm and humid climates. It feeds on trees and plants in fields and forests.",
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
            generation: "03",
            height: "2'07\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.0,
            dexEntry: "It sleeps virtually all day and night long. It doesn't change its nest its entire life, but it sometimes travels great distances by swimming in rivers.",
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
            generation: "03",
            height: "4'07\"",
            weight: "102.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 46.5,
            dexEntry: "It can't keep still because its blood boils with energy. It runs through the fields and mountains all day to calm itself. If it doesn't, it can't sleep at night.",
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
            generation: "03",
            height: "6'07\"",
            weight: "287.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 130.5,
            dexEntry: "Hordes of Slaking gather around trees when fruits come into season. They wait around patiently for ripened fruits to fall out of the trees.",
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
            generation: "01",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "A Pokémon that sleeps 18 hours a day. Observation revealed that it uses Teleport to change its location once every hour.",
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
            generation: "01",
            height: "4'03\"",
            weight: "124.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 56.5,
            dexEntry: "It is rumored that a boy with psychic abilities suddenly transformed into Kadabra while he was assisting research into extrasensory powers.",
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
            generation: "01",
            height: "4'11\"",
            weight: "105.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 48.0,
            dexEntry: "While it has strong psychic abilities and high intelligence, an Alakazam's muscles are very weak. It uses psychic power to move its body.",
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
            generation: "03",
            height: "1'08\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.5,
            dexEntry: "It makes its nest at the roots of a mighty tree. Using its whiskerlike antennae, it probes its surroundings in the pitch-black darkness of soil.",
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
            generation: "03",
            height: "2'07\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 12.0,
            dexEntry: "Because it darts about vigorously at high speed, it is very difficult to see. Hearing its distinctive cries for too long induces a headache.",
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
            generation: "03",
            height: "2'07\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 1.2,
            dexEntry: "A peculiar Pokémon that floats in air even though its wings remain completely still. The inside of its body is hollow and utterly dark.",
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
            generation: "03",
            height: "2'00\"",
            weight: "35.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 16.3,
            dexEntry: "Its cries equal a jet plane in volume. It inhales through its ear canals. Because of this system, it can cry continually without having to catch its breath.",
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
            generation: "03",
            height: "3'03\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 40.5,
            dexEntry: "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.",
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
            generation: "03",
            height: "4'11\"",
            weight: "185.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 84.0,
            dexEntry: "It has sound-generating organs all over its body. It communicates with others by adjusting the tone and volume of the cries it emits.",
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
            generation: "03",
            height: "3'03\"",
            weight: "190.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 86.4,
            dexEntry: "It loves to toughen up its body above all else. If you hear quaking rumbles in a cave, it is the sound of Makuhita undertaking strenuous training.",
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
            generation: "03",
            height: "7'07\"",
            weight: "559.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.3,
            metricWeight: 253.8,
            dexEntry: "It has the habit of challenging others without hesitation to tests of strength. It's been known to stand on train tracks and stop trains using forearm thrusts.",
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
            generation: "01",
            height: "2'00\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.0,
            dexEntry: "In the springtime, schools of Goldeen can be seen swimming up falls and rivers. It metes out staggering damage with its single horn.",
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
            generation: "01",
            height: "4'03\"",
            weight: "86.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 39.0,
            dexEntry: "It punches holes in boulders on stream-beds. This is a clever innovation that prevents its eggs from being attacked or washed away by the current.",
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
            generation: "01",
            height: "2'11\"",
            weight: "22.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 10.0,
            dexEntry: "Its swimming muscles are weak, so it is easily washed away by currents. In places where water pools, you can see many Magikarp deposited there by the flow.",
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
            generation: "01",
            height: "21'04\"",
            weight: "518.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 6.5,
            metricWeight: 235.0,
            dexEntry: "It is an extremely vicious and violent Pokémon. When humans begin to fight, it will appear and burn everything to the ground with intensely hot flames.",
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
            generation: "03",
            height: "0'08\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.0,
            dexEntry: "Its tail, which is packed with nutrition, is very bouncy like a rubber ball. On sunny days they gather at the edge of water and splash about for fun.",
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
            generation: "02",
            height: "1'04\"",
            weight: "18.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.5,
            dexEntry: "Its body is covered with water-repellent fur. Because of the fur, it can swim through water at high speed without being slowed by the water's resistance.",
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
            generation: "02",
            height: "2'07\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 28.5,
            dexEntry: "It lives in water virtually all day long. Its body color and pattern act as camouflage that makes it tough for enemies to spot in water.",
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
            generation: "01",
            height: "1'04\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 20.0,
            dexEntry: "It climbs mountain paths using only the power of its arms. Because they look just like boulders lining paths, hikers may step on them without noticing.",
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
            generation: "01",
            height: "3'03\"",
            weight: "231.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 105.0,
            dexEntry: "They descend from mountains by tumbling down steep slopes. They are so brutal, they smash aside obstructing trees and massive boulders with thunderous tackles.",
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
            generation: "01",
            height: "4'07\"",
            weight: "661.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 300.0,
            dexEntry: "It is said to live in volcanic craters on mountain peaks. Once a year, it sheds its hide and grows larger. The shed hide crumbles and returns to the soil.",
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
            generation: "03",
            height: "3'03\"",
            weight: "213.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 97.0,
            dexEntry: "Its body emits a powerful magnetism. It feeds on prey that is pulled in by the force. Its magnetism is stronger in cold seasons.",
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
            generation: "03",
            height: "2'00\"",
            weight: "24.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.0,
            dexEntry: "A Skitty's adorably cute behavior makes it highly popular. In battle, it makes its tail puff out. It threatens foes with a sharp growl.",
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
            generation: "03",
            height: "3'07\"",
            weight: "71.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 32.6,
            dexEntry: "Rather than keeping a permanent lair, it habitually seeks comfortable spots and sleeps there. It is nocturnal and becomes active at dusk.",
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
            generation: "01",
            height: "2'07\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 7.5,
            dexEntry: "While living in pitch-black caverns, their eyes gradually grew shut and deprived them of vision. They use ultrasonic waves to detect obstacles.",
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
            generation: "01",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "Its fangs easily puncture even thick animal hide. It loves to feast on the blood of people and Pokémon. It flits about in darkness and strikes from behind.",
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
            generation: "02",
            height: "5'11\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 75.0,
            dexEntry: "Over the course of evolution, its hind legs turned into wings. By alternately resting its front and rear wings, it can fly all day without having to stop.",
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
            generation: "01",
            height: "2'11\"",
            weight: "100.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 45.5,
            dexEntry: "Its body is almost entirely composed of water. It ensnares its foe with its two long tentacles, then stabs with the poison stingers at their tips.",
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
            generation: "01",
            height: "5'03\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 55.0,
            dexEntry: "It lives in complex rock formations on the ocean floor and traps prey using its 80 tentacles. Its red orbs glow when it grows excited or agitated.",
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
            generation: "03",
            height: "1'08\"",
            weight: "24.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 11.0,
            dexEntry: "It digs branching holes in caves using its sharp claws in search of food—raw gems. A Sableye lurks in darkness and is seen only rarely.",
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
            generation: "03",
            height: "2'00\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.5,
            dexEntry: "Its giant jaws are actually steel horns that transformed. It fools foes into complacency with its adorable gestures, then chomps them with its huge jaws.",
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
            generation: "03",
            height: "1'04\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 60.0,
            dexEntry: "A Pokémon that is clad in steel armor. A new suit of armor is made when it evolves. The old, discarded armor is salvaged as metal for making iron products.",
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
            generation: "03",
            height: "2'11\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 120.0,
            dexEntry: "When two Lairon meet in the wild, they fight for territory by bashing into each other with their steel bodies. The sound of their collision carries for miles.",
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
            generation: "03",
            height: "6'11\"",
            weight: "793.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 360.0,
            dexEntry: "Its iron horns grow longer a little at a time. They are used to determine the Aggron's age. The gouges in its armor are worn with pride as mementos from battles.",
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
            generation: "01",
            height: "2'07\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.5,
            dexEntry: "It continually undertakes strenuous training to master all forms of martial arts. Its strength lets it easily hoist a sumo wrestler onto its shoulders.",
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
            generation: "01",
            height: "4'11\"",
            weight: "155.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 70.5,
            dexEntry: "A belt is worn by a Machoke to keep its overwhelming power under control. Because it is so dangerous, no one has ever removed the belt.",
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
            generation: "01",
            height: "5'03\"",
            weight: "286.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 130.0,
            dexEntry: "It is impossible to defend against punches and chops doled out by its four arms. Its fighting spirit flares up when it faces a tough opponent.",
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
            generation: "03",
            height: "2'00\"",
            weight: "24.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.2,
            dexEntry: "It is impossible to defend against punches and chops doled out by its four arms. Its fighting spirit flares up when it faces a tough opponent.",
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
            generation: "03",
            height: "4'03\"",
            weight: "69.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 31.5,
            dexEntry: "Through crushingly harsh yoga training, it gained the power to foretell its foe's actions. It battles with elegant, dance-like movement.",
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
            generation: "03",
            height: "2'00\"",
            weight: "33.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 15.2,
            dexEntry: "It generates electricity using friction from the atmosphere. In seasons with especially arid air, its entire body blazes with violent showers of sparks.",
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
            generation: "03",
            height: "4'11\"",
            weight: "88.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 40.2,
            dexEntry: "Because lightning falls in their vicinities, Manectric were thought to have been born from lightning. In battle, they create thunderclouds.",
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
            generation: "03",
            height: "1'04\"",
            weight: "9.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.2,
            dexEntry: "It has the trait of cheering on its fellow Pokémon. By shorting out the electricity it releases from its paws, it creates pom-poms for cheering.",
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
            generation: "03",
            height: "1'04\"",
            weight: "9.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 4.2,
            dexEntry: "At a meeting of Pokémon academics, it was announced that simultaneous exposure to electricity from a Plusle and Minun will promote circulation and boost vitality.",
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
            generation: "01",
            height: "1'00\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 6.0,
            dexEntry: "The units at its sides are extremely powerful magnets. They generate enough magnetism to draw in iron objects from over 300 feet away.",
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
            generation: "01",
            height: "3'03\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 60.0,
            dexEntry: "It is actually three Magnemite linked by magnetism. It generates powerful radio waves that raise temperatures by 3.6 degrees F within a 3,300-foot radius.",
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
            generation: "01",
            height: "1'08\"",
            weight: "22.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.4,
            dexEntry: "It bears an uncanny and unexplained resemblance to a Poké Ball. Because it explodes at the slightest shock, even veteran trainers treat it with caution.",
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
            generation: "01",
            height: "3'11\"",
            weight: "146.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 66.6,
            dexEntry: "They appear in great numbers at electric power plants. Because they feed on electricity, they cause massive and chaotic blackouts in nearby cities.",
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
            generation: "03",
            height: "2'04\"",
            weight: "39.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 17.7,
            dexEntry: "With their taillights lit, Volbeat fly in a swarm, drawing geometric designs in the night sky. They move their nests if their pond water becomes dirty.",
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
            generation: "03",
            height: "2'00\"",
            weight: "39.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 17.7,
            dexEntry: "A nocturnal Pokémon that becomes active upon nightfall. It leads a Volbeat swarm to draw patterns in the night sky. Over 200 different patterns have been confirmed.",
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
            generation: "01",
            height: "1'08\"",
            weight: "11.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.4,
            dexEntry: "This Pokémon grows by absorbing moonlight. During the daytime, it buries itself in the ground, leaving only its leaves exposed to avoid detection by its enemies.",
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
            generation: "01",
            height: "2'07\"",
            weight: "19.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 8.6,
            dexEntry: "A horribly noxious honey drools from its mouth. One whiff of the honey can result in memory loss. Some fans are said to enjoy this overwhelming stink, however.",
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
            generation: "01",
            height: "3'11\"",
            weight: "41.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 18.6,
            dexEntry: "In seasons when it produces more pollen, the air around a Vileplume turns yellow with the powder as it walks. The pollen is highly toxic and causes paralysis.",
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
            generation: "02",
            height: "1'04\"",
            weight: "12.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.8,
            dexEntry: "Its flower petals deepen in color through exposure to sunlight. When cloudy weather persists, it does a dance that is thought to be a ritual for summoning the sun.",
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
            generation: "01",
            height: "4'07\"",
            weight: "86.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 39.2,
            dexEntry: "Even while eating or sleeping, one of the heads remains always vigilant for any sign of danger. When threatened, it flees at over 60 miles per hour.",
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
            generation: "01",
            height: "5'11\"",
            weight: "187.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 85.2,
            dexEntry: "A peculiar Pokémon species with three heads. It vigorously races across grassy plains even in arid seasons with little rainfall.",
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
            generation: "03",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "A Roselia that drinks nutritionally rich springwater blooms with lovely flowers. The fragrance of its flowers has the effect of making its foes careless.",
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
            generation: "03",
            height: "1'04\"",
            weight: "22.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 10.3,
            dexEntry: "This Pokémon's stomach fluid can even digest scrap iron. In one gulp, it can swallow something that is as large as itself.",
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
            generation: "03",
            height: "5'07\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 80.0,
            dexEntry: "Its powerful stomach acid is capable of digesting almost anything. The one thing in the whole world a Swalot can't digest is its own stomach.",
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
            generation: "03",
            height: "2'07\"",
            weight: "45.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.8,
            dexEntry: "Carvanha attack ships in swarms, making them sink. Although it is said to be a very vicious Pokémon, it timidly flees as soon as it finds itself alone.",
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
            generation: "03",
            height: "5'11\"",
            weight: "195.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 88.8,
            dexEntry: "The vicious and sly gangster of the sea. Its skin is specially textured to minimize drag in water. Its speed tops out at over 75 mph per hour.",
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
            generation: "03",
            height: "6'07\"",
            weight: "286.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 130.0,
            dexEntry: "While this Pokémon usually lives in the sea, it can survive on land, although not too long. It loses vitality if its body becomes dried out.",
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
            generation: "03",
            height: "47'07\"",
            weight: "877.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 14.5,
            metricWeight: 398.0,
            dexEntry: "It breathes through nostrils that it raises above the sea. By inhaling to its maximum capacity, a Wailord can dive close to 10,000 feet beneath the waves.",
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
            generation: "03",
            height: "2'04\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 24.0,
            dexEntry: "A Numel stores boiling magma in the hump on its back. It is a hardy Pokémon that can transport a 220-pound load. It has served humans at work since long ago.",
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
            generation: "03",
            height: "6'03\"",
            weight: "485.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 220.0,
            dexEntry: "A Pokémon that lives in the crater of a volcano. Every 10 years, the volcanoes on its back erupt violently. Research is under way on the cause of eruption.",
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
            generation: "02",
            height: "2'04\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 35.0,
            dexEntry: "It is a species of Pokémon that lives in volcanic areas. If its body cools, its skin hardens and immobilizes it. To avoid that, it sleeps near magma.",
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
            generation: "02",
            height: "2'07\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 55.0,
            dexEntry: "The shell on its back is made of hardened magma. Tens of thousands of years spent living in volcanic craters have turned Magcargo's bodies into magma.",
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
            generation: "03",
            height: "1'08\"",
            weight: "177.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 80.4,
            dexEntry: "It battles using energy it gets from burning coal. When loosing smoke from its nostrils, it lets off a sound that is similar to a locomotive's horn.",
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
            generation: "01",
            height: "2'11\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 30.0,
            dexEntry: "Born from polluted sludge in the sea, Grimer's favorite food is anything filthy. They feed on wastewater pumped out from factories.",
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
            generation: "01",
            height: "3'11\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 30.0,
            dexEntry: "It prefers warm and humid habitats. In the summertime, the toxic substances in its body intensify, making Muk reek like putrid kitchen garbage.",
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
            generation: "01",
            height: "2'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 2.2,
            dexEntry: "Getting up close to a Koffing will give you a chance to observe, through its thin skin, the toxic gases swirling inside. It blows up at the slightest stimulation.",
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
            generation: "01",
            height: "3'11\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 9.5,
            dexEntry: "By diluting its toxic gases with a special process, the highest grade of perfume can be extracted. To Weezing, gases emanating from garbage are the ultimate feast.",
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
            generation: "03",
            height: "2'04\"",
            weight: "67.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 30.6,
            dexEntry: "A Pokémon that manipulates psychic power at will. It doesn't stop bouncing even when it is asleep. It loves eating mushrooms that grow underground.",
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
            generation: "03",
            height: "2'11\"",
            weight: "157.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 71.5,
            dexEntry: "It stores power in the black pearls on its forehead. When it uses psychic power, it performs an odd dance step. Its style of dancing became hugely popular overseas.",
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
            generation: "01",
            height: "2'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 12.0,
            dexEntry: "When it curls up in a ball, it can make any attack bounce off harmlessly. Its hide has turned tough and solid as a result of living in the desert.",
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
            generation: "01",
            height: "3'03\"",
            weight: "65.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 29.5,
            dexEntry: "It curls up in a ball to protect itself from enemy attacks. It also curls up to prevent heatstroke during the daytime when temperatures rise sharply.",
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
            generation: "03",
            height: "3'07\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 5.0,
            dexEntry: "It is distinguished by a pattern of spots that is always different. Its unsteady, tottering walk has the effect of fouling its foe's aim.",
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
            generation: "02",
            height: "5'07\"",
            weight: "111.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 50.5,
            dexEntry: "A Pokémon that has a body and wings of steel. People in the past used feathers fallen from Skarmory to make swords and knives.",
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
            generation: "03",
            height: "2'04\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 15.0,
            dexEntry: "Its big jaws crunch through boulders. Because its head is so big, it has a hard time getting back upright if it tips over onto its back.",
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
            generation: "03",
            height: "3'07\"",
            weight: "33.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 15.3,
            dexEntry: "It looses ultrasonic waves by rubbing its wings together. Since a Vibrava's wings are still in the process of growing, it can only fly short distances.",
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
            generation: "03",
            height: "6'07\"",
            weight: "180.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 82.0,
            dexEntry: "The flapping of its wings sounds like singing. To prevent detection by enemies, it hides itself by flapping up a cloud of desert sand.",
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
            generation: "03",
            height: "1'04\"",
            weight: "113.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 51.3,
            dexEntry: "Cacnea live in deserts with virtually no rainfall. It battles by swinging its thick, spiked arms. Once a year, a yellow flower blooms.",
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
            generation: "03",
            height: "4'03\"",
            weight: "170.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 77.4,
            dexEntry: "After spending thousands of years in harsh deserts, its blood transformed into the same substances as sand. It is nocturnal, so it hunts at night.",
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
            generation: "03",
            height: "1'04\"",
            weight: "2.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.2,
            dexEntry: "A Pokémon that has wings like cottony clouds. After enduring winter, in which little food is available, Swablu flocks move closer to towns in the spring.",
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
            generation: "03",
            height: "3'07\"",
            weight: "45.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 20.6,
            dexEntry: "It hums in a beautiful soprano voice. It flies among white clouds in the blue sky. It launches intensely hot fireballs from its mouth.",
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
            generation: "03",
            height: "4'03\"",
            weight: "88.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.3,
            dexEntry: "When it battles, it stands on its hind legs and attacks with its sharply clawed forelegs. Its fur bristles if it encounters any Seviper.",
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
            generation: "03",
            height: "8'10\"",
            weight: "115.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.7,
            metricWeight: 52.5,
            dexEntry: "Seviper and Zangoose are eternal rivals. It counters a Zangoose's dazzling agility with its swordlike tail, which also oozes a horrible poison.",
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
            generation: "03",
            height: "3'03\"",
            weight: "370.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 168.0,
            dexEntry: "It becomes very active on the night of a full moon. This Pokémon was first discovered 40 years ago at the site of a meteor strike.",
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
            generation: "03",
            height: "3'11\"",
            weight: "339.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 154.0,
            dexEntry: "Solar energy is the source of this Pokémon's power. On sunny days, groups of Solrock line up facing the sun and absorb its light.",
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
            generation: "03",
            height: "1'04\"",
            weight: "4.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 1.9,
            dexEntry: "Its body is covered with a slimy film. The film acts as a barrier to prevent germs in muddy water from entering the Barboach's body.",
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
            generation: "03",
            height: "2'11\"",
            weight: "52.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 23.6,
            dexEntry: "Mysteriously, it can foretell earthquakes. In the daytime, it sleeps in mud at the bottom of a pond. When it awakens, it continually feeds throughout the night.",
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
            generation: "03",
            height: "2'00\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.5,
            dexEntry: "Once it grips prey with its large pincers, it will never let go, no matter what. It is a hardy Pokémon that can thrive in any environment.",
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
            generation: "03",
            height: "3'07\"",
            weight: "72.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 32.8,
            dexEntry: "A brutish Pokémon that loves to battle. A veteran Crawdaunt that has prevailed in hundreds of battles has giant pincers marked with countless scars.",
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
            generation: "03",
            height: "1'08\"",
            weight: "47.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 21.5,
            dexEntry: "A Baltoy moves by spinning on its single foot. It has been depicted in murals adorning the walls of a once-bustling city in an ancient age.",
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
            generation: "03",
            height: "4'11\"",
            weight: "238.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 108.0,
            dexEntry: "A Claydol sleeps while hovering in midair. Its arms are separate from its body. They are kept floating by the Pokémon's manipulation of psychic power.",
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
            generation: "03",
            height: "3'03\"",
            weight: "52.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 23.8,
            dexEntry: "It disguises itself as seaweed by making its tentacles sway. Unsuspecting prey that come too close are swallowed whole. It became extinct 100 million years ago.",
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
            generation: "03",
            height: "4'11\"",
            weight: "133.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 60.4,
            dexEntry: "It drags its heavy body along the seafloor. It makes its nest in the shallows of warm seas. Cradily can be seen on beaches when the tide goes out.",
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
            generation: "03",
            height: "2'04\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 12.5,
            dexEntry: "It was resurrected from a fossil using the power of science. It swims by undulating the eight wings at its sides. They were feet that adapted to life in the sea.",
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
            generation: "03",
            height: "4'11\"",
            weight: "150.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 68.2,
            dexEntry: "Armaldo usually lives on land. However, when it hunts for prey, it dives beneath the ocean. It swims around using its two large wings.",
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
            generation: "02",
            height: "1'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.0,
            dexEntry: "Its soft and pliable body is very bouncy. When it sings continuously with all its might, its body steadily turns a deepening pink color.",
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
            generation: "01",
            height: "1'08\"",
            weight: "12.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.5,
            dexEntry: "Nothing can avoid falling asleep hearing a Jigglypuff's song. The sound waves of its singing voice match the brain waves of someone in a deep sleep.",
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
            generation: "01",
            height: "3'03\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 12.0,
            dexEntry: "Its fur is the ultimate in luxuriousness. Sleeping alongside a Wigglytuff is simply divine. Its body expands seemingly without end when it inhales.",
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
            generation: "03",
            height: "2'00\"",
            weight: "16.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.4,
            dexEntry: "Feebas live in ponds that are heavily infested with weeds. Because of its hopelessly shabby appearance, it seems as if few Trainers raise it.",
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
            generation: "03",
            height: "20'04\"",
            weight: "357.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 6.2,
            metricWeight: 162.0,
            dexEntry: "It is said to live at the bottom of large lakes. Considered to be the most beautiful of all Pokémon, it has been depicted in paintings and statues.",
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
            generation: "03",
            height: "1'00\"",
            weight: "1.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.8,
            dexEntry: "It alters its form depending on the weather. Changes in the climate such as the temperature and humidity appear to affect its cellular structure.",
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
            generation: "01",
            height: "2'07\"",
            weight: "76.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 34.5,
            dexEntry: "It gathers with others in the night and makes its red core glow on and off with the twinkling stars. It can regenerate limbs if they are severed from its body.",
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
            generation: "01",
            height: "3'07\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 80.0,
            dexEntry: "People in ancient times imagined that Starmie were transformed from the reflections of stars that twinkled on gentle waves at night.",
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
            generation: "03",
            height: "3'03\"",
            weight: "48.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 22.0,
            dexEntry: "A Pokémon that has the ability to alter its body colors to match its surroundings. A Kecleon reverts to its original colors if it is startled.",
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
            generation: "03",
            height: "2'00\"",
            weight: "5.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 2.3,
            dexEntry: "This Pokémon roams about deep in the night seeking such negative emotions as grudges and envy. It retreats to its nest when the sun begins to rise.",
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
            generation: "03",
            height: "3'07\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 12.5,
            dexEntry: "An abandoned plush doll became this Pokémon. They are said to live in garbage dumps and wander about in search of the children that threw them away.",
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
            generation: "03",
            height: "2'07\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 15.0,
            dexEntry: "A glare from its single scarlet eye makes even burly grown-ups freeze in utter fear. It is a nocturnal Pokémon that roams about under the cloak of darkness.",
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
            generation: "03",
            height: "5'03\"",
            weight: "67.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 30.6,
            dexEntry: "It is thought that its body is hollow with only a spectral ball of fire burning inside. However, no one has been able to confirm this theory as fact.",
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
            generation: "03",
            height: "6'07\"",
            weight: "220.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 100.0,
            dexEntry: "It flies by flapping its broad leaves. The bunch of fruit that grows around its neck is deliciously sweet. In the spring, it scatters pollen from its neck.",
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
            generation: "03",
            height: "2'00\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 1.0,
            dexEntry: "They fly about very actively when the hot season arrives. They communicate among themselves using seven different and distinguishing cries.",
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
            generation: "03",
            height: "3'11\"",
            weight: "103.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 47.0,
            dexEntry: "It sharply senses even subtle changes in the sky and the land to predict natural disasters. It is a long-lived Pokémon that has a life-span of 100 years.",
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
            generation: "01",
            height: "2'00\"",
            weight: "21.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 9.9,
            dexEntry: "It can freely control fire, making fiery orbs fly like will-o'-the-wisps. Just before evolution, its six tails grow hot as if on fire.",
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
            generation: "01",
            height: "3'07\"",
            weight: "43.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 19.9,
            dexEntry: "It has long been said that each of the nine tails embody an enchanted power. A long-lived Ninetales will have fur that shines like gold.",
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
            generation: "02",
            height: "1'00\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.0,
            dexEntry: "It is still inept at retaining electricity. When it is startled, it discharges power accidentally. It gets better at holding power as it grows older.",
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
            generation: "01",
            height: "1'04\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.0,
            dexEntry: "It stores electricity in the electric sacs on its cheeks. When it releases pent-up energy in a burst, the electric power is equal to a lightning bolt.",
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
            generation: "01",
            height: "2'07\"",
            weight: "66.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 30.0,
            dexEntry: "If it stores too much electricity, its behavior turns aggressive. To avoid this, it occasionally discharges excess energy and calms itself down.",
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
            generation: "01",
            height: "2'07\"",
            weight: "43.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 19.6,
            dexEntry: "When its headache intensifies, it starts using strange powers. However, it has no recollection of its powers, so it always looks befuddled and bewildered.",
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
            generation: "01",
            height: "5'07\"",
            weight: "168.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 76.6,
            dexEntry: "A Golduck is an adept swimmer. It sometimes joins competitive swimmers in training. It uses psychic powers when its forehead shimmers with light.",
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
            generation: "03",
            height: "2'00\"",
            weight: "30.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 14.0,
            dexEntry: "A Wynaut loves to eat sweet fruits. It cleverly picks fruits using its earlike arms. They gather in fruit gardens, drawn by the fragrance.",
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
            generation: "02",
            height: "4'03\"",
            weight: "62.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 28.5,
            dexEntry: "Usually docile, a Wobbuffet strikes back ferociously if its black tail is attacked. It makes its lair in caves where it waits for nightfall.",
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
            generation: "02",
            height: "0'08\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.0,
            dexEntry: "It runs up short trees that grow on the savanna to peck at new shoots. A Natu's eyes look as if they are always observing something.",
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
            generation: "02",
            height: "4'11\"",
            weight: "33.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 15.0,
            dexEntry: "It has the enigmatic power of foreseeing the future. Some people in different lands have long believed that Xatu are emissaries from another world.",
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
            generation: "02",
            height: "4'11\"",
            weight: "91.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 41.5,
            dexEntry: "A Girafarig is an herbivore—it eats grass and tree shoots. While it is eating, its tail makes chewing and swallowing motions as if it were also eating.",
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
            generation: "02",
            height: "1'08\"",
            weight: "73.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 33.5,
            dexEntry: "Phanpy's big ears serve as broad fans. When it becomes hot, it flaps the ears busily to cool down. Even the young are very strong.",
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
            generation: "02",
            height: "3'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 120.0,
            dexEntry: "A Donphan is so strong it can easily haul a dump truck. Its hide has toughened to a rock-hard state. An ordinary sort of attack won't even leave a scratch.",
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
            generation: "01",
            height: "4'11\"",
            weight: "121.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 55.0,
            dexEntry: "Their pincers are strong enough to shatter thick logs. Because they dislike cold, Pinsir burrow and sleep under the ground on chilly nights.",
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
            generation: "02",
            height: "4'11\"",
            weight: "119.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 54.0,
            dexEntry: "They gather in forests seeking the sweet sap of trees. It is completely clad in a steel-hard shell. It is proud of its horn, which it uses to fling foes.",
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
            generation: "01",
            height: "3'03\"",
            weight: "253.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 115.0,
            dexEntry: "Once it starts running, it doesn't stop. Its tiny brain makes it so stupid that it can't remember why it started running in the first place.",
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
            generation: "01",
            height: "6'03\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 120.0,
            dexEntry: "Its horn, which rotates like a drill, destroys tall buildings with one strike. It stands on its hind legs, and its brain is well developed.",
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
            generation: "03",
            height: "2'04\"",
            weight: "37.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.8,
            dexEntry: "They tend to move about in groups of around five Snorunt. In snowy regions, it is said that when they are seen late at night, snowfall will arrive by morning.",
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
            generation: "03",
            height: "4'11\"",
            weight: "565.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 256.5,
            dexEntry: "A Glalie has the power to instantaneously freeze moisture in the atmosphere. A dazzling cloud of diamondlike ice crystals forms around its body.",
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
            generation: "03",
            height: "2'07\"",
            weight: "87.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 39.5,
            dexEntry: "It is completely covered with plushy fur. As a result, it never feels the cold even when it is rolling about on ice floes or diving in the sea.",
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
            generation: "03",
            height: "3'07\"",
            weight: "193.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 87.6,
            dexEntry: "Sealeo live in herds on ice floes. Using its powerful flippers, it shatters ice. It dives into the sea to hunt prey five times a day.",
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
            generation: "03",
            height: "4'07\"",
            weight: "332.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 150.6,
            dexEntry: "To protect its herd, the leader battles anything that invades its territory, even at the cost of its life. Its tusks may snap off in battle.",
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
            generation: "03",
            height: "1'04\"",
            weight: "115.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 52.5,
            dexEntry: "A Clamperl slams its shell closed on prey to prevent escape. The pearl it creates upon evolution is said to be infused with a mysterious energy.",
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
            generation: "03",
            height: "5'07\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 27.0,
            dexEntry: "To withstand the crushing pressure of water deep under the sea, its spine is very thick and sturdy. Its tail, which is shaped like a small fish, has eyes that light up.",
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
            generation: "03",
            height: "5'11\"",
            weight: "49.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 22.6,
            dexEntry: "A Gorebyss siphons the body fluids of prey through its thin, tubular mouth. Its light pink body color turns vivid when it finishes feeding.",
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
            generation: "03",
            height: "3'03\"",
            weight: "51.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 23.4,
            dexEntry: "A Pokémon that was once believed to have been extinct. The species has not changed its form for 100 million years. It walks on the seafloor using its pectoral fins.",
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
            generation: "02",
            height: "2'00\"",
            weight: "11.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 5.0,
            dexEntry: "Corsola live in warm southern seas. If the sea becomes polluted, the beautiful coral stalks become discolored and crumble away in tatters.",
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
            generation: "02",
            height: "1'08\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 12.0,
            dexEntry: "When it senses danger, it discharges positive and negative electricity from its two antennae. It lives in depths beyond sunlight's reach.",
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
            generation: "02",
            height: "3'11\"",
            weight: "49.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 22.5,
            dexEntry: "The light-emitting orbs on its back are very bright. They are formed from a part of its dorsal fin. This Pokémon illuminates the inky darkness of deep seas.",
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
            generation: "03",
            height: "2'00\"",
            weight: "19.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 8.7,
            dexEntry: "Luvdisc make the branches of Corsola their nests. There is a custom from long ago of giving a Luvdisc as a gift to express one's feelings of love.",
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
            generation: "01",
            height: "1'04\"",
            weight: "17.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 8.0,
            dexEntry: "By cleverly flicking the fins on its back side to side, it moves in any direction while facing forward. It spits ink to escape if it senses danger.",
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
            generation: "01",
            height: "3'11\"",
            weight: "55.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 25.0,
            dexEntry: "The poisonous barbs all over its body are highly valued as ingredients for making traditional herbal medicine. It shows no mercy to anything approaching its nest.",
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
            generation: "02",
            height: "5'11\"",
            weight: "335.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 152.0,
            dexEntry: "It sleeps quietly, deep on the seafloor. When it comes up to the surface, it creates a huge whirlpool that can swallow even ships.",
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
            generation: "03",
            height: "2'00\"",
            weight: "92.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 42.1,
            dexEntry: "Although it is small, this Pokémon is very powerful because its body is a bundle of muscles. It launches head-butts with its ironlike skull.",
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
            generation: "03",
            height: "3'07\"",
            weight: "243.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 110.5,
            dexEntry: "It hardly eats while it awaits evolution. It becomes hardier by enduring hunger. Its shell peels off the instant it begins to evolve.",
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
            generation: "03",
            height: "4'11\"",
            weight: "226.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 102.6,
            dexEntry: "After many long years, its cellular structure underwent a sudden mutation to grow wings. When angered, it loses all thought and rampages out of control.",
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
            generation: "03",
            height: "2'00\"",
            weight: "209.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 95.2,
            dexEntry: "When Beldum gather in a swarm, they move in perfect unison as if they were but one Pokémon. They communicate with each other using brain waves.",
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
            generation: "03",
            height: "3'11\"",
            weight: "446.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 202.5,
            dexEntry: "The claws tipping its arms pack the destructive power to tear through thick iron sheets as if they were silk. It flies at over 60 miles per hour.",
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
            generation: "03",
            height: "5'03\"",
            weight: "1212.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 550.0,
            dexEntry: "Metagross has four brains that are joined by a complex neural network. As a result of integration, this Pokémon is smarter than a supercomputer.",
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
            generation: "03",
            height: "5'07\"",
            weight: "507.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 230.0,
            dexEntry: "A Pokémon that is made entirely of rocks and boulders. If parts of its body chip off in battle, Regirock repairs itself by adding new rocks.",
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
            generation: "03",
            height: "5'11\"",
            weight: "385.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 175.0,
            dexEntry: "Its entire body is made of Antarctic ice. After extensive studies, researchers believe the ice was formed during an ice age.",
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
            generation: "03",
            height: "6'03\"",
            weight: "451.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 205.0,
            dexEntry: "Its body is harder than any other kind of metal. The body metal is composed of a mysterious substance. Not only is it hard, it shrinks and stretches flexibly.",
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
            generation: "03",
            height: "4'07\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 40.0,
            dexEntry: "They make a small herd of only several members. They rarely make contact with people or other Pokémon. They disappear if they sense enemies.",
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
            generation: "03",
            height: "6'07\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 60.0,
            dexEntry: "Even in hiding, it can detect the locations of others and sense their emotions since it has telepathy. Its intelligence allows it to understand human languages.",
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
            generation: "03",
            height: "14'09\"",
            weight: "776.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.5,
            metricWeight: 352.0,
            dexEntry: "Kyogre has appeared in mythology as the creator of the sea. After long years of feuding with Groudon, it took to sleep at the bottom of the sea.",
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
            generation: "03",
            height: "11'06\"",
            weight: "2094.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.5,
            metricWeight: 950.0,
            dexEntry: "Groudon has appeared in mythology as the creator of the land. It sleeps in magma underground and is said to make volcanoes erupt on awakening.",
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
            generation: "03",
            height: "23'00\"",
            weight: "455.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 7.0,
            metricWeight: 206.5,
            dexEntry: "A Pokémon that flies endlessly in the ozone layer. It is said it would descend to the ground if Kyogre and Groudon were to fight.",
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
            generation: "03",
            height: "1'00\"",
            weight: "2.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.1,
            dexEntry: "Jirachi is said to make wishes come true. While it sleeps, a tough crystalline shell envelops the body to protect it from enemies.",
            cryUrl: "cries/385.mp3",
            japaneseName: "Jirachi"
        },
        {
            name: "Deoxys",
            imageUrl: "forms/386Deoxys-Speed.png",
            number: "202",
            type: ["Psychic"],
            category: "DNA",
            region: "Hoenn",
            generation: "03",
            height: "5'07\"",
            weight: "134.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 60.8,
            dexEntry: "A Pokémon that mutated from an extraterrestrial virus exposed to a laser beam. Its body is configured for superior agility and speed.",
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