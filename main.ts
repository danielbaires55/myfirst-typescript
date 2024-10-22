// STRUTTURA UNO
// let myname: string;
// myname = 'Jhon Doe';
// console.log(myname);

// STRUTTURA DUE
// type UserType = {
//     username: string,
//     password: string,
//     status: number,
//     permissions: string[];
// }

// let user : UserType = {
//     username: 'admin',
//     password: 'admin',
//     status: 1,
//     permissions: ['read', 'write', 'delete']
// }

// console.log(user.username); // admin

// type RolesType = 'Admin' | 'Guest';

// const role: RolesType = 'Admin';
// console.log(role);

/**
 * Creare un nuovo utente (funzionante). L'utente ha un username, una password, uno status e delle permissions.
 * 
 * Creare un ordine con un id, un totale, imponibile, iva e una lista di prodotti.
 * Creare un secondo ordine con un id, un totale, imponibile, iva e una lista di prodotti.
 * 
 * Assegnare all'utente gli ordini
 * 
 * Visualizzare nel console.log l'utente e poi la lista degli ordini a lui associati
 */

// Definizioni dei tipi
type UserType = {
    username: string,
    password: string,
    status: number,
    permissions: string[],
    orders: OrderType[]
}

type OrderType = {
    id: number,
    total: number,
    imponibile: number,
    iva: number,
    products: Product[]
}

type Product = {
    id: string,
    name: string,
    price: number,
    stock: boolean
}

// Prodotti
let product1: Product = {
    id: '223',
    name: 'Smart TV',
    price: 300,
    stock: true
}

let product2: Product = {
    id: '243',
    name: 'Ventilatore',
    price: 100,
    stock: true
}

let product3: Product = {
    id: '253',
    name: 'PS5',
    price: 500,
    stock: true
}

let product4: Product = {
    id: '283',
    name: 'Gaming chair',
    price: 150,
    stock: false
}

// Utente
let user: UserType = {
    username: 'admin',
    password: 'admin',
    status: 1,
    permissions: ['R', 'W', 'D'],
    orders: []
}

// Ordini
let order1: OrderType = {
    id: 1,
    total: 500,
    imponibile: 80,
    iva: 22,
    products: [product1, product2]
}

let order2: OrderType = {
    id: 2,
    total: 650,
    imponibile: 160,
    iva: 23,
    products: [product3, product4]
}

// Assegna gli ordini all'utente
user.orders.push(order1);
user.orders.push(order2);

// Mostra l'utente e gli ordini nel log
console.log(user);
