import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryItemsLi = document.querySelectorAll('.gallery__item');
const backDrop = document.querySelector('.js-backdrop');
const closeModalBtn = document.querySelector('[data-action="close-backdrop"]');

const elements = galleryItems.map(item => createGalleryMarkup(item)).join('');
gallery.insertAdjacentHTML('afterbegin', elements);

gallery.addEventListener('click', onGalleryOpenBackDrop);
closeModalBtn.addEventListener('click', onCloseBackDrop);
backDrop.addEventListener('click', onBackDropClick);

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

function onGalleryOpenBackDrop(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseBackDrop() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyPress);
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBackDrop();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseBackDrop();
  }
}

// const lightBox = document.createElement('div');
// lightBox.id = 'lightbox';
// document.body.appendChild(lightBox);

// galleryImages.forEach(image => {
//   image.addEventListener('click', event => {
//     event.preventDefault();

//     const originalImageSrc = image
//       .querySelector('.gallery__image')
//       .getAttribute('data-source');

//     lightBox.innerHTML = `
//       <div class="lightbox__content">
//         <img class="lightbox__image" src="${originalImageSrc}" alt="Full Image" loading="lazy"/>
//       </div>
//     `;

//     lightBox.classList.add('active');

//     lightbox.addEventListener('click', event => {
//       if (event.target !== event.currentTarget) {
//         return;
//       }

//       lightBox.classList.remove('active');
//     });
//   });
// });

// currentTarget = element with event listener
// target = CLICKED ELEMENT(p)
