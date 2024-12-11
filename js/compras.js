const compras = [
    { product: 'Producto A', price: 20.00, quantity: 2 },
    { product: 'Producto B', price: 15.50, quantity: 1 },
    { product: 'Producto C', price: 30.00, quantity: 3 }
];

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function displayPurchases() {
    const comprasList = document.getElementById('comprasList');
    comprasList.innerHTML = ''; 

    compras.forEach(purchase => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${purchase.product}</span>
            <span>${formatPrice(purchase.price)} x ${purchase.quantity}</span>
            <span>${formatPrice(purchase.price * purchase.quantity)}</span>
        `;
        comprasList.appendChild(listItem); 
    });
}

window.onload = displayPurchases;