import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

// page
import { IndexComponent } from '../page/index/index.component';
import { ProductListComponent } from '../page/product-list/product-list.component';
import { ProductDetailComponent } from '../page/product-detail/product-detail.component';
import { UserCenterComponent } from '../page/user-center/user-center.component';
import { NotFoundPageComponent } from '../page/not-found-page/not-found-page.component';

const routes: Routes = [
  // { path: ' ', redirectTo: 'index', pathMatch: 'prefix' },
  { path: '', pathMatch: "full", redirectTo: 'index' },
  { path: 'index', component: IndexComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'productDetail/:pid', component: ProductDetailComponent },
  { path: 'userCenter', component: UserCenterComponent },
  { path: '**', component: NotFoundPageComponent }
]

@NgModule({
  imports: [
    // 导入路由模块，并注册路由词典，用于根模块中
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
