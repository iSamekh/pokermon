(function pageLoader() {
    try {
        const userData = JSON.parse(sessionStorage.getItem('userData'))
        const userLogado = userData.nickname

        const user = document.querySelector("#user");
        user.innerHTML += `${userData.nickname} Pokedex`;


        const render = () => {

            const ul = document.querySelector('[js-data="list"]')
            const li = document.createElement('li')

            const card = document.createElement('article')
            card.setAttribute('class','card')

            const flip = document.createElement('div')
            flip.setAttribute('class','flip')

            const frontCard = document.createElement('div')
            frontCard.setAttribute('class','frontCard')
            frontCard.style.setProperty('background-image','url("./Assets/Background/deepForest.png")')
            frontCard.style.setProperty('border-image','radial-gradient(#008f68,#fae042) 1')

            const pokemonName = document.createElement('h1')
            pokemonName.setAttribute('class','describe')
            pokemonName.style.setProperty('background-image','linear-gradient(#008f68,#fae042)')

            pokemonName.innerHTML = 'Bulbasaur'

            const cardImage = document.createElement('div')
            cardImage.setAttribute('class','cardImage')

            const pokemon = document.createElement('img')
            pokemon.setAttribute('class','pokemon')
            pokemon.setAttribute('src','./Assets/Gen1/1.gif')

            const pokemonType = document.createElement('div')
            pokemonType.setAttribute('class','describe')

            const types = document.createElement('span')
            types.setAttribute('class','types')

            const type1 = document.createElement('img')
            type1.setAttribute('class','type')
            type1.setAttribute('src','./Assets/Types/Grass.png')

            const type2 = document.createElement('img')
            type2.setAttribute('class','type')
            type2.setAttribute('src','./Assets/Types/Poison.png')


            const backCard = document.createElement('div')
            backCard.setAttribute('class','backCard')
            backCard.style.setProperty('border-image','radial-gradient(#008f68,#fae042) 1')
            backCard.style.setProperty('background-image','url("./Assets/backCard/grass.jpg")')

            const pokemonNameBack = document.createElement('h1')
            pokemonNameBack.setAttribute('class','describe')
            pokemonNameBack.innerHTML = 'Bulbasaur'

            const attributes = document.createElement('div')
            attributes.setAttribute('class','attributes')

            const br = document.createElement('br')

            const hp = document.createElement('h2')
            hp.innerHTML = 'HP'

            const hpVal = document.createElement('h2')
            hpVal.innerHTML = 45

            const atk = document.createElement('h2')
            atk.innerHTML = 'Attack'

            const atkVal = document.createElement('h2','br')
            atkVal.innerHTML = 49

            const def = document.createElement('h2')
            def.innerHTML = 'Defense'

            const defVal = document.createElement('h2')
            defVal.innerHTML = 49

            const spAtk = document.createElement('h2')
            spAtk.innerHTML = 'Sp Attack'

            const spAtkVal = document.createElement('h2')
            spAtkVal.innerHTML = 65

            const spDef = document.createElement('h2')
            spDef.innerHTML = 'Sp Defense'

            const spDefVal = document.createElement('h2')
            spDefVal.innerHTML = 65

            const spd = document.createElement('h2')
            spd.innerHTML = 'Speed'

            const spdVal = document.createElement('h2')
            spdVal.innerHTML = 45

 //           const [type] = typeColor

            ul.append(li)
            li.append(card)
            
            card.append(flip)
            flip.append(frontCard,backCard)
            frontCard.append(pokemonName,cardImage,pokemonType)
            cardImage.append(pokemon)
            pokemonType.append(types)
            types.append(type1,type2)

            backCard.append(pokemonNameBack,attributes)
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

        render();


        const typeColor = type => {
            const normal = '#F5F5F5'
            return {
                normal,
                fire: '#FDDFDF',
                grass: '#DEFDE0',
                electric: '#FCF7DE',
                ice: '#DEF3FD',
                water: '#DEDEDE',
                ground: '#F4E7DA',
                rock: '#D5D5D4',
                fairy: '#FCEAFF',
                poison: '#98D7A5',
                bug: '#F8D5A3',
                ghost: '#CAC0F7',
                dragon: '#97B3E6',
                psychic: '#EAEDA1',
                fighting: '#E6E0D4'
            }
            [type] || normal
        }

    } catch (error) {
        return error
    }
})()

function quit() {
    window.location.href = "./index.html";
}