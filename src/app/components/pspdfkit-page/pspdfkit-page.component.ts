import { Component } from '@angular/core';
import PSPDFKit, { Instance } from 'pspdfkit';

@Component({
  selector: 'app-pspdfkit-page',
  templateUrl: './pspdfkit-page.component.html',
  styleUrls: ['./pspdfkit-page.component.scss']
})
export class PspdfkitPageComponent {
  instance: Instance | undefined;

  ngAfterViewInit() {
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + '//' + location.host + '/assets/',
      document: '/assets/cc219b.pdf',
      container: '#pspdfkit-container',
    }).then(instance => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;
      this.instance = instance;
    });
  }
}
