import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PspdfkitPageComponent } from './components/pspdfkit-page/pspdfkit-page.component';
import { PdfjsExpressPageComponent } from './components/pdfjs-express-page/pdfjs-express-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PspdfkitPageComponent,
    PdfjsExpressPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
