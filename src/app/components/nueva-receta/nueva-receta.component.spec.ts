import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRecetaComponent } from './nueva-receta.component';

describe('NuevaRecetaComponent', () => {
  let component: NuevaRecetaComponent;
  let fixture: ComponentFixture<NuevaRecetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaRecetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
