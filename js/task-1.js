
const categoriesItems = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  
  const categoryTitle = category.querySelector('h2').textContent;

  const elementsCount = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});