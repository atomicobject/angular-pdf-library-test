import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PspdfkitPageComponent } from './pspdfkit-page.component';

describe('PspdfkitPageComponent', () => {
  let component: PspdfkitPageComponent;
  let fixture: ComponentFixture<PspdfkitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PspdfkitPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PspdfkitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
