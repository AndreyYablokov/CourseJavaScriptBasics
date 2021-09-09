function count_basket_price(basket) {
    var result = 0;
    for (var idx = 0; idx < basket.length; idx++) {
        result += basket[idx][1];
    }
    return result;
}

var basket = [];
var userProducts = prompt('Введите наименования товаров и их стоимость через пробел (например, ноутбук 90000 смартфон 70000)');
userProducts = userProducts.split(' ');
var idx_product = 0;
for (var idx = 0; idx < userProducts.length / 2; idx++) {
    basket[idx] = [userProducts[idx_product], Number(userProducts[idx_product + 1])];
    idx_product += 2;
}
alert(count_basket_price(basket));
