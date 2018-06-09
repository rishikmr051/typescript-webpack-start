import {ICartItem} from '../models/cartItem';

export class Cart{
        private items: Array<ICartItem> = [];
        addToCart(productId: number){
            this.items.push({
                id: this.items.length + 1,
                productId:productId,
                quantity: 1
            });
            this.renderCartBox();
        }
        getCartItems(){

        }
        getTotalNumberOfItems(){
            return this.items.length;
        }
        renderCartBox(){
            const miniCart: HTMLDivElement = document.querySelector('.mini-cart') as HTMLDivElement;
            miniCart.textContent = `You have ${this.getTotalNumberOfItems()} items in cart`;
        }
    }