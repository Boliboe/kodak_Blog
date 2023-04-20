// Grab Elements
const selectElement = selector => {
  const element = document.querySelector(selector)
  if(element) return element;
  throw new error('Somethin went wrong, make sure that ${selector} exists or is typed correctly');  
};
console.log(selectElement('.navbar'));