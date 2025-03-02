const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrac",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

//Profile elements
const editModalBtn = document.querySelector(".profile__edit-btn");
const cardModalBtn = document.querySelector("#profile__new-post-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//editModal elements
const editModal = document.querySelector("#edit-modal");
const profileForm = document.querySelector("#profile-form");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input");

//cardModal elements
const cardModal = document.querySelector("#add-card-modal");
const cardForm = cardModal.querySelector("#add-card-form");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");
const cardNameInput = cardModal.querySelector("#add-card-name-input");

//select the modal
const previewModal = document.querySelector("#preview-modal");
const previewModalImageElement = previewModal.querySelector(".modal__image");
const previewModalCaptionElement = previewModal.querySelector(".modal__caption");
const previewModalContentElement = previewModal.querySelector(".modal__content_type_preview");
const previewModalCloseBtn = previewModal.querySelectorAll(".modal__close-btn .modal__close_type_preview");

//Cards elementes
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");


function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn_deleted");

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;


  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-btn_liked");
  });
  cardDeleteBtn.addEventListener("click", () => {
      cardElement.remove();
    });
  cardImageElement.addEventListener("click", () => {
    previewModal.classList.toggle("preview-modal"
    );
    previewModalImageElement.src = data.link;
    previewModalImageElement.alt = data.name;
    previewModalCaptionElement.textContent = data.name;
    openModal(previewModal);

  });
  return cardElement;}

function openModal(modal) {
  editModalDescriptionInput.value = profileDescription.textContent;
  editModalNameInput.value = profileName.textContent;
  modal.classList.add("modal_opened");
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileDescription.textContent = editModalDescriptionInput.value;
  profileName.textContent = editModalNameInput.value;
  closeModal(editModal);
}
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = {name:cardNameInput.value, link:cardLinkInput.value};
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(cardElement);
  return cardElement;
}
editModalCloseBtn.addEventListener("click", () => {
  closeModal(editModal);});

cardModalBtn.addEventListener("click", () => {
  openModal(cardModal);
});
//previewModalCloseBtn.addEventListener("click", () => {
 // closeModal(previewModal);})

cardModalCloseBtn.addEventListener("click", () => {
  closeModal(cardModal);});

editModalBtn.addEventListener("click", () => {
  profileDescription.textContent = editModalDescriptionInput.value;
  profileName.textContent = editModalNameInput.value;
  openModal(editModal)});
editModalCloseBtn.addEventListener("click", closeModal);
profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleAddCardSubmit);
cardModalCloseBtn.addEventListener("click", closeModal);
//previewModalCloseBtn.addEventListener("click",  closeModal);

initialCards.forEach((item) => {
  const cardElement=getCardElement(item);
  cardsList.prepend(cardElement);
});

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);}