import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashDemoComponent } from './hash-demo.component';

describe('HashDemoComponent', () => {
  let component: HashDemoComponent;
  let fixture: ComponentFixture<HashDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HashDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
