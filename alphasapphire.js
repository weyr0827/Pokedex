//Alpha Sapphire Search Code


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
            dexEntry: "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.",
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
            dexEntry: "This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.",
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
            dexEntry: "Sceptile has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. This Pokémon raises the trees in a forest with loving care.",
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
            dexEntry: "Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.",
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
            dexEntry: "Combusken battles with the intensely hot flames it spews from its beak and with outstandingly destructive kicks. This Pokémon's cry is very loud and distracting.",
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
            dexEntry: "Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon's blazing punches leave its foes scorched and blackened.",
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
            dexEntry: "In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.",
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
            dexEntry: "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon's hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.",
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
            dexEntry: "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.",
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
            dexEntry: "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.",
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
            dexEntry: "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.",
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
            dexEntry: "The hair on Zigzagoon's back is bristly. It rubs the hard back hair against trees to leave its territorial markings. This Pokémon may play dead to fool foes in battle.",
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
            dexEntry: "When hunting, Linoone will make a beeline straight for the prey at a full run. While this Pokémon is capable of topping 60 mph, it has to come to a screeching halt before it can turn.",
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
            dexEntry: "Wurmple is targeted by Swellow as prey. This Pokémon will try to resist by pointing the spikes on its rear at the attacking predator. It will weaken the foe by leaking poison from the spikes.",
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
            dexEntry: "Silcoon was thought to endure hunger and not consume anything before its evolution. However, it is now thought that this Pokémon slakes its thirst by drinking rainwater that collects on its silk.",
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
            dexEntry: "Beautifly has a long mouth like a coiled needle, which is very convenient for collecting pollen from flowers. This Pokémon rides the spring winds as it flits around gathering pollen.",
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
            dexEntry: "If it is attacked, Cascoon remains motionless however badly it may be hurt. It does so because if it were to move, its body would be weak upon evolution. This Pokémon will also not forget the pain it endured.",
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
            dexEntry: "When Dustox flaps its wings, a fine dust is scattered all over. This dust is actually a powerful poison that will even make a pro wrestler sick. This Pokémon searches for food using its antennae like radar.",
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
            dexEntry: "Lotad is said to have dwelled on land before. However, this Pokémon is thought to have returned to water because the leaf on its head grew large and heavy. It now lives by floating atop the water.",
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
            dexEntry: "Lombre's entire body is covered by a slippery, slimy film. It feels horribly unpleasant to be touched by this Pokémon's hands. Lombre is often mistaken for a human child.",
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
            dexEntry: "Upon hearing an upbeat and cheerful rhythm, the cells in Ludicolo's body become very energetic and active. Even in battle, this Pokémon will exhibit an amazing amount of power.",
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
            dexEntry: "Seedot looks exactly like an acorn when it is dangling from a tree branch. It startles other Pokémon by suddenly moving. This Pokémon polishes its body once a day using leaves.",
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
            dexEntry: "This Pokémon pulls out the leaf on its head and makes a flute with it. The sound of Nuzleaf's flute strikes fear and uncertainty in the hearts of people lost in a forest.",
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
            dexEntry: "Shiftry's large fans generate awesome gusts of wind at a speed close to 100 feet per second. The whipped-up wind blows anything away. This Pokémon chooses to live quietly deep in forests.",
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
            dexEntry: "Taillow is young—it has only just left its nest. As a result, it sometimes becomes lonesome and cries at night. This Pokémon feeds on Wurmple that live in forests.",
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
            dexEntry: "Swellow is very conscientious about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently take care of cleaning each other's wings.",
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
            dexEntry: "Wingull rides updrafts rising from the sea by extending its long and narrow wings to glide. This Pokémon's long beak is useful for catching prey.",
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
            dexEntry: "Pelipper searches for food while in flight by skimming the wave tops. This Pokémon dips its large bill in the sea to scoop up food, then swallows everything in one big gulp.",
            cryUrl: "cries/279.mp3",
            japaneseName: "Pelipper"
        },
        {
            name: "Ralts",
            imageUrl: "images/280Ralts.png",
            number: "029",
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
            dexEntry: "Ralts has the ability to sense the emotions of people. If its Trainer is in a cheerful mood, this Pokémon grows cheerful and joyous in the same way.",
            cryUrl: "cries/280.mp3",
            japaneseName: "Ralts"
        },
        {
            name: "Kirlia",
            imageUrl: "images/281Kirlia.png",
            number: "030",
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
            dexEntry: "Kirlia uses the horns on its head to amplify its psychokinetic power. When the Pokémon uses its power, the air around it becomes distorted, creating mirages of nonexistent scenery.",
            cryUrl: "cries/281.mp3",
            japaneseName: "Kirlia"
        },
        {
            name: "Gardevoir",
            imageUrl: "images/282Gardevoir.png",
            number: "031",
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
            dexEntry: "Gardevoir has the psychokinetic power to distort the dimensions and create a small black hole. This Pokémon will try to protect its Trainer even at the risk of its own life.",
            cryUrl: "cries/282.mp3",
            japaneseName: "Sirnight"
        },
        {
            name: "Gallade",
            imageUrl: "images/475Gallade.png",
            number: "032",
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
            dexEntry: "A master of courtesy and swordsmanship, it fights using extending swords on its elbows.",
            cryUrl: "cries/475.mp3",
            japaneseName: "Erureido"
        },
        {
            name: "Surskit",
            imageUrl: "images/283Surskit.png",
            number: "033",
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
            dexEntry: "If Surskit senses danger, it secretes a thick, sugary syrup from the tip of its head. There are some Pokémon that love eating this syrup.",
            cryUrl: "cries/283.mp3",
            japaneseName: "Ametama"
        },
        {
            name: "Masquerain",
            imageUrl: "images/284Masquerain.png",
            number: "034",
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
            dexEntry: "Masquerain's antennas have eyelike patterns that usually give it an angry look. If the “eyes” are droopy and appear sad, it is said to be a sign that a heavy rainfall is on its way.",
            cryUrl: "cries/284.mp3",
            japaneseName: "Amemoth"
        },
        {
            name: "Shroomish",
            imageUrl: "images/285Shroomish.png",
            number: "035",
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
            dexEntry: "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon's spores are so toxic, they make trees and weeds wilt.",
            cryUrl: "cries/285.mp3",
            japaneseName: "Kinococo"
        },
        {
            name: "Breloom",
            imageUrl: "images/286Breloom.png",
            number: "036",
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
            dexEntry: "The seeds ringing Breloom's tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon's seed will cause your stomach to rumble.",
            cryUrl: "cries/286.mp3",
            japaneseName: "Kinogassa"
        },
        {
            name: "Slakoth",
            imageUrl: "images/287Slakoth.png",
            number: "037",
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
            dexEntry: "Slakoth's heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.",
            cryUrl: "cries/287.mp3",
            japaneseName: "Namakero"
        },
        {
            name: "Vigoroth",
            imageUrl: "images/288Vigoroth.png",
            number: "038",
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
            dexEntry: "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.",
            cryUrl: "cries/288.mp3",
            japaneseName: "Yarukimono"
        },
        {
            name: "Slaking",
            imageUrl: "images/289Slaking.png",
            number: "039",
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
            dexEntry: "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.",
            cryUrl: "cries/289.mp3",
            japaneseName: "Kekking"
        },
        {
            name: "Abra",
            imageUrl: "images/063Abra.png",
            number: "040",
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
            dexEntry: "Abra needs to sleep for eighteen hours a day. If it doesn't, this Pokémon loses its ability to use telekinetic powers. If it is attacked, Abra escapes using Teleport while it is still sleeping.",
            cryUrl: "cries/063.mp3",
            japaneseName: "Casey"
        },
        {
            name: "Kadabra",
            imageUrl: "images/064Kadabra.png",
            number: "041",
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
            dexEntry: "Kadabra holds a silver spoon in its hand. The spoon is used to amplify the alpha waves in its brain. Without the spoon, the Pokémon is said to be limited to half the usual amount of its telekinetic powers.",
            cryUrl: "cries/064.mp3",
            japaneseName: "Yungerer"
        },
        {
            name: "Alakazam",
            imageUrl: "images/065Alakazam.png",
            number: "042",
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
            dexEntry: "Alakazam's brain continually grows, infinitely multiplying brain cells. This amazing brain gives this Pokémon an astoundingly high IQ of 5,000. It has a thorough memory of everything that has occurred in the world.",
            cryUrl: "cries/065.mp3",
            japaneseName: "Foodin"
        },
        {
            name: "Nincada",
            imageUrl: "images/290Nincada.png",
            number: "043",
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
            dexEntry: "Nincada lives underground. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can't withstand bright sunlight so avoids it.",
            cryUrl: "cries/290.mp3",
            japaneseName: "Tutinin"
        },
        {
            name: "Ninjask",
            imageUrl: "images/291Ninjask.png",
            number: "044",
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
            dexEntry: "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer's abilities to the test.",
            cryUrl: "cries/291.mp3",
            japaneseName: "Tekkanin"
        },
        {
            name: "Shedinja",
            imageUrl: "images/292Shedinja.png",
            number: "045",
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
            dexEntry: "Shedinja is a peculiar Pokémon. It seems to appear unsought in a Poké Ball after a Nincada evolves. This bizarre Pokémon is entirely immobile—it doesn't even breathe.",
            cryUrl: "cries/292.mp3",
            japaneseName: "Nukenin"
        },
        {
            name: "Whismur",
            imageUrl: "images/293Whismur.png",
            number: "046",
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
            dexEntry: "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.",
            cryUrl: "cries/293.mp3",
            japaneseName: "Gonyonyo"
        },
        {
            name: "Loudred",
            imageUrl: "images/294Loudred.png",
            number: "047",
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
            number: "048",
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
            dexEntry: "Exploud communicates its feelings to the others by emitting whistle-like sounds from the tubes on its body. This Pokémon only raises its voice when it is in battle.",
            cryUrl: "cries/295.mp3",
            japaneseName: "Bakuong"
        },
        {
            name: "Makuhita",
            imageUrl: "images/296Makuhita.png",
            number: "049",
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
            dexEntry: "Makuhita has a tireless spirit—it will never give up hope. It eats a lot of food, gets plenty of sleep, and it trains very rigorously. By living that way, this Pokémon packs its body with energy.",
            cryUrl: "cries/296.mp3",
            japaneseName: "Makunoshita"
        },
        {
            name: "Hariyama",
            imageUrl: "images/297Hariyama.png",
            number: "050",
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
            dexEntry: "Hariyama's thick body may appear fat, but it is actually a hunk of solid muscle. If this Pokémon bears down and tightens all its muscles, its body becomes as hard as a rock.",
            cryUrl: "cries/297.mp3",
            japaneseName: "Hariteyama"
        },
        {
            name: "Goldeen",
            imageUrl: "images/118Goldeen.png",
            number: "051",
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
            dexEntry: "Goldeen loves swimming wild and free in rivers and ponds. If one of these Pokémon is placed in an aquarium, it will shatter even the thickest glass with one ram of its horn and make its escape.",
            cryUrl: "cries/118.mp3",
            japaneseName: "Tosakinto"
        },
        {
            name: "Seaking",
            imageUrl: "images/119Seaking.png",
            number: "052",
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
            dexEntry: "Seaking is very protective of its eggs. The male and female will take turns patrolling around their nest and eggs. The guarding of eggs by these Pokémon goes on for over a month.",
            cryUrl: "cries/119.mp3",
            japaneseName: "Azumao"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "053",
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
            dexEntry: "Magikarp is virtually useless in battle as it can only splash around. As a result, it is considered to be weak. However, it is actually a very hardy Pokémon that can survive in any body of water no matter how polluted it is.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "054",
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
            dexEntry: "Once Gyarados goes on a rampage, its ferociously violent blood doesn't calm until it has burned everything down. There are records of this Pokémon's rampages lasting a whole month.",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Azurill",
            imageUrl: "images/298Azurill.png",
            number: "055",
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
            dexEntry: "Azurill's tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow. Azurill can be seen bouncing and playing on its big, rubbery tail.",
            cryUrl: "cries/298.mp3",
            japaneseName: "Ruriri"
        },
        {
            name: "Marill",
            imageUrl: "images/183Marill.png",
            number: "056",
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
            dexEntry: "When fishing for food at the edge of a fast-running stream, Marill wraps its tail around the trunk of a tree. This Pokémon's tail is flexible and configured to stretch.",
            cryUrl: "cries/183.mp3",
            japaneseName: "Maril"
        },
        {
            name: "Azumarill",
            imageUrl: "images/184Azumarill.png",
            number: "057",
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
            dexEntry: "Azumarill can make balloons out of air. It makes these air balloons if it spots a drowning Pokémon. The air balloons enable the Pokémon in trouble to breathe.",
            cryUrl: "cries/184.mp3",
            japaneseName: "Marilli"
        },
        {
            name: "Geodude",
            imageUrl: "images/074Geodude.png",
            number: "058",
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
            dexEntry: "When Geodude sleeps deeply, it buries itself halfway into the ground. It will not awaken even if hikers step on it unwittingly. In the morning, this Pokémon rolls downhill in search of food.",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "images/075Graveler.png",
            number: "059",
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
            dexEntry: "Rocks are Graveler's favorite food. This Pokémon will climb a mountain from the base to the summit, crunchingly feasting on rocks all the while. Upon reaching the peak, it rolls back down to the bottom.",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "images/076Golem.png",
            number: "060",
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
            dexEntry: "Golem is known for rolling down from mountains. To prevent them from rolling into the homes of people downhill, grooves have been dug into the sides of mountains to serve as guideways for diverting this Pokémon's course.",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Nosepass",
            imageUrl: "images/299Nosepass.png",
            number: "061",
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
            dexEntry: "Nosepass had been said to be completely unmoving, with its magnetic nose pointed due north. However, close observation has revealed that the Pokémon actually moves by a little over 3/8 of an inch every year.",
            cryUrl: "cries/299.mp3",
            japaneseName: "Nosepass"
        },
        {
            name: "Probopass",
            imageUrl: "images/476Probopass.png",
            number: "062",
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
            name: "Skitty",
            imageUrl: "images/300Skitty.png",
            number: "063",
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
            dexEntry: "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.",
            cryUrl: "cries/300.mp3",
            japaneseName: "Eneco"
        },
        {
            name: "Delcatty",
            imageUrl: "images/301Delcatty.png",
            number: "064",
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
            dexEntry: "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.",
            cryUrl: "cries/301.mp3",
            japaneseName: "Enekororo"
        },
        {
            name: "Zubat",
            imageUrl: "images/041Zubat.png",
            number: "065",
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
            dexEntry: "Zubat avoids sunlight because exposure causes it to become unhealthy. During the daytime, it stays in caves or under the eaves of old houses, sleeping while hanging upside down.",
            cryUrl: "cries/041.mp3",
            japaneseName: "Zubat"
        },
        {
            name: "Golbat",
            imageUrl: "images/042Golbat.png",
            number: "066",
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
            dexEntry: "Golbat bites down on prey with its four fangs and drinks the victim's blood. It becomes active on inky dark moonless nights, flying around to attack people and Pokémon.",
            cryUrl: "cries/042.mp3",
            japaneseName: "Golbat"
        },
        {
            name: "Crobat",
            imageUrl: "images/169Crobat.png",
            number: "067",
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
            dexEntry: "Crobat sneaks up on its intended prey using wings that barely make a sound. This Pokémon rests by hanging on a tree branch with its rear legs that serve as wings.",
            cryUrl: "cries/169.mp3",
            japaneseName: "Crobat"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "068",
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
            dexEntry: "Tentacool absorbs sunlight and refracts it using water inside its body to convert it into beam energy. This Pokémon shoots beams from the small round organ above its eyes.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "069",
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
            dexEntry: "Tentacruel has tentacles that can be freely elongated and shortened at will. It ensnares prey with its tentacles and weakens the prey by dosing it with a harsh toxin. It can catch up to 80 prey at the same time.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Sableye",
            imageUrl: "images/302Sableye.png",
            number: "070",
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
            dexEntry: "Sableye digs the ground with sharpened claws to find rocks that it eats. Substances in the eaten rocks crystallize and rise up to the Pokémon's body surface.",
            cryUrl: "cries/302.mp3",
            japaneseName: "Yamirami"
        },
        {
            name: "Mawile",
            imageUrl: "images/303Mawile.png",
            number: "071",
            type: ["Steel", "Fairy"],
            category: "Deceiver",
            region: "Hoenn",
            generation: "03",
            height: "2'00\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 11.5,
            dexEntry: "Don't be taken in by this Pokémon's cute face—it's very dangerous. Mawile fools the foe into letting down its guard, then chomps down with its massive jaws. The steel jaws are really horns that have been transformed.",
            cryUrl: "cries/303.mp3",
            japaneseName: "Kucheat"
        },
        {
            name: "Aron",
            imageUrl: "images/304Aron.png",
            number: "072",
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
            dexEntry: "Aron has a body of steel. With one all-out charge, this Pokémon can demolish even a heavy dump truck. The destroyed dump truck then becomes a handy meal for the Pokémon.",
            cryUrl: "cries/304.mp3",
            japaneseName: "Cokodora"
        },
        {
            name: "Lairon",
            imageUrl: "images/305Lairon.png",
            number: "073",
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
            dexEntry: "Lairon feeds on iron contained in rocks and water. It makes its nest on mountains where iron ore is buried. As a result, the Pokémon often clashes with humans mining the iron ore.",
            cryUrl: "cries/305.mp3",
            japaneseName: "Kodora"
        },
        {
            name: "Aggron",
            imageUrl: "images/306Aggron.png",
            number: "074",
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
            dexEntry: "Aggron is protective of its environment. If its mountain is ravaged by a landslide or a fire, this Pokémon will haul topsoil to the area, plant trees, and beautifully restore its own territory.",
            cryUrl: "cries/306.mp3",
            japaneseName: "Bossgodora"
        },
        {
            name: "Machop",
            imageUrl: "images/066Machop.png",
            number: "075",
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
            dexEntry: "Machop exercises by hefting around a Graveler as if it were a barbell. There are some Machop that travel the world in a quest to master all kinds of martial arts.",
            cryUrl: "cries/066.mp3",
            japaneseName: "Wanriky"
        },
        {
            name: "Machoke",
            imageUrl: "images/067Machoke.png",
            number: "076",
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
            dexEntry: "Machoke undertakes bodybuilding every day even as it helps people with tough, physically demanding labor. On its days off, this Pokémon heads to the fields and mountains to exercise and train.",
            cryUrl: "cries/067.mp3",
            japaneseName: "Goriky"
        },
        {
            name: "Machamp",
            imageUrl: "images/068Machamp.png",
            number: "077",
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
            dexEntry: "Machamp is known as the Pokémon that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horizon.",
            cryUrl: "cries/068.mp3",
            japaneseName: "Kairiky"
        },
        {
            name: "Meditite",
            imageUrl: "images/307Meditite.png",
            number: "078",
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
            dexEntry: "Meditite heightens its inner energy through meditation. It survives on just one berry a day. Minimal eating is another aspect of this Pokémon's training.",
            cryUrl: "cries/307.mp3",
            japaneseName: "Asanan"
        },
        {
            name: "Medicham",
            imageUrl: "images/308Medicham.png",
            number: "079",
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
            dexEntry: "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.",
            cryUrl: "cries/308.mp3",
            japaneseName: "Charem"
        },
        {
            name: "Electrike",
            imageUrl: "images/309Electrike.png",
            number: "080",
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
            dexEntry: "Electrike runs faster than the human eye can follow. The friction from running is converted into electricity, which is then stored in this Pokémon's fur.",
            cryUrl: "cries/309.mp3",
            japaneseName: "Rakurai"
        },
        {
            name: "Manectric",
            imageUrl: "images/310Manectric.png",
            number: "081",
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
            dexEntry: "Manectric discharges strong electricity from its mane. The mane is used for collecting electricity in the atmosphere. This Pokémon creates thunderclouds above its head.",
            cryUrl: "cries/310.mp3",
            japaneseName: "Livolt"
        },
        {
            name: "Plusle",
            imageUrl: "images/311Plusle.png",
            number: "082",
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
            dexEntry: "When Plusle is cheering on its partner, it flashes with electric sparks from all over its body. If its partner loses, this Pokémon cries loudly.",
            cryUrl: "cries/311.mp3",
            japaneseName: "Prasle"
        },
        {
            name: "Minun",
            imageUrl: "images/312Minun.png",
            number: "083",
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
            dexEntry: "Minun loves to cheer on its partner in battle. It gives off sparks from its body while it is doing so. If its partner is in trouble, this Pokémon gives off increasing amounts of sparks.",
            cryUrl: "cries/312.mp3",
            japaneseName: "Minun"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "084",
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
            dexEntry: "Magnemite floats in the air by emitting electromagnetic waves from the units at its sides. These waves block gravity. This Pokémon becomes incapable of flight if its internal electrical supply is depleted.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "085",
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
            dexEntry: "Magneton emits a powerful magnetic force that is fatal to electronics and precision instruments. Because of this, it is said that some towns warn people to keep this Pokémon inside a Poké Ball.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Magnezone",
            imageUrl: "images/462Magnezone.png",
            number: "086",
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
            dexEntry: "It evolved from exposure to a special magnetic field. Three units generate magnetism.",
            cryUrl: "cries/462.mp3",
            japaneseName: "Jibacoil"
        },
        {
            name: "Voltorb",
            imageUrl: "images/100Voltorb.png",
            number: "087",
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
            dexEntry: "Voltorb is extremely sensitive - it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.",
            cryUrl: "cries/100.mp3",
            japaneseName: "Biriridama"
        },
        {
            name: "Electrode",
            imageUrl: "images/101Electrode.png",
            number: "088",
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
            dexEntry: "One of Electrode's characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.",
            cryUrl: "cries/101.mp3",
            japaneseName: "Marumine"
        },
        {
            name: "Volbeat",
            imageUrl: "images/313Volbeat.png",
            number: "089",
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
            dexEntry: "Volbeat's tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.",
            cryUrl: "cries/313.mp3",
            japaneseName: "Barubeat"
        },
        {
            name: "Illumise",
            imageUrl: "images/314Illumise.png",
            number: "090",
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
            dexEntry: "Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.",
            cryUrl: "cries/314.mp3",
            japaneseName: "Illumise"
        },
        {
            name: "Oddish",
            imageUrl: "images/043Oddish.png",
            number: "091",
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
            dexEntry: "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon's feet are thought to change shape and become similar to the roots of trees.",
            cryUrl: "cries/043.mp3",
            japaneseName: "Nazonokusa"
        },
        {
            name: "Gloom",
            imageUrl: "images/044Gloom.png",
            number: "092",
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
            dexEntry: "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.",
            cryUrl: "cries/044.mp3",
            japaneseName: "Kusaihana"
        },
        {
            name: "Vileplume",
            imageUrl: "images/045Vileplume.png",
            number: "093",
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
            dexEntry: "Vileplume has the world's largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.",
            cryUrl: "cries/045.mp3",
            japaneseName: "Ruffresia"
        },
        {
            name: "Bellossom",
            imageUrl: "images/182Bellossom.png",
            number: "094",
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
            dexEntry: "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom—the more stinky the better. At night, this Pokémon closes its petals and goes to sleep.",
            cryUrl: "cries/182.mp3",
            japaneseName: "Kireihana"
        },
        {
            name: "Doduo",
            imageUrl: "images/084Doduo.png",
            number: "095",
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
            dexEntry: "Doduo's two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.",
            cryUrl: "cries/084.mp3",
            japaneseName: "Dodo"
        },
        {
            name: "Dodrio",
            imageUrl: "images/085Dodrio.png",
            number: "096",
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
            dexEntry: "Apparently, the heads aren't the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.",
            cryUrl: "cries/085.mp3",
            japaneseName: "Dodorio"
        },
        {
            name: "Budew",
            imageUrl: "images/406Budew.png",
            number: "097",
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
            number: "098",
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
            dexEntry: "On extremely rare occasions, a Roselia is said to appear with its flowers in unusual colors. The thorns on this Pokémon's head contain a vicious poison.",
            cryUrl: "cries/315.mp3",
            japaneseName: "Roselia"
        },
        {
            name: "Roserade",
            imageUrl: "images/407Roserade.png",
            number: "099",
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
            dexEntry: "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.",
            cryUrl: "cries/407.mp3",
            japaneseName: "Roserade"
        },
        {
            name: "Gulpin",
            imageUrl: "images/316Gulpin.png",
            number: "100",
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
            dexEntry: "Most of Gulpin's body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon's stomach contains special enzymes that dissolve anything.",
            cryUrl: "cries/316.mp3",
            japaneseName: "Gokulin"
        },
        {
            name: "Swalot",
            imageUrl: "images/317Swalot.png",
            number: "101",
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
            dexEntry: "Swalot has no teeth, so what it eats, it swallows whole, no matter what. Its cavernous mouth yawns widely. An automobile tire could easily fit inside this Pokémon's mouth.",
            cryUrl: "cries/317.mp3",
            japaneseName: "Marunoom"
        },
        {
            name: "Carvanha",
            imageUrl: "images/318Carvanha.png",
            number: "102",
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
            dexEntry: "If anything invades Carvanha's territory, it will swarm and tear at the intruder with its pointed fangs. On its own, however, this Pokémon turns suddenly timid.",
            cryUrl: "cries/318.mp3",
            japaneseName: "Kibanha"
        },
        {
            name: "Sharpedo",
            imageUrl: "images/319Sharpedo.png",
            number: "103",
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
            dexEntry: "Sharpedo can swim at speeds of up to 75 mph by jetting seawater out of its backside. This Pokémon's drawback is its inability to swim long distances.",
            cryUrl: "cries/319.mp3",
            japaneseName: "Samehader"
        },
        {
            name: "Wailmer",
            imageUrl: "images/320Wailmer.png",
            number: "104",
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
            dexEntry: "Wailmer can store water inside its body to transform itself into a ball for bouncing around on the ground. By filling itself up with more water, this Pokémon can elevate the height of its bounces.",
            cryUrl: "cries/320.mp3",
            japaneseName: "Hoeruko"
        },
        {
            name: "Wailord",
            imageUrl: "images/321Wailord.png",
            number: "105",
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
            dexEntry: "When chasing prey, Wailord herds them by leaping out of the water and making a humongous splash. It is breathtaking to see this Pokémon leaping out of the sea with others in its pod.",
            cryUrl: "cries/321.mp3",
            japaneseName: "Whaloh"
        },
        {
            name: "Numel",
            imageUrl: "images/322Numel.png",
            number: "106",
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
            dexEntry: "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon's body grows heavy and its movements become sluggish.",
            cryUrl: "cries/322.mp3",
            japaneseName: "Donmel"
        },
        {
            name: "Camerupt",
            imageUrl: "images/323Camerupt.png",
            number: "107",
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
            dexEntry: "The humps on Camerupt's back are formed by a transformation of its bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.",
            cryUrl: "cries/323.mp3",
            japaneseName: "Bakuuda"
        },
        {
            name: "Slugma",
            imageUrl: "images/218Slugma.png",
            number: "108",
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
            dexEntry: "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pokémon's body, carrying essential nutrients and oxygen to its organs.",
            cryUrl: "cries/218.mp3",
            japaneseName: "Magmag"
        },
        {
            name: "Magcargo",
            imageUrl: "images/219Magcargo.png",
            number: "109",
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
            dexEntry: "Magcargo's body temperature is approximately 18,000 degrees Fahrenheit. Water is vaporized on contact. If this Pokémon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.",
            cryUrl: "cries/219.mp3",
            japaneseName: "Magcargot"
        },
        {
            name: "Torkoal",
            imageUrl: "images/324Torkoal.png",
            number: "110",
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
            dexEntry: "Torkoal generates energy by burning coal. It grows weaker as the fire dies down. When it is preparing for battle, this Pokémon burns more coal.",
            cryUrl: "cries/324.mp3",
            japaneseName: "Cotoise"
        },
        {
            name: "Grimer",
            imageUrl: "images/088Grimer.png",
            number: "111",
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
            dexEntry: "Grimer emerged from the sludge that settled on a polluted seabed. This Pokémon loves anything filthy. It constantly leaks a horribly germ- infested fluid from all over its body.",
            cryUrl: "cries/088.mp3",
            japaneseName: "Betbeter"
        },
        {
            name: "Muk",
            imageUrl: "images/089Muk.png",
            number: "112",
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
            dexEntry: "This Pokémon's favorite food is anything that is repugnantly filthy. In dirty towns where people think nothing of throwing away litter on the streets, Muk are certain to gather.",
            cryUrl: "cries/089.mp3",
            japaneseName: "Betbeton"
        },
        {
            name: "Koffing",
            imageUrl: "images/109Koffing.png",
            number: "113",
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
            dexEntry: "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful Poison Gas. The higher the temperature, the more gas is concocted by this Pokémon.",
            cryUrl: "cries/109.mp3",
            japaneseName: "Dogars"
        },
        {
            name: "Weezing",
            imageUrl: "images/110Weezing.png",
            number: "114",
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
            dexEntry: "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.",
            cryUrl: "cries/110.mp3",
            japaneseName: "Matadogas"
        },
        {
            name: "Spoink",
            imageUrl: "images/325Spoink.png",
            number: "115",
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
            dexEntry: "Spoink keeps a pearl on top of its head. The pearl functions to amplify this Pokémon's psychokinetic powers. It is therefore on a constant search for a bigger pearl.",
            cryUrl: "cries/325.mp3",
            japaneseName: "Baneboo"
        },
        {
            name: "Grumpig",
            imageUrl: "images/326Grumpig.png",
            number: "116",
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
            dexEntry: "Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon's black pearls are valuable as works of art.",
            cryUrl: "cries/326.mp3",
            japaneseName: "Boopig"
        },
        {
            name: "Sandshrew",
            imageUrl: "images/027Sandshrew.png",
            number: "117",
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
            dexEntry: "Sandshrew has a very dry hide that is extremely tough. The Pokémon can roll into a ball that repels any attack. At night, it burrows into the desert to sleep.",
            cryUrl: "cries/027.mp3",
            japaneseName: "Sand"
        },
        {
            name: "Sandslash",
            imageUrl: "images/028Sandslash.png",
            number: "118",
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
            dexEntry: "Sandslash can roll up its body as if it were a ball covered with large spikes. In battle, this Pokémon will try to make the foe flinch by jabbing it with its spines. It then leaps at the stunned foe to tear wildly with its sharp claws.",
            cryUrl: "cries/028.mp3",
            japaneseName: "Sandpan"
        },
        {
            name: "Spinda",
            imageUrl: "images/327Spinda.png",
            number: "119",
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
            dexEntry: "No two Spinda are said to have identical spot patterns on their hides. This Pokémon moves in a curious manner as if it is stumbling in dizziness. Its lurching movements can cause the opponent to become confused.",
            cryUrl: "cries/327.mp3",
            japaneseName: "Patcheel"
        },
        {
            name: "Skarmory",
            imageUrl: "images/227Skarmory.png",
            number: "120",
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
            dexEntry: "Skarmory's steel wings become tattered and bashed in from repeated battles. Once a year, the battered wings grow back completely, restoring the cutting edges to their pristine state.",
            cryUrl: "cries/227.mp3",
            japaneseName: "Airmd"
        },
        {
            name: "Trapinch",
            imageUrl: "images/328Trapinch.png",
            number: "121",
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
            dexEntry: "Trapinch is a patient hunter. It digs an inescapable pit in a desert and waits for its prey to come tumbling down. This Pokémon can go a whole week without access to any water.",
            cryUrl: "cries/328.mp3",
            japaneseName: "Nuckrar"
        },
        {
            name: "Vibrava",
            imageUrl: "images/329Vibrava.png",
            number: "122",
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
            dexEntry: "Vibrava's wings have not yet completed the process of growing. Rather than flying long distances, they are more useful for generating ultrasonic waves by vibrating.",
            cryUrl: "cries/329.mp3",
            japaneseName: "Vibrava"
        },
        {
            name: "Flygon",
            imageUrl: "images/330Flygon.png",
            number: "123",
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
            dexEntry: "Flygon whips up a sandstorm by flapping its wings. The wings create a series of notes that sound like singing. Because the “singing” is the only thing that can be heard in a sandstorm, this Pokémon is said to be the desert spirit.",
            cryUrl: "cries/330.mp3",
            japaneseName: "Flygon"
        },
        {
            name: "Cacnea",
            imageUrl: "images/331Cacnea.png",
            number: "124",
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
            dexEntry: "The more arid and harsh the environment, the more pretty and fragrant a flower Cacnea grows. This Pokémon battles by wildly swinging its thorny arms.",
            cryUrl: "cries/331.mp3",
            japaneseName: "Sabonea"
        },
        {
            name: "Cacturne",
            imageUrl: "images/332Cacturne.png",
            number: "125",
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
            dexEntry: "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.",
            cryUrl: "cries/332.mp3",
            japaneseName: "Noctus"
        },
        {
            name: "Swablu",
            imageUrl: "images/333Swablu.png",
            number: "126",
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
            dexEntry: "Swablu loves to make things clean. If it spots something dirty, it will wipe and polish it with its cottony wings. If its wings become dirty, this Pokémon finds a stream and showers itself.",
            cryUrl: "cries/333.mp3",
            japaneseName: "Tyltto"
        },
        {
            name: "Altaria",
            imageUrl: "images/334Altaria.png",
            number: "127",
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
            dexEntry: "Altaria sings in a gorgeous soprano. Its wings are like cotton clouds. This Pokémon catches updrafts with its buoyant wings and soars way up into the wild blue yonder.",
            cryUrl: "cries/334.mp3",
            japaneseName: "Tyltalis"
        },
        {
            name: "Zangoose",
            imageUrl: "images/335Zangoose.png",
            number: "128",
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
            dexEntry: "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.",
            cryUrl: "cries/335.mp3",
            japaneseName: "Zangoose"
        },
        {
            name: "Seviper",
            imageUrl: "images/336Seviper.png",
            number: "129",
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
            dexEntry: "Seviper's swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.",
            cryUrl: "cries/336.mp3",
            japaneseName: "Habunake"
        },
        {
            name: "Lunatone",
            imageUrl: "images/337Lunatone.png",
            number: "130",
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
            dexEntry: "Lunatone becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The Pokémon's intimidating red eyes cause all those who see it to become transfixed with fear.",
            cryUrl: "cries/337.mp3",
            japaneseName: "Lunatone"
        },
        {
            name: "Solrock",
            imageUrl: "images/338Solrock.png",
            number: "131",
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
            dexEntry: "Sunlight is the source of Solrock's power. It is said to possess the ability to read the emotions of others. This Pokémon gives off intense heat while rotating its body.",
            cryUrl: "cries/338.mp3",
            japaneseName: "Solrock"
        },
        {
            name: "Barboach",
            imageUrl: "images/339Barboach.png",
            number: "132",
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
            dexEntry: "Barboach's body is covered with a slimy film. If a foe grabs it, this Pokémon just slips out of the enemy's grip. This Pokémon grows weak if the slimy coating dries up.",
            cryUrl: "cries/339.mp3",
            japaneseName: "Dojoach"
        },
        {
            name: "Whiscash",
            imageUrl: "images/340Whiscash.png",
            number: "133",
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
            dexEntry: "If Whiscash goes on a wild rampage, it sets off a quake-like tremor with a radius of over three miles. This Pokémon has the ability to predict real earthquakes.",
            cryUrl: "cries/340.mp3",
            japaneseName: "Namazun"
        },
        {
            name: "Corphish",
            imageUrl: "images/341Corphish.png",
            number: "134",
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
            dexEntry: "Corphish catches prey with its sharp claws. It has no likes or dislikes when it comes to food—it will eat anything. This Pokémon has no trouble living in filthy water.",
            cryUrl: "cries/341.mp3",
            japaneseName: "Heigani"
        },
        {
            name: "Crawdaunt",
            imageUrl: "images/342Crawdaunt.png",
            number: "135",
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
            dexEntry: "Crawdaunt molts (sheds) its shell regularly. Immediately after molting, its shell is soft and tender. Until the shell hardens, this Pokémon hides in its streambed burrow to avoid attack from its foes.",
            cryUrl: "cries/342.mp3",
            japaneseName: "Shizariger"
        },
        {
            name: "Baltoy",
            imageUrl: "images/343Baltoy.png",
            number: "136",
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
            dexEntry: "As soon as it spots others of its kind, Baltoy congregates with them and then begins crying noisily in unison. This Pokémon sleeps while cleverly balancing itself on its one foot.",
            cryUrl: "cries/343.mp3",
            japaneseName: "Yajilon"
        },
        {
            name: "Claydol",
            imageUrl: "images/344Claydol.png",
            number: "137",
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
            dexEntry: "Claydol is an enigma that appeared from a clay statue made by an ancient civilization dating back 20,000 years. This Pokémon shoots beams from both its hands.",
            cryUrl: "cries/344.mp3",
            japaneseName: "Nendoll"
        },
        {
            name: "Lileep",
            imageUrl: "images/345Lileep.png",
            number: "138",
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
            dexEntry: "Lileep is an ancient Pokémon that was regenerated from a fossil. It remains permanently anchored to a rock. From its immobile perch, this Pokémon intently scans for prey with its two eyes.",
            cryUrl: "cries/345.mp3",
            japaneseName: "Lilyla"
        },
        {
            name: "Cradily",
            imageUrl: "images/346Cradily.png",
            number: "139",
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
            dexEntry: "Cradily's body serves as an anchor, preventing it from being washed away in rough seas. This Pokémon secretes a strong digestive fluid from its tentacles.",
            cryUrl: "cries/346.mp3",
            japaneseName: "Yuradle"
        },
        {
            name: "Anorith",
            imageUrl: "images/347Anorith.png",
            number: "140",
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
            dexEntry: "Anorith is said to be a type of Pokémon predecessor, with eight wings at the sides of its body. This Pokémon swam in the primordial sea by undulating these eight wings.",
            cryUrl: "cries/347.mp3",
            japaneseName: "Anopth"
        },
        {
            name: "Armaldo",
            imageUrl: "images/348Armaldo.png",
            number: "141",
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
            dexEntry: "Armaldo is a Pokémon species that became extinct in prehistoric times. This Pokémon is said to have walked on its hind legs, which would have been more convenient for life on land.",
            cryUrl: "cries/348.mp3",
            japaneseName: "Armaldo"
        },
        {
            name: "Igglybuff",
            imageUrl: "images/174Igglybuff.png",
            number: "142",
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
            dexEntry: "Igglybuff has a soft and plushy body that feels very much like a marshmallow. From this body wafts a gently sweet fragrance that soothes and calms the emotions of its foes.",
            cryUrl: "cries/174.mp3",
            japaneseName: "Pupurin"
        },
        {
            name: "Jigglypuff",
            imageUrl: "images/039Jigglypuff.png",
            number: "143",
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
            dexEntry: "When this Pokémon sings, it never pauses to breathe. If it is in a battle against an opponent that does not easily fall asleep, Jigglypuff cannot breathe, endangering its life.",
            cryUrl: "cries/039.mp3",
            japaneseName: "Purin"
        },
        {
            name: "Wigglytuff",
            imageUrl: "images/040Wigglytuff.png",
            number: "144",
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
            dexEntry: "Wigglytuff's body is very flexible. By inhaling deeply, this Pokémon can inflate itself seemingly without end. Once inflated, Wigglytuff bounces along lightly like a balloon.",
            cryUrl: "cries/040.mp3",
            japaneseName: "Pukurin"
        },
        {
            name: "Feebas",
            imageUrl: "images/349Feebas.png",
            number: "145",
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
            dexEntry: "While Feebas's body is in tatters, it has a hardy and tenacious life force that enables it to live anywhere. However, this Pokémon is also slow and dimwitted, making it an easy catch.",
            cryUrl: "cries/349.mp3",
            japaneseName: "Hinbass"
        },
        {
            name: "Milotic",
            imageUrl: "images/350Milotic.png",
            number: "146",
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
            dexEntry: "Milotic live at the bottom of large lakes. When this Pokémon's body glows a vivid pink, it releases a pulsing wave of energy that brings soothing calm to troubled hearts.",
            cryUrl: "cries/350.mp3",
            japaneseName: "Milokaross"
        },
        {
            name: "Castform",
            imageUrl: "images/351Castform.png",
            number: "147",
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
            dexEntry: "Castform borrows the power of nature to transform itself into the guises of the sun, rain, and snow-clouds. This Pokémon's feelings change with the weather.",
            cryUrl: "cries/351.mp3",
            japaneseName: "Powalen"
        },
        {
            name: "Staryu",
            imageUrl: "images/120Staryu.png",
            number: "148",
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
            dexEntry: "Staryu apparently communicates with the stars in the night sky by flashing the red core at the center of its body. If parts of its body are torn, this Pokémon simply regenerates the missing pieces and limbs.",
            cryUrl: "cries/120.mp3",
            japaneseName: "Hitodeman"
        },
        {
            name: "Starmie",
            imageUrl: "images/121Starmie.png",
            number: "149",
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
            dexEntry: "Starmie swims through water by spinning its star-shaped body as if it were a propeller on a ship. The core at the center of this Pokémon's body glows in seven colors.",
            cryUrl: "cries/121.mp3",
            japaneseName: "Starmie"
        },
        {
            name: "Kecleon",
            imageUrl: "images/352Kecleon.png",
            number: "150",
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
            dexEntry: "Kecleon alters its body coloration to blend in with its surroundings, allowing it to sneak up on its prey unnoticed. Then it lashes out with its long, stretchy tongue to instantly ensnare the unsuspecting target.",
            cryUrl: "cries/352.mp3",
            japaneseName: "Kakureon"
        },
        {
            name: "Shuppet",
            imageUrl: "images/353Shuppet.png",
            number: "151",
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
            dexEntry: "Shuppet grows by feeding on dark emotions, such as vengefulness and envy, in the hearts of people. It roams through cities in search of grudges that taint people.",
            cryUrl: "cries/353.mp3",
            japaneseName: "Kagebouzu"
        },
        {
            name: "Banette",
            imageUrl: "images/354Banette.png",
            number: "152",
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
            dexEntry: "A cursed energy permeated the stuffing of a discarded and forgotten plush doll, giving it new life as Banette. The Pokémon's energy would escape if it were to ever open its mouth.",
            cryUrl: "cries/354.mp3",
            japaneseName: "Juppeta"
        },
        {
            name: "Duskull",
            imageUrl: "images/355Duskull.png",
            number: "153",
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
            dexEntry: "Duskull wanders lost among the deep darkness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers.",
            cryUrl: "cries/355.mp3",
            japaneseName: "Yomawaru"
        },
        {
            name: "Dusclops",
            imageUrl: "images/356Dusclops.png",
            number: "154",
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
            dexEntry: "Dusclops absorbs anything, however large the object may be. This Pokémon hypnotizes its foe by waving its hands in a macabre manner and by bringing its single eye to bear. The hypnotized foe is made to do Dusclops's bidding.",
            cryUrl: "cries/356.mp3",
            japaneseName: "Samayouru"
        },
        {
            name: "Dusknoir",
            imageUrl: "images/477Dusknoir.png",
            number: "155",
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
            dexEntry: "The antenna on its head captures radio waves from the world of spirits that command it to take people there.",
            cryUrl: "cries/477.mp3",
            japaneseName: "Yonoir"
        },
        {
            name: "Tropius",
            imageUrl: "images/357Tropius.png",
            number: "156",
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
            dexEntry: "Children of the southern tropics eat as snacks the fruit that grows in bunches around the neck of Tropius. This Pokémon flies by flapping the leaves on its back as if they were wings.",
            cryUrl: "cries/357.mp3",
            japaneseName: "Tropius"
        },
        {
            name: "Chingling",
            imageUrl: "images/433Chingling.png",
            number: "157",
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
            number: "158",
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
            dexEntry: "In high winds, Chimecho cries as it hangs from a tree branch or the eaves of a building using a suction cup on its head. This Pokémon plucks berries with its long tail and eats them.",
            cryUrl: "cries/358.mp3",
            japaneseName: "Chirean"
        },
        {
            name: "Absol",
            imageUrl: "images/359Absol.png",
            number: "159",
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
            dexEntry: "Absol has the ability to foretell the coming of natural disasters. It lives in a harsh, rugged mountain environment. This Pokémon very rarely ventures down from the mountains.",
            cryUrl: "cries/359.mp3",
            japaneseName: "Absol"
        },
        {
            name: "Vulpix",
            imageUrl: "images/037Vulpix.png",
            number: "160",
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
            dexEntry: "Inside Vulpix's body burns a flame that never goes out. During the daytime, when the temperatures rise, this Pokémon releases flames from its mouth to prevent its body from growing too hot.",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "images/038Ninetales.png",
            number: "161",
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
            dexEntry: "Legend has it that Ninetales came into being when nine wizards possessing sacred powers merged into one. This Pokémon is highly intelligent—it can understand human speech.",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Pichu",
            imageUrl: "images/172Pichu.png",
            number: "162",
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
            dexEntry: "When Pichu plays with others, it may short out electricity with another Pichu, creating a shower of sparks. In that event, this Pokémon will begin crying, startled by the flash of sparks.",
            cryUrl: "cries/172.mp3",
            japaneseName: "Pichu"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "163",
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
            dexEntry: "This Pokémon has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while Pikachu sleeps. It occasionally discharges electricity when it is dozy after waking up.",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "164",
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
            dexEntry: "This Pokémon exudes a weak electrical charge from all over its body that makes it take on a slight glow in darkness. Raichu plants its tail in the ground to discharge electricity.",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "165",
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
            dexEntry: "If it uses its mysterious power, Psyduck can't remember having done so. It apparently can't form a memory of such an event because it goes into an altered state that is much like deep sleep.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "166",
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
            dexEntry: "Golduck is the fastest swimmer among all Pokémon. It swims effortlessly, even in a rough, stormy sea. It sometimes rescues people from wrecked ships floundering in high seas.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Wynaut",
            imageUrl: "images/360Wynaut.png",
            number: "167",
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
            dexEntry: "Wynaut gather on moonlit nights to play by squeezing up against each other. By being squeezed, this Pokémon gains endurance and is trained to dole out powerful counterattacks.",
            cryUrl: "cries/360.mp3",
            japaneseName: "Sohnano"
        },
        {
            name: "Wobbuffet",
            imageUrl: "images/202Wobbuffet.png",
            number: "168",
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
            dexEntry: "Wobbuffet does nothing but endure attacks—it won't attack on its own. However, it won't endure an attack on its tail. When that happens, the Pokémon will try to take the foe with it using Destiny Bond.",
            cryUrl: "cries/202.mp3",
            japaneseName: "Sonans"
        },
        {
            name: "Natu",
            imageUrl: "images/177Natu.png",
            number: "169",
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
            dexEntry: "Natu has a highly developed jumping ability. The Pokémon flaps and leaps onto tree branches that are taller than grown-up people to pick at the tree's new shoots.",
            cryUrl: "cries/177.mp3",
            japaneseName: "Naty"
        },
        {
            name: "Xatu",
            imageUrl: "images/178Xatu.png",
            number: "170",
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
            dexEntry: "Xatu is known to stand motionless while staring at the sun all day long. Some people revere it as a mystical Pokémon out of their belief that Xatu is in possession of the power to see into the future.",
            cryUrl: "cries/178.mp3",
            japaneseName: "Natio"
        },
        {
            name: "Girafarig",
            imageUrl: "images/203Girafarig.png",
            number: "171",
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
            dexEntry: "Girafarig's rear head contains a tiny brain that is too small for thinking. However, the rear head doesn't need to sleep, so it can keep watch over its surroundings 24 hours a day.",
            cryUrl: "cries/203.mp3",
            japaneseName: "Kirinriki"
        },
        {
            name: "Phanpy",
            imageUrl: "images/231Phanpy.png",
            number: "172",
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
            dexEntry: "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pokémon can be seen drying their soaking-wet bodies at the edge of water.",
            cryUrl: "cries/231.mp3",
            japaneseName: "Gomazou"
        },
        {
            name: "Donphan",
            imageUrl: "images/232Donphan.png",
            number: "173",
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
            dexEntry: "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear rock and mud slides that block mountain trails.",
            cryUrl: "cries/232.mp3",
            japaneseName: "Donfan"
        },
        {
            name: "Pinsir",
            imageUrl: "images/127Pinsir.png",
            number: "174",
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
            dexEntry: "Pinsir has a pair of massive horns. Protruding from the surface of these horns are thorns. These thorns are driven deeply into the foe's body when the pincer closes, making it tough for the foe to escape.",
            cryUrl: "cries/127.mp3",
            japaneseName: "Kailios"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "175",
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
            dexEntry: "Heracross has sharp claws on its feet. These are planted firmly into the ground or the bark of a tree, giving the Pokémon a secure and solid footing to forcefully fling away foes with its proud horn.",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "176",
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
            dexEntry: "Rhyhorn's brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "177",
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
            dexEntry: "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Rhyperior",
            imageUrl: "images/464Rhyperior.png",
            number: "178",
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
            dexEntry: "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
            cryUrl: "cries/464.mp3",
            japaneseName: "Dosidon"
        },
        {
            name: "Snorunt",
            imageUrl: "images/361Snorunt.png",
            number: "179",
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
            dexEntry: "Snorunt survives by eating only snow and ice. Old folklore claims that a house visited by this Pokémon is sure to prosper for many generations to come.",
            cryUrl: "cries/361.mp3",
            japaneseName: "Yukiwarashi"
        },
        {
            name: "Glalie",
            imageUrl: "images/362Glalie.png",
            number: "180",
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
            dexEntry: "Glalie has the ability to freely control ice. For example, it can instantly freeze its prey solid. After immobilizing its prey in ice, this Pokémon enjoys eating it in leisurely fashion.",
            cryUrl: "cries/362.mp3",
            japaneseName: "Onigohri"
        },
        {
            name: "Froslass",
            imageUrl: "images/478Froslass.png",
            number: "181",
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
            dexEntry: "Legends in snowy regions say that a woman who was lost on an icy mountain was reborn as Froslass.",
            cryUrl: "cries/478.mp3",
            japaneseName: "Yukimenoko"
        },
        {
            name: "Spheal",
            imageUrl: "images/363Spheal.png",
            number: "182",
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
            dexEntry: "Spheal always travels by rolling around on its ball-like body. When the season for ice floes arrives, this Pokémon can be seen rolling about on ice and crossing the sea.",
            cryUrl: "cries/363.mp3",
            japaneseName: "Tamazarashi"
        },
        {
            name: "Sealeo",
            imageUrl: "images/364Sealeo.png",
            number: "183",
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
            dexEntry: "Sealeo often balances and rolls things on the tip of its nose. While the Pokémon is rolling something, it checks the object's aroma and texture to determine whether it likes the object or not.",
            cryUrl: "cries/364.mp3",
            japaneseName: "Todoggler"
        },
        {
            name: "Walrein",
            imageUrl: "images/365Walrein.png",
            number: "184",
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
            dexEntry: "Walrein swims all over in frigid seawater while crushing icebergs with its grand, imposing tusks. Its thick layer of blubber makes enemy attacks bounce off harmlessly.",
            cryUrl: "cries/365.mp3",
            japaneseName: "Todoseruga"
        },
        {
            name: "Clamperl",
            imageUrl: "images/366Clamperl.png",
            number: "185",
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
            dexEntry: "Clamperl grows while being protected by its rock-hard shell. When its body becomes too large to fit inside the shell, it is sure evidence that this Pokémon is getting close to evolution.",
            cryUrl: "cries/366.mp3",
            japaneseName: "Pearlulu"
        },
        {
            name: "Huntail",
            imageUrl: "images/367Huntail.png",
            number: "186",
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
            dexEntry: "Huntail's tail is shaped like a fish. It uses the tail to attract prey, then swallows the prey whole with its large, gaping mouth. This Pokémon swims by wiggling its slender body like a snake.",
            cryUrl: "cries/367.mp3",
            japaneseName: "Huntail"
        },
        {
            name: "Gorebyss",
            imageUrl: "images/368Gorebyss.png",
            number: "187",
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
            dexEntry: "Although Gorebyss is the very picture of elegance and beauty while swimming, it is also cruel. When it spots prey, this Pokémon inserts its thin mouth into the prey's body and drains the prey of its body fluids.",
            cryUrl: "cries/368.mp3",
            japaneseName: "Sakurabyss"
        },
        {
            name: "Relicanth",
            imageUrl: "images/369Relicanth.png",
            number: "188",
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
            dexEntry: "Relicanth is a rare species that was discovered in deep-sea explorations. This Pokémon's body withstands the enormous water pressure of the ocean depths. Its body is covered in tough scales that are like craggy rocks.",
            cryUrl: "cries/369.mp3",
            japaneseName: "Glanth"
        },
        {
            name: "Corsola",
            imageUrl: "images/222Corsola.png",
            number: "189",
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
            dexEntry: "Clusters of Corsola congregate in warm seas where they serve as ideal hiding places for smaller Pokémon. When the water temperature falls, this Pokémon migrates to the southern seas.",
            cryUrl: "cries/222.mp3",
            japaneseName: "Sunnygo"
        },
        {
            name: "Chinchou",
            imageUrl: "images/170Chinchou.png",
            number: "190",
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
            dexEntry: "Chinchou's two antennas are filled with cells that generate strong electricity. This Pokémon's cells create so much electrical power, it even makes itself tingle slightly.",
            cryUrl: "cries/170.mp3",
            japaneseName: "Chonchie"
        },
        {
            name: "Lanturn",
            imageUrl: "images/171Lanturn.png",
            number: "191",
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
            dexEntry: "Lanturn is known to emit light. If you peer down into the dark sea from a ship at night, you can sometimes see this Pokémon's light rising from the depths where it swims. It gives the sea an appearance of a starlit night.",
            cryUrl: "cries/171.mp3",
            japaneseName: "Lantern"
        },
        {
            name: "Luvdisc",
            imageUrl: "images/370Luvdisc.png",
            number: "192",
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
            dexEntry: "Luvdisc's heart-shaped body is a symbol of love and romance. It is said that any couple meeting this Pokémon is promised a loving relationship that never ends.",
            cryUrl: "cries/370.mp3",
            japaneseName: "Lovecus"
        },
        {
            name: "Horsea",
            imageUrl: "images/116Horsea.png",
            number: "193",
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
            dexEntry: "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.",
            cryUrl: "cries/116.mp3",
            japaneseName: "Tattu"
        },
        {
            name: "Seadra",
            imageUrl: "images/117Seadra.png",
            number: "194",
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
            dexEntry: "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole.",
            cryUrl: "cries/117.mp3",
            japaneseName: "Seadra"
        },
        {
            name: "Kingdra",
            imageUrl: "images/230Kingdra.png",
            number: "195",
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
            dexEntry: "Kingdra sleeps on the seafloor where it is otherwise devoid of life. When a storm arrives, the Pokémon is said to awaken and wander about in search of prey.",
            cryUrl: "cries/230.mp3",
            japaneseName: "Kingdra"
        },
        {
            name: "Bagon",
            imageUrl: "images/371Bagon.png",
            number: "196",
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
            dexEntry: "Bagon harbors a never-ending dream of one day soaring high among the clouds. As if trying to dispel its frustration over its inability to fly, this Pokémon slams its hard head against huge rocks and shatters them into pebbles.",
            cryUrl: "cries/371.mp3",
            japaneseName: "Tatsubay"
        },
        {
            name: "Shelgon",
            imageUrl: "images/372Shelgon.png",
            number: "197",
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
            dexEntry: "Covering Shelgon's body are outgrowths much like bones. The shell is very hard and bounces off enemy attacks. When awaiting evolution, this Pokémon hides away in a cavern.",
            cryUrl: "cries/372.mp3",
            japaneseName: "Komoruu"
        },
        {
            name: "Salamence",
            imageUrl: "images/373Salamence.png",
            number: "198",
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
            dexEntry: "By evolving into Salamence, this Pokémon finally realizes its long-held dream of growing wings. To express its joy, it flies and wheels all over the sky while spouting flames from its mouth.",
            cryUrl: "cries/373.mp3",
            japaneseName: "Bohmander"
        },
        {
            name: "Beldum",
            imageUrl: "images/374Beldum.png",
            number: "199",
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
            dexEntry: "Beldum keeps itself floating by generating a magnetic force that repels earth's natural magnetism. When it sleeps, this Pokémon anchors itself to a cliff using the hooks on its rear.",
            cryUrl: "cries/374.mp3",
            japaneseName: "Dumbber"
        },
        {
            name: "Metang",
            imageUrl: "images/375Metang.png",
            number: "200",
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
            dexEntry: "When two Beldum fuse together, Metang is formed. The brains of the Beldum are joined by a magnetic nervous system. This Pokémon turns its arms to the rear for traveling at high speed.",
            cryUrl: "cries/375.mp3",
            japaneseName: "Metang"
        },
        {
            name: "Metagross",
            imageUrl: "images/376Metagross.png",
            number: "201",
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
            dexEntry: "Metagross is the result of two Metang achieving fusion. When hunting, this Pokémon pins the prey to the ground under its massive body. It then eats the helpless victim using the large mouth on its stomach.",
            cryUrl: "cries/376.mp3",
            japaneseName: "Metagross"
        },
        {
            name: "Regirock",
            imageUrl: "images/377Regirock.png",
            number: "202",
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
            dexEntry: "Regirock's body is composed entirely of rocks. Recently, a study made the startling discovery that the rocks were all unearthed from different locations.",
            cryUrl: "cries/377.mp3",
            japaneseName: "Regirock"
        },
        {
            name: "Regice",
            imageUrl: "images/378Regice.png",
            number: "203",
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
            dexEntry: "Regice cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.",
            cryUrl: "cries/378.mp3",
            japaneseName: "Regice"
        },
        {
            name: "Registeel",
            imageUrl: "images/379Registeel.png",
            number: "204",
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
            dexEntry: "Registeel was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.",
            cryUrl: "cries/379.mp3",
            japaneseName: "Registeel"
        },
        {
            name: "Latias",
            imageUrl: "images/380Latias.png",
            number: "205",
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
            dexEntry: "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.",
            cryUrl: "cries/380.mp3",
            japaneseName: "Latias"
        },
        {
            name: "Latios",
            imageUrl: "images/381Latios.png",
            number: "206",
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
            dexEntry: "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.",
            cryUrl: "cries/381.mp3",
            japaneseName: "Latios"
        },
        {
            name: "Kyogre",
            imageUrl: "images/382Kyogre.png",
            number: "207",
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
            dexEntry: "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.",
            cryUrl: "cries/382.mp3",
            japaneseName: "Kyogre"
        },
        {
            name: "Groudon",
            imageUrl: "images/383Groudon.png",
            number: "208",
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
            dexEntry: "Through Primal Reversion and with nature's full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.",
            cryUrl: "cries/383.mp3",
            japaneseName: "Groudon"
        },
        {
            name: "Rayquaza",
            imageUrl: "images/384Rayquaza.png",
            number: "209",
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
            dexEntry: "It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.",
            cryUrl: "cries/384.mp3",
            japaneseName: "Rayquaza"
        },
        {
            name: "Jirachi",
            imageUrl: "images/385Jirachi.png",
            number: "210",
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
            dexEntry: "Jirachi will awaken from its sleep of a thousand years if you sing to it in a voice of purity. It is said to make true any wish that people desire.",
            cryUrl: "cries/385.mp3",
            japaneseName: "Jirachi"
        },
        {
            name: "Deoxys",
            imageUrl: "images/386Deoxys.png",
            number: "211",
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
            dexEntry: "Deoxys emerged from a virus that came from space. It is highly intelligent and wields psychokinetic powers. This Pokémon shoots lasers from the crystalline organ on its chest.",
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