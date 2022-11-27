const fetchApi = async (search) => {
    const response = await fetch(`https://educ-yt-crawler.netlify.app/.netlify/functions/api/v1/search/details/?q=${search}/`)
    const data = await response.json()

    return data
}

const criaImagem = async (indice, classToAppend, search) => {
    const { data } = await fetchApi(search)
    console.log(data)
    const main = document.querySelector(`#${classToAppend}`);

    main.innerHTML += `
    <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/${data[0].videos[indice]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
};

for (let i =0; i < 7; i++) {
    criaImagem(i, 'fisic_content', 'física').then(r => r)
    criaImagem(i, 'math_content', 'matemática')
    criaImagem(i, 'english_content', 'inglês')
    criaImagem(i, 'portuguese_content', 'português')
}

// const loading = () => {
//     const loading = document.querySelector('.loading')
//     loading.remove();
// }
//
// setTimeout(loading, 7000)



