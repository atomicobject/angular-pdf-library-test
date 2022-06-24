import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfjsExpressPageComponent } from './pdfjs-express-page.component';

describe('PdfjsExpressPageComponent', () => {
  let component: PdfjsExpressPageComponent;
  let fixture: ComponentFixture<PdfjsExpressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfjsExpressPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfjsExpressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
