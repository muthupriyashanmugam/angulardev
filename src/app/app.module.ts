import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { FormdifferenceComponent } from './formdifference/formdifference.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { CustomAutocompleteComponent } from './custom-autocomplete/custom-autocomplete.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { EmbedVideoComponent } from './embed-video/embed-video.component';
import { BulkDeleteComponent } from './bulk-delete/bulk-delete.component';
import { CustomAnimationComponent } from './custom-animation/custom-animation.component';
import { InBuiltPipesComponent } from './in-built-pipes/in-built-pipes.component';
import { ObservepromisediffComponent } from './observepromisediff/observepromisediff.component';

import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);

export function highlightJsFactory() {
  return hljs;
}

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductAlertsComponent,
    FormdifferenceComponent,
    CustomAutocompleteComponent,
    CustomDropdownComponent,
    EmbedVideoComponent,
    BulkDeleteComponent,
    CustomAnimationComponent,
    InBuiltPipesComponent,
    ObservepromisediffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: highlightJsFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
