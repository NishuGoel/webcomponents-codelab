import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildcustomElementComponent } from './buildcustom-element.component';

describe('BuildcustomElementComponent', () => {
  let component: BuildcustomElementComponent;
  let fixture: ComponentFixture<BuildcustomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildcustomElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildcustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
