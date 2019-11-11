import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPartOneComponent } from './grid-part-one.component';

describe('GridPartOneComponent', () => {
  let component: GridPartOneComponent;
  let fixture: ComponentFixture<GridPartOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPartOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPartOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
