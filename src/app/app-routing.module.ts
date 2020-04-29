import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductlistComponent } from '../app/productlist/productlist.component';
import { FormdifferenceComponent } from '../app/formdifference/formdifference.component';
import { CustomAutocompleteComponent } from '../app/custom-autocomplete/custom-autocomplete.component';
import { CustomDropdownComponent } from '../app/custom-dropdown/custom-dropdown.component';
import { EmbedVideoComponent } from '../app/embed-video/embed-video.component';
import { BulkDeleteComponent } from '../app/bulk-delete/bulk-delete.component';
import { CustomAnimationComponent } from '../app/custom-animation/custom-animation.component';

const routes: Routes = [
  { 
  path: '',
  redirectTo: '/bulkdelete',
  pathMatch: 'full'
  },
  {path:'animation',component: CustomAnimationComponent},
  {path:'autocomplete',component: CustomAutocompleteComponent},
  {path:'bulkdelete',component: BulkDeleteComponent},
  {path:'dropdown',component: CustomDropdownComponent},
  {path:'embedvideo',component: EmbedVideoComponent},
  {path:'product',component: ProductlistComponent},
  {path:'forms',component:FormdifferenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
