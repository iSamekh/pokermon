const pkm = [null,
  _1 = {
    name: 'Bulbasaur',
    gif: './Assets/Gen1/bulbasaur.gif',
    type1: './Assets/Types/Grass.png',
    type2: './Assets/Types/Poison.png',
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

  _50 = {
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

  _51 = {
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

  _52 = {
    name: 'Meowth',
    gif: './Assets/Gen1/meowth.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _53 = {
    name: 'Persian',
    gif: './Assets/Gen1/persian.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _54 = {
    name: 'Psyduck',
    gif: './Assets/Gen1/psyduck.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _55 = {
    name: 'Golduck',
    gif: './Assets/Gen1/golduck.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _56 = {
    name: 'Mankey',
    gif: './Assets/Gen1/mankey.gif',
    type1: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _57 = {
    name: 'Primeape',
    gif: './Assets/Gen1/primeape.gif',
    type1: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _58 = {
    name: 'Growlithe',
    gif: './Assets/Gen1/growlithe.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _59 = {
    name: 'Arcanine',
    gif: './Assets/Gen1/arcanine.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _60 = {
    name: 'Poliwag',
    gif: './Assets/Gen1/poliwag.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _61 = {
    name: 'Poliwhirl',
    gif: './Assets/Gen1/poliwhirl.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _62 = {
    name: 'Poliwrath',
    gif: './Assets/Gen1/poliwrath.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _63 = {
    name: 'Abra',
    gif: './Assets/Gen1/abra.gif',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _64 = {
    name: 'Kadabra',
    gif: './Assets/Gen1/kadabra.gif',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _65 = {
    name: 'Alakazam',
    gif: './Assets/Gen1/alakazam.gif',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _66 = {
    name: 'Machop',
    gif: './Assets/Gen1/machop.gif',
    type1: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _67 = {
    name: 'Machoke',
    gif: './Assets/Gen1/machoke.gif',
    type1: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _68 = {
    name: 'Machamp',
    gif: './Assets/Gen1/machamp.gif',
    type1: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _69 = {
    name: 'Bellsprout',
    gif: './Assets/Gen1/bellsprout.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _70 = {
    name: 'Weepinbell',
    gif: './Assets/Gen1/weepinbell.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _71 = {
    name: 'Victreebel',
    gif: './Assets/Gen1/victreebel.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _72 = {
    name: 'Tentacool',
    gif: './Assets/Gen1/tentacool.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _73 = {
    name: 'Tentacruel',
    gif: './Assets/Gen1/Tentacruel.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _74 = {
    name: 'Geodude',
    gif: './Assets/Gen1/geodude.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _75 = {
    name: 'Graveler',
    gif: './Assets/Gen1/graveler.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _76 = {
    name: 'Golem',
    gif: './Assets/Gen1/golem.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _77 = {
    name: 'Ponyta',
    gif: './Assets/Gen1/ponyta.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _78 = {
    name: 'Rapidash',
    gif: './Assets/Gen1/rapidash.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _79 = {
    name: 'Slowpoke',
    gif: './Assets/Gen1/slowpoke.gif',
    type1: './Assets/Types/water.png',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _80 = {
    name: 'Slowbro',
    gif: './Assets/Gen1/slowbro.gif',
    type1: './Assets/Types/water.png',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _81 = {
    name: 'Magnemite',
    gif: './Assets/Gen1/magnemite.gif',
    type1: './Assets/Types/electric.png',
    type1: './Assets/Types/steel.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _82 = {
    name: 'Magneton',
    gif: './Assets/Gen1/magneton.gif',
    type1: './Assets/Types/electric.png',
    type1: './Assets/Types/steel.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _83 = {
    name: 'Farfetchd',
    gif: './Assets/Gen1/farfetchd.gif',
    type1: './Assets/Types/normal.png',
    type1: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _84 = {
    name: 'Doduo',
    gif: './Assets/Gen1/doduo.gif',
    type1: './Assets/Types/normal.png',
    type1: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _85 = {
    name: 'Dodrio',
    gif: './Assets/Gen1/dodrio.gif',
    type1: './Assets/Types/normal.png',
    type1: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _86 = {
    name: 'Seel',
    gif: './Assets/Gen1/seel.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _87 = {
    name: 'Dewgong',
    gif: './Assets/Gen1/dewgong.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/ice.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _88 = {
    name: 'Grimer',
    gif: './Assets/Gen1/dewgong.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _89 = {
    name: 'Muk',
    gif: './Assets/Gen1/muk.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _90 = {
    name: 'Shellder',
    gif: './Assets/Gen1/shellder.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _91 = {
    name: 'Cloyster',
    gif: './Assets/Gen1/cloyster.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/ice.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _92 = {
    name: 'Gastly',
    gif: './Assets/Gen1/gastly.gif',
    type1: './Assets/Types/ghost.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _93 = {
    name: 'Haunter',
    gif: './Assets/Gen1/haunter.gif',
    type1: './Assets/Types/ghost.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _94 = {
    name: 'Gengar',
    gif: './Assets/Gen1/gengar.gif',
    type1: './Assets/Types/ghost.png',
    type2: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _95 = {
    name: 'Onix',
    gif: './Assets/Gen1/onix.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _96 = {
    name: 'Drowzee',
    gif: './Assets/Gen1/drowzee.gif',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _97 = {
    name: 'Hypno',
    gif: './Assets/Gen1/hypno.gif',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _98 = {
    name: 'Krabby',
    gif: './Assets/Gen1/krabby.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _99 = {
    name: 'Kingler',
    gif: './Assets/Gen1/kingler.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _100 = {
    name: 'Voltorb',
    gif: './Assets/Gen1/voltorb.gif',
    type1: './Assets/Types/electric.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _101 = {
    name: 'Electrode',
    gif: './Assets/Gen1/electrode.gif',
    type1: './Assets/Types/electric.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _102 = {
    name: 'Exeggcute',
    gif: './Assets/Gen1/exeggcute.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _103 = {
    name: 'Exeggutor',
    gif: './Assets/Gen1/exeggutor.gif',
    type1: './Assets/Types/grass.png',
    type2: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _104 = {
    name: 'Cubone',
    gif: './Assets/Gen1/cubone.gif',
    type1: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _105 = {
    name: 'Marowak',
    gif: './Assets/Gen1/marowak.gif',
    type1: './Assets/Types/ground.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _106 = {
    name: 'Hitmonlee',
    gif: './Assets/Gen1/hitmonlee.gif',
    type1: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _107 = {
    name: 'Hitmonchan',
    gif: './Assets/Gen1/hitmonchan.gif',
    type1: './Assets/Types/fighting.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _108 = {
    name: 'Lickitung',
    gif: './Assets/Gen1/lickitung.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _109 = {
    name: 'Koffing',
    gif: './Assets/Gen1/koffing.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _110 = {
    name: 'Weezing',
    gif: './Assets/Gen1/weezing.gif',
    type1: './Assets/Types/poison.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _111 = {
    name: 'Rhyhorn',
    gif: './Assets/Gen1/rhyhorn.gif',
    type1: './Assets/Types/ground.png',
    type2: './Assets/Types/rock.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _112 = {
    name: 'Rhydon',
    gif: './Assets/Gen1/rhydon.gif',
    type1: './Assets/Types/ground.png',
    type2: './Assets/Types/rock.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _113 = {
    name: 'Chansey',
    gif: './Assets/Gen1/chansey.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _114 = {
    name: 'Tangela',
    gif: './Assets/Gen1/tangela.gif',
    type1: './Assets/Types/grass.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _115 = {
    name: 'Kangaskhan',
    gif: './Assets/Gen1/kangaskhan.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _116 = {
    name: 'Horsea',
    gif: './Assets/Gen1/horsea.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _117 = {
    name: 'Seadra',
    gif: './Assets/Gen1/seadra.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _118 = {
    name: 'Goldeen',
    gif: './Assets/Gen1/goldeen.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _119 = {
    name: 'Seaking',
    gif: './Assets/Gen1/seaking.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _120 = {
    name: 'Staryu',
    gif: './Assets/Gen1/staryu.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _121 = {
    name: 'Starmie',
    gif: './Assets/Gen1/starmie.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _122 = {
    name: 'Mr. Mime',
    gif: './Assets/Gen1/mr.mime.gif',
    type1: './Assets/Types/psychic.png',
    type2: './Assets/Types/fairy.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _123 = {
    name: 'Scyther',
    gif: './Assets/Gen1/scyther.gif',
    type1: './Assets/Types/bug.png',
    type2: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _124 = {
    name: 'Jynx',
    gif: './Assets/Gen1/jynx.gif',
    type1: './Assets/Types/ice.png',
    type2: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _125 = {
    name: 'Electabuzz',
    gif: './Assets/Gen1/electabuzz.gif',
    type1: './Assets/Types/electric.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _126 = {
    name: 'Magmar',
    gif: './Assets/Gen1/magmar.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _127 = {
    name: 'Pinsir',
    gif: './Assets/Gen1/pinsir.gif',
    type1: './Assets/Types/bug.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _128 = {
    name: 'Tauros',
    gif: './Assets/Gen1/tauros.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _129 = {
    name: 'Magikarp',
    gif: './Assets/Gen1/magikarp.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _130 = {
    name: 'Gyarados',
    gif: './Assets/Gen1/gyarados.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _131 = {
    name: 'Lapras',
    gif: './Assets/Gen1/lapras.gif',
    type1: './Assets/Types/water.png',
    type2: './Assets/Types/ice.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _132 = {
    name: 'Ditto',
    gif: './Assets/Gen1/ditto.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _133 = {
    name: 'Eevee',
    gif: './Assets/Gen1/eevee.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _134 = {
    name: 'Vaporeon',
    gif: './Assets/Gen1/vaporeon.gif',
    type1: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _135 = {
    name: 'Jolteon',
    gif: './Assets/Gen1/jolteon.gif',
    type1: './Assets/Types/electric.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _136 = {
    name: 'Flareon',
    gif: './Assets/Gen1/flareon.gif',
    type1: './Assets/Types/fire.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _137 = {
    name: 'Porygon',
    gif: './Assets/Gen1/porygon.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _138 = {
    name: 'Omanyte',
    gif: './Assets/Gen1/omanyte.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _139 = {
    name: 'Omastar',
    gif: './Assets/Gen1/omastar.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _140 = {
    name: 'Kabuto',
    gif: './Assets/Gen1/kabuto.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _141 = {
    name: 'Kabutops',
    gif: './Assets/Gen1/kabutops.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/water.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _142 = {
    name: 'Aerodactyl',
    gif: './Assets/Gen1/aerodactyl.gif',
    type1: './Assets/Types/rock.png',
    type2: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _143 = {
    name: 'Snorlax',
    gif: './Assets/Gen1/snorlax.gif',
    type1: './Assets/Types/normal.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _144 = {
    name: 'Articuno',
    gif: './Assets/Gen1/articuno.gif',
    type1: './Assets/Types/ice.png',
    type2: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _145 = {
    name: 'Zapdos',
    gif: './Assets/Gen1/zapdos.gif',
    type1: './Assets/Types/electric.png',
    type2: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _146 = {
    name: 'Moltres',
    gif: './Assets/Gen1/moltres.gif',
    type1: './Assets/Types/fire.png',
    type2: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _147 = {
    name: 'Dratini',
    gif: './Assets/Gen1/dratini.gif',
    type1: './Assets/Types/dragon.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _148 = {
    name: 'Dragonair',
    gif: './Assets/Gen1/dragonair.gif',
    type1: './Assets/Types/dragon.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _149 = {
    name: 'Dragonite',
    gif: './Assets/Gen1/dragonite.gif',
    type1: './Assets/Types/dragon.png',
    type2: './Assets/Types/flying.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _150 = {
    name: 'Mewtwo',
    gif: './Assets/Gen1/mewtwo.gif',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

  _151 = {
    name: 'Mew',
    gif: './Assets/Gen1/mew.gif',
    type1: './Assets/Types/psychic.png',
    hp: 0,
    atk: 0,
    def: 0,
    spAtk: 0,
    spDef: 0,
    spd: 100
  },

]