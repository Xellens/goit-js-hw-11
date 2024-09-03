import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotos } from './js/pixabay-api.js';
import { createGalleryCard } from './js/render-functions.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEL = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.js-gallery a', {
  overlay: true,
  captionsData: 'alt',
  overlayOpacity: 0.8,
  captionDelay: 250,
  focus: true,
});

function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

const onSearchFormSubmit = event => {
  event.preventDefault();
  const searchedValue = searchFormEl.elements.user_query.value.trim();

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

  showLoader();

  fetchPhotos(searchedValue)
    .then(data => {
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

      const galleryCards = data.hits
        .map(imgDetals => createGalleryCard(imgDetals))
        .join('');
      galleryEL.innerHTML = galleryCards;

      lightbox.refresh();
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${err.message}`,
        position: 'topRight',
      });
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
