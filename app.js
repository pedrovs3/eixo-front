const fetchApi = async () => {
    const response = await fetch('https://educ-yt-crawler.netlify.app/.netlify/functions/api/v1/search/details/?q=fisica/')
    const data = await response.json()

    return data
}

const { data } = await fetchApi() 

const criaImagem = () => {
    const main = document.querySelector('main');
    main.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${data[0].videos[0]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
};

console.log(await fetchApi())
criaImagem()