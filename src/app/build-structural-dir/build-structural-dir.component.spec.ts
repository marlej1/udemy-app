import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildStructuralDirComponent } from './build-structural-dir.component';

describe('BuildStructuralDirComponent', () => {
  let component: BuildStructuralDirComponent;
  let fixture: ComponentFixture<BuildStructuralDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildStructuralDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildStructuralDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
