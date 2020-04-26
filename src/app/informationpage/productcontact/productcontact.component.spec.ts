import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcontactComponent } from './productcontact.component';

describe('ProductcontactComponent', () => {
  let component: ProductcontactComponent;
  let fixture: ComponentFixture<ProductcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
