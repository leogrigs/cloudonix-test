import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFieldsComponent } from './profile-fields.component';

describe('ProfileFieldsComponent', () => {
  let component: ProfileFieldsComponent;
  let fixture: ComponentFixture<ProfileFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProfileFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
