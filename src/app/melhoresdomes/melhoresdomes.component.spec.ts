import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresdomesComponent } from './melhoresdomes.component';

describe('MelhoresdomesComponent', () => {
  let component: MelhoresdomesComponent;
  let fixture: ComponentFixture<MelhoresdomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelhoresdomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresdomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
