import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import {ContatoComponent} from'./views/contato/contato.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

const routes: Routes = [
{
path: "",
component: HomeComponent
},

{
path: "products",
component: ProductCrudComponent
},

{
path:"contato", 
component: ContatoComponent
},

{
 path:"products/create",
 component: ProductCreateComponent
},
{
  path:"products/update/:id", //os ":" serve pra informar que estou passando um parâmetro.
  component: ProductUpdateComponent
 },
 {
   path:"products/delete/:id",
   component: ProductDeleteComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
