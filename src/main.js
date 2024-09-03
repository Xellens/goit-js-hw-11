import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api.js';
import { createGalleryCard } from './js/render-functions.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEL = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

function showLoader() {
  loaderEl.classList.remove('is-hidden');
}
function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

showLoader();
setTimeout(hideLoader, 2000);

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedValue = searchFormEl.elements.user_query.value.trim();

  fetchPhotos(searchedValue)
    .then(data => {
      if (searchedValue === '') {
        iziToast.warning({
          title: 'Caution',
          message: 'Input field must not be empty',
          position: 'topLeft',
        });
        galleryEL.innerHTML = '';
        searchFormEl.reset();
        return;
      }
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryEL.innerHTML = '';
        searchFormEl.reset();
        return;
      }
      console.log(data);
      const galleryCards = data.hits
        .map(imgDetals => createGalleryCard(imgDetals))
        .join('');
      galleryEL.innerHTML = galleryCards;

      const lightbox = new SimpleLightbox('.js-gallery a', {
        overlay: true,
        captionsData: 'alt',
        overlayOpacity: 0.8,
        captionDelay: 250,
        focus: true,
      });
      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
