import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidadoTablesComponent } from './consolidado-tables.component';

describe('ConsolidadoTablesComponent', () => {
  let component: ConsolidadoTablesComponent;
  let fixture: ComponentFixture<ConsolidadoTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsolidadoTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsolidadoTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
