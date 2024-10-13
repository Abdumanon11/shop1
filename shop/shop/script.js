const productsDiv = document.querySelector('.products');
const count = document.querySelector('h1 span');
const button = document.querySelector('button'); 



const cartArr = [];

count.innerHTML = cartArr.length;

function reload(arr) {
    productsDiv.innerHTML = '';

    for (let item of arr) {const product = document.createElement('div');
        const product__info = document.createElement('div');
        const rates = document.createElement('div');
        const priceDiv = document.createElement('div');
        const rateDiv = document.createElement('div');
        const countDiv = document.createElement('div');
        const price = document.createElement('span');
        const rate = document.createElement('span');
        const count = document.createElement('span');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const addToFavorite = document.createElement('button');

        // innerHtml
        
        title.innerHTML = item.title.split(' ').slice(0, 3).join(' ') + '...';
        description.innerHTML = item.description.split(' ').slice(0, 15).join(' ') + '...';
        price.innerHTML = item.price;        
        rate.innerHTML = item.rating.rate;        
        count.innerHTML = item.rating.count;
        addToFavorite.innerHTML = 'В избранное';
        priceDiv.innerHTML += priceSvg();
        rateDiv.innerHTML += ratingSvg();
        countDiv.innerHTML += countSvg();


        // attr
        product.classList.add('product');
        image.src = './81fPKd-2AYL 1.png';
        product__info.classList.add('product__info');
        rates.classList.add('rates');

        // 1
        priceDiv.append(price);
        rateDiv.append(rate);
        countDiv.append(count);

        // 2
        rates.append(priceDiv, rateDiv, countDiv);

        // 3
        product__info.append(title, description, rates, addToFavorite);
    
        // 4
        product.append(image, product__info);

        // 5
        productsDiv.append(product);
        
    
    }
}

button.addEventListener('click', () => {
    const products = Array.from(productsDiv.children);
    products.slice(0, -5).forEach((product) => product.remove());
});

refreshButton.addEventListener('click', () => {
    location.reload(); 
});

reload(productsArr);
