(function pageLoader() {
    try {
        const userData = JSON.parse(sessionStorage.getItem("userData"))
        const userLogado = userData.nickname

        const user = document.querySelector("#user");
        user.innerHTML += `${userData.nickname} Pokedex`;


        const render = () => {

            for (let n = 1; n < 152; n++) {
                const ul = document.querySelector("[js-data='list']")
                const li = document.createElement("li")

                const card = document.createElement("article")
                card.setAttribute("class", "card")

                const flip = document.createElement("div")
                flip.setAttribute("class", "flip")

                const frontCard = document.createElement("div")
                frontCard.setAttribute("class", "frontCard")
                frontCard.setAttribute("loading", "lazy")
                frontCard.style.setProperty("background-image", `url("./Assets/Background/${pkm[n].type1}.png")`)
                frontCard.style.setProperty("border-image", `radial-gradient(${typeColor(pkm[n].type1, 0)},${typeColor(pkm[n].type1, 1)}) 1`)


                const pokemonName = document.createElement("h1")
                pokemonName.setAttribute("class", "describe")
                pokemonName.style.setProperty("background-image", `linear-gradient(${typeColor(pkm[n].type1, 0)},${typeColor(pkm[n].type1, 1)})`)
                pokemonName.innerHTML = pkm[n].name

                const cardImage = document.createElement("div")
                cardImage.setAttribute("class", "cardImage")

                const pokemon = document.createElement("img")
                pokemon.setAttribute("class", "pokemon")
                pokemon.setAttribute("src", `./Assets/Gen1/${pkm[n].name}.gif`)

                const pokemonType = document.createElement("div")
                pokemonType.setAttribute("class", "describe")

                const types = document.createElement("span")
                types.setAttribute("class", "types")
                types.style.setProperty("background-image", `linear-gradient(${typeColor(pkm[n].type1, 0)},${typeColor(pkm[n].type1, 1)})`)

                const type1 = document.createElement("img")
                type1.setAttribute("class", "type")
                type1.setAttribute("src", `./Assets/Types/${pkm[n].type1}.png`)
                types.append(type1)

                if (pkm[n].type2) {
                    const type2 = document.createElement("img")
                    type2.setAttribute("class", "type")
                    type2.setAttribute("src", `./Assets/Types/${pkm[n].type2}.png`)
                    types.append(type2)
                }

                const backCard = document.createElement("div")
                backCard.setAttribute("class", "backCard")
                backCard.style.setProperty("border-image", `radial-gradient(${typeColor(pkm[n].type1, 0)},${typeColor(pkm[n].type1, 1)}) 1`)
                backCard.style.setProperty("background-image", `url("./Assets/backCard/${pkm[n].type1}.png")`)
                
                const pokemonNameBack = document.createElement("h1")
                pokemonNameBack.setAttribute("class", "describe")
                pokemonNameBack.style.setProperty("background-image", `linear-gradient(${typeColor(pkm[n].type1, 0)},${typeColor(pkm[n].type1, 1)})`)
                pokemonNameBack.innerHTML = pkm[n].name

                const attributes = document.createElement("div")
                attributes.setAttribute("class", "attributes")

                const br = document.createElement("br")

                const hp = document.createElement("h2")
                hp.innerHTML = "HP"

                const hpVal = document.createElement("h2")
                hpVal.innerHTML = pkm[n].hp

                const atk = document.createElement("h2")
                atk.innerHTML = "Attack"

                const atkVal = document.createElement("h2", "br")
                atkVal.innerHTML = pkm[n].atk

                const def = document.createElement("h2")
                def.innerHTML = "Defense"

                const defVal = document.createElement("h2")
                defVal.innerHTML = pkm[n].def

                const spAtk = document.createElement("h2")
                spAtk.innerHTML = "Sp Attack"

                const spAtkVal = document.createElement("h2")
                spAtkVal.innerHTML = pkm[n].spAtk

                const spDef = document.createElement("h2")
                spDef.innerHTML = "Sp Defense"

                const spDefVal = document.createElement("h2")
                spDefVal.innerHTML = pkm[n].spDef

                const spd = document.createElement("h2")
                spd.innerHTML = "Speed"

                const spdVal = document.createElement("h2")
                spdVal.innerHTML = pkm[n].spd

                ul.append(li)
                li.append(card)

                card.append(flip)
                flip.append(frontCard, backCard)
                frontCard.append(pokemonName, cardImage, pokemonType)
                cardImage.append(pokemon)
                pokemonType.append(types)

                backCard.append(pokemonNameBack, attributes)
                attributes.append(hp,
                    hpVal,
                    br.cloneNode(),
                    atk,
                    atkVal,
                    br.cloneNode(),
                    def,
                    defVal,
                    br.cloneNode(),
                    spAtk,
                    spAtkVal,
                    br.cloneNode(),
                    spDef,
                    spDefVal,
                    br.cloneNode(),
                    spd,
                    spdVal)
            }
        }

        function typeColor(type, n) {
            const bug = ["#5F8D3B", "#A4A993"]          //5F8D3B    A4A993
            const dragon = ["#A9FDFA", "#D7FFFE"]       //D7FFFE    A9FDFA
            const electric = ["#FFDF00", "#FFCC00"]     //FFDF00    FFCC00
            const fairy = ["#F765B8", "#FF85DA"]        //FF85DA    F765B8
            const fighting = ["#F25B43", "#FAA528"]     //F25B43    FAA528
            const fire = ["#FA0", "#B22"]               //FA0       B22
            const flying = ["#E6E0D4", "#FAF9F5"]       //E6E0D4    FAF9F5
            const ice = ["#F6F6F7", "#B0C2D7"]          //F6F6F7    B0C2D7
            const ghost = ["#453A68", "#CAC0F7"]        //453A68    CAC0F7
            const grass = ["#008f68", "#fae042"]        //008f68    fae042
            const ground = ["#FACF41", "#D4AF37"]       //D4AF37    FACF41
            const normal = ["#FFE1A8", "#FAEDD2"]       //FFE1A8    FAEDD2
            const poison = ["#98D7A5", "#4828C5"]       //98D7A5    4828C5
            const psychic = ["#FF69B3", "#A15AC4"]      //FF69B3    A15AC4
            const rock = ["#A48369", "#6E4D43"]         //6E4D43    A48369
            const steel = ["#A6A6A6", "#D8D8D8"]        //A6A6A6    D8D8D8
            const water = ["#74ccf4", "#20B2AB"]        //74ccf4    20B2AB

            switch (type) {
                case "bug":
                    type = bug[n];
                    break;

                case "dragon":
                    type = dragon[n];
                    break;

                case "electric":
                    type = electric[n];
                    break;

                case "fairy":
                    type = fairy[n];
                    break;

                case "fighting":
                    type = fighting[n];
                    break;

                case "fire":
                    type = fire[n];
                    break;

                case "flying":
                    type = flying[n];
                    break;

                case "ice":
                    type = ice[n];
                    break;

                case "ghost":
                    type = ghost[n];
                    break;

                case "grass":
                    type = grass[n];
                    break;

                case "ground":
                    type = ground[n];
                    break;

                case "normal":
                    type = normal[n];
                    break;

                case "poison":
                    type = poison[n];
                    break;

                case "psychic":
                    type = psychic[n];
                    break;

                case "rock":
                    type = rock[n];
                    break;

                case "steel":
                    type = steel[n];
                    break;

                case "water":
                    type = water[n];
                    break;

                default:
                    console.log("Type not registered yet: " + type);
            }
            return type
        }

        render();

    } catch (error) {
        return error
    }
})()

function quit() {
    window.location.href = "./index.html";
}
