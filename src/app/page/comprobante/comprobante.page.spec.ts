import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprobantePage } from './comprobante.page';

describe('ComprobantePage', () => {
  let component: ComprobantePage;
  let fixture: ComponentFixture<ComprobantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
