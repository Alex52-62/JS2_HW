const products = [
    { id: 1, title: 'Notebook', price: 20000, image: 'img/notebook.jpg' },
    { id: 2, title: 'Mouse', price: 1500, image: 'img/mouse.jpg' },
    { id: 3, title: 'Keyboard', price: 5000, image: 'img/keyboard.jpg' },
    { id: 4, title: 'Gamepad', price: 4500, image: 'img/gamepad.jpg' },
];

const renderProduct = (title, price, image) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <img class="card_img" alt="pic1" src="${image}">
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

/*

const renderProducts = (list = []) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price, item.image);
}); */


// уменьшим наш код , т.к. у нас всего один параметр

const renderProducts = (list = []) => {
    const productList = list.map(item =>
        renderProduct(item.title, item.price, item.image)
    );




    // let productList = [];

    // for (let i = 0; i < list.length; i++) {
    //     productList.push(renderProduct(list[i].title, list[i].price));
    // }
    // for (const item of list) {
    //     productList.push(renderProduct(item.title, item.price));
    // }

    document.querySelector('.products').innerHTML = productList.join("<br>");
    // console.log(productList);
}

renderProducts(products);

//                 <img class="card_img" src="img/${image}.jpg" alt="pic1">