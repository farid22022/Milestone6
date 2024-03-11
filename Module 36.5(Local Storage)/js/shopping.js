const addProduct = () => {
    let productField = document.getElementById('product-name');
    let quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField = '';
    quantityField ='';
    console.log(product,quantity);
}