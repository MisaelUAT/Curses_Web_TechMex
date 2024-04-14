import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaCursoComponent } from './plantilla-curso.component';

describe('PlantillaCursoComponent', () => {
  let component: PlantillaCursoComponent;
  let fixture: ComponentFixture<PlantillaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillaCursoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantillaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
