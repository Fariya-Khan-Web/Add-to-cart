let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping')

let list = document.querySelector('.list');
let listCard =  document.querySelector('.listCard');

let body = document.querySelector('body');

let total =  document.querySelector('.total');
let quality =  document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add("active");
})
closeShopping.addEventListener('click', () => {
    body.classList.remove("active");
}) 

// object

let products = [
    {
        id: 1,
        name: 'product name 1',
        image: './assets/img/plate1.png',
        price: 100
    },
    {
        id: 2,
        name: 'product name 2',
        image: './assets/img/plate2.png',
        price: 2200
    },
    {
        id: 3,
        name: 'product name 3',
        image: './assets/img/plate3.png',
        price: 3240
    },
    {
        id: 4,
        name: 'product name 4',
        image: './assets/img/plate4.png',
        price: 1766
    },
    {
        id: 5,
        name: 'product name 5',
        image: './assets/img/plate5.png',
        price: 483
    },
    {
        id: 6,
        name: 'product name 6',
        image: './assets/img/plate6.png',
        price: 1455
    },
    {
        id: 7,
        name: 'product name 7',
        image: './assets/img/plate7.png',
        price: 8767
    },
    {
        id: 8,
        name: 'product name 8',
        image: './assets/img/plate2.png',
        price: 3256
    },
    {
        id: 9,
        name: 'product name 9',
        image: './assets/img/plate5.png',
        price: 2489
    },

];

let listCards = [];
function initApp(){
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <img class="plates" src="${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp()
