import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DefaultLayoutComponent} from './container/default-layout/default-layout.component';
import {LoginLayoutComponent} from './container/login-layout/login-layout.component';

const routes: Routes = [
  {path: '', component: LoginLayoutComponent},

  {
    path: 'admin', component: DefaultLayoutComponent, children: [
      {path: '', loadChildren: './views/dashboard/dashboard.module#DashboardModule'},
      {path: 'quote', loadChildren: './views/quote/quote.module#QuoteModule'},
      {path: 'product', loadChildren: './views/products/products.module#ProductsModule'},
      {path: 'contact', loadChildren: './views/contact/contact.module#ContactModule'},
      {path: 'opportunity', loadChildren: './views/opportunity/opportunity.module#OpportunityModule'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
