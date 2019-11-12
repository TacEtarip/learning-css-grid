import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFivePartTwoComponent } from './grid-five-part-two.component';

describe('GridFivePartTwoComponent', () => {
  let component: GridFivePartTwoComponent;
  let fixture: ComponentFixture<GridFivePartTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFivePartTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFivePartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
