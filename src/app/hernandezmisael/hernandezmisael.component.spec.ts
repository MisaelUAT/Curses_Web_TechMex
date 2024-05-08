import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HernandezmisaelComponent } from './hernandezmisael.component';

describe('HernandezmisaelComponent', () => {
  let component: HernandezmisaelComponent;
  let fixture: ComponentFixture<HernandezmisaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HernandezmisaelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HernandezmisaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
