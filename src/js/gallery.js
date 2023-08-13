import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const backDrop = document.querySelector('.js-backdrop');
const closeModalBtn = document.querySelector('[data-action="close-backdrop"]');
const arrowPrevImg = document.querySelector('[data-action="previous-img"]');
const arrowNextImg = document.querySelector('[data-action="next-img"]');
const modalWndw = document.querySelector('.modal');

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

let currentActiveImgIndex;

function onGalleryOpenBackDrop(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);

  const originalImageSrc = event.target.getAttribute('data-source');
  const alt = event.target.getAttribute('alt');

  showOriginalImg(originalImageSrc, alt);

  currentActiveImgIndex = [...gallery.children].indexOf(
    event.target.closest('.gallery__item')
  );

  arrowNextImg.addEventListener('click', showNextImg);
  arrowPrevImg.addEventListener('click', showPrevImg);

  window.addEventListener('keydown', onArrowKeyPress);
}

function onCloseBackDrop() {
  document.body.classList.remove('show-modal');
  window.removeEventListener('keydown', onEscKeyPress);
  window.removeEventListener('keydown', onArrowKeyPress);
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseBackDrop();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';

  if (event.code === ESC_KEY_CODE) {
    onCloseBackDrop();
  }
}

// currentTarget = element with event listener
// target = CLICKED ELEMENT(p)

function showOriginalImg(imageSrc, alt) {
  const originalImageConentDiv = document.querySelector(
    '.original_image_conent'
  );

  originalImageConentDiv.innerHTML = `
    <img
      class="lightbox__image"
      src="${imageSrc}"
      alt="${alt}"
      loading="lazy"
      data-active
    />`;
}

////////////////
// function showNextImg() {
//   const nextImgSrc = gallery.children[currentActiveImgIndex + 1]
//     .querySelector('.gallery__image')
//     .getAttribute('data-source');

//   const nextImgAlt = gallery.children[currentActiveImgIndex + 1]
//     .querySelector('.gallery__image')
//     .getAttribute('alt');

//   showOriginalImg(nextImgSrc, nextImgAlt);

//   currentActiveImgIndex += 1;

//   if (currentActiveImgIndex >= gallery.children.length - 1) {
//     currentActiveImgIndex = -1;
//   }
// }

function showNextImg() {
  console.log('works');
  const nextImgIndex = (currentActiveImgIndex + 1) % gallery.children.length;

  const { original, description } = galleryItems[nextImgIndex];

  showOriginalImg(original, description);

  currentActiveImgIndex = nextImgIndex;
}

function showPrevImg() {
  console.log('works');
  const prevImgIndex =
    (currentActiveImgIndex - 1 + gallery.children.length) %
    gallery.children.length;

  const { original, description } = galleryItems[prevImgIndex];

  showOriginalImg(original, description);

  currentActiveImgIndex = prevImgIndex;
}

function onArrowKeyPress(event) {
  if (event.code === 'ArrowRight') {
    showNextImg();
  } else if (event.code === 'ArrowLeft') {
    showPrevImg();
  }
}
