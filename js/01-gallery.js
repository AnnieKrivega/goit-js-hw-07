import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');

const createGalleryMarkup = items => {
return items.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
    </li>
    `;
    })
    .join('');
};

gallery.innerHTML += createGalleryMarkup(galleryItems);

let lightbox; 

const openImage = event => {
const { nodeName, dataset, alt } = event.target;
event.preventDefault();
if (nodeName !== 'IMG') {
    return;
}
lightbox = basicLightbox.create(`
    <img src="${dataset.source}" alt="${alt}" />
`);
lightbox.show();
document.addEventListener('keydown', closeImage);
};

gallery.addEventListener('click', openImage);

const closeImage = event => {
if (event.key === 'Escape') {
    lightbox.close();
    document.removeEventListener('keydown', closeImage);
}
};

