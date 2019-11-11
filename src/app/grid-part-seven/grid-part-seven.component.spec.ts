import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPartSevenComponent } from './grid-part-seven.component';

describe('GridPartSevenComponent', () => {
  let component: GridPartSevenComponent;
  let fixture: ComponentFixture<GridPartSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPartSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPartSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
