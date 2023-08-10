import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const elements = galleryItems.map(item => createGalleryMarkup(item)).join('');
gallery.insertAdjacentHTML('afterbegin', elements);

function createGalleryMarkup({ preview, original, description }) {
  return `
   <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          loading="lazy"
        />
      </a>
    </li>`;
}

///// ALT V
// const markUp = galleryItems.map(({ preview, original, description }) => {
//   return `
//    <li class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </li>`;
// });

const galleryImages = document.querySelectorAll('.gallery__item');

const lightBox = document.createElement('div');
lightBox.id = 'lightbox';
document.body.appendChild(lightBox);

///
galleryImages.forEach(image => {
  image.addEventListener('click', event => {
    event.preventDefault();

    const originalImageSrc = image
      .querySelector('.gallery__image')
      .getAttribute('data-source');

    lightBox.innerHTML = `
      <div class="lightbox__content">
        <img class="lightbox__image" src="${originalImageSrc}" alt="Full Image" loading="lazy"/>
      </div>
    `;

    lightBox.classList.add('active');

    lightbox.addEventListener('click', event => {
      if (event.target !== event.currentTarget) {
        return;
      }

      lightBox.classList.remove('active');
    });
  });
});
