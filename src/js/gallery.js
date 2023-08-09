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
console.log(galleryImages);

if (galleryImages) {
  galleryImages.forEach(function (image) {
    image.onclick = function () {
      alert('it works');
    };
  });
}
