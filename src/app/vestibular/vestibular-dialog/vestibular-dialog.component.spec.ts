import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VestibularDialogComponent } from './vestibular-dialog.component';

describe('VestibularDialogComponent', () => {
  let component: VestibularDialogComponent;
  let fixture: ComponentFixture<VestibularDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VestibularDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VestibularDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
