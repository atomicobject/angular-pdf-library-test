import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxExtendedPdfViewerPageComponent } from './ngx-extended-pdf-viewer-page.component';

describe('NgxExtendedPdfViewerPageComponent', () => {
  let component: NgxExtendedPdfViewerPageComponent;
  let fixture: ComponentFixture<NgxExtendedPdfViewerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxExtendedPdfViewerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxExtendedPdfViewerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
