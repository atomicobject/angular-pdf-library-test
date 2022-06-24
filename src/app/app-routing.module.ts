import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PspdfkitPageComponent } from './components/pspdfkit-page/pspdfkit-page.component';
import { PdfjsExpressPageComponent } from './components/pdfjs-express-page/pdfjs-express-page.component';

const routes: Routes = [
  { path: 'pspdfkit', component: PspdfkitPageComponent },
  { path: 'pdfjs-express', component: PdfjsExpressPageComponent },
  { path: '', redirectTo: '/pspdfkit', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
