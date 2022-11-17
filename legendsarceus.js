//Legends: Arceus Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Rowlet",
            imageUrl: "images/722Rowlet.png",
            number: "001",
            type: ["Grass", "Flying"],
            category: "Grass Quill",
            region: "Alola",
            generation: "7",
            height: "1'00\"",
            weight: "3.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 1.5,
            dexEntry: "Flies noiselessly on delicate wings. It has mastered the art of deftly launching dagger-sharp feathers from those same wings.",
            cryUrl: "cries/722.mp3",
            japaneseName: "Mokuroh"
        },
        {
            name: "Dartrix",
            imageUrl: "images/723Dartrix.png",
            number: "002",
            type: ["Grass", "Flying"],
            category: "Blade Quill",
            region: "Alola",
            generation: "7",
            height: "2'04\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.0,
            dexEntry: "Regularly basks in sunlight to gather power—presumably due to the frigid climate. Nonetheless, the edges of the blade quills set into its wings are keen as ever.",
            cryUrl: "cries/723.mp3",
            japaneseName: "Fukuthrow"
        },
        {
            name: "Decidueye",
            imageUrl: "forms/724Decidueye-Hisui.png",
            number: "003",
            type: ["Grass", "Fighting"],
            category: "Arrow Quill",
            region: "Alola",
            generation: "7",
            height: "5'03\"",
            weight: "81.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 37.0,
            dexEntry: "The air stored inside the rachises of Decidueye's feathers insulates the Pokémon against Hisui's extreme cold. This is firm proof that evolution can be influenced by environment.",
            cryUrl: "cries/724.mp3",
            japaneseName: "Junaiper"
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
            dexEntry: "Hails from the Johto region. Though usually curled into a ball due to its timid disposition, it harbors tremendous firepower.",
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
            dexEntry: "This creature's fur is most mysterious—it is wholly impervious to the burning touch of flame. Should Quilava turn its back to you, take heed! Such a posture indicates a forthcoming attack.",
            cryUrl: "cries/156.mp3",
            japaneseName: "Magmarashi"
        },
        {
            name: "Typhlosion",
            imageUrl: "forms/157Typhlosion-Hisui.png",
            number: "006",
            type: ["Fire", "Ghost"],
            category: "Ghost Flame",
            region: "Johto",
            generation: "2",
            height: "5'03\"",
            weight: "153.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 69.8,
            dexEntry: "Said to purify lost, forsaken souls with its flames and guide them to the afterlife. I believe its form has been influenced by the energy of the sacred mountain towering at Hisui's center.",
            cryUrl: "cries/157.mp3",
            japaneseName: "Bakphoon"
        },
        {
            name: "Oshawott",
            imageUrl: "images/501Oshawott.png",
            number: "007",
            type: ["Water"],
            category: "Sea Otter",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "13.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 5.9,
            dexEntry: "This Pokémon from the Unova region uses the shell on its belly as a weapon to cut down its foes. Thus, I've conferred upon this shell the name \"scalchop.\"",
            cryUrl: "cries/501.mp3",
            japaneseName: "Mijumaru"
        },
        {
            name: "Dewott",
            imageUrl: "images/502Dewott.png",
            number: "008",
            type: ["Water"],
            category: "Discipline",
            region: "Unova",
            generation: "5",
            height: "2'07\"",
            weight: "54.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.5,
            dexEntry: "Its exquisite double-scalchop technique is likely the result of daily training, and it can send even masters of the blade fleeing in defeat.",
            cryUrl: "cries/502.mp3",
            japaneseName: "Futachimaru"
        },
        {
            name: "Samurott",
            imageUrl: "forms/503Samurott-Hisui.png",
            number: "009",
            type: ["Water", "Dark"],
            category: "Formidable",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "128.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 58.2,
            dexEntry: "Hard of heart and deft of blade, this rare form of Samurott is a product of the Pokémon's evolution in the region of Hisui. Its turbulent blows crash into foes like ceaseless pounding waves.",
            cryUrl: "cries/503.mp3",
            japaneseName: "Daikenki"
        },
        {
            name: "Bidoof",
            imageUrl: "images/399Bidoof.png",
            number: "010",
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
            dexEntry: "Bidoof has an unsophisticated face and is rarely flustered by anything. There have been incidents involving Bidoof sauntering into villages and gnawing on the houses without a single care.",
            cryUrl: "cries/399.mp3",
            japaneseName: "Bippa"
        },
        {
            name: "Bibarel",
            imageUrl: "images/400Bibarel.png",
            number: "011",
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
            dexEntry: "Bibarel fur repels water and is also a fantastic material for heat retention. These Pokémon create dams on rivers to live in.",
            cryUrl: "cries/400.mp3",
            japaneseName: "Beadaru"
        },
        {
            name: "Starly",
            imageUrl: "images/396Starly.png",
            number: "012",
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
            dexEntry: "They live in the fields and mountains, gathering in large flocks. Their cries are quite obnoxious. Though small, their wings are strong—a strike from them leaves pain that persists for a week.",
            cryUrl: "cries/396.mp3",
            japaneseName: "Mukkuru"
        },
        {
            name: "Staravia",
            imageUrl: "images/397Staravia.png",
            number: "013",
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
            dexEntry: "They form remarkably large flocks and are constantly fighting amongst themselves. I suspect that those with magnificent plumes on their heads are the strong ones.",
            cryUrl: "cries/397.mp3",
            japaneseName: "Mukubird"
        },
        {
            name: "Staraptor",
            imageUrl: "images/398Staraptor.png",
            number: "014",
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
            dexEntry: "It has left the flock, having gained strength enough to survive on its own. The astounding force with which Staraptor flies through the air allows it to carry away large, burly targets.",
            cryUrl: "cries/398.mp3",
            japaneseName: "Mukuhawk"
        },
        {
            name: "Shinx",
            imageUrl: "images/403Shinx.png",
            number: "015",
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
            dexEntry: "Shakes its body to generate electricity. Its stature belies its aggression—one must be patient to tame this Pokémon.",
            cryUrl: "cries/403.mp3",
            japaneseName: "Kolink"
        },
        {
            name: "Luxio",
            imageUrl: "images/404Luxio.png",
            number: "016",
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
            dexEntry: "Proudly uses its electrified claws as weapons. It seems to be a gracious Pokémon, evenly sharing the spoils of the hunt with others of its kind.",
            cryUrl: "cries/404.mp3",
            japaneseName: "Luxio"
        },
        {
            name: "Luxray",
            imageUrl: "images/405Luxray.png",
            number: "017",
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
            dexEntry: "They form packs, each having one male as leader. Legends say that when Luxray's two eyes shimmer with gold, the Pokémon can see through anything.",
            cryUrl: "cries/405.mp3",
            japaneseName: "Rentorar"
        },
        {
            name: "Wurmple",
            imageUrl: "images/265Wurmple.png",
            number: "018",
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
            dexEntry: "Likes sap and is abundant in the wild. Why it evolves into various different forms is unknown. One cannot tell from a Wurmple's appearance which form it will take when it evolves.",
            cryUrl: "cries/265.mp3",
            japaneseName: "Kemusso"
        },
        {
            name: "Silcoon",
            imageUrl: "images/266Silcoon.png",
            number: "019",
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
            dexEntry: "Wraps itself in thin strings of silk while it stores energy for evolution. It can't extend its limbs and its movement is slow, but its eyes keep a sharp lookout—Silcoon is always on guard.",
            cryUrl: "cries/266.mp3",
            japaneseName: "Karasalis"
        },
        {
            name: "Beautifly",
            imageUrl: "images/267Beautifly.png",
            number: "020",
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
            dexEntry: "A colorful and incredibly beautiful but also greedy Pokémon. In an effort to keep its favorite food all to itself, it will chase away Combee as they try to gather nectar.",
            cryUrl: "cries/267.mp3",
            japaneseName: "Agehunt"
        },
        {
            name: "Cascoon",
            imageUrl: "images/268Cascoon.png",
            number: "021",
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
            dexEntry: "The silk coating its body is thin but sufficiently strong. Cascoon's silk has a luster and texture superior to that of Silcoon's, and clothes made using Cascoon silk are regarded as top-notch.",
            cryUrl: "cries/268.mp3",
            japaneseName: "Mayuld"
        },
        {
            name: "Dustox",
            imageUrl: "images/269Dustox.png",
            number: "022",
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
            dexEntry: "Tends to be drawn to bonfires on dark nights. Difficult to chase away from settlements because of the way it scatters highly toxic scales.",
            cryUrl: "cries/269.mp3",
            japaneseName: "Dokucale"
        },
        {
            name: "Ponyta",
            imageUrl: "images/077Ponyta.png",
            number: "023",
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
            dexEntry: "These Pokémon live in herds out in the grassland. Newborn foals lack their fiery manes, which will develop about an hour after birth.",
            cryUrl: "cries/077.mp3",
            japaneseName: "Ponyta"
        },
        {
            name: "Rapidash",
            imageUrl: "images/078Rapidash.png",
            number: "024",
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
            dexEntry: "Fiery mane aglow, Rapidash darts like an arrow across the land. This prodigiously swift creature can traverse the vast region of Hisui in a day and a half.",
            cryUrl: "cries/078.mp3",
            japaneseName: "Gallop"
        },
        {
            name: "Eevee",
            imageUrl: "images/133Eevee.png",
            number: "025",
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
            dexEntry: "Harbors the potential to evolve into manifold forms. Within Eevee lies the key to the mysteries of Pokémon evolution—I'm certain of it.",
            cryUrl: "cries/133.mp3",
            japaneseName: "Eievui"
        },
        {
            name: "Vaporeon",
            imageUrl: "images/134Vaporeon.png",
            number: "026",
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
            dexEntry: "Tests show that its cells closely resemble water molecules, which perhaps explains its ability to conceal its form while submerged. I believe the origins of mermaid folklore lie with this Pokémon.",
            cryUrl: "cries/134.mp3",
            japaneseName: "Showers"
        },
        {
            name: "Jolteon",
            imageUrl: "images/135Jolteon.png",
            number: "027",
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
            dexEntry: "Bristles its fur into sharp, needlelike points when enraged. One can hear electricity crackle in its breath when it exhales.",
            cryUrl: "cries/135.mp3",
            japaneseName: "Thunders"
        },
        {
            name: "Flareon",
            imageUrl: "images/136Flareon.png",
            number: "028",
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
            dexEntry: "Flames burn within a saclike organ inside this Pokémon. When Flareon inhales, these flames grow in intensity, reaching a mighty 3,000 degrees Fahrenheit.",
            cryUrl: "cries/136.mp3",
            japaneseName: "Booster"
        },
        {
            name: "Espeon",
            imageUrl: "images/196Espeon.png",
            number: "029",
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
            dexEntry: "Wields an arcane power with which it can predict the weather and even people's thoughts. When bathed in sunshine, the scarlet orb on its brow glows and builds energy.",
            cryUrl: "cries/196.mp3",
            japaneseName: "Eifie"
        },
        {
            name: "Umbreon",
            imageUrl: "images/197Umbreon.png",
            number: "030",
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
            dexEntry: "It is most active in the wee hours of the night, when moonlight bathes the land. Its large eyes can pierce the darkness and perceive prey with absolute clarity.",
            cryUrl: "cries/197.mp3",
            japaneseName: "Blacky"
        },
        {
            name: "Leafeon",
            imageUrl: "images/470Leafeon.png",
            number: "031",
            type: ["Grass"],
            category: "Verdant",
            region: "Sinnoh",
            generation: "4",
            height: "3'03\"",
            weight: "56.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 25.5,
            dexEntry: "Cells similar to those of plants have been found in its fur. Its hard tail can fell a large tree with one stroke, and the tail's sharpness exceeds even that of a sword crafted by a master.",
            cryUrl: "cries/470.mp3",
            japaneseName: "Leafia"
        },
        {
            name: "Glaceon",
            imageUrl: "images/471Glaceon.png",
            number: "032",
            type: ["Ice"],
            category: "Fresh Snow",
            region: "Sinnoh",
            generation: "4",
            height: "2'07\"",
            weight: "57.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 25.9,
            dexEntry: "Glaceon is able to lower its body temperature very quickly. It freezes the atmosphere, creating diamond dust that glitters like gems while it flutters and dances around.",
            cryUrl: "cries/471.mp3",
            japaneseName: "Glacia"
        },
        {
            name: "Sylveon",
            imageUrl: "images/700Sylveon.png",
            number: "033",
            type: ["Fairy"],
            category: "Intertwining",
            region: "Kalos",
            generation: "6",
            height: "3'03\"",
            weight: "51.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 23.5,
            dexEntry: "It emits a soothing aura from its ribbon-shaped organs. It wraps these appendages around quarrelers to instantly restore calm to the situation.",
            cryUrl: "cries/700.mp3",
            japaneseName: "Nymphia"
        },
        {
            name: "Zubat",
            imageUrl: "images/041Zubat.png",
            number: "034",
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
            dexEntry: "Makes its home in gloomy caves. Atrophied eyes have left this Pokémon blind, so it scans its surroundings via sound waves that it emits from its mouth as it flies.",
            cryUrl: "cries/041.mp3",
            japaneseName: "Zubat"
        },
        {
            name: "Golbat",
            imageUrl: "images/042Golbat.png",
            number: "035",
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
            dexEntry: "It sinks its sharp fangs into other creatures and slurps up their blood. A closer look at the fangs reveals that they are hollow and akin to straws.",
            cryUrl: "cries/042.mp3",
            japaneseName: "Golbat"
        },
        {
            name: "Crobat",
            imageUrl: "images/169Crobat.png",
            number: "036",
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
            dexEntry: "Its hind limbs have become another set of wings. Crobat expertly maneuvers its four wings to dart in exquisite fashion through even the most confined caves without losing any speed.",
            cryUrl: "cries/169.mp3",
            japaneseName: "Crobat"
        },
        {
            name: "Drifloon",
            imageUrl: "images/425Drifloon.png",
            number: "037",
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
            dexEntry: "Said to lure away young children and carry them off to the afterlife. Some whisper that Drifloon are formed of reincarnated human souls, but these rumors are as yet unconfirmed.",
            cryUrl: "cries/425.mp3",
            japaneseName: "Fuwante"
        },
        {
            name: "Drifblim",
            imageUrl: "images/426Drifblim.png",
            number: "038",
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
            dexEntry: "It drifts along at dusk, perfectly silent. Its transient, melancholy aspect touches some people deeply—every so often, one will come upon a song or poem devoted to Drifblim.",
            cryUrl: "cries/426.mp3",
            japaneseName: "Fuwaride"
        },
        {
            name: "Kricketot",
            imageUrl: "images/401Kricketot.png",
            number: "039",
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
            dexEntry: "When the trees take on new hues, more of these Pokémon appear. The tone they create by striking their antennae together resembles that of the marimba, an instrument of foreign lands.",
            cryUrl: "cries/401.mp3",
            japaneseName: "Korobohshi"
        },
        {
            name: "Kricketune",
            imageUrl: "images/402Kricketune.png",
            number: "040",
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
            dexEntry: "It uses its cutlass-like arms to produce sound, the melody of which varies from individual to individual. It is a worthwhile endeavor to seek out one's favorite tunes.",
            cryUrl: "cries/402.mp3",
            japaneseName: "Korotock"
        },
        {
            name: "Buizel",
            imageUrl: "images/418Buizel.png",
            number: "041",
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
            dexEntry: "It moves freely in the water by spinning its forked tail for propulsion. The resemblance to the screw of a steamboat is coincidental.",
            cryUrl: "cries/418.mp3",
            japaneseName: "Buoysel"
        },
        {
            name: "Floatzel",
            imageUrl: "images/419Floatzel.png",
            number: "042",
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
            dexEntry: "Has a long, rather splendid flotation sac, which prevents Floatzel from drowning even in stormy seas. One might glimpse this species around fishing hamlets from time to time.",
            cryUrl: "cries/419.mp3",
            japaneseName: "Floazel"
        },
        {
            name: "Burmy",
            imageUrl: "images/412Burmy.png",
            number: "043",
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
            dexEntry: "If its cloak is even slightly damaged, Burmy will immediately repair it with whatever is close at hand. The Pokémon within the cloak is scrawny and vulnerable to the cold.",
            cryUrl: "cries/412.mp3",
            japaneseName: "Minomucchi"
        },
        {
            name: "Wormadam",
            imageUrl: "images/413Wormadam.png",
            number: "044",
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
            dexEntry: "The cloak—fashioned from plant matter—has merged with the Pokémon and is now part of the body, like fur or skin. I suspect this fusion is an effect of the energy involved in evolution.",
            cryUrl: "cries/413.mp3",
            japaneseName: "Minomadam"
        },
        {
            name: "Mothim",
            imageUrl: "images/414Mothim.png",
            number: "045",
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
            dexEntry: "Scatters steel-colored scales as it flaps its wings. Despite being observed feeding primarily on the nectar of flowers, Mothim is not often seen around flower gardens.",
            cryUrl: "cries/414.mp3",
            japaneseName: "Gamale"
        },
        {
            name: "Geodude",
            imageUrl: "images/074Geodude.png",
            number: "046",
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
            dexEntry: "Makes its home in mountainous regions, using its arms to climb along harsh mountain roads. Can be troublesome—carelessly kicking one will cause it to fly into a rage and chase after you.",
            cryUrl: "cries/074.mp3",
            japaneseName: "Isitsubute"
        },
        {
            name: "Graveler",
            imageUrl: "images/075Graveler.png",
            number: "047",
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
            dexEntry: "Dwells in holes dug into sheer walls of stone. It enjoys rolling down slopes as though it were a boulder during a rockfall, so keep an eye upward while traversing mountain roads.",
            cryUrl: "cries/075.mp3",
            japaneseName: "Golone"
        },
        {
            name: "Golem",
            imageUrl: "images/076Golem.png",
            number: "048",
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
            dexEntry: "The rocklike shell is shed each year. The cast-off shell then crumbles, reverting to a mass of soil, which can be spread across fields to promote crop growth.",
            cryUrl: "cries/076.mp3",
            japaneseName: "Golonya"
        },
        {
            name: "Stantler",
            imageUrl: "images/234Stantler.png",
            number: "049",
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
            dexEntry: "Its strangely shaped antlers have the power to bewitch those who see them. Medicine made by grinding up the black orbs from fallen antlers is an effective treatment for insomnia.",
            cryUrl: "cries/234.mp3",
            japaneseName: "Odoshishi"
        },
        {
            name: "Wyrdeer",
            imageUrl: "images/899Wyrdeer.png",
            number: "050",
            type: ["Normal", "Psychic"],
            category: "Big Horn",
            region: "Hisui",
            generation: "8",
            height: "5'11\"",
            weight: "209.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 95.1,
            dexEntry: "The black orbs shine with an uncanny light when the Pokémon is erecting invisible barriers. The fur shed from its beard retains heat well and is a highly useful material for winter clothing.",
            cryUrl: "cries/899.mp3",
            japaneseName: "Ayashishi"
        },
        {
            name: "Munchlax",
            imageUrl: "images/446Munchlax.png",
            number: "051",
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
            dexEntry: "Its robust stomach allows it to nonchalantly devour even rotted matter. It pays frequent visits to villages, seeking out food scraps intended for compost.",
            cryUrl: "cries/446.mp3",
            japaneseName: "Gonbe"
        },
        {
            name: "Snorlax",
            imageUrl: "images/143Snorlax.png",
            number: "052",
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
            dexEntry: "This glutton appears in villages without warning and devours the entirety of their rice granaries—such occurrences have long been counted among the gravest of disasters.",
            cryUrl: "cries/143.mp3",
            japaneseName: "Kabigon"
        },
        {
            name: "Paras",
            imageUrl: "images/046Paras.png",
            number: "053",
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
            dexEntry: "Sometimes seen at the foot of trees in humid forests. The mushrooms on its back—called tochukaso—are not present on infant specimens and instead emerge as Paras matures.",
            cryUrl: "cries/046.mp3",
            japaneseName: "Paras"
        },
        {
            name: "Parasect",
            imageUrl: "images/047Parasect.png",
            number: "054",
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
            dexEntry: "Mushroom-lacking specimens of this Pokémon lie unmoving in the forest, lending credence to the hypothesis that the large mushroom is in control of Parasect's actions.",
            cryUrl: "cries/047.mp3",
            japaneseName: "Parasect"
        },
        {
            name: "Pichu",
            imageUrl: "images/172Pichu.png",
            number: "055",
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
            dexEntry: "Pichu stores electricity in the sacs on its cheeks but discharges it inadvertently when agitated or excited. Being yet immature, the Pokémon's handling of electricity is rather inept.",
            cryUrl: "cries/172.mp3",
            japaneseName: "Pichu"
        },
        {
            name: "Pikachu",
            imageUrl: "images/025Pikachu.png",
            number: "056",
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
            dexEntry: "Possesses cheek sacs in which it stores electricity. This clever forest-dweller roasts tough berries with an electric shock before consuming them.",
            cryUrl: "cries/025.mp3",
            japaneseName: "Pikachu"
        },
        {
            name: "Raichu",
            imageUrl: "images/026Raichu.png",
            number: "057",
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
            dexEntry: "It can discharge bursts of electricity exceeding 100,000 volts—a single strike with that amount of power would incapacitate one of the Copperajah of my homeland.",
            cryUrl: "cries/026.mp3",
            japaneseName: "Raichu"
        },
        {
            name: "Abra",
            imageUrl: "images/063Abra.png",
            number: "058",
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
            dexEntry: "Spends 18 hours of the day sleeping. Even while asleep, Abra can control its psychic powers—should danger approach, the Pokémon will simply teleport away.",
            cryUrl: "cries/063.mp3",
            japaneseName: "Casey"
        },
        {
            name: "Kadabra",
            imageUrl: "images/064Kadabra.png",
            number: "059",
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
            dexEntry: "There are rumors that a child with mystical powers became a Kadabra; however, this remains unverified. I suspect that the spoon Kadabra holds enhances its brain waves.",
            cryUrl: "cries/064.mp3",
            japaneseName: "Yungerer"
        },
        {
            name: "Alakazam",
            imageUrl: "images/065Alakazam.png",
            number: "060",
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
            dexEntry: "The longer Alakazam lives, the larger and heavier its head becomes. Our tests have shown that the strength of its psychic powers correlates positively to the weight of its head.",
            cryUrl: "cries/065.mp3",
            japaneseName: "Foodin"
        },
        {
            name: "Chimchar",
            imageUrl: "images/390Chimchar.png",
            number: "061",
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
            dexEntry: "Full of vigor and always in high spirits. It was once known by the name \"Lantern-Tail\" and feared as some kind of apparition.",
            cryUrl: "cries/390.mp3",
            japaneseName: "Hikozaru"
        },
        {
            name: "Monferno",
            imageUrl: "images/391Monferno.png",
            number: "062",
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
            dexEntry: "The deeper the blue on its face, the more powerful it will grow to become. It leaps about every which way and lands powerful blows against its opponents with the flame on its tail.",
            cryUrl: "cries/391.mp3",
            japaneseName: "Moukazaru"
        },
        {
            name: "Infernape",
            imageUrl: "images/392Infernape.png",
            number: "063",
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
            dexEntry: "A tall, hardy Pokémon with a dazzling appearance. It shrouds itself in flame and battles as if engaged in dance—truly a sight to behold.",
            cryUrl: "cries/392.mp3",
            japaneseName: "Goukazaru"
        },
        {
            name: "Buneary",
            imageUrl: "images/427Buneary.png",
            number: "064",
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
            dexEntry: "My hypothesis as to why Buneary rolls up its ears is that its hearing is far too keen. I surmise that the Pokémon protects its hearing by limiting the sound that may enter its ears.",
            cryUrl: "cries/427.mp3",
            japaneseName: "Mimirol"
        },
        {
            name: "Lopunny",
            imageUrl: "images/428Lopunny.png",
            number: "065",
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
            dexEntry: "Its fur is warm and yet remarkably light. This Pokémon kicks as though it were a master of karate, driving back its opponents with ease.",
            cryUrl: "cries/428.mp3",
            japaneseName: "Mimilop"
        },
        {
            name: "Cherubi",
            imageUrl: "images/420Cherubi.png",
            number: "066",
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
            dexEntry: "Once the fruit growing alongside the main body is large and plump, Cherubi will use the nutrients within to evolve. The fruit then detaches, becoming nourishment for other creatures.",
            cryUrl: "cries/420.mp3",
            japaneseName: "Cherinbo"
        },
        {
            name: "Cherrim",
            imageUrl: "images/421Cherrim.png",
            number: "067",
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
            dexEntry: "Motionless, save for the occasional quiver. A rich array of Pokémon can be found gathered around it, drawn by the scent exuded from Cherrim's folded petals.",
            cryUrl: "cries/421.mp3",
            japaneseName: "Cherrim"
        },
        {
            name: "Psyduck",
            imageUrl: "images/054Psyduck.png",
            number: "068",
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
            dexEntry: "Suffers perpetual headaches. If the agony grows too great, Psyduck's latent power erupts, contrary to Psyduck's intent. Ergo, I am exploring ways to ease the pain.",
            cryUrl: "cries/054.mp3",
            japaneseName: "Koduck"
        },
        {
            name: "Golduck",
            imageUrl: "images/055Golduck.png",
            number: "069",
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
            dexEntry: "Its body is strong, and it has webbing on its hands and feet. Golduck can swim easily through rough seas, clawing its way through the high waves.",
            cryUrl: "cries/055.mp3",
            japaneseName: "Golduck"
        },
        {
            name: "Combee",
            imageUrl: "images/415Combee.png",
            number: "070",
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
            dexEntry: "They swear fealty to a queen Pokémon and work diligently to gather nectar. Each swarm produces a different flavor of honey.",
            cryUrl: "cries/415.mp3",
            japaneseName: "Mitsuhoney"
        },
        {
            name: "Vespiquen",
            imageUrl: "images/416Vespiquen.png",
            number: "071",
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
            dexEntry: "Commands its subjects to build its hive. It will dispatch any interlopers who dare sneak into its nest and use them as nourishment for itself.",
            cryUrl: "cries/416.mp3",
            japaneseName: "Beequen"
        },
        {
            name: "Scyther",
            imageUrl: "images/123Scyther.png",
            number: "072",
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
            dexEntry: "The large, wickedly sharp scythes on its forearms are truly fearsome weapons. Prey’s attempts to flee are unfailingly thwarted by this Pokémon's nimble motions.",
            cryUrl: "cries/123.mp3",
            japaneseName: "Strike"
        },
        {
            name: "Kleavor",
            imageUrl: "images/900Kleavor.png",
            number: "073",
            type: ["Bug", "Rock"],
            category: "Axe",
            region: "Hisui",
            generation: "8",
            height: "5'11\"",
            weight: "129.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 89.0,
            dexEntry: "A violent creature that fells towering trees with its crude axes and shields itself with hard stone. If one should chance upon this Pokémon in the wilds, one's only recourse is to flee.",
            cryUrl: "cries/900.mp3",
            japaneseName: "Basagiri"
        },
        {
            name: "Scizor",
            imageUrl: "images/212Scizor.png",
            number: "074",
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
            dexEntry: "Evolved by way of a curious item. The shell covering its body has been shown to be stronger than forged steel.",
            cryUrl: "cries/212.mp3",
            japaneseName: "Hassam"
        },
        {
            name: "Heracross",
            imageUrl: "images/214Heracross.png",
            number: "075",
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
            dexEntry: "This Pokémon has an unparalleled horn. Heracross itself demonstrates tremendous power—it's capable of throwing several people trained in the traditional arts of war at once.",
            cryUrl: "cries/214.mp3",
            japaneseName: "Heracros"
        },
        {
            name: "Mime Jr.",
            imageUrl: "images/439Mime_Jr.png",
            number: "076",
            type: ["Psychic", "Fairy"],
            category: "Mime",
            region: "Sinnoh",
            generation: "4",
            height: "2'00\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 13.0,
            dexEntry: "Known to turn up in bustling marketplaces now and again. It mimics people much as a child would, then watches how they react, eyes sparkling.",
            cryUrl: "cries/439.mp3",
            japaneseName: "Manene"
        },
        {
            name: "Mr. Mime",
            imageUrl: "images/122Mr._Mime.png",
            number: "077",
            type: ["Psychic", "Fairy"],
            category: "Barrier",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "120.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 54.5,
            dexEntry: "The behavior of this clown-like Pokémon reminds one of pantomime. It creates invisible walls using a force emitted from its fingertips.",
            cryUrl: "cries/122.mp3",
            japaneseName: "Barrierd"
        },
        {
            name: "Aipom",
            imageUrl: "images/190Aipom.png",
            number: "078",
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
            dexEntry: "This treetop dweller possesses a tail as dexterous as a hand. Ancient writings describe this Pokémon as a one-armed oddity.",
            cryUrl: "cries/190.mp3",
            japaneseName: "Eipom"
        },
        {
            name: "Ambipom",
            imageUrl: "images/424Ambipom.png",
            number: "079",
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
            dexEntry: "To affirm their kinship, members of this species will form a ring by linking their newly doubled tails together. On rare occasions, humans have been accepted into such rings.",
            cryUrl: "cries/424.mp3",
            japaneseName: "Eteboth"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "080",
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
            dexEntry: "A feeble, pitiful imbecile of a Pokémon that is nonetheless very hardy. Unperturbed by turbid water, it can be found living in all sorts of places.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "081",
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
            dexEntry: "I suspect this Pokémon to be the true identity of a dragon written of in ancient texts, which claimed that it razed an entire village with white-hot beams from its maw.",
            cryUrl: "cries/130.mp3",
            japaneseName: "Gyarados"
        },
        {
            name: "Shellos",
            imageUrl: "forms/422Shellos-West.png",
            number: "082",
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
            dexEntry: "Found in abundance on seashores bordering warm waters. Shellos are unexpectedly friendly and will crawl toward any person they see. Take care not to get coated in mucus!",
            cryUrl: "cries/422.mp3",
            japaneseName: "Karanakushi"
        },
        {
            name: "Gastrodon",
            imageUrl: "forms/423Gastrodon-West.png",
            number: "083",
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
            dexEntry: "Eats beach sand for nourishment. Should one Gastrodon encounter another of a different color, a fierce battle will inevitably ensue.",
            cryUrl: "cries/423.mp3",
            japaneseName: "Tritodon"
        },
        {
            name: "Qwilfish",
            imageUrl: "forms/211Qwilfish-Hisui.png",
            number: "084",
            type: ["Dark", "Poison"],
            category: "Balloon",
            region: "Johto",
            generation: "2",
            height: "1'08\"",
            weight: "8.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 3.9,
            dexEntry: "Fishers detest this troublesome Pokémon because it sprays poison from its spines, getting it everywhere. A different form of Qwilfish lives in other regions.",
            cryUrl: "cries/211.mp3",
            japaneseName: "Harysen"
        },
        {
            name: "Overqwil",
            imageUrl: "images/904Overqwil.png",
            number: "085",
            type: ["Dark", "Poison"],
            category: "Pin Cluster",
            region: "Hisui",
            generation: "8",
            height: "8'02\"",
            weight: "133.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 60.5,
            dexEntry: "Its lancelike spikes and savage temperament have earned it the nickname \"sea fiend.\" It slurps up poison to nourish itself.",
            cryUrl: "cries/904.mp3",
            japaneseName: "Haryman"
        },
        {
            name: "Happiny",
            imageUrl: "images/440Happiny.png",
            number: "086",
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
            dexEntry: "In imitation of Chansey, it keeps a round stone tucked into its belly pouch and cherishes it dearly. It gets along well with children and will sometimes play house with them for fun.",
            cryUrl: "cries/440.mp3",
            japaneseName: "Pinpuku"
        },
        {
            name: "Chansey",
            imageUrl: "images/113Chansey.png",
            number: "087",
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
            dexEntry: "This purehearted Pokémon shares its eggs with the injured. These eggs are so nutritious that they've been nicknamed \"doctors' doubles.\"",
            cryUrl: "cries/113.mp3",
            japaneseName: "Lucky"
        },
        {
            name: "Blissey",
            imageUrl: "images/242Blissey.png",
            number: "088",
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
            dexEntry: "A kindhearted Pokémon that will care for any sick person or Pokémon until their health improves. The eggs it lays are delicious and bring good fortune to those who eat them.",
            cryUrl: "cries/242.mp3",
            japaneseName: "Happinas"
        },
        {
            name: "Budew",
            imageUrl: "images/406Budew.png",
            number: "089",
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
            dexEntry: "When the sun's light strengthens, the bud atop this Pokémon's head opens. This is a sign to the people that the harsh winter is over, and the season of budding has begun.",
            cryUrl: "cries/406.mp3",
            japaneseName: "Subomie"
        },
        {
            name: "Roselia",
            imageUrl: "images/315Roselia.png",
            number: "090",
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
            dexEntry: "Though beautiful, it has highly poisonous thorns. There is an old tradition in my homeland wherein one would send these thorns to an opponent to challenge them to a duel.",
            cryUrl: "cries/315.mp3",
            japaneseName: "Roselia"
        },
        {
            name: "Roserade",
            imageUrl: "images/407Roserade.png",
            number: "091",
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
            dexEntry: "Hidden within the bouquet on each hand are thorned whips loaded with virulent poison. Roserade moves gracefully as it corners its prey and mercilessly lashes them with its whips.",
            cryUrl: "cries/407.mp3",
            japaneseName: "Roserade"
        },
        {
            name: "Carnivine",
            imageUrl: "images/455Carnivine.png",
            number: "092",
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
            dexEntry: "Though this is a plant Pokémon, it has a gluttonous and unruly temperament. Carnivine attacks its prey with its cavernous maw wide open.",
            cryUrl: "cries/455.mp3",
            japaneseName: "Muskippa"
        },
        {
            name: "Petilil",
            imageUrl: "images/548Petilil.png",
            number: "093",
            type: ["Grass"],
            category: "Bulb",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 6.6,
            dexEntry: "The leaves on its head are highly valued for medicinal purposes. Dry the leaves in the sun, boil them, and then drink the bitter decoction for remarkably effective relief from fatigue.",
            cryUrl: "cries/548.mp3",
            japaneseName: "Churine"
        },
        {
            name: "Lilligant",
            imageUrl: "forms/549Lilligant-Hisui.png",
            number: "094",
            type: ["Grass", "Fighting"],
            category: "Spinning",
            region: "Unova",
            generation: "5",
            height: "3'11\"",
            weight: "42.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 19.2,
            dexEntry: "I suspect that its well-developed legs are the result of a life spent on mountains covered in deep snow. The scent it exudes from its flower crown heartens those in proximity.",
            cryUrl: "cries/549.mp3",
            japaneseName: "Dredear"
        },
        {
            name: "Tangela",
            imageUrl: "images/114Tangela.png",
            number: "095",
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
            dexEntry: "It is cloaked entirely in blue vines, preventing any glimpse of its true identity. The vines impart a refreshing sensation when chewed—they're useful as a spice.",
            cryUrl: "cries/114.mp3",
            japaneseName: "Monjara"
        },
        {
            name: "Tangrowth",
            imageUrl: "images/465Tangrowth.png",
            number: "096",
            type: ["Grass"],
            category: "Vine",
            region: "Sinnoh",
            generation: "4",
            height: "6'07\"",
            weight: "283.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 128.6,
            dexEntry: "Draped with long vines, it resembles a shrub in appearance. It swings bundles of vines as though they were arms, wrapping them around prey to ensnare them.",
            cryUrl: "cries/465.mp3",
            japaneseName: "Mojumbo"
        },
        {
            name: "Barboach",
            imageUrl: "images/339Barboach.png",
            number: "097",
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
            dexEntry: "Makes its home in swamps with murky water. The poor visibility hides this Pokémon from predators, and the slime on its body makes grasping it difficult.",
            cryUrl: "cries/339.mp3",
            japaneseName: "Dojoach"
        },
        {
            name: "Whiscash",
            imageUrl: "images/340Whiscash.png",
            number: "098",
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
            dexEntry: "Strikes its caudal fin against the swamp bed to shake the ground and startle its prey. It will then swallow the fleeing prey whole. People mistook this behavior as the cause of earthquakes.",
            cryUrl: "cries/340.mp3",
            japaneseName: "Namazun"
        },
        {
            name: "Croagunk",
            imageUrl: "images/453Croagunk.png",
            number: "099",
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
            dexEntry: "A poison wielder with a dastardly personality. Despite such qualities, this species is afforded a measure of popularity due to its peculiar cry and comical features.",
            cryUrl: "cries/453.mp3",
            japaneseName: "Gureggru"
        },
        {
            name: "Toxicroak",
            imageUrl: "images/454Toxicroak.png",
            number: "100",
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
            dexEntry: "Its crimson claws contain a virulent toxin. This toxin can be made into a tonic by diluting it, mixing it with several types of wild grass, and boiling it down over two days.",
            cryUrl: "cries/454.mp3",
            japaneseName: "Dokurog"
        },
        {
            name: "Ralts",
            imageUrl: "images/280Ralts.png",
            number: "101",
            type: ["Psychic", "Fairy"],
            category: "Feeling",
            region: "Hoenn",
            generation: "3",
            height: "1'04\"",
            weight: "14.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.6,
            dexEntry: "Tends to prefer people with a chipper disposition to those who are gloomy, but it has shown no discrimination with regard to age or gender. Needs more research.",
            cryUrl: "cries/280.mp3",
            japaneseName: "Ralts"
        },
        {
            name: "Kirlia",
            imageUrl: "images/281Kirlia.png",
            number: "102",
            type: ["Psychic", "Fairy"],
            category: "Emotion",
            region: "Hoenn",
            generation: "3",
            height: "2'07\"",
            weight: "44.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.2,
            dexEntry: "It resembles a maiden in appearance, but it wields strange powers to project visions of paradise. I suspect the crimson ornaments on its head are the key to its abilities.",
            cryUrl: "cries/281.mp3",
            japaneseName: "Kirlia"
        },
        {
            name: "Gardevoir",
            imageUrl: "images/282Gardevoir.png",
            number: "103",
            type: ["Psychic", "Fairy"],
            category: "Embrace",
            region: "Hoenn",
            generation: "3",
            height: "5'03\"",
            weight: "106.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 48.4,
            dexEntry: "It will dedicate itself to defending a master it has come to adore. Its pure white dress, reminiscent of those worn by ladies of nobility, is the dress of one who is willing to risk their life.",
            cryUrl: "cries/282.mp3",
            japaneseName: "Sirnight"
        },
        {
            name: "Gallade",
            imageUrl: "images/475Gallade.png",
            number: "104",
            type: ["Psychic", "Fighting"],
            category: "Blade",
            region: "Sinnoh",
            generation: "4",
            height: "5'03\"",
            weight: "114.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 52.0,
            dexEntry: "The blades extending from its elbows are sharper than the finest swords. Its swordsmanship, albeit self-taught, is astonishingly impressive.",
            cryUrl: "cries/475.mp3",
            japaneseName: "Erureido"
        },
        {
            name: "Yanma",
            imageUrl: "images/193Yanma.png",
            number: "105",
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
            dexEntry: "Its frail wings are so thin that one can see clear through them. However, during flight these wings exhibit the power to churn air with force enough to launch a house skyward.",
            cryUrl: "cries/193.mp3",
            japaneseName: "Yanyanma"
        },
        {
            name: "Yanmega",
            imageUrl: "images/469Yanmega.png",
            number: "106",
            type: ["Bug", "Flying"],
            category: "Ogre Darner",
            region: "Sinnoh",
            generation: "4",
            height: "6'03\"",
            weight: "113.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 51.5,
            dexEntry: "Extremely violent. When hunting, it wastes none of its energy, aiming only for prey's most vulnerable spots. Any who manage to tame this Pokémon must be of incredible bravery.",
            cryUrl: "cries/469.mp3",
            japaneseName: "Megayanma"
        },
        {
            name: "Hippopotas",
            imageUrl: "images/449Hippopotas.png",
            number: "107",
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
            dexEntry: "Though large and languid, Hippopotas is difficult to detect due to its tendency to burrow into and lurk beneath the soil. When agitated or excited, it expels sand from its nostrils.",
            cryUrl: "cries/449.mp3",
            japaneseName: "Hippopotas"
        },
        {
            name: "Hippowdon",
            imageUrl: "images/450Hippowdon.png",
            number: "108",
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
            dexEntry: "Short-tempered and easily moved to violence. It whips up whirlwinds of sand to crush its foes' spirits, then goes in for the attack.",
            cryUrl: "cries/450.mp3",
            japaneseName: "Kabaldon"
        },
        {
            name: "Pachirisu",
            imageUrl: "images/417Pachirisu.png",
            number: "109",
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
            dexEntry: "A species related to the Pikachu line. Though Pachirisu is a calm Pokémon, it still presents a danger should one touch its electrified tail or cheeks.",
            cryUrl: "cries/417.mp3",
            japaneseName: "Pachirisu"
        },
        {
            name: "Stunky",
            imageUrl: "images/434Stunky.png",
            number: "110",
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
            dexEntry: "The poison that gushes from its aft end is accompanied by an utterly evil-smelling odor with such potency that one whiff can induce memory loss.",
            cryUrl: "cries/434.mp3",
            japaneseName: "Skunpuu"
        },
        {
            name: "Skuntank",
            imageUrl: "images/435Skuntank.png",
            number: "111",
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
            dexEntry: "Sprays a poisonous fluid to take down prey. Sometimes, unable to stomach the stench of its own fluid, it leaves the bested prey uneaten.",
            cryUrl: "cries/435.mp3",
            japaneseName: "Skutank"
        },
        {
            name: "Teddiursa",
            imageUrl: "images/216Teddiursa.png",
            number: "112",
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
            dexEntry: "It licks its paws because of the sweet honey that has soaked into them. It is cunning, stealing into the nests of Combee and taking for itself the honey that the Combee have amassed.",
            cryUrl: "cries/216.mp3",
            japaneseName: "Himeguma"
        },
        {
            name: "Ursaring",
            imageUrl: "images/217Ursaring.png",
            number: "113",
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
            dexEntry: "When the cold season arrives in Hisui, this Pokémon will wander fields and mountains alike in search of its favorite berries. Ursaring's hunger during this time makes it a ferocious danger.",
            cryUrl: "cries/217.mp3",
            japaneseName: "Ringuma"
        },
        {
            name: "Ursaluna",
            imageUrl: "images/901Ursaluna.png",
            number: "114",
            type: ["Ground", "Normal"],
            category: "Peat",
            region: "Hisui",
            generation: "8",
            height: "7'10\"",
            weight: "639.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.4,
            metricWeight: 290.0,
            dexEntry: "I believe it was Hisui's swampy terrain that gave Ursaluna its burly physique and newfound capacity to manipulate peat at will.",
            cryUrl: "cries/901.mp3",
            japaneseName: "Gachiguma"
        },
        {
            name: "Goomy",
            imageUrl: "images/704Goomy.png",
            number: "115",
            type: ["Dragon"],
            category: "Soft Tissue",
            region: "Kalos",
            generation: "6",
            height: "1'00\"",
            weight: "6.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 2.8,
            dexEntry: "Goomy hides away in the shade of trees, where it's nice and humid. If the slime coating its body dries out, the Pokémon instantly becomes lethargic.",
            cryUrl: "cries/704.mp3",
            japaneseName: "Numera"
        },
        {
            name: "Sliggoo",
            imageUrl: "forms/705Sliggoo-Hisui.png",
            number: "116",
            type: ["Steel", "Dragon"],
            category: "Snail",
            region: "Kalos",
            generation: "6",
            height: "2'04\"",
            weight: "151.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 68.5,
            dexEntry: "A creature given to melancholy. I suspect its metallic shell developed as a result of the mucus on its skin reacting with the iron in Hisui's water.",
            cryUrl: "cries/705.mp3",
            japaneseName: "Numeil"
        },
        {
            name: "Goodra",
            imageUrl: "forms/706Goodra-Hisui.png",
            number: "117",
            type: ["Steel", "Dragon"],
            category: "Shell Bunker",
            region: "Kalos",
            generation: "6",
            height: "5'07\"",
            weight: "736.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 334.1,
            dexEntry: "Able to freely control the hardness of its metallic shell. It loathes solitude and is extremely clingy—it will fume and run riot if those dearest to it ever leave its side.",
            cryUrl: "cries/706.mp3",
            japaneseName: "Numelgon"
        },
        {
            name: "Onix",
            imageUrl: "images/095Onix.png",
            number: "118",
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
            dexEntry: "This chain of immense stones resembles a giant serpent. Tremors shake the earth above as it burrows deep beneath the ground, feeding on boulders as it goes.",
            cryUrl: "cries/095.mp3",
            japaneseName: "Iwark"
        },
        {
            name: "Steelix",
            imageUrl: "images/208Steelix.png",
            number: "119",
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
            dexEntry: "This Pokémon evolved through use of a strange item. Its body is coated with steel powder and notably hard—not even diamond can leave so much as a scratch.",
            cryUrl: "cries/208.mp3",
            japaneseName: "Haganeil"
        },
        {
            name: "Rhyhorn",
            imageUrl: "images/111Rhyhorn.png",
            number: "120",
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
            dexEntry: "Ludicrously strong—when it butts heads with a mountain, it is the mountain that shatters. But its short legs struggle with turns, and it is incapable of stopping unless it collides with something.",
            cryUrl: "cries/111.mp3",
            japaneseName: "Sihorn"
        },
        {
            name: "Rhydon",
            imageUrl: "images/112Rhydon.png",
            number: "121",
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
            dexEntry: "Rapidly rotates its horn to bore through bedrock. It swaggers around volcanic regions, protected from the lava's heat by its tough, armorlike hide.",
            cryUrl: "cries/112.mp3",
            japaneseName: "Sidon"
        },
        {
            name: "Rhyperior",
            imageUrl: "images/464Rhyperior.png",
            number: "122",
            type: ["Ground", "Rock"],
            category: "Drill",
            region: "Sinnoh",
            generation: "4",
            height: "7'10\"",
            weight: "623.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.4,
            metricWeight: 282.8,
            dexEntry: "This Pokémon evolved through use of a curious item. Its rocklike hide is composed of a mysterious substance and can withstand a blow from a masterwork sword with nary a scratch.",
            cryUrl: "cries/464.mp3",
            japaneseName: "Dosidon"
        },
        {
            name: "Bonsly",
            imageUrl: "images/438Bonsly.png",
            number: "123",
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
            dexEntry: "Its tears elicit sympathy from those who see them, but do not be deceived! This expulsion of body water is merely a physiological mechanism for keeping itself in good health.",
            cryUrl: "cries/438.mp3",
            japaneseName: "Usohachi"
        },
        {
            name: "Sudowoodo",
            imageUrl: "images/185Sudowoodo.png",
            number: "124",
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
            dexEntry: "Though it pretends to be a tree, it fails to fool even children. To the touch, its body feels more like rock than tree bark. Sudowoodo's extreme aversion to water merits special note.",
            cryUrl: "cries/185.mp3",
            japaneseName: "Usokkie"
        },
        {
            name: "Lickitung",
            imageUrl: "images/108Lickitung.png",
            number: "125",
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
            dexEntry: "Wields its long tongue deftly, as though it were an arm. The Pokémon's viscous saliva, once it has been collected and boiled down, yields a strong and highly useful adhesive.",
            cryUrl: "cries/108.mp3",
            japaneseName: "Beroringa"
        },
        {
            name: "Lickilicky",
            imageUrl: "images/463Lickilicky.png",
            number: "126",
            type: ["Normal"],
            category: "Licking",
            region: "Sinnoh",
            generation: "4",
            height: "5'07\"",
            weight: "308.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 140.0,
            dexEntry: "Its tongue can extend and contract freely, and it is capable of reaching lengths over 10 times Lickilicky's height. Beware of the saliva, as it contains corrosive elements.",
            cryUrl: "cries/463.mp3",
            japaneseName: "Berobelt"
        },
        {
            name: "Togepi",
            imageUrl: "images/175Togepi.png",
            number: "127",
            type: ["Fairy"],
            category: "Spike Ball",
            region: "Johto",
            generation: "2",
            height: "1'00\"",
            weight: "3.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.3,
            dexEntry: "This ovate creature is frequently mistaken for a moving egg when encountered out in the fields or in the mountains. Its guileless smile soothes the soul.",
            cryUrl: "cries/175.mp3",
            japaneseName: "Togepy"
        },
        {
            name: "Togetic",
            imageUrl: "images/176Togetic.png",
            number: "128",
            type: ["Fairy", "Flying"],
            category: "Happiness",
            region: "Johto",
            generation: "2",
            height: "2'00\"",
            weight: "7.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 3.2,
            dexEntry: "No records exist of Togetic being seen in the wilds. Rumors abound that it evolves under the loving care of a trusted human companion, upon whom the Pokémon then bestows great joy.",
            cryUrl: "cries/176.mp3",
            japaneseName: "Togechick"
        },
        {
            name: "Togekiss",
            imageUrl: "images/468Togekiss.png",
            number: "129",
            type: ["Fairy", "Flying"],
            category: "Jubilee",
            region: "Sinnoh",
            generation: "4",
            height: "4'11\"",
            weight: "83.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 38.0,
            dexEntry: "Scant few have ever sighted this Pokémon. After studying what literature remains, I am certain Togekiss will reveal itself when peace reigns in the land.",
            cryUrl: "cries/468.mp3",
            japaneseName: "Togekiss"
        },
        {
            name: "Turtwig",
            imageUrl: "images/387Turtwig.png",
            number: "130",
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
            dexEntry: "This Pokémon becomes more energetic the more sunlight there is. The part resembling a shell is similar to silt and is slightly damp and warm to the touch.",
            cryUrl: "cries/387.mp3",
            japaneseName: "Naetle"
        },
        {
            name: "Grotle",
            imageUrl: "images/388Grotle.png",
            number: "131",
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
            dexEntry: "Appears where there is clean spring water. The fruit that grows on the shrubs on its shell is sweet, nutritious, and truly delicious.",
            cryUrl: "cries/388.mp3",
            japaneseName: "Hayashigame"
        },
        {
            name: "Torterra",
            imageUrl: "images/389Torterra.png",
            number: "132",
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
            dexEntry: "This remarkable, large-bodied Pokémon would serve beautifully as borrowed scenery for a garden, and its strength is peerless. Torterra roams the wilderness in search of clean water.",
            cryUrl: "cries/389.mp3",
            japaneseName: "Dodaitose"
        },
        {
            name: "Porygon",
            imageUrl: "images/137Porygon.png",
            number: "133",
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
            dexEntry: "It has no discernible heartbeat and does not seem to draw breath, and yet it appears to function without issue. I cannot even begin to explain this utterly bizarre anomaly.",
            cryUrl: "cries/137.mp3",
            japaneseName: "Porygon"
        },
        {
            name: "Porygon2",
            imageUrl: "images/233Porygon2.png",
            number: "134",
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
            dexEntry: "A bizarre item caused this Pokémon to evolve. While it now exhibits many new gestures and expressions, its biology remains inscrutable.",
            cryUrl: "cries/233.mp3",
            japaneseName: "Porygon2"
        },
        {
            name: "Porygon-Z",
            imageUrl: "images/474Porygon-Z.png",
            number: "135",
            type: ["Normal"],
            category: "Virtual",
            region: "Sinnoh",
            generation: "4",
            height: "2'11\"",
            weight: "75.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 34.0,
            dexEntry: "A curious item induced this evolution. The Pokémon's offensive capabilities have greatly increased, but the strangeness of its behavior has magnified in equal measure. This worries me.",
            cryUrl: "cries/474.mp3",
            japaneseName: "Porygon-Z"
        },
        {
            name: "Gastly",
            imageUrl: "images/092Gastly.png",
            number: "136",
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
            dexEntry: "Gaseous and completely impalpable. Also highly dangerous—inhaling part of its poisonous body will cause one to faint instantly.",
            cryUrl: "cries/092.mp3",
            japaneseName: "Ghos"
        },
        {
            name: "Haunter",
            imageUrl: "images/093Haunter.png",
            number: "137",
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
            dexEntry: "This frightful, malevolent spirit can glide through walls, appearing wherever it likes. According to rumor, victims of a Haunter's lick will wither to death day by day.",
            cryUrl: "cries/093.mp3",
            japaneseName: "Ghost"
        },
        {
            name: "Gengar",
            imageUrl: "images/094Gengar.png",
            number: "138",
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
            dexEntry: "Possesses potential victims' shadows in an effort to steal away the victims' lives. If your shadow begins to laugh, you must take hold of a protective charm posthaste!",
            cryUrl: "cries/094.mp3",
            japaneseName: "Gangar"
        },
        {
            name: "Spiritomb",
            imageUrl: "images/442Spiritomb.png",
            number: "139",
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
            dexEntry: "It lays curses by thinking wicked thoughts. Writings tell that this Pokémon was born out of the assembly of five score and eight malevolent spirits.",
            cryUrl: "cries/442.mp3",
            japaneseName: "Mikaruge"
        },
        {
            name: "Murkrow",
            imageUrl: "images/198Murkrow.png",
            number: "140",
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
            dexEntry: "Widely shunned as a bearer of ill fortune. Upon crossing paths with this creature, I've been told one must chant “Workrum, Workrum—bad luck, don't come” as a protective incantation.",
            cryUrl: "cries/198.mp3",
            japaneseName: "Yamikarasu"
        },
        {
            name: "Honchkrow",
            imageUrl: "images/430Honchkrow.png",
            number: "141",
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
            dexEntry: "One cry from this Pokémon, and a murder of Murkrow come flying. At such times, one would think the curtain of night had fallen, plunging the world into jet-black darkness.",
            cryUrl: "cries/430.mp3",
            japaneseName: "Dongkarasu"
        },
        {
            name: "Unown",
            imageUrl: "images/201Unown.png",
            number: "142",
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
            dexEntry: "It is hard to believe these strangely shaped Pokémon are truly living creatures. I've pointed out that the species' many forms resemble writing from other lands; no one will take me seriously.",
            cryUrl: "cries/201.mp3",
            japaneseName: "Unknown"
        },
        {
            name: "Spheal",
            imageUrl: "images/363Spheal.png",
            number: "143",
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
            dexEntry: "During the season when drift ice approaches the shore, Spheal prefers living on the ice—where fewer predators lurk—rather than the land. Its fur retains heat superbly and resists harsh cold.",
            cryUrl: "cries/363.mp3",
            japaneseName: "Tamazarashi"
        },
        {
            name: "Sealeo",
            imageUrl: "images/364Sealeo.png",
            number: "144",
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
            dexEntry: "Its white whiskers are very sensitive. Sealeo will balance Spheal on the tip of its nose, checking its scent and its feel to be sure the Spheal is healthy.",
            cryUrl: "cries/364.mp3",
            japaneseName: "Todoggler"
        },
        {
            name: "Walrein",
            imageUrl: "images/365Walrein.png",
            number: "145",
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
            dexEntry: "Its thick tusks are strong enough to shatter drift ice. They have been known to break, but they will grow back by the next year. The Hisui region is well known for these broken tusks.",
            cryUrl: "cries/365.mp3",
            japaneseName: "Todoseruga"
        },
        {
            name: "Remoraid",
            imageUrl: "images/223Remoraid.png",
            number: "146",
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
            dexEntry: "Spits water from its mouth with incredible accuracy. It captures Burmy by shooting them down off the branches from which they dangle.",
            cryUrl: "cries/223.mp3",
            japaneseName: "Teppouo"
        },
        {
            name: "Octillery",
            imageUrl: "images/224Octillery.png",
            number: "147",
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
            dexEntry: "While Octillery still shoots water from its mouth, the drastic anatomical difference between it and Remoraid meant that for a long time, no one believed the former evolved from the latter.",
            cryUrl: "cries/224.mp3",
            japaneseName: "Okutank"
        },
        {
            name: "Skorupi",
            imageUrl: "images/451Skorupi.png",
            number: "148",
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
            dexEntry: "Its claws are not only razor-sharp but poisonous, making Skorupi a highly dangerous Pokémon. It seems to be weakened by cold temperatures, however.",
            cryUrl: "cries/451.mp3",
            japaneseName: "Scorupi"
        },
        {
            name: "Drapion",
            imageUrl: "images/452Drapion.png",
            number: "149",
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
            dexEntry: "Has a brutish, ferocious temperament. With immense strength and a sturdy shell off which swords will bounce, it rampages about and wreaks havoc.",
            cryUrl: "cries/452.mp3",
            japaneseName: "Dorapion"
        },
        {
            name: "Growlithe",
            imageUrl: "forms/058Growlithe-Hisui.png",
            number: "150",
            type: ["Fire", "Rock"],
            category: "Scout",
            region: "Kanto",
            generation: "1",
            height: "2'07\"",
            weight: "50.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 22.7,
            dexEntry: "They patrol their territory in pairs. I believe the igneous rock components in the fur of this species are the result of volcanic activity in its habitat.",
            cryUrl: "cries/058.mp3",
            japaneseName: "Gardie"
        },
        {
            name: "Arcanine",
            imageUrl: "forms/059Arcanine-Hisui.png",
            number: "151",
            type: ["Fire", "Rock"],
            category: "Legendary",
            region: "Kanto",
            generation: "1",
            height: "6'07\"",
            weight: "370.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 168.0,
            dexEntry: "Snaps at its foes with fangs cloaked in blazing flame. Despite its bulk, it deftly feints every which way, leading opponents on a deceptively merry chase as it all but dances around them.",
            cryUrl: "cries/059.mp3",
            japaneseName: "Windie"
        },
        {
            name: "Glameow",
            imageUrl: "images/431Glameow.png",
            number: "152",
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
            dexEntry: "Bewitches humans with its helical tail and piercing gaze. Its hidden claws are quite sharp as well, making this Pokémon an exceedingly tricky opponent if antagonized.",
            cryUrl: "cries/431.mp3",
            japaneseName: "Nyarmar"
        },
        {
            name: "Purugly",
            imageUrl: "images/432Purugly.png",
            number: "153",
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
            dexEntry: "Though impudent and difficult to tame, Purugly enjoys great popularity due to its fur, the beauty of which surpasses even velveteen.",
            cryUrl: "cries/432.mp3",
            japaneseName: "Bunyatto"
        },
        {
            name: "Machop",
            imageUrl: "images/066Machop.png",
            number: "154",
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
            dexEntry: "Though as small as a child, it has strength enough to easily throw a well-built adult. Striving to become ever stronger, Machop trains by carrying a Graveler on its shoulders.",
            cryUrl: "cries/066.mp3",
            japaneseName: "Wanriky"
        },
        {
            name: "Machoke",
            imageUrl: "images/067Machoke.png",
            number: "155",
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
            dexEntry: "A sturdy creature boasting a robust physique and boundless stamina. Loves training above all else and voluntarily assists with tasks such as construction and clearing land.",
            cryUrl: "cries/067.mp3",
            japaneseName: "Goriky"
        },
        {
            name: "Machamp",
            imageUrl: "images/068Machamp.png",
            number: "156",
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
            dexEntry: "In close combat, its four arms afford it offensive and defensive supremacy. In but a blink, this valiant Pokémon can overwhelm its foes with more than 1,000 blows from its fists.",
            cryUrl: "cries/068.mp3",
            japaneseName: "Kairiky"
        },
        {
            name: "Chatot",
            imageUrl: "images/441Chatot.png",
            number: "157",
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
            dexEntry: "A versatile performer skilled in the imitation of human speech. It is said that older, more experienced Chatot can even understand the meaning of the words they mimic.",
            cryUrl: "cries/441.mp3",
            japaneseName: "Perap"
        },
        {
            name: "Duskull",
            imageUrl: "images/355Duskull.png",
            number: "158",
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
            dexEntry: "I've heard that the children of Hisui all begin to behave once they've been told the story of how this Pokémon roams about before the witching hour to spirit away misbehaving children.",
            cryUrl: "cries/355.mp3",
            japaneseName: "Yomawaru"
        },
        {
            name: "Dusclops",
            imageUrl: "images/356Dusclops.png",
            number: "159",
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
            dexEntry: "There are rumors that peeking inside its bandage-wrapped body will cause one to get pulled in through the gaps between the bandages, never to return. I've been too scared to verify.",
            cryUrl: "cries/356.mp3",
            japaneseName: "Samayouru"
        },
        {
            name: "Dusknoir",
            imageUrl: "images/477Dusknoir.png",
            number: "160",
            type: ["Ghost"],
            category: "Gripper",
            region: "Sinnoh",
            generation: "4",
            height: "7'03\"",
            weight: "235.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 106.6,
            dexEntry: "Comes to those whose lives have come to an end and escorts their souls to the afterlife. Known to mistakenly take the souls of those who yet have life left in them, albeit rarely.",
            cryUrl: "cries/477.mp3",
            japaneseName: "Yonoir"
        },
        {
            name: "Piplup",
            imageUrl: "images/393Piplup.png",
            number: "161",
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
            dexEntry: "Prefers cold climes and appears along coasts. It's an adorable little thing—as cute as any child—but it's also prideful, unwilling to accept handouts from people.",
            cryUrl: "cries/393.mp3",
            japaneseName: "Pochama"
        },
        {
            name: "Prinplup",
            imageUrl: "images/394Prinplup.png",
            number: "162",
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
            dexEntry: "It swims gracefully through the frigid sea and sings with a voice like the roaring tide. It has powerful, sturdy wings and dignity to match.",
            cryUrl: "cries/394.mp3",
            japaneseName: "Pottaishi"
        },
        {
            name: "Empoleon",
            imageUrl: "images/395Empoleon.png",
            number: "163",
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
            dexEntry: "Since ancient times, it has been revered by the people of Hisui, who call it the Master of the Waves. Its wings are a match for even master-crafted blades.",
            cryUrl: "cries/395.mp3",
            japaneseName: "Emperte"
        },
        {
            name: "Mantyke",
            imageUrl: "images/458Mantyke.png",
            number: "164",
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
            dexEntry: "Though ball-like in shape, this Pokémon is a proficient swimmer. I have discovered that if a Mantyke spends much time with schools of Remoraid, it will eventually achieve evolution.",
            cryUrl: "cries/458.mp3",
            japaneseName: "Tamanta"
        },
        {
            name: "Mantine",
            imageUrl: "images/226Mantine.png",
            number: "165",
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
            dexEntry: "This calm and gentle Pokémon swims gracefully through the sea. After building speed, it can leap out of the water. It is often misidentified as a bird Pokémon due to this behavior.",
            cryUrl: "cries/226.mp3",
            japaneseName: "Mantain"
        },
        {
            name: "Basculin",
            imageUrl: "forms/550Basculin-White.png",
            number: "166",
            type: ["Water"],
            category: "Mellow",
            region: "Unova",
            generation: "5",
            height: "3'03\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 18.0,
            dexEntry: "Though it differs from other Basculin in several respects, including demeanor—this one is gentle—I have categorized it as a regional form given the vast array of shared qualities.",
            cryUrl: "cries/550.mp3",
            japaneseName: "Bassrao"
        },
        {
            name: "Basculegion",
            imageUrl: "images/902Basculegion.png",
            number: "167",
            type: ["Water", "Ghost"],
            category: "Big Fish",
            region: "Hisui",
            generation: "8",
            height: "9'10\"",
            weight: "242.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.0,
            metricWeight: 110.0,
            dexEntry: "Clads itself in the souls of comrades that perished before fulfilling their goals of journeying upstream. No other species throughout all Hisui's rivers is Basculegion's equal.",
            cryUrl: "cries/902.mp3",
            japaneseName: "Idaitou"
        },
        {
            name: "Vulpix",
            imageUrl: "images/037Vulpix.png",
            number: "168",
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
            dexEntry: "In its belly burns a fire, which Vulpix spits out in the form of fireballs. When young, this Pokémon has but one white tail. As the Pokémon matures, this single tail splits into six.",
            cryUrl: "cries/037.mp3",
            japaneseName: "Rokon"
        },
        {
            name: "Ninetales",
            imageUrl: "images/038Ninetales.png",
            number: "169",
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
            dexEntry: "The coat of gleaming golden fur is quite magnificent. This species is said to store sacred power in its nine long tails and to live for a millennium.",
            cryUrl: "cries/038.mp3",
            japaneseName: "Kyukon"
        },
        {
            name: "Tentacool",
            imageUrl: "images/072Tentacool.png",
            number: "170",
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
            dexEntry: "They fire beams from the glassy, magenta orbs that resemble eyes atop their heads, and they drift in shallow seas. During low tide, they can sometimes be found on beaches, desiccated.",
            cryUrl: "cries/072.mp3",
            japaneseName: "Menokurage"
        },
        {
            name: "Tentacruel",
            imageUrl: "images/073Tentacruel.png",
            number: "171",
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
            dexEntry: "It has 80 tentacles, each with a venomous tip. These tentacles are also extendible, lengthening when Tentacruel attempts to catch prey. Use caution.",
            cryUrl: "cries/073.mp3",
            japaneseName: "Dokukurage"
        },
        {
            name: "Finneon",
            imageUrl: "images/456Finneon.png",
            number: "172",
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
            dexEntry: "What a gorgeous sight this Pokémon is as it swims with its long, pink-painted caudal fins fluttering behind it. Finneon's beautiful appearance has led to its nickname: \"finery fish.\"",
            cryUrl: "cries/456.mp3",
            japaneseName: "Keikouo"
        },
        {
            name: "Lumineon",
            imageUrl: "images/457Lumineon.png",
            number: "173",
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
            dexEntry: "Uses its gleaming fins to hunt its prey. The view of Lumineon schooling near the surface of the sea at night is breathtaking—it's as though there were shining stars right there.",
            cryUrl: "cries/457.mp3",
            japaneseName: "Neolant"
        },
        {
            name: "Magby",
            imageUrl: "images/240Magby.png",
            number: "174",
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
            dexEntry: "This Pokémon lives in volcanic areas. With each breath, sparks spurt from its mouth and nose. When Magby is in good health, its flames gain a yellow tint.",
            cryUrl: "cries/240.mp3",
            japaneseName: "Buby"
        },
        {
            name: "Magmar",
            imageUrl: "images/126Magmar.png",
            number: "175",
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
            dexEntry: "Legend has it that this Pokémon was born from the crater of a volcano. When wounded, it bathes in lava to heal its body, much as one would soak in a hot spring.",
            cryUrl: "cries/126.mp3",
            japaneseName: "Boober"
        },
        {
            name: "Magmortar",
            imageUrl: "images/467Magmortar.png",
            number: "176",
            type: ["Fire"],
            category: "Blast",
            region: "Sinnoh",
            generation: "4",
            height: "5'03\"",
            weight: "149.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 68.0,
            dexEntry: "Use of a strange item caused this Pokémon to evolve. Fireballs launched from the ends of its tubelike arms are hot enough to melt an iron pot in an instant.",
            cryUrl: "cries/467.mp3",
            japaneseName: "Booburn"
        },
        {
            name: "Magnemite",
            imageUrl: "images/081Magnemite.png",
            number: "177",
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
            dexEntry: "A bizarre Pokémon with but a single eye embedded in an iron sphere. I suspect this creature levitates due to the magnetism it emits from its arms, which resemble horseshoe-shaped magnets.",
            cryUrl: "cries/081.mp3",
            japaneseName: "Coil"
        },
        {
            name: "Magneton",
            imageUrl: "images/082Magneton.png",
            number: "178",
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
            dexEntry: "Three Magnemite gathered to evolve into this Pokémon. The source of much vexation on my part, as its powerful magnetism destroys my research equipment.",
            cryUrl: "cries/082.mp3",
            japaneseName: "Rarecoil"
        },
        {
            name: "Magnezone",
            imageUrl: "images/462Magnezone.png",
            number: "179",
            type: ["Electric", "Steel"],
            category: "Magnet Area",
            region: "Sinnoh",
            generation: "4",
            height: "3'11\"",
            weight: "396.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 180.0,
            dexEntry: "I theorize that a special magnetic field influenced this Pokémon, changing its molecular structure and causing it to evolve. It emits strange radio waves toward space from its antenna.",
            cryUrl: "cries/462.mp3",
            japaneseName: "Jibacoil"
        },
        {
            name: "Bronzor",
            imageUrl: "images/436Bronzor.png",
            number: "180",
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
            dexEntry: "Floats using a mysterious energy. The pattern engraved upon its back is held as sacred and can sometimes be found in imagery from ancient cemeteries and other such timeworn places.",
            cryUrl: "cries/436.mp3",
            japaneseName: "Dohmirror"
        },
        {
            name: "Bronzong",
            imageUrl: "images/437Bronzong.png",
            number: "181",
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
            dexEntry: "Some believe that its bell-like cry opens holes to another world. It has been revered as a deity since ancient times.",
            cryUrl: "cries/437.mp3",
            japaneseName: "Dohtakun"
        },
        {
            name: "Elekid",
            imageUrl: "images/239Elekid.png",
            number: "182",
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
            dexEntry: "They generate electricity by spinning their arms. During a thunderstorm, if one hears the lively voices of children out in the wilderness, what one is actually hearing are the voices of Elekid.",
            cryUrl: "cries/239.mp3",
            japaneseName: "Elekid"
        },
        {
            name: "Electabuzz",
            imageUrl: "images/125Electabuzz.png",
            number: "183",
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
            dexEntry: "Feeds on electrical energy. During sudden showers beneath looming thunderclouds, one can observe Electabuzz scaling tall trees, where the Pokémon will then wait for lightning to strike.",
            cryUrl: "cries/125.mp3",
            japaneseName: "Eleboo"
        },
        {
            name: "Electivire",
            imageUrl: "images/466Electivire.png",
            number: "184",
            type: ["Electric"],
            category: "Thunderbolt",
            region: "Sinnoh",
            generation: "4",
            height: "5'11\"",
            weight: "305.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 138.6,
            dexEntry: "Its evolution was induced by an unusual item, and its electrical output rises along with its heart rate. From its tails, it can unleash an electric current measuring 20,000 volts.",
            cryUrl: "cries/466.mp3",
            japaneseName: "Elekible"
        },
        {
            name: "Gligar",
            imageUrl: "images/207Gligar.png",
            number: "185",
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
            dexEntry: "Its tail is tipped by a thick, horrible stinger. To bring down prey, it will first obscure their vision by covering their faces with its body, and then it will use the stinger to inject them with venom.",
            cryUrl: "cries/207.mp3",
            japaneseName: "Gliger"
        },
        {
            name: "Gliscor",
            imageUrl: "images/472Gliscor.png",
            number: "186",
            type: ["Ground", "Flying"],
            category: "Fang Scorpion",
            region: "Sinnoh",
            generation: "4",
            height: "6'07\"",
            weight: "93.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 42.5,
            dexEntry: "It glides soundlessly on pitch-black wings and sinks sharp fangs into the throat of its prey. It takes on a look of satisfaction once it has entirely drained its prey of blood.",
            cryUrl: "cries/472.mp3",
            japaneseName: "Glion"
        },
        {
            name: "Gible",
            imageUrl: "images/443Gible.png",
            number: "187",
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
            dexEntry: "It nests in caves untouched by sunlight. Its sharp teeth may fall out when worn away or after an impact, but they regrow within a few days.",
            cryUrl: "cries/443.mp3",
            japaneseName: "Fukamaru"
        },
        {
            name: "Gabite",
            imageUrl: "images/444Gabite.png",
            number: "188",
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
            dexEntry: "Though Gabite are usually of a violent disposition, when I gave one a glass bead it had been eyeing covetously, it suddenly became quite docile.",
            cryUrl: "cries/444.mp3",
            japaneseName: "Gabite"
        },
        {
            name: "Garchomp",
            imageUrl: "images/445Garchomp.png",
            number: "189",
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
            dexEntry: "Soars across the heavens at blinding speed—a magnificent sight! It has a feral disposition. Utmost caution is required if one meets a Garchomp out in the wilds.",
            cryUrl: "cries/445.mp3",
            japaneseName: "Gaburias"
        },
        {
            name: "Nosepass",
            imageUrl: "images/299Nosepass.png",
            number: "190",
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
            dexEntry: "Once the people of Hisui discovered that its red nose always points north, they grew to rely on it greatly when traveling afar. The nose seems to work in a similar way to ancient compasses.",
            cryUrl: "cries/299.mp3",
            japaneseName: "Nosepass"
        },
        {
            name: "Probopass",
            imageUrl: "images/476Probopass.png",
            number: "191",
            type: ["Rock", "Steel"],
            category: "Compass",
            region: "Sinnoh",
            generation: "4",
            height: "4'07\"",
            weight: "749.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 340.0,
            dexEntry: "It is able to emit powerful magnetism, allowing it control over the iron sand that forms its luscious mustache. Using this iron sand, Probopass forms hard stones with which it smites its prey.",
            cryUrl: "cries/476.mp3",
            japaneseName: "Dainose"
        },
        {
            name: "Voltorb",
            imageUrl: "forms/100Voltorb-Hisui.png",
            number: "192",
            type: ["Electric", "Grass"],
            category: "Sphere",
            region: "Kanto",
            generation: "1",
            height: "1'08\"",
            weight: "28.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 13.0,
            dexEntry: "An enigmatic Pokémon that happens to bear a resemblance to a Poké Ball. When excited, it discharges the electric current it has stored in its belly, then lets out a great, uproarious laugh.",
            cryUrl: "cries/100.mp3",
            japaneseName: "Biriridama"
        },
        {
            name: "Electrode",
            imageUrl: "forms/101Electrode-Hisui.png",
            number: "193",
            type: ["Electric", "Grass"],
            category: "Sphere",
            region: "Kanto",
            generation: "1",
            height: "3'11\"",
            weight: "156.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 71.0,
            dexEntry: "The tissue on the surface of its body is curiously similar in composition to an Apricorn. When irritated, this Pokémon lets loose an electric current equal to 20 lightning bolts.",
            cryUrl: "cries/101.mp3",
            japaneseName: "Marumine"
        },
        {
            name: "Rotom",
            imageUrl: "images/479Rotom.png",
            number: "194",
            type: ["Electric", "Ghost"],
            category: "Plasma",
            region: "Sinnoh",
            generation: "4",
            height: "1'00\"",
            weight: "0.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 0.3,
            dexEntry: "This bizarre Pokémon appears to be a will-o'-the-wisp powered by electricity. Be wary, as Rotom is both smart and mischievous.",
            cryUrl: "cries/479.mp3",
            japaneseName: "Rotom"
        },
        {
            name: "Chingling",
            imageUrl: "images/433Chingling.png",
            number: "195",
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
            dexEntry: "This Pokémon gave me an excruciating headache when it seemingly cried out without making a sound. Perhaps there are some sounds that the human ear is simply incapable of hearing.",
            cryUrl: "cries/433.mp3",
            japaneseName: "Lisyan"
        },
        {
            name: "Chimecho",
            imageUrl: "images/358Chimecho.png",
            number: "196",
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
            dexEntry: "Can emit waves of air powerful enough to knock out prey taller than itself. I hypothesize that it amplifies the faint sound of wind within its body.",
            cryUrl: "cries/358.mp3",
            japaneseName: "Chirean"
        },
        {
            name: "Misdreavus",
            imageUrl: "images/200Misdreavus.png",
            number: "197",
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
            dexEntry: "It conceals itself in darkness, sending chills up travelers' spines with its childlike weeping. As it observes the frightened travelers with glee, the red orbs upon its chest let off an eerie light.",
            cryUrl: "cries/200.mp3",
            japaneseName: "Muma"
        },
        {
            name: "Mismagius",
            imageUrl: "images/429Mismagius.png",
            number: "198",
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
            dexEntry: "The incantations Mismagius chants can ward against misfortune, so a custom exists of inviting it into one's home. Incur the Pokémon's displeasure, however, and disaster will surely ensue.",
            cryUrl: "cries/429.mp3",
            japaneseName: "Mumargi"
        },
        {
            name: "Cleffa",
            imageUrl: "images/173Cleffa.png",
            number: "199",
            type: ["Fairy"],
            category: "Star Shape",
            region: "Johto",
            generation: "2",
            height: "1'00\"",
            weight: "6.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.0,
            dexEntry: "In silhouette, they resemble twinkling starlight. When shooting stars rain from the night sky, Cleffa gather in numbers and dance as though they are indeed incarnations of the stars.",
            cryUrl: "cries/173.mp3",
            japaneseName: "Py"
        },
        {
            name: "Clefairy",
            imageUrl: "images/035Clefairy.png",
            number: "200",
            type: ["Fairy"],
            category: "Fairy",
            region: "Kanto",
            generation: "1",
            height: "2'00\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 7.5,
            dexEntry: "It can be found in quiet mountain areas on a full moon's night. Its dancing and its tiny, faintly glowing wings confer upon it a lovely fairylike quality.",
            cryUrl: "cries/035.mp3",
            japaneseName: "Pippi"
        },
        {
            name: "Clefable",
            imageUrl: "images/036Clefable.png",
            number: "201",
            type: ["Fairy"],
            category: "Fairy",
            region: "Kanto",
            generation: "1",
            height: "4'03\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.0,
            dexEntry: "Legend says that on clear, quiet nights, it listens for the voices of its kin living on the moon. I, too, often think of my homeland, so far away.",
            cryUrl: "cries/036.mp3",
            japaneseName: "Pixy"
        },
        {
            name: "Sneasel",
            imageUrl: "forms/215Sneasel-Hisui.png",
            number: "202",
            type: ["Fighting", "Poison"],
            category: "Sharp Claw",
            region: "Johto",
            generation: "2",
            height: "2'11\"",
            weight: "59.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 27.0,
            dexEntry: "Its sturdy, curved claws are ideal for traversing precipitous cliffs. From the tips of these claws drips a venom that infiltrates the nerves of any prey caught in Sneasel's grasp.",
            cryUrl: "cries/215.mp3",
            japaneseName: "Nyula"
        },
        {
            name: "Sneasler",
            imageUrl: "images/903Sneasler.png",
            number: "203",
            type: ["Fighting", "Poison"],
            category: "Free Climb",
            region: "Hisui",
            generation: "8",
            height: "4'03\"",
            weight: "94.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 43.0,
            dexEntry: "Because of Sneasler's virulent poison and daunting physical prowess, no other species could hope to best it on the frozen highlands. Preferring solitude, this species does not form packs.",
            cryUrl: "cries/903.mp3",
            japaneseName: "Ohnyula"
        },
        {
            name: "Weavile",
            imageUrl: "images/461Weavile.png",
            number: "204",
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
            dexEntry: "This species corners prey as a pack, under the guidance of a leader. Weavile displays increased cunning, leading me to speculate that its evolution caused further brain development.",
            cryUrl: "cries/461.mp3",
            japaneseName: "Manyula"
        },
        {
            name: "Snorunt",
            imageUrl: "images/361Snorunt.png",
            number: "205",
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
            dexEntry: "Arrives alongside the first snow. It's thought that homes Snorunt visit will prosper for many generations. By tradition, one might offer a lump of ice made from pure water at one's front door.",
            cryUrl: "cries/361.mp3",
            japaneseName: "Yukiwarashi"
        },
        {
            name: "Glalie",
            imageUrl: "images/362Glalie.png",
            number: "206",
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
            dexEntry: "It covers its body with an armor of ice harder than steel. Uses its breath to freeze prey, which it then devours as if they were frozen desserts.",
            cryUrl: "cries/362.mp3",
            japaneseName: "Onigohri"
        },
        {
            name: "Froslass",
            imageUrl: "images/478Froslass.png",
            number: "207",
            type: ["Ice", "Ghost"],
            category: "Snow Land",
            region: "Sinnoh",
            generation: "4",
            height: "4'03\"",
            weight: "58.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 26.6,
            dexEntry: "A Pokémon inhabited by the soul of a woman who died bearing a grudge in the snowy mountains. Legends of Froslass placing deathly curses on misbehaving men send shivers down my spine.",
            cryUrl: "cries/478.mp3",
            japaneseName: "Yukimenoko"
        },
        {
            name: "Cranidos",
            imageUrl: "images/408Cranidos.png",
            number: "208",
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
            dexEntry: "An incredibly rare sight. They duel each other by ramming their heads together, and the resulting sound echoes throughout the area like the pealing of a bell.",
            cryUrl: "cries/408.mp3",
            japaneseName: "Zugaidos"
        },
        {
            name: "Rampardos",
            imageUrl: "images/409Rampardos.png",
            number: "209",
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
            dexEntry: "Very little is known about its biology. Can knock down massive trees by smashing its beautiful, pearl-like crown against them.",
            cryUrl: "cries/409.mp3",
            japaneseName: "Rampald"
        },
        {
            name: "Shieldon",
            imageUrl: "images/410Shieldon.png",
            number: "210",
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
            dexEntry: "Much remains unknown about this Pokémon, as few have ever seen it. However, we know that it is calm and dislikes conflict, and it enjoys polishing its face against trees and rocks.",
            cryUrl: "cries/410.mp3",
            japaneseName: "Tatetops"
        },
        {
            name: "Bastiodon",
            imageUrl: "images/411Bastiodon.png",
            number: "211",
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
            dexEntry: "Its face is sturdy—as strong as diamond—and this hardness offers a very stable defense. Much about this species is still unknown, such as its natural habitat.",
            cryUrl: "cries/411.mp3",
            japaneseName: "Torideps"
        },
        {
            name: "Swinub",
            imageUrl: "images/220Swinub.png",
            number: "212",
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
            dexEntry: "Swinub excels at sniffing out mushrooms buried beneath grass or snow. Since ancient times, the people of Hisui have often relied upon this skill.",
            cryUrl: "cries/220.mp3",
            japaneseName: "Urimoo"
        },
        {
            name: "Piloswine",
            imageUrl: "images/221Piloswine.png",
            number: "213",
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
            dexEntry: "The long fur of this Pokémon covers its eyes, ears, and even limbs, allowing Piloswine to resist harshly frigid conditions. The Pokémon's white tusks can be used to defeat its enemies.",
            cryUrl: "cries/221.mp3",
            japaneseName: "Inomoo"
        },
        {
            name: "Mamoswine",
            imageUrl: "images/473Mamoswine.png",
            number: "214",
            type: ["Ice", "Ground"],
            category: "Twin Tusk",
            region: "Sinnoh",
            generation: "4",
            height: "8'02\"",
            weight: "641.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 291.0,
            dexEntry: "This species reached its zenith during the period known as the ice age. I suspect that Hisui's frigid climate is in harmony with Mamoswine's constitution, thus awakening hidden potential.",
            cryUrl: "cries/473.mp3",
            japaneseName: "Mammoo"
        },
        {
            name: "Bergmite",
            imageUrl: "images/712Bergmite.png",
            number: "215",
            type: ["Ice"],
            category: "Ice Chunk",
            region: "Kalos",
            generation: "6",
            height: "3'03\"",
            weight: "219.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 99.5,
            dexEntry: "Lives on mountains blanketed in perennial snow. It freezes water vapor in the air to make the ice helmet that it dons for defense.",
            cryUrl: "cries/712.mp3",
            japaneseName: "Kachikohru"
        },
        {
            name: "Avalugg",
            imageUrl: "forms/713Avalugg-Hisui.png",
            number: "216",
            type: ["Ice", "Rock"],
            category: "Iceberg",
            region: "Kalos",
            generation: "6",
            height: "4'07\"",
            weight: "578.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 262.4,
            dexEntry: "The armor of ice covering its lower jaw puts steel to shame and can shatter rocks with ease. This Pokémon barrels along steep mountain paths, cleaving through the deep snow.",
            cryUrl: "cries/713.mp3",
            japaneseName: "Crebase"
        },
        {
            name: "Snover",
            imageUrl: "images/459Snover.png",
            number: "217",
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
            dexEntry: "One is likely to encounter this Pokémon while out in the snow. There are stories of Snover appearing in human settlements but doing no harm—rather, they bond with the children.",
            cryUrl: "cries/459.mp3",
            japaneseName: "Yukikaburi"
        },
        {
            name: "Abomasnow",
            imageUrl: "images/460Abomasnow.png",
            number: "218",
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
            dexEntry: "A powerful Pokémon that can split huge boulders with ease. Dislikes associating with others and chooses to live quietly deep within the mountains, playing with the snow.",
            cryUrl: "cries/460.mp3",
            japaneseName: "Yukinooh"
        },
        {
            name: "Zorua",
            imageUrl: "forms/570Zorua-Hisui.png",
            number: "219",
            type: ["Normal", "Ghost"],
            category: "Spiteful Fox",
            region: "Unova",
            generation: "5",
            height: "2'04\"",
            weight: "27.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 12.5,
            dexEntry: "A once-departed soul, returned to life in Hisui. Derives power from resentment, which rises as energy atop its head and takes on the forms of foes. In this way, Zorua vents lingering malice.",
            cryUrl: "cries/570.mp3",
            japaneseName: "Zorua"
        },
        {
            name: "Zoroark",
            imageUrl: "forms/571Zoroark-Hisui.png",
            number: "220",
            type: ["Normal", "Ghost"],
            category: "Baneful Fox",
            region: "Unova",
            generation: "5",
            height: "5'03\"",
            weight: "160.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 73.0,
            dexEntry: "With its disheveled white fur, it looks like an embodiment of death. Heedless of its own safety, Zoroark attacks its nemeses with a bitter energy so intense, it lacerates Zoroark's own body.",
            cryUrl: "cries/571.mp3",
            japaneseName: "Zoroark"
        },
        {
            name: "Rufflet",
            imageUrl: "images/627Rufflet.png",
            number: "221",
            type: ["Normal", "Flying"],
            category: "Eaglet",
            region: "Unova",
            generation: "5",
            height: "1'08\"",
            weight: "23.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 10.5,
            dexEntry: "Its chick-like looks belie its hotheadedness. It challenges its parents at every opportunity, desperate to prove its strength.",
            cryUrl: "cries/627.mp3",
            japaneseName: "Washibon"
        },
        {
            name: "Braviary",
            imageUrl: "forms/628Braviary-Hisui.png",
            number: "222",
            type: ["Psychic", "Flying"],
            category: "Battle Cry",
            region: "Unova",
            generation: "5",
            height: "5'07\"",
            weight: "95.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 43.4,
            dexEntry: "Screaming a bloodcurdling battle cry, this huge and ferocious bird Pokémon goes out on the hunt. It blasts lakes with shock waves, then scoops up any prey that float to the water's surface.",
            cryUrl: "cries/628.mp3",
            japaneseName: "Warrgle"
        },
        {
            name: "Riolu",
            imageUrl: "images/447Riolu.png",
            number: "223",
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
            dexEntry: "Though infantile in appearance, it has the mysterious ability to read the minds of humans. The pure of heart are met with Riolu's approval, while those of ill nature earn only its loathing.",
            cryUrl: "cries/447.mp3",
            japaneseName: "Riolu"
        },
        {
            name: "Lucario",
            imageUrl: "images/448Lucario.png",
            number: "224",
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
            dexEntry: "A most gallant-looking creature. It emits energy waves and controls them with precision, using them to sense even faraway beings. I have given the name “aura” to this power.",
            cryUrl: "cries/448.mp3",
            japaneseName: "Lucario"
        },
        {
            name: "Uxie",
            imageUrl: "images/480Uxie.png",
            number: "225",
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
            dexEntry: "A Pokémon feared but also respected for stealing away the memories of evildoers. I have found records that suggest Uxie holds dominion over knowledge.",
            cryUrl: "cries/480.mp3",
            japaneseName: "Yuxie"
        },
        {
            name: "Mesprit",
            imageUrl: "images/481Mesprit.png",
            number: "226",
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
            dexEntry: "Known as the Being of Emotion. In legend, this Pokémon was feared, as any who showed disrespect would have their emotions thrown into disarray.",
            cryUrl: "cries/481.mp3",
            japaneseName: "Emrit"
        },
        {
            name: "Azelf",
            imageUrl: "images/482Azelf.png",
            number: "227",
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
            dexEntry: "The dreaded Being of Willpower. Legends tell of this Pokémon manipulating the will of its adversaries and turning them into puppets of its own.",
            cryUrl: "cries/482.mp3",
            japaneseName: "Agnome"
        },
        {
            name: "Heatran",
            imageUrl: "images/485Heatran.png",
            number: "228",
            type: ["Fire", "Steel"],
            category: "Lava Dome",
            region: "Sinnoh",
            generation: "4",
            height: "5'07\"",
            weight: "948.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 430.0,
            dexEntry: "Stories tell of this Pokémon being birthed from the boiling magma within Mount Coronet. Its molten-steel body holds many mysteries.",
            cryUrl: "cries/485.mp3",
            japaneseName: "Heatran"
        },
        {
            name: "Regigigas",
            imageUrl: "images/486Regigigas.png",
            number: "229",
            type: ["Normal"],
            category: "Colossal",
            region: "Sinnoh",
            generation: "4",
            height: "12'02\"",
            weight: "925.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.7,
            metricWeight: 420.0,
            dexEntry: "According to legend, Regigigas pulled landmasses together and bound them with rope to create the continent of Hisui. Though I have my doubts, the story could well contain a shred of truth.",
            cryUrl: "cries/486.mp3",
            japaneseName: "Regigigas"
        },
        {
            name: "Cresselia",
            imageUrl: "images/488Cresselia.png",
            number: "230",
            type: ["Psychic"],
            category: "Lunar",
            region: "Sinnoh",
            generation: "4",
            height: "4'11\"",
            weight: "188.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 85.6,
            dexEntry: "Cresselia is reminiscent of the crescent moon. It leaves a brilliant line of light in its wake as it flies across the night sky. I daresay it resembles the heavenly maiden who created the Milky Way.",
            cryUrl: "cries/488.mp3",
            japaneseName: "Cresselia"
        },
        {
            name: "Tornadus",
            imageUrl: "images/641Tornadus.png",
            number: "231",
            type: ["Flying"],
            category: "Cyclone",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "138.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 63.0,
            dexEntry: "This storm-stirring Pokémon is said to cause the seasons to turn by whipping up the air. I suspect its humanlike form to be a false one.",
            cryUrl: "cries/641.mp3",
            japaneseName: "Tornelos"
        },
        {
            name: "Thundurus",
            imageUrl: "images/642Thundurus.png",
            number: "232",
            type: ["Electric", "Flying"],
            category: "Bolt Strike",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "134.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 61.0,
            dexEntry: "They say this wielder of electricity has waged war with its nemesis, Tornadus, since time immemorial. The lightning bolts it hurls pierce the very earth and enrich the soil.",
            cryUrl: "cries/642.mp3",
            japaneseName: "Voltolos"
        },
        {
            name: "Landorus",
            imageUrl: "images/645Landorus.png",
            number: "233",
            type: ["Ground", "Flying"],
            category: "Abundance",
            region: "Unova",
            generation: "5",
            height: "4'11\"",
            weight: "149.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 68.0,
            dexEntry: "When the incarnations of wind and of lightning clash, Landorus arrives to quell the conflict. After the tempests and thunderbolts abate, the land is sure to be blessed with bountiful harvests.",
            cryUrl: "cries/645.mp3",
            japaneseName: "Landlos"
        },
        {
            name: "Enamorus",
            imageUrl: "images/905Enamorus.png",
            number: "234",
            type: ["Fairy", "Flying"],
            category: "Love-Hate",
            region: "Hisui",
            generation: "8",
            height: "5'03\"",
            weight: "105.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 48.0,
            dexEntry: "When it flies to this land from across the sea, the bitter winter comes to an end. According to legend, this Pokémon's love gives rise to the budding of fresh life across Hisui.",
            cryUrl: "cries/905.mp3",
            japaneseName: "Lovetolos"
        },
        {
            name: "Dialga",
            imageUrl: "images/483Dialga.png",
            number: "235",
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
            dexEntry: "This Pokémon is revered as a deity in Hisuian legend. The birth of Dialga was what caused the vast river of time to begin flowing in our world.",
            cryUrl: "cries/483.mp3",
            japaneseName: "Dialga"
        },
        {
            name: "Palkia",
            imageUrl: "images/484Palkia.png",
            number: "236",
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
            dexEntry: "This Pokémon is feared as a deity in Hisuian legend. The birth of Palkia was what caused the walls of our world to disappear, creating a sky that spans for infinity.",
            cryUrl: "cries/484.mp3",
            japaneseName: "Palkia"
        },
        {
            name: "Giratina",
            imageUrl: "images/487Giratina.png",
            number: "237",
            type: ["Ghost", "Dragon"],
            category: "Renegade",
            region: "Sinnoh",
            generation: "4",
            height: "14'09\"",
            weight: "1653.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.5,
            metricWeight: 750.0,
            dexEntry: "There is one Hisuian verse that tells of a powerful light creating a deep shadow. I imagine that this deep shadow is Giratina.",
            cryUrl: "cries/487.mp3",
            japaneseName: "Giratina"
        },
        {
            name: "Arceus",
            imageUrl: "images/493Arceus.png",
            number: "238",
            type: ["Normal"],
            category: "Alpha",
            region: "Sinnoh",
            generation: "4",
            height: "10'06\"",
            weight: "705.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.2,
            metricWeight: 320.0,
            dexEntry: "It is the heavenly fount from which pours the light that shines across Hisui. Its luminance guides and protects all Pokémon. Hisuian mythology states that Arceus is the creator of all things.",
            cryUrl: "cries/493.mp3",
            japaneseName: "Arceus"
        },
        {
            name: "Phione",
            imageUrl: "images/489Phione.png",
            number: "239",
            type: ["Water"],
            category: "Sea Drifter",
            region: "Sinnoh",
            generation: "4",
            height: "1'04\"",
            weight: "6.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 3.1,
            dexEntry: "Can be seen floating offshore during seasons when the seas are warm. Its azure body blends in with the ocean waters—logic suggests this is a defense mechanism against natural predators.",
            cryUrl: "cries/489.mp3",
            japaneseName: "Phione"
        },
        {
            name: "Manaphy",
            imageUrl: "images/490Manaphy.png",
            number: "240",
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
            dexEntry: "Rumored to migrate across the oceans and visit Hisui's coastal waters only rarely. Although Manaphy resembles Phione, it is also quite different. The relation between the two is unclear.",
            cryUrl: "cries/490.mp3",
            japaneseName: "Manaphy"
        },
        {
            name: "Shaymin",
            imageUrl: "images/492Shaymin.png",
            number: "241",
            type: ["Grass"],
            category: "Gratitude",
            region: "Sinnoh",
            generation: "4",
            height: "0'08\"",
            weight: "4.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 2.1,
            dexEntry: "When the turning of seasons brings the cruel winter to its end and the joyous people give thanks to the heavens, Shaymin appears and covers the withered land with flowers.",
            cryUrl: "cries/492.mp3",
            japaneseName: "Shaymin"
        },
        {
            name: "Darkrai",
            imageUrl: "images/491Darkrai.png",
            number: "242",
            type: ["Dark"],
            category: "Pitch-Black",
            region: "Sinnoh",
            generation: "4",
            height: "4'11\"",
            weight: "111.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 50.5,
            dexEntry: "On a moonless night, a strange incident occurred in which every one of a village's inhabitants suffered nightmares. The villagers attested that Darkrai appeared before them in these nightmares.",
            cryUrl: "cries/491.mp3",
            japaneseName: "Darkrai"
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