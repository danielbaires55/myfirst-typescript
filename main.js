// STRUTTURA UNO
// let myname: string;
// myname = 'Jhon Doe';
// console.log(myname);
// Prodotti
var product1 = {
    id: '223',
    name: 'Smart TV',
    price: 300,
    stock: true
};
var product2 = {
    id: '243',
    name: 'Ventilatore',
    price: 100,
    stock: true
};
var product3 = {
    id: '253',
    name: 'PS5',
    price: 500,
    stock: true
};
var product4 = {
    id: '283',
    name: 'Gaming chair',
    price: 150,
    stock: false
};
// Utente
var user = {
    username: 'admin',
    password: 'admin',
    status: 1,
    permissions: ['R', 'W', 'D'],
    orders: []
};
// Ordini
var order1 = {
    id: 1,
    total: 500,
    imponibile: 80,
    iva: 22,
    products: [product1, product2]
};
var order2 = {
    id: 2,
    total: 650,
    imponibile: 160,
    iva: 23,
    products: [product3, product4]
};
// Assegna gli ordini all'utente
user.orders.push(order1);
user.orders.push(order2);
// Mostra l'utente e gli ordini nel log
console.log(user);
