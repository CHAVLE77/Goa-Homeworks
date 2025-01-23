const image = document.getElementById('image');
const cont = document.querySelector('.container');
const div = document.querySelector('.div');

fetch('https://fakestoreapi.com/products/4')
  .then(res => {
    if (!res.ok && res.status === 404) {
      document.body.style.backgroundColor = 'white';
      div.style.display = 'block';
      throw new Error('404: Not Found');
    }
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  })
  .then(json => {
    image.src = json.image;
    document.getElementById('category').textContent = json.category;
    document.getElementById('price').textContent = `${json.price} $`;
    document.getElementById('desc').textContent = json.description;
    console.log(json);
    cont.style.display = 'block';
  })
  .catch(error => {
    console.error('Error:', error);
  });

const link = document.getElementById('link');
const box2 = document.querySelector('.box2');
box2.style.display = 'none';

link.addEventListener('click', () => {
  box2.style.display = 'block';
});
