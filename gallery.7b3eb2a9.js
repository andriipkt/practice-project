const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t=document.querySelector(".gallery"),o=document.querySelector(".js-backdrop"),n=document.querySelector('[data-action="close-backdrop"]'),i=document.querySelector('[data-action="previous-img"]'),a=document.querySelector('[data-action="next-img"]'),c=(document.querySelector(".modal"),e.map((e=>function({preview:e,original:t,description:o}){return`\n   <li class="gallery__item">\n      <a class="gallery__link" href="${t}">\n        <img\n          class="gallery__image"\n          src="${e}"\n          data-source="${t}"\n          alt="${o}"\n          loading="lazy"\n        />\n      </a>\n    </li>`}(e))).join(""));let r;function p(){document.body.classList.remove("show-modal"),window.removeEventListener("keydown",s),window.removeEventListener("keydown",h)}function s(e){"Escape"===e.code&&p()}function d(e,t){document.querySelector(".original_image_conent").innerHTML=`\n    <img\n      class="lightbox__image"\n      src="${e}"\n      alt="${t}"\n      loading="lazy"\n      data-active\n    />`}function l(){console.log("works");const o=(r+1)%t.children.length,{original:n,description:i}=e[o];d(n,i),r=o}function g(){console.log("works");const o=(r-1+t.children.length)%t.children.length,{original:n,description:i}=e[o];d(n,i),r=o}function h(e){"ArrowRight"===e.code?l():"ArrowLeft"===e.code&&g()}t.insertAdjacentHTML("afterbegin",c),t.addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("gallery__image"))return;document.body.classList.add("show-modal"),window.addEventListener("keydown",s);const o=e.target.getAttribute("data-source"),n=e.target.getAttribute("alt");d(o,n),r=[...t.children].indexOf(e.target.closest(".gallery__item")),a.addEventListener("click",l),i.addEventListener("click",g),window.addEventListener("keydown",h)})),n.addEventListener("click",p),o.addEventListener("click",(function(e){e.currentTarget===e.target&&p()}));
//# sourceMappingURL=gallery.7b3eb2a9.js.map
