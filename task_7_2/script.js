var catalog = {
    products: [],
    createLayout: function () {
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
        quikviewDiv.setAttribute("class", "quikview");

        var quikviewBtn = document.createElement("a");
        quikviewBtn.setAttribute("class", "quikview-button");
        quikviewBtn.setAttribute("href", "#");
        quikviewBtn.setAttribute("title", "Быстрый просмотр");
        quikviewBtn.onclick = popupShowHandler;
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
    addProduct: function (prod) {
        this.products.push(prod);
    },
}

var basket = {
    products: [],
    createLayout: function () {
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

        var productNextBtnDiv = document.createElement("div");
        productNextBtnDiv.setAttribute("id", "basket-product-next-btn");
        productNextBtnDiv.innerHTML = "Перейти к указанию адреса доставки";
        basketDiv.appendChild(productNextBtnDiv);

        var headerAdressDiv = document.createElement("div");
        headerAdressDiv.setAttribute("id", "basket-header-address");
        headerAdressDiv.innerHTML = "2. Адрес доставки";
        basketDiv.appendChild(headerAdressDiv);

        var addressDiv = document.createElement("div");
        addressDiv.setAttribute("id", "basket-address");
        addressDiv.style.display = "none";

        var inputAddress = document.createElement("input");
        inputAddress.setAttribute("type", "text");
        inputAddress.setAttribute("size", "100");
        inputAddress.setAttribute("placeholder", "Введите адрес доставки");
        addressDiv.appendChild(inputAddress);

        basketDiv.appendChild(addressDiv);

        var addressNextBtnDiv = document.createElement("div");
        addressNextBtnDiv.setAttribute("id", "basket-address-next-btn");
        addressNextBtnDiv.innerHTML = "Перейти к указанию комментария";
        addressNextBtnDiv.style.display = "none";
        basketDiv.appendChild(addressNextBtnDiv);

        var headerCommentDiv = document.createElement("div");
        headerCommentDiv.setAttribute("id", "basket-header-comment");
        headerCommentDiv.innerHTML = "3. Коментарий";
        basketDiv.appendChild(headerCommentDiv);

        var commentDiv = document.createElement("div");
        commentDiv.setAttribute("id", "basket-comment");
        commentDiv.style.display = "none";

        var inputComment = document.createElement("textarea");
        inputComment.setAttribute("cols", "100");
        inputComment.setAttribute("row", "3");
        inputComment.setAttribute("placeholder", "Введите коментарий");
        commentDiv.appendChild(inputComment);

        basketDiv.appendChild(commentDiv);

        var commentNextBtnDiv = document.createElement("div");
        commentNextBtnDiv.setAttribute("id", "basket-comment-next-btn");
        commentNextBtnDiv.innerHTML = "Завершить покупку товаров";
        commentNextBtnDiv.style.display = "none";
        basketDiv.appendChild(commentNextBtnDiv);

        productNextBtnDiv.addEventListener('click', clickNextBtnProductHandler);
        addressNextBtnDiv.addEventListener('click', clickNextBtnAddressHandler);
        summaryDiv.addEventListener('click', clickHeaderProductHandler);
        headerAdressDiv.addEventListener('click', clickHeaderAddressHandler);
        headerCommentDiv.addEventListener('click', clickHeaderCommentHandler);

    },
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
            summaryDiv.innerText = "1. Состав корзины. Корзина пуста";
        } else {
            summaryDiv.innerText = `1. Состав корзины. В корзине: ${countProducts} товар(-а,-ов) на сумму ${this.countBasketPrice()} руб.`;
        }
    },
    showProductsInfo: function () {
        var productsDiv = document.getElementById("basket-products");
        var productNextBtnDiv = document.getElementById("basket-product-next-btn");
        productsDiv.style.display = "block";
        productNextBtnDiv.style.display = "block";
    },
    hideProductsInfo: function () {
        var productsDiv = document.getElementById("basket-products");
        var productNextBtnDiv = document.getElementById("basket-product-next-btn");
        productsDiv.style.display = "none";
        productNextBtnDiv.style.display = "none";
    },
    showAddressInfo: function () {
        var addressDiv = document.getElementById("basket-address");
        var addressNextBtnDiv = document.getElementById("basket-address-next-btn");
        addressDiv.style.display = "block";
        addressNextBtnDiv.style.display = "block";
    },
    hideAddressInfo: function () {
        var addressDiv = document.getElementById("basket-address");
        var addressNextBtnDiv = document.getElementById("basket-address-next-btn");
        addressDiv.style.display = "none";
        addressNextBtnDiv.style.display = "none";
    },
    showCommentInfo: function () {
        var commentDiv = document.getElementById("basket-comment");
        var commentNextBtnDiv = document.getElementById("basket-comment-next-btn");
        commentDiv.style.display = "block";
        commentNextBtnDiv.style.display = "block";
    },
    hideCommentInfo: function () {
        var commentDiv = document.getElementById("basket-comment");
        var commentNextBtnDiv = document.getElementById("basket-comment-next-btn");
        commentDiv.style.display = "none";
        commentNextBtnDiv.style.display = "none";
    },

};

