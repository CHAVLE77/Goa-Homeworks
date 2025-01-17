function func() {
    const image1 = document.getElementById('image1');
    fetch('https://fakestoreapi.com/products/2').then(res => res.json()).then(json => {
        image1.src = json.image;
        document.getElementById('category1').textContent = json.category;
        document.getElementById('price1').textContent = json.price + '$';
        document.getElementById('desc1').textContent = json.description;
        console.log(json);
    });

    const link1 = document.getElementById('link1');
    const box1 = document.querySelector('.box1-desc');
    box1.style.display = 'none';

    link1.addEventListener('click', () => {
        box1.style.display = 'block';
    });
    
    const image2 = document.getElementById('image2');
    fetch('https://fakestoreapi.com/products/3').then(res => res.json()).then(json2 => {
        image2.src = json.image;
        document.getElementById('category2').textContent = json2.category;
        document.getElementById('price2').textContent = json2.price + '$';
        document.getElementById('desc2').textContent = json2.description;
        console.log(json);
    });

    const link2 = document.getElementById('link2');
    const box2_2 = document.querySelector('.box2-2');
    box2_2.style.display = 'none';

    link2.addEventListener('click', () => {
        box2_2.style.display = 'block';
    });

    const image3 = document.getElementById('image3');
    fetch('https://fakestoreapi.com/products/4').then(res => res.json()).then(json3 => {
        image3.src = json.image;
        document.getElementById('category3').textContent = json3.category;
        document.getElementById('price3').textContent = json3.price + '$';
        document.getElementById('desc3').textContent = json3.description;
        console.log(json);
    });

    const link3 = document.getElementById('link3');
    const box2_3 = document.querySelector('.box2-3');
    box2_3.style.display = 'none';

    link3.addEventListener('click', () => {
        box2_3.style.display = 'block';
    });

}

func();


fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => {
    json.forEach(element => {
        console.log(`Product ID: ${element.id}`);
        console.log(`Title: ${element.title}`);
        console.log(`Category: ${element.category}`);
        console.log(`Price: $${element.price}`);
        console.log(`Description: ${element.description}`);
        console.log(`Image: ${element.image}`);
    });
});
