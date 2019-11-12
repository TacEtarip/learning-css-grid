import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSixPartOneComponent } from './grid-six-part-one.component';

describe('GridSixPartOneComponent', () => {
  let component: GridSixPartOneComponent;
  let fixture: ComponentFixture<GridSixPartOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSixPartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSixPartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
