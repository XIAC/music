import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaModalComponent } from './artista-modal.component';

describe('ArtistaModalComponent', () => {
  let component: ArtistaModalComponent;
  let fixture: ComponentFixture<ArtistaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
