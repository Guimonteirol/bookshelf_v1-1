import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagasDialogComponent } from './sagas-dialog.component';

describe('SagasDialogComponent', () => {
  let component: SagasDialogComponent;
  let fixture: ComponentFixture<SagasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagasDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
