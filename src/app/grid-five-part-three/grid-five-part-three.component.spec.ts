import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFivePartThreeComponent } from './grid-five-part-three.component';

describe('GridFivePartThreeComponent', () => {
  let component: GridFivePartThreeComponent;
  let fixture: ComponentFixture<GridFivePartThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFivePartThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridFivePartThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
