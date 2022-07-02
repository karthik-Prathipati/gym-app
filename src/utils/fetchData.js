const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_URL_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_URL_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

async function fetchData(url, options) {
    const responce = await fetch(url, options)
    const data = await responce.json();
    return data;
}
export { exerciseOptions, fetchData, youtubeOptions };


