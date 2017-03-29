import {Component} from '@angular/core';

@Component({
	selector:'pm-products',
	templateUrl:'app/products/product-list.component.html'
})

export class ProductListComponent{
	pageTitle: string ='Product List'
	products:any[] = [ 
		{
		 "productid":2,
	  	 "code":316551,
	  	 "Available":10,
	  	 "price":30
		}
	]
}