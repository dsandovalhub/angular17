import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jssha256Component } from './jssha256.component';

describe('Jssha256Component', () => {
  let component: Jssha256Component;
  let fixture: ComponentFixture<Jssha256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jssha256Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jssha256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
