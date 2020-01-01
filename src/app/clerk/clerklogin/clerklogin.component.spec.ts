import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClerkloginComponent } from './clerklogin.component';

describe('ClerkloginComponent', () => {
  let component: ClerkloginComponent;
  let fixture: ComponentFixture<ClerkloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClerkloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClerkloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
