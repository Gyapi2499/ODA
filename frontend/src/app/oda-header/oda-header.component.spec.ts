import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ODAHeaderComponent } from './oda-header.component';

describe('ODAHeaderComponent', () => {
  let component: ODAHeaderComponent;
  let fixture: ComponentFixture<ODAHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ODAHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ODAHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
