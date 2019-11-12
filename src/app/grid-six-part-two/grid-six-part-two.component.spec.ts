import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSixPartTwoComponent } from './grid-six-part-two.component';

describe('GridSixPartTwoComponent', () => {
  let component: GridSixPartTwoComponent;
  let fixture: ComponentFixture<GridSixPartTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSixPartTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSixPartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
