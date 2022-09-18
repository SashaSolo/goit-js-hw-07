import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".js-gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `<li class="gallery__item"><a class="gallery__link" href="${original}"
  ><img class="gallery__image" src="${preview}" alt="${description}"
/></a></li>`;
    })
    .join("");
}
console.log(galleryContainer);
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", clickOnImg);

function clickOnImg(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) return;

  galleryContainer.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionDelay: 250,
  captionsData: "alt",
  fadeSpeed: 250,
  doubleTapZoom: 2,
});
