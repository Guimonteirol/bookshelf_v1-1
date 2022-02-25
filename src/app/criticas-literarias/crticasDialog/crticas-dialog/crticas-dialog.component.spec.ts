import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrticasDialogComponent } from './crticas-dialog.component';

describe('CrticasDialogComponent', () => {
  let component: CrticasDialogComponent;
  let fixture: ComponentFixture<CrticasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrticasDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrticasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
