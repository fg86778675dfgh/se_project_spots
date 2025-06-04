const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageElement = document.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
};
const hideInputError = (formElement, inputElement) => {
  const errorMessageElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorMessageElement.textContent = "";
  inputElement.classList.remove(inputErrorClass);
};
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError (formElement, inputElement);
  }
};
const hasInvalidInput = (inputList) => {
return inputList.some((input) => {
  return !input.validity.valid;
   });
};
const toggleButtonState = (inputElement, buttonElement) => {
  if (hasInvalidInput(inputList)){
    disabledButton(buttonElement);
  } else {
    buttonElement.disabled = false ;
    buttonElement.classList.remove(inactiveButtonClass);
  }
};
const disabledButton = (buttonElement, config) => {
  debugger;
  buttonElement.disabled = true;
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.classList.remove(inactiveButtonClass);
};
const resetValidation = (formElement, inputElement) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input);
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
  });
};
function setEventListeners(formElement, config) {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
};