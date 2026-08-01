//map()
const products = ["Laptop", "Phone", "Tablet"];
const productComponents = products.map((products) => '<div>${products} </div>');
console.log(productComponents);

//filter()
const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: false },
];

const inStockProducts = products.filter((product) => product.inStock);

console.log(inStockProducts);

//find()
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

const user = users.find((u) => u.id === 2);

console.log(user);

//forEach()
const orders = ["Order1", "Order2", "Order3"];
orders.forEach((order) => console.log(order));

//reduce()
const cart = [
    { item: "Laptop", price: 1000 },
    { item: "Phone", price: 500 },
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total);

//some()
const products = [
    { name: "Laptop", inStock: true },
    { name: "Phone", inStock: false }
];

const hasOutOfStock = products.some((product) => !product.inStock);

console.log(hasOutOfStock);

//every()
const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: true },
];
const allActive = users.every((user) => user.active);
console.log(allActive);

//sort()
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
];
const sorted = products.sort((a, b) => a.price - b.price);
console.log(sorted);

//concat()
const oldOrders = ["Order1", "Order2"];
const newOrders = ["Order3", "Order4"];

const allOrders = oldOrders.concat(newOrders);
console.log(allOrders);

//slice()
const products = ["Product1", "Product2", "Product3", "Product4"];

const paginated = products.slice(0, 2);

console.log(paginated);

//splice()
const tasks = ["Task1", "Task2", "Task3"];

tasks.splice(1, 1, "UpdatedTask2");

console.log(tasks);

