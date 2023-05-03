import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');

const createGalleryMarkup = items => {
    return items.map(({ preview, original, description }) => {
        return  `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>
    `;
    })
    .join('');
};

gallery.innerHTML += createGalleryMarkup(galleryItems);

const lightboxOptions = {
    captions: true,
    captionsDate: 'alt',
    captionsDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery a', lightboxOptions);

const openImage = event => {
    event.preventDefault();
    lightbox.open({
        source: event.target.parentNode.href,
        caption: event.target.alt,
    });
};

gallery.addEventListener('click', openImage);