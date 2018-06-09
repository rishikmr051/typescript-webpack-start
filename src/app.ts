import {ProductList} from './classes/productList';
import {Cart} from './classes/cart';
import {products} from './data/products';

const cart = new Cart();
const productlist = new ProductList(products, cart);

productlist.renderList();

cart.renderCartBox();