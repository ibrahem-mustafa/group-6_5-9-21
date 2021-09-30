import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesListItemComponent } from './branches-list-item.component';

describe('BranchesListItemComponent', () => {
  let component: BranchesListItemComponent;
  let fixture: ComponentFixture<BranchesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
