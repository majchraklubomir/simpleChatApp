import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAreaComponent } from './grid-area.component';

describe('GridAreaComponent', () => {
  let component: GridAreaComponent;
  let fixture: ComponentFixture<GridAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridAreaComponent]
    });
    fixture = TestBed.createComponent(GridAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
