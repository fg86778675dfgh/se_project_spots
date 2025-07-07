const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorMessageElement = document.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = errorMessage;
  inputElement.classList.add(config.inputErrorClass);
};
const hideInputError = (config) => {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = "";
  inputElement.classList.remove(inputErrorClass);
};
const checkInputValidity = (formElement, inputElement,config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError (formElement, inputElement, config);
  }
};
const hasInvalidInput = (inputList) => {
return inputList.some((input) => {
  return !input.validity.valid;
   });
};
const toggleButtonState = (inputElement, buttonElement, config) => {
  if (hasInvalidInput(inputList)){
    disableButton(buttonElement, config);
  } else {
    buttonElement.disabled = false ;
    buttonElement.classList.remove(inactiveButtonClass);
  }
};
const disableButton = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(inactiveButtonClass);};
const resetValidation = (formElement, inputElement,config) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input, config);
  });
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  //TODO - handle initial states
  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement,config);
  })
};
const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitBottonSelector: ".form__submit-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
enableValidation (config);

function setEventListeners(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
};