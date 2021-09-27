function showSuccessMessage(message) {
	console.log(message);
}

function showErrorMessage(message) {
	console.error(message);
}

// function checkTextOnErrorSymbol(
//   text,
//   errorSymbol,
//   successCallback,
//   errorCallback
// ) {
//   let countErrorSymbol = 0;
//   [...text].forEach((symbol, idx) => {
//     if (symbol === errorSymbol) {
//       countErrorSymbol++;
//       errorCallback(
//         `Найден запрещенный символ "${errorSymbol}" под индексом ${idx}`
//       );
//       return;
//     }
//   });
//   if (countErrorSymbol === 0) {
//     successCallback("В данном тексте нет запрещенных символов");
//   }
// }
function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
	if (text.includes(errorSymbol)) {
		[...text].forEach((letter, idx) => {
			if (letter === errorSymbol) {
				errorCallback(`Найден запрещенный символ "${letter}" под индексом ${idx}`);
			}
		});
	} else {
		successCallback("В данном тексте нет запрещенных символов");
	}
}

const text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
// checkTextOnErrorSymbol(text, "1", showSuccessMessage, showErrorMessage);
