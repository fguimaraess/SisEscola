import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaFormComponent } from './escola-form.component';

describe('EscolaFormComponent', () => {
  let component: EscolaFormComponent;
  let fixture: ComponentFixture<EscolaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
