const ulCategories = document.querySelector('#categories');
const arrCategories = ulCategories.children;
console.log(`Number of categories: ${arrCategories.length}`);
const liItems = ulCategories.querySelectorAll('.item');

liItems.forEach((element) => {
  const categoryTitle = element.querySelector('h2').textContent;
  const elementsCount = element.querySelectorAll('ul > li').length;
  
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});