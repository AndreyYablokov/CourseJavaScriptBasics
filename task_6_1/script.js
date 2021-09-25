var catalog = {
    products: [],
    addProduct: function (prod) {
        this.products.push(prod);
    },
    createLayoutProd: function (prod) {
        var productWrapDiv = document.createElement("div");
        productWrapDiv.setAttribute("class", "product-wrap");

        var productImageDiv = document.createElement("div");
        productImageDiv.setAttribute("class", "product-image");

        var productImageRef = document.createElement("a");
        productImageRef.setAttribute("href", "");
        var productImage = document.createElement("img");
        productImage.setAttribute("src", prod.images[0]);
        productImageRef.appendChild(productImage);

        productImageDiv.appendChild(productImageRef);

        var shadowDiv = document.createElement("div");
        shadowDiv.setAttribute('class', "shadow");
        productImageDiv.appendChild(shadowDiv);

        productWrapDiv.appendChild(productImageDiv);

        var actionsDiv = document.createElement("div");
        actionsDiv.setAttribute("class", "actions");

        var actionsBtnDiv = document.createElement("div");
        actionsBtnDiv.setAttribute("class", "actions-btn");

        var addToCartDiv = document.createElement("div");
        addToCartDiv.setAttribute("class", "add-to-cart");

        var addToCartBtn = document.createElement("a");
        addToCartBtn.setAttribute("class", "add-to-cart-button");
        addToCartBtn.setAttribute("href", "#");
        addToCartBtn.setAttribute("title", "Добавить в корзину");
        addToCartBtn.onclick = addToBasketHandler;
        addToCartDiv.appendChild(addToCartBtn);

        actionsBtnDiv.appendChild(addToCartDiv);

        var addToLinksDiv = document.createElement("div");
        addToLinksDiv.setAttribute("class", "add-to-links");

        var addToWishlistDiv = document.createElement("div");
        addToWishlistDiv.setAttribute("class", "add-to-wishlist")

        var addToWishlistBtn = document.createElement("a");
        addToWishlistBtn.setAttribute("class", "add-to-wishlist-button");
        addToWishlistBtn.setAttribute("href", "#");
        addToWishlistBtn.setAttribute("title", "Добавить в мои желания");
        addToWishlistDiv.appendChild(addToWishlistBtn);
        addToLinksDiv.appendChild(addToWishlistDiv);

        var addToCompareDiv = document.createElement("div");
        addToCompareDiv.setAttribute("class", "add-to-compare")

        var addToCompareBtn = document.createElement("a");
        addToCompareBtn.setAttribute("class", "add-to-compare-button");
        addToCompareBtn.setAttribute("href", "#");
        addToCompareBtn.setAttribute("title", "Добавить для сравнения");
        addToCompareDiv.appendChild(addToCompareBtn);
        addToLinksDiv.appendChild(addToCompareDiv);

        var quikviewDiv = document.createElement("div");
        quikviewDiv.setAttribute("class", "quikview")

        var quikviewBtn = document.createElement("a");
        quikviewBtn.setAttribute("class", "quikview-button");
        quikviewBtn.setAttribute("href", "#");
        quikviewBtn.setAttribute("title", "Быстрый просмотр");
        quikviewDiv.appendChild(quikviewBtn);
        addToLinksDiv.appendChild(quikviewDiv);

        actionsBtnDiv.appendChild(addToLinksDiv);

        actionsDiv.appendChild(actionsBtnDiv);

        productImageDiv.appendChild(actionsDiv);

        productWrapDiv.appendChild(productImageDiv);

        var productListDiv = document.createElement("div");
        productListDiv.setAttribute("class", "product-list")
        productListDiv.setAttribute("code", prod.code);
        var productDescription = document.createElement("h3");
        productDescription.innerText = prod.description;
        var priceDiv = document.createElement("div");
        priceDiv.setAttribute("class", "price");
        priceDiv.innerText = prod.price + " руб.";
        productListDiv.appendChild(productDescription);
        productListDiv.appendChild(priceDiv);

        productWrapDiv.appendChild(productListDiv);

        return productWrapDiv;
    },
    show: function () {
        var catalogDiv = document.getElementById("catalog");
        catalogDiv.setAttribute("id", "catalog");

        var headerDiv = document.createElement("div");
        headerDiv.setAttribute("class", "header");
        var headerH1 = document.createElement("h1");
        headerH1.innerText = 'Каталог товаров';
        headerDiv.appendChild(headerH1);
        catalogDiv.appendChild(headerDiv);

        var productsDiv = document.createElement("div");
        productsDiv.setAttribute("class", "products");

        for (let prod of this.products) {
            productsDiv.appendChild(this.createLayoutProd(prod));
        }

        catalogDiv.appendChild(productsDiv);
    }

}

