/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var productList_1 = __webpack_require__(/*! ./classes/productList */ "./src/classes/productList.ts");
var cart_1 = __webpack_require__(/*! ./classes/cart */ "./src/classes/cart.ts");
var products_1 = __webpack_require__(/*! ./data/products */ "./src/data/products.ts");
var cart = new cart_1.Cart();
var productlist = new productList_1.ProductList(products_1.products, cart);
productlist.renderList();
cart.renderCartBox();


/***/ }),

/***/ "./src/classes/cart.ts":
/*!*****************************!*\
  !*** ./src/classes/cart.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addToCart = function (productId) {
        this.items.push({
            id: this.items.length + 1,
            productId: productId,
            quantity: 1
        });
        this.renderCartBox();
    };
    Cart.prototype.getCartItems = function () {
    };
    Cart.prototype.getTotalNumberOfItems = function () {
        return this.items.length;
    };
    Cart.prototype.renderCartBox = function () {
        var miniCart = document.querySelector('.mini-cart');
        miniCart.textContent = "You have " + this.getTotalNumberOfItems() + " items in cart";
    };
    return Cart;
}());
exports.Cart = Cart;


/***/ }),

/***/ "./src/classes/productList.ts":
/*!************************************!*\
  !*** ./src/classes/productList.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ProductList = /** @class */ (function () {
    function ProductList(list, cart) {
        this.list = list;
        this.cart = cart;
        this.parentDiv = document.querySelector('.product-list');
    }
    ProductList.prototype.renderList = function () {
        var _this = this;
        this.list.forEach(function (item) {
            var innerDiv = document.createElement('div');
            innerDiv.className = 'product-item';
            var title = document.createElement('span');
            title.className = 'item-title';
            title.textContent = item.title + ' : ';
            var price = document.createElement('span');
            price.className = 'item-title';
            price.textContent = '' + item.price + ' Rs';
            var image = document.createElement('img');
            image.className = 'item-image';
            image.src = item.imgUrl;
            image.alt = item.title;
            var addToCartBtn = document.createElement('button');
            addToCartBtn.className = 'add-to-cart-btn';
            addToCartBtn.textContent = 'Add To Cart';
            addToCartBtn.addEventListener('click', function () {
                _this.cart.addToCart(item.id);
            });
            innerDiv.appendChild(title);
            innerDiv.appendChild(price);
            innerDiv.appendChild(image);
            innerDiv.appendChild(addToCartBtn);
            _this.parentDiv.appendChild(innerDiv);
        });
    };
    return ProductList;
}());
exports.ProductList = ProductList;


/***/ }),

/***/ "./src/data/products.ts":
/*!******************************!*\
  !*** ./src/data/products.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.products = [
    {
        id: 1,
        title: 'Malabar Biriyani',
        imgUrl: 'https://i.imgur.com/ULHbPTa.jpg',
        price: 100
    },
    {
        id: 2,
        title: 'Pasta',
        imgUrl: 'https://i.imgur.com/r7rQBCS.jpg',
        price: 200
    },
    {
        id: 3,
        title: 'Chicken Fried Rice',
        imgUrl: 'https://i.imgur.com/pYSgtB4.jpg',
        price: 250
    },
    {
        id: 4,
        title: 'Chicken Noodles',
        imgUrl: 'https://i.imgur.com/0fU51sk.jpg',
        price: 250
    }
];


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map