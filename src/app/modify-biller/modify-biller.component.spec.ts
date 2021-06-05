import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBillerComponent } from './modify-biller.component';

describe('ModifyBillerComponent', () => {
  let component: ModifyBillerComponent;
  let fixture: ComponentFixture<ModifyBillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyBillerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