var popup = {
    images: [],
    isShow: false,
    createLayout: function () {
        var popupShadowDiv = document.createElement("div");
        popupShadowDiv.setAttribute("class", "popup-shadow");

        var popupWindowDiv = document.createElement("div");
        popupWindowDiv.setAttribute("class", "popup-window");

        var popupHeaderDiv = document.createElement("div");
        popupHeaderDiv.setAttribute("class", "popup-header");

        var popupCloseDiv = document.createElement("div");
        popupCloseDiv.setAttribute("class", "popup-close");

        var popupCloseInDiv = document.createElement("div");
        popupCloseInDiv.setAttribute("class", "popup-close-in");

        var popupCloseTxtDiv = document.createElement("div");
        popupCloseTxtDiv.setAttribute("class", "popup-close-txt");
        popupCloseTxtDiv.innerHTML = "Закрыть";
        popupCloseTxtDiv.onclick = this.hide;

        popupCloseInDiv.appendChild(popupCloseTxtDiv);

        popupCloseDiv.appendChild(popupCloseInDiv);

        popupHeaderDiv.appendChild(popupCloseDiv);

        popupWindowDiv.appendChild(popupHeaderDiv);

        var popupContentDiv = document.createElement("div");
        popupContentDiv.setAttribute("class", "popup-content");

        var popupImagesDiv = document.createElement("div");
        popupImagesDiv.setAttribute("class", "popup-images");

        var popupImage = document.createElement("img");

        popupImagesDiv.appendChild(popupImage);

        popupContentDiv.appendChild(popupImagesDiv);

        var popupBtnsDiv = document.createElement("div");
        popupBtnsDiv.setAttribute("class", "popup-btns");

        var previousBtn = document.createElement("button");
        previousBtn.setAttribute("class", "popup-btn-previous");
        previousBtn.innerHTML = "Предыдущее изображение";
        previousBtn.onclick = popupPreviousImgHandler;

        var nextBtn = document.createElement("button");
        nextBtn.setAttribute("class", "popup-btn-next");
        nextBtn.innerHTML = "Следующее изображение";
        nextBtn.onclick = popupNextImgHandler;

        popupBtnsDiv.appendChild(previousBtn);
        popupBtnsDiv.appendChild(nextBtn);

        popupContentDiv.appendChild(popupBtnsDiv);

        popupWindowDiv.appendChild(popupContentDiv);

        popupShadowDiv.appendChild(popupWindowDiv);

        document.body.appendChild(popupShadowDiv);

        this.hide();
    },
    hide: function () {
        var popupShadowDiv = document.getElementsByClassName("popup-shadow")[0];
        popupShadowDiv.style.display = "none";
        this.isShow = false;
    },
    show: function (img) {
        var popupShadowDiv = document.getElementsByClassName("popup-shadow")[0];
        var popupImages = document.getElementsByClassName("popup-images")[0];
        popupImages.children[0].setAttribute("src", img);
        popupShadowDiv.style.display = "block";
        this.isShow = true;
    }
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

function clickNextBtnProductHandler(event) {
    basket.hideProductsInfo();
    basket.showAddressInfo();
}

function clickNextBtnAddressHandler(event) {
    basket.hideAddressInfo();
    basket.showCommentInfo();
}

function clickHeaderProductHandler(event) {
    basket.showProductsInfo();
    basket.hideAddressInfo();
    basket.hideCommentInfo();
}

function clickHeaderAddressHandler(event) {
    basket.hideProductsInfo();
    basket.showAddressInfo();
    basket.hideCommentInfo();
}

function clickHeaderCommentHandler(event) {
    basket.hideProductsInfo();
    basket.hideAddressInfo();
    basket.showCommentInfo();
}

function popupShowHandler(event) {
    let productWrapDiv = event.path[6];
    let productList = productWrapDiv.children[1];
    idProduct = Number(productList.attributes.code.nodeValue);
    popup.images = catalog.products[idProduct - 1].images;
    popup.show(popup.images[0]);
}

function popupPreviousImgHandler(event) {
    let popupContentDiv = event.path[2];
    let currentImage = popupContentDiv.children[0].children[0].attributes.src.nodeValue;
    idxCurrentImage = popup.images.findIndex(item => item === currentImage);
    idxPreviousImage = idxCurrentImage - 1;
    if (idxPreviousImage < 0) {
        idxPreviousImage = popup.images.length - 1;
    };
    popup.show(popup.images[idxPreviousImage]);
}

function popupNextImgHandler(event) {
    let popupContentDiv = event.path[2];
    let currentImage = popupContentDiv.children[0].children[0].attributes.src.nodeValue;
    idxCurrentImage = popup.images.findIndex(item => item === currentImage);
    idxNextImage = idxCurrentImage + 1;
    if (idxNextImage > popup.images.length - 1) {
        idxNextImage = 0;
    };
    popup.show(popup.images[idxNextImage]);
}

function init() {
    var product = {
        code: 1,
        description: "Ноутбук Acer Aspire 3 A315-57G-3022 (Intel Core i3 1005G1/15.6'/1920x1080/8GB/512GB SSD/NVIDIA GeForce MX330 2GB/Без ОС), NX.HZRER.00B, черный",
        price: 47500,
        images: ["img_prod/prod1$1$.webp", "img_prod/prod1$2$.webp"],
    }

    catalog.addProduct(product);

    var product = {
        code: 2,
        description: "13.3' ноутбук Apple MacBook Air 13 Late 2020 (2560x1600, Apple M1 3200 МГц, RAM 8 ГБ, SSD 256 ГБ, Apple graphics 7-core), RU, MGN93RU/A, серебристый",
        price: 92000,
        images: ["img_prod/prod2$1$.webp", "img_prod/prod2$2$.webp", "img_prod/prod2$3$.webp"],
    }

    catalog.addProduct(product);

    var product = {
        code: 3,
        description: "Ноутбук Xiaomi RedmiBook 13 (Intel Core i7 10510U 1800MHz/13.3'/1920x1080/8GB/512GB SSD/NVIDIA GeForce MX250 2GB/DOS), серебристый",
        price: 73000,
        images: ["img_prod/prod3$1$.webp", "img_prod/prod3$2$.webp", "img_prod/prod3$3$.webp"],
    }

    catalog.addProduct(product);

    catalog.createLayout();

    basket.createLayout();

    popup.createLayout();
}

addEventListener('load', init);
addEventListener('keydown', function (event) {
    if (event.code === "ArrowLeft" && popup.isShow === true) {
        var btnPrevious = document.getElementsByClassName("popup-btn-previous")[0];
        btnPrevious.click();
    };
    if (event.code === "ArrowRight" && popup.isShow === true) {
        var btnNext = document.getElementsByClassName("popup-btn-next")[0];
        btnNext.click();
    };
});
