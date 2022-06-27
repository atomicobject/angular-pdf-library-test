import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PspdfkitPageComponent } from './components/pspdfkit-page/pspdfkit-page.component';
import { PdfjsExpressPageComponent } from './components/pdfjs-express-page/pdfjs-express-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerPageComponent } from './components/ngx-extended-pdf-viewer-page/ngx-extended-pdf-viewer-page.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    PspdfkitPageComponent,
    PdfjsExpressPageComponent,
    NgxExtendedPdfViewerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
