import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBranchModalComponent } from './create-branch-modal.component';

describe('CreateBranchModalComponent', () => {
  let component: CreateBranchModalComponent;
  let fixture: ComponentFixture<CreateBranchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBranchModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBranchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
