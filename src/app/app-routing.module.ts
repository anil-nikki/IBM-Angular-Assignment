import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./feature/home/home.component";
import {ErrorComponent} from "./shared/components/error/error.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'product',
    loadChildren:() => import('src/app/feature/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'product',
    redirectTo: '/product',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
