import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridThreePartTwoComponent } from './grid-three-part-two.component';

describe('GridThreePartTwoComponent', () => {
  let component: GridThreePartTwoComponent;
  let fixture: ComponentFixture<GridThreePartTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridThreePartTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridThreePartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
