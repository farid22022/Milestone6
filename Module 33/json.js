const shop = {
    owner : 'Alia',
    address : {
        street: 'khocu khet',
        city: 'ranbir',
        country: 'BD'
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue : 45000,
    isOpen : true,
    isNew : false
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(typeof shopJSON , shopJSON);
const shopOBJ = JSON.parse(shopJSON);
console.log(shopOBJ);