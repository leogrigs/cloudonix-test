import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProfileFieldsComponent } from './dynamic-profile-fields.component';

describe('DynamicProfileFieldsComponent', () => {
  let component: DynamicProfileFieldsComponent;
  let fixture: ComponentFixture<DynamicProfileFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicProfileFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicProfileFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
