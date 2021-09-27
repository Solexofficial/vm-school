const javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

const string = javaScriptDescription
  .slice(0, Math.floor(javaScriptDescription.length / 2))
  .replaceAll(/[a,а]/g, 'А')
  .replaceAll(/\s/g, '')
  .repeat(3);

const result = string[string.length / 2];
console.log(result);
