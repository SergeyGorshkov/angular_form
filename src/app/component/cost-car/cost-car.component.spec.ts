import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCarComponent } from './cost-car.component';

describe('CostCarComponent', () => {
  let component: CostCarComponent;
  let fixture: ComponentFixture<CostCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
