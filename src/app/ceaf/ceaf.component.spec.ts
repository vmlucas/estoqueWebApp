import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEAFComponent } from './ceaf.component';

describe('CEAFComponent', () => {
  let component: CEAFComponent;
  let fixture: ComponentFixture<CEAFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CEAFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CEAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
