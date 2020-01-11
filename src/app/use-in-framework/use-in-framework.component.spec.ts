import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseInFrameworkComponent } from './use-in-framework.component';

describe('UseInFrameworkComponent', () => {
  let component: UseInFrameworkComponent;
  let fixture: ComponentFixture<UseInFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseInFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseInFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
