import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) {
  }

  public navToPspdfkit() {
    this.router.navigate(['/pspdfkit']);
  }

  public navToPdfjsExpress() {
    this.router.navigate(['/pdfjs-express']);
  }
}
