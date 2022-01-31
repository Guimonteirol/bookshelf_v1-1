import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticasLiterariasComponent } from './criticas-literarias.component';

describe('CriticasLiterariasComponent', () => {
  let component: CriticasLiterariasComponent;
  let fixture: ComponentFixture<CriticasLiterariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticasLiterariasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticasLiterariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
