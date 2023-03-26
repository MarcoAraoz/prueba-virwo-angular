import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSpinComponent } from './load-spin.component';

describe('LoadSpinComponent', () => {
  let component: LoadSpinComponent;
  let fixture: ComponentFixture<LoadSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
