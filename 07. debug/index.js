function showSuccessMessage(message) {
  console.log(message);
}

function showErrorMessage(message) {
  console.error(message);
}

function checkTextOnErrorSymbol(
  text,
  errorSymbol,
  successCallback,
  errorCallback
) {
  let countErrorSymbol = 0;
  [...text].forEach((symbol, idx) => {
    if (symbol === errorSymbol) {
      countErrorSymbol++;
      errorCallback(
        `Найден запрещенный символ "${errorSymbol}" под индексом ${idx}`
      );
      return;
    }
  });
  if (countErrorSymbol === 0) {
    successCallback("В данном тексте нет запрещенных символов");
  }
}

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
