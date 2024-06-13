import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncrypComponent } from './encryp.component';

describe('EncrypComponent', () => {
  let component: EncrypComponent;
  let fixture: ComponentFixture<EncrypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncrypComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncrypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
