import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pbkdf2Component } from './pbkdf2.component';

describe('Pbkdf2Component', () => {
  let component: Pbkdf2Component;
  let fixture: ComponentFixture<Pbkdf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pbkdf2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pbkdf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
