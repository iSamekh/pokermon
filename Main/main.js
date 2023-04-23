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
            const flip = document.createElement('div')
            const frontCard = document.createElement('div')
            const pokemonName = document.createElement('h1')
            const cardImage = document.createElement('div')
            const pokemon = document.createElement('img')
            const pokemonType = document.createElement('div')
            const types = document.createElement('span')
            const type1 = document.createElement('img')
            const type2 = document.createElement('img')

            const nameContainer = document.createElement('h1')
            const typeContainer = document.createElement('p')

 //           const [type] = typeColor

            card.setAttribute('class','card')
            flip.setAttribute('class','flip')
            
            frontCard.style.setProperty('background-image','url("./Assets/Background/deepForest.png")')
            frontCard.style.setProperty('border-color','darkgreen')

            frontCard.setAttribute('class','frontCard')

            pokemonName.innerHTML = 'Bulbasaur'
            pokemonName.setAttribute('class','describe')
            cardImage.setAttribute('class','cardImage')
            pokemon.setAttribute('class','pokemon')
            pokemon.setAttribute('src','./Assets/Gen1/1.gif')
            pokemonType.setAttribute('class','describe')
            types.setAttribute('class','types')
            type1.setAttribute('class','type')
            type1.setAttribute('src','./Assets/Types/Grass.png')
            type2.setAttribute('class','type')
            type2.setAttribute('src','./Assets/Types/Poison.png')


            ul.append(li)
            li.append(card)
            frontCard.append(pokemonName,cardImage,pokemonType)
            cardImage.append(pokemon)
            pokemonType.append(types)
            types.append(type1,type2)
            card.append(flip,frontCard)

/*                   
            <article class="card">
                <div class="flip">
                <div class="frontCard" style="background-image: url('./Assets/Background/deepForest.png')">
                    <h1 class="describe">Bulbasaur</h1>
                    <div class="cardImage">
                        <img class="pokemon" src="./Assets/Gen1/bulbasaur.gif" />
                    </div>
                    <div class="describe">
                        <span class="types">
                            <img class="type" src="./Assets/Types/Grass.png" />
                            <img class="type" src="./Assets/Types/Poison.png" />
                        </span>
                    </div>
                </div>

                <div class="backCard" style="background-image: url('./Assets/backCard/grass.jpg')">
                    <h1 class="describe">Bulbasaur</h1>
                    <div class="attributes">
                        <h2>HP</h2>
                        <h2>45</h2>
                        <br />
                        <h2>Attack</h2>
                        <h2>49</h2>
                        <br />
                        <h2>Defense</h2>
                        <h2>49</h2>
                        <br />
                        <h2>SP. Atk</h2>
                        <h2>65</h2>
                        <br />
                        <h2>SP. Def</h2>
                        <h2>65</h2>
                        <br />
                        <h2>Speed</h2>
                        <h2>45</h2>
                    </div>
                </div>
            </article>
*/




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