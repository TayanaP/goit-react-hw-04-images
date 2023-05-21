import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '34963526-7ac0071891fccc5e52be44557';

export async function fetchImages(name, page = 1) {
  try {
    const { data } = await axios.get(URL, {
      params: {
        key: KEY,
        q: name,
        page: page,
        per_page: 12,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    console.log(data);
    const { totalHits, hits } = data;
    const images = hits.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
    return { totalHits, images };
  } catch (error) {
    console.log(error.message);
  }
}
