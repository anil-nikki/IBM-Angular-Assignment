import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from "../resources/product.service";
import * as ProductActions from "./product.actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpErrorResponse} from "@angular/common/http";



@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProductList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() =>
      this.productService.getProductList(environment.size).pipe(
        map((data) =>
          ProductActions.loadProductsSuccess({response: data}),
        ),
        catchError((error: HttpErrorResponse) =>
          of(ProductActions.loadProductsFailure({error: error.message}))
        )
      )
      )
    )
  })

}
