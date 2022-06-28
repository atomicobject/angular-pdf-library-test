import { Component } from '@angular/core';

type FormData = { [fieldName: string]: string | number | boolean | string[] };

@Component({
  selector: 'app-ngx-extended-pdf-viewer-page',
  templateUrl: './ngx-extended-pdf-viewer-page.component.html',
  styleUrls: ['./ngx-extended-pdf-viewer-page.component.scss']
})
export class NgxExtendedPdfViewerPageComponent {
  circuitCourt = '';
  loaded = false;
  showOpenFileButton = false;

  set formData(data: FormData) {
    this.circuitCourt = data['cir'] as string;
  }

  get formData(): FormData {
    return {
      cir: this.circuitCourt
    };
  }

  onLoaded() {
    this.loaded = true;
  }

  // Event only contains fields that have a value, or have been edited
  onFormDataChange(event: any) {
    console.log(event);
  }

  toggleShowOpenFile() {
    this.showOpenFileButton = !this.showOpenFileButton;
  }
}
