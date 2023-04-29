const pkm = [null,
  _1 = {
    name: 'Bulbasaur',
    gif: './Assets/Gen1/bulbasaur.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/poison.png',
    hp: 45,
    atk: 49,
    def: 49,
    spAtk: 65,
    spDef: 65,
    spd: 45
  },

  _2 = {
    name: 'Ivysaur',
    gif: './Assets/Gen1/ivysaur.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/poison.png',
    hp: 60,
    atk: 62,
    def: 63,
    spAtk: 80,
    spDef: 80,
    spd: 60
  },

  _3 = {
    name: 'Venusaur',
    gif: './Assets/Gen1/venusaur.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/poison.png',
    hp: 80,
    atk: 82,
    def: 83,
    spAtk: 100,
    spDef: 100,
    spd: 80
  },

  _4 = {
    name: 'Charmander',
    gif: './Assets/Gen1/charmander.gif',
    type1: './Assets/Types/fire.png',
    hp: 39,
    atk: 52,
    def: 43,
    spAtk: 60,
    spDef: 50,
    spd: 65
  },

  _5 = {
    name: 'Charmeleon',
    gif: './Assets/Gen1/charmeleon.gif',
    type1: './Assets/Types/fire.png',
    hp: 39,
    atk: 52,
    def: 43,
    spAtk: 60,
    spDef: 50,
    spd: 65
  },

  _6 = {
    name: 'Charizard',
    gif: './Assets/Gen1/charizard.gif',
    type1: './Assets/Types/fire.png',
    type2: './Assets/Types/flying.png',
    hp: 78,
    atk: 84,
    def: 78,
    spAtk: 109,
    spDef: 85,
    spd: 100
  },

  _7 = {
    name: 'Squirtle',
    gif: './Assets/Gen1/squirtle.gif',
    type1: './Assets/Types/water.png',
    hp: 44,
    atk: 48,
    def: 65,
    spAtk: 50,
    spDef: 64,
    spd: 43
  },

  _8 = {
    name: 'Wartortle',
    gif: './Assets/Gen1/wartortle.gif',
    type1: './Assets/Types/water.png',
    hp: 59,
    atk: 63,
    def: 80,
    spAtk: 65,
    spDef: 80,
    spd: 58
  },

  _9 = {
    name: 'Blastoise',
    gif: './Assets/Gen1/blastoise.gif',
    type1: './Assets/Types/water.png',
    hp: 79,
    atk: 83,
    def: 100,
    spAtk: 85,
    spDef: 105,
    spd: 78
  },

  _10 = {
    name: 'Caterpie',
    gif: './Assets/Gen1/caterpie.gif',
    type1: './Assets/Types/bug.png',
    hp: 45,
    atk: 30,
    def: 35,
    spAtk: 20,
    spDef: 20,
    spd: 45
  },

  _11 = {
    name: 'Metapod',
    gif: './Assets/Gen1/metapod.gif',
    type1: './Assets/Types/bug.png',
    hp: 50,
    atk: 20,
    def: 55,
    spAtk: 25,
    spDef: 25,
    spd: 30
  },

  _12 = {
    name: 'Butterfree',
    gif: './Assets/Gen1/butterfree.gif',
    type1: './Assets/Types/bug.png',
    type2: './Assets/Types/flying.png',
    hp: 60,
    atk: 45,
    def: 50,
    spAtk: 90,
    spDef: 80,
    spd: 70
  },

  _13 = {
    name: 'Weedle',
    gif: './Assets/Gen1/weedle.gif',
    type1: './Assets/Types/bug.png',
    type2: './Assets/Types/poison.png',
    hp: 40,
    atk: 35,
    def: 30,
    spAtk: 20,
    spDef: 20,
    spd: 50
  },

  _14 = {
    name: 'Kakuna',
    gif: './Assets/Gen1/kakuna.gif',
    type1: './Assets/Types/bug.png',
    type2: './Assets/Types/poison.png',
    hp: 45,
    atk: 25,
    def: 50,
    spAtk: 25,
    spDef: 25,
    spd: 35
  },

  _15 = {
    name: 'Beedrill',
    gif: './Assets/Gen1/beedrill.gif',
    type1: './Assets/Types/bug.png',
    type2: './Assets/Types/poison.png',
    hp: 65,
    atk: 90,
    def: 40,
    spAtk: 45,
    spDef: 80,
    spd: 75
  },

  _16 = {
    name: 'Pidgey',
    gif: './Assets/Gen1/pidgey.gif',
    type1: './Assets/Types/normal.png',
    type2: './Assets/Types/flying.png',
    hp: 40,
    atk: 45,
    def: 40,
    spAtk: 35,
    spDef: 35,
    spd: 56
  },

  _17 = {
    name: 'Pidgeotto',
    gif: './Assets/Gen1/pidgeotto.gif',
    type1: './Assets/Types/normal.png',
    type2: './Assets/Types/flying.png',
    hp: 63,
    atk: 60,
    def: 55,
    spAtk: 50,
    spDef: 50,
    spd: 71
  },

  _18 = {
    name: 'Pidgeot',
    gif: './Assets/Gen1/pidgeot.gif',
    type1: './Assets/Types/normal.png',
    type2: './Assets/Types/flying.png',
    hp: 83,
    atk: 80,
    def: 75,
    spAtk: 70,
    spDef: 70,
    spd: 101
  },

  _19 = {
    name: 'Rattata',
    gif: './Assets/Gen1/rattata.gif',
    type1: './Assets/Types/normal.png',
    hp: 30,
    atk: 56,
    def: 35,
    spAtk: 25,
    spDef: 35,
    spd: 72
  },

  _20 = {
    name: 'Raticate',
    gif: './Assets/Gen1/raticate.gif',
    type1: './Assets/Types/normal.png',
    hp: 55,
    atk: 81,
    def: 60,
    spAtk: 50,
    spDef: 70,
    spd: 97
  },

  _21 = {
    name: 'Spearow',
    gif: './Assets/Gen1/spearow.gif',
    type1: './Assets/Types/normal.png',
    type2: './Assets/Types/flying.png',
    hp: 40,
    atk: 60,
    def: 30,
    spAtk: 31,
    spDef: 31,
    spd: 70
  },

  _22 = {
    name: 'Fearow',
    gif: './Assets/Gen1/fearow.gif',
    type1: './Assets/Types/normal.png',
    type2: './Assets/Types/flying.png',
    hp: 65,
    atk: 90,
    def: 65,
    spAtk: 61,
    spDef: 61,
    spd: 100
  },

  _23 = {
    name: 'Ekans',
    gif: './Assets/Gen1/ekans.gif',
    type1: './Assets/Types/poison.png',
    hp: 35,
    atk: 60,
    def: 44,
    spAtk: 40,
    spDef: 54,
    spd: 55
  },

  _24 = {
    name: 'Arbok',
    gif: './Assets/Gen1/arbok.gif',
    type1: './Assets/Types/poison.png',
    hp: 60,
    atk: 95,
    def: 69,
    spAtk: 65,
    spDef: 79,
    spd: 80
  },

  _25 = {
    name: 'Pikachu',
    gif: './Assets/Gen1/pikachu.gif',
    type1: './Assets/Types/electric.png',
    hp: 35,
    atk: 55,
    def: 40,
    spAtk: 50,
    spDef: 50,
    spd: 90
  },

  _26 = {
    name: 'Raichu',
    gif: './Assets/Gen1/raichu.gif',
    type1: './Assets/Types/electric.png',
    hp: 60,
    atk: 90,
    def: 55,
    spAtk: 90,
    spDef: 80,
    spd: 110
  },

  _27 = {
    name: 'Sandshrew ',
    gif: './Assets/Gen1/sandshrew.gif',
    type1: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _28 = {
    name: 'Sandslash ',
    gif: './Assets/Gen1/sandslash.gif',
    type1: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _29 = {
    name: 'Nidoran ♀',
    gif: './Assets/Gen1/nidoran_f.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _30 = {
    name: 'Nidorina ',
    gif: './Assets/Gen1/nidorina.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _31 = {
    name: 'Nidoqueen',
    gif: './Assets/Gen1/nidoqueen.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _32 = {
    name: 'Nidoran ♂',
    gif: './Assets/Gen1/nidoran_m.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _33 = {
    name: 'Nidorino',
    gif: './Assets/Gen1/nidorino.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _34 = {
    name: 'Nidoking',
    gif: './Assets/Gen1/nidoking.gif',
    type1: './Assets/Types/poison.png',
    type2: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _35 = {
    name: 'Clefairy',
    gif: './Assets/Gen1/clefairy.gif',
    type1: './Assets/Types/fairy.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _36 = {
    name: 'Clefable',
    gif: './Assets/Gen1/clefable.gif',
    type1: './Assets/Types/fairy.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _37 = {
    name: 'Vulpix',
    gif: './Assets/Gen1/vulpix.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _38 = {
    name: 'Ninetales',
    gif: './Assets/Gen1/ninetales.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _39 = {
    name: 'Jigglypuff',
    gif: './Assets/Gen1/jigglypuff.gif',
    type1: './Assets/Types/normal.png',
    type1: './Assets/Types/fairy.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _40 = {
    name: 'Wigglytuff',
    gif: './Assets/Gen1/wigglytuff.gif',
    type1: './Assets/Types/normal.png',
    type1: './Assets/Types/fairy.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _41 = {
    name: 'Zubat',
    gif: './Assets/Gen1/zubat.gif',
    type1: './Assets/Types/poison.png',
    type1: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _42 = {
    name: 'Golbat',
    gif: './Assets/Gen1/golbat.gif',
    type1: './Assets/Types/poison.png',
    type1: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _43 = {
    name: 'Oddish',
    gif: './Assets/Gen1/oddish.gif',
    type1: './Assets/Types/grass.png',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _44 = {
    name: 'Gloom',
    gif: './Assets/Gen1/gloom.gif',
    type1: './Assets/Types/grass.png',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _45 = {
    name: 'Vileplume',
    gif: './Assets/Gen1/vileplume.gif',
    type1: './Assets/Types/grass.png',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _46 = {
    name: 'Paras',
    gif: './Assets/Gen1/paras.gif',
    type1: './Assets/Types/bug.png',
    type1: './Assets/Types/grass.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _47 = {
    name: 'Parasect',
    gif: './Assets/Gen1/parasect.gif',
    type1: './Assets/Types/bug.png',
    type1: './Assets/Types/grass.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _48 = {
    name: 'Venonat',
    gif: './Assets/Gen1/venonat.gif',
    type1: './Assets/Types/bug.png',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _49 = {
    name: 'Venomoth',
    gif: './Assets/Gen1/venomoth.gif',
    type1: './Assets/Types/bug.png',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _49 = {
    name: 'Diglett',
    gif: './Assets/Gen1/diglett.gif',
    type1: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _50 = {
    name: 'Dugtrio',
    gif: './Assets/Gen1/dugtrio.gif',
    type1: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

]