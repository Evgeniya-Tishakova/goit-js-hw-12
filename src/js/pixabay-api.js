//Бібліотека Axios
import axios from 'axios';


  export const getItemsBySearch = (searchQuery, page) => {

    const searchParams = new URLSearchParams({
        q: searchQuery,
      key: '48211636-c2e7af5b30d3e402d83d1fb79',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    });

    return axios.get(`https://pixabay.com/api/?${searchParams}`)
  };