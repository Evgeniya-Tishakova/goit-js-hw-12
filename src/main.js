// Бібліотека Іzitoast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Бібліотека SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getItemsBySearch } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-functions';




const formEl = document.querySelector('.js-search-form');
const inputEl = document.querySelector('.js-search-input');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.button-load')

loader.style.display = 'none';
loadBtn.style.display = 'none';

const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionsDelay: 250,
  animationSpeed: 500,
  fadeSpeed: 500,
  zoom: true,
  scaleImageToRatio: true,
  enableKeyboard: true,
});

let page = 1;
let prevQuery = '';

formEl.addEventListener('submit', async event => {
  loadBtn.style.display = 'none';
  try {
    event.preventDefault();
    loader.style.display = 'inline-block';
  
    const currentQuery = inputEl.value.trim();
  
    if (currentQuery === '') {
      return iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no empty strings allowed in search field. Please, try again!',
        messageColor: '#fafafb;',
        position: 'topRight',
        backgroundColor: '#ef4040',
      });
    }

    if (currentQuery !== prevQuery) {
      prevQuery = currentQuery;
      page = 1
    } else {
      page++;
    }
  
    const {data} = await getItemsBySearch(currentQuery, page);
   
        if (data.hits.length === 0) {
          iziToast.show({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please, try again!',
            messageColor: '#fafafb;',
            position: 'topRight',
            backgroundColor: '#ef4040',
          });
  
          galleryEl.innerHTML = '';
          loadBtn.style.display = 'none';
          loader.style.display = 'none';
          return;
        }
  
      

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      galleryEl.innerHTML = galleryTemplate;
      galleryModal.refresh();
      loadBtn.style.display = 'inline-block';
        checkTotal(data.totalHits);
        scrollDown();
  } catch (err) {
console.log(err)
    iziToast.error({
      message: 'Error fetching images. Please try again later.',
      position: 'topRight',
    });
    loadBtn.style.display = 'none';
  } 
  
    formEl.reset();
    loader.style.display = 'none';

  });


loadBtn.addEventListener('click', async (event) => {
  loadBtn.style.display = 'none';

  try {
    event.preventDefault();
    loader.style.display = 'inline-block';

    page++;
  
    const {data} = await getItemsBySearch(prevQuery, page);
   
        if (data.hits.length === 0) {
          iziToast.show({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please, try again!',
            messageColor: '#fafafb;',
            position: 'topRight',
            backgroundColor: '#ef4040',
          });
  
          loadBtn.style.display = 'none';
          loader.style.display = 'none';
          return;
        }
  
      

      const galleryTemplate = data.hits
        .map(el => createGalleryCardTemplate(el))
        .join('');
      galleryEl.innerHTML += galleryTemplate;
      galleryModal.refresh();
      loadBtn.style.display = 'inline-block';
      checkTotal(data.totalHits);
      scrollDown();
  } catch (err) {

    iziToast.error({
      message: 'Error fetching images. Please try again later.',
      position: 'topRight',
    });
    loadBtn.style.display = 'none';
  } 
  

    loader.style.display = 'none';
  })

 
  function checkTotal(total) {
    if (page * 15 >= total) {
      loadBtn.style.display = 'none';
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  }

  function scrollDown() {
    let cardHeight = document.querySelector('.gallery-card').getBoundingClientRect().height;
    console.log(document.body.scrollTop , Math.floor(cardHeight*2))
    window.scrollBy({
      top: document.body.scrollTop + Math.floor(cardHeight*2),
      behavior : "smooth"
    })
  }