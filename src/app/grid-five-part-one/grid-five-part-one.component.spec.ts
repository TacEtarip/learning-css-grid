import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFivePartOneComponent } from './grid-five-part-one.component';

describe('GridFivePartOneComponent', () => {
  let component: GridFivePartOneComponent;
  let fixture: ComponentFixture<GridFivePartOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFivePartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFivePartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
