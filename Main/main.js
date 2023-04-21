(function pageLoader() {
    try {
        const userData = JSON.parse(sessionStorage.getItem('userData'))
        const userLogado = userData.nickname

        const user = document.querySelector("#user");
        user.innerHTML += `${userData.nickname} Pokedex`;


        const render = () => {
            const ul = document.querySelector('[js-data="list"]');

            const li = document.createElement('li')
            const gif = document.createElement('img')
            const nameContainer = document.createElement('h1')
            const typeContainer = document.createElement('p')
            const [type] = types




        }

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