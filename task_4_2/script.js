var basket = {
    products: [],
    addProduct: function (prod) {
        this.products.push(prod);
    },
    countBasketPrice: function () {
        var result = 0;
        for (prod of this.products) {
            result += prod.price;
        }
        return result;
    },
};

var userProducts = prompt('Введите наименования товаров и их стоимость через пробел (например, ноутбук 90000 смартфон 70000)');
userProducts = userProducts.split(' ');
for (var idx_product = 0; idx_product < userProducts.length; idx_product += 2) {
    var product = {
        name: userProducts[idx_product],
        price: Number(userProducts[idx_product + 1]),
    }
    basket.addProduct(product);
}
alert(basket.countBasketPrice());
