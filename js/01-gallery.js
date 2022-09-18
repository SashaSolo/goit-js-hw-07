import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".js-gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src="${preview}" 
        data-source="${original}" 
        alt="${description}" 
        />
        </a>
        </div>`;
    })
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", clickOnImg);

function clickOnImg(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) return;

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  galleryContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