var basket = {
    products: [],
    addProduct: function (prod) {
        this.products.push(prod);
        var summaryDiv = document.getElementById("basket-summary");
        this.showSummaryInfo(summaryDiv);

        var productDiv = document.createElement("div");
        productDiv.setAttribute("class", "basket-product");
        productDiv.setAttribute("code", prod.code);

        var productText = document.createElement("div");
        productText.setAttribute("class", "basket-product-text");
        productText.innerHTML = prod.description;
        productDiv.appendChild(productText);

        var productDelBtn = document.createElement("a");
        productDelBtn.setAttribute("href", "#");
        productDelBtn.setAttribute("class", "basket-product-del-btn");
        productDelBtn.innerHTML = "Удалить";
        productDelBtn.onclick = removeFromBasketHandler;
        productDiv.appendChild(productDelBtn);

        var basketProductsDiv = document.getElementById("basket-products");
        basketProductsDiv.appendChild(productDiv);
    },
    removeProduct: function (idProduct) {
        let indexProduct = this.products.findIndex(item => item.code === idProduct);
        this.products.splice(indexProduct, 1);
    },
    countBasketPrice: function () {
        var result = 0;
        for (prod of this.products) {
            result += prod.price;
        }
        return result;
    },
    showSummaryInfo: function () {
        var countProducts = this.products.length;
        var summaryDiv = document.getElementById("basket-summary");
        if (countProducts === 0) {
            summaryDiv.innerText = "Корзина пуста";
        } else {
            summaryDiv.innerText = `В корзине: ${countProducts} товар(-а,-ов) на сумму ${this.countBasketPrice()} руб.`;
        }
    },
    show: function () {
        var basketDiv = document.getElementById("basket");

        var headerDiv = document.createElement("div");
        headerDiv.setAttribute("class", "header");
        var headerH1 = document.createElement("h1");
        headerH1.innerText = "Корзина";
        headerDiv.appendChild(headerH1);
        basketDiv.appendChild(headerDiv);

        var summaryDiv = document.createElement("div");
        summaryDiv.setAttribute("id", "basket-summary")
        basketDiv.appendChild(summaryDiv);
        this.showSummaryInfo();

        var productsDiv = document.createElement("div");
        productsDiv.setAttribute("id", "basket-products");
        basketDiv.appendChild(productsDiv);
    }
};

function init() {
    var product = {
        code: 1,
        description: "Ноутбук Acer Aspire 3 A315-57G-3022 (Intel Core i3 1005G1/15.6'/1920x1080/8GB/512GB SSD/NVIDIA GeForce MX330 2GB/Без ОС), NX.HZRER.00B, черный",
        price: 47500,
        images: ["img_prod/prod1_1.webp", "img_prod/prod1_2.webp", "img_prod/prod1_3.webp"],
    }

    catalog.addProduct(product);

    var product = {
        code: 2,
        description: "13.3' ноутбук Apple MacBook Air 13 Late 2020 (2560x1600, Apple M1 3200 МГц, RAM 8 ГБ, SSD 256 ГБ, Apple graphics 7-core), RU, MGN93RU/A, серебристый",
        price: 92000,
        images: ["img_prod/prod2_1.webp", "img_prod/prod2_2.webp", "img_prod/prod2_3.webp"],
    }

    catalog.addProduct(product);

    var product = {
        code: 3,
        description: "Ноутбук Xiaomi RedmiBook 13 (Intel Core i7 10510U 1800MHz/13.3'/1920x1080/8GB/512GB SSD/NVIDIA GeForce MX250 2GB/DOS), серебристый",
        price: 73000,
        images: ["img_prod/prod3_1.webp", "img_prod/prod3_2.webp", "img_prod/prod3_3.webp"],
    }

    catalog.addProduct(product);

    catalog.show();

    basket.show();
}

function addToBasketHandler(event) {
    let productWrapDiv = event.path[5];
    let productList = productWrapDiv.children[1];
    idProduct = Number(productWrapDiv.children[1].attributes.code.nodeValue);
    basket.addProduct(catalog.products[idProduct - 1]);
    basket.showSummaryInfo();
}

function removeFromBasketHandler(event) {
    let basketProductsDiv = document.getElementById("basket-products");
    let basketProductDiv = event.path[1];
    idProduct = Number(basketProductDiv.attributes.code.nodeValue);
    basketProductsDiv.removeChild(basketProductDiv);
    basket.removeProduct(idProduct);
    basket.showSummaryInfo();

}

addEventListener('load', init);
