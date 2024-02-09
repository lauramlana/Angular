import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  text = '';
  addToCart: number = 0;
  product = {
    name: 'IPhone 13',
    price: 999,
    color: 'red',
    discount: 8.5,
    inStock: 5,
    image: '../../assets/images/iphone.png'
  }

  searchText: string = ''; 

  setSearchText(value: string){
    this.searchText = value
  }

  getDiscountedPrice() {
    return this.product.price - 
    (this.product.price * this.product.discount / 100)
  }

  onInputChange(event: any) {
    // console.log(event.target.value)
    this.text = event.target.value
  }

  decrementValue() {
    if(this.addToCart > 0) {
      this.addToCart -= 1
    }
  }

  incrementValue() {
    if(this.addToCart < this.product.inStock) {
      this.addToCart += 1
    }
  }
}
