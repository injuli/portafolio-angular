import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebawpComponent } from './pruebawp.component';

describe('PruebawpComponent', () => {
  let component: PruebawpComponent;
  let fixture: ComponentFixture<PruebawpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebawpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebawpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
