import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameOfComponentComponent } from './name-of-component.component';

describe('NameOfComponentComponent', () => {
  let component: NameOfComponentComponent;
  let fixture: ComponentFixture<NameOfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameOfComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameOfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
