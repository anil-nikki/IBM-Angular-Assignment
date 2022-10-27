import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as ProductActions from "../../store/product.actions";
import {getAllProducts, getProductsById} from "../../store/product.selectors";
import {Product} from "../../resources/product.model";
import {Observable} from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  productDetail!: Product;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    console.log("this.route.snapshot.params", this.productId);
    this.getProductDetail();
  }

  getProductDetail(){
    this.store.dispatch(ProductActions.setSelectedProductId({productId: this.productId}));
    this.store.select(getProductsById).subscribe((productDetail) => {
      if(!!productDetail){
        this.productDetail = productDetail;
      } else {
        this.router.navigate(["home"]);
        this.toastr.error('Unable to find the requested product details. Please try again!');
      }
    })
    console.log("productDetail", this.productDetail);
  }

}
