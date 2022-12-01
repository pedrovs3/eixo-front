const fetchApi = async (search) => {
    const response = await fetch(`https://educ-yt-crawler.netlify.app/.netlify/functions/api/v1/search/details/?q=${search}/`)
    const data = await response.json()

    return data
}

const criaImagem = async (indice, classToAppend, search) => {
    var { data } = await fetchApi(search)
    const main = document.querySelector(`#${classToAppend}`);

    main.innerHTML += `
    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/${data[0].videos[indice]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
};

for(let i =0; i < 7; i++) {
    let random = generateRandomIntegerInRange(0, 100)
    criaImagem(random, 'fisic_content', 'física').then(r => r)
    criaImagem(random, 'math_content', 'matemática')
    criaImagem(random, 'english_content', 'inglês')
    criaImagem(random, 'portuguese_content', 'português')
}

// CONSTRUIR UM MATH RANDOM PARA PEGAR VIDEOS ALEATÓRIOS POSTERIORMENTE.
// const loading = () => {
//     const loading = document.querySelector('.loading')
//     loading.remove();
// }
//
// setTimeout(loading, 7000)

function generateRandomIntegerInRange(min = 0, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const handleButton = async () => {
    const search = document.querySelector('#content-search').value
    const { data } = await fetchApi(search)
    console.log(data)
    const main = document.querySelector(`#content`);
    main.innerHTML = '';
    const ul = document.createElement('ul')
    ul.classList.add('list')
    ul.classList.add('content__list')
    ul.style.flexWrap = 'wrap';
    ul.style.justifyContent = 'center'
    let random = generateRandomIntegerInRange(7, 25)


    for (let i = 1 ; i<= random; i++) {
        let random = generateRandomIntegerInRange(0, data[0].videos.length)
        console.log(random)
        ul.innerHTML += `  <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/${data[0].videos[random]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    main.appendChild(ul);
}

const handleTrendingButton = async (e) => {
    const { data } = await fetchApi(e)
    const main = document.querySelector(`#content`);
    const ul = document.createElement('ul')
    ul.classList.add('list')
    ul.classList.add('content__list')
    ul.style.flexWrap = 'wrap';
    ul.style.justifyContent = 'center'
    let random = generateRandomIntegerInRange(7, 25)
    main.innerHTML = ``;

    for (let i = 1 ; i<= random; i++) {
        let random = generateRandomIntegerInRange(0, data[0].videos.length)
        ul.innerHTML += `  <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/${data[0].videos[random]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }

    main.appendChild(ul);
}



