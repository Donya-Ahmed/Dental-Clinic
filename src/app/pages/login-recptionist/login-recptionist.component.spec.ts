import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRecptionistComponent } from './login-recptionist.component';

describe('LoginRecptionistComponent', () => {
  let component: LoginRecptionistComponent;
  let fixture: ComponentFixture<LoginRecptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRecptionistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRecptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
