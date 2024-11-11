import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidadoTiposComponent } from './consolidado-tipos.component';

describe('ConsolidadoTiposComponent', () => {
  let component: ConsolidadoTiposComponent;
  let fixture: ComponentFixture<ConsolidadoTiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolidadoTiposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsolidadoTiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
