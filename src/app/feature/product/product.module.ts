import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import {productReducer} from "./store/product.reducer";
import {NgxPaginationModule} from "ngx-pagination";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    StoreModule.forFeature(fromState.stateFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects]),
    SharedModule
  ]
})
export class ProductModule { }
