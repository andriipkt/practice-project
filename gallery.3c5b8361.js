!function(){var o=document.querySelector(".gallery"),t=(document.querySelectorAll(".gallery__item"),document.querySelector(".js-backdrop")),e=document.querySelector('[data-action="close-backdrop"]'),a=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}].map((function(o){return e=(t=o).preview,a=t.original,i=t.description,'\n   <li class="gallery__item">\n      <a class="gallery__link" href="'.concat(a,'">\n        <img\n          class="gallery__image"\n          src="').concat(e,'"\n          data-source="').concat(a,'"\n          alt="').concat(i,'"\n          loading="lazy"\n        />\n      </a>\n    </li>');var t,e,a,i})).join("");function i(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",n)}function n(o){"Escape"===o.code&&i()}o.insertAdjacentHTML("afterbegin",a),o.addEventListener("click",(function(o){if(o.preventDefault(),!o.target.classList.contains("gallery__image"))return;document.body.classList.add("show-modal"),window.addEventListener("keydown",n)})),e.addEventListener("click",i),t.addEventListener("click",(function(o){o.currentTarget===o.target&&i()}))}();
//# sourceMappingURL=gallery.3c5b8361.js.map