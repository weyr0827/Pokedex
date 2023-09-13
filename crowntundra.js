//Crown Tundra Search Code


let nationalDex = {
    nationalPokedex: [
        {
            name: "Snom",
            imageUrl: "images/872Snom.png",
            number: "001",
            type: ["Ice", "Bug"],
            category: "Worm",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "8.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 3.8,
            dexEntry: "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow.",
            cryUrl: "cries/872.mp3",
            japaneseName: "Yukihami"
        },
        {
            name: "Frosmoth",
            imageUrl: "images/873Frosmoth.png",
            number: "002",
            type: ["Ice", "Bug"],
            category: "Frost Moth",
            region: "Galar",
            generation: "08",
            height: "4'03\"",
            weight: "92.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 42.0,
            dexEntry: "It shows no mercy to any who desecrate fields and mountains. It will fly around on its icy wings, causing a blizzard to chase offenders away.",
            cryUrl: "cries/873.mp3",
            japaneseName: "Mothnow"
        },
        {
            name: "Wooloo",
            imageUrl: "images/831Wooloo.png",
            number: "003",
            type: ["Normal"],
            category: "Sheep",
            region: "Galar",
            generation: "08",
            height: "2'00\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 6.0,
            dexEntry: "If its fleece grows too long, Wooloo won't be able to move. Cloth made with the wool of this Pokémon is surprisingly strong.",
            cryUrl: "cries/831.mp3",
            japaneseName: "Wooluu"
        },
        {
            name: "Dubwool",
            imageUrl: "images/832Dubwool.png",
            number: "004",
            type: ["Normal"],
            category: "Sheep",
            region: "Galar",
            generation: "08",
            height: "4'03\"",
            weight: "94.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 43.0,
            dexEntry: "Its majestic horns are meant only to impress the opposite gender. They never see use in battle.",
            cryUrl: "cries/832.mp3",
            japaneseName: "Baiwooluu"
        },
        {
            name: "Skwovet",
            imageUrl: "images/819Skwovet.png",
            number: "005",
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
            dexEntry: "It eats berries nonstop—a habit that has made it more resilient than it looks. It'll show up on farms, searching for yet more berries.",
            cryUrl: "cries/819.mp3",
            japaneseName: "Hoshigarisu"
        },
        {
            name: "Greedent",
            imageUrl: "images/820Greedent.png",
            number: "006",
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
            dexEntry: "Common throughout the Galar region, this Pokémon has strong teeth and can chew through the toughest of berry shells.",
            cryUrl: "cries/820.mp3",
            japaneseName: "Yokubarisu"
        },
        {
            name: "Swinub",
            imageUrl: "images/220Swinub.png",
            number: "007",
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
            dexEntry: "If it smells something enticing, it dashes off headlong to find the source of the aroma.",
            cryUrl: "cries/220.mp3",
            japaneseName: "Urimoo"
        },
        {
            name: "Piloswine",
            imageUrl: "images/221Piloswine.png",
            number: "008",
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
            dexEntry: "Although its legs are short, its rugged hooves prevent it from slipping, even on icy ground.",
            cryUrl: "cries/221.mp3",
            japaneseName: "Inomoo"
        },
        {
            name: "Mamoswine",
            imageUrl: "images/473Mamoswine.png",
            number: "009",
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
            dexEntry: "It looks strong, and that's exactly what it is. As the weather grows colder, its ice tusks grow longer, thicker, and more impressive.",
            cryUrl: "cries/473.mp3",
            japaneseName: "Mammoo"
        },
        {
            name: "Mime Jr.",
            imageUrl: "images/439Mime_Jr.png",
            number: "010",
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
            dexEntry: "It looks for a Mr. Rime that's a good dancer and carefully copies the Mr. Rime's steps like an apprentice.",
            cryUrl: "cries/439.mp3",
            japaneseName: "Manene"
        },
        {
            name: "Mr. Mime",
            imageUrl: "forms/122Mr._Mime-Galar.png",
            number: "011",
            type: ["Ice", "Psychic"],
            category: "Dancing",
            region: "Kanto",
            generation: "01",
            height: "4'07\"",
            weight: "125.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 56.8,
            dexEntry: "It can radiate chilliness from the bottoms of its feet. It'll spend the whole day tap-dancing on a frozen floor.",
            cryUrl: "cries/122.mp3",
            japaneseName: "Barrierd"
        },
        {
            name: "Mr. Rime",
            imageUrl: "images/866Mr._Rime.png",
            number: "012",
            type: ["Ice", "Psychic"],
            category: "Comedian",
            region: "Galar",
            generation: "08",
            height: "4'11\"",
            weight: "128.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.5,
            metricWeight: 58.2,
            dexEntry: "Its amusing movements make it very popular. It releases its psychic power from the pattern on its belly.",
            cryUrl: "cries/866.mp3",
            japaneseName: "Barrikohru"
        },
        {
            name: "Smoochum",
            imageUrl: "images/238Smoochum.png",
            number: "013",
            type: ["Ice", "Psychic"],
            category: "Kiss",
            region: "Johto",
            generation: "02",
            height: "1'04\"",
            weight: "13.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 6.0,
            dexEntry: "This is a very curious Pokémon. Smoochum decides what it likes and dislikes by touching things with its lips.",
            cryUrl: "cries/238.mp3",
            japaneseName: "Muchul"
        },
        {
            name: "Jynx",
            imageUrl: "images/124Jynx.png",
            number: "014",
            type: ["Ice", "Psychic"],
            category: "Human Shape",
            region: "Kanto",
            generation: "01",
            height: "4'07\"",
            weight: "89.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 40.6,
            dexEntry: "The Jynx of Galar often have beautiful and delicate voices. Some of these Pokémon have even gathered a fan base.",
            cryUrl: "cries/124.mp3",
            japaneseName: "Rougela"
        },
        {
            name: "Elekid",
            imageUrl: "images/239Elekid.png",
            number: "015",
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
            dexEntry: "It's not good at storing electricity yet. This Pokémon sneaks into people's homes, looking for electrical outlets to eat electricity from.",
            cryUrl: "cries/239.mp3",
            japaneseName: "Elekid"
        },
        {
            name: "Electabuzz",
            imageUrl: "images/125Electabuzz.png",
            number: "016",
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
            dexEntry: "With the coming of a storm, many of these Pokémon will gather under tall trees and sit there waiting for lightning to strike.",
            cryUrl: "cries/125.mp3",
            japaneseName: "Eleboo"
        },
        {
            name: "Electivire",
            imageUrl: "images/466Electivire.png",
            number: "017",
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
            dexEntry: "In terms of electrical-energy output, Electivire is one of the best among all Electric Pokémon. It discharges high-voltage currents from its tails.",
            cryUrl: "cries/466.mp3",
            japaneseName: "Elekible"
        },
        {
            name: "Magby",
            imageUrl: "images/240Magby.png",
            number: "018",
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
            dexEntry: "This Pokémon makes its home near volcanoes. At the end of the day, Magby soaks in magma, resting and recovering from the day's fatigue.",
            cryUrl: "cries/240.mp3",
            japaneseName: "Buby"
        },
        {
            name: "Magmar",
            imageUrl: "images/126Magmar.png",
            number: "019",
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
            dexEntry: "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
            cryUrl: "cries/126.mp3",
            japaneseName: "Boober"
        },
        {
            name: "Magmortar",
            imageUrl: "images/467Magmortar.png",
            number: "020",
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
            dexEntry: "Living in the crater of a volcano has caused this Pokémon's body to resemble its environment—it has an organ similar to a magma chamber.",
            cryUrl: "cries/467.mp3",
            japaneseName: "Booburn"
        },
        {
            name: "Audino",
            imageUrl: "images/531Audino.png",
            number: "021",
            type: ["Normal"],
            category: "Hearing",
            region: "Unova",
            generation: "05",
            height: "3'07\"",
            weight: "68.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 31.0,
            dexEntry: "This Pokémon has a kind heart. By touching with its feelers, Audino can gauge other creatures' feelings and physical conditions.",
            cryUrl: "cries/531.mp3",
            japaneseName: "Tabunne"
        },
        {
            name: "Vanillite",
            imageUrl: "images/582Vanillite.png",
            number: "022",
            type: ["Ice"],
            category: "Fresh Snow",
            region: "Unova",
            generation: "05",
            height: "1'04\"",
            weight: "12.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 5.7,
            dexEntry: "Supposedly, this Pokémon was born from an icicle. It spews out freezing air at -58 degrees Fahrenheit to make itself more comfortable.",
            cryUrl: "cries/582.mp3",
            japaneseName: "Vanipeti"
        },
        {
            name: "Vanillish",
            imageUrl: "images/583Vanillish.png",
            number: "023",
            type: ["Ice"],
            category: "Icy Snow",
            region: "Unova",
            generation: "05",
            height: "3'07\"",
            weight: "90.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 41.0,
            dexEntry: "It blasts enemies with cold air reaching -148 degrees Fahrenheit, freezing them solid. But it spares their lives afterward—it's a kind Pokémon.",
            cryUrl: "cries/583.mp3",
            japaneseName: "Vanirich"
        },
        {
            name: "Vanilluxe",
            imageUrl: "images/584Vanilluxe.png",
            number: "024",
            type: ["Ice"],
            category: "Snowstorm",
            region: "Unova",
            generation: "05",
            height: "4'03\"",
            weight: "126.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 57.5,
            dexEntry: "People believe this Pokémon formed when two Vanillish stuck together. Its body temperature is roughly 21 degrees Fahrenheit.",
            cryUrl: "cries/584.mp3",
            japaneseName: "Baivanilla"
        },
        {
            name: "Snorunt",
            imageUrl: "images/361Snorunt.png",
            number: "025",
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
            dexEntry: "It can only survive in cold areas. It bounces happily around, even in environments as cold as −150 degrees Fahrenheit.",
            cryUrl: "cries/361.mp3",
            japaneseName: "Yukiwarashi"
        },
        {
            name: "Glalie",
            imageUrl: "images/362Glalie.png",
            number: "026",
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
            dexEntry: "It can instantly freeze moisture in the atmosphere. It uses this power to freeze its foes.",
            cryUrl: "cries/362.mp3",
            japaneseName: "Onigohri"
        },
        {
            name: "Froslass",
            imageUrl: "images/478Froslass.png",
            number: "027",
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
            dexEntry: "It spits out cold air of nearly −60 degrees Fahrenheit to freeze its quarry. It brings frozen prey back to its lair and neatly lines them up.",
            cryUrl: "cries/478.mp3",
            japaneseName: "Yukimenoko"
        },
        {
            name: "Sneasel",
            imageUrl: "images/215Sneasel.png",
            number: "028",
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
            dexEntry: "It has a cunning yet savage disposition. It waits for parents to leave their nests, and then it sneaks in to steal their eggs.",
            cryUrl: "cries/215.mp3",
            japaneseName: "Nyula"
        },
        {
            name: "Weavile",
            imageUrl: "images/461Weavile.png",
            number: "029",
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
            dexEntry: "With its claws, it leaves behind signs for its friends to find. The number of distinct signs is said to be over 500.",
            cryUrl: "cries/461.mp3",
            japaneseName: "Manyula"
        },
        {
            name: "Cryogonal",
            imageUrl: "images/615Cryogonal.png",
            number: "030",
            type: ["Ice"],
            category: "Crystallizing",
            region: "Unova",
            generation: "05",
            height: "3'07\"",
            weight: "326.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 148.0,
            dexEntry: "When the weather gets hot, these Pokémon turn into water vapor. Cryogonal are almost never seen during summer.",
            cryUrl: "cries/615.mp3",
            japaneseName: "Freegeo"
        },
        {
            name: "Snover",
            imageUrl: "images/459Snover.png",
            number: "031",
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
            dexEntry: "The berries that grow around its belly are like ice pops. Galarian Darumaka absolutely love these berries.",
            cryUrl: "cries/459.mp3",
            japaneseName: "Yukikaburi"
        },
        {
            name: "Abomasnow",
            imageUrl: "images/460Abomasnow.png",
            number: "032",
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
            dexEntry: "This Pokémon is known to bring blizzards. A shake of its massive body is enough to cause whiteout conditions.",
            cryUrl: "cries/460.mp3",
            japaneseName: "Yukinooh"
        },
        {
            name: "Phantump",
            imageUrl: "images/708Phantump.png",
            number: "033",
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
            dexEntry: "With a voice like a human child's, it cries out to lure adults deep into the forest, getting them lost among the trees.",
            cryUrl: "cries/708.mp3",
            japaneseName: "Bokurei"
        },
        {
            name: "Trevenant",
            imageUrl: "images/709Trevenant.png",
            number: "034",
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
            dexEntry: "Small roots that extend from the tips of this Pokémon's feet can tie into the trees of the forest and give Trevenant control over them.",
            cryUrl: "cries/709.mp3",
            japaneseName: "Ohrot"
        },
        {
            name: "Swablu",
            imageUrl: "images/333Swablu.png",
            number: "035",
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
            dexEntry: "Since Swablu looks like a cumulus cloud, foes can have a hard time finding it. Apparently its wings turned white over many generations.",
            cryUrl: "cries/333.mp3",
            japaneseName: "Tyltto"
        },
        {
            name: "Altaria",
            imageUrl: "images/334Altaria.png",
            number: "036",
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
            dexEntry: "This Pokémon has a kind disposition, but if it's provoked, it will threaten opponents with shrill cries before attacking them without mercy.",
            cryUrl: "cries/334.mp3",
            japaneseName: "Tyltalis"
        },
        {
            name: "Impidimp",
            imageUrl: "images/859Impidimp.png",
            number: "037",
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
            dexEntry: "It sneaks into people's homes, stealing things and feasting on the negative energy of the frustrated occupants.",
            cryUrl: "cries/859.mp3",
            japaneseName: "Beroba"
        },
        {
            name: "Morgrem",
            imageUrl: "images/860Morgrem.png",
            number: "038",
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
            dexEntry: "With sly cunning, it tries to lure people into the woods. Some believe it to have the power to make crops grow.",
            cryUrl: "cries/860.mp3",
            japaneseName: "Gimoh"
        },
        {
            name: "Grimmsnarl",
            imageUrl: "images/861Grimmsnarl.png",
            number: "039",
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
            dexEntry: "Its hairs work like muscle fibers. When its hairs unfurl, they latch on to opponents, ensnaring them as tentacles would.",
            cryUrl: "cries/861.mp3",
            japaneseName: "Ohlonge"
        },
        {
            name: "Hatenna",
            imageUrl: "images/856Hatenna.png",
            number: "040",
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
            dexEntry: "If this Pokémon senses a strong emotion, it will run away as fast as it can. It prefers areas without people.",
            cryUrl: "cries/856.mp3",
            japaneseName: "Mibrim"
        },
        {
            name: "Hattrem",
            imageUrl: "images/857Hattrem.png",
            number: "041",
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
            dexEntry: "Using the braids on its head, it pummels foes to get them to quiet down. One blow from those braids would knock out a professional boxer.",
            cryUrl: "cries/857.mp3",
            japaneseName: "Tebrim"
        },
        {
            name: "Hatterene",
            imageUrl: "images/858Hatterene.png",
            number: "042",
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
            dexEntry: "If you're too loud around it, you risk being torn apart by the claws on its tentacle. This Pokémon is also known as the Forest Witch.",
            cryUrl: "cries/858.mp3",
            japaneseName: "Brimuon"
        },
        {
            name: "Cleffa",
            imageUrl: "images/173Cleffa.png",
            number: "043",
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
            dexEntry: "Because of its unusual, starlike silhouette, people believe that it came here on a meteor.",
            cryUrl: "cries/173.mp3",
            japaneseName: "Py"
        },
        {
            name: "Clefairy",
            imageUrl: "images/035Clefairy.png",
            number: "044",
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
            dexEntry: "Its adorable behavior and cry make it highly popular. However, this cute Pokémon is rarely found.",
            cryUrl: "cries/035.mp3",
            japaneseName: "Pippi"
        },
        {
            name: "Clefable",
            imageUrl: "images/036Clefable.png",
            number: "045",
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
            dexEntry: "Their ears are sensitive enough to hear a pin drop from over a mile away, so they're usually found in quiet places.",
            cryUrl: "cries/036.mp3",
            japaneseName: "Pixy"
        },
        {
            name: "Mimikyu",
            imageUrl: "images/778Mimikyu.png",
            number: "046",
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
            dexEntry: "There was a scientist who peeked under Mimikyu's old rag in the name of research. The scientist died of a mysterious disease.",
            cryUrl: "cries/778.mp3",
            japaneseName: "Mimikkyu"
        },
        {
            name: "Spiritomb",
            imageUrl: "images/442Spiritomb.png",
            number: "047",
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
            dexEntry: "All Spiritomb's mischief and misdeeds compelled a traveler to use a mysterious spell to bind Spiritomb to an odd keystone.",
            cryUrl: "cries/442.mp3",
            japaneseName: "Mikaruge"
        },
        {
            name: "Litwick",
            imageUrl: "images/607Litwick.png",
            number: "048",
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
            dexEntry: "The younger the life this Pokémon absorbs, the brighter and eerier the flame on its head burns.",
            cryUrl: "cries/607.mp3",
            japaneseName: "Hitomoshi"
        },
        {
            name: "Lampent",
            imageUrl: "images/608Lampent.png",
            number: "049",
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
            dexEntry: "It lurks in cities, pretending to be a lamp. Once it finds someone whose death is near, it will trail quietly after them.",
            cryUrl: "cries/608.mp3",
            japaneseName: "Lampler"
        },
        {
            name: "Chandelure",
            imageUrl: "images/609Chandelure.png",
            number: "050",
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
            dexEntry: "In homes illuminated by Chandelure instead of lights, funerals were a constant occurrence— or so it's said.",
            cryUrl: "cries/609.mp3",
            japaneseName: "Chandela"
        },
        {
            name: "Gothita",
            imageUrl: "images/574Gothita.png",
            number: "051",
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
            dexEntry: "Even when nobody seems to be around, Gothita can still be heard making a muted cry. Many believe it's speaking to something only it can see.",
            cryUrl: "cries/574.mp3",
            japaneseName: "Gothimu"
        },
        {
            name: "Gothorita",
            imageUrl: "images/575Gothorita.png",
            number: "052",
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
            dexEntry: "On nights when the stars shine, this Pokémon's psychic power is at its strongest. It's unknown just what link Gothorita has to the greater universe.",
            cryUrl: "cries/575.mp3",
            japaneseName: "Gothimiru"
        },
        {
            name: "Gothitelle",
            imageUrl: "images/576Gothitelle.png",
            number: "053",
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
            dexEntry: "A criminal who was shown his fate by a Gothitelle went missing that same day and was never seen again.",
            cryUrl: "cries/576.mp3",
            japaneseName: "Gothiruselle"
        },
        {
            name: "Solosis",
            imageUrl: "images/577Solosis.png",
            number: "054",
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
            dexEntry: "Many say that the special liquid covering this Pokémon's body would allow it to survive in the vacuum of space.",
            cryUrl: "cries/577.mp3",
            japaneseName: "Uniran"
        },
        {
            name: "Duosion",
            imageUrl: "images/578Duosion.png",
            number: "055",
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
            dexEntry: "Its brain has split into two, and the two halves rarely think alike. Its actions are utterly unpredictable.",
            cryUrl: "cries/578.mp3",
            japaneseName: "Doublan"
        },
        {
            name: "Reuniclus",
            imageUrl: "images/579Reuniclus.png",
            number: "056",
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
            dexEntry: "It's said that drinking the liquid surrounding Reuniclus grants wisdom. Problem is, the liquid is highly toxic to anything besides Reuniclus itself.",
            cryUrl: "cries/579.mp3",
            japaneseName: "Lanculus"
        },
        {
            name: "Timburr",
            imageUrl: "images/532Timburr.png",
            number: "057",
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
            dexEntry: "Timburr that have started carrying logs that are about three times their size are nearly ready to evolve.",
            cryUrl: "cries/532.mp3",
            japaneseName: "Dokkorer"
        },
        {
            name: "Gurdurr",
            imageUrl: "images/533Gurdurr.png",
            number: "058",
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
            dexEntry: "Gurdurr excels at demolition—construction is not its forte. In any case, there's skill in the way this Pokémon wields its metal beam.",
            cryUrl: "cries/533.mp3",
            japaneseName: "Dotekkotsu"
        },
        {
            name: "Conkeldurr",
            imageUrl: "images/534Conkeldurr.png",
            number: "059",
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
            dexEntry: "When going all out, this Pokémon throws aside its concrete pillars and leaps at opponents to pummel them with its fists.",
            cryUrl: "cries/534.mp3",
            japaneseName: "Roubushin"
        },
        {
            name: "Barboach",
            imageUrl: "images/339Barboach.png",
            number: "060",
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
            dexEntry: "It probes muddy riverbeds with its two long whiskers. A slimy film protects its body.",
            cryUrl: "cries/339.mp3",
            japaneseName: "Dojoach"
        },
        {
            name: "Whiscash",
            imageUrl: "images/340Whiscash.png",
            number: "061",
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
            dexEntry: "It claims a large swamp to itself. If a foe comes near it, it sets off tremors by thrashing around.",
            cryUrl: "cries/340.mp3",
            japaneseName: "Namazun"
        },
        {
            name: "Magikarp",
            imageUrl: "images/129Magikarp.png",
            number: "062",
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
            dexEntry: "This weak and pathetic Pokémon gets easily pushed along rivers when there are strong currents.",
            cryUrl: "cries/129.mp3",
            japaneseName: "Koiking"
        },
        {
            name: "Gyarados",
            imageUrl: "images/130Gyarados.png",
            number: "063",
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
            name: "Basculin",
            imageUrl: "images/550Basculin.png",
            number: "064",
            type: ["Water"],
            category: "Hostile",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "39.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 18.0,
            dexEntry: "In the past, it often appeared on the dinner table. The meat of red-striped Basculin is on the fatty side, and it's more popular with the youth.",
            cryUrl: "cries/550.mp3",
            japaneseName: "Bassrao"
        },
        {
            name: "Nidoran♀",
            imageUrl: "images/029NidoranF.png",
            number: "065",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "15.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.0,
            dexEntry: "It uses its hard incisor teeth to crush and eat berries. The tip of a female Nidoran's horn is a bit more rounded than the tip of a male's horn.",
            cryUrl: "cries/029.mp3",
            japaneseName: "Nidoran♀"
        },
        {
            name: "Nidorina",
            imageUrl: "images/030Nidorina.png",
            number: "066",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "44.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 20.0,
            dexEntry: "If the group is threatened, these Pokémon will band together to assault enemies with a chorus of ultrasonic waves.",
            cryUrl: "cries/030.mp3",
            japaneseName: "Nidorina"
        },
        {
            name: "Nidoqueen",
            imageUrl: "images/031Nidoqueen.png",
            number: "067",
            type: ["Poison", "Ground"],
            category: "Drill",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "132.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 60.0,
            dexEntry: "It pacifies offspring by placing them in the gaps between the spines on its back. The spines will never secrete poison while young are present.",
            cryUrl: "cries/031.mp3",
            japaneseName: "Nidoqueen"
        },
        {
            name: "Nidoran♂",
            imageUrl: "images/032NidoranM.png",
            number: "068",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "01",
            height: "1'08\"",
            weight: "19.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.0,
            dexEntry: "Small but brave, this Pokémon will hold its ground and even risk its life in battle to protect the female it's friendly with.",
            cryUrl: "cries/032.mp3",
            japaneseName: "Nidoran♂"
        },
        {
            name: "Nidorino",
            imageUrl: "images/033Nidorino.png",
            number: "069",
            type: ["Poison"],
            category: "Poison Pin",
            region: "Kanto",
            generation: "01",
            height: "2'11\"",
            weight: "43.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 19.5,
            dexEntry: "It's nervous and quick to act aggressively. The potency of its poison increases along with the level of adrenaline present in its body.",
            cryUrl: "cries/033.mp3",
            japaneseName: "Nidorino"
        },
        {
            name: "Nidoking",
            imageUrl: "images/034Nidoking.png",
            number: "070",
            type: ["Poison", "Ground"],
            category: "Drill",
            region: "Kanto",
            generation: "01",
            height: "4'07\"",
            weight: "136.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 62.0,
            dexEntry: "Nidoking prides itself on its strength. It's forceful and spirited in battle, making use of its thick tail and diamond-crushing horn.",
            cryUrl: "cries/034.mp3",
            japaneseName: "Nidoking"
        },
        {
            name: "Zigzagoon",
            imageUrl: "forms/263Zigzagoon-Galar.png",
            number: "071",
            type: ["Dark", "Normal"],
            category: "Tiny Raccoon",
            region: "Hoenn",
            generation: "03",
            height: "1'04\"",
            weight: "38.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 17.5,
            dexEntry: "Thought to be the oldest form of Zigzagoon, it moves in zigzags and wreaks havoc upon its surroundings.",
            cryUrl: "cries/263.mp3",
            japaneseName: "Jiguzaguma"
        },
        {
            name: "Linoone",
            imageUrl: "forms/264Linoone-Galar.png",
            number: "072",
            type: ["Dark", "Normal"],
            category: "Rushing",
            region: "Hoenn",
            generation: "03",
            height: "1'08\"",
            weight: "71.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 32.5,
            dexEntry: "This very aggressive Pokémon will recklessly challenge opponents stronger than itself.",
            cryUrl: "cries/264.mp3",
            japaneseName: "Massuguma"
        },
        {
            name: "Obstagoon",
            imageUrl: "images/862Obstagoon.png",
            number: "073",
            type: ["Dark", "Normal"],
            category: "Blocking",
            region: "Galar",
            generation: "08",
            height: "5'03\"",
            weight: "101.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 46.0,
            dexEntry: "It evolved after experiencing numerous fights. While crossing its arms, it lets out a shout that would make any opponent flinch.",
            cryUrl: "cries/862.mp3",
            japaneseName: "Tachifusaguma"
        },
        {
            name: "Eevee",
            imageUrl: "images/133Eevee.png",
            number: "074",
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
            dexEntry: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions.",
            cryUrl: "cries/133.mp3",
            japaneseName: "Eievui"
        },
        {
            name: "Vaporeon",
            imageUrl: "images/134Vaporeon.png",
            number: "075",
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
            dexEntry: "Its body's cellular structure is similar to the molecular composition of water. It can melt invisibly in water.",
            cryUrl: "cries/134.mp3",
            japaneseName: "Showers"
        },
        {
            name: "Jolteon",
            imageUrl: "images/135Jolteon.png",
            number: "076",
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
            dexEntry: "It accumulates negative ions in the atmosphere to blast out 10,000-volt lightning bolts.",
            cryUrl: "cries/135.mp3",
            japaneseName: "Thunders"
        },
        {
            name: "Flareon",
            imageUrl: "images/136Flareon.png",
            number: "077",
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
            dexEntry: "It stores some of the air it inhales in its internal flame pouch, which heats it to over 3,000 degrees Fahrenheit.",
            cryUrl: "cries/136.mp3",
            japaneseName: "Booster"
        },
        {
            name: "Umbreon",
            imageUrl: "images/197Umbreon.png",
            number: "078",
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
            dexEntry: "On the night of a full moon, or when it gets excited, the ring patterns on its body glow yellow.",
            cryUrl: "cries/197.mp3",
            japaneseName: "Blacky"
        },
        {
            name: "Espeon",
            imageUrl: "images/196Espeon.png",
            number: "079",
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
            dexEntry: "It unleashes psychic power from the orb on its forehead. When its power is exhausted, the orb grows dull and dark.",
            cryUrl: "cries/196.mp3",
            japaneseName: "Eifie"
        },
        {
            name: "Glaceon",
            imageUrl: "images/471Glaceon.png",
            number: "080",
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
            dexEntry: "The coldness emanating from Glaceon causes powdery snow to form, making it quite a popular Pokémon at ski resorts.",
            cryUrl: "cries/471.mp3",
            japaneseName: "Glacia"
        },
        {
            name: "Leafeon",
            imageUrl: "images/470Leafeon.png",
            number: "081",
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
            dexEntry: "This Pokémon's tail is blade sharp, with a fantastic cutting edge that can slice right though large trees.",
            cryUrl: "cries/470.mp3",
            japaneseName: "Leafia"
        },
        {
            name: "Sylveon",
            imageUrl: "images/700Sylveon.png",
            number: "082",
            type: ["Fairy"],
            category: "Intertwining",
            region: "Kalos",
            generation: "06",
            height: "3'03\"",
            weight: "51.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 23.5,
            dexEntry: "There's a Galarian fairy tale that describes a beautiful Sylveon vanquishing a dreadful dragon Pokémon.",
            cryUrl: "cries/700.mp3",
            japaneseName: "Nymphia"
        },
        {
            name: "Tyrunt",
            imageUrl: "images/696Tyrunt.png",
            number: "083",
            type: ["Rock", "Dragon"],
            category: "Royal Heir",
            region: "Kalos",
            generation: "06",
            height: "2'07\"",
            weight: "57.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 26.0,
            dexEntry: "This Pokémon is selfish and likes to be pampered. It can also inflict grievous wounds on its Trainer just by playing around.",
            cryUrl: "cries/696.mp3",
            japaneseName: "Chigoras"
        },
        {
            name: "Tyrantrum",
            imageUrl: "images/697Tyrantrum.png",
            number: "084",
            type: ["Rock", "Dragon"],
            category: "Despot",
            region: "Kalos",
            generation: "06",
            height: "8'02\"",
            weight: "595.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 270.0,
            dexEntry: "A single bite of Tyrantrum's massive jaws will demolish a car. This Pokémon was the king of the ancient world.",
            cryUrl: "cries/697.mp3",
            japaneseName: "Gachigoras"
        },
        {
            name: "Amaura",
            imageUrl: "images/698Amaura.png",
            number: "085",
            type: ["Rock", "Ice"],
            category: "Tundra",
            region: "Kalos",
            generation: "06",
            height: "4'03\"",
            weight: "55.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 25.2,
            dexEntry: "Amaura is an ancient Pokémon that has gone extinct. Specimens of this species can sometimes be found frozen in ice.",
            cryUrl: "cries/698.mp3",
            japaneseName: "Amarus"
        },
        {
            name: "Aurorus",
            imageUrl: "images/699Aurorus.png",
            number: "086",
            type: ["Rock", "Ice"],
            category: "Tundra",
            region: "Kalos",
            generation: "06",
            height: "8'10\"",
            weight: "496.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.7,
            metricWeight: 225.0,
            dexEntry: "When gripped by rage, Aurorus will emanate freezing air, covering everything around it in ice.",
            cryUrl: "cries/699.mp3",
            japaneseName: "Amaruruga"
        },
        {
            name: "Bronzor",
            imageUrl: "images/436Bronzor.png",
            number: "087",
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
            dexEntry: "Polishing Bronzor to a shine makes its surface reflect the truth, according to common lore. Be that as it may, Bronzor hates being polished.",
            cryUrl: "cries/436.mp3",
            japaneseName: "Dohmirror"
        },
        {
            name: "Bronzong",
            imageUrl: "images/437Bronzong.png",
            number: "088",
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
            dexEntry: "Many scientists suspect that this Pokémon originated outside the Galar region, based on the patterns on its body.",
            cryUrl: "cries/437.mp3",
            japaneseName: "Dohtakun"
        },
        {
            name: "Stonjourner",
            imageUrl: "images/874Stonjourner.png",
            number: "089",
            type: ["Rock"],
            category: "Big Rock",
            region: "Galar",
            generation: "08",
            height: "8'02\"",
            weight: "1146.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.5,
            metricWeight: 520.0,
            dexEntry: "Once a year, on a specific date and at a specific time, they gather out of nowhere and form up in a circle.",
            cryUrl: "cries/874.mp3",
            japaneseName: "Ishihengin"
        },
        {
            name: "Eiscue",
            imageUrl: "images/875Eiscue.png",
            number: "090",
            type: ["Ice"],
            category: "Penguin",
            region: "Galar",
            generation: "08",
            height: "4'07\"",
            weight: "196.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 89.0,
            dexEntry: "This Pokémon keeps its heat-sensitive head cool with ice. It fishes for its food, dangling its single hair into the sea to lure in prey.",
            cryUrl: "cries/875.mp3",
            japaneseName: "Korippo"
        },
        {
            name: "Dewpider",
            imageUrl: "images/751Dewpider.png",
            number: "091",
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
            dexEntry: "Dewpider normally lives underwater. When it comes onto land in search of food, it takes water with it in the form of a bubble on its head.",
            cryUrl: "cries/751.mp3",
            japaneseName: "Shizukumo"
        },
        {
            name: "Araquanid",
            imageUrl: "images/752Araquanid.png",
            number: "092",
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
            dexEntry: "It acts as a caretaker for Dewpider, putting them inside its bubble and letting them eat any leftover food.",
            cryUrl: "cries/752.mp3",
            japaneseName: "Onishizukumo"
        },
        {
            name: "Joltik",
            imageUrl: "images/595Joltik.png",
            number: "093",
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
            dexEntry: "Joltik latch on to other Pokémon and suck out static electricity. They're often found sticking to Yamper's hindquarters.",
            cryUrl: "cries/595.mp3",
            japaneseName: "Bachuru"
        },
        {
            name: "Galvantula",
            imageUrl: "images/596Galvantula.png",
            number: "094",
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
            dexEntry: "It lays traps of electrified threads near the nests of bird Pokémon, aiming to snare chicks that are not yet good at flying.",
            cryUrl: "cries/596.mp3",
            japaneseName: "Dentula"
        },
        {
            name: "Karrablast",
            imageUrl: "images/588Karrablast.png",
            number: "095",
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
            dexEntry: "It spits a liquid from its mouth to melt through Shelmet's shell. Karrablast doesn't eat the shell— it eats only the contents.",
            cryUrl: "cries/588.mp3",
            japaneseName: "Kaburumo"
        },
        {
            name: "Escavalier",
            imageUrl: "images/589Escavalier.png",
            number: "096",
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
            dexEntry: "It charges its enemies, lances at the ready. An image of one of its duels is captured in a famous painting of Escavalier clashing with Sirfetch'd.",
            cryUrl: "cries/589.mp3",
            japaneseName: "Chevargo"
        },
        {
            name: "Shelmet",
            imageUrl: "images/616Shelmet.png",
            number: "097",
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
            dexEntry: "It has a strange physiology that responds to electricity. When together with Karrablast, Shelmet evolves for some reason.",
            cryUrl: "cries/616.mp3",
            japaneseName: "Chobomaki"
        },
        {
            name: "Accelgor",
            imageUrl: "images/617Accelgor.png",
            number: "098",
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
            dexEntry: "Discarding its shell made it nimble. To keep itself from dehydrating, it wraps its body in bands of membrane.",
            cryUrl: "cries/617.mp3",
            japaneseName: "Agilder"
        },
        {
            name: "Sizzlipede",
            imageUrl: "images/850Sizzlipede.png",
            number: "099",
            type: ["Fire", "Bug"],
            category: "Radiator",
            region: "Galar",
            generation: "08",
            height: "2'04\"",
            weight: "2.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 1.0,
            dexEntry: "It wraps prey up with its heated body, cooking them in its coils. Once they're well-done, it will voraciously nibble them down to the last morsel.",
            cryUrl: "cries/850.mp3",
            japaneseName: "Yakude"
        },
        {
            name: "Centiskorch",
            imageUrl: "images/851Centiskorch.png",
            number: "100",
            type: ["Fire", "Bug"],
            category: "Radiator",
            region: "Galar",
            generation: "08",
            height: "9'10\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.0,
            metricWeight: 120.0,
            dexEntry: "While its burning body is already dangerous on its own, this excessively hostile Pokémon also has large and very sharp fangs.",
            cryUrl: "cries/851.mp3",
            japaneseName: "Maruyakude"
        },
        {
            name: "Durant",
            imageUrl: "images/632Durant.png",
            number: "101",
            type: ["Bug", "Steel"],
            category: "Iron Ant",
            region: "Unova",
            generation: "05",
            height: "1'00\"",
            weight: "72.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 33.0,
            dexEntry: "With their large mandibles, these Pokémon can crunch their way through rock. They work together to protect their eggs from Sandaconda.",
            cryUrl: "cries/632.mp3",
            japaneseName: "Aiant"
        },
        {
            name: "Heatmor",
            imageUrl: "images/631Heatmor.png",
            number: "102",
            type: ["Fire"],
            category: "Anteater",
            region: "Unova",
            generation: "05",
            height: "4'07\"",
            weight: "127.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 58.0,
            dexEntry: "A flame serves as its tongue, melting through the hard shell of Durant so that Heatmor can devour their insides.",
            cryUrl: "cries/631.mp3",
            japaneseName: "Kuitaran"
        },
        {
            name: "Darumaka",
            imageUrl: "forms/554Darumaka-Galar.png",
            number: "103",
            type: ["Ice"],
            category: "Zen Charm",
            region: "Unova",
            generation: "05",
            height: "2'04\"",
            weight: "88.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 40.0,
            dexEntry: "The colder they get, the more energetic they are. They freeze their breath to make snowballs, using them as ammo for playful snowball fights.",
            cryUrl: "cries/554.mp3",
            japaneseName: "Darumakka"
        },
        {
            name: "Darmanitan",
            imageUrl: "forms/555Darmanitan-Galar.png",
            number: "104",
            type: ["Ice"],
            category: "Zen Charm",
            region: "Unova",
            generation: "05",
            height: "5'07\"",
            weight: "264.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 120.0,
            dexEntry: "Though it has a gentle disposition, it's also very strong. It will quickly freeze the snowball on its head before going for a headbutt.",
            cryUrl: "cries/555.mp3",
            japaneseName: "Hihidaruma"
        },
        {
            name: "Ponyta",
            imageUrl: "forms/077Ponyta-Galar.png",
            number: "105",
            type: ["Psychic"],
            category: "Unique Horn",
            region: "Kanto",
            generation: "01",
            height: "2'07\"",
            weight: "52.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 24.0,
            dexEntry: "This Pokémon will look into your eyes and read the contents of your heart. If it finds evil there, it promptly hides away.",
            cryUrl: "cries/077.mp3",
            japaneseName: "Ponyta"
        },
        {
            name: "Rapidash",
            imageUrl: "forms/078Rapidash-Galar.png",
            number: "106",
            type: ["Psychic", "Fairy"],
            category: "Unique Horn",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "176.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 80.0,
            dexEntry: "Brave and prideful, this Pokémon dashes airily through the forest, its steps aided by the psychic power stored in the fur on its fetlocks.",
            cryUrl: "cries/078.mp3",
            japaneseName: "Gallop"
        },
        {
            name: "Absol",
            imageUrl: "images/359Absol.png",
            number: "107",
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
            dexEntry: "Because of this Pokémon's ability to detect danger, people mistook Absol as a bringer of doom.",
            cryUrl: "cries/359.mp3",
            japaneseName: "Absol"
        },
        {
            name: "Cufant",
            imageUrl: "images/878Cufant.png",
            number: "108",
            type: ["Steel"],
            category: "Copperderm",
            region: "Galar",
            generation: "08",
            height: "3'11\"",
            weight: "220.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 100.0,
            dexEntry: "If a job requires serious strength, this Pokémon will excel at it. Its copper body tarnishes in the rain, turning a vibrant green color.",
            cryUrl: "cries/878.mp3",
            japaneseName: "Zoudou"
        },
        {
            name: "Copperajah",
            imageUrl: "images/879Copperajah.png",
            number: "109",
            type: ["Steel"],
            category: "Copperderm",
            region: "Galar",
            generation: "08",
            height: "9'10\"",
            weight: "1433.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.0,
            metricWeight: 650.0,
            dexEntry: "These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder.",
            cryUrl: "cries/879.mp3",
            japaneseName: "Daioudou"
        },
        {
            name: "Dreepy",
            imageUrl: "images/885Dreepy.png",
            number: "110",
            type: ["Dragon", "Ghost"],
            category: "Lingering",
            region: "Galar",
            generation: "08",
            height: "1'08\"",
            weight: "4.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.0,
            dexEntry: "If this weak Pokémon is by itself, a mere child could defeat it. But if Dreepy has friends to help it train, it can evolve and become much stronger.",
            cryUrl: "cries/885.mp3",
            japaneseName: "Dorameshiya"
        },
        {
            name: "Drakloak",
            imageUrl: "images/886Drakloak.png",
            number: "111",
            type: ["Dragon", "Ghost"],
            category: "Caretaker",
            region: "Galar",
            generation: "08",
            height: "4'07\"",
            weight: "24.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 11.0,
            dexEntry: "Without a Dreepy to place on its head and care for, it gets so uneasy it'll try to substitute any Pokémon it finds for the missing Dreepy.",
            cryUrl: "cries/886.mp3",
            japaneseName: "Doronch"
        },
        {
            name: "Dragapult",
            imageUrl: "images/887Dragapult.png",
            number: "112",
            type: ["Dragon", "Ghost"],
            category: "Stealth",
            region: "Galar",
            generation: "08",
            height: "9'10\"",
            weight: "110.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.0,
            metricWeight: 50.0,
            dexEntry: "Apparently the Dreepy inside Dragapult's horns eagerly look forward to being launched out at Mach speeds.",
            cryUrl: "cries/887.mp3",
            japaneseName: "Dorapult"
        },
        {
            name: "Bagon",
            imageUrl: "images/371Bagon.png",
            number: "113",
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
            dexEntry: "Bagon is a solitary Pokémon that doesn't form groups with others of its kind. It also has a head hard enough to cleave a boulder in one strike.",
            cryUrl: "cries/371.mp3",
            japaneseName: "Tatsubay"
        },
        {
            name: "Shelgon",
            imageUrl: "images/372Shelgon.png",
            number: "114",
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
            dexEntry: "Shelgon ignores its hunger entirely, never eating any food. Apparently, Shelgon will evolve once all its energy stores are used up.",
            cryUrl: "cries/372.mp3",
            japaneseName: "Komoruu"
        },
        {
            name: "Salamence",
            imageUrl: "images/373Salamence.png",
            number: "115",
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
            dexEntry: "While basking in the joy of flight generally keeps this Pokémon in high spirits, Salamence turns into an uncontrollable menace if something angers it.",
            cryUrl: "cries/373.mp3",
            japaneseName: "Bohmander"
        },
        {
            name: "Gible",
            imageUrl: "images/443Gible.png",
            number: "116",
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
            dexEntry: "Gible attacks anything that moves, and it drags whatever it catches into the crevice that is its lair. Despite the big mouth, Gible's stomach is small.",
            cryUrl: "cries/443.mp3",
            japaneseName: "Fukamaru"
        },
        {
            name: "Gabite",
            imageUrl: "images/444Gabite.png",
            number: "117",
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
            dexEntry: "Jewels are buried in the caves these Pokémon nest in, but you'll be torn apart by claws and fangs the moment you enter one of these caves.",
            cryUrl: "cries/444.mp3",
            japaneseName: "Gabite"
        },
        {
            name: "Garchomp",
            imageUrl: "images/445Garchomp.png",
            number: "118",
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
            dexEntry: "Garchomp is fast both underground and above. It can bring down prey and return to its den before its body has chilled from being outside.",
            cryUrl: "cries/445.mp3",
            japaneseName: "Gaburias"
        },
        {
            name: "Druddigon",
            imageUrl: "images/621Druddigon.png",
            number: "119",
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
            dexEntry: "Druddigon are vicious and cunning. They take up residence in nests dug out by other Pokémon, treating the stolen nests as their own lairs.",
            cryUrl: "cries/621.mp3",
            japaneseName: "Crimgan"
        },
        {
            name: "Delibird",
            imageUrl: "images/225Delibird.png",
            number: "120",
            type: ["Ice", "Flying"],
            category: "Delivery",
            region: "Johto",
            generation: "02",
            height: "2'11\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.9,
            metricWeight: 16.0,
            dexEntry: "It has a generous habit of sharing its food with people and Pokémon, so it's always scrounging around for more food.",
            cryUrl: "cries/225.mp3",
            japaneseName: "Delibird"
        },
        {
            name: "Cubchoo",
            imageUrl: "images/613Cubchoo.png",
            number: "121",
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
            dexEntry: "It sniffles before performing a move, using its frosty snot to provide an icy element to any move that needs it.",
            cryUrl: "cries/613.mp3",
            japaneseName: "Kumasyun"
        },
        {
            name: "Beartic",
            imageUrl: "images/614Beartic.png",
            number: "122",
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
            dexEntry: "It swims energetically through frigid seas. When it gets tired, it freezes the seawater with its breath so it can rest on the ice.",
            cryUrl: "cries/614.mp3",
            japaneseName: "Tunbear"
        },
        {
            name: "Omanyte",
            imageUrl: "images/138Omanyte.png",
            number: "123",
            type: ["Rock", "Water"],
            category: "Spiral",
            region: "Kanto",
            generation: "01",
            height: "1'04\"",
            weight: "16.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 7.5,
            dexEntry: "This Pokémon is a member of an ancient, extinct species. Omanyte paddles through water with its 10 tentacles, looking like it's just drifting along.",
            cryUrl: "cries/138.mp3",
            japaneseName: "Omnite"
        },
        {
            name: "Omastar",
            imageUrl: "images/139Omastar.png",
            number: "124",
            type: ["Rock", "Water"],
            category: "Spiral",
            region: "Kanto",
            generation: "01",
            height: "3'03\"",
            weight: "77.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 35.0,
            dexEntry: "Omastar's sharp fangs could crush rock, but the Pokémon can attack only the prey that come within reach of its tentacles.",
            cryUrl: "cries/139.mp3",
            japaneseName: "Omstar"
        },
        {
            name: "Kabuto",
            imageUrl: "images/140Kabuto.png",
            number: "125",
            type: ["Rock", "Water"],
            category: "Shellfish",
            region: "Kanto",
            generation: "01",
            height: "1'08\"",
            weight: "25.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 11.5,
            dexEntry: "While some say this species has gone extinct, Kabuto sightings are apparently fairly common in some places.",
            cryUrl: "cries/140.mp3",
            japaneseName: "Kabuto"
        },
        {
            name: "Kabutops",
            imageUrl: "images/141Kabutops.png",
            number: "126",
            type: ["Rock", "Water"],
            category: "Shellfish",
            region: "Kanto",
            generation: "01",
            height: "4'03\"",
            weight: "89.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.3,
            metricWeight: 40.5,
            dexEntry: "The cause behind the extinction of this species is unknown. Kabutops were aggressive Pokémon that inhabited warm seas.",
            cryUrl: "cries/141.mp3",
            japaneseName: "Kabutops"
        },
        {
            name: "Aerodactyl",
            imageUrl: "images/142Aerodactyl.png",
            number: "127",
            type: ["Rock", "Flying"],
            category: "Fossil",
            region: "Kanto",
            generation: "01",
            height: "5'11\"",
            weight: "130.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 59.0,
            dexEntry: "Aerodactyl's sawlike fangs can shred skin to tatters—even the skin of Steel-type Pokémon.",
            cryUrl: "cries/142.mp3",
            japaneseName: "Ptera"
        },
        {
            name: "Carbink",
            imageUrl: "images/703Carbink.png",
            number: "128",
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
            dexEntry: "It's said that somewhere in the world, there's a mineral vein housing a large pack of slumbering Carbink. It's also said that this pack has a queen.",
            cryUrl: "cries/703.mp3",
            japaneseName: "Melecie"
        },
        {
            name: "Beldum",
            imageUrl: "images/374Beldum.png",
            number: "129",
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
            dexEntry: "The cells in this Pokémon's body are composed of magnetic material. Instead of blood, magnetic forces flow through Beldum's body.",
            cryUrl: "cries/374.mp3",
            japaneseName: "Dumbber"
        },
        {
            name: "Metang",
            imageUrl: "images/375Metang.png",
            number: "130",
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
            dexEntry: "Using magnetic forces to stay aloft, this Pokémon flies at high speeds, weaving through harsh mountain terrain in pursuit of prey.",
            cryUrl: "cries/375.mp3",
            japaneseName: "Metang"
        },
        {
            name: "Metagross",
            imageUrl: "images/376Metagross.png",
            number: "131",
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
            dexEntry: "Metagross is the result of the fusion of two Metang. This Pokémon defeats its opponents through use of its supercomputer-level brain.",
            cryUrl: "cries/376.mp3",
            japaneseName: "Metagross"
        },
        {
            name: "Sinistea",
            imageUrl: "images/854Sinistea.png",
            number: "132",
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
            dexEntry: "The teacup in which this Pokémon makes its home is a famous piece of antique tableware. Many forgeries are in circulation.",
            cryUrl: "cries/854.mp3",
            japaneseName: "Yabacha"
        },
        {
            name: "Polteageist",
            imageUrl: "images/855Polteageist.png",
            number: "133",
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
            dexEntry: "Leaving leftover black tea unattended is asking for this Pokémon to come along and pour itself into it, turning the tea into a new Polteageist.",
            cryUrl: "cries/855.mp3",
            japaneseName: "Potdeath"
        },
        {
            name: "Riolu",
            imageUrl: "images/447Riolu.png",
            number: "134",
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
            dexEntry: "It can use waves called auras to gauge how others are feeling. These same waves can also tell this Pokémon about the state of the environment.",
            cryUrl: "cries/447.mp3",
            japaneseName: "Riolu"
        },
        {
            name: "Lucario",
            imageUrl: "images/448Lucario.png",
            number: "135",
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
            dexEntry: "It can tell what people are thinking. Only Trainers who have justice in their hearts can earn this Pokémon's trust.",
            cryUrl: "cries/448.mp3",
            japaneseName: "Lucario"
        },
        {
            name: "Deino",
            imageUrl: "images/633Deino.png",
            number: "136",
            type: ["Dark", "Dragon"],
            category: "Irate",
            region: "Unova",
            generation: "05",
            height: "2'07\"",
            weight: "38.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 17.3,
            dexEntry: "Because it can't see, this Pokémon is constantly biting at everything it touches, trying to keep track of its surroundings.",
            cryUrl: "cries/633.mp3",
            japaneseName: "Monozu"
        },
        {
            name: "Zweilous",
            imageUrl: "images/634Zweilous.png",
            number: "137",
            type: ["Dark", "Dragon"],
            category: "Hostile",
            region: "Unova",
            generation: "05",
            height: "4'07\"",
            weight: "110.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 50.0,
            dexEntry: "Their two heads will fight each other over a single piece of food. Zweilous are covered in scars even without battling others.",
            cryUrl: "cries/634.mp3",
            japaneseName: "Dihead"
        },
        {
            name: "Hydreigon",
            imageUrl: "images/635Hydreigon.png",
            number: "138",
            type: ["Dark", "Dragon"],
            category: "Brutal",
            region: "Unova",
            generation: "05",
            height: "5'11\"",
            weight: "352.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 160.0,
            dexEntry: "The three heads take turns sinking their teeth into the opponent. Their attacks won't slow until their target goes down.",
            cryUrl: "cries/635.mp3",
            japaneseName: "Sazandora"
        },
        {
            name: "Larvitar",
            imageUrl: "images/246Larvitar.png",
            number: "139",
            type: ["Rock", "Ground"],
            category: "Rock Skin",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "158.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 72.0,
            dexEntry: "It feeds on soil. After it has eaten a large mountain, it will fall asleep so it can grow.",
            cryUrl: "cries/246.mp3",
            japaneseName: "Yogiras"
        },
        {
            name: "Pupitar",
            imageUrl: "images/247Pupitar.png",
            number: "140",
            type: ["Rock", "Ground"],
            category: "Hard Shell",
            region: "Johto",
            generation: "02",
            height: "3'11\"",
            weight: "335.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 152.0,
            dexEntry: "It will not stay still, even while it's a pupa. It already has arms and legs under its solid shell.",
            cryUrl: "cries/247.mp3",
            japaneseName: "Sanagiras"
        },
        {
            name: "Tyranitar",
            imageUrl: "images/248Tyranitar.png",
            number: "141",
            type: ["Rock", "Dark"],
            category: "Armor",
            region: "Johto",
            generation: "02",
            height: "6'07\"",
            weight: "445.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 202.0,
            dexEntry: "The quakes caused when it walks make even great mountains crumble and change the surrounding terrain.",
            cryUrl: "cries/248.mp3",
            japaneseName: "Bangiras"
        },
        {
            name: "Bergmite",
            imageUrl: "images/712Bergmite.png",
            number: "142",
            type: ["Ice"],
            category: "Ice Chunk",
            region: "Kalos",
            generation: "06",
            height: "3'03\"",
            weight: "219.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 99.5,
            dexEntry: "This Pokémon lives in areas of frigid cold. It secures itself to the back of an Avalugg by freezing its feet in place.",
            cryUrl: "cries/712.mp3",
            japaneseName: "Kachikohru"
        },
        {
            name: "Avalugg",
            imageUrl: "images/713Avalugg.png",
            number: "143",
            type: ["Ice"],
            category: "Iceberg",
            region: "Kalos",
            generation: "06",
            height: "6'07\"",
            weight: "1113.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 505.0,
            dexEntry: "As Avalugg moves about during the day, the cracks in its body deepen. The Pokémon's body returns to a pristine state overnight.",
            cryUrl: "cries/713.mp3",
            japaneseName: "Crebase"
        },
        {
            name: "Zubat",
            imageUrl: "images/041Zubat.png",
            number: "144",
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
            dexEntry: "Zubat live in caves, down where the sun's light won't reach. In the morning, they gather together to keep each other warm as they sleep.",
            cryUrl: "cries/041.mp3",
            japaneseName: "Zubat"
        },
        {
            name: "Golbat",
            imageUrl: "images/042Golbat.png",
            number: "145",
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
            dexEntry: "Its feet are tiny, but this Pokémon walks skillfully. It sneaks up on sleeping prey before sinking in its fangs and slurping up blood.",
            cryUrl: "cries/042.mp3",
            japaneseName: "Golbat"
        },
        {
            name: "Crobat",
            imageUrl: "images/169Crobat.png",
            number: "146",
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
            dexEntry: "This Pokémon flaps its four wings skillfully. Crobat can fly through cramped caves without needing to slow down.",
            cryUrl: "cries/169.mp3",
            japaneseName: "Crobat"
        },
        {
            name: "Tirtouga",
            imageUrl: "images/564Tirtouga.png",
            number: "147",
            type: ["Water", "Rock"],
            category: "Prototurtle",
            region: "Unova",
            generation: "05",
            height: "2'04\"",
            weight: "36.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.7,
            metricWeight: 16.5,
            dexEntry: "Tirtouga is considered to be the ancestor of many turtle Pokémon. It was restored to life from a fossil.",
            cryUrl: "cries/564.mp3",
            japaneseName: "Protoga"
        },
        {
            name: "Carracosta",
            imageUrl: "images/565Carracosta.png",
            number: "148",
            type: ["Water", "Rock"],
            category: "Prototurtle",
            region: "Unova",
            generation: "05",
            height: "3'11\"",
            weight: "178.6 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 81.0,
            dexEntry: "This Pokémon emerges from the water in search of prey despite the fact that it moves more slowly on land.",
            cryUrl: "cries/565.mp3",
            japaneseName: "Abagoura"
        },
        {
            name: "Archen",
            imageUrl: "images/566Archen.png",
            number: "149",
            type: ["Rock", "Flying"],
            category: "First Bird",
            region: "Unova",
            generation: "05",
            height: "1'08\"",
            weight: "20.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 9.5,
            dexEntry: "Archen is said to be the ancestor of bird Pokémon. It lived in treetops, eating berries and bug Pokémon.",
            cryUrl: "cries/566.mp3",
            japaneseName: "Archen"
        },
        {
            name: "Archeops",
            imageUrl: "images/567Archeops.png",
            number: "150",
            type: ["Rock", "Flying"],
            category: "First Bird",
            region: "Unova",
            generation: "05",
            height: "4'07\"",
            weight: "70.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.4,
            metricWeight: 32.0,
            dexEntry: "Though capable of flight, Archeops was apparently better at hunting on the ground.",
            cryUrl: "cries/567.mp3",
            japaneseName: "Archeos"
        },
        {
            name: "Baltoy",
            imageUrl: "images/343Baltoy.png",
            number: "151",
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
            dexEntry: "It was discovered in ancient ruins. While moving, it constantly spins. It stands on one foot even when asleep.",
            cryUrl: "cries/343.mp3",
            japaneseName: "Yajilon"
        },
        {
            name: "Claydol",
            imageUrl: "images/344Claydol.png",
            number: "152",
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
            dexEntry: "It appears to have been born from clay dolls made by ancient people. It uses telekinesis to float and move.",
            cryUrl: "cries/344.mp3",
            japaneseName: "Nendoll"
        },
        {
            name: "Golett",
            imageUrl: "images/622Golett.png",
            number: "153",
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
            dexEntry: "This Pokémon was created from clay. It received orders from its master many thousands of years ago, and it still follows those orders to this day.",
            cryUrl: "cries/622.mp3",
            japaneseName: "Gobit"
        },
        {
            name: "Golurk",
            imageUrl: "images/623Golurk.png",
            number: "154",
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
            dexEntry: "There's a theory that inside Golurk is a perpetual motion machine that produces limitless energy, but this belief hasn't been proven.",
            cryUrl: "cries/623.mp3",
            japaneseName: "Goloog"
        },
        {
            name: "Yamper",
            imageUrl: "images/835Yamper.png",
            number: "155",
            type: ["Electric"],
            category: "Puppy",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "29.8 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 13.5,
            dexEntry: "This gluttonous Pokémon only assists people with their work because it wants treats. As it runs, it crackles with electricity.",
            cryUrl: "cries/835.mp3",
            japaneseName: "Wanpachi"
        },
        {
            name: "Boltund",
            imageUrl: "images/836Boltund.png",
            number: "156",
            type: ["Electric"],
            category: "Dog",
            region: "Galar",
            generation: "08",
            height: "3'03\"",
            weight: "75.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 34.0,
            dexEntry: "It sends electricity through its legs to boost their strength. Running at top speed, it easily breaks 50 mph.",
            cryUrl: "cries/836.mp3",
            japaneseName: "Pulsewan"
        },
        {
            name: "Morpeko",
            imageUrl: "images/877Morpeko.png",
            number: "157",
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
            dexEntry: "It carries electrically roasted seeds with it as if they're precious treasures. No matter how much it eats, it always gets hungry again in short order.",
            cryUrl: "cries/877.mp3",
            japaneseName: "Morpeko"
        },
        {
            name: "Pincurchin",
            imageUrl: "images/871Pincurchin.png",
            number: "158",
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
            dexEntry: "It stores electricity in each spine. Even if one gets broken off, it still continues to emit electricity for at least three hours.",
            cryUrl: "cries/871.mp3",
            japaneseName: "Bachinuni"
        },
        {
            name: "Spheal",
            imageUrl: "images/363Spheal.png",
            number: "159",
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
            dexEntry: "As it drifts among the waves, Spheal probes the sea. As soon as it spots prey, it informs the Walrein in its herd.",
            cryUrl: "cries/363.mp3",
            japaneseName: "Tamazarashi"
        },
        {
            name: "Sealeo",
            imageUrl: "images/364Sealeo.png",
            number: "160",
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
            dexEntry: "This Pokémon has a habit of spinning round things on its nose, whether those things are Poké Balls or Spheal.",
            cryUrl: "cries/364.mp3",
            japaneseName: "Todoggler"
        },
        {
            name: "Walrein",
            imageUrl: "images/365Walrein.png",
            number: "161",
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
            dexEntry: "Walrein's tusks keep growing throughout its life. Tusks broken in battle will grow back to their usual impressive size in a year.",
            cryUrl: "cries/365.mp3",
            japaneseName: "Todoseruga"
        },
        {
            name: "Dhelmise",
            imageUrl: "images/781Dhelmise.png",
            number: "162",
            type: ["Ghost", "Grass"],
            category: "Sea Creeper",
            region: "Alola",
            generation: "07",
            height: "12'10\"",
            weight: "463.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 3.9,
            metricWeight: 210.0,
            dexEntry: "After lowering its anchor, it waits for its prey. It catches large Wailord and drains their life-force.",
            cryUrl: "cries/781.mp3",
            japaneseName: "Dadarin"
        },
        {
            name: "Rookidee",
            imageUrl: "images/821Rookidee.png",
            number: "163",
            type: ["Flying"],
            category: "Tiny Bird",
            region: "Galar",
            generation: "08",
            height: "0'08\"",
            weight: "4.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.2,
            metricWeight: 1.8,
            dexEntry: "Jumping nimbly about, this small-bodied Pokémon takes advantage of even the slightest opportunity to disorient larger opponents.",
            cryUrl: "cries/821.mp3",
            japaneseName: "Kokogara"
        },
        {
            name: "Corvisquire",
            imageUrl: "images/822Corvisquire.png",
            number: "164",
            type: ["Flying"],
            category: "Raven",
            region: "Galar",
            generation: "08",
            height: "2'07\"",
            weight: "35.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.8,
            metricWeight: 16.0,
            dexEntry: "The lessons of many harsh battles have taught it how to accurately judge an opponent's strength.",
            cryUrl: "cries/822.mp3",
            japaneseName: "Aogarasu"
        },
        {
            name: "Corviknight",
            imageUrl: "images/823Corviknight.png",
            number: "165",
            type: ["Flying", "Steel"],
            category: "Raven",
            region: "Galar",
            generation: "08",
            height: "7'03\"",
            weight: "165.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 75.0,
            dexEntry: "With their great intellect and flying skills, these Pokémon very successfully act as the Galar region's airborne taxi service.",
            cryUrl: "cries/823.mp3",
            japaneseName: "Armorga"
        },
        {
            name: "Gossifleur",
            imageUrl: "images/829Gossifleur.png",
            number: "166",
            type: ["Grass"],
            category: "Flowering",
            region: "Galar",
            generation: "08",
            height: "1'04\"",
            weight: "4.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.4,
            metricWeight: 2.2,
            dexEntry: "It whirls around in the wind while singing a joyous song. This delightful display has charmed many into raising this Pokémon.",
            cryUrl: "cries/829.mp3",
            japaneseName: "Himenka"
        },
        {
            name: "Eldegoss",
            imageUrl: "images/830Eldegoss.png",
            number: "167",
            type: ["Grass"],
            category: "Cotton Bloom",
            region: "Galar",
            generation: "08",
            height: "1'08\"",
            weight: "5.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.5,
            metricWeight: 2.5,
            dexEntry: "The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty.",
            cryUrl: "cries/830.mp3",
            japaneseName: "Watashiraga"
        },
        {
            name: "Cottonee",
            imageUrl: "images/546Cottonee.png",
            number: "168",
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
            dexEntry: "Weaving together the cotton of both Cottonee and Eldegoss produces exquisite cloth that's highly prized by many luxury brands.",
            cryUrl: "cries/546.mp3",
            japaneseName: "Monmen"
        },
        {
            name: "Whimsicott",
            imageUrl: "images/547Whimsicott.png",
            number: "169",
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
            dexEntry: "As long as this Pokémon bathes in sunlight, its cotton keeps growing. If too much cotton fluff builds up, Whimsicott tears it off and scatters it.",
            cryUrl: "cries/547.mp3",
            japaneseName: "Elfuun"
        },
        {
            name: "Shuckle",
            imageUrl: "images/213Shuckle.png",
            number: "170",
            type: ["Bug", "Rock"],
            category: "Mold",
            region: "Johto",
            generation: "02",
            height: "2'00\"",
            weight: "45.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 20.5,
            dexEntry: "The berries stored in its vaselike shell eventually become a thick, pulpy juice.",
            cryUrl: "cries/213.mp3",
            japaneseName: "Tsubotsubo"
        },
        {
            name: "Indeedee",
            imageUrl: "images/876Indeedee.png",
            number: "171",
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
            dexEntry: "Through its horns, it can pick up on the emotions of creatures around it. Positive emotions are the source of its strength.",
            cryUrl: "cries/876.mp3",
            japaneseName: "Yessan"
        },
        {
            name: "Munchlax",
            imageUrl: "images/446Munchlax.png",
            number: "172",
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
            dexEntry: "It stores food beneath its fur. It might share just one bite, but only if it really trusts you.",
            cryUrl: "cries/446.mp3",
            japaneseName: "Gonbe"
        },
        {
            name: "Snorlax",
            imageUrl: "images/143Snorlax.png",
            number: "173",
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
            dexEntry: "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it.",
            cryUrl: "cries/143.mp3",
            japaneseName: "Kabigon"
        },
        {
            name: "Sableye",
            imageUrl: "images/302Sableye.png",
            number: "174",
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
            dexEntry: "It feeds on gemstone crystals. In darkness, its eyes sparkle with the glitter of jewels.",
            cryUrl: "cries/302.mp3",
            japaneseName: "Yamirami"
        },
        {
            name: "Mawile",
            imageUrl: "images/303Mawile.png",
            number: "175",
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
            dexEntry: "It chomps with its gaping mouth. Its huge jaws are actually steel horns that have been transformed.",
            cryUrl: "cries/303.mp3",
            japaneseName: "Kucheat"
        },
        {
            name: "Rolycoly",
            imageUrl: "images/837Rolycoly.png",
            number: "176",
            type: ["Rock"],
            category: "Coal",
            region: "Galar",
            generation: "08",
            height: "1'00\"",
            weight: "26.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.3,
            metricWeight: 12.0,
            dexEntry: "It can race around like a unicycle, even on rough, rocky terrain. Burning coal sustains it.",
            cryUrl: "cries/837.mp3",
            japaneseName: "Tandon"
        },
        {
            name: "Carkol",
            imageUrl: "images/838Carkol.png",
            number: "177",
            type: ["Rock", "Fire"],
            category: "Coal",
            region: "Galar",
            generation: "08",
            height: "3'07\"",
            weight: "172.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 78.0,
            dexEntry: "By rapidly rolling its legs, it can travel at over 18 mph. The temperature of the flames it breathes exceeds 1,800 degrees Fahrenheit.",
            cryUrl: "cries/838.mp3",
            japaneseName: "Toroggon"
        },
        {
            name: "Coalossal",
            imageUrl: "images/839Coalossal.png",
            number: "178",
            type: ["Rock", "Fire"],
            category: "Coal",
            region: "Galar",
            generation: "08",
            height: "9'02\"",
            weight: "684.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.8,
            metricWeight: 310.5,
            dexEntry: "While it's engaged in battle, its mountain of coal will burn bright red, sending off sparks that scorch the surrounding area.",
            cryUrl: "cries/839.mp3",
            japaneseName: "Sekitanzan"
        },
        {
            name: "Ferroseed",
            imageUrl: "images/597Ferroseed.png",
            number: "179",
            type: ["Grass", "Steel"],
            category: "Thorn Seed",
            region: "Unova",
            generation: "05",
            height: "2'00\"",
            weight: "41.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 0.6,
            metricWeight: 18.8,
            dexEntry: "Mossy caves are their preferred dwellings. Enzymes contained in mosses help Ferroseed's spikes grow big and strong.",
            cryUrl: "cries/597.mp3",
            japaneseName: "Tesseed"
        },
        {
            name: "Ferrothorn",
            imageUrl: "images/598Ferrothorn.png",
            number: "180",
            type: ["Grass", "Steel"],
            category: "Thorn Pod",
            region: "Unova",
            generation: "05",
            height: "3'03\"",
            weight: "242.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.0,
            metricWeight: 110.0,
            dexEntry: "Its spikes are harder than steel. This Pokémon crawls across rock walls by stabbing the spikes on its feelers into the stone.",
            cryUrl: "cries/598.mp3",
            japaneseName: "Nutrey"
        },
        {
            name: "Noibat",
            imageUrl: "images/714Noibat.png",
            number: "181",
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
            dexEntry: "No wavelength of sound is beyond Noibat's ability to produce. The ultrasonic waves it generates can overcome much larger Pokémon.",
            cryUrl: "cries/714.mp3",
            japaneseName: "Onbat"
        },
        {
            name: "Noivern",
            imageUrl: "images/715Noivern.png",
            number: "182",
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
            dexEntry: "Flying through the darkness, it weakens enemies with ultrasonic waves that could crush stone. Its fangs finish the fight.",
            cryUrl: "cries/715.mp3",
            japaneseName: "Onvern"
        },
        {
            name: "Lileep",
            imageUrl: "images/345Lileep.png",
            number: "183",
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
            dexEntry: "Lileep clings to rocks on the seabed. When prey comes close, this Pokémon entangles it with petallike tentacles.",
            cryUrl: "cries/345.mp3",
            japaneseName: "Lilyla"
        },
        {
            name: "Cradily",
            imageUrl: "images/346Cradily.png",
            number: "184",
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
            dexEntry: "Once Cradily catches prey in its tentacles, it digests them whole and absorbs their nutrients.",
            cryUrl: "cries/346.mp3",
            japaneseName: "Yuradle"
        },
        {
            name: "Anorith",
            imageUrl: "images/347Anorith.png",
            number: "185",
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
            dexEntry: "Anorith can swim swiftly by pulling its eight wings through the water like oars on a boat. This Pokémon is an ancestor of modern bug Pokémon.",
            cryUrl: "cries/347.mp3",
            japaneseName: "Anopth"
        },
        {
            name: "Armaldo",
            imageUrl: "images/348Armaldo.png",
            number: "186",
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
            dexEntry: "Though it lives on land, it's also a good swimmer. It dives into the ocean in search of prey, using its sharp claws to take down its quarry.",
            cryUrl: "cries/348.mp3",
            japaneseName: "Armaldo"
        },
        {
            name: "Relicanth",
            imageUrl: "images/369Relicanth.png",
            number: "187",
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
            dexEntry: "This Pokémon was discovered during deep-sea exploration. Its appearance hasn't changed in 100,000,000 years, so it's called a living fossil.",
            cryUrl: "cries/369.mp3",
            japaneseName: "Glanth"
        },
        {
            name: "Feebas",
            imageUrl: "images/349Feebas.png",
            number: "188",
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
            number: "189",
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
            dexEntry: "It's said that a glimpse of a Milotic and its beauty will calm any hostile emotions you're feeling.",
            cryUrl: "cries/350.mp3",
            japaneseName: "Milokaross"
        },
        {
            name: "Lapras",
            imageUrl: "images/131Lapras.png",
            number: "190",
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
            dexEntry: "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch.",
            cryUrl: "cries/131.mp3",
            japaneseName: "Laplace"
        },
        {
            name: "Aron",
            imageUrl: "images/304Aron.png",
            number: "191",
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
            dexEntry: "When Aron evolves, its steel armor peels off. In ancient times, people would collect Aron's shed armor and make good use of it in their daily lives.",
            cryUrl: "cries/304.mp3",
            japaneseName: "Cokodora"
        },
        {
            name: "Lairon",
            imageUrl: "images/305Lairon.png",
            number: "192",
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
            dexEntry: "During territorial disputes, Lairon fight by slamming into each other. Close inspection of their steel armor reveals scratches and dents.",
            cryUrl: "cries/305.mp3",
            japaneseName: "Kodora"
        },
        {
            name: "Aggron",
            imageUrl: "images/306Aggron.png",
            number: "193",
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
            dexEntry: "Long ago, there was a king who wore a helmet meant to resemble the head of an Aggron. He was trying to channel the Pokémon's strength.",
            cryUrl: "cries/306.mp3",
            japaneseName: "Bossgodora"
        },
        {
            name: "Dratini",
            imageUrl: "images/147Dratini.png",
            number: "194",
            type: ["Dragon"],
            category: "Dragon",
            region: "Kanto",
            generation: "01",
            height: "5'11\"",
            weight: "7.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.8,
            metricWeight: 3.3,
            dexEntry: "This Pokémon was long considered to be no more than a myth. The small lump on a Dratini's forehead is actually a horn that's still coming in.",
            cryUrl: "cries/147.mp3",
            japaneseName: "Miniryu"
        },
        {
            name: "Dragonair",
            imageUrl: "images/148Dragonair.png",
            number: "195",
            type: ["Dragon"],
            category: "Dragon",
            region: "Kanto",
            generation: "01",
            height: "13'01\"",
            weight: "36.4 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 4.0,
            metricWeight: 16.5,
            dexEntry: "This Pokémon gathers power in the orbs on its tail and controls the weather. When enshrouded by an aura, Dragonair has a mystical appearance.",
            cryUrl: "cries/148.mp3",
            japaneseName: "Hakuryu"
        },
        {
            name: "Dragonite",
            imageUrl: "images/149Dragonite.png",
            number: "196",
            type: ["Dragon", "Flying"],
            category: "Dragon",
            region: "Kanto",
            generation: "01",
            height: "7'03\"",
            weight: "463.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 210.0,
            dexEntry: "This Pokémon is known as the Sea Incarnate. Figureheads that resemble Dragonite decorate the bows of many ships.",
            cryUrl: "cries/149.mp3",
            japaneseName: "Kairyu"
        },
        {
            name: "Regirock",
            imageUrl: "images/377Regirock.png",
            number: "197",
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
            dexEntry: "Cutting-edge technology was used to study the internals of this Pokémon's rock body, but nothing was found—not even a brain or a heart.",
            cryUrl: "cries/377.mp3",
            japaneseName: "Regirock"
        },
        {
            name: "Regice",
            imageUrl: "images/378Regice.png",
            number: "198",
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
            dexEntry: "This Pokémon's body is made of solid ice. It's said that Regice was born beneath thick ice in the ice age.",
            cryUrl: "cries/378.mp3",
            japaneseName: "Regice"
        },
        {
            name: "Registeel",
            imageUrl: "images/379Registeel.png",
            number: "199",
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
            dexEntry: "It's rumored that this Pokémon was born deep underground in the planet's mantle and that it emerged onto the surface 10,000 years ago.",
            cryUrl: "cries/379.mp3",
            japaneseName: "Registeel"
        },
        {
            name: "Regieleki",
            imageUrl: "images/894Regieleki.png",
            number: "200",
            type: ["Electric"],
            category: "Electron",
            region: "Galar",
            generation: "08",
            height: "3'11\"",
            weight: "319.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.2,
            metricWeight: 145.0,
            dexEntry: "Its entire body is made up of a single organ that generates electrical energy. Regieleki is capable of creating all Galar's electricity.",
            cryUrl: "cries/894.mp3",
            japaneseName: "Regieleki"
        },
        {
            name: "Regidrago",
            imageUrl: "images/895Regidrago.png",
            number: "201",
            type: ["Dragon"],
            category: "Dragon Orb",
            region: "Galar",
            generation: "08",
            height: "6'11\"",
            weight: "440.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 200.0,
            dexEntry: "Its body is composed of crystallized dragon energy. Regidrago is said to have the powers of every dragon Pokémon.",
            cryUrl: "cries/895.mp3",
            japaneseName: "Regidorago"
        },
        {
            name: "Articuno",
            imageUrl: "forms/144Articuno-Galar.png",
            number: "202",
            type: ["Psychic", "Flying"],
            category: "Cruel",
            region: "Kanto",
            generation: "01",
            height: "5'07\"",
            weight: "112.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.7,
            metricWeight: 50.9,
            dexEntry: "Known as Articuno, this Pokémon fires beams that can immobilize opponents as if they had been frozen solid.",
            cryUrl: "cries/144.mp3",
            japaneseName: "Freezer"
        },
        {
            name: "Zapdos",
            imageUrl: "forms/145Zapdos-Galar.png",
            number: "203",
            type: ["Fighting", "Flying"],
            category: "Strong Legs",
            region: "Kanto",
            generation: "01",
            height: "5'03\"",
            weight: "128.3 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.6,
            metricWeight: 58.2,
            dexEntry: "One kick from its powerful legs will pulverize a dump truck. Supposedly, this Pokémon runs through the mountains at over 180 mph.",
            cryUrl: "cries/145.mp3",
            japaneseName: "Thunder"
        },
        {
            name: "Moltres",
            imageUrl: "forms/146Moltres-Galar.png",
            number: "204",
            type: ["Dark", "Flying"],
            category: "Malevolent",
            region: "Kanto",
            generation: "01",
            height: "6'07\"",
            weight: "145.5 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 66.0,
            dexEntry: "The sinister aura that blazes like molten fire around this Pokémon is what inspired the name Moltres.",
            cryUrl: "cries/146.mp3",
            japaneseName: "Fire"
        },
        {
            name: "Cobalion",
            imageUrl: "images/638Cobalion.png",
            number: "205",
            type: ["Steel", "Fighting"],
            category: "Iron Will",
            region: "Unova",
            generation: "05",
            height: "6'11\"",
            weight: "551.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.1,
            metricWeight: 250.0,
            dexEntry: "From the moment it's born, this Pokémon radiates the air of a leader. Its presence will calm even vicious foes.",
            cryUrl: "cries/638.mp3",
            japaneseName: "Cobalon"
        },
        {
            name: "Terrakion",
            imageUrl: "images/639Terrakion.png",
            number: "206",
            type: ["Rock", "Fighting"],
            category: "Cavern",
            region: "Unova",
            generation: "05",
            height: "6'03\"",
            weight: "573.2 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.9,
            metricWeight: 260.0,
            dexEntry: "In Unovan legend, Terrakion battled against humans in an effort to protect other Pokémon.",
            cryUrl: "cries/639.mp3",
            japaneseName: "Terrakion"
        },
        {
            name: "Virizion",
            imageUrl: "images/640Virizion.png",
            number: "207",
            type: ["Grass", "Fighting"],
            category: "Grassland",
            region: "Unova",
            generation: "05",
            height: "6'07\"",
            weight: "440.9 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 200.0,
            dexEntry: "It darts around opponents with a flurry of quick movements, slicing them up with its horns.",
            cryUrl: "cries/640.mp3",
            japaneseName: "Virizion"
        },
        {
            name: "Glastrier",
            imageUrl: "images/896Glastrier.png",
            number: "208",
            type: ["Ice"],
            category: "Wild Horse",
            region: "Galar",
            generation: "08",
            height: "7'03\"",
            weight: "1763.7 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.2,
            metricWeight: 800.0,
            dexEntry: "Glastrier has tremendous physical strength, and the mask of ice covering its face is 100 times harder than diamond.",
            cryUrl: "cries/896.mp3",
            japaneseName: "Blizzapos"
        },
        {
            name: "Spectrier",
            imageUrl: "images/897Spectrier.png",
            number: "209",
            type: ["Ghost"],
            category: "Swift Horse",
            region: "Galar",
            generation: "08",
            height: "6'07\"",
            weight: "98.1 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 2.0,
            metricWeight: 44.5,
            dexEntry: "As it dashes through the night, Spectrier absorbs the life-force of sleeping creatures. It craves silence and solitude.",
            cryUrl: "cries/897.mp3",
            japaneseName: "Wraithpos"
        },
        {
            name: "Calyrex",
            imageUrl: "images/898Calyrex.png",
            number: "210",
            type: ["Psychic", "Grass"],
            category: "King",
            region: "Galar",
            generation: "08",
            height: "3'07\"",
            weight: "17.0 lbs.",
            favorites: false,
            caught: false,
            metricHeight: 1.1,
            metricWeight: 7.7,
            dexEntry: "Calyrex is known in legend as a king that ruled over Galar in ancient times. It has the power to cause hearts to mend and plants to spring forth.",
            cryUrl: "cries/898.mp3",
            japaneseName: "Budrex"
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