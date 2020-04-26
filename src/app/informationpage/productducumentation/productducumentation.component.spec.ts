import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductducumentationComponent } from './productducumentation.component';

describe('ProductducumentationComponent', () => {
  let component: ProductducumentationComponent;
  let fixture: ComponentFixture<ProductducumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductducumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductducumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
