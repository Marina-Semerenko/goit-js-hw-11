import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import {createGallery, clearGallery, showLoader, hideLoader,
} from './js/render-functions';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', hahdleSearch);

function hahdleSearch(event) {
    event.preventDefault();
    
    const querySearch = event.target.elements['search-text'].value.trim();

    if (querySearch === "") {
        iziToast.error({
            message: 'Please enter a search query!',            
         });
        return;
    }
    clearGallery();
    showLoader();

    getImagesByQuery(querySearch)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                });
                return;
            } 
                createGallery(data.hits);
            
        })
          .catch(error => {
            iziToast.error({
                message: 'Something went wrong. Try again later.',
                position: 'topRight',
            });
        })
        .finally(() => {
            hideLoader();
            event.target.reset();
        });
            }
        




