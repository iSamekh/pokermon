const pkm = [null,
  _1 = {
    name: 'Bulbasaur',
    type1: 'grass',
    type2: 'poison',
    hp: 45,
    atk: 49,
    def: 49,
    spAtk: 65,
    spDef: 65,
    spd: 45
  },

  _2 = {
    name: 'Ivysaur',
    type1: 'grass',
    type2: 'poison',
    hp: 60,
    atk: 62,
    def: 63,
    spAtk: 80,
    spDef: 80,
    spd: 60
  },

  _3 = {
    name: 'Venusaur',
    type1: 'grass',
    type2: 'poison',
    hp: 80,
    atk: 82,
    def: 83,
    spAtk: 100,
    spDef: 100,
    spd: 80
  },

  _4 = {
    name: 'Charmander',
    type1: 'fire',
    hp: 39,
    atk: 52,
    def: 43,
    spAtk: 60,
    spDef: 50,
    spd: 65
  },

  _5 = {
    name: 'Charmeleon',
    type1: 'fire',
    hp: 58,
    atk: 64,
    def: 58,
    spAtk: 80,
    spDef: 65,
    spd: 80
  },

  _6 = {
    name: 'Charizard',
    type1: 'fire',
    type2: 'flying',
    hp: 78,
    atk: 84,
    def: 78,
    spAtk: 109,
    spDef: 85,
    spd: 100
  },

  _7 = {
    name: 'Squirtle',
    type1: 'water',
    hp: 44,
    atk: 48,
    def: 65,
    spAtk: 50,
    spDef: 64,
    spd: 43
  },

  _8 = {
    name: 'Wartortle',
    type1: 'water',
    hp: 59,
    atk: 63,
    def: 80,
    spAtk: 65,
    spDef: 80,
    spd: 58
  },

  _9 = {
    name: 'Blastoise',
    type1: 'water',
    hp: 79,
    atk: 83,
    def: 100,
    spAtk: 85,
    spDef: 105,
    spd: 78
  },

  _10 = {
    name: 'Caterpie',
    type1: 'bug',
    hp: 45,
    atk: 30,
    def: 35,
    spAtk: 20,
    spDef: 20,
    spd: 45
  },

  _11 = {
    name: 'Metapod',
    type1: 'bug',
    hp: 50,
    atk: 20,
    def: 55,
    spAtk: 25,
    spDef: 25,
    spd: 30
  },

  _12 = {
    name: 'Butterfree',
    type1: 'bug',
    type2: 'flying',
    hp: 60,
    atk: 45,
    def: 50,
    spAtk: 90,
    spDef: 80,
    spd: 70
  },

  _13 = {
    name: 'Weedle',
    type1: 'bug',
    type2: 'poison',
    hp: 40,
    atk: 35,
    def: 30,
    spAtk: 20,
    spDef: 20,
    spd: 50
  },

  _14 = {
    name: 'Kakuna',
    type1: 'bug',
    type2: 'poison',
    hp: 45,
    atk: 25,
    def: 50,
    spAtk: 25,
    spDef: 25,
    spd: 35
  },

  _15 = {
    name: 'Beedrill',
    type1: 'bug',
    type2: 'poison',
    hp: 65,
    atk: 90,
    def: 40,
    spAtk: 45,
    spDef: 80,
    spd: 75
  },

  _16 = {
    name: 'Pidgey',
    type1: 'normal',
    type2: 'flying',
    hp: 40,
    atk: 45,
    def: 40,
    spAtk: 35,
    spDef: 35,
    spd: 56
  },

  _17 = {
    name: 'Pidgeotto',
    type1: 'normal',
    type2: 'flying',
    hp: 63,
    atk: 60,
    def: 55,
    spAtk: 50,
    spDef: 50,
    spd: 71
  },

  _18 = {
    name: 'Pidgeot',
    type1: 'normal',
    type2: 'flying',
    hp: 83,
    atk: 80,
    def: 75,
    spAtk: 70,
    spDef: 70,
    spd: 101
  },

  _19 = {
    name: 'Rattata',
    type1: 'normal',
    hp: 30,
    atk: 56,
    def: 35,
    spAtk: 25,
    spDef: 35,
    spd: 72
  },

  _20 = {
    name: 'Raticate',
    type1: 'normal',
    hp: 55,
    atk: 81,
    def: 60,
    spAtk: 50,
    spDef: 70,
    spd: 97
  },

  _21 = {
    name: 'Spearow',
    type1: 'normal',
    type2: 'flying',
    hp: 40,
    atk: 60,
    def: 30,
    spAtk: 31,
    spDef: 31,
    spd: 70
  },

  _22 = {
    name: 'Fearow',
    type1: 'normal',
    type2: 'flying',
    hp: 65,
    atk: 90,
    def: 65,
    spAtk: 61,
    spDef: 61,
    spd: 100
  },

  _23 = {
    name: 'Ekans',
    type1: 'poison',
    hp: 35,
    atk: 60,
    def: 44,
    spAtk: 40,
    spDef: 54,
    spd: 55
  },

  _24 = {
    name: 'Arbok',
    type1: 'poison',
    hp: 60,
    atk: 95,
    def: 69,
    spAtk: 65,
    spDef: 79,
    spd: 80
  },

  _25 = {
    name: 'Pikachu',
    type1: 'electric',
    hp: 35,
    atk: 55,
    def: 40,
    spAtk: 50,
    spDef: 50,
    spd: 90
  },

  _26 = {
    name: 'Raichu',
    type1: 'electric',
    hp: 60,
    atk: 90,
    def: 55,
    spAtk: 90,
    spDef: 80,
    spd: 110
  },

  _27 = {
    name: 'Sandshrew',
    type1: 'ground',
    hp: 50,
    atk: 75,
    def: 85,
    spAtk: 20,
    spDef: 30,
    spd: 40
  },

  _28 = {
    name: 'Sandslash',
    type1: 'ground',
    hp: 75,
    atk: 100,
    def: 110,
    spAtk: 45,
    spDef: 55,
    spd: 65
  },

  _29 = {
    name: 'Nidoran F',
    type1: 'poison',
    hp: 55,
    atk: 47,
    def: 52,
    spAtk: 40,
    spDef: 40,
    spd: 41
  },

  _30 = {
    name: 'Nidorina',
    type1: 'poison',
    hp: 70,
    atk: 62,
    def: 67,
    spAtk: 55,
    spDef: 55,
    spd: 56
  },

  _31 = {
    name: 'Nidoqueen',
    type1: 'poison',
    hp: 90,
    atk: 92,
    def: 87,
    spAtk: 75,
    spDef: 85,
    spd: 76
  },

  _32 = {
    name: 'Nidoran M',
    type1: 'poison',
    hp: 46,
    atk: 57,
    def: 40,
    spAtk: 40,
    spDef: 40,
    spd: 50
  },

  _33 = {
    name: 'Nidorino',
    type1: 'poison',
    hp: 61,
    atk: 72,
    def: 57,
    spAtk: 55,
    spDef: 55,
    spd: 65
  },

  _34 = {
    name: 'Nidoking',
    type1: 'poison',
    type2: 'ground',
    hp: 81,
    atk: 102,
    def: 77,
    spAtk: 85,
    spDef: 75,
    spd: 85
  },

  _35 = {
    name: 'Clefairy',
    type1: 'fairy',
    hp: 70,
    atk: 45,
    def: 48,
    spAtk: 60,
    spDef: 65,
    spd: 35
  },

  _36 = {
    name: 'Clefable',
    type1: 'fairy',
    hp: 95,
    atk: 70,
    def: 73,
    spAtk: 95,
    spDef: 90,
    spd: 60
  },

  _37 = {
    name: 'Vulpix',
    type1: 'fire',
    hp: 38,
    atk: 41,
    def: 40,
    spAtk: 50,
    spDef: 65,
    spd: 65
  },

  _38 = {
    name: 'Ninetales',
    type1: 'fire',
    hp: 73,
    atk: 76,
    def: 75,
    spAtk: 81,
    spDef: 100,
    spd: 100
  },

  _39 = {
    name: 'Jigglypuff',
    type1: 'normal',
    type1: 'fairy',
    hp: 115,
    atk: 45,
    def: 20,
    spAtk: 45,
    spDef: 25,
    spd: 20
  },

  _40 = {
    name: 'Wigglytuff',
    type1: 'normal',
    type1: 'fairy',
    hp: 140,
    atk: 70,
    def: 45,
    spAtk: 85,
    spDef: 50,
    spd: 45
  },

  _41 = {
    name: 'Zubat',
    type1: 'poison',
    type1: 'flying',
    hp: 40,
    atk: 45,
    def: 35,
    spAtk: 30,
    spDef: 40,
    spd: 55
  },

  _42 = {
    name: 'Golbat',
    type1: 'poison',
    type1: 'flying',
    hp: 75,
    atk: 80,
    def: 70,
    spAtk: 65,
    spDef: 75,
    spd: 90
  },

  _43 = {
    name: 'Oddish',
    type1: 'grass',
    type1: 'poison',
    hp: 45,
    atk: 50,
    def: 55,
    spAtk: 75,
    spDef: 65,
    spd: 30
  },

  _44 = {
    name: 'Gloom',
    type1: 'grass',
    type1: 'poison',
    hp: 60,
    atk: 65,
    def: 70,
    spAtk: 85,
    spDef: 75,
    spd: 40
  },

  _45 = {
    name: 'Vileplume',
    type1: 'grass',
    type1: 'poison',
    hp: 75,
    atk: 80,
    def: 85,
    spAtk: 110,
    spDef: 90,
    spd: 50
  },

  _46 = {
    name: 'Paras',
    type1: 'bug',
    type1: 'grass',
    hp: 35,
    atk: 70,
    def: 55,
    spAtk: 45,
    spDef: 55,
    spd: 25
  },

  _47 = {
    name: 'Parasect',
    type1: 'bug',
    type1: 'grass',
    hp: 60,
    atk: 95,
    def: 80,
    spAtk: 60,
    spDef: 80,
    spd: 30
  },

  _48 = {
    name: 'Venonat',
    type1: 'bug',
    type1: 'poison',
    hp: 60,
    atk: 55,
    def: 50,
    spAtk: 40,
    spDef: 55,
    spd: 45
  },

  _49 = {
    name: 'Venomoth',
    type1: 'bug',
    type1: 'poison',
    hp: 70,
    atk: 65,
    def: 60,
    spAtk: 90,
    spDef: 75,
    spd: 90
  },

  _50 = {
    name: 'Diglett',
    type1: 'ground',
    hp: 10,
    atk: 55,
    def: 25,
    spAtk: 35,
    spDef: 45,
    spd: 95
  },

  _51 = {
    name: 'Dugtrio',
    type1: 'ground',
    hp: 35,
    atk: 100,
    def: 50,
    spAtk: 50,
    spDef: 70,
    spd: 120
  },

  _52 = {
    name: 'Meowth',
    type1: 'normal',
    hp: 40,
    atk: 45,
    def: 35,
    spAtk: 40,
    spDef: 40,
    spd: 90
  },

  _53 = {
    name: 'Persian',
    type1: 'normal',
    hp: 65,
    atk: 70,
    def: 60,
    spAtk: 65,
    spDef: 65,
    spd: 115
  },

  _54 = {
    name: 'Psyduck',
    type1: 'water',
    hp: 50,
    atk: 52,
    def: 48,
    spAtk: 65,
    spDef: 50,
    spd: 55
  },

  _55 = {
    name: 'Golduck',
    type1: 'water',
    hp: 80,
    atk: 82,
    def: 78,
    spAtk: 95,
    spDef: 80,
    spd: 85
  },

  _56 = {
    name: 'Mankey',
    type1: 'fighting',
    hp: 40,
    atk: 80,
    def: 35,
    spAtk: 35,
    spDef: 45,
    spd: 70
  },

  _57 = {
    name: 'Primeape',
    type1: 'fighting',
    hp: 65,
    atk: 105,
    def: 60,
    spAtk: 60,
    spDef: 70,
    spd: 95
  },

  _58 = {
    name: 'Growlithe',
    type1: 'fire',
    hp: 55,
    atk: 70,
    def: 45,
    spAtk: 70,
    spDef: 50,
    spd: 60
  },

  _59 = {
    name: 'Arcanine',
    type1: 'fire',
    hp: 90,
    atk: 110,
    def: 80,
    spAtk: 100,
    spDef: 80,
    spd: 95
  },

  _60 = {
    name: 'Poliwag',
    type1: 'water',
    hp: 40,
    atk: 50,
    def: 40,
    spAtk: 40,
    spDef: 40,
    spd: 90
  },

  _61 = {
    name: 'Poliwhirl',
    type1: 'water',
    hp: 65,
    atk: 65,
    def: 65,
    spAtk: 50,
    spDef: 50,
    spd: 90
  },

  _62 = {
    name: 'Poliwrath',
    type1: 'water',
    type2: 'fighting',
    hp: 90,
    atk: 95,
    def: 95,
    spAtk: 70,
    spDef: 90,
    spd: 70
  },

  _63 = {
    name: 'Abra',
    type1: 'psychic',
    hp: 25,
    atk: 20,
    def: 15,
    spAtk: 105,
    spDef: 55,
    spd: 90
  },

  _64 = {
    name: 'Kadabra',
    type1: 'psychic',
    hp: 40,
    atk: 35,
    def: 30,
    spAtk: 120,
    spDef: 70,
    spd: 105
  },

  _65 = {
    name: 'Alakazam',
    type1: 'psychic',
    hp: 55,
    atk: 50,
    def: 45,
    spAtk: 135,
    spDef: 95,
    spd: 120
  },

  _66 = {
    name: 'Machop',
    type1: 'fighting',
    hp: 70,
    atk: 80,
    def: 50,
    spAtk: 35,
    spDef: 35,
    spd: 35
  },

  _67 = {
    name: 'Machoke',
    type1: 'fighting',
    hp: 80,
    atk: 100,
    def: 70,
    spAtk: 50,
    spDef: 60,
    spd: 45
  },

  _68 = {
    name: 'Machamp',
    type1: 'fighting',
    hp: 90,
    atk: 130,
    def: 80,
    spAtk: 65,
    spDef: 85,
    spd: 55
  },

  _69 = {
    name: 'Bellsprout',
    type1: 'grass',
    type2: 'poison',
    hp: 50,
    atk: 75,
    def: 35,
    spAtk: 70,
    spDef: 30,
    spd: 40
  },

  _70 = {
    name: 'Weepinbell',
    type1: 'grass',
    type2: 'poison',
    hp: 65,
    atk: 90,
    def: 50,
    spAtk: 85,
    spDef: 45,
    spd: 55
  },

  _71 = {
    name: 'Victreebel',
    type1: 'grass',
    type2: 'poison',
    hp: 80,
    atk: 105,
    def: 65,
    spAtk: 100,
    spDef: 70,
    spd: 70
  },

  _72 = {
    name: 'Tentacool',
    type1: 'water',
    type2: 'poison',
    hp: 40,
    atk: 40,
    def: 35,
    spAtk: 50,
    spDef: 100,
    spd: 70
  },

  _73 = {
    name: 'Tentacruel',
    type1: 'water',
    type2: 'poison',
    hp: 80,
    atk: 70,
    def: 65,
    spAtk: 80,
    spDef: 120,
    spd: 100
  },

  _74 = {
    name: 'Geodude',
    type1: 'rock',
    type2: 'ground',
    hp: 40,
    atk: 80,
    def: 100,
    spAtk: 30,
    spDef: 30,
    spd: 20
  },

  _75 = {
    name: 'Graveler',
    type1: 'rock',
    type2: 'ground',
    hp: 55,
    atk: 95,
    def: 115,
    spAtk: 45,
    spDef: 45,
    spd: 35
  },

  _76 = {
    name: 'Golem',
    type1: 'rock',
    type2: 'ground',
    hp: 80,
    atk: 120,
    def: 130,
    spAtk: 55,
    spDef: 65,
    spd: 45
  },

  _77 = {
    name: 'Ponyta',
    type1: 'fire',
    hp: 50,
    atk: 85,
    def: 55,
    spAtk: 65,
    spDef: 65,
    spd: 90
  },

  _78 = {
    name: 'Rapidash',
    type1: 'fire',
    hp: 65,
    atk: 100,
    def: 70,
    spAtk: 80,
    spDef: 80,
    spd: 105
  },

  _79 = {
    name: 'Slowpoke',
    type1: 'water',
    type1: 'psychic',
    hp: 90,
    atk: 65,
    def: 65,
    spAtk: 40,
    spDef: 40,
    spd: 15
  },

  _80 = {
    name: 'Slowbro',
    type1: 'water',
    type1: 'psychic',
    hp: 95,
    atk: 75,
    def: 110,
    spAtk: 100,
    spDef: 80,
    spd: 30
  },

  _81 = {
    name: 'Magnemite',
    type1: 'electric',
    type1: 'steel',
    hp: 25,
    atk: 35,
    def: 70,
    spAtk: 95,
    spDef: 55,
    spd: 45
  },

  _82 = {
    name: 'Magneton',
    type1: 'electric',
    type1: 'steel',
    hp: 50,
    atk: 60,
    def: 95,
    spAtk: 120,
    spDef: 70,
    spd: 70
  },

  _83 = {
    name: 'Farfetchd',
    type1: 'normal',
    type1: 'flying',
    hp: 52,
    atk: 90,
    def: 55,
    spAtk: 58,
    spDef: 62,
    spd: 60
  },

  _84 = {
    name: 'Doduo',
    type1: 'normal',
    type1: 'flying',
    hp: 35,
    atk: 85,
    def: 45,
    spAtk: 35,
    spDef: 35,
    spd: 75
  },

  _85 = {
    name: 'Dodrio',
    type1: 'normal',
    type1: 'flying',
    hp: 60,
    atk: 110,
    def: 70,
    spAtk: 60,
    spDef: 60,
    spd: 110
  },

  _86 = {
    name: 'Seel',
    type1: 'water',
    hp: 65,
    atk: 45,
    def: 55,
    spAtk: 45,
    spDef: 70,
    spd: 45
  },

  _87 = {
    name: 'Dewgong',
    type1: 'water',
    type2: 'ice',
    hp: 90,
    atk: 70,
    def: 80,
    spAtk: 70,
    spDef: 95,
    spd: 70
  },

  _88 = {
    name: 'Grimer',
    type1: 'poison',
    hp: 80,
    atk: 80,
    def: 50,
    spAtk: 40,
    spDef: 50,
    spd: 25
  },

  _89 = {
    name: 'Muk',
    type1: 'poison',
    hp: 105,
    atk: 105,
    def: 75,
    spAtk: 65,
    spDef: 100,
    spd: 50
  },

  _90 = {
    name: 'Shellder',
    type1: 'water',
    hp: 30,
    atk: 65,
    def: 100,
    spAtk: 45,
    spDef: 25,
    spd: 40
  },

  _91 = {
    name: 'Cloyster',
    type1: 'water',
    type2: 'ice',
    hp: 50,
    atk: 95,
    def: 180,
    spAtk: 85,
    spDef: 45,
    spd: 70
  },

  _92 = {
    name: 'Gastly',
    type1: 'ghost',
    type2: 'poison',
    hp: 30,
    atk: 35,
    def: 30,
    spAtk: 100,
    spDef: 35,
    spd: 80
  },

  _93 = {
    name: 'Haunter',
    type1: 'ghost',
    type2: 'poison',
    hp: 45,
    atk: 50,
    def: 45,
    spAtk: 115,
    spDef: 55,
    spd: 95
  },

  _94 = {
    name: 'Gengar',
    type1: 'ghost',
    type2: 'poison',
    hp: 60,
    atk: 65,
    def: 60,
    spAtk: 130,
    spDef: 75,
    spd: 110
  },

  _95 = {
    name: 'Onix',
    type1: 'rock',
    type2: 'ground',
    hp: 35,
    atk: 45,
    def: 160,
    spAtk: 30,
    spDef: 45,
    spd: 70
  },

  _96 = {
    name: 'Drowzee',
    type1: 'psychic',
    hp: 60,
    atk: 48,
    def: 45,
    spAtk: 43,
    spDef: 90,
    spd: 42
  },

  _97 = {
    name: 'Hypno',
    type1: 'psychic',
    hp: 85,
    atk: 73,
    def: 70,
    spAtk: 73,
    spDef: 115,
    spd: 67
  },

  _98 = {
    name: 'Krabby',
    type1: 'water',
    hp: 30,
    atk: 105,
    def: 90,
    spAtk: 25,
    spDef: 25,
    spd: 50
  },

  _99 = {
    name: 'Kingler',
    type1: 'water',
    hp: 55,
    atk: 130,
    def: 115,
    spAtk: 50,
    spDef: 50,
    spd: 75
  },

  _100 = {
    name: 'Voltorb',
    type1: 'electric',
    hp: 40,
    atk: 30,
    def: 50,
    spAtk: 55,
    spDef: 55,
    spd: 100
  },

  _101 = {
    name: 'Electrode',
    type1: 'electric',
    hp: 60,
    atk: 50,
    def: 70,
    spAtk: 80,
    spDef: 80,
    spd: 150
  },

  _102 = {
    name: 'Exeggcute',
    type1: 'grass',
    type2: 'psychic',
    hp: 60,
    atk: 40,
    def: 80,
    spAtk: 60,
    spDef: 45,
    spd: 40
  },

  _103 = {
    name: 'Exeggutor',
    type1: 'grass',
    type2: 'psychic',
    hp: 95,
    atk: 95,
    def: 85,
    spAtk: 125,
    spDef: 75,
    spd: 55
  },

  _104 = {
    name: 'Cubone',
    type1: 'ground',
    hp: 50,
    atk: 50,
    def: 95,
    spAtk: 40,
    spDef: 50,
    spd: 35
  },

  _105 = {
    name: 'Marowak',
    type1: 'ground',
    hp: 60,
    atk: 80,
    def: 110,
    spAtk: 50,
    spDef: 80,
    spd: 45
  },

  _106 = {
    name: 'Hitmonlee',
    type1: 'fighting',
    hp: 50,
    atk: 120,
    def: 53,
    spAtk: 35,
    spDef: 110,
    spd: 87
  },

  _107 = {
    name: 'Hitmonchan',
    type1: 'fighting',
    hp: 50,
    atk: 105,
    def: 79,
    spAtk: 35,
    spDef: 110,
    spd: 76
  },

  _108 = {
    name: 'Lickitung',
    type1: 'normal',
    hp: 90,
    atk: 55,
    def: 75,
    spAtk: 60,
    spDef: 75,
    spd: 30
  },

  _109 = {
    name: 'Koffing',
    type1: 'poison',
    hp: 40,
    atk: 65,
    def: 95,
    spAtk: 60,
    spDef: 45,
    spd: 35
  },

  _110 = {
    name: 'Weezing',
    type1: 'poison',
    hp: 65,
    atk: 90,
    def: 120,
    spAtk: 85,
    spDef: 70,
    spd: 60
  },

  _111 = {
    name: 'Rhyhorn',
    type1: 'ground',
    type2: 'rock',
    hp: 80,
    atk: 85,
    def: 95,
    spAtk: 30,
    spDef: 30,
    spd: 25
  },

  _112 = {
    name: 'Rhydon',
    type1: 'ground',
    type2: 'rock',
    hp: 105,
    atk: 130,
    def: 120,
    spAtk: 45,
    spDef: 45,
    spd: 40
  },

  _113 = {
    name: 'Chansey',
    type1: 'normal',
    hp: 250,
    atk: 5,
    def: 5,
    spAtk: 35,
    spDef: 105,
    spd: 50
  },

  _114 = {
    name: 'Tangela',
    type1: 'grass',
    hp: 65,
    atk: 55,
    def: 115,
    spAtk: 100,
    spDef: 40,
    spd: 60
  },

  _115 = {
    name: 'Kangaskhan',
    type1: 'normal',
    hp: 105,
    atk: 95,
    def: 80,
    spAtk: 40,
    spDef: 80,
    spd: 90
  },

  _116 = {
    name: 'Horsea',
    type1: 'normal',
    hp: 30,
    atk: 40,
    def: 70,
    spAtk: 70,
    spDef: 25,
    spd: 60
  },

  _117 = {
    name: 'Seadra',
    type1: 'water',
    hp: 55,
    atk: 65,
    def: 95,
    spAtk: 95,
    spDef: 45,
    spd: 85
  },

  _118 = {
    name: 'Goldeen',
    type1: 'water',
    hp: 45,
    atk: 67,
    def: 60,
    spAtk: 35,
    spDef: 50,
    spd: 63
  },

  _119 = {
    name: 'Seaking',
    type1: 'water',
    hp: 80,
    atk: 92,
    def: 65,
    spAtk: 65,
    spDef: 80,
    spd: 68
  },

  _120 = {
    name: 'Staryu',
    type1: 'water',
    hp: 30,
    atk: 45,
    def: 55,
    spAtk: 70,
    spDef: 55,
    spd: 85
  },

  _121 = {
    name: 'Starmie',
    type1: 'water',
    type2: 'psychic',
    hp: 60,
    atk: 75,
    def: 85,
    spAtk: 100,
    spDef: 85,
    spd: 115
  },

  _122 = {
    name: 'Mr. Mime',
    type1: 'psychic',
    type2: 'fairy',
    hp: 40,
    atk: 45,
    def: 65,
    spAtk: 100,
    spDef: 120,
    spd: 90
  },

  _123 = {
    name: 'Scyther',
    type1: 'bug',
    type2: 'flying',
    hp: 70,
    atk: 110,
    def: 80,
    spAtk: 55,
    spDef: 80,
    spd: 105
  },

  _124 = {
    name: 'Jynx',
    type1: 'ice',
    type2: 'psychic',
    hp: 65,
    atk: 50,
    def: 35,
    spAtk: 115,
    spDef: 95,
    spd: 95
  },

  _125 = {
    name: 'Electabuzz',
    type1: 'electric',
    hp: 65,
    atk: 83,
    def: 57,
    spAtk: 95,
    spDef: 85,
    spd: 105
  },

  _126 = {
    name: 'Magmar',
    type1: 'fire',
    hp: 65,
    atk: 95,
    def: 57,
    spAtk: 100,
    spDef: 85,
    spd: 93
  },

  _127 = {
    name: 'Pinsir',
    type1: 'bug',
    hp: 65,
    atk: 125,
    def: 100,
    spAtk: 55,
    spDef: 70,
    spd: 85
  },

  _128 = {
    name: 'Tauros',
    type1: 'normal',
    hp: 75,
    atk: 100,
    def: 95,
    spAtk: 40,
    spDef: 70,
    spd: 110
  },

  _129 = {
    name: 'Magikarp',
    type1: 'water',
    hp: 20,
    atk: 10,
    def: 55,
    spAtk: 15,
    spDef: 20,
    spd: 80
  },

  _130 = {
    name: 'Gyarados',
    type1: 'water',
    type2: 'flying',
    hp: 95,
    atk: 125,
    def: 79,
    spAtk: 60,
    spDef: 100,
    spd: 81
  },

  _131 = {
    name: 'Lapras',
    type1: 'water',
    type2: 'ice',
    hp: 130,
    atk: 85,
    def: 80,
    spAtk: 85,
    spDef: 95,
    spd: 60
  },

  _132 = {
    name: 'Ditto',
    type1: 'normal',
    hp: 48,
    atk: 48,
    def: 48,
    spAtk: 48,
    spDef: 48,
    spd: 48
  },

  _133 = {
    name: 'Eevee',
    type1: 'normal',
    hp: 55,
    atk: 55,
    def: 50,
    spAtk: 45,
    spDef: 65,
    spd: 55
  },

  _134 = {
    name: 'Vaporeon',
    type1: 'water',
    hp: 130,
    atk: 65,
    def: 60,
    spAtk: 110,
    spDef: 95,
    spd: 65
  },

  _135 = {
    name: 'Jolteon',
    type1: 'electric',
    hp: 65,
    atk: 65,
    def: 60,
    spAtk: 110,
    spDef: 95,
    spd: 130
  },

  _136 = {
    name: 'Flareon',
    type1: 'fire',
    hp: 65,
    atk: 130,
    def: 60,
    spAtk: 95,
    spDef: 110,
    spd: 65
  },

  _137 = {
    name: 'Porygon',
    type1: 'normal',
    hp: 65,
    atk: 60,
    def: 70,
    spAtk: 85,
    spDef: 75,
    spd: 40
  },

  _138 = {
    name: 'Omanyte',
    type1: 'rock',
    type2: 'water',
    hp: 35,
    atk: 40,
    def: 100,
    spAtk: 90,
    spDef: 55,
    spd: 35
  },

  _139 = {
    name: 'Omastar',
    type1: 'rock',
    type2: 'water',
    hp: 70,
    atk: 60,
    def: 125,
    spAtk: 115,
    spDef: 70,
    spd: 55
  },

  _140 = {
    name: 'Kabuto',
    type1: 'rock',
    type2: 'water',
    hp: 30,
    atk: 80,
    def: 90,
    spAtk: 55,
    spDef: 45,
    spd: 55
  },

  _141 = {
    name: 'Kabutops',
    type1: 'rock',
    type2: 'water',
    hp: 60,
    atk: 115,
    def: 105,
    spAtk: 65,
    spDef: 70,
    spd: 80
  },

  _142 = {
    name: 'Aerodactyl',
    type1: 'rock',
    type2: 'flying',
    hp: 80,
    atk: 105,
    def: 65,
    spAtk: 60,
    spDef: 75,
    spd: 130
  },

  _143 = {
    name: 'Snorlax',
    type1: 'normal',
    hp: 160,
    atk: 110,
    def: 65,
    spAtk: 65,
    spDef: 110,
    spd: 30
  },

  _144 = {
    name: 'Articuno',
    type1: 'ice',
    type2: 'flying',
    hp: 90,
    atk: 85,
    def: 100,
    spAtk: 95,
    spDef: 125,
    spd: 85
  },

  _145 = {
    name: 'Zapdos',
    type1: 'electric',
    type2: 'flying',
    hp: 90,
    atk: 90,
    def: 85,
    spAtk: 125,
    spDef: 90,
    spd: 100
  },

  _146 = {
    name: 'Moltres',
    type1: 'fire',
    type2: 'flying',
    hp: 90,
    atk: 100,
    def: 90,
    spAtk: 125,
    spDef: 85,
    spd: 90
  },

  _147 = {
    name: 'Dratini',
    type1: 'dragon',
    hp: 41,
    atk: 64,
    def: 45,
    spAtk: 50,
    spDef: 50,
    spd: 50
  },

  _148 = {
    name: 'Dragonair',
    type1: 'dragon',
    hp: 61,
    atk: 84,
    def: 65,
    spAtk: 70,
    spDef: 70,
    spd: 70
  },

  _149 = {
    name: 'Dragonite',
    type1: 'dragon',
    type2: 'flying',
    hp: 91,
    atk: 134,
    def: 95,
    spAtk: 100,
    spDef: 100,
    spd: 80
  },

  _150 = {
    name: 'Mewtwo',
    type1: 'psychic',
    hp: 106,
    atk: 110,
    def: 90,
    spAtk: 154,
    spDef: 90,
    spd: 130
  },

  _151 = {
    name: 'Mew',
    type1: 'psychic',
    hp: 100,
    atk: 100,
    def: 100,
    spAtk: 100,
    spDef: 100,
    spd: 100
  },

]