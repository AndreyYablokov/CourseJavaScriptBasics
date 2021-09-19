function init() {
    var catalog = {
        products: [],
        addProduct: function (prod) {
            this.products.push(prod);
        },
        showProducts: function () {
            var catalogDiv = document.getElementById("catalog");
            var text = "Каталог\n";
            var idxProd = 1;
            for (let prod of this.products) {
                text += `Товар №${idxProd}: наименование - ${prod.name}, цена - ${prod.price} руб.\n`;
                ++idxProd;
            }
            catalogDiv.innerText = text;
        }
    }

    var userProducts = "ноутбук 90000 смартфон 70000";
    userProducts = userProducts.split(' ');
    for (var idx_product = 0; idx_product < userProducts.length - 1; idx_product += 2) {
        var product = {
            name: userProducts[idx_product],
            price: Number(userProducts[idx_product + 1]),
        }
        catalog.addProduct(product);
    }

    catalog.showProducts();

}

window.onload = init;