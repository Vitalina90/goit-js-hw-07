const itemAll = document.querySelector('#categories');

const itemLength = itemAll.children.length;
console.log(`Number of categories: ${itemLength}`);

const itemElement = document.querySelectorAll('.item');
itemElement.forEach(element => {
  const textTitle = element.firstElementChild.textContent;
  const quantityElements = element.lastElementChild.children.length;
  console.log(`Category: ${textTitle}`);
  console.log(`Elements: ${quantityElements}`);
});
