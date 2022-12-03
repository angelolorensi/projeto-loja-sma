import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoletonsComponent } from './moletons.component';

describe('MoletonsComponent', () => {
  let component: MoletonsComponent;
  let fixture: ComponentFixture<MoletonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoletonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoletonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
