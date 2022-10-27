import {ChangeDetectionStrategy, Component, OnInit, OnChanges} from '@angular/core';
import {ProductService} from "../../resources/product.service";
import {environment} from "../../../../../environments/environment";
import {Product} from "../../resources/product.model";
import {select, Store} from "@ngrx/store";
import {ProductState} from "../../store/product.reducer";
import * as ProductActions from "../../store/product.actions";
import {Observable, reduce, take, takeLast, takeUntil, takeWhile} from "rxjs";
import {getAllProducts} from "../../store/product.selectors";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$!: Observable<Product[]>;
  productList!: Product[];
  p: number = 1;
  pagination = {
    itemsPerPage: environment.recordsPerPage,
    currentPage: this.p,
    totalItems: environment.size
  }


  constructor(private productService: ProductService, private store: Store<ProductState>, private router: Router) {
    this.store.select(getAllProducts);
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.store.dispatch(ProductActions.loadProducts());
    this.store.select(getAllProducts).subscribe((product) => {
      if(!!product){
        this.productList = product;
      }
    });
    if(this.productList === null){
      this.router.navigate(["404"]);
    }
  }

  pageChange(event: any){
    this.p = event;
    this.pagination.currentPage = this.p;
  }



}
