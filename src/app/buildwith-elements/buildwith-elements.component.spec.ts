import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildwithElementsComponent } from './buildwith-elements.component';

describe('BuildwithElementsComponent', () => {
  let component: BuildwithElementsComponent;
  let fixture: ComponentFixture<BuildwithElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildwithElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildwithElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
