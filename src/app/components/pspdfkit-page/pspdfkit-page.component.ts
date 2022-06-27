import { Component } from '@angular/core';
import PSPDFKit, { FormField, Instance } from 'pspdfkit';

@Component({
  selector: 'app-pspdfkit-page',
  templateUrl: './pspdfkit-page.component.html',
  styleUrls: ['./pspdfkit-page.component.scss']
})
export class PspdfkitPageComponent {
  instance: Instance | undefined;
  circuitCourt: string = '';

  ngAfterViewInit() {
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + '//' + location.host + '/assets/',
      document: '/assets/cc219b.pdf',
      container: '#pspdfkit-container',
    }).then(async (instance: Instance) => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      (window as any).instance = instance;
      this.instance = instance;
      instance.addEventListener('formFieldValues.update', (formFields) => {
        const circuitField = formFields.toJS().find(f => f.name === 'cir');
        console.log('cir value: ', circuitField.value);
        this.circuitCourt = circuitField.value;
      });
      instance.getFormFields().then(function (formFields) {
        console.log('All form fields', formFields.toJS());
        console.log(formFields.toJS().find(f => f.name === 'cir'));
      });
    });
  }
}
