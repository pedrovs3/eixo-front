const fetchApi = async () => {
    const response = await fetch('https://educ-yt-crawler.netlify.app/.netlify/functions/api/v1/search/details/?q=fisica/')
    const data = await response.json()

    return data
}

const criaImagem = async (indice) => {
    const { data } = await fetchApi()
    console.log(data)
    const main = document.querySelector('.content__list');

    main.innerHTML += `
    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/${data[0].videos[indice]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
};

for (let i =0; i < 7; i++) {
    criaImagem(i)
}

