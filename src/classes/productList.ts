import {IProduct} from '../models/product';
import {Cart} from './cart';


export class ProductList{
        private parentDiv: HTMLDivElement;
        constructor(public list: Array<IProduct>, public cart: Cart){
            this.parentDiv = document.querySelector('.product-list') as HTMLDivElement;
        }
        renderList(){
           
           this.list.forEach((item : IProduct) => {
                const innerDiv: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                innerDiv.className='product-item';

                const title: HTMLSpanElement= document.createElement('span') as HTMLSpanElement;
                title.className='item-title';
                title.textContent=item.title + ' : ';

                const price: HTMLSpanElement= document.createElement('span') as HTMLSpanElement;
                price.className='item-title';
                price.textContent= ''+item.price + ' Rs';

                const image : HTMLImageElement= document.createElement('img') as HTMLImageElement;
                image.className='item-image';
                image.src=item.imgUrl;
                image.alt=item.title;

                const addToCartBtn: HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
                addToCartBtn.className='add-to-cart-btn';
                addToCartBtn.textContent='Add To Cart';

                addToCartBtn.addEventListener('click', () => {
                    this.cart.addToCart(item.id);
                });

                innerDiv.appendChild(title);
                innerDiv.appendChild(price);
                innerDiv.appendChild(image);
                
                innerDiv.appendChild(addToCartBtn);

                this.parentDiv.appendChild(innerDiv);
            });

        }
    }